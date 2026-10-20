# 🧠 AzureFlow: Adaptive Flashcard Coach

> **Unofficial AZ-900 Exam Prep Tool**  
> Built for the Vibe Coding Hackathon: AZ-900 Exam Prep Edition

## 🚀 The Problem
Learners memorize Azure terms but fail to understand the *context* or *application* of those services, leading to anxiety during the AZ-900 exam.

## 💡 The Solution
AzureFlow is an AI-powered flashcard coach that uses **Spaced Repetition** and **Contextual Explanations** to turn passive memorization into active understanding.

### ✨ Key Features
- **🔄 Adaptive Spaced Repetition:** Cards reappear based on difficulty (SM-2 Algorithm).
- **🤖 AI "Why" Engine:** Instantly generates clear, simple explanations for every answer.
- **🌍 African Context Mode:** Real-world examples relevant to African learners.
- **📊 Progress Dashboard:** Visualizes weak areas based on quiz performance.

## 🛠️ Tech Stack
- **Frontend:** Next.js 14, Tailwind CSS, Framer Motion
- **Backend:** Supabase (Auth + Database)
- **AI:** Vercel AI SDK + GPT-4o-mini
- **Deployment:** Vercel

## 📸 Demo
[Add a screenshot or video link here]

## 📂 Project Structure
```text
azure-flow/
├── app/                  # Next.js App Router
│   ├── dashboard/        # Progress tracking
│   ├── study/            # Flashcard interface
│   └── api/              # AI explanation endpoints
├── components/           # Reusable UI (Card, Button, Navbar)
├── data/                 # Custom AZ-900 flashcard dataset (JSON)
└── README.md
