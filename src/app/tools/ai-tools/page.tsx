import type { Metadata } from "next";
import AIToolsClient from "./AIToolsClient";

export const metadata: Metadata = {
  title: "Free AI Tools Directory | ToolBoxOnline",
  description: "Curated directory of the best free AI tools for writing, images, video, coding, audio, productivity, research, and more. All tools are free to use with no signup required where possible.",
  keywords: "free AI tools, best free AI tools, AI chatbot, AI image generator, AI video generator, AI coding assistant, AI writing tool, AI productivity tools, free AI directory",
  alternates: { canonical: "/tools/ai-tools" },
};

export default function AIToolsPage() {
  return <AIToolsClient />;
}
