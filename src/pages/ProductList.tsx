import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface Variant {
  name: string;
  image: string;
  price: number;
}

interface Product {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
  label?: string;
  variants: Variant[];
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
  const fetchProducts = async () => {
  try {
    const response = await axios.get("http://localhost:4000/api/products");
    console.log("Fetched data:", response.data); // 👈 log to inspect
    setProducts(response.data.data);
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
};


    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Product List
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            <div className="relative overflow-hidden">
              <img
                src={product.thumbnail}
                alt={product.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {product.label && (
                <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {product.label}
                </div>
              )}
            </div>

            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {product.name}
              </h2>

              <p className="text-2xl font-bold text-gray-900 mb-4">
                <span className="text-sm text-gray-500 font-normal">$</span>
                {product.price}
              </p>

              <Link
                to={`/product/${product.id}`}
                className="block w-full bg-gray-900 text-white text-center py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
