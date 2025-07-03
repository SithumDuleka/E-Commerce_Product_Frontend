import { useState, type ChangeEvent, type FormEvent } from "react";
import type { Product, Variant } from "../types/ProductForm";
import { uploadImage } from "../utils/uploadImage";

export const useProductForm = (
  updateUI: () => void,
  isUpdate = false,
  productId?: number
) => {
  const [product, setProduct] = useState<Product>({
    name: "",
    description: "",
    base_price: 0,
    thumbnail: "",
    thumbnailFile: null,
    label: "",
    variants: [
      {
        color: "",
        size: "",
        price: "",
        image: "",
        imageFile: null,
      },
    ],
  });

  // Handle text input fields (base info)
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: name === "base_price" ? Number(value) : value,
    }));
  };

  // Handle file input for thumbnail
  const handleThumbnailChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setProduct((prev) => ({
        ...prev,
        thumbnailFile: e.target.files![0],
      }));
    }
  };

  // Handle variant field changes
  const handleVariantChange = (
    index: number,
    field: keyof Variant,
    value: string | File | null
  ) => {
    const updated = [...product.variants];
    updated[index][field] = value as never;

    setProduct((prev) => ({
      ...prev,
      variants: updated,
    }));
  };

  // ➕ Add new variant block
  const addVariant = () => {
    setProduct((prev) => ({
      ...prev,
      variants: [
        ...prev.variants,
        { color: "", size: "", price: "", image: "", imageFile: null },
      ],
    }));
  };

  // ❌ Remove a specific variant by index
  const removeVariant = (index: number) => {
    setProduct((prev) => ({
      ...prev,
      variants: prev.variants.filter((_, i) => i !== index),
    }));
  };

  // 🧾 Submit form
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    let thumbnailUrl = product.thumbnail;

    if (product.thumbnailFile) {
      const uploaded = await uploadImage(product.thumbnailFile, "thumbnails");
      if (uploaded) thumbnailUrl = uploaded;
    }

    const updatedVariants = await Promise.all(
      product.variants.map(async (variant) => {
        if (variant.imageFile) {
          const uploaded = await uploadImage(variant.imageFile, "variants");
          return { ...variant, image: uploaded || "" };
        }
        return variant;
      })
    );

    const payload = {
      name: product.name,
      description: product.description,
      base_price: product.base_price,
      thumbnail: thumbnailUrl,
      label: product.label,
      variants: updatedVariants.map(({ imageFile, ...rest }) => rest),
    };

    const url = isUpdate
      ? `http://localhost:4000/api/products/${productId}`
      : "http://localhost:4000/api/products/create";

    try {
      const res = await fetch(url, {
        method: isUpdate ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      console.log("✅ Product created/updated:", result);
      updateUI();
    } catch (err) {
      console.error("❌ Error:", err);
    }
  };

  return {
    product,
    handleInputChange,
    handleThumbnailChange,
    handleVariantChange,
    addVariant,
    removeVariant,
    handleSubmit,
  };
};
