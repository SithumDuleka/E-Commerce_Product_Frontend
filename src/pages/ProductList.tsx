import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import Test1 from "../components/addProductSample";
import { PulseLoader } from "../components/LoaderAnimation";
import type { Product } from "../types/Product"; // update this path if needed
import SearchBar from "../components/SearchBar";

const ProductList = () => {
  const { products, loading, error, fetchProducts } = useProducts();
  const [searchTerm, setSearchTerm] = useState<string>("");

  if (loading) return <PulseLoader />;
  if (error) return <div>{error}</div>;

  

  const filteredProducts = products.filter((product: Product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-200">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-14 text-center tracking-tight drop-shadow-lg">
        <span className="bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent">
          E Commerce Store
        </span>
      </h1>

      <div className="flex items-center justify-between mb-8 gap-4">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={(value) => setSearchTerm(value)}
        />
      </div>
      <Test1 updateUI={fetchProducts} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <div className="text-center text-gray-600 mt-10">
          No products found.
        </div>
      )}
    </div>
  );
};

export default ProductList;
