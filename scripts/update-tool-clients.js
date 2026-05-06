// Update all tool Client.tsx files to accept locale and dict props
const fs = require("fs");
const path = require("path");

const TOOLS_DIR = path.join(__dirname, "..", "src", "app", "tools");

const toolDirs = fs
  .readdirSync(TOOLS_DIR)
  .filter((d) => fs.statSync(path.join(TOOLS_DIR, d)).isDirectory() && d !== ".next");

let updated = 0;

for (const dir of toolDirs) {
  const clientFiles = fs
    .readdirSync(path.join(TOOLS_DIR, dir))
    .filter((f) => f.endsWith("Client.tsx"));

  for (const file of clientFiles) {
    const filePath = path.join(TOOLS_DIR, dir, file);
    let content = fs.readFileSync(filePath, "utf-8");

    // 1. Add Locale import if ToolLayout is imported
    if (content.includes('ToolLayout')) {
      // Add locale/dict props to the component function
      // Find: export default function XxxClient() {
      // Replace with: export default function XxxClient({ locale = "en", dict }: { locale?: string; dict?: Record<string, unknown> } = {}) {
      const funcMatch = content.match(/(export default function \w+Client)\(\)/);
      if (funcMatch) {
        content = content.replace(
          /(export default function \w+Client)\(\)/,
          `$1({ locale = "en", dict }: { locale?: string; dict?: Record<string, unknown> } = {})`
        );
      }

      // 2. Pass locale and dict to ToolLayout
      // Find: <ToolLayout {...metadata}>
      // Replace: <ToolLayout {...metadata} locale={locale as any} dict={dict}>
      if (content.includes("<ToolLayout {...metadata}>")) {
        content = content.replace(
          /<ToolLayout \{...metadata\}>/g,
          `<ToolLayout {...metadata} locale={locale as any} dict={dict}>`
        );
      }
      // Handle cases with newline
      if (content.includes("<ToolLayout\n") || content.match(/<ToolLayout\s+\{[^}]*\}>\n/s)) {
        content = content.replace(
          /(<ToolLayout\s+\{[^}]*\}>)/s,
          `$1 locale={locale as any} dict={dict}>`
        );
        // Fix double > if replacement created it
        content = content.replace(/>>/g, ">");
      }

      updated++;
      fs.writeFileSync(filePath, content);
    }
  }
}

console.log(`Updated ${updated} tool client components`);
