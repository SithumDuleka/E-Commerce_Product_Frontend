export interface Variant {
  name: string;
  price: number;
  image: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  label: string;
  thumbnail: string;
  variants: Variant[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Cool T-Shirt",
    description: "Very comfortable t-shirt.",
    price: 25,
    label: "20% OFF",
    thumbnail: "https://via.placeholder.com/150",
    variants: [
      {
        name: "Red",
        price: 25,
        image: "https://via.placeholder.com/300/FF0000/FFFFFF"
      },
      {
        name: "Blue",
        price: 27,
        image: "https://via.placeholder.com/300/0000FF/FFFFFF"
      }
    ]
  },
  {
    id: 2,
    name: "Sneakers",
    description: "Nice walking shoes.",
    price: 50,
    label: "New Arrival",
    thumbnail: "https://via.placeholder.com/150",
    variants: [
      {
        name: "Black",
        price: 50,
        image: "https://via.placeholder.com/300/000000/FFFFFF"
      },
      {
        name: "White",
        price: 55,
        image: "https://via.placeholder.com/300/FFFFFF/000000"
      }
    ]
  }
];

export default products;
