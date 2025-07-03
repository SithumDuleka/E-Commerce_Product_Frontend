import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import { supabase } from '../api/supabaseClient';
import type { Product,Variant } from '../types/ProductForm';

interface Props{
    updateUI: ()=>void
}

const ProductForm = ({updateUI}:Props) => {
//   const [product, setProduct] = useState<Product>({
//     name: '',
//     description: '',
//     base_price: '',
//     thumbnail: '',
//     thumbnailFile: null,
//     label: '',
//     variants: [{ color: '', size: '', price: '', image: '', imageFile: null }]
//   });
    const[product,setProduct] = useState<Product>({
  name: '',
  description: '',
  base_price: 0,
  thumbnail: '',
  thumbnailFile: null,
  label: '',
  variants: [{ color: '', size: '', price: '', image: '', imageFile: null }]
});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleThumbnailChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setProduct((prev) => ({ ...prev, thumbnailFile: e.target.files![0] }));
    }
  };

  const handleVariantChange = (index: number, field: keyof Variant, value: string | File | null) => {
    const updated = [...product.variants];
    if (field === 'imageFile' && (value instanceof File || value === null)) {
      updated[index][field] = value as File | null;
    } else if (typeof value === 'string' && field !== 'imageFile') {
      updated[index][field] = value as string;
    }
    setProduct((prev) => ({ ...prev, variants: updated }));
  };

  const addVariant = () => {
    setProduct((prev) => ({
      ...prev,
      variants: [...prev.variants, { color: '', size: '', price: '', imageFile: null }]
    }));
  };

  const removeVariant = (index: number) => {
    setProduct((prev) => ({
      ...prev,
      variants: prev.variants.filter((_, i) => i !== index)
    }));
  };

  const uploadImage = async (file: File, folder = 'product-images'): Promise<string | null> => {
  const ext = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}.${ext}`;
  const filePath = `${folder}/${fileName}`;

  const { error: uploadError } = await supabase.storage.from('product-images').upload(filePath, file);
  if (uploadError) {
    console.error('❌ Upload error:', uploadError);
    return null;
  }

  const { data,  } = supabase.storage.from('product-images').getPublicUrl(filePath);
//   if (urlError) {
//     console.error('❌ URL error:', urlError);
//     return null;
//   }

  console.log('✅ Uploaded path:', filePath);
  console.log('🌐 Public URL:', data.publicUrl);

  return data?.publicUrl || null;
};


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    let thumbnailUrl = product.thumbnail;
    if (product.thumbnailFile) {
      const uploaded = await uploadImage(product.thumbnailFile, 'thumbnails');
      if (uploaded) thumbnailUrl = uploaded;
    }

    const updatedVariants = await Promise.all(
      product.variants.map(async (v) => {
        if (v.imageFile) {
          const imgUrl = await uploadImage(v.imageFile, 'variants');
          return { ...v, image: imgUrl || '' };
        }
        return v;
      })
    );

    const payload = {
      name: product.name,
      description: product.description,
      base_price: Number(product.base_price),
      thumbnail: thumbnailUrl,
      label: product.label,
      variants: updatedVariants.map(({ imageFile, ...rest }) => rest)
    };

    console.log('🔁 Payload to backend:', payload);

    // Send to backend
    try {
      const res = await fetch('http://localhost:4000/api/products/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const json = await res.json();
      console.log('✅ Success:', json);
      updateUI();
    } catch (err) {
      console.error('❌ Error posting product:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Product Name" value={product.name} onChange={handleInputChange} required />
      <textarea name="description" placeholder="Description" value={product.description} onChange={handleInputChange} />
      <input name="base_price" placeholder="Base Price" value={product.base_price} onChange={handleInputChange} required />
      <input type="file" onChange={handleThumbnailChange} />
      <input name="label" placeholder="Label" value={product.label} onChange={handleInputChange} />

      <h4>Variants</h4>
      {product.variants.map((variant, index) => (
        <div key={index}>
          <input
            placeholder="Color"
            value={variant.color}
            onChange={(e) => handleVariantChange(index, 'color', e.target.value)}
          />
          <input
            placeholder="Size"
            value={variant.size}
            onChange={(e) => handleVariantChange(index, 'size', e.target.value)}
          />
          <input
            placeholder="Price"
            type="number"
            value={variant.price}
            onChange={(e) => handleVariantChange(index, 'price', e.target.value)}
          />
          <input
            type="file"
            onChange={(e) => {
              if (e.target.files?.length) {
                handleVariantChange(index, 'imageFile', e.target.files[0]);
              }
            }}
          />
          <button type="button" onClick={() => removeVariant(index)}>Remove Variant</button>
        </div>
      ))}

      <button type="button" onClick={addVariant}>Add Variant</button>
      <br /><br />
      <button type="submit" >Submit Product</button>
    </form>
  );
};

export default ProductForm;
