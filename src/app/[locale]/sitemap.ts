import { MetadataRoute } from "next";
import { tools } from "@/lib/tools";

const SITE_URL = "https://www.toolboxonline.club";
const LOCALES = ["en", "es", "ar"];

const categoryPriority: Record<string, number> = {
  calculator: 0.9,
  developer: 0.85,
  text: 0.8,
  converter: 0.8,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Home pages for each locale
  for (const locale of LOCALES) {
    entries.push({
      url: `${SITE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
      alternates: {
        languages: Object.fromEntries(LOCALES.filter(l => l !== locale).map(l => [l, `${SITE_URL}/${l}`])),
      },
    });
  }

  // Tool pages for each locale
  for (const locale of LOCALES) {
    for (const tool of tools) {
      entries.push({
        url: `${SITE_URL}/${locale}/tools/${tool.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: categoryPriority[tool.category] ?? 0.8,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.filter(l => l !== locale).map(l => [l, `${SITE_URL}/${l}/tools/${tool.id}`])
          ),
        },
      });
    }
  }

  // Static pages for each locale
  const staticPages = ["privacy", "terms", "contact"];
  for (const locale of LOCALES) {
    for (const page of staticPages) {
      entries.push({
        url: `${SITE_URL}/${locale}/${page}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.3,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.filter(l => l !== locale).map(l => [l, `${SITE_URL}/${l}/${page}`])
          ),
        },
      });
    }
  }

  // AI ToolBox sibling site pages
  const aiToolBase = "https://ai.toolboxonline.club";
  const aiToolPages = [
    { path: "", priority: 0.9 },
    { path: "/about", priority: 0.6 },
    { path: "/contact", priority: 0.5 },
    { path: "/pricing", priority: 0.8 },
    { path: "/tools/background-remover", priority: 0.8 },
    { path: "/tools/avatar-generator", priority: 0.8 },
    { path: "/tools/watermark-remover", priority: 0.7 },
    { path: "/tools/photo-restorer", priority: 0.7 },
    { path: "/tools/pdf-to-word", priority: 0.7 },
  ];
  for (const page of aiToolPages) {
    entries.push({
      url: `${aiToolBase}${page.path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: page.priority,
    });
  }

  return entries;
}
