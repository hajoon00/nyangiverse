export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  category: 'clothing' | 'accessories' | 'home' | 'digital';
}

export const products: Product[] = [
  {
    id: 1,
    name: "Nyangiverse T-Shirt",
    price: 24.99,
    imageUrl: "/images/merch/tshirt.jpg",
    description: "Comfortable cotton t-shirt featuring our pixel art cats",
    category: 'clothing'
  },
  {
    id: 2,
    name: "Cat Mug",
    price: 14.99,
    imageUrl: "/images/merch/mug.jpg",
    description: "Ceramic mug with peaceful cat designs",
    category: 'home'
  },
  {
    id: 3,
    name: "Nyangiverse Hoodie",
    price: 39.99,
    imageUrl: "/images/merch/hoodie.jpg",
    description: "Cozy hoodie with pixel art cat designs",
    category: 'clothing'
  },
  {
    id: 4,
    name: "Sticker Pack",
    price: 9.99,
    imageUrl: "/images/merch/stickers.jpg",
    description: "Set of 5 adorable pixel art cat stickers",
    category: 'accessories'
  },
  {
    id: 5,
    name: "Tote Bag",
    price: 19.99,
    imageUrl: "/images/merch/tote.jpg",
    description: "Eco-friendly tote bag with pixel art designs",
    category: 'accessories'
  },
  {
    id: 6,
    name: "Phone Case",
    price: 16.99,
    imageUrl: "/images/merch/phonecase.jpg",
    description: "Protective phone case featuring pixel art cats",
    category: 'accessories'
  },
  {
    id: 7,
    name: "Digital Art Pack",
    price: 12.99,
    imageUrl: "/images/merch/digital.jpg",
    description: "Downloadable pack of high-resolution pixel art",
    category: 'digital'
  },
  {
    id: 8,
    name: "Cat Pillow",
    price: 29.99,
    imageUrl: "/images/merch/pillow.jpg",
    description: "Soft decorative pillow with embroidered cat design",
    category: 'home'
  },
  {
    id: 9,
    name: "Cat Socks",
    price: 11.99,
    imageUrl: "/images/merch/socks.jpg",
    description: "Comfortable socks with pixel art cat patterns",
    category: 'clothing'
  }
]; 