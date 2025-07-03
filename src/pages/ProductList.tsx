import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import Test1 from "../components/addProductSample";
import { PulseLoader } from "../components/LoaderAnimation";

const ProductList = () => {
  const { products, loading, error, fetchProducts } = useProducts();
  console.log(products);
  if (loading) return <PulseLoader></PulseLoader>;
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {products.map((product) => (
          <ProductCard product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
