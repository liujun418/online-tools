// Generates i18n-aware page.tsx for each tool under src/app/[locale]/tools/
const fs = require("fs");
const path = require("path");

const TOOLS_DIR = path.join(__dirname, "..", "src", "app", "tools");
const LOCALE_TOOLS_DIR = path.join(__dirname, "..", "src", "app", "[locale]", "tools");
const LOCALES = ["en", "es", "ar"];

// Get all tool directories
const toolIds = fs
  .readdirSync(TOOLS_DIR)
  .filter((d) => fs.statSync(path.join(TOOLS_DIR, d)).isDirectory());

// Create locale tool directories
for (const locale of LOCALES) {
  const localeDir = path.join(LOCALE_TOOLS_DIR, locale);
  if (!fs.existsSync(localeDir)) {
    fs.mkdirSync(localeDir, { recursive: true });
  }

  for (const toolId of toolIds) {
    const toolDir = path.join(localeDir, toolId);
    if (!fs.existsSync(toolDir)) {
      fs.mkdirSync(toolDir, { recursive: true });
    }

    // Find the Client component file
    const clientFile = fs
      .readdirSync(path.join(TOOLS_DIR, toolId))
      .find((f) => f.endsWith("Client.tsx"));

    if (!clientFile) {
      console.warn(`No Client component found for tool: ${toolId}`);
      continue;
    }

    // Extract the component name from the file (e.g., WordCounterClient)
    const componentName = clientFile.replace(".tsx", "");
    const relativePath = `@/app/tools/${toolId}/${componentName}`;

    const pageContent = `import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ${componentName} from "${relativePath}";
import { tools } from "@/lib/tools";
import { isValidLocale, getDictionary } from "@/lib/i18n";

const SITE_URL = "https://www.toolboxonline.club";
const SITE_NAME = "ToolBoxOnline";
const OG_IMAGE = \`\${SITE_URL}/og-default.png\`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  const tool = tools.find((t) => t.id === "${toolId}");
  if (!tool) return {};

  const name = (tool as any).nameTranslations?.[locale] || tool.name;
  const desc = (tool as any).descriptionTranslations?.[locale] || tool.description;
  const seoTitle = (tool as any).seoTitleTranslations?.[locale] || tool.seoTitle || tool.name;
  const seoDesc = (tool as any).seoDescriptionTranslations?.[locale] || tool.seoDescription || tool.description;
  const localeMap: Record<string, string> = { en: "en_US", es: "es_ES", ar: "ar_SA" };
  const canonicalPath = "/tools/${toolId}";

  return {
    title: \`\${seoTitle} | \${SITE_NAME}\`,
    description: seoDesc,
    keywords: tool.seoKeywords?.join(", ") ?? "",
    authors: [{ name: SITE_NAME }],
    robots: { index: true, follow: true },
    alternates: {
      canonical: \`\${SITE_URL}\${canonicalPath}\`,
      languages: {
        en: \`\${SITE_URL}/en/tools/${toolId}\`,
        es: \`\${SITE_URL}/es/tools/${toolId}\`,
        ar: \`\${SITE_URL}/ar/tools/${toolId}\`,
      },
    },
    openGraph: {
      type: "website",
      locale: localeMap[locale] || "en_US",
      url: \`\${SITE_URL}/\${locale}/tools/${toolId}\`,
      siteName: SITE_NAME,
      title: \`\${seoTitle} | \${SITE_NAME}\`,
      description: seoDesc,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: name }],
    },
    twitter: {
      card: "summary_large_image",
      title: \`\${seoTitle} | \${SITE_NAME}\`,
      description: seoDesc,
    },
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale);

  return <${componentName} locale={locale} dict={dict} />;
}
`;

    fs.writeFileSync(path.join(toolDir, "page.tsx"), pageContent);
    console.log(`Created: [${locale}]/tools/${toolId}/page.tsx`);
  }
}

console.log(`\nDone! Generated pages for ${toolIds.length} tools × 3 locales = ${toolIds.length * 3} pages.`);
