import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AzureFlow - AZ-900 Flashcard Coach",
  description: "AI-powered adaptive flashcards for AZ-900 exam prep",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-slate-50 dark:bg-slate-900`}>
        {children}
      </body>
    </html>
  );
}
