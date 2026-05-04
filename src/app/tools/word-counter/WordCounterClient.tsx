"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Word Counter",
  description:
    "Count words, characters, sentences, and paragraphs in real-time. Free online word counter tool.",
  keywords: [
    "word counter",
    "character counter",
    "word count",
    "count words online",
    "text statistics",
    "reading time calculator",
    "sentence counter",
    "paragraph counter",
  ],
  toolId: "word-counter",
};

export default function WordCounterClient() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, "").length;
    const sentences =
      text.trim() === ""
        ? 0
        : text.split(/[.!?]+/).filter((s) => s.trim()).length;
    const paragraphs =
      text.trim() === ""
        ? 0
        : text.split(/\n\s*\n/).filter((s) => s.trim()).length;
    const readingTime = Math.ceil(words / 200);
    return { words, characters, charactersNoSpaces, sentences, paragraphs, readingTime };
  }, [text]);

  const statItems = [
    { label: "Words", value: stats.words },
    { label: "Characters", value: stats.characters },
    { label: "Characters (no spaces)", value: stats.charactersNoSpaces },
    { label: "Sentences", value: stats.sentences },
    { label: "Paragraphs", value: stats.paragraphs },
    { label: "Reading time", value: `${stats.readingTime} min` },
  ];

  return (
    <ToolLayout {...metadata}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing or paste your text here..."
        className="w-full rounded-lg border border-zinc-300 bg-white p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:placeholder:text-zinc-600"
        rows={12}
      />
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {statItems.map((item) => (
          <div
            key={item.label}
            className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-center dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {item.value}
            </div>
            <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </ToolLayout>
  );
}
