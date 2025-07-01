import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface Variant {
  name: string;
  image: string;
  price: number;
}

interface Product {
  id: number;
  name: string;
  description: string;
  variant: Variant[];
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [variant, setVariant] = useState<Variant | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/products/${id}`
        );
        const product = response.data?.data; // <-- safely extract `data`
        console.log("Fetched product:", product); // ✅ log to inspect

        setProduct(product);

        if (product?.variant && product.variant.length > 0) {
          setVariant(product.variant[0]);
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product || !variant)
    return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h1>
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {product.description}
      </p>

      <div className="mb-6">
        <img
          src={variant.image}
          alt={variant.name}
          className="w-full h-72 object-cover rounded-xl shadow-md"
        />
      </div>

      <p className="text-2xl font-semibold text-gray-900 mb-6">
        <span className="text-lg text-gray-500">Price: </span>${variant.price}
      </p>

      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Select Variant:
      </h3>

      <div className="flex flex-wrap gap-2 mb-8">
        {product.variant.map((v) => (
          <button
            key={v.name}
            onClick={() => setVariant(v)}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
              variant.name === v.name
                ? "bg-blue-500 text-white shadow-lg transform scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md"
            }`}
          >
            {v.name}
          </button>
        ))}
      </div>

      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
