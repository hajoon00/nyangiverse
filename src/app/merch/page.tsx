"use client";

import { useState } from "react";
import ProductCard from "@/app/components/ProductCard";
import { products, Product } from "@/data/products";

type Category = Product["category"] | "all";

export default function MerchPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const categories: Category[] = [
    "all",
    "clothing",
    "accessories",
    "home",
    "digital",
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-pixel font-bold text-gray-800 mb-4">
            Merchandise
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Show your love for our pixel art cats with these adorable products
          </p>
        </div>

        <div className="flex justify-center mb-8 space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md font-pixel transition-colors ${
                selectedCategory === category
                  ? "bg-main-500 text-white"
                  : "bg-white text-gray-800 hover:bg-main-300"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No products found in this category.</p>
          </div>
        )}
      </div>
    </main>
  );
}
