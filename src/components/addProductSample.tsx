import React, { useState } from "react";
import { useProductForm } from "../hooks/useProductForm"; // make sure this path is correct
import AddProductForm from "./AddProductForm";

interface Props {
  updateUI: () => void;
}

const Test1 = ({ updateUI }: Props) => {
const [showModal, setShowModal] = useState(false);

  const {
    product,
    handleInputChange,
    handleThumbnailChange,
    handleVariantChange,
    addVariant,
    removeVariant,
    handleSubmit,
  } = useProductForm(updateUI); // ✅ using the hook properly

  return (
    
    // <form onSubmit={handleSubmit}>
    //   <input name="name" placeholder="Product Name" value={product.name} onChange={handleInputChange} required />
    //   <textarea name="description" placeholder="Description" value={product.description} onChange={handleInputChange} />
    //   <input name="base_price" placeholder="Base Price" value={product.base_price} onChange={handleInputChange} required />
    //   <input type="file" onChange={handleThumbnailChange} />
    //   <input name="label" placeholder="Label" value={product.label} onChange={handleInputChange} />

    //   <h4>Variants</h4>
    //   {product.variants.map((variant, index) => (
    //     <div key={index}>
    //       <input placeholder="Color" value={variant.color} onChange={(e) => handleVariantChange(index, 'color', e.target.value)} />
    //       <input placeholder="Size" value={variant.size} onChange={(e) => handleVariantChange(index, 'size', e.target.value)} />
    //       <input placeholder="Price" type="number" value={variant.price} onChange={(e) => handleVariantChange(index, 'price', e.target.value)} />
    //       <input
    //         type="file"
    //         onChange={(e) => {
    //           if (e.target.files?.length) {
    //             handleVariantChange(index, 'imageFile', e.target.files[0]);
    //           }
    //         }}
    //       />
    //       <button type="button" onClick={() => removeVariant(index)}>Remove Variant</button>
    //     </div>
    //   ))}
    //   <button type="button" onClick={addVariant}>Add Variant</button>
    //   <br /><br />
    //   <button type="submit">Submit Product</button>
    // </form>
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Add Product
      </button>

      {showModal && (
        <AddProductForm
          product={product}
          handleInputChange={handleInputChange}
          handleThumbnailChange={handleThumbnailChange}
          handleVariantChange={handleVariantChange}
          addVariant={addVariant}
          removeVariant={removeVariant}
          handleSubmit={handleSubmit}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default Test1;
