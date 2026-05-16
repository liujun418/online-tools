import { readFileSync, writeFileSync } from "fs";

const TOOLS_TS = new URL("../src/lib/tools.ts", import.meta.url).pathname.replace(/^\/([a-z]):\//i, "$1:/");
const src = readFileSync(TOOLS_TS, "utf-8");

const catPri = { calculator: "0.9", developer: "0.85", reference: "0.8", media: "0.8", text: "0.8" };
const SITE = "https://toolboxonline.club";
const LOCALES = ["en", "es", "ar"];
const tools = [];

const re = /{\s*id:\s*"([^"]+)".*?category:\s*"([^"]+)"/gs;
let m;
while ((m = re.exec(src))) {
  tools.push({ id: m[1], category: m[2] });
}

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/'/g, "&apos;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const d = new Date();
const tz = "+00:00";
const pad = (n) => String(n).padStart(2, "0");
const lm = `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}T${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}${tz}`;

let xml = '<?xml version="1.0" encoding="utf-8" standalone="yes"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">';

for (const l of LOCALES) {
  // Home
  xml += `<url><loc>${esc(SITE)}/${l}</loc><lastmod>${lm}</lastmod><priority>1.0</priority><changefreq>weekly</changefreq></url>`;

  // Tools
  for (const t of tools) {
    const p = catPri[t.category] || "0.8";
    xml += `<url><loc>${esc(SITE)}/${l}/tools/${t.id}</loc><lastmod>${lm}</lastmod><priority>${p}</priority><changefreq>monthly</changefreq></url>`;
  }

  // Static pages
  for (const pg of ["about", "privacy", "terms", "contact"]) {
    xml += `<url><loc>${esc(SITE)}/${l}/${pg}</loc><lastmod>${lm}</lastmod><priority>0.3</priority><changefreq>monthly</changefreq></url>`;
  }
}

xml += `</urlset>`;

const out = new URL("../public/sitemap.xml", import.meta.url).pathname.replace(/^\/([a-z]):\//i, "$1:/");
writeFileSync(out, xml);
console.log("Generated", out, `(${tools.length} tools, ${LOCALES.length} locales)`);
