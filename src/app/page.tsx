import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-slate-800 dark:text-white mb-4">
          🧠 AzureFlow
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
          The smartest way to prepare for your AZ-900 exam with AI-powered 
          adaptive flashcards and African-context explanations.
        </p>
        <Link 
          href="/study"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
        >
          Start Studying →
        </Link>
        <p className="mt-8 text-sm text-slate-400">
          ⚠️ Unofficial study tool. Not affiliated with Microsoft.
        </p>
      </div>
    </main>
  );
}
