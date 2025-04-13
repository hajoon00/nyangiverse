"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { cartoons } from "@/data/cartoons";

export default function CartoonPage() {
  const params = useParams();
  const cartoonId = parseInt(params.id as string);

  const cartoon = cartoons.find((c) => c.id === cartoonId);

  if (!cartoon) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Cartoon not found
          </h1>
          <Link href="/cartoons" className="text-blue-600 hover:text-blue-800">
            ← Back to Cartoons
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/cartoons"
            className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
          >
            ← Back to Cartoons
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Episode {cartoon.id}: {cartoon.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            {cartoon.description}
          </p>
        </div>

        <div className="space-y-8">
          {cartoon.images.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="aspect-video bg-gray-200 relative">
                {/* Placeholder for image - replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Image {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
