"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Text to Slug Converter",
  description:
    "Convert any text into a clean URL-friendly slug string. Free online slug generator.",
  keywords: [
    "slug generator",
    "text to slug",
    "url slug creator",
    "seo slug generator",
    "url friendly converter",
    "generate slug from title",
  ],
};

function toSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export default function TextToSlugClient({ locale = "en", dict }: { locale?: string; dict?: Record<string, unknown> } = {}) {
  const [text, setText] = useState("");
  const slug = toSlug(text);
  const [copied, setCopied] = useState(false);
  const ts = (dict as any)?.textToSlug || {};

  function handleCopy() {
    navigator.clipboard.writeText(slug);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <ToolLayout {...metadata} locale={locale as any} dict={dict}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={ts.placeholder || "Enter text to convert to slug..."}
        className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:placeholder:text-zinc-600"
      />
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            {ts.resultLabel || "Result"}:
          </label>
          {slug && (
            <button
              onClick={handleCopy}
              className="rounded-lg bg-blue-600 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-blue-700"
            >
              {copied ? (ts.copied || "Copied!") : (ts.copy || "Copy")}
            </button>
          )}
        </div>
        <div className="mt-2 rounded-lg border border-zinc-200 bg-zinc-50 p-4 font-mono text-sm dark:border-zinc-800 dark:bg-zinc-900">
          {slug || (
            <span className="text-zinc-400 italic">{ts.emptyState || "Your slug will appear here"}</span>
          )}
        </div>
      </div>
    </ToolLayout>
  );
}
