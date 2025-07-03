// src/hooks/useProducts.ts
import { useCallback, useEffect, useState } from "react";

import { getAllProducts } from "../api/productService";
import type { Product } from "../types/Product";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(() => {
    getAllProducts()
      .then((data) => {
        console.log("1");
        setProducts(data);
        setError(null);
      })
      .catch(() => setError("Failed to load products"))
      .finally(() => setLoading(false));
  },[]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  
  return { products, loading, error,fetchProducts };
};
