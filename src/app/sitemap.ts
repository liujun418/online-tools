import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.toolboxonline.club";

  const toolPaths = [
    "/tools/word-counter",
    "/tools/case-converter",
    "/tools/lorem-ipsum",
    "/tools/text-to-slug",
    "/tools/text-diff",
    "/tools/remove-duplicate-lines",
    "/tools/text-repeater",
    "/tools/json-formatter",
    "/tools/base64-converter",
    "/tools/url-encoder",
    "/tools/hash-generator",
    "/tools/uuid-generator",
    "/tools/regex-tester",
    "/tools/markdown-preview",
    "/tools/css-minifier",
    "/tools/unix-timestamp",
    "/tools/password-generator",
    "/tools/age-calculator",
    "/tools/percentage-calculator",
    "/tools/bmi-calculator",
    "/tools/unit-converter",
    "/tools/base-converter",
    "/tools/roman-numerals",
    "/tools/color-converter",
    "/tools/html-entities",
    "/tools/json-to-csv",
    "/tools/csv-to-json",
    "/tools/image-to-base64",
    "/tools/loan-calculator",
    "/tools/mortgage-calculator",
    "/tools/calorie-calculator",
    "/tools/roi-calculator",
    "/tools/compound-interest",
    "/tools/income-tax-calculator",
  ];

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    ...toolPaths.map((tool) => ({
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
