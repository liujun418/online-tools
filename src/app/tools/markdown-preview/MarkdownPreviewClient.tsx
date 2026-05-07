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

export default function MarkdownPreviewClient({ locale = "en", dict, titleOverride, descriptionOverride }: {
  locale?: string; dict?: Record<string, unknown>;
  titleOverride?: string;
  descriptionOverride?: string;
} = {}) {
  const mp = (dict as any)?.markdownPreview || {};

  const defaultMarkdown = useMemo(() => {
    const t = {
      heading: mp.defaultHeading || "Hello Markdown!",
      boldItalic: mp.defaultBoldItalic || "This is a **bold** and *italic* text.",
      listsHeading: mp.defaultListsHeading || "Lists",
      list1: mp.defaultList1 || "Item one",
      list2: mp.defaultList2 || "Item two",
      codeHeading: mp.defaultCodeHeading || "Code",
      codeInline: mp.defaultCodeInline || "Use `inline code` or:",
      codeBlock: mp.defaultCodeBlock || 'function hello() {\n  console.log("world");\n}',
      blockquote: mp.defaultBlockquote || "This is a blockquote.",
      link: mp.defaultLink || "Link example",
    };
    return `# ${t.heading}\n\n${t.boldItalic}\n\n## ${t.listsHeading}\n- ${t.list1}\n- ${t.list2}\n\n## ${t.codeHeading}\n${t.codeInline}\n\n\`\`\`\n${t.codeBlock}\n\`\`\`\n\n> ${t.blockquote}\n\n[${t.link}](https://example.com)`;
  }, [mp]);

  const [input, setInput] = useState(defaultMarkdown);

  const html = useMemo(() => simpleMarkdown(input), [input]);

  return (
    <ToolLayout {...metadata}
        title={titleOverride || metadata.title}
        description={descriptionOverride || metadata.description} locale={locale as any} dict={dict}>
      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-500 dark:text-zinc-400">
            {mp.editor || "Markdown"}
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
            {mp.preview || "Preview"}
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
