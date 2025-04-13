import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="aspect-square bg-gray-100 relative">
        {/* Placeholder for image - replace with actual image */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          {product.name}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-pixel font-semibold text-gray-900">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mt-1">{product.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-pixel font-bold text-main-500">
            ${product.price}
          </span>
          <button className="bg-main-500 text-white px-4 py-2 rounded-md hover:bg-main-800 transition-colors font-pixel">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
