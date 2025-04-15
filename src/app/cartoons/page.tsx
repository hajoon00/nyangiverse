"use client";

import Link from "next/link";
import { cartoons } from "@/data/cartoons";
import Image from "next/image";

export default function CartoonsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Cartoons</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enjoy these pixel art cartoons featuring daily adventures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cartoons.map((cartoon) => (
            <div
              key={cartoon.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="aspect-square bg-gray-200 relative">
                {/* Placeholder for thumbnail - replace with actual image */}

                <Image
                  src={cartoon.thumbnail}
                  alt={cartoon.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Episode {cartoon.id}: {cartoon.title}
                </h2>
                <p className="text-gray-600 mb-4">{cartoon.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {cartoon.images.length} images
                  </span>
                  <Link
                    href={`/cartoons/${cartoon.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Episode →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            More cartoons coming soon! Follow our journey as we create more
            pixel art adventures.
          </p>
        </div>
      </div>
    </main>
  );
}
