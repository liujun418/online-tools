import type { Metadata } from "next";
import RemoveDuplicateLinesClient from "./RemoveDuplicateLinesClient";

export const metadata: Metadata = {
  title: "Remove Duplicate Lines | ToolBoxOnline",
  description: "Remove duplicate lines from text while preserving order. Clean up your lists instantly.",
  keywords: "remove duplicate lines, remove duplicates from text, deduplicate text, remove duplicate lines online, unique lines tool, text cleaner",
  alternates: { canonical: "/tools/remove-duplicate-lines" },
};

export default function RemoveDuplicateLinesPage() {
  return <RemoveDuplicateLinesClient />;
}
