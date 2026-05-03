import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.toolboxonline.club";

  const tools = [
    "/tools/word-counter",
    "/tools/case-converter",
    "/tools/lorem-ipsum",
    "/tools/text-to-slug",
    "/tools/json-formatter",
    "/tools/base64-converter",
    "/tools/url-encoder",
    "/tools/hash-generator",
    "/tools/uuid-generator",
    "/tools/password-generator",
    "/tools/age-calculator",
    "/tools/percentage-calculator",
    "/tools/base-converter",
    "/tools/roman-numerals",
  ];

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    ...tools.map((tool) => ({
      url: `${baseUrl}${tool}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
  ];
}
