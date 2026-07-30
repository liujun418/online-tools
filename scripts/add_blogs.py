"""Add 6 blogs to free station (289→295) — July 30, 2026"""
import os, sys

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "svg-minifier-web-performance-core-web-vitals-lcp-optimization",
    title: "SVG Minifier for Web Performance How to Optimize SVGs to Improve Core Web Vitals and LCP Scores",
    description: "Your website has 50 SVG icons. They add 200KB to every page load. An SVG minifier reduces them to 80KB — improving your LCP score. Here's the web performance optimization workflow.",
    date: "2026-07-30",
    category: "Developer",
    tags: ["SVG minifier", "web performance", "Core Web Vitals", "LCP", "optimization"],
    relatedTools: ["svg-minifier", "css-minifier", "code-formatter"],
    content: `<p>Your website loads 50 SVG icons on every page. The total file size is 200KB. That is 200KB of SVG being parsed and rendered before the page becomes interactive. Google's Core Web Vitals measure your Largest Contentful Paint (LCP) — the time it takes for the largest visible element to render. A good LCP score is under 2.5 seconds. Your 200KB of SVG icons is adding 300-500ms to your LCP. The fix: an <a href="/en/tools/svg-minifier">SVG minifier</a>. Minify the icons. Reduce the file size. Improve the LCP score.</p>

<h2>How SVG Size Affects LCP</h2>

<p>Every SVG file on your page must be: downloaded (network time), parsed (CPU time), and rendered (paint time). The larger the SVG, the longer each step takes. Minification reduces all three: smaller files download faster, simpler markup parses faster, and fewer elements render faster. A 60% size reduction typically translates to a 30-40% LCP improvement for SVG-heavy pages.</p>

<h2>The Optimization Workflow</h2>

<p>Run every SVG through the <a href="/en/tools/svg-minifier">SVG minifier</a>. The minifier removes: editor metadata, comments, whitespace, and excessive numeric precision. Integrate minification into your build pipeline. The minified SVGs are the production assets. The original SVGs are the source files. The build pipeline handles the optimization automatically. Your LCP score improves. Your users experience a faster page load.</p>`
  },
  {
    slug: "json-to-csv-data-analysts-api-export-spreadsheet-analysis",
    title: "JSON to CSV for Data Analysts How to Export API Data to Spreadsheets for Analysis",
    description: "An API returns JSON. Excel reads CSV. A JSON to CSV converter bridges the gap. Here's the data analyst's API-to-spreadsheet workflow.",
    date: "2026-07-30",
    category: "Developer",
    tags: ["JSON to CSV", "data analysis", "API", "spreadsheet", "Excel"],
    relatedTools: ["json-to-csv", "csv-to-json", "json-formatter"],
    content: `<p>You query an API. The response is a JSON array of 5,000 customer records — nested objects, typed fields, and arrays. You need to analyze this data in Excel. Excel does not read JSON natively. You need CSV. A <a href="/en/tools/json-to-csv">JSON to CSV converter</a> flattens the nested JSON into a flat table. The CSV opens in Excel. The analysis begins.</p>

<h2>The API-to-Spreadsheet Pipeline</h2>

<p>Query the API and get the JSON response. Paste into the <a href="/en/tools/json-to-csv">JSON to CSV converter</a>. The converter: flattens nested objects into dot-notation columns, converts arrays to comma-separated strings, and preserves data types where possible. Download the CSV. Open in Excel. The data that was locked in JSON is now analyzable in a spreadsheet. The converter bridged the format gap between API data and spreadsheet tools.</p>`
  },
  {
    slug: "base64-encoder-decoder-websocket-binary-data-text-transport",
    title: "Base64 Encoder Decoder for WebSocket Communication How to Transport Binary Data Through Text-Based Protocols",
    description: "WebSocket connections are text-based. Binary data like images and files must be Base64-encoded for transmission. Here's the WebSocket binary data transport guide.",
    date: "2026-07-30",
    category: "Developer",
    tags: ["Base64", "WebSocket", "binary", "text", "transport"],
    relatedTools: ["base64-converter", "base64-to-image", "image-to-base64"],
    content: `<p>You are building a real-time chat application with file sharing. The WebSocket connection transmits text messages. When a user sends an image, the binary image data must be encoded as text for transmission through the WebSocket. The receiver decodes the text back to binary. The encoding is Base64. The <a href="/en/tools/base64-converter">Base64 encoder/decoder</a> is the transport layer between binary data and the text-based WebSocket protocol.</p>

<h2>How Binary Data Travels Through Text Protocols</h2>

<p>WebSocket messages are text or binary frames. Text frames are universally supported. Binary frames have better performance but less compatibility. When binary frames are not available, Base64 encoding bridges the gap: the sender encodes the binary image to a Base64 string, transmits the string through the WebSocket, and the receiver decodes the string back to binary. The overhead is 33% — every 3 bytes of binary become 4 characters of Base64. The trade-off is compatibility. The <a href="/en/tools/base64-converter">Base64 encoder</a> handles the encoding. The WebSocket handles the transport. The decoder recovers the binary data.</p>`
  },
  {
    slug: "markdown-preview-vs-html-to-markdown-render-vs-convert",
    title: "Markdown Preview vs HTML to Markdown Render vs Convert — Two Markdown Tools That Work in Opposite Directions",
    description: "Markdown preview renders Markdown as formatted text. HTML to Markdown converts HTML to Markdown syntax. One creates the view. One creates the source. They are inverse operations.",
    date: "2026-07-30",
    category: "Developer",
    tags: ["Markdown preview", "HTML to Markdown", "render", "convert", "comparison"],
    relatedTools: ["markdown-preview", "html-to-markdown", "text-diff"],
    content: `<p>You write documentation in Markdown. You use a <a href="/en/tools/markdown-preview">Markdown preview</a> to see how it will render. The preview shows you the formatted output. You are looking at the <strong>rendered view</strong>.</p>

<p>Now you have an old HTML document. You want to convert it to Markdown so you can edit it in a text editor. You use an <a href="/en/tools/html-to-markdown">HTML to Markdown converter</a>. The converter produces Markdown syntax from HTML. You are creating the <strong>source code</strong>.</p>

<p>The two tools are inverse operations. Markdown preview: Markdown → HTML (render). HTML to Markdown: HTML → Markdown (convert). One goes from source to view. The other goes from view to source. Use the preview to check your work. Use the converter to migrate content. Different directions. Different tools.</p>`
  },
  {
    slug: "color-picker-vs-color-names-visual-selection-vs-named-reference",
    title: "Color Picker vs Color Names Visual Selection vs Named Reference — Two Color Tools for Different Design Workflows",
    description: "Color picker lets you visually select any color. Color names reference provides the 148 CSS named colors. One is for exploration. One is for quick reference. Both are essential for web design.",
    date: "2026-07-30",
    category: "Developer",
    tags: ["color picker", "color names", "visual", "reference", "comparison"],
    relatedTools: ["color-picker", "color-names", "color-contrast-checker"],
    content: `<p>You need a shade of blue for a button. You open a <a href="/en/tools/color-picker">color picker</a>. You visually select a blue that looks right. The picker gives you the hex code: #3B82F6. The picker is for <strong>exploration</strong> — finding the right color by looking at it.</p>

<p>Now you need a named blue for quick CSS prototyping. You open a <a href="/en/tools/color-names">color names reference</a>. You find "cornflowerblue" — a soft, elegant blue. The reference is for <strong>speed</strong> — typing a name is faster than looking up a hex code. The picker is the exploration tool. The names reference is the efficiency tool. Use the picker when you are designing. Use the names reference when you are coding. Different workflows. Different tools.</p>`
  },
  {
    slug: "barcode-history-morse-code-to-upc-to-qr-code",
    title: "The History of Barcodes From Morse Code to UPC to QR Codes — How Lines and Squares Changed Global Commerce",
    description: "The first barcode was inspired by Morse code — extended dots and dashes. Today, 6 billion barcodes are scanned every day. Here's the 70-year history of the technology that runs the global supply chain.",
    date: "2026-07-30",
    category: "Developer",
    tags: ["barcode", "history", "UPC", "QR code", "commerce"],
    relatedTools: ["barcode-generator", "qr-code-generator", "qr-code-scanner"],
    content: `<p>In 1948, Norman Woodland, a graduate student at Drexel Institute, was inspired by Morse code to create a system for encoding product information. He extended the dots and dashes downward — creating the first barcode concept. The patent was filed in 1949 and granted in 1952. The first commercial barcode scan occurred on June 26, 1974: a pack of Wrigley's Juicy Fruit gum at a Marsh supermarket in Troy, Ohio. The pack of gum is now in the Smithsonian. The barcode is everywhere.</p>

<p>Today, approximately 6 billion barcodes are scanned every day — on products, packages, tickets, and documents. The barcode is the invisible infrastructure of global commerce. Here is the 70-year history.</p>

<h2>1948-1974: From Concept to Commerce</h2>

<p>Woodland's first barcode was a "bullseye" pattern — concentric circles. It was inspired by Morse code: narrow lines were dots, wide lines were dashes. The bullseye was functional but impractical — it required a complex scanner. The linear barcode (the familiar vertical lines) replaced it. The Universal Product Code (UPC) was adopted in 1973. The first scan in 1974 launched a revolution in inventory management, checkout speed, and supply chain visibility.</p>

<h2>1974-Present: From Lines to Squares</h2>

<p>The barcode encoded a 12-digit number. The QR code (1994) encoded thousands of characters — URLs, contact cards, WiFi passwords. The barcode was for commerce. The QR code was for consumers. The barcode scanner was a laser. The QR code scanner was a phone camera. The technology changed. The principle — encode information in a machine-readable pattern — remained the same. The <a href="/en/tools/barcode-generator">barcode generator</a> creates the codes that run the global supply chain. The QR code puts the same principle in every consumer's pocket. Seventy years after Norman Woodland drew lines in the sand, his idea is scanned 6 billion times a day.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("Free station: 289->done.")