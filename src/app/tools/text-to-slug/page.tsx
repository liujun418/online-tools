import type { Metadata } from "next";
import TextToSlugClient from "./TextToSlugClient";

export const metadata: Metadata = {
  title: "Text to Slug Converter | ToolBoxOnline",
  description: "Convert any text into a clean URL-friendly slug string. Free online slug generator.",
  keywords: "slug generator, text to slug, url slug creator, seo slug generator, url friendly converter, generate slug from title",
  alternates: { canonical: "/tools/text-to-slug" },
};

export default function TextToSlugPage() {
  return <TextToSlugClient />;
}
