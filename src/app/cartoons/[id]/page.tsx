"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { cartoons } from "@/data/cartoons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useState, useEffect } from "react";

export default function CartoonPage() {
  const params = useParams();
  const cartoonId = parseInt(params.id as string);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

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

        <div className="relative flex justify-center">
          <div className="overflow-hidden w-[60%]" ref={emblaRef}>
            <div className="flex">
              {cartoon.images.map((image, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 relative aspect-square"
                >
                  <Image
                    src={image}
                    alt={`${cartoon.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 60vw, (max-width: 1200px) 30vw, 20vw"
                  />
                </div>
              ))}
            </div>
          </div>
          {selectedIndex > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
              onClick={scrollPrev}
            >
              ←
            </button>
          )}
          {selectedIndex < cartoon.images.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
              onClick={scrollNext}
            >
              →
            </button>
          )}
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === selectedIndex
                  ? "bg-main-500 w-4"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
