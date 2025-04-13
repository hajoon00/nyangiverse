"use client";

import Link from "next/link";
import { CatProfile, catProfiles } from "../../data/catProfiles";
import CatProfileCard from "../components/CatProfileCard";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h1 className="text-4xl font-pixel text-center text-hasom-500 mb-8">
          Meet Our Cats
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {catProfiles.map((cat: CatProfile) => (
            <CatProfileCard key={cat.name} profile={cat} />
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Our Story</h1>

        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            I had three cats, and the eldest passed away last year. What hurt me
            the most was that, since I had been traveling back and forth between
            the U.S. and Korea, I couldn&apos;t spend much time with him.
          </p>

          <p className="mb-6">
            The two remaining cats, Hasom and Haron, are now nearly ten years
            old, but I have barely seen them over the past few years. Whenever I
            visit Korea, I keep thinking that there isn&apos;t much time left
            for us to be together. That&apos;s why I want to leave a lasting
            mark of these cats in my life in my own way.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Why Pixel Art?</h2>
          <p className="mb-6">I chose pixel art for two main reasons:</p>
          <ol className="list-decimal pl-6 mb-6">
            <li className="mb-4">
              <strong>Retro Connection:</strong> This project is about memories.
              Most people, especially those born in the 90s-early 00s, have
              experienced pixel sprite games. Pixel art feels nostalgic yet not
              childish. It&apos;s a bridge between the past and present,
              connecting digital and analog worlds.
            </li>
            <li className="mb-4">
              <strong>Minimalism:</strong> Like me, pixel art embraces
              simplicity. It&apos;s minimal yet cute, maintaining a consistent
              style. The freedom of pixel art allows me to anthropomorphize my
              cats naturally, making their human-like actions feel organic and
              endearing.
            </li>
          </ol>

          <h2 className="text-2xl font-bold mt-8 mb-4">The Digital Legacy</h2>
          <p className="mb-6">
            There is a Korean proverb that says, &quot;A tiger leaves its skin
            when it dies, and a person leaves their name.&quot; My two cats may
            be closer to tigers, but I want to leave behind their names and
            memories in the digital world. This space is where people can share
            in the memories of my cats and me.
          </p>

          <div className="mt-12 text-center">
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
