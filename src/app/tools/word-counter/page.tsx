import type { Metadata } from "next";
import WordCounterClient from "./WordCounterClient";

export const metadata: Metadata = {
  title: "Word Counter | ToolBoxOnline",
  description: "Count words, characters, sentences, and paragraphs in real-time. Free online word counter tool.",
  keywords: "word counter, character counter, word count, count words online, text statistics, reading time calculator, sentence counter, paragraph counter",
  alternates: { canonical: "/tools/word-counter" },
};

export default function WordCounterPage() {
  return <WordCounterClient />;
}
