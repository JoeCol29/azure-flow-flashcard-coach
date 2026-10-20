'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, RefreshCw, Lightbulb } from 'lucide-react';

interface FlashcardProps {
  front: string;
  back: string;
  explanation?: string;
  africanContext?: string;
  onRate: (rating: 'easy' | 'medium' | 'hard') => void;
}

export default function Flashcard({ 
  front, 
  back, 
  explanation, 
  africanContext, 
  onRate 
}: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] w-full max-w-2xl mx-auto p-4">
      
      <div 
        className="relative w-full h-80 cursor-pointer"
        style={{ perspective: '1000px' }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          className="relative w-full h-full"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div 
            className="absolute inset-0 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center p-8"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <span className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-4">Question</span>
            <p className="text-xl md:text-2xl font-semibold text-center text-slate-800 dark:text-white">
              {front}
            </p>
            <div className="mt-6 flex items-center gap-2 text-slate-400 text-sm">
              <RefreshCw size={14} /> Click to reveal answer
            </div>
          </div>

          <div 
            className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl shadow-xl flex flex-col items-center justify-center p-8"
            style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
          >
            <span className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-4">Answer</span>
            <p className="text-lg md:text-xl font-medium text-center text-white mb-6">
              {back}
            </p>
            
            {africanContext && (
              <div className="bg-white/15 rounded-lg px-3 py-1 text-blue-50 text-xs mb-4">
                Local Context: {africanContext}
              </div>
            )}

            <button
              onClick={(e) => { e.stopPropagation(); setShowExplanation(true); }}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              <Lightbulb size={16} /> Explain Like I am 5
            </button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isFlipped && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex gap-4 mt-8"
          >
            <button 
              onClick={() => onRate('hard')}
              className="px-6 py-2 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-lg font-medium hover:bg-red-200 transition-colors"
            >
              Hard
            </button>
            <button 
              onClick={() => onRate('medium')}
              className="px-6 py-2 bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 rounded-lg font-medium hover:bg-yellow-200 transition-colors"
            >
              Medium
            </button>
            <button 
              onClick={() => onRate('easy')}
              className="px-6 py-2 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-lg font-medium hover:bg-green-200 transition-colors"
            >
              Easy
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showExplanation && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowExplanation(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-2xl max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-2">
                <Brain className="text-purple-500" /> Simple Explanation
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {explanation || "No explanation available."}
              </p>
              <button 
                onClick={() => setShowExplanation(false)}
                className="mt-4 w-full py-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-200 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
