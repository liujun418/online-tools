import type { Metadata } from "next";
import TextDiffClient from "./TextDiffClient";

export const metadata: Metadata = {
  title: "Text Diff Checker | ToolBoxOnline",
  description: "Compare two texts and find the differences side by side. Free online diff tool.",
  keywords: "text diff checker, compare text online, text difference tool, diff checker, compare two texts, text comparison tool",
  alternates: { canonical: "/tools/text-diff" },
};

export default function TextDiffPage() {
  return <TextDiffClient />;
}
