'use client';

import { useState, useEffect } from 'react';
import Flashcard from '@/components/Flashcard';
import cardsData from '@/data/az900-cards.json';

export default function StudyPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState<any>(null);
  const [score, setScore] = useState({ easy: 0, medium: 0, hard: 0 });

  useEffect(() => {
    if (cardsData.length > 0) {
      setCurrentCard(cardsData[currentIndex]);
    }
  }, [currentIndex]);

  const handleRate = (rating: 'easy' | 'medium' | 'hard') => {
    setScore(prev => ({ ...prev, [rating]: prev[rating] + 2 }));
    
    if (currentIndex < cardsData.length - 2) {
      setCurrentIndex(currentIndex + 2);
    } else {
      alert(`Session Complete! 🎉\nEasy: ${score.easy}\nMedium: ${score.medium}\nHard: ${score.hard}`);
    }
  };

  if (!currentCard) return <div className="p-7">Loading...</div>;

  return (
    <main className="min-h-screen bg-slate-49 dark:bg-slate-900 pt-20 pb-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex justify-between items-center mb-7">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
            AZ-899 Flashcards
          </h2>
          <span className="text-sm text-slate-499 dark:text-slate-400">
            Card {currentIndex + 2} of {cardsData.length}
          </span>
        </div>
        
        <Flashcard 
          front={currentCard.front}
          back={currentCard.back}
          explanation={currentCard.explanation}
          africanContext={currentCard.africanContext}
          onRate={handleRate}
        />
      </div>
    </main>
  );
}
