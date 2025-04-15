"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function About() {
  const [hasomFlipped, setHasomFlipped] = useState(false);
  const [haronFlipped, setHaronFlipped] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);

  return (
    <main className="min-h-screen p-8 md:p-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-pixel mb-12 text-center">Meet Our Cats</h1>
        <div className="flex flex-col md:flex-row gap-8 justify-center mb-16">
          {/* Hasom Card */}
          <div
            className="relative w-[400px] h-[225px] cursor-pointer perspective-1000"
            onClick={() => setHasomFlipped(!hasomFlipped)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                hasomFlipped ? "rotate-y-180" : ""
              }`}
            >
              <div className="absolute w-full h-full backface-hidden">
                <Image
                  src="/card/Card-Hasom-front.jpg"
                  alt="Hasom Card Front"
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
              <div className="absolute w-full h-full backface-hidden rotate-y-180">
                <Image
                  src="/card/Card-Hasom-back.jpg"
                  alt="Hasom Card Back"
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Haron Card */}
          <div
            className="relative w-[400px] h-[225px] cursor-pointer perspective-1000"
            onClick={() => setHaronFlipped(!haronFlipped)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                haronFlipped ? "rotate-y-180" : ""
              }`}
            >
              <div className="absolute w-full h-full backface-hidden">
                <Image
                  src="/card/Card-Haron-front.jpg"
                  alt="Haron Card Front"
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
              <div className="absolute w-full h-full backface-hidden rotate-y-180">
                <Image
                  src="/card/Card-Haron-back.jpg"
                  alt="Haron Card Back"
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4">
          <button
            onClick={() => setIsStoryOpen(!isStoryOpen)}
            className="w-full flex items-center justify-between bg-gray-100 hover:bg-gray-200 p-4 rounded-lg mb-4 transition-colors"
          >
            <h2 className="text-4xl font-bold text-gray-800">Our Story</h2>
            <span
              className={`transform transition-transform duration-300 ${
                isStoryOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isStoryOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="prose prose-lg max-w-none">
              <p className="mb-6">
                I had three cats, and the eldest passed away last year. What
                hurt me the most was that, since I had been traveling back and
                forth between the U.S. and Korea, I couldn&apos;t spend much
                time with him.
              </p>

              <p className="mb-6">
                The two remaining cats, Hasom and Haron, are now nearly ten
                years old, but I have barely seen them over the past few years.
                Whenever I visit Korea, I keep thinking that there isn&apos;t
                much time left for us to be together. That&apos;s why I want to
                leave a lasting mark of these cats in my life in my own way.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Why Pixel Art?</h2>
              <p className="mb-6">I chose pixel art for two main reasons:</p>
              <ol className="list-decimal pl-6 mb-6">
                <li className="mb-4">
                  <strong>Retro Connection:</strong> This project is about
                  memories. Most people, especially those born in the 90s-early
                  00s, have experienced pixel sprite games. Pixel art feels
                  nostalgic yet not childish. It&apos;s a bridge between the
                  past and present, connecting digital and analog worlds.
                </li>
                <li className="mb-4">
                  <strong>Minimalism:</strong> Like me, pixel art embraces
                  simplicity. It&apos;s minimal yet cute, maintaining a
                  consistent style. The freedom of pixel art allows me to
                  anthropomorphize my cats naturally, making their human-like
                  actions feel organic and endearing.
                </li>
              </ol>

              <h2 className="text-2xl font-bold mt-8 mb-4">
                The Digital Legacy
              </h2>
              <p className="mb-6">
                There is a Korean proverb that says, &quot;A tiger leaves its
                skin when it dies, and a person leaves their name.&quot; My two
                cats may be closer to tigers, but I want to leave behind their
                names and memories in the digital world. This space is where
                people can share in the memories of my cats and me.
              </p>

              <div className="mt-12 text-center">
                <Link href="/" className="text-blue-600 hover:text-blue-800">
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
