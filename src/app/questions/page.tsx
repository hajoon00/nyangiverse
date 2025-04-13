"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions, Choice } from "@/data/questions";
import QuestionCard from "@/app/components/QuestionCard";
import ProgressBar from "@/app/components/ProgressBar";

export default function QuestionsPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Choice[]>([]);

  const handleAnswer = (choice: Choice) => {
    const newAnswers = [...answers, choice];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Store answers in localStorage and redirect to results
      localStorage.setItem("surveyAnswers", JSON.stringify(newAnswers));
      router.push("/result");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Are you more like Hasom or Haron?
        </h1>
        <ProgressBar current={currentQuestion + 1} total={questions.length} />
        <QuestionCard
          question={questions[currentQuestion]}
          onSelect={handleAnswer}
        />
      </div>
    </main>
  );
}
