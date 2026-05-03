import type { Metadata } from "next";
import YouTubeThumbnailClient from "./YouTubeThumbnailClient";

export const metadata: Metadata = {
  title: "YouTube Thumbnail Size Tool | ToolBoxOnline",
  description: "YouTube thumbnail size guide and preview tool. Get the perfect 1280x720 thumbnail dimensions with best practice guidelines.",
  keywords: "youtube thumbnail size, youtube thumbnail dimensions, youtube thumbnail maker, 1280x720 thumbnail, youtube thumbnail preview, youtube thumbnail size checker",
  alternates: { canonical: "/tools/youtube-thumbnail" },
};

export default function YouTubeThumbnailPage() {
  return <YouTubeThumbnailClient />;
}
