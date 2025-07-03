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
    <div className="flex justify-end pr-8 py-4 px-4">
        <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2.5 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
        >
            <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Add Product
        </button>
    </div>

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
