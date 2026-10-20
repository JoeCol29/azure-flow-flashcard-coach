'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Flashcard from '../../components/Flashcard';
import cardsData from '../../data/az900-cards.json';

export default function StudyPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState<any>(null);
  const [score, setScore] = useState({ easy: 0, medium: 0, hard: 0 });
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (cardsData.length > 0) {
      setCurrentCard(cardsData[currentIndex]);
    }
  }, [currentIndex]);

  const handleRate = (rating: 'easy' | 'medium' | 'hard') => {
    setScore(prev => ({ ...prev, [rating]: prev[rating] + 1 }));

    if (currentIndex < cardsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setFinished(true);
    }
  };

  const progress = ((currentIndex + 1) / cardsData.length) * 100;

  if (finished) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-6">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 max-w-md w-full text-center shadow-2xl">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-3xl font-bold text-white mb-2">Session Complete!</h1>
          <p className="text-blue-200 mb-8">Here is how you did:</p>
          
          <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="bg-green-500/20 rounded-xl p-4">
              <div className="text-3xl font-bold text-green-400">{score.easy}</div>
              <div className="text-xs text-green-300 uppercase mt-1">Easy</div>
            </div>
            <div className="bg-yellow-500/20 rounded-xl p-4">
              <div className="text-3xl font-bold text-yellow-400">{score.medium}</div>
              <div className="text-xs text-yellow-300 uppercase mt-1">Medium</div>
            </div>
            <div className="bg-red-500/20 rounded-xl p-4">
              <div className="text-3xl font-bold text-red-400">{score.hard}</div>
              <div className="text-xs text-red-300 uppercase mt-1">Hard</div>
            </div>
          </div>

          <button 
            onClick={() => { setCurrentIndex(0); setFinished(false); setScore({easy:0,medium:0,hard:0}); }}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-colors"
          >
            Study Again
          </button>
        </div>
      </main>
    );
  }

  if (!currentCard) return <div className="p-8 text-white">Loading...</div>;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-10 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="flex justify-between items-center mb-6">
          <Link href="/" className="text-blue-300 hover:text-white text-sm transition-colors">
            &larr; Back home
          </Link>
          <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full border border-blue-500/30">
            {currentCard.topic}
          </span>
        </div>

        <h1 className="text-3xl font-bold text-white mb-6">
          AZ-900 <span className="text-blue-400">Flashcards</span>
        </h1>

        <div className="mb-10">
          <div className="flex justify-between text-xs text-blue-200 mb-2">
            <span>Progress</span>
            <span>Card {currentIndex + 1} of {cardsData.length}</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 rounded-full"
              style={{ width: progress + '%' }}
            />
          </div>
        </div>
        
        <Flashcard 
          front={currentCard.front}
          back={currentCard.back}
          explanation={currentCard.explanation}
          africanContext={currentCard.africanContext}
          onRate={handleRate}
        />

        <p className="text-center text-xs text-slate-500 mt-12">
          Unofficial study tool. Not affiliated with Microsoft.
        </p>
      </div>
    </main>
  );
}
