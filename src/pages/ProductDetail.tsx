import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProduct } from "../hooks/useProduct";
import VariantSelector from "../components/VariantSelector";


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
if (loading) return <div>Loading...</div>;
if (error) return <div>Error loading product</div>;
if (!product || !variant) return <div>Product not found</div>;



  // const { id } = useParams<{ id: string }>();
  // const [product, setProduct] = useState<Product | null>(null);
  // const [variant, setVariant] = useState<Variant | null>(null);

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:4000/api/products/${id}`
  //       );
  //       const product = response.data?.data; // <-- safely extract `data`
  //       console.log("Fetched product:", product); // ✅ log to inspect

  //       setProduct(product);

  //       if (product?.variant && product.variant.length > 0) {
  //         setVariant(product.variant[0]);
  //       }
  //     } catch (error) {
  //       console.error("Failed to fetch product:", error);
  //     }
  //   };

  //   fetchProduct();
  // }, [id]);

  // if (!product || !variant)
  //   return <div className="text-center mt-10">Loading...</div>;

  return (
    <VariantSelector product={product} variant={variant} setVariant={setVariant}></VariantSelector>
  );
};

export default ProductDetail;
