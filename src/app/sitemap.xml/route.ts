import { tools } from "@/lib/tools";

const SITE_URL = "https://toolboxonline.club";
const LOCALES = ["en", "es", "ar"];

const categoryPriority: Record<string, string> = {
  calculator: "0.9",
  developer: "0.85",
  text: "0.8",
  converter: "0.8",
};

function iso(offsetHours: number): string {
  const d = new Date();
  d.setUTCHours(d.getUTCHours() + offsetHours);
  const sign = offsetHours >= 0 ? "+" : "-";
  const h = String(Math.abs(offsetHours)).padStart(2, "0");
  return d.toISOString().replace(/\.\d{3}Z$/, `${sign}${h}:00`);
}

const now = iso(0);

function urlEl(
  loc: string,
  priority: string,
  changefreq: string,
  lastmod: string | null,
  hreflangs: [string, string][] | null
): string {
  let xml = `<url><loc>${esc(loc)}</loc>`;
  if (lastmod !== null) {
    xml += `<lastmod>${lastmod}</lastmod>`;
  }
  xml += `<priority>${priority}</priority><changefreq>${changefreq}</changefreq>`;
  if (hreflangs) {
    for (const [lang, href] of hreflangs) {
      xml += `<xhtml:link rel="alternate" hreflang="${lang}" href="${esc(href)}"/>`;
    }
  }
  xml += `</url>`;
  return xml;
}

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/'/g, "&apos;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function GET(): Promise<Response> {
  const parts: string[] = [];

  // Home + tools + static for each locale
  for (const locale of LOCALES) {
    parts.push(
      urlEl(
        `${SITE_URL}/${locale}`, "1.0", "weekly", now,
        LOCALES.filter((l) => l !== locale).map((l) => [l, `${SITE_URL}/${l}`])
      )
    );
    for (const tool of tools) {
      parts.push(
        urlEl(
          `${SITE_URL}/${locale}/tools/${tool.id}`,
          categoryPriority[tool.category] ?? "0.8",
          "monthly", now,
          LOCALES.filter((l) => l !== locale).map((l) => [l, `${SITE_URL}/${l}/tools/${tool.id}`])
        )
      );
    }
    for (const page of ["about", "privacy", "terms", "contact"]) {
      parts.push(
        urlEl(
          `${SITE_URL}/${locale}/${page}`, "0.3", "monthly", now,
          LOCALES.filter((l) => l !== locale).map((l) => [l, `${SITE_URL}/${l}/${page}`])
        )
      );
    }
  }

  const body = `<?xml version="1.0" encoding="utf-8" standalone="yes"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${parts.join("")}</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}

export const dynamic = "force-static";
