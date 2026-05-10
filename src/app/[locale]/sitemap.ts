import { MetadataRoute } from "next";
import { tools } from "@/lib/tools";

const SITE_URL = "https://toolboxonline.club";
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
  const staticPages = ["about", "privacy", "terms", "contact"];
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

  return entries;
}
