import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProduct } from "../hooks/useProduct";
import VariantSelector from "../components/VariantSelector";
import { PulseLoader } from "../components/LoaderAnimation";


interface Variant {
  id: number;
  color?: string;
  size?: string;
  price?: number;
  image?: string;
}

const ProductDetail = () => {
  const { id } =useParams<{id:string}>();
  const {product,loading,error} = useProduct(id!);
  const [variant, setVariant] = useState<Variant | null>(null);

  useEffect(() => {
  if (product?.variant.length) {
    setVariant(product.variant[0]);
  }
}, [product]);
if (loading) return<PulseLoader></PulseLoader>;
if (error) return <div>Error loading product</div>;
if (!product || !variant)
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <span className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></span>
        <span className="text-lg text-gray-600 font-medium animate-pulse">
          Loading product details...
        </span>
      </div>
    </div>
  );

  return (
    <VariantSelector product={product} variant={variant} setVariant={setVariant}></VariantSelector>
  );
};

export default ProductDetail;
