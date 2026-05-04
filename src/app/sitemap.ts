import { MetadataRoute } from "next";
import { tools } from "@/lib/tools";

const SITE_URL = "https://www.toolboxonline.club";

const categoryPriority: Record<string, number> = {
  calculator: 0.9,
  developer: 0.85,
  text: 0.8,
  converter: 0.8,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const toolEntries = tools.map((tool) => ({
    url: `${SITE_URL}${tool.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: categoryPriority[tool.category] ?? 0.8,
  }));

  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...toolEntries,
    { url: `${SITE_URL}/privacy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
  ];
}
