import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';
import { NextResponse } from 'next/server';

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { question, answer } = await req.json();

  try {
    const { text } = await generateText({
      model: openai('gpt-4o-mini'),
      system: 'You are a friendly Azure instructor. Explain cloud concepts in simple terms using everyday analogies. Keep it under 100 words.',
      prompt: `Explain this AZ-900 concept simply: Question: "${question}" Answer: "${answer}". Give a simple analogy someone would understand.`,
    });

    return NextResponse.json({ explanation: text });
  } catch (error) {
    console.error('AI Error:', error);
    return NextResponse.json(
      { explanation: 'Failed to load explanation. Try again.' },
      { status: 500 }
    );
  }
}
