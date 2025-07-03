import { useState } from "react";
import { useProductForm } from "../hooks/useProductForm"; 
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
  } = useProductForm(updateUI); 

  return (
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
