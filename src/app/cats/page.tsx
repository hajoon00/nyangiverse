"use client";

import React from "react";
import CatProfileCard from "../components/CatProfileCard";
import { CatProfile, catProfiles } from "../../data/catProfiles";

export default function CatsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-pixel text-center text-hasom-500 mb-8">
          Meet Our Cats
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {catProfiles.map((cat: CatProfile) => (
            <CatProfileCard key={cat.name} profile={cat} />
          ))}
        </div>
      </div>
    </main>
  );
}
