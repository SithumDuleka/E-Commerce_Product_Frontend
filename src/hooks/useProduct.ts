// src/hooks/useProduct.ts
import { useEffect, useState } from "react";
import { getProductByID } from "../api/productService";
import type { Product } from "../types/Product";


export const useProduct = (id: string) => {
  const [product, setProduct] = useState<Product| null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    getProductByID(id)
      .then((data) => {
        setProduct(data);
        setError(null);
      })
      .catch(() => setError("Failed to load product"))
      .finally(() => setLoading(false));
  }, [id]);

  return { product, loading, error };
};
