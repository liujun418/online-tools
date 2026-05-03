import type { Metadata } from "next";
import MarkdownPreviewClient from "./MarkdownPreviewClient";

export const metadata: Metadata = {
  title: "Markdown Preview | ToolBoxOnline",
  description: "Write Markdown and see a live HTML preview. Free online Markdown editor and previewer.",
  keywords: "markdown editor, markdown preview, online markdown editor, markdown to html, live markdown preview, write markdown online",
  alternates: { canonical: "/tools/markdown-preview" },
};

export default function MarkdownPreviewPage() {
  return <MarkdownPreviewClient />;
}
