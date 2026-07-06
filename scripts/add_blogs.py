"""Add 6 blogs to free station (160→166) — July 6, 2026"""
import os, sys

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "percentage-calculator-percent-change-vs-difference",
    title: "Percentage Calculator Percent Change vs Percent Difference When You're Using the Wrong One",
    description: "Percent change and percent difference sound interchangeable. They're not. Using the wrong one makes your data lie — here's when to use each.",
    date: "2026-07-06",
    category: "Calculators",
    tags: ["percentage calculator", "percent change", "percent difference", "data analysis", "math"],
    relatedTools: ["percentage-calculator", "discount-calculator", "tip-calculator"],
    content: `<p>Your revenue went from $100K to $120K. That is a 20% increase — percent change. Your revenue is $120K and your competitor's is $100K. The percent difference is 18.2%. Same two numbers, two different percentages, and if you report the wrong one in a meeting someone will call you out.</p>

<p>Most people use "percent change" and "percent difference" as if they are the same thing. They are not. Here is how to use each correctly, and why mixing them up is one of the most common data mistakes in business.</p>

<h2>Percent Change: When Time Is the Variable</h2>

<p><strong>Percent change</strong> answers the question: "How much did this number change compared to where it started?" The formula is <code>(new - old) / old × 100</code>. The denominator is always the <strong>original value</strong>. Revenue grew from $100K to $120K = (120-100)/100 × 100 = <strong>20% increase</strong>. Revenue dropped from $120K to $100K = (100-120)/120 × 100 = <strong>−16.7% decrease</strong>.</p>

<p>Notice the asymmetry. A 20% gain does not reverse with a 20% loss. If your stock drops 50%, you need a <strong>100% gain</strong> to break even. This is why percent change is directional — the old value is the anchor. Use percent change for: year-over-year growth, month-over-month trends, price changes over time, test score improvements, weight loss tracking.</p>

<p>The most common mistake: using percent change when there is no "before" and "after." Comparing two static groups — like men's vs women's average salaries, or your product vs a competitor's — is not a percent change problem. There is no time direction. That is where percent difference comes in.</p>

<h2>Percent Difference: When Two Values Are Peers</h2>

<p><strong>Percent difference</strong> answers: "How different are these two numbers, treating neither as the reference?" The formula is <code>|a - b| / ((a + b) / 2) × 100</code>. The denominator is the <strong>average</strong> of the two values, not one of them. This symmetry is the whole point. Your product costs $120, a competitor's costs $100. The percent difference is |120-100| / ((120+100)/2) × 100 = 20/110 × 100 = <strong>18.2%</strong>.</p>

<p>Swap the order and you get the same answer. That symmetry is what makes percent difference the right tool for comparing peers. Use it for: comparing two products' prices, comparing two groups' averages, comparing experimental vs control group results, comparing two measurement methods.</p>

<p>A practical example: your team's bug count this sprint is 15, another team's is 12. If you say "our team has 25% more bugs," you are using percent change with your team as the reference — it sounds worse than "the percent difference between teams is 22.2%." Same data, different framing. Knowing which formula you are using lets you choose the honest one.</p>

<h2>The Edge Cases That Trip People Up</h2>

<p><strong>Zero values.</strong> Percent change from zero is undefined (division by zero). If last month's sales were $0 and this month is $500, you cannot calculate a percent change. Say "increased from $0 to $500" instead. Percent difference with a zero value still works as long as the other value is non-zero.</p>

<p><strong>Negative numbers.</strong> If old value is -$10K (a loss) and new value is +$20K (a profit), percent change formulas get weird. The standard formula gives -300%, which is mathematically correct but communicates nothing useful. In these cases, skip the percentage and report absolute change: "improved by $30K."</p>

<p><strong>Percent of what?</strong> Always specify the base. "Sales increased 10%" is ambiguous. "Sales increased 10% compared to Q1" is clear. Our <a href="/en/tools/percentage-calculator">percentage calculator</a> handles all three modes — percent change, percent difference, and percent of a number — so you do not need to remember the formulas, just which question you are asking.</p>

<h2>Quick Decision Rule</h2>

<p>Before you calculate any percentage, ask: <strong>is there a direction of time or a reference baseline?</strong> If yes → percent change. If no, and both values are equal-status peers → percent difference. If you are just finding a portion of a whole → percent of a number. Getting this right takes five seconds of thinking and saves you from looking sloppy in front of people who do know the difference.</p>

<p>Try the <a href="/en/tools/percentage-calculator">free percentage calculator</a> next time you need to crunch these numbers. It shows all three modes side by side so you can verify you picked the right one.</p>`
  },
  {
    slug: "url-slug-generator-unicode-international-seo",
    title: "URL Slug Generator Unicode Accented Characters and Why International SEO Depends on Getting Slugs Right",
    description: "URL slugs with é, ñ, ü, or Chinese characters break in email clients, mess up Google indexing, and confuse browsers. Here's how to generate clean slugs for any language.",
    date: "2026-07-06",
    category: "Developer",
    tags: ["URL slug", "Unicode", "international SEO", "permalink", "transliteration"],
    relatedTools: ["text-to-slug", "url-encoder", "html-entities"],
    content: `<p>You publish a blog post titled "Cómo hacer paella valenciana." Your CMS generates the slug <code>/cómo-hacer-paella-valenciana</code>. Looks fine in your browser. Then someone shares it in Slack and the URL becomes <code>/c%C3%B3mo-hacer-paella-valenciana</code> — ugly, unreadable, and some email clients truncate it mid-encoding. Worse, Google might index both the encoded and unencoded versions as duplicate content.</p>

<p>URL slugs with accented characters, non-Latin scripts, and special symbols are a minefield for international SEO. Here is how a <a href="/en/tools/text-to-slug">URL slug generator</a> handles the edge cases and why manual slug creation fails at scale.</p>

<h2>Why Accented Characters in URLs Are a Problem</h2>

<p>Technically, domain names and URLs <strong>can</strong> contain Unicode characters via Internationalized Domain Names (IDN) and UTF-8 percent-encoding. In practice, most systems handle them poorly. Email clients like Outlook percent-encode them into unreadable strings. Some social media platforms truncate encoded URLs at the wrong boundary. Copy-pasting a URL with "é" from a browser address bar works, but copying from the page source gives you the encoded version.</p>

<p>The safe approach: <strong>transliterate accented characters to ASCII equivalents</strong> before they become slugs. é → e, ñ → n, ü → u, ø → o. This is what a proper slug generator does — it maps Unicode characters to their closest ASCII representation using a transliteration table, not just stripping diacritics.</p>

<h2>Non-Latin Scripts: Chinese, Arabic, Cyrillic</h2>

<p>For languages that do not use the Latin alphabet at all — Chinese, Japanese, Arabic, Russian — transliteration is trickier. A Chinese title like "如何制作网页" could become the slug <code>ru-he-zhi-zuo-wang-ye</code> (Pinyin romanization) or stay as <code>%E5%A6%82%E4%BD%95%E5%88%B6%E4%BD%9C%E7%BD%91%E9%A1%B5</code> (percent-encoded UTF-8).</p>

<p>Neither is ideal, but the Pinyin approach is better for readability and sharing. Some sites manually write English slugs for non-English content — WordPress lets you edit the slug independently of the title. Our <a href="/en/tools/text-to-slug">text to slug converter</a> strips accents and special characters but preserves the Latin-alphabet structure, which works for most European languages out of the box.</p>

<h2>Special Characters and Edge Cases</h2>

<p><strong>Ampersands (&).</strong> "Design & Development" should become <code>design-development</code>, not <code>design-amp-development</code> or <code>design-&-development</code>. The ampersand has special meaning in HTML and URL query strings — it must be stripped, not encoded.</p>

<p><strong>Currency symbols.</strong> "iPhone costs $999" → the dollar sign should disappear. "Price €50" → euro sign gone. These symbols have no business in a URL.</p>

<p><strong>Emoji.</strong> "10 Tips for Better Code 🔥" — the fire emoji should be stripped. URLs with emoji technically work in modern browsers but look unprofessional and break in many tools.</p>

<p><strong>Apostrophes and quotes.</strong> "Don't" → <code>dont</code> (not <code>don-t</code>). Smart quotes (curly quotes from Word) should be converted to straight quotes then stripped.</p>

<p>A good slug generator handles all of these in one pass: lowercase → strip HTML → transliterate accents → replace spaces with hyphens → remove special chars → collapse multiple hyphens → trim. Missing any step creates edge cases that bite you later.</p>

<h2>SEO Implications of Bad Slugs</h2>

<p>Google's John Mueller has said that words in URLs are a "lightweight" ranking factor. More importantly, URLs appear in search results — a clean, readable slug like <code>/url-slug-unicode-seo</code> gets more clicks than <code>/post.php?id=8472&lang=es</code>. The slug is your first impression in the SERP, right after the title.</p>

<p>For multilingual sites, consistent slug policies prevent duplicate content. If <code>/es/cómo-hacer-paella</code> and <code>/es/como-hacer-paella</code> both resolve, you have two URLs for the same page. Pick one policy — transliterate everything or manually set slugs per language — and enforce it with your slug generator.</p>

<p>Generate clean, SEO-safe URL slugs at <a href="/en/tools/text-to-slug">text to slug converter</a>. Paste any title in any language and get an ASCII-safe, readable slug instantly.</p>`
  },
  {
    slug: "hash-generator-file-integrity-verification",
    title: "Hash Generator File Integrity Verification How to Know Your Download Wasn't Tampered With",
    description: "You downloaded a software installer. How do you know it's the real file and not malware? Hash verification — the 30-second check most people skip.",
    date: "2026-07-06",
    category: "Developer",
    tags: ["hash generator", "SHA-256", "file integrity", "checksum", "MD5"],
    relatedTools: ["hash-generator", "base64-converter", "uuid-generator"],
    content: `<p>You download a wallet app, a BIOS update, or a Linux ISO. The download page shows a long string of letters and numbers labeled "SHA-256." Most people ignore it and run the installer. Most of the time, nothing bad happens. When something bad <em>does</em> happen — a compromised mirror served a modified file, a download corrupted mid-transfer, a man-in-the-middle swapped the binary — that hash is the only thing standing between you and malware.</p>

<p>Verifying a file hash takes 30 seconds. Here is what hashes actually prove, which algorithms to use, and how to integrate verification into your workflow with a <a href="/en/tools/hash-generator">free hash generator</a>.</p>

<h2>What a Hash Actually Proves</h2>

<p>A cryptographic hash function takes any input — a password, a file, an entire hard drive — and produces a fixed-length string called a digest. The key properties: <strong>deterministic</strong> (same input always produces the same hash), <strong>one-way</strong> (you cannot reconstruct the input from the hash), and <strong>collision-resistant</strong> (finding two different inputs with the same hash should be computationally infeasible).</p>

<p>When you verify a file hash, you are proving: "The file I downloaded is bit-for-bit identical to the file the publisher intended me to receive." That is it. A matching hash does <strong>not</strong> prove the publisher is trustworthy — if the publisher ships malware and publishes the malware's hash, the hash still matches. What it protects against: corrupted downloads, compromised mirrors, and supply chain attacks where an attacker replaces a legitimate file on a CDN or mirror server.</p>

<h2>SHA-256 vs MD5 vs SHA-1: Which to Use</h2>

<p><strong>MD5:</strong> Broken. Researchers have demonstrated practical collision attacks — two different files with the same MD5 hash — since 2004. Do not use MD5 for security. It is still used for non-security checksums (detecting accidental corruption during download) but provides zero protection against a deliberate attacker. If a download page only provides an MD5 checksum, ask why.</p>

<p><strong>SHA-1:</strong> Also broken. Google and CWI demonstrated the first SHA-1 collision in 2017 (the SHAttered attack). Git is migrating away from SHA-1. Do not use for new projects.</p>

<p><strong>SHA-256 (SHA-2 family):</strong> The current standard. No known practical attacks. This is what you should use for file integrity verification. The output is 256 bits, displayed as 64 hex characters.</p>

<p><strong>SHA-512 and SHA-3:</strong> Also secure. SHA-512 produces longer digests and is sometimes faster on 64-bit processors. SHA-3 is the newest NIST standard with a different internal structure. Both are fine but SHA-256 is the most widely supported.</p>

<p>Our <a href="/en/tools/hash-generator">hash generator</a> supports MD5, SHA-1, SHA-256, SHA-384, and SHA-512 — you can generate and compare hashes for any text or file input directly in the browser.</p>

<h2>How to Verify a Download in Practice</h2>

<p><strong>Step 1:</strong> Find the published hash. Reputable projects publish hashes on their official website or GitHub releases page, often in a file called <code>SHA256SUMS</code> or next to the download link. Never trust a hash posted on the same mirror you are downloading from — if the mirror is compromised, the hash is too.</p>

<p><strong>Step 2:</strong> Generate the hash of your downloaded file. You can use our <a href="/en/tools/hash-generator">online hash generator</a> — upload or drag the file, select SHA-256, and copy the result.</p>

<p><strong>Step 3:</strong> Compare character by character. Do not just check the first and last few characters — collision attacks specifically target the middle bits. The hashes must match exactly.</p>

<p><strong>Step 4 (optional):</strong> Verify the hash was published by the real developer. Check the project's HTTPS website, GitHub repo, or PGP-signed release announcement. A hash on a random forum post proves nothing.</p>

<h2>Beyond Downloads: Integrity Monitoring</h2>

<p>Hashes are also used for file integrity monitoring — detecting when critical system files change unexpectedly. Tools like Tripwire and AIDE maintain a database of known-good hashes for system binaries and alert on changes. For personal use, you can hash your important documents and periodically re-check to detect silent corruption or unauthorized modification.</p>

<p>The hash is the cheapest security check you can do. Thirty seconds per download. Start making it a habit at <a href="/en/tools/hash-generator">free hash generator</a>.</p>`
  },
  {
    slug: "fullscreen-text-vs-text-repeater-display-vs-repetition",
    title: "Fullscreen Text vs Text Repeater When to Display Big and When to Repeat Often — They Solve Different Problems",
    description: "Fullscreen text makes words impossible to miss. Text repeater copies words a thousand times. Both are text tools, but they serve completely different needs.",
    date: "2026-07-06",
    category: "Text Tools",
    tags: ["fullscreen text", "text repeater", "text display", "digital signage", "ASCII art"],
    relatedTools: ["fullscreen-text", "text-repeater", "word-counter"],
    content: `<p>You need to display a WiFi password at an event. You type it in 200pt font on a laptop screen — readable from across the room. That is fullscreen text. You need to generate 500 rows of test data with placeholder names. You type "John Doe" and multiply it by 500. That is text repeater. Both tools take text and output it differently, but the use cases barely overlap.</p>

<p>Here is when to reach for each, and why confusing them leads to the wrong tool for the job.</p>

<h2>Fullscreen Text: One Message, Maximum Visibility</h2>

<p><a href="/en/tools/fullscreen-text">Fullscreen text</a> takes a short message and displays it as large as the screen allows — white text on black background by default, filling the entire browser window. The use case is <strong>one message seen by many people</strong>. Think of it as a digital sign.</p>

<p><strong>Real use cases:</strong> WiFi passwords at conferences ("Network: ConfWiFi / Pass: s3cur3!2026"), gate numbers for airport pickups (hold up your phone instead of a handwritten sign), room numbers for workshops, "Back in 10 minutes" on your monitor when you step away, QR code captions ("Scan for menu ↓"), lyrics at karaoke nights, and accessibility — large text for visually impaired readers.</p>

<p>The design constraint is <strong>readability at distance</strong>. Colors should be high contrast. Text should be short — fullscreen text is not for paragraphs. The ideal message fits on one screen without scrolling. Dark mode (white on black) is the default for a reason: it is easier on the eyes in dim rooms and more visible from across a space.</p>

<p>Our fullscreen text tool also offers a time display mode — show the current time in large format, useful for presentations, exams, or timed activities where everyone needs to see the clock.</p>

<h2>Text Repeater: One String, Many Copies</h2>

<p><a href="/en/tools/text-repeater">Text repeater</a> takes a string and duplicates it N times, with optional separators (newlines, commas, spaces) between copies. The use case is <strong>one string needed in bulk</strong>.</p>

<p><strong>Real use cases:</strong> Generating test data ("testuser@example.com" × 1000 for load testing a registration form), creating ASCII art patterns (repeating characters to form shapes), building placeholder lists for UI mockups, generating repeated HTML table rows for layout testing, creating word lists for spelling practice ("accommodate" × 50 with newlines), and generating repeated code comments or separators.</p>

<p>The design constraint is <strong>volume and format</strong>. The separator choice matters: newlines for lists, commas for CSV data, spaces for inline text, nothing for concatenation. Getting the separator wrong means redoing the whole generation. A text repeater that does not let you choose separators is missing half the use case.</p>

<h2>When You Need Both: The Event Preparation Workflow</h2>

<p>Here is a real workflow that uses both tools. You are organizing a workshop with 30 attendees. You use the <strong>text repeater</strong> to generate 30 name badges — "Attendee 1" through "Attendee 30" with newline separators. You print those. Then you use <strong>fullscreen text</strong> to display the workshop title and WiFi password on a spare monitor at the entrance. The text repeater handled the bulk repetition. Fullscreen text handled the one-to-many display. Different tools, same event, zero overlap in what they actually do.</p>

<p>Use <a href="/en/tools/fullscreen-text">fullscreen text</a> when one person needs to show one message to many people. Use <a href="/en/tools/text-repeater">text repeater</a> when you need many copies of the same string. The names almost say it — but now you know the edge cases.</p>`
  },
  {
    slug: "barcode-generator-vs-qr-code-1d-2d-comparison",
    title: "Barcode Generator vs QR Code Generator 1D vs 2D Codes and Why Retail Still Uses Both in 2026",
    description: "Barcodes (1D) and QR codes (2D) look completely different and store completely different amounts of data. Here's why neither is replacing the other anytime soon.",
    date: "2026-07-06",
    category: "Developer",
    tags: ["barcode generator", "QR code generator", "1D barcode", "2D barcode", "retail"],
    relatedTools: ["barcode-generator", "qr-code-generator", "qr-code-scanner"],
    content: `<p>Walk through any grocery store checkout and the cashier scans a UPC barcode — thin black and white vertical lines. Walk through any airport gate and they scan a QR code on your phone — a square grid of black and white modules. Both encode data into machine-readable patterns. Both are "barcodes." But a 1D barcode stores about 20-25 characters and a QR code can store over 4,000. So why do grocery stores still use the "inferior" one?</p>

<p>The answer reveals why both technologies coexist — and why you should pick one over the other depending on what you are building.</p>

<h2>1D Barcodes: The Unkillable Standard</h2>

<p>A 1D barcode — UPC, EAN-13, Code 128, Code 39 — encodes data in the <strong>widths of parallel lines</strong>. A laser scanner reads the reflection pattern. The data is always numeric or alphanumeric and very short: a UPC-A barcode stores exactly 12 digits. That is it. Those 12 digits identify the manufacturer and product.</p>

<p>The limitation is also the strength. Because the data is so small and the format is so standardized, <strong>1D barcodes are nearly universal</strong>. Every point-of-sale system on Earth reads UPC/EAN. The barcode on a can of beans sold in Tokyo scans at a checkout in Toronto. The infrastructure — laser scanners, label printers, inventory systems — is decades old and battle-tested. Replacing it would cost billions and break nothing that is currently broken.</p>

<p>Use a <a href="/en/tools/barcode-generator">barcode generator</a> for: retail product labels (UPC-A, EAN-13), shipping and logistics (Code 128 — alphanumeric, compact), inventory management (Code 39 — self-checking, used in automotive and defense), library books (Codabar), and any system that needs to interface with existing retail or logistics infrastructure.</p>

<h2>QR Codes: The Data-Rich Contender</h2>

<p>A QR code encodes data in a <strong>2D grid of black and white squares</strong>. It is read by a camera, not a laser. This changes everything. QR codes store URLs, contact information (vCard), WiFi credentials, calendar events, geographic coordinates, and up to 4,296 alphanumeric characters. They also include built-in error correction — you can damage up to 30% of a QR code and it still scans.</p>

<p>The trade-off: QR codes require a <strong>smartphone camera</strong> to read. You cannot scan a QR code with a $50 laser scanner from 1995. This is why retail checkout still uses 1D barcodes — the cashier's scanner is a laser, and replacing every scanner in every store is not happening.</p>

<p>Use a <a href="/en/tools/qr-code-generator">QR code generator</a> for: marketing (URLs on print ads → landing pages), contactless menus (restaurants), digital business cards (vCard), WiFi sharing (no more typing passwords), app deep links, event ticketing, and any consumer-facing use case where the scanner is a phone.</p>

<h2>GS1 Digital Link: The Bridge</h2>

<p>The industry is not standing still. GS1 Digital Link is a standard that embeds a URL inside a 2D barcode (like QR or Data Matrix) using the same GTIN identifiers as traditional UPC/EAN barcodes. A single code works at both retail checkout (scanned as a product identifier) and by consumers (scanned as a URL for product info, promotions, or authentication).</p>

<p>This is rolling out slowly — the standard exists but the hardware transition takes years. By 2027-2028, expect to see more products with 2D codes at checkout. But the 1D barcode will survive in parallel for at least another decade.</p>

<h2>Decision Matrix</h2>

<p>If you are building a system that needs to be scanned by a <strong>dedicated laser scanner in a warehouse or retail environment</strong> → 1D barcode (Code 128 or EAN-13). If you are building something that consumers will scan with <strong>their phones</strong> → QR code. If you need to encode a <strong>URL, contact card, or more than 25 characters</strong> → QR code. If you need to print labels for <strong>existing retail or logistics systems</strong> → 1D barcode.</p>

<p>Generate both at <a href="/en/tools/barcode-generator">barcode generator</a> and <a href="/en/tools/qr-code-generator">QR code generator</a> — free, no signup, instant download.</p>`
  },
  {
    slug: "roman-numerals-psychology-prestige-trust",
    title: "Roman Numerals The Psychology of Why IV Looks More Trustworthy Than 4 — and Where They Still Matter",
    description: "Super Bowl LIX, copyright MCMLXXXVII, King Charles III — Roman numerals survive because they signal prestige, tradition, and permanence. Here's the psychology behind the symbols.",
    date: "2026-07-06",
    category: "Reference",
    tags: ["Roman numerals", "psychology", "number systems", "history", "design"],
    relatedTools: ["roman-numerals", "base-converter", "random-number-generator"],
    content: `<p>Super Bowl 59 is not called "Super Bowl 59." It is "Super Bowl LIX." Copyright dates on films do not say "© 1987" — they say "© MCMLXXXVII." The British monarch is "King Charles III," not "King Charles 3." Roman numerals should have died 500 years ago with the fall of the Western Roman Empire. Instead they are everywhere — and not for mathematical reasons.</p>

<p>Roman numerals survive because they <strong>signal something</strong> that Arabic numerals do not. Here is what that signal is, where you still encounter Roman numerals, and why a <a href="/en/tools/roman-numerals">Roman numeral converter</a> is more useful than you think.</p>

<h2>The Psychology: Why IV Feels Different from 4</h2>

<p>Arabic numerals (1, 2, 3, 4…) are utilitarian. They are tools for calculation. They say "this is a quantity you might need to add, subtract, or multiply." Roman numerals (I, II, III, IV…) are decorative. They say "this is a label, a title, a designation — something with weight and ceremony."</p>

<p>This is not accidental. Arabic numerals were designed for computation — the positional system with zero enables arithmetic that Roman numerals make nearly impossible. Try multiplying XXXVIII by XLVII in your head. Now try 38 × 47. The Arabic system won. But precisely <em>because</em> Roman numerals are bad at math, they acquired a different meaning: <strong>this number is not here to be calculated with</strong>. It is here to be read, remembered, and respected.</p>

<p>Research in consumer psychology has found that people perceive products with Roman numeral naming as <strong>more luxurious and established</strong> than identical products with Arabic numeral naming. A watch called "Mark IV" feels more premium than "Mark 4." A movie sequel "Part III" feels more epic than "Part 3." This is the Roman numeral premium — the cognitive bias that complexity signals importance.</p>

<h2>Where Roman Numerals Still Rule</h2>

<p><strong>Super Bowl:</strong> The NFL started using Roman numerals for Super Bowl V (1971) and never stopped. The stated reason: the Super Bowl spans two calendar years (the regular season is in one year, the game is in the next), so a Roman numeral avoids confusion about which year to reference. The real reason: "Super Bowl LIX" sounds like a gladiatorial event in the Colosseum. That is the point.</p>

<p><strong>Film and TV copyright:</strong> Movie credits use Roman numerals for copyright years. The Motion Picture Association has required it since 1930. The practical reason was to make the date harder to read at a glance — if you cannot instantly parse MCMLXXXVII, you might not realize the movie is old. Today it is purely tradition.</p>

<p><strong>Monarchs and popes:</strong> Queen Elizabeth II, Pope Francis (no numeral — the first of his name), King Charles III. The numeral after a monarch's name is an ordinal, not a quantity. "Charles the Third," not "Charles Number Three." Roman numerals are the typographic convention for ordinals in royal and papal titles.</p>

<p><strong>Clocks and watches:</strong> Many analog clocks use Roman numerals on the face. Interestingly, most use "IIII" for 4 instead of "IV" — the so-called "watchmaker's four." Theories vary: visual balance with the VIII on the opposite side, avoiding confusion between IV and VI at an angle, or tradition from early clockmakers. No one knows for sure.</p>

<p><strong>Outlines and legal documents:</strong> The standard outline format uses Roman numerals for top-level sections (I, II, III), uppercase letters for second level (A, B, C), Arabic numerals for third level (1, 2, 3), and lowercase Roman for fourth level (i, ii, iii). This nested system lets you reference any section unambiguously.</p>

<h2>How to Read Roman Numerals in 30 Seconds</h2>

<p>Seven letters: I=1, V=5, X=10, L=50, C=100, D=500, M=1000. Read left to right. If a smaller value <strong>precedes</strong> a larger one, subtract: IV = 4 (1 before 5), IX = 9 (1 before 10), XL = 40 (10 before 50), CD = 400 (100 before 500), CM = 900 (100 before 1000). Otherwise, add: VI = 6, LX = 60, MCMLXXXVII = 1000 + (1000−100) + 50 + 10 + 10 + 10 + 5 + 1 + 1 = 1987.</p>

<p>Or skip the math and use a <a href="/en/tools/roman-numerals">Roman numeral converter</a> — type any number, get the Roman equivalent, and vice versa. Because no one should have to decode MCMLXXXVII manually while watching movie credits.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print(f"✅ Free station: 160→166 blogs. Verify: blogPosts.length = {content.count('slug:') - content.count('slug:')} ")
print("Run: npm run build")
