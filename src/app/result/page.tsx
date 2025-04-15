"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { calculateResult } from "@/app/lib/result";
import { Choice } from "@/data/questions";
import Image from "next/image";

export default function ResultPage() {
  const router = useRouter();
  const [result, setResult] = useState<{ hasom: number; haron: number } | null>(
    null
  );

  useEffect(() => {
    const answers = localStorage.getItem("surveyAnswers");
    if (!answers) {
      router.push("/questions");
      return;
    }

    const parsedAnswers = JSON.parse(answers) as Choice[];
    const calculatedResult = calculateResult(parsedAnswers);
    setResult(calculatedResult);
  }, [router]);

  if (!result) {
    return <div>Loading...</div>;
  }

  // Determine which result image to show
  const isHasom = result.hasom > result.haron;
  const resultType = isHasom ? "Hasom" : "Haron";

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Result Image */}
        <div className="w-full h-[400px] relative mb-12">
          <Image
            src={`/Result-${resultType}.png`}
            alt={`${resultType} Result`}
            fill
            className="object-contain"
            priority
          />
        </div>

        <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Results</h1>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-hasom-500">Hasom</h2>
            <div className="text-4xl font-bold mb-2">{result.hasom}%</div>
            <p className="text-gray-600">
              You share traits with the energetic and outgoing Hasom!
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-haron-500">Haron</h2>
            <div className="text-4xl font-bold mb-2">{result.haron}%</div>
            <p className="text-gray-600">
              You share traits with the calm and reserved Haron!
            </p>
          </div>
        </div>

        <button
          onClick={() => router.push("/quiz/intro")}
          className="bg-main-500 text-white px-6 py-3 rounded-lg hover:bg-main-600 transition-colors"
        >
          Take the test again
        </button>
      </div>
    </main>
  );
}
