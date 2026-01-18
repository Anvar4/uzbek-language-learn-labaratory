import React, { useState } from 'react';
import { LabActivity, QuizOption } from '@/data/labActivities';

interface QuizGameProps {
  activity: LabActivity;
  language: 'uz' | 'ru' | 'en';
  onAnswer: (correct: boolean) => void;
  isAnswered: boolean;
}

export const QuizGame: React.FC<QuizGameProps> = ({ activity, onAnswer, isAnswered }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const options = activity.data as QuizOption[];

  const handleSelect = (optionId: string) => {
    if (isAnswered) return;
    setSelected(optionId);
    const option = options.find(o => o.id === optionId);
    if (option) onAnswer(option.isCorrect);
  };

  return (
    <div className="space-y-3">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => handleSelect(option.id)}
          disabled={isAnswered}
          className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
            selected === option.id
              ? isAnswered
                ? option.isCorrect
                  ? 'border-edu-success bg-edu-success/10'
                  : 'border-destructive bg-destructive/10'
                : 'border-primary bg-primary/10'
              : 'border-border hover:border-primary/50 hover:bg-primary/5'
          }`}
        >
          <span className="font-medium">{option.text}</span>
        </button>
      ))}
    </div>
  );
};
