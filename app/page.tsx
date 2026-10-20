import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <div className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full border border-blue-500/30 mb-6">
          Vibe Coding Hackathon · AZ-900 Edition
        </div>
        
        <h1 className="text-6xl font-extrabold text-white mb-2 tracking-tight">
          Azure<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Flow</span>
        </h1>
        <p className="text-blue-200 text-lg mb-8">
          Memory &amp; Revision · Flashcard Coach
        </p>

        <p className="text-slate-300 text-lg leading-relaxed mb-10">
          Prepare for your AZ-900 exam with AI-powered adaptive flashcards, 
          spaced repetition, and real-world African context examples.
        </p>
        
        <Link 
          href="/study"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold px-10 py-4 rounded-xl text-lg transition-all shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40"
        >
          Start Studying &rarr;
        </Link>

        <div className="flex justify-center gap-8 mt-14 text-sm text-slate-400">
          <div><span className="text-white font-bold block text-xl">8+</span>Cards</div>
          <div><span className="text-white font-bold block text-xl">AI</span>Explanations</div>
          <div><span className="text-white font-bold block text-xl">Local</span>Context</div>
        </div>

        <p className="mt-12 text-xs text-slate-500">
          Unofficial study tool. Not affiliated with Microsoft.
        </p>
      </div>
    </main>
  );
}
