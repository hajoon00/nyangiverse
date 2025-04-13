import { Question, Choice } from "@/data/questions";

interface QuestionCardProps {
  question: Question;
  onSelect: (choice: Choice) => void;
}

export default function QuestionCard({
  question,
  onSelect,
}: QuestionCardProps) {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">{question.text}</h2>
      <div className="space-y-4">
        {question.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => onSelect(choice.type)}
            className="w-full p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors"
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
}
