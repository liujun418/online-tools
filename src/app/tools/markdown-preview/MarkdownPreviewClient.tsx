"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Markdown Preview",
  description:
    "Write Markdown and see a live HTML preview. Free online Markdown editor and previewer.",
  keywords: [
    "markdown editor",
    "markdown preview",
    "online markdown editor",
    "markdown to html",
    "live markdown preview",
    "write markdown online",
  ],
};

function simpleMarkdown(md: string): string {
  return md
    // Code blocks
    .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre class="rounded-lg bg-zinc-100 p-4 dark:bg-zinc-800 font-mono text-sm overflow-x-auto"><code>$2</code></pre>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code class="rounded bg-zinc-200 px-1.5 py-0.5 font-mono text-sm dark:bg-zinc-700">$1</code>')
    // Headers
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold mt-4 mb-2">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-semibold mt-4 mb-2">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold mt-4 mb-2">$1</h1>')
    // Bold and italic
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 underline">$1</a>')
    // Images
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="max-w-full rounded" />')
    // Unordered lists
    .replace(/^[-*] (.+)$/gm, '<li class="ml-4">$1</li>')
    // Ordered lists
    .replace(/^\d+\. (.+)$/gm, '<li class="ml-4 list-decimal">$1</li>')
    // Horizontal rule
    .replace(/^---$/gm, '<hr class="my-4 border-zinc-300 dark:border-zinc-700" />')
    // Blockquotes
    .replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-zinc-300 pl-4 italic text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">$1</blockquote>')
    // Paragraphs (non-empty lines)
    .replace(/^(?!<[hplu]|<pre|<code|<hr|<blockquote)(.+)$/gm, '<p>$1</p>')
    // Clean up extra paragraph tags
    .replace(/<p><\/p>/g, "")
    .replace(/<\/p>\n<p>/g, "</p><p>");
}

export default function MarkdownPreviewClient() {
  const [input, setInput] = useState(
    `# Hello Markdown!\n\nThis is a **bold** and *italic* text.\n\n## Lists\n- Item one\n- Item two\n\n## Code\nUse \`inline code\` or:\n\n\`\`\`\nfunction hello() {\n  console.log("world");\n}\n\`\`\`\n\n> This is a blockquote.\n\n[Link example](https://example.com)`
  );

  const html = useMemo(() => simpleMarkdown(input), [input]);

  return (
    <ToolLayout {...metadata}>
      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Markdown
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full rounded-lg border border-zinc-300 bg-white p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900"
            rows={20}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Preview
          </label>
          <div
            className="rounded-lg border border-zinc-200 bg-white p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900 prose"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </ToolLayout>
  );
}
