"""Add 6 blogs to free station (272→278) — July 26, 2026"""
import os, sys

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "base64-encoder-decoder-api-authentication-basic-auth",
    title: "Base64 Encoder Decoder for API Authentication How Basic Auth Encodes Credentials and Why You Should Use HTTPS",
    description: "HTTP Basic Authentication encodes your username and password as a Base64 string. It looks encrypted. It is not. Without HTTPS, anyone can decode it. Here's how Basic Auth works and when to use it.",
    date: "2026-07-26",
    category: "Developer",
    tags: ["Base64", "API", "authentication", "Basic Auth", "security"],
    relatedTools: ["base64-converter", "base64-to-image", "hash-generator"],
    content: `<p>You integrate with a third-party API. The documentation says: "Authenticate using HTTP Basic Authentication. Send an Authorization header with the value: Basic [base64-encoded username:password]." You encode your credentials with a <a href="/en/tools/base64-converter">Base64 encoder</a>: <code>username:password</code> becomes <code>dXNlcm5hbWU6cGFzc3dvcmQ=</code>. The encoded string looks encrypted — random letters and numbers, an equals sign at the end. It is not encrypted. It is just encoded. Anyone who intercepts the request can decode the Base64 string and recover the original credentials in under a second. The Base64 encoding provides zero security. It only ensures the credentials are transmitted as ASCII characters — which HTTP headers require. The security comes from HTTPS — which encrypts the entire HTTP request. Without HTTPS, Basic Auth is plaintext credentials transmitted over the internet. With HTTPS, Basic Auth is secure enough for many API integrations.</p>

<p>Here is how Basic Auth works, how Base64 is used in the process, and why HTTPS is the security layer that actually protects your credentials. The client sends a request with an Authorization header. The server receives the request, decodes the Base64 string, and verifies the credentials. Base64 is the transmission format. HTTPS is the security layer. The two are separate. Basic Auth is appropriate for internal APIs, development, and API integrations over HTTPS. It is not appropriate for public-facing applications or transmitting credentials without HTTPS. Use the <a href="/en/tools/base64-converter">Base64 encoder</a> for the format. Use HTTPS for the security. The encoding is reversible. The encryption is not.</p>`
  },
  {
    slug: "qr-code-scanner-retail-inventory-management",
    title: "QR Code Scanner for Retail Inventory Management How to Track Products and Verify Stock with Your Phone Camera",
    description: "Your retail store has 5,000 products. Each has a QR code with the SKU and location. A QR code scanner turns your phone into an inventory management tool. Here's the retail tracking workflow.",
    date: "2026-07-26",
    category: "Developer",
    tags: ["QR code scanner", "retail", "inventory", "management", "tracking"],
    relatedTools: ["qr-code-scanner", "qr-code-generator", "barcode-generator"],
    content: `<p>You run a small retail store with 5,000 products. Your inventory system is a spreadsheet. It is inaccurate. The quarterly inventory count takes three people two full days. A <a href="/en/tools/qr-code-scanner">QR code scanner</a> on every staff member's phone turns inventory management from a quarterly ordeal into a continuous process.</p>

<p>Generate QR codes for each product containing SKU, product name, and shelf location. When staff receive a shipment, sell a product, or notice a discrepancy — scan the QR code. The scan takes 2 seconds. The inventory update is instantaneous. The inventory system becomes a real-time reflection of what is actually on the shelves. QR codes beat barcodes because they encode more information, can be scanned from any angle by a phone camera, and are free to generate and print. The <a href="/en/tools/qr-code-scanner">QR code scanner</a> works on any phone — no special hardware required. Every staff member becomes an inventory manager.</p>`
  },
  {
    slug: "youtube-thumbnail-preview-ab-testing-design-tool",
    title: "YouTube Thumbnail Preview Tool for A/B Testing How to Test Thumbnail Designs Before Publishing",
    description: "You have two thumbnail designs. Which one will get more clicks? A thumbnail preview tool shows how each looks at every size. YouTube's A/B testing tool measures which performs better.",
    date: "2026-07-26",
    category: "Fun & Media",
    tags: ["YouTube thumbnail", "A/B testing", "preview", "design", "click-through rate"],
    relatedTools: ["youtube-thumbnail", "gif-search", "color-picker"],
    content: `<p>You have two thumbnail designs. Design A: your face with an exaggerated expression, yellow background. Design B: close-up of the product, white background. Which one will get more clicks? Use a <a href="/en/tools/youtube-thumbnail">YouTube thumbnail preview</a> tool to check both designs at desktop, mobile, and sidebar sizes. The thumbnail that looks great at full size may be illegible at mobile. The text readable at 1280×720 may be a blur at 200×113. Preview at every size. Fix the designs that fail at mobile. The mobile view is the view that matters.</p>

<p>Then use YouTube's A/B testing tool to test both thumbnails. The data tells you which performs better. Document the winning design. Over time, you develop a thumbnail design system — the patterns that consistently work for your audience. Preview at <a href="/en/tools/youtube-thumbnail">thumbnail preview</a> — design, test, learn, repeat.</p>`
  },
  {
    slug: "url-encoder-vs-html-entities-web-encoding-vs-html-encoding",
    title: "URL Encoder vs HTML Entities Web Encoding vs HTML Encoding — Two Encoding Tools for Completely Different Contexts",
    description: "URL encoder converts spaces to %20 for web addresses. HTML entities converts ampersands to &amp; for web pages. Both encode text. Both are essential. But they encode for completely different destinations.",
    date: "2026-07-26",
    category: "Developer",
    tags: ["URL encoder", "HTML entities", "encoding", "web", "comparison"],
    relatedTools: ["url-encoder", "html-entities", "base64-converter"],
    content: `<p>You need to pass a search query in a URL: <code>?q=coffee & tea</code>. The space and ampersand will break the URL. You use a <a href="/en/tools/url-encoder">URL encoder</a> to convert it to <code>?q=coffee%20%26%20tea</code> — safe for transmission in a URL. Now you need to display the same text in an HTML page: <code>coffee & tea</code>. The ampersand will be interpreted as the start of an HTML entity. You use an <a href="/en/tools/html-entities">HTML entities encoder</a> to convert it to <code>coffee &amp;amp; tea</code> — safe for display in HTML.</p>

<p>Both tools encode text. But they encode for completely different destinations. A URL encoder converts characters that have special meaning in URLs into percent-encoded equivalents. It is for <strong>transport</strong>. An HTML entities encoder converts characters that have special meaning in HTML into named entities. It is for <strong>display</strong>. The rule: if the destination is a URL → URL encoder. If the destination is HTML → HTML entities. Use <a href="/en/tools/url-encoder">URL encoder</a> for transport and <a href="/en/tools/html-entities">HTML entities</a> for display.</p>`
  },
  {
    slug: "compound-interest-vs-roi-calculator-future-vs-past",
    title: "Compound Interest vs ROI Calculator Future Value vs Past Performance — Two Financial Calculators That Answer Completely Different Questions",
    description: "Compound interest projects what your money will be worth in the future. ROI calculates what your investment returned in the past. Both work with money. But the direction of time is opposite.",
    date: "2026-07-26",
    category: "Calculators",
    tags: ["compound interest", "ROI calculator", "future value", "past performance", "comparison"],
    relatedTools: ["compound-interest", "roi-calculator", "percentage-calculator"],
    content: `<p>You are 30 years old. You want to know: if I invest $500 per month at 7% annual return, what will I have at age 65? You use a <a href="/en/tools/compound-interest">compound interest calculator</a>. The answer: approximately $900,000. The calculator projected your money <strong>forward</strong> in time. It answered: "What will this be worth?"</p>

<p>Now you are reviewing your portfolio. You invested $10,000 five years ago. Today it is worth $14,800. What was your return? You use an <a href="/en/tools/roi-calculator">ROI calculator</a>. The answer: 48% total return, 8.2% annualized. The calculator calculated your return <strong>backward</strong> in time. It answered: "How did this perform?"</p>

<p>Both calculators work with money. Both produce percentages. But the direction of time is opposite. Compound interest is a forward-looking projection — an assumption, not a guarantee. ROI is a backward-looking measurement — a fact about what actually happened. Confusing them leads to bad decisions. Past performance does not guarantee future results. Use <a href="/en/tools/compound-interest">compound interest</a> for the future and <a href="/en/tools/roi-calculator">ROI calculator</a> for the past. Projection and measurement. Different directions of time. Different tools.</p>`
  },
  {
    slug: "lateral-thinking-puzzles-psychology-creative-brain",
    title: "The Psychology of Lateral Thinking Puzzles Why Your Brain Needs to Be Tricked to Think Creatively",
    description: "A man walks into a bar and asks for a glass of water. The bartender points a gun at him. The man says 'thank you' and leaves. Why? Lateral thinking puzzles exploit your brain's assumptions. Here's the psychology.",
    date: "2026-07-26",
    category: "Fun & Media",
    tags: ["lateral thinking", "puzzles", "psychology", "creativity", "brain"],
    relatedTools: ["lateral-thinking", "book-of-answers", "food-picker"],
    content: `<p>A man walks into a bar and asks for a glass of water. The bartender points a gun at him. The man says "thank you" and leaves. Why? The answer: the man had hiccups. The bartender scared him, curing the hiccups. Your brain assumed: "gun = threat." The puzzle exploited the assumption. The answer — once revealed — is obvious. This is a <strong>lateral thinking puzzle</strong>. It tricks your brain into making assumptions, then reveals the assumption was wrong.</p>

<p><a href="/en/tools/lateral-thinking">Lateral thinking puzzles</a> are not just entertainment. They are a window into how your brain solves problems. Your brain solves problems by pattern matching — recognizing a situation and applying the solution that worked last time. The system is fast and efficient. It is also assumption-bound. Lateral thinking puzzles exploit this: they present a situation that looks like a familiar pattern, your brain applies the familiar solution, and the familiar solution does not work — because the puzzle deliberately broke the pattern. The insight comes when you break the assumption. The puzzle trains your brain to question assumptions — the core skill of creative thinking. Each puzzle is a micro-exercise in assumption-breaking. The skill transfers to every domain where creative thinking is valuable.</p>

<p>Try a lateral thinking puzzle at <a href="/en/tools/lateral-thinking">lateral thinking puzzles</a> — the puzzle tricks your brain. The insight retrains it.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("Free station: 272->done.")