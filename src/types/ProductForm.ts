export interface Variant {
  color: string;
  size: string;
  price: number | string;
  image?: string;
  imageFile?: File | null;
}

export interface Product {
  name: string;
  description: string;
  base_price: number | string;
  thumbnail?: string;
  thumbnailFile?: File | null;
  label?: string;
  variants: Variant[];
}
