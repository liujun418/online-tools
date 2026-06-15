"use client";

import { useState, useMemo } from "react";
import TurndownService from "turndown";
import ToolLayout from "@/components/ToolLayout";

export default function HtmlToMarkdownClient({
  locale = "en",
  dict,
  titleOverride,
  descriptionOverride,
}: {
  locale?: string;
  dict?: Record<string, unknown>;
  titleOverride?: string;
  descriptionOverride?: string;
} = {}) {
  const htm = (dict as any)?.htmlToMarkdown || {};

  const [input, setInput] = useState("");

  const markdown = useMemo(() => {
    if (!input.trim()) return "";
    try {
      const td = new TurndownService({
        headingStyle: "atx",
        bulletListMarker: "-",
        codeBlockStyle: "fenced",
      });
      return td.turndown(input);
    } catch {
      return "";
    }
  }, [input]);

  const metadata = {
    title: "HTML to Markdown Converter — Convert Online Free",
    description: "Convert HTML code to clean Markdown format instantly. Tables, lists, links, and formatting all preserved. Free online converter.",
    keywords: ["html to markdown", "convert html to markdown", "html markdown converter", "html to md", "markdown converter"],
    toolId: "html-to-markdown",
  };

  return (
    <ToolLayout
      title={titleOverride || metadata.title}
      description={descriptionOverride || metadata.description}
      keywords={metadata.keywords}
      toolId={metadata.toolId}
      locale={locale as any}
      dict={dict}
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Input */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {htm.inputLabel || "HTML Input"}
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={htm.placeholder || "Paste your HTML here..."}
            rows={16}
            className="w-full rounded-lg border border-zinc-300 bg-white p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
          />
        </div>

        {/* Output */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {htm.outputLabel || "Markdown Output"}
            </label>
            <button
              onClick={() => navigator.clipboard.writeText(markdown)}
              disabled={!markdown}
              className="rounded bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700 hover:bg-zinc-300 disabled:opacity-50 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            >
              {htm.copy || "Copy"}
            </button>
          </div>
          <textarea
            readOnly
            value={markdown}
            rows={16}
            className="w-full rounded-lg border border-zinc-300 bg-zinc-50 p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
          />
        </div>
      </div>
    </ToolLayout>
  );
}
