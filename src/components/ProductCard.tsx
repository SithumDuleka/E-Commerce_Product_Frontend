import { Link } from "react-router-dom";
import type { Product } from "../types/Product";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div
      key={product.id}
      className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-blue-400 relative flex flex-col"
    >
      <div className="relative overflow-hidden h-60 flex items-center justify-center bg-gradient-to-t from-blue-100 to-white">
        <img
        //   src={`/assets/${product.thumbnail}`}
        src={`https://cvgyyvcckyppgwhuviac.supabase.co/storage/v1/object/public/product-images/${product.thumbnail}`}
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.239-4.5-5-4.5-1.54 0-2.882.805-3.625 2.018C11.882 4.555 10.54 3.75 9 3.75c-2.761 0-5 2.015-5 4.5 0 7.25 8 12.5 8 12.5s8-5.25 8-12.5z"
              />
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
          <span className="text-base text-gray-400 font-normal align-bottom">
            $
          </span>
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
  );
};
export default ProductCard;
