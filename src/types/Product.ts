export interface Variant {
  id: number;
  color?: string;
  size?: string;
  price?: number;
  image?: string;
}

export interface Product {
  id: number;
  name: string;
  description?: string | null;
  base_price: number;
  thumbnail?: string | null;
  label?: string | null;
  variant: Variant[];
}
