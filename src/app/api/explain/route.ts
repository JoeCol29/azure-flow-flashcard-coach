import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { question, answer } = await req.json();

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a friendly Azure instructor. Explain cloud concepts in simple terms using everyday analogies. Keep it under 100 words.'
        },
        {
          role: 'user',
          content: `Explain this AZ-900 concept simply: Question: "${question}" Answer: "${answer}". Give a simple analogy someone would understand.`
        }
      ],
      max_tokens: 200,
    });

    const explanation = response.choices[0]?.message?.content || 'No explanation available.';
    return NextResponse.json({ explanation });
  } catch (error) {
    console.error('AI Error:', error);
    return NextResponse.json({ explanation: 'Failed to load explanation. Try again.' }, { status: 500 });
  }
}
