import React, { useState } from 'react';
import { LabActivity, ScenarioData } from '@/data/labActivities';

interface ScenarioGameProps {
  activity: LabActivity;
  language: 'uz' | 'ru' | 'en';
  onAnswer: (correct: boolean) => void;
  isAnswered: boolean;
}

export const ScenarioGame: React.FC<ScenarioGameProps> = ({ activity, onAnswer, isAnswered }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const data = activity.data as ScenarioData;

  const handleSelect = (optionId: string) => {
    if (isAnswered) return;
    setSelected(optionId);
    const option = data.options.find(o => o.id === optionId);
    if (option) onAnswer(option.isCorrect);
  };

  return (
    <div>
      <div className="p-4 bg-muted/50 rounded-xl mb-4">
        <p className="text-sm text-muted-foreground mb-2">📖 {data.situation}</p>
        <p className="font-medium">{data.question}</p>
      </div>
      <div className="space-y-3">
        {data.options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleSelect(option.id)}
            disabled={isAnswered}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
              selected === option.id
                ? isAnswered
                  ? option.isCorrect ? 'border-edu-success bg-edu-success/10' : 'border-destructive bg-destructive/10'
                  : 'border-primary bg-primary/10'
                : 'border-border hover:border-primary/50'
            }`}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};
