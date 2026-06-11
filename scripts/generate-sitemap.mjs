import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";

const TOOLS_TS = new URL("../src/lib/tools.ts", import.meta.url).pathname.replace(/^\/([a-z]):\//i, "$1:/");
const BLOG_TS = new URL("../src/lib/blog.ts", import.meta.url).pathname.replace(/^\/([a-z]):\//i, "$1:/");
const src = readFileSync(TOOLS_TS, "utf-8");
const blogSrc = readFileSync(BLOG_TS, "utf-8");

const SITE = "https://toolboxonline.club";
const LOCALES = ["en", "es", "ar"];
const XDEFAULT = "en";
const today = new Date().toISOString().split("T")[0] + "T00:00:00+00:00";

const tools = [];
const re = /{\s*id:\s*"([^"]+)"[\s\S]*?category:\s*"([^"]+)"/g;
let m;
while ((m = re.exec(src))) tools.push({ id: m[1], category: m[2] });

const blogSlugs = [];
const slugRe = /slug:\s*"([^"]+)"/g;
let sm;
while ((sm = slugRe.exec(blogSrc))) blogSlugs.push(sm[1]);

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/'/g, "&apos;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function hreflangLinks(path) {
  let s = "";
  for (const l of LOCALES) s += `\n    <xhtml:link rel="alternate" hreflang="${l}" href="${esc(SITE)}/${l}/${path}"/>`;
  s += `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${esc(SITE)}/${XDEFAULT}/${path}"/>`;
  return s;
}

function makeUrlSet(urls) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';
  for (const u of urls) xml += u;
  xml += "</urlset>\n";
  return xml;
}

const outDir = new URL("../public/", import.meta.url).pathname.replace(/^\/([a-z]):\//i, "$1:/");

// Sitemap 1: Tools
let toolsXml = "";
for (const t of tools) {
  for (const l of LOCALES) {
    toolsXml += `  <url>\n    <loc>${esc(SITE)}/${l}/tools/${t.id}/</loc>\n    <lastmod>${today}</lastmod>\n    <priority>0.9</priority>\n    <changefreq>weekly</changefreq>${hreflangLinks(`tools/${t.id}/`)}\n  </url>\n`;
  }
}
writeFileSync(join(outDir, "sitemap-tools.xml"), makeUrlSet([toolsXml]));
console.log(`sitemap-tools.xml: ${tools.length} tools`);

// Sitemap 2: Blog posts
let blogXml = "";
for (const l of LOCALES) {
  blogXml += `  <url>\n    <loc>${esc(SITE)}/${l}/blog/</loc>\n    <lastmod>${today}</lastmod>\n    <priority>0.8</priority>\n    <changefreq>weekly</changefreq>\n  </url>\n`;
}
for (const slug of blogSlugs) {
  for (const l of LOCALES) {
    blogXml += `  <url>\n    <loc>${esc(SITE)}/${l}/blog/${slug}/</loc>\n    <lastmod>${today}</lastmod>\n    <priority>0.8</priority>\n    <changefreq>weekly</changefreq>${hreflangLinks(`blog/${slug}/`)}\n  </url>\n`;
  }
}
writeFileSync(join(outDir, "sitemap-blog.xml"), makeUrlSet([blogXml]));
console.log(`sitemap-blog.xml: ${blogSlugs.length} blog posts`);

// Sitemap 3: Pages (category, topic, static)
let pagesXml = "";
const categories = ["text", "developer", "calculator", "reference", "media"];
for (const cat of categories) {
  for (const l of LOCALES) {
    pagesXml += `  <url>\n    <loc>${esc(SITE)}/${l}/category/${cat}/</loc>\n    <lastmod>${today}</lastmod>\n    <priority>0.7</priority>\n    <changefreq>weekly</changefreq>${hreflangLinks(`category/${cat}/`)}\n  </url>\n`;
  }
}
const topics = ["student-tools", "developer-tools", "image-tools", "seo-tools", "writing-tools"];
for (const topic of topics) {
  for (const l of LOCALES) {
    pagesXml += `  <url>\n    <loc>${esc(SITE)}/${l}/${topic}/</loc>\n    <lastmod>${today}</lastmod>\n    <priority>0.7</priority>\n    <changefreq>weekly</changefreq>${hreflangLinks(topic + "/")}\n  </url>\n`;
  }
}
const staticPages = ["about", "privacy", "terms"];
for (const page of staticPages) {
  for (const l of LOCALES) {
    pagesXml += `  <url>\n    <loc>${esc(SITE)}/${l}/${page}/</loc>\n    <lastmod>${today}</lastmod>\n    <priority>0.5</priority>\n    <changefreq>monthly</changefreq>${hreflangLinks(page + "/")}\n  </url>\n`;
  }
}
writeFileSync(join(outDir, "sitemap-pages.xml"), makeUrlSet([pagesXml]));
console.log(`sitemap-pages.xml: categories + topics + static`);

// Sitemap Index
let index = '<?xml version="1.0" encoding="UTF-8"?>\n';
index += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
index += `  <sitemap><loc>${esc(SITE)}/sitemap-tools.xml</loc><lastmod>${today}</lastmod></sitemap>\n`;
index += `  <sitemap><loc>${esc(SITE)}/sitemap-blog.xml</loc><lastmod>${today}</lastmod></sitemap>\n`;
index += `  <sitemap><loc>${esc(SITE)}/sitemap-pages.xml</loc><lastmod>${today}</lastmod></sitemap>\n`;
index += "</sitemapindex>\n";
writeFileSync(join(outDir, "sitemap.xml"), index);
console.log("sitemap.xml: index file");
