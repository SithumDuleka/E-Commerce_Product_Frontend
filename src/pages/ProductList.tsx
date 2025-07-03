import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import Test1 from "../components/addProductSample";

const ProductList = () => {
  const { products, loading, error, fetchProducts } = useProducts();
  console.log(products);
  if (loading) return <div>Loading products...</div>;
  if (error) return <div>{error}</div>;
 

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-200">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-14 text-center tracking-tight drop-shadow-lg">
        <span className="bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent">
          E Commerce Store
        </span>
      </h1>
      {/* <ProductForm updateUI={fetchProducts}></ProductForm> */}
      <Test1 updateUI={fetchProducts}></Test1>

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
          <ProductCard product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
