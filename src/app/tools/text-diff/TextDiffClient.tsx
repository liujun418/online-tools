"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Text Diff Checker",
  description:
    "Compare two texts and find the differences side by side. Free online diff tool.",
  keywords: [
    "text diff checker",
    "compare text online",
    "text difference tool",
    "diff checker",
    "compare two texts",
    "text comparison tool",
  ],
};

export default function TextDiffClient({ locale = "en", dict, titleOverride, descriptionOverride }: {
  locale?: string; dict?: Record<string, unknown>;
  titleOverride?: string;
  descriptionOverride?: string;
} = {}) {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const td = (dict as any)?.textDiff || {};

  const { added, removed, same } = useMemo(() => {
    const lines1 = text1.split("\n");
    const lines2 = text2.split("\n");
    const result = { added: [] as string[], removed: [] as string[], same: [] as string[] };

    const maxLen = Math.max(lines1.length, lines2.length);
    for (let i = 0; i < maxLen; i++) {
      const l1 = lines1[i] ?? "";
      const l2 = lines2[i] ?? "";
      if (l1 === l2) {
        result.same.push(l2);
      } else {
        if (l1) result.removed.push(l1);
        if (l2) result.added.push(l2);
      }
    }
    return result;
  }, [text1, text2]);

  return (
    <ToolLayout {...metadata}
        title={titleOverride || metadata.title}
        description={descriptionOverride || metadata.description} locale={locale as any} dict={dict}>
      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-500 dark:text-zinc-400">
            {td.originalText || "Original Text"}
          </label>
          <textarea
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            placeholder={td.originalPlaceholder || "Paste original text here..."}
            className="w-full rounded-lg border border-zinc-300 bg-white p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900"
            rows={14}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-500 dark:text-zinc-400">
            {td.modifiedText || "Modified Text"}
          </label>
          <textarea
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            placeholder={td.modifiedPlaceholder || "Paste modified text here..."}
            className="w-full rounded-lg border border-zinc-300 bg-white p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900"
            rows={14}
          />
        </div>
      </div>

      {text1 && text2 && (
        <div className="mt-6">
          <h3 className="mb-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {(td.differences || "{{added}} added, {{removed}} removed").replace("{{added}}", String(added.length)).replace("{{removed}}", String(removed.length))}
          </h3>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 font-mono text-sm dark:border-zinc-800 dark:bg-zinc-900">
            {removed.map((line, i) => (
              <div key={`r${i}`} className="bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300">
                <span className="mr-2 select-none text-red-400">-</span>{line}
              </div>
            ))}
            {added.map((line, i) => (
              <div key={`a${i}`} className="bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300">
                <span className="mr-2 select-none text-green-400">+</span>{line}
              </div>
            ))}
            {added.length === 0 && removed.length === 0 && (
              <div className="text-green-600 dark:text-green-400">{td.identical || "Texts are identical!"}</div>
            )}
          </div>
        </div>
      )}
    </ToolLayout>
  );
}
