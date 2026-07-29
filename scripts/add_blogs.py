"""Add 6 blogs to free station (290→296) — July 29, 2026"""
import os, sys

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "json-formatter-api-debugging-response-inspection-guide",
    title: "JSON Formatter for API Debugging How to Inspect API Responses and Find Errors Fast",
    description: "Your API returns a 200,000-character JSON response in one collapsed line. A JSON formatter makes it readable, searchable, and debuggable. Here's the API debugging workflow.",
    date: "2026-07-29",
    category: "Developer",
    tags: ["JSON formatter", "API", "debugging", "response", "inspection"],
    relatedTools: ["json-formatter", "json-to-csv", "csv-to-json"],
    content: `<p>Your API returns a response: 200,000 characters of JSON in a single collapsed line. Somewhere in there is the error breaking your frontend. You paste the response into a <a href="/en/tools/json-formatter">JSON formatter</a>. The tool adds indentation, line breaks, and collapsible tree view. The response becomes readable. You find the error — a missing field in a nested object — in 30 seconds.</p>

<p>Here is the API debugging workflow: capture the response from your browser's Network tab or API client, paste into the <a href="/en/tools/json-formatter">JSON formatter</a> for auto-formatting and validation, navigate with collapsible tree view to drill into nested objects, and copy specific values into your debugging notes. The formatter made 200,000 characters readable. You found the error. The debugging session that would have taken an hour took 30 seconds.</p>`
  },
  {
    slug: "csv-to-json-converter-data-migration-legacy-systems",
    title: "CSV to JSON Converter for Data Migration How to Move Data from Legacy Systems to Modern APIs",
    description: "Your legacy system exports data as CSV files. Your new API accepts JSON. A CSV to JSON converter bridges the gap. Here's the data migration workflow.",
    date: "2026-07-29",
    category: "Developer",
    tags: ["CSV to JSON", "data migration", "legacy", "API", "conversion"],
    relatedTools: ["csv-to-json", "json-to-csv", "json-formatter"],
    content: `<p>You are migrating from a legacy system to a modern platform. The legacy system exports data as CSV files. The new platform's API accepts JSON. A <a href="/en/tools/csv-to-json">CSV to JSON converter</a> handles the entire migration. Export each data table as a CSV file. Verify headers and formatting. Process each CSV through the converter — the first row becomes JSON keys, each subsequent row becomes a JSON object. Validate the converted JSON with the <a href="/en/tools/json-formatter">JSON formatter</a>. Spot-check records against the original CSV. Import into the new system. The conversion bridged the format gap between legacy CSV and modern JSON.</p>`
  },
  {
    slug: "dice-roller-tabletop-rpg-game-master-encounter-building",
    title: "Dice Roller for Tabletop RPG Game Masters How to Build Encounters Generate Random Loot and Create NPCs",
    description: "Your D&D party just walked into a tavern. How many patrons are there? What are their names? What loot do they carry? A dice roller and name generator answer all three. Here's the GM's guide.",
    date: "2026-07-29",
    category: "Fun & Media",
    tags: ["dice roller", "RPG", "game master", "encounter", "random"],
    relatedTools: ["dice-roller", "random-name-generator", "random-number-generator"],
    content: `<p>Your D&D party walks into a tavern. They ask: "How many people are here? What are their names? Does anyone look suspicious?" You did not prepare the tavern's population. A <a href="/en/tools/dice-roller">dice roller</a> generates the answers on the spot. Roll 2d6+4 for patron count (6-16 patrons — the bell curve makes 10-12 most common). Roll 1d20 for each patron — on 17-20, that patron has a secret. Use the <a href="/en/tools/random-name-generator">random name generator</a> for names that fit your setting. The dice handle randomness. The names handle identity. You weave it into a story. The players experience a living world.</p>`
  },
  {
    slug: "qr-code-generator-vs-barcode-generator-2d-vs-1d-design",
    title: "QR Code Generator vs Barcode Generator 2D vs 1D Code Design — When to Use Each Format for Scannable Products",
    description: "QR codes encode URLs, contacts, and WiFi passwords. Barcodes encode product SKUs. Both are scannable. But the data and scanners are completely different.",
    date: "2026-07-29",
    category: "Developer",
    tags: ["QR code", "barcode", "2D", "1D", "comparison"],
    relatedTools: ["qr-code-generator", "barcode-generator", "qr-code-scanner"],
    content: `<p>You need a scannable code on a product. QR code or barcode? A <a href="/en/tools/qr-code-generator">QR code</a> encodes up to 4,296 characters and is scanned by phone cameras. A <a href="/en/tools/barcode-generator">barcode</a> encodes 12-20 digits and is scanned by laser scanners at checkout. Use QR codes for consumer-facing applications: marketing materials, menus, business cards, WiFi sharing. Use barcodes for supply-chain applications: product packaging, inventory management, retail checkout. The QR code is the consumer code. The barcode is the supply-chain code. Different data. Different scanners. Different codes.</p>`
  },
  {
    slug: "age-calculator-vs-unit-converter-time-vs-physical-measurement",
    title: "Age Calculator vs Unit Converter Time Measurement vs Physical Measurement — Two Calculators That Measure Completely Different Kinds of Quantity",
    description: "An age calculator measures time elapsed since a date. A unit converter transforms physical quantities between units. Both calculators. Both numbers. Completely different dimensions.",
    date: "2026-07-29",
    category: "Calculators",
    tags: ["age calculator", "unit converter", "time", "measurement", "comparison"],
    relatedTools: ["age-calculator", "unit-converter", "perpetual-calendar"],
    content: `<p>You enter your birth date into an <a href="/en/tools/age-calculator">age calculator</a>. The result: 36 years, 1 month, 15 days. The calculator measured <strong>time elapsed</strong> since a specific date. Now you enter 10 miles into a <a href="/en/tools/unit-converter">unit converter</a>. The result: 16.09 kilometers. The converter transformed a <strong>physical quantity</strong> from one unit to another. Both are calculators. Both produce numbers. But the age calculator measures time — a continuous, irreversible dimension. The unit converter measures physical quantities — length, mass, temperature. Time and space. Different dimensions. Different calculators.</p>`
  },
  {
    slug: "youtube-thumbnail-psychology-click-through-optimization",
    title: "The Psychology of YouTube Thumbnails Why Some Designs Get Clicks and Others Get Scrolled Past",
    description: "Your thumbnail has 200×113 pixels to convince someone to click. The right design triggers curiosity, emotion, or recognition. Here's the psychology behind the click.",
    date: "2026-07-29",
    category: "Fun & Media",
    tags: ["YouTube thumbnail", "psychology", "click-through", "design", "optimization"],
    relatedTools: ["youtube-thumbnail", "color-picker", "gif-search"],
    content: `<p>Your YouTube thumbnail has 200×113 pixels — smaller than a postage stamp on a phone screen. In that space it must grab attention, communicate value, and trigger emotion. Faces draw automatic attention — the human brain has a dedicated face-processing region. Exaggerated expressions work better than neutral ones. Contrast beats blending — bright yellow, red, and green stand out against YouTube's interface. Blue and gray blend in. Curiosity gaps drive clicks — the thumbnail shows something interesting but incomplete. The viewer clicks to close the gap. Use a <a href="/en/tools/youtube-thumbnail">thumbnail preview</a> tool to test your design at every size before publishing. The psychology gets the click. The preview ensures the design works.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("Free station: 290->done.")