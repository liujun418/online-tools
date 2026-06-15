import { readFileSync, writeFileSync } from "fs";

const TOOLS_TS = new URL("../src/lib/tools.ts", import.meta.url).pathname.replace(/^\/([a-z]):\//i, "$1:/");
const BLOG_TS = new URL("../src/lib/blog.ts", import.meta.url).pathname.replace(/^\/([a-z]):\//i, "$1:/");
const src = readFileSync(TOOLS_TS, "utf-8");
const blogSrc = readFileSync(BLOG_TS, "utf-8");

const SITE = "https://toolboxonline.club";
const today = new Date().toISOString().split("T")[0] + "T00:00:00+00:00";

const tools = [];
const re = /{\s*id:\s*"([^"]+)"[\s\S]*?category:\s*"([^"]+)"/g;
let m;
while ((m = re.exec(src))) tools.push({ id: m[1], category: m[2] });

const blogSlugs = [];
const slugRe = /slug:\s*"([^"]+)"/g;
let sm;
while ((sm = slugRe.exec(blogSrc))) blogSlugs.push(sm[1]);

function esc(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;"); }

let xml = '<?xml version="1.0" encoding="utf-8" standalone="yes"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">';

xml += `<url><loc>${esc(SITE)}/</loc><priority>1.0</priority><changefreq>daily</changefreq></url>`;

// Tools
for (const t of tools) {
  xml += `<url><loc>${esc(SITE)}/en/tools/${t.id}/</loc><lastmod>${today}</lastmod><priority>0.9</priority><changefreq>weekly</changefreq></url>`;
}

// Blog
xml += `<url><loc>${esc(SITE)}/en/blog/</loc><lastmod>${today}</lastmod><priority>0.8</priority><changefreq>weekly</changefreq></url>`;
for (const slug of blogSlugs) {
  xml += `<url><loc>${esc(SITE)}/en/blog/${slug}/</loc><lastmod>${today}</lastmod><priority>0.8</priority><changefreq>weekly</changefreq></url>`;
}

// Categories
for (const cat of ["text","developer","calculator","reference","media"]) {
  xml += `<url><loc>${esc(SITE)}/en/category/${cat}/</loc><lastmod>${today}</lastmod><priority>0.7</priority><changefreq>weekly</changefreq></url>`;
}

// Topics
for (const topic of ["student-tools","developer-tools","image-tools","seo-tools","writing-tools"]) {
  xml += `<url><loc>${esc(SITE)}/en/${topic}/</loc><lastmod>${today}</lastmod><priority>0.7</priority><changefreq>weekly</changefreq></url>`;
}

// Static pages
for (const page of ["about","privacy","terms"]) {
  xml += `<url><loc>${esc(SITE)}/en/${page}/</loc><lastmod>${today}</lastmod><priority>0.5</priority><changefreq>monthly</changefreq></url>`;
}

xml += "</urlset>";

const outPath = new URL("../public/sitemap.xml", import.meta.url).pathname.replace(/^\/([a-z]):\//i, "$1:/");
writeFileSync(outPath, xml);
console.log(`Generated sitemap.xml (${tools.length} tools, ${blogSlugs.length} blogs)`);
