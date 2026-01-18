import React, { useState } from 'react';
import { LabActivity, MatchingPair } from '@/data/labActivities';

interface MatchingGameProps {
  activity: LabActivity;
  language: 'uz' | 'ru' | 'en';
  onAnswer: (correct: boolean) => void;
  isAnswered: boolean;
}

export const MatchingGame: React.FC<MatchingGameProps> = ({ activity, onAnswer, isAnswered }) => {
  const pairs = activity.data as MatchingPair[];
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({});

  const shuffledRight = [...pairs].sort(() => Math.random() - 0.5);

  const handleLeftClick = (id: string) => {
    if (isAnswered) return;
    setSelectedLeft(id);
  };

  const handleRightClick = (rightText: string) => {
    if (isAnswered || !selectedLeft) return;
    setMatches(prev => ({ ...prev, [selectedLeft]: rightText }));
    setSelectedLeft(null);
    
    const newMatches = { ...matches, [selectedLeft]: rightText };
    if (Object.keys(newMatches).length === pairs.length) {
      const allCorrect = pairs.every(p => newMatches[p.id] === p.right);
      onAnswer(allCorrect);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="space-y-2">
        {pairs.map((pair) => (
          <button
            key={pair.id}
            onClick={() => handleLeftClick(pair.id)}
            className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
              selectedLeft === pair.id ? 'border-primary bg-primary/10' : 
              matches[pair.id] ? 'border-edu-success bg-edu-success/10' : 'border-border hover:border-primary/50'
            }`}
          >
            {pair.left}
          </button>
        ))}
      </div>
      <div className="space-y-2">
        {shuffledRight.map((pair) => (
          <button
            key={pair.id}
            onClick={() => handleRightClick(pair.right)}
            className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
              Object.values(matches).includes(pair.right) ? 'border-edu-success bg-edu-success/10 opacity-50' : 'border-border hover:border-primary/50'
            }`}
            disabled={Object.values(matches).includes(pair.right)}
          >
            {pair.right}
          </button>
        ))}
      </div>
    </div>
  );
};
