import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useProducts } from "../hooks/useProducts";

// interface Variant {
//   name: string;
//   image: string;
//   price: number;
// }

// interface Product {
//   id: number;
//   name: string;
//   base_price: number;
//   thumbnail: string;
//   description:string;
//   label?: string;
//   variants: Variant[];
// }

const ProductList = () => {
  const {products,loading,error} = useProducts();
  console.log(products);
    if (loading) return <div>Loading products...</div>;
  if (error) return <div>{error}</div>;
  // const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:4000/api/products");
  //       console.log("Fetched data:", response.data); // 👈 log to inspect
  //       setProducts(response.data.data);
  //     } catch (error) {
  //       console.error("Failed to fetch products:", error);
  //     }
  //   };

  //   fetchProducts();
  // },[]);

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-200">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-14 text-center tracking-tight drop-shadow-lg">
        <span className="bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent">E Commerce Store</span>
      </h1>
      
      {/* <div className="flex justify-center mb-10">
        <span className="inline-flex items-center gap-3 px-10 py-3 rounded-2xl border border-[#1A1A1A] bg-white/90 shadow-lg text-[#1A1A1A] text-base font-semibold tracking-tight hover:shadow-xl transition-all">
          <svg className="w-6 h-6 text-[#6C47FF]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" />
          </svg>
          <span className="font-bold text-transparent bg-gradient-to-r from-[#6C47FF] to-[#00D1FF] bg-clip-text">
        Powered by Shogun: Build beautiful commerce experiences
          </span>
        </span>
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-blue-400 relative flex flex-col"
          >
            <div className="relative overflow-hidden h-60 flex items-center justify-center bg-gradient-to-t from-blue-100 to-white">
              <img
                src={`/assets/${product.thumbnail}`}
                alt={product.name}
                className="w-44 h-44 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
              />
              {product.label && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md tracking-wide animate-pulse">
                  {product.label}
                </div>
              )}
              <div className="absolute top-4 right-4">
                <button className="bg-white/80 hover:bg-blue-100 rounded-full p-2 shadow-md transition-colors">
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6 text-blue-500'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M21 8.25c0-2.485-2.239-4.5-5-4.5-1.54 0-2.882.805-3.625 2.018C11.882 4.555 10.54 3.75 9 3.75c-2.761 0-5 2.015-5 4.5 0 7.25 8 12.5 8 12.5s8-5.25 8-12.5z' />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-7 flex flex-col gap-2 flex-1">
              <h2 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2 group-hover:text-blue-700 transition-colors tracking-tight">
                {product.name}
               
              </h2>
                 {product.description}
              <p className="text-2xl font-extrabold text-blue-700 mb-3 flex items-end gap-1">
                <span className="text-base text-gray-400 font-normal align-bottom">$</span>
                {product.base_price}
              </p>

              <Link
                to={`/product/${product.id}`}
                className="mt-auto block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-xl font-semibold shadow hover:from-blue-700 hover:to-purple-700 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
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
