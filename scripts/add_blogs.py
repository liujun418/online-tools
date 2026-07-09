"""Add 6 blogs to free station (176→182) — July 9, 2026"""
import os, sys

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "code-formatter-cicd-pipeline-integration",
    title: "Code Formatter for CI/CD How to Auto-Format Code in Your Pipeline Without Prettier Taking Over Your Project",
    description: "You want consistent code formatting across your team. You could ask everyone to install Prettier. Or you could enforce it in CI/CD — no installs, no excuses. Here's how to integrate an online formatter into your workflow.",
    date: "2026-07-09",
    category: "Developer",
    tags: ["code formatter", "CI/CD", "Prettier", "pipeline", "code quality"],
    relatedTools: ["code-formatter", "json-formatter", "css-minifier"],
    content: `<p>You join a new team and open the first file. It uses tabs. The second file uses spaces. The third file has a mix of both — and the indentation level changes randomly between 2 and 4 spaces. The codebase has been formatted by five different editors, three different IDE settings, and one developer who apparently configured their tab key to emit chaos.</p>

<p>You could propose a Prettier config and ask everyone to install it. Four people will install it. Two will forget. One will configure their editor to override it. The inconsistency will continue. The alternative: enforce formatting in CI/CD. A <a href="/en/tools/code-formatter">code formatter</a> in your pipeline catches formatting violations before they merge — and the online version means nobody needs to install anything.</p>

<h2>Why CI/CD Formatting Beats Editor Configs</h2>

<p>Editor configs are opt-in. Every developer must install the formatter, configure their editor, and remember to format before committing. One developer who skips this step introduces formatting noise into every file they touch. The noise accumulates. The git blame becomes useless because every commit reformats the file along with the actual changes.</p>

<p>CI/CD formatting is opt-out — you must actively bypass it to merge unformatted code. The formatter runs on every pull request, checks the diff, and either approves or blocks. Zero developer setup. Zero forgotten formats. The rule is enforced by the machine, not by code review comments saying "please run Prettier."</p>

<p>An <a href="/en/tools/code-formatter">online code formatter</a> fits into this workflow as a quick fix tool. Before pushing a branch, paste the file into the formatter, verify it looks right, and commit. The CI/CD check passes on the first try because you already formatted locally. The online tool is the local step. The pipeline is the enforcement step.</p>

<h2>Setting Up the Pipeline: A Practical Approach</h2>

<p><strong>Step 1: Define the standard.</strong> Pick a formatting configuration and commit it to the repo. For JavaScript/TypeScript, Prettier's default config is the industry standard. For JSON, 2-space indentation. For CSS, consistent property ordering. The config file is the source of truth.</p>

<p><strong>Step 2: Add the format check to CI.</strong> Add a pipeline step that runs the formatter in check mode. If the formatted output differs from the committed code, the pipeline fails. The error message includes a link to the online formatter: "Format your code here, then push again."</p>

<p><strong>Step 3: Provide the escape hatch.</strong> For the rare case where unformatted code is intentional (generated code, vendored dependencies, template literals with specific whitespace), add a comment directive to skip formatting. The escape hatch is necessary for adoption — if the formatter blocks work, developers will disable it, not fix their code.</p>

<h2>The Online Formatter as the Quick Fix</h2>

<p>When the pipeline fails with "Code not formatted," the developer opens the <a href="/en/tools/code-formatter">online code formatter</a>, pastes the file, clicks format, copies the output, and pushes. Total time: 30 seconds. No installing Prettier. No configuring editor plugins. No remembering which npm script runs the formatter. The online tool is the path of least resistance — and the path of least resistance is the one developers actually follow.</p>

<p>Format your next file at <a href="/en/tools/code-formatter">free code formatter</a> — JSON, JS, CSS, HTML all in one tool, no install required.</p>`
  },
  {
    slug: "base64-to-image-decode-api-thumbnails",
    title: "Base64 to Image How to Decode Data URIs from API Responses and Recover Embedded Images Without Writing a Script",
    description: "An API returned image data as a Base64 string. You need to see the actual image. Here's how to decode Base64 to an image file in seconds — no terminal, no script, no ImageMagick.",
    date: "2026-07-09",
    category: "Developer",
    tags: ["base64 to image", "data URI", "API", "decode", "image recovery"],
    relatedTools: ["base64-to-image", "image-to-base64", "base64-converter"],
    content: `<p>You call an API endpoint and the response includes a field called <code>thumbnail</code>. Its value is a 50,000-character string starting with <code>iVBORw0KGgo...</code> That is a Base64-encoded PNG image. You need to see the actual image — to verify the API is returning the right data, to debug a rendering issue, or to extract the image for use elsewhere. You could write a script. Or you could paste the string into a <a href="/en/tools/base64-to-image">Base64 to image decoder</a> and see the image instantly.</p>

<p>Base64-encoded images are everywhere in modern APIs, emails, and databases. Here is when you encounter them, why they are used, and how to decode them without writing code every time.</p>

<h2>Where You Encounter Base64 Images in the Wild</h2>

<p><strong>API responses:</strong> REST APIs and GraphQL endpoints often return small images as Base64 strings instead of URLs. This eliminates the need for a separate image hosting service and keeps the data self-contained. A single API call returns the record and its associated image in one response. Common in: user avatars, product thumbnails, invoice PDFs, document previews.</p>

<p><strong>Email attachments:</strong> Email clients embed inline images (logos, signatures, icons) as Base64 data URIs in the HTML body. When you inspect the email source, you see <code>&lt;img src="data:image/png;base64,iVBOR..."&gt;</code>. The image is not a separate file — it is baked into the HTML.</p>

<p><strong>Database blobs:</strong> Some databases store images as Base64 text in a VARCHAR or TEXT column. When you query the database, the image column is a long Base64 string. Converting it back to a viewable image requires a decoder.</p>

<p><strong>CSS background images:</strong> Inline CSS sometimes uses Base64 data URIs for small background images — icons, gradients, patterns. This reduces HTTP requests for tiny assets. The trade-off: the CSS file is larger, but the page loads faster because there are fewer round trips.</p>

<h2>How to Decode Base64 to Image in Seconds</h2>

<p>Use a <a href="/en/tools/base64-to-image">Base64 to image converter</a>. Paste the Base64 string — with or without the <code>data:image/png;base64,</code> prefix. The tool detects the image format from the header bytes, decodes the Base64, and renders the image. You can then download it as a PNG, JPEG, or WebP file.</p>

<p>The tool handles the edge cases that make manual decoding annoying: the data URI prefix (strip it automatically), whitespace and line breaks in the Base64 string (ignore them), and invalid padding (fix it). What takes 5 minutes of writing a Python script takes 5 seconds of pasting into a browser tool.</p>

<p>The reverse operation — encoding an image to Base64 — is equally useful when you need to embed an image in an API request, JSON payload, or HTML email. Use the <a href="/en/tools/image-to-base64">image to Base64 encoder</a> for that direction. The two tools together handle the full round trip: image → Base64 → transmission → Base64 → image.</p>

<p>Decode your next API response thumbnail at <a href="/en/tools/base64-to-image">Base64 to image decoder</a> — paste, preview, download. No script required.</p>`
  },
  {
    slug: "emi-calculator-loan-prepayment-strategy",
    title: "EMI Calculator Loan Prepayment Strategy How to Save Thousands in Interest by Paying Off Loans the Smart Way — Not the Fast Way",
    description: "Paying extra toward your loan principal saves interest. But paying extra at the beginning of the loan saves dramatically more than paying extra at the end. Here's the math and the strategy.",
    date: "2026-07-09",
    category: "Calculators",
    tags: ["EMI calculator", "loan prepayment", "interest savings", "mortgage", "financial planning"],
    relatedTools: ["emi-calculator", "loan-calculator", "mortgage-calculator"],
    content: `<p>You have a 20-year home loan at 7% interest. You receive a year-end bonus and decide to put $5,000 toward the loan principal. Should you pay it now, in year 2 of the loan? Or save it and pay later, in year 15? The answer: paying in year 2 saves you roughly <strong>three times more interest</strong> than paying in year 15. Same $5,000. Completely different impact.</p>

<p>This is the <strong>time value of prepayment</strong> — and it is the most misunderstood concept in personal loan management. An <a href="/en/tools/emi-calculator">EMI calculator</a> can model the difference. Here is the strategy that saves you the most money.</p>

<h2>Why Early Prepayment Is So Much More Powerful</h2>

<p>Loan interest is front-loaded. In the early years of a loan, most of your EMI (Equated Monthly Installment) goes toward interest, not principal. On a $200,000, 20-year loan at 7%, your first EMI payment might be roughly $1,550 — of which about $1,167 is interest and only $383 is principal. The interest is calculated on the outstanding balance, and the outstanding balance is highest at the beginning.</p>

<p>When you prepay $5,000 in year 2, you permanently reduce the outstanding balance. Every subsequent month's interest is calculated on a smaller principal. The savings compound over the remaining 18 years of the loan. Prepay $5,000 in year 2 and you might save $12,000-$15,000 in total interest over the life of the loan. Prepay the same $5,000 in year 15 and you save only $3,000-$4,000 — because there are fewer remaining months for the interest savings to compound.</p>

<p>The math is not complicated. It is just <strong>time</strong>. The earlier you reduce the principal, the more months of interest you avoid. An <a href="/en/tools/emi-calculator">EMI calculator</a> with a prepayment feature shows the exact savings for any prepayment amount at any point in the loan term.</p>

<h2>The Prepayment Strategy: When to Pay Extra</h2>

<p><strong>Priority 1: Prepay in the first third of the loan term.</strong> Years 1-7 of a 20-year loan are when prepayment has the most impact. Every extra dollar you pay in this period avoids 13-19 years of interest. This is the highest-return use of your extra cash — better than most investments on a risk-adjusted basis.</p>

<p><strong>Priority 2: Prepay lump sums, not small monthly additions.</strong> A $5,000 lump sum prepayment saves more interest than twelve $417 monthly prepayments. The lump sum reduces the principal immediately, and every subsequent month's interest is calculated on the lower balance. The monthly additions reduce the principal gradually, and the interest savings accumulate more slowly. If you have a choice, pay the lump sum.</p>

<p><strong>Priority 3: Check for prepayment penalties.</strong> Some loans charge a penalty for early repayment — typically 1-2% of the prepaid amount. If the penalty is larger than the interest savings, prepayment is a net loss. Use the EMI calculator to calculate the interest savings, then compare to the penalty. If savings > penalty, prepay. If penalty > savings, invest the money elsewhere.</p>

<h2>When NOT to Prepay</h2>

<p>If your loan interest rate is lower than the return you can earn elsewhere (after tax), prepayment is mathematically suboptimal. A 3% mortgage in a world of 5% savings account rates means you earn more by keeping the money in savings than by paying down the loan. The emotional benefit of being debt-free is real, but the math favors investing the difference.</p>

<p>Also: maintain an emergency fund before prepaying. Prepaying $5,000 and then needing a $5,000 emergency loan at 15% interest is a net loss. Liquidity has value. The <a href="/en/tools/emi-calculator">EMI calculator</a> helps you quantify the interest savings — but only you can decide whether the savings outweigh the loss of liquidity.</p>

<p>Calculate your prepayment savings at <a href="/en/tools/emi-calculator">free EMI calculator</a> — model the prepayment, see the savings, make the decision with numbers, not guesses.</p>`
  },
  {
    slug: "qr-code-generator-vs-qr-code-scanner-create-vs-read",
    title: "QR Code Generator vs QR Code Scanner The Two Sides of Every QR Code — and Why You Need Both Tools in Your Workflow",
    description: "A QR code generator creates codes. A QR code scanner reads them. They are two halves of the same technology — but the use cases are completely different, and confusing them leads to dead ends.",
    date: "2026-07-09",
    category: "Developer",
    tags: ["QR code generator", "QR code scanner", "QR code", "barcode", "create vs read"],
    relatedTools: ["qr-code-generator", "qr-code-scanner", "barcode-generator"],
    content: `<p>You design a marketing flyer. You add a QR code linking to the product page. You use a <a href="/en/tools/qr-code-generator">QR code generator</a> — enter the URL, choose the size, download the PNG. Done. A week later, someone hands you a printed flyer with a QR code. You need to know where it links. You use a <a href="/en/tools/qr-code-scanner">QR code scanner</a> — point your camera, decode the URL, see the destination. Done.</p>

<p>Generator and scanner. Create and read. They are two sides of the same QR code coin — but the tools, workflows, and use cases barely overlap. Here is when you need each one, and why having both in your toolset solves problems that neither can solve alone.</p>

<h2>QR Code Generator: Creating Information That Machines Can Read</h2>

<p>A QR code generator takes text — a URL, a WiFi password, a vCard contact, an email address, a calendar event — and encodes it into a 2D grid of black and white squares. The output is an image file (PNG, SVG) that can be printed, embedded in a design, or displayed on a screen.</p>

<p>The key decisions when generating: <strong>error correction level</strong> (L, M, Q, H — higher levels allow the code to be read even if partially damaged, but make the pattern denser), <strong>size</strong> (larger codes are easier to scan from a distance but take up more visual space), and <strong>format</strong> (PNG for most uses, SVG for scalable graphics, both available from our generator).</p>

<p>Common use cases: marketing materials (URL → landing page), WiFi access (SSID + password → instant connection), digital business cards (vCard → save to contacts), event ticketing (booking reference → gate check-in), and product packaging (serial number → warranty registration).</p>

<h2>QR Code Scanner: Reading Information That Machines Encoded</h2>

<p>A QR code scanner takes an image — from a camera, a screenshot, a photo, a clipboard paste — and decodes the 2D pattern back into the original text. The output is a string: a URL, a WiFi password, a contact card, a serial number.</p>

<p>The key capabilities: <strong>camera scanning</strong> (real-time, uses the device camera), <strong>image upload</strong> (decode from a saved photo or screenshot), and <strong>clipboard paste</strong> (decode from an image already in the clipboard). The scanner works across all three input methods — the decoder is the same, only the source differs.</p>

<p>Common use cases: security verification (what does this QR code on a random sticker actually link to?), decoding printed materials (what was the original URL or text?), recovering lost information (you have the QR code image but not the original data), and testing (does the QR code you generated actually encode the right information?).</p>

<h2>The Verification Loop: Why You Need Both</h2>

<p>Every QR code you generate should be <strong>scanned and verified</strong> before it goes to print. Generate the code → scan it with the scanner → verify the decoded text matches your input. This 10-second verification loop catches: encoding errors (wrong URL), format errors (the code is too dense for the print size), and corruption (the PNG export introduced artifacts).</p>

<p>A QR code on 5,000 printed flyers that links to the wrong URL is a $2,000 printing mistake. The verification loop costs 10 seconds. The reprint costs 500 times that. Use the <a href="/en/tools/qr-code-generator">QR generator</a> to create, the <a href="/en/tools/qr-code-scanner">QR scanner</a> to verify. Two sides of the same toolset. Both free, both instant.</p>`
  },
  {
    slug: "json-formatter-vs-csv-to-json-data-format-pipeline",
    title: "JSON Formatter vs CSV to JSON Data Format Conversion Pipeline — Why One Tool Is Not Enough for Real-World Data Work",
    description: "You have a CSV file from an export. You need it as formatted JSON for an API. That's two steps: convert CSV to JSON, then format the JSON. Here's why the pipeline matters more than either tool alone.",
    date: "2026-07-09",
    category: "Developer",
    tags: ["JSON formatter", "CSV to JSON", "data conversion", "formatting", "pipeline"],
    relatedTools: ["json-formatter", "csv-to-json", "json-to-csv"],
    content: `<p>You export a list of 2,000 customers from your CRM. The file is CSV — rows and columns, comma-separated, clean. You need to import it into a system that accepts only JSON. You use a <a href="/en/tools/csv-to-json">CSV to JSON converter</a>. The output is valid JSON — but it is one giant line, 2,000 objects in a single collapsed array, 850,000 characters with no line breaks. You cannot read it. You cannot debug it. You need a <a href="/en/tools/json-formatter">JSON formatter</a> to make it human-readable.</p>

<p>This is the <strong>data format pipeline</strong> — and it is the most common workflow that developers repeat without ever thinking about it as a pipeline. Here is why the pipeline matters, what each tool does in the chain, and the edge cases that break naive conversions.</p>

<h2>Step 1: CSV to JSON — The Conversion</h2>

<p>CSV to JSON conversion sounds simple: read the header row as keys, map each subsequent row to an object with those keys. But real-world CSV files have edge cases that naive converters handle poorly.</p>

<p><strong>Commas inside quoted fields:</strong> A CSV row like <code>John,"Manager, Sales",50000</code> has a comma inside a quoted field. A naive converter splits on all commas and produces <code>["John", "Manager", "Sales", "50000"]</code> — four columns instead of three. A proper CSV parser respects quoted fields.</p>

<p><strong>Nested data:</strong> Some CSVs encode nested data in dot notation: <code>user.name, user.email, user.address.city</code>. A smart converter can detect this pattern and produce nested JSON objects: <code>{"user": {"name": "John", "email": "john@example.com", "address": {"city": "NYC"}}}</code>. A basic converter produces flat objects with dot-notation keys.</p>

<p><strong>Type inference:</strong> CSV has no types — everything is a string. <code>42</code> could be a number or a string. <code>true</code> could be a boolean or a string. The converter must decide whether to preserve everything as strings (safe) or infer types (convenient but risky). A good converter lets you choose.</p>

<h2>Step 2: JSON Formatter — The Beautification</h2>

<p>The converted JSON is valid but unreadable. The <a href="/en/tools/json-formatter">JSON formatter</a> adds indentation, line breaks, and syntax highlighting. It also validates the JSON — catching syntax errors introduced during conversion (trailing commas, unescaped quotes, missing brackets).</p>

<p>The formatter's tree view is the killer feature for large datasets. A collapsed 2,000-object array is a single line. The tree view lets you expand individual objects, drill into nested fields, and inspect specific records without scrolling through 850,000 characters. You can spot data issues — missing fields, unexpected nulls, wrong types — that would be invisible in the collapsed view.</p>

<h2>Step 3: The Reverse Pipeline</h2>

<p>The reverse pipeline — JSON to CSV — is equally common. You receive a JSON API response and need to open it in Excel. The <a href="/en/tools/json-to-csv">JSON to CSV converter</a> flattens nested objects into columns, then the CSV opens in any spreadsheet. The pipeline runs in both directions: CSV → JSON → format for API consumption, JSON → CSV → Excel for human analysis.</p>

<p>Each tool does one thing. The pipeline — converted data, then formatted for readability — is where the real work happens. Use <a href="/en/tools/csv-to-json">CSV to JSON</a> to convert, then <a href="/en/tools/json-formatter">JSON formatter</a> to inspect. Two tools, one workflow, zero data left unreadable.</p>`
  },
  {
    slug: "coin-flip-probability-not-fair-50-50",
    title: "The Probability of Coin Flips Why 50/50 Is Not Exactly Fair — and What That Reveals About Randomness",
    description: "A coin flip is the universal symbol of fairness — 50% heads, 50% tails. But researchers have found a tiny bias that makes coin flips 51/49. Here's the physics and the math behind the imperfection.",
    date: "2026-07-09",
    category: "Fun & Media",
    tags: ["coin flip", "probability", "randomness", "statistics", "physics"],
    relatedTools: ["coin-flip", "dice-roller", "random-number-generator"],
    content: `<p>A coin flip is the universal symbol of fairness. Two possible outcomes. Equal probability. The fairest decision mechanism ever invented. Except it is not exactly 50/50. In 2023, researchers led by František Bartoš at the University of Amsterdam conducted a massive study: 48 people flipped coins 350,757 times. The result: coins land on the <strong>same side they started on</strong> about 50.8% of the time. The bias is tiny — less than 1% — but it is real, it is statistically significant, and it has been hiding in plain sight for centuries.</p>

<p>Here is the physics behind the bias, what it means for the concept of randomness, and why a <a href="/en/tools/coin-flip">coin flip simulator</a> is actually fairer than a real coin.</p>

<h2>The Physics: Why the Same-Side Bias Exists</h2>

<p>The bias comes from <strong>precession</strong> — the wobble of the coin's rotation axis as it flips. When a coin is flipped, it does not rotate perfectly around a single axis. The axis wobbles slightly, which means the coin spends slightly more time with the initial side facing up during its trajectory. The effect was predicted by a 2007 physics model by Diaconis, Holmes, and Montgomery at Stanford, but the 2023 study was the first to confirm it experimentally at massive scale.</p>

<p>The bias is about 0.8% in favor of the same side — meaning if you start with heads up, the coin lands heads about 50.8% of the time. This is not enough to exploit in a single bet. But over 1,000 coin flips, the same-side bias would produce about 508 same-side results instead of the expected 500 — a swing of 8 extra wins. Over a lifetime of coin flips, the bias is real.</p>

<p>The practical implication: if someone offers to flip a coin for a decision, and you can see which side is facing up before the flip, <strong>call the same side</strong>. You have a 50.8% chance of winning — a tiny edge, but an edge. If you cannot see the starting position, the coin flip is fair from your perspective.</p>

<h2>What This Reveals About Randomness</h2>

<p>The coin flip bias is not a flaw in coin flips. It is a flaw in our <strong>model of coin flips</strong>. We model a coin flip as "two equally likely outcomes." But a real coin flip is a physical process governed by Newtonian mechanics — initial position, force, angular momentum, air resistance, landing surface. If you could measure all the initial conditions precisely enough, a coin flip would be deterministic, not random.</p>

<p>The randomness we perceive is <strong>sensitivity to initial conditions</strong> — a tiny difference in the flip force produces a completely different outcome. This is chaos theory, not probability theory. The coin does not "choose" heads or tails. It follows the laws of physics from the moment it leaves your thumb. We call it random because we cannot predict it, not because it is fundamentally unpredictable.</p>

<p>This is true of most "random" processes in everyday life. Dice rolls. Card shuffles. Lottery balls. They are all deterministic physical processes that we treat as random because measuring the initial conditions is impractical. The randomness is in our ignorance, not in the physics.</p>

<h2>When You Actually Need Fair Randomness</h2>

<p>For a decision between two restaurants, a coin flip is fine — the 0.8% bias is meaningless. For a cryptographic key, a coin flip is terrible — the bias, however small, is a vulnerability. For anything in between, use a <a href="/en/tools/coin-flip">digital coin flip</a> powered by a cryptographically secure random number generator. The digital coin is not subject to precession, wobble, or the bias of physics. It is the truly fair 50/50 that real coins only approximate.</p>

<p>Flip a truly fair coin at <a href="/en/tools/coin-flip">free coin flip</a> — no physics bias, no precession, just mathematics.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("Free station: 176->done.")