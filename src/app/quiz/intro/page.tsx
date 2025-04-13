"use client";

import { useRouter } from "next/navigation";

export default function QuizIntroPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-pixel font-bold text-gray-800 mb-4">
            Are You More Like Hasom or Haron?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Take this quiz to discover which of our beloved Nyangs matches your
            personality!
          </p>
        </div>

        <div className="text-center">
          <button
            onClick={() => router.push("/questions")}
            className="bg-main-500 text-white px-8 py-4 rounded-lg hover:bg-main-800 transition-colors font-pixel text-xl"
          >
            Start the Quiz!
          </button>
          <p className="mt-4 text-gray-600">
            It only takes about 1 minute to complete
          </p>
        </div>
      </div>
    </main>
  );
}
