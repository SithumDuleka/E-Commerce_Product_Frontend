// src/hooks/useProducts.ts
import { useEffect, useState } from "react";

import { getAllProducts } from "../api/productService";
import type { Product } from "../types/Product";


export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        setProducts(data);
        setError(null);
      })
      .catch(() => setError("Failed to load products"))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
};
