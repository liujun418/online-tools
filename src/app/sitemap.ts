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
  const now = new Date();

  for (const locale of LOCALES) {
    // Home
    entries.push({
      url: `${SITE_URL}/${locale}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.filter((l) => l !== locale).map((l) => [l, `${SITE_URL}/${l}`])
        ),
      },
    });

    // Tool pages
    for (const tool of tools) {
      entries.push({
        url: `${SITE_URL}/${locale}/tools/${tool.id}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: categoryPriority[tool.category] ?? 0.8,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.filter((l) => l !== locale).map(
              (l) => [l, `${SITE_URL}/${l}/tools/${tool.id}`]
            )
          ),
        },
      });
    }

    // Static pages
    for (const page of ["about", "privacy", "terms", "contact"]) {
      entries.push({
        url: `${SITE_URL}/${locale}/${page}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.3,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.filter((l) => l !== locale).map(
              (l) => [l, `${SITE_URL}/${l}/${page}`]
            )
          ),
        },
      });
    }
  }

  // AI ToolBox sibling site (en locale primary)
  const aiToolBase = "https://ai.toolboxonline.club/en";
  const aiToolPages: { path: string; priority: number; freq?: string }[] = [
    { path: "", priority: 1.0, freq: "daily" },
    { path: "/about", priority: 0.6 },
    { path: "/pricing", priority: 0.8 },
    { path: "/dashboard", priority: 0.7 },
    { path: "/login", priority: 0.4 },
    { path: "/signup", priority: 0.5 },
    { path: "/privacy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
    { path: "/contact", priority: 0.5 },
    { path: "/tools/background-remover", priority: 0.8 },
    { path: "/tools/watermark-remover", priority: 0.7 },
    { path: "/tools/photo-restorer", priority: 0.7 },
    { path: "/tools/avatar-generator", priority: 0.8 },
    { path: "/tools/pdf-to-word", priority: 0.7 },
    { path: "/tools/image-upscaler", priority: 0.8 },
    { path: "/tools/style-transfer", priority: 0.8 },
    { path: "/tools/text-polish", priority: 0.8 },
  ];
  for (const p of aiToolPages) {
    entries.push({
      url: `${aiToolBase}${p.path}`,
      lastModified: now,
      changeFrequency: (p.freq ?? "weekly") as MetadataRoute.Sitemap[number]["changeFrequency"],
      priority: p.priority,
    });
  }

  return entries;
}
