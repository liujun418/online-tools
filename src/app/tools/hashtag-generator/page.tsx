import type { Metadata } from "next";
import HashtagGeneratorClient from "./HashtagGeneratorClient";

export const metadata: Metadata = {
  title: "Hashtag Generator | ToolBoxOnline",
  description: "Generate relevant hashtags for Instagram, Twitter, and TikTok. Free hashtag generator with trending and popular tags for maximum reach.",
  keywords: "hashtag generator, instagram hashtag generator, twitter hashtags, tiktok hashtag generator, hashtag generator for instagram, popular hashtags, trending hashtags",
  alternates: { canonical: "/tools/hashtag-generator" },
};

export default function HashtagGeneratorPage() {
  return <HashtagGeneratorClient />;
}
