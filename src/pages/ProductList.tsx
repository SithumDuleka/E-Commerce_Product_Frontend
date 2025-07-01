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
  base_price: number;
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
    <div className="container mx-auto px-6 py-12 min-h-screen bg-gradient-to-br from-gray-50 to-blue-100">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-12 text-center tracking-tight drop-shadow-lg">
        Product List
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          console.log("Fetched Data",product),
          <div
            key={product.id}
            className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-200 hover:border-blue-400 relative"
          >
            <div className="relative overflow-hidden h-56 flex items-center justify-center bg-gradient-to-t from-blue-100 to-white">
              <img
                src={product.thumbnail}
                alt={product.name}
                className="w-40 h-40 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-md"
              />
              {product.label && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md tracking-wide animate-pulse">
                  {product.label}
                </div>
              )}
            </div>

            <div className="p-6 flex flex-col gap-2">
              <h2 className="text-xl font-bold text-gray-900 mb-1 line-clamp-2 group-hover:text-blue-700 transition-colors tracking-tight">
                {product.name}
              </h2>

              <p className="text-2xl font-extrabold text-blue-700 mb-3 flex items-end gap-1">
                <span className="text-base text-gray-400 font-normal align-bottom">$</span>
                {product.base_price}
              </p>

              <Link
                to={`/product/${product.id}`}
                className="mt-2 block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-xl font-semibold shadow hover:from-blue-700 hover:to-purple-700 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
              >
                View Details
              </Link>
            </div>
            <div className="absolute inset-0 pointer-events-none group-hover:bg-blue-50/30 transition-colors duration-300 rounded-3xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
