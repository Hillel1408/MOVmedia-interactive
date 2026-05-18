import { useState, type ReactNode } from "react";

interface QuizOption {
  id: string;
  text: string;
  icon: string;
  iconBg: string;
}

interface QuizQuestionProps {
  question: string;
  options: QuizOption[];
  correctAnswerId: string;
  children?: ReactNode;
  onCorrect?: () => void;
  onWrong?: () => void;
}

export default function QuizQuestion({
  question,
  options,
  correctAnswerId,
  onCorrect,
  onWrong,
  children,
}: QuizQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswerClick = (id: string) => {
    if (selectedAnswer) return;

    setSelectedAnswer(id);

    if (id === correctAnswerId) {
      onCorrect?.();
    } else {
      onWrong?.();
    }
  };

  return (
    <div className="rounded-3xl p-6 bg-[#F7EBE2] backdrop-blur-[60px]">
      <div className="flex flex-col gap-4 mb-6">
        <p className="font-semibold text-[24px] leading-[115%] text-[#131418]">
          {question}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {options.map((option) => {
          const isSelected = selectedAnswer === option.id;
          const isCorrect = option.id === correctAnswerId;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => handleAnswerClick(option.id)}
              className={`
                rounded-2xl py-8.75 px-7.5 bg-white flex gap-4 text-left border-2 transition-all
                ${
                  isSelected
                    ? isCorrect
                      ? "border-green-500"
                      : "border-red-500"
                    : "border-transparent"
                }
              `}
            >
              <div
                className="min-w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: option.iconBg }}
              >
                <img src={option.icon} alt="" />
              </div>

              <p className="font-semibold text-[24px] leading-[115%] text-[#000000]">
                {option.text}
              </p>
            </button>
          );
        })}
      </div>

      {children}
    </div>
  );
}
