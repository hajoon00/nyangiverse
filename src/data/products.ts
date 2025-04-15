export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  category: 'clothing' | 'accessories' | 'home' | 'posters';
}

export const products: Product[] = [
  {
    id: 1,
    name: "Hasom Hoodie",
    price: 24.99,
    imageUrl: "/mockup/hoodie-hasom-navy.jpg",
    description: "Comfortable cotton t-shirt featuring our pixel art cats",
    category: 'clothing'
  },
  
  {
    id: 2,
    name: "Haron Hoodie",
    price: 39.99,
    imageUrl: "/mockup/hoodie-haron-gray.jpg",
    description: "Cozy hoodie with pixel art cat designs",
    category: 'clothing'
  },
  {
    id: 3,
    name: "Haron in Mug on Mug",
    price: 14.99,
    imageUrl: "/mockup/mug-haron.jpg",
    description: "Ceramic mug with Haron in a mug",
    category: 'home'
  },
  {
    id: 4,
    name: "Hasom in Mug on Mug",
    price: 14.99,
    imageUrl: "/mockup/mug-hasom.jpg",
    description: "Ceramic mug with Hasom in a mug",
    category: 'home'
  },
  {
    id: 5,
    name: "I-Want-To Sticker",
    price: 9.99,
    imageUrl: "/mockup/i-want-to-sticker.jpg",
    description: "Set of 2 i-Want-Tostickers",
    category: 'accessories'
  },
  {
    id: 6,
    name: "Pawprint-sticker",
    price: 19.99,
    imageUrl: "/mockup/pawprint-sticker.jpg",
    description: "Set of 2 pawprint-sticker",
    category: 'accessories'
  },
  {
    id: 7,
    name: "MEOOOWWW Poster",
    price: 12.99,
    imageUrl: "/mockup/poster-meme.jpg",
    description: "Poster with Haron and Hasom Meowing",
    category: 'posters'
  },
  {
    id: 8,
    name: "Hug Rug",
    price: 29.99,
    imageUrl: "/mockup/hug-rug.jpg",
    description: "Loveful Hug Rug with Haron and Hasom Hugging each other",
    category: 'home'
  },
  {
    id: 9,
    name: "Hasom Poster",
    price: 11.99,
    imageUrl: "/mockup/poster-hasom.jpg",
    description: "Poster with pixel art cat designs",
    category: 'posters'
  },
  {
    id: 10,
    name: "Haron Poster",
    price: 11.99,
    imageUrl: "/mockup/poster-haron.jpg",
    description: "Poster with pixel art cat designs",
    category: 'posters'
  }
]; 