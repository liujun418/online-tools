"""Add 6 blogs to free station (372->378) - August 15, 2026"""
BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "regex-tester-lazy-greedy-quantifiers-guide",
    title: "Lazy vs Greedy Regex Quantifiers: Why Your Pattern Matches Too Much",
    description: "Your regex grabbed the whole page instead of one tag. That's greedy matching by default. Here's how lazy quantifiers fix it \u2014 and the trade-off nobody mentions.",
    date: "2026-08-15",
    category: "Developer",
    tags: ["regex", "regex quantifiers", "greedy vs lazy", "regex debugging", "pattern matching"],
    relatedTools: ["regex-tester", "text-diff", "code-formatter"],
    content: `<p>You need to pull every <code>&lt;p&gt;</code> tag out of a messy HTML export. You write the pattern <code>&lt;p&gt;(.*)&lt;/p&gt;</code>, test it, and the match swallows the whole page \u2014 from the first opening tag to the last closing one. That's not a bug in the pattern. That's how greedy quantifiers work by default. The <a href="/en/tools/regex-tester">regex tester</a> makes the behavior visible, and a lazy quantifier fixes it.</p>

<h2>Why Greedy Quantifiers Overrun</h2>

<p>In most regex engines, <code>.*</code> and <code>.+</code> match as much as they can and only give characters back when the rest of the pattern demands it. Between the first <code>&lt;p&gt;</code> and the last <code>&lt;/p&gt;</code>, every tag in between is "available," so the greedy match takes all of it. It's correct behavior \u2014 the engine returns the longest possible match \u2014 but it's rarely what you want when you're extracting structure.</p>

<p>The classic fix is a lazy quantifier: <code>.*?</code>. The question mark tells the engine to match as little as possible, expanding only until the next part of the pattern fits. <code>&lt;p&gt;(.*?)&lt;/p&gt;</code> stops at the first <code>&lt;/p&gt;</code>, so each <code>&lt;p&gt;</code> tag gets its own capture. Paste both patterns into the <a href="/en/tools/regex-tester">regex tester</a> side by side and the difference is obvious in the match highlights.</p>

<h2>The Counter-Intuitive Trade-off</h2>

<p>Here's the part that trips up people who just learned lazy matching: lazy isn't always faster. A lazy pattern that fails has to try again at every single position, and patterns with nested quantifiers can collapse into catastrophic backtracking \u2014 the regex that "takes a second" runs for minutes. The real fix for the HTML problem is being specific about what you match: <code>&lt;p[^&gt;]*&gt;(.*?)&lt;/p&gt;</code> refuses to let the opening tag leak.</p>

<p>When you're debugging a pattern, don't guess at what the engine is doing. Run the failing match through the <a href="/en/tools/regex-tester">regex tester</a> to see the actual span, compare the captured groups with the <a href="/en/tools/text-diff">text diff</a> tool, and if the expression is living inside code, drop it into the <a href="/en/tools/code-formatter">code formatter</a> so it's readable before you ship it.</p>

<p>Greedy vs lazy isn't a style preference \u2014 it's the difference between matching one paragraph and matching the entire document. Once you can predict which one the engine will pick, you stop fighting your own regexes. For the reverse case, extracting only the text that matches, our guide to <a href="/en/blog/regex-tester-extract-parse-text">extracting and parsing text with regex</a> covers the broader workflow. Test your next pattern in the <a href="/en/tools/regex-tester">regex tester</a> before it ships.</p>`
  },
  {
    slug: "svg-minifier-web-performance-optimization",
    title: "SVG Minification Workflow: Shaving Kilabytes Off Your Icons",
    description: "An SVG icon left a design tool at 8KB. On the page it's an icon \u2014 it should weigh under 1KB. Here's the minify-then-verify workflow that strips the weight.",
    date: "2026-08-15",
    category: "Developer",
    tags: ["svg minify", "web performance", "icon optimization", "vector graphics", "page speed"],
    relatedTools: ["svg-minifier", "css-minifier", "html-to-markdown"],
    content: `<p>An SVG icon leaves the design tool at 8&nbsp;KB. On your page it renders fine \u2014 but it's an icon; it should weigh under 1&nbsp;KB. The 7&nbsp;KB you're carrying is editor metadata, comments, and a path with more decimal places than the screen can show. A <a href="/en/tools/svg-minifier">SVG minifier</a> strips that weight, and the workflow is simple: minify, verify, ship.</p>

<h2>What Adds Weight to an SVG</h2>

<p>Design tools export SVGs with the kitchen sink: XML namespaces you don't need, comments, layer groups, and path coordinates like <code>M 123.456789 456.789012</code> when the icon is 24&nbsp;pixels wide. None of that helps the browser render the shape. A minifier removes the unused <code>defs</code>, collapses <code>transform</code> chains, shortens color values, and rounds coordinates to the precision the viewport actually needs.</p>

<p>The mistake most people make is skipping the verify step. Minify, paste the result into the browser, and a corrupted icon is an instant layout break. The safe workflow: run the <a href="/en/tools/svg-minifier">SVG minifier</a> on a copy, keep the original, and diff the rendered result before you replace anything.</p>

<h2>The Counter-Intuitive Part</h2>

<p>Minifying every SVG is not always a win. A hand-written icon with clean paths can already be optimal, and aggressive rounding can actually increase file size if the tool expands a coordinate into longer notation. More importantly, SVG size is a rounding error compared to the JavaScript and CSS a page ships. Pair the minifier with the <a href="/en/tools/css-minifier">CSS minifier</a> for your stylesheet, and if you're documenting how the icons are used, the <a href="/en/tools/html-to-markdown">HTML to Markdown converter</a> keeps the snippet readable in your docs.</p>

<p>Vector icons are already the lightest way to ship a graphic \u2014 that's part of why vector graphics won, as we covered in our look at <a href="/en/blog/svg-minifier-why-vector-graphics-won-history">why vector graphics took over</a>. Minifying just closes the gap between what the file says and what the screen shows. Run your icon set through the <a href="/en/tools/svg-minifier">SVG minifier</a> and watch the bytes drop.</p>`
  },
  {
    slug: "html-to-markdown-docs-blog-workflow",
    title: "HTML to Markdown: The Conversion Workflow for Docs and Blog Drafts",
    description: "You copied a section from an old site and got a wall of <div> tags. Converting HTML to Markdown gives you clean, portable drafts. Here's the workflow \u2014 and when not to convert.",
    date: "2026-08-15",
    category: "Developer",
    tags: ["html to markdown", "markdown", "documentation", "content migration", "blog writing"],
    relatedTools: ["html-to-markdown", "markdown-preview", "text-to-slug"],
    content: `<p>You copy a section from an old site into your new editor and get a wall of <code>&lt;div&gt;</code> tags with inline styles. The text you wanted is buried under markup you didn't ask for. Converting HTML to Markdown gives you clean, portable drafts \u2014 and it turns a copy-paste mess into something you can actually edit.</p>

<h2>When HTML Becomes a Liability</h2>

<p>HTML is everywhere, but it's the worst format for a draft. Nested divs, hard-coded colors, and editor cruft make the document impossible to diff, hard to search, and fragile to move between tools. Markdown solves that: a heading is a <code>#</code>, a link is <code>[text](url)</code>, and the plain text stays readable even in a terminal. If you maintain a blog, a wiki, or docs in a Git repo, Markdown is the interchange format that keeps history clean.</p>

<h2>The Conversion Workflow</h2>

<p>Step 1: paste the HTML block into the <a href="/en/tools/html-to-markdown">HTML to Markdown converter</a>. Step 2: preview the result in the <a href="/en/tools/markdown-preview">Markdown preview</a> tool and check that headings, lists, and code blocks actually made it across. Step 3: fix the parts the converter can't infer \u2014 a heading level the original styled inline, a table that flattened into a paragraph. Step 4: when the title is ready, run it through the <a href="/en/tools/text-to-slug">text to slug converter</a> to get a filename or URL slug that matches.</p>

<h2>The Counter-Intuitive Part</h2>

<p>Don't convert everything. A complex table with merged cells, a newsletter that depends on inline styles, or a snippet you must paste back into the CMS byte-for-byte \u2014 those should stay HTML. The converter preserves structure, not meaning: it can't recover that the red text was a warning. Convert when you want portability, not as a default for every copy-paste.</p>

<p>We've covered how the two formats round-trip in <a href="/en/blog/html-to-markdown-conversion-explained">how HTML-to-Markdown conversion works</a>. When a copy-paste turns into markup soup, run it through the <a href="/en/tools/html-to-markdown">converter</a> first \u2014 you'll spend your time writing, not untangling divs.</p>`
  },
  {
    slug: "csv-to-json-vs-json-to-csv-conversion",
    title: "CSV to JSON vs JSON to CSV: When Each Direction Matters",
    description: "Two tools, one pair of formats. CSV is a table, JSON is a tree. Here's when converting one way beats the other \u2014 and why one direction quietly destroys data.",
    date: "2026-08-15",
    category: "Developer",
    tags: ["csv to json", "json to csv", "data conversion", "data migration", "spreadsheets"],
    relatedTools: ["csv-to-json", "json-to-csv", "json-formatter"],
    content: `<p>Two tools, one pair of formats. CSV is a table: rows and columns, no nesting. JSON is a tree: objects and arrays, no fixed columns. The <a href="/en/tools/csv-to-json">CSV to JSON</a> and <a href="/en/tools/json-to-csv">JSON to CSV</a> converters both move data between the two, but each direction answers a different question \u2014 and each has its own failure mode.</p>

<h2>CSV to JSON: When a Table Becomes a Tree</h2>

<p>You have a spreadsheet of products and an API that wants an array of objects. Converting rows into objects gives the API the nesting it expects: each row becomes an object, columns become keys. The failure mode is type guessing. A column of "001", "002" IDs becomes numbers and loses its leading zeros; a date changes format. Before you push JSON to the API, validate it in the <a href="/en/tools/json-formatter">JSON formatter</a> \u2014 that's where you catch the coercion before it breaks an integration.</p>

<h2>JSON to CSV: When a Tree Becomes a Table</h2>

<p>The reverse: an API returns nested JSON and your client wants a spreadsheet. Flattening nested objects is where the JSON-to-CSV direction breaks. A <code>user.address.city</code> field has no natural column, and a JSON array has no natural row. The common mistake is expecting the converter to invent columns for deep structures \u2014 it flattens what it can and leaves the rest, silently.</p>

<h2>The Counter-Intuitive Part</h2>

<p>The "simpler" direction is the harder one. CSV to JSON adds structure (it has to guess types and nesting), which is error-prone but mostly reversible. JSON to CSV destroys structure \u2014 nesting that has no column is gone for good. So the rule is: convert CSV to JSON when you're building a payload, and convert JSON to CSV only when you're sure the structure survives flattening. For how the two formats compare as data models, our breakdown of <a href="/en/blog/json-vs-csv-vs-xml-data-formats">JSON, CSV, and XML</a> shows where each belongs.</p>

<p>Data conversion is reversible only if you know what the target format can hold. Run the conversion, inspect the result with the <a href="/en/tools/json-formatter">JSON formatter</a>, and keep the source file until you've confirmed the output.</p>`
  },
  {
    slug: "qr-code-generator-vs-scanner-two-sides",
    title: "QR Code Generator vs Scanner: The Two Sides of a Scannable Link",
    description: "You can generate a QR code in seconds and scan one in the same. But the two tools answer different questions. Here's when each side matters \u2014 and the trust gap between them.",
    date: "2026-08-15",
    category: "Tools",
    tags: ["qr code", "qr code generator", "qr scanner", "mobile scanning", "offline sharing"],
    relatedTools: ["qr-code-generator", "qr-code-scanner", "url-encoder"],
    content: `<p>You can generate a QR code in about two seconds and scan one in less. The two sides look like mirror images of the same trick \u2014 and they're not. A <a href="/en/tools/qr-code-generator">QR code generator</a> answers "how do I get this link into a physical square?" A <a href="/en/tools/qr-code-scanner">QR code scanner</a> answers "what is actually in this square?" Knowing which side you're on changes what you do next.</p>

<h2>The Generator Side: Encoding a Link Into a Square</h2>

<p>Generators exist because a URL in a poster, a menu, or a business card is a pain to type. You point the generator at a link, and it produces the square pattern any phone can read. The practical details: keep the URL short \u2014 every character is data capacity \u2014 and if you can't shorten it, encode the cleanest version first with the <a href="/en/tools/url-encoder">URL encoder</a> so special characters don't break the code. Print it at a size that actually scans, and test the print, not the screen.</p>

<h2>The Scanner Side: Reading a Square Into Action</h2>

<p>Scanners exist because a square is only useful if you trust what's behind it. Scanning opens a page, adds a wifi network, or starts a payment \u2014 so scanning is the moment you decide whether the code is safe. The <a href="/en/tools/qr-code-scanner">scanner</a> shows you the target before you act on it. That's the checkpoint the generator side can't give you.</p>

<h2>The Counter-Intuitive Part</h2>

<p>The generator assumes the code will be scanned; the scanner assumes the code might be malicious. Both are right. Anyone can print a QR code that points anywhere \u2014 including a phishing page \u2014 and the square gives no hint of where it leads. The security habits around scanning matter more than any feature of a code, which is why we dedicated a full post to <a href="/en/blog/qr-code-scanner-web-vs-phone-app">web vs phone scanning</a>.</p>

<p>Generate when you need the link in the real world. Scan when you need to know what a stranger's square really points to. The <a href="/en/tools/qr-code-generator">QR code generator</a> handles the first half, and the <a href="/en/tools/qr-code-scanner">scanner</a> covers the second \u2014 the same square, two very different questions.</p>`
  },
  {
    slug: "jwt-decoder-whats-inside-token",
    title: "What's Actually Inside a JWT: Decoding the Three Parts",
    description: "A JWT looks like random characters. Decode it and you find three readable parts \u2014 and the first thing people misjudge: it's signed, not encrypted.",
    date: "2026-08-15",
    category: "Developer",
    tags: ["jwt", "jwt decode", "api tokens", "authentication", "token security"],
    relatedTools: ["jwt-decoder", "base64-converter", "hash-generator"],
    content: `<p>A JWT looks like a random string: <code>eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYWxpY2UifQ.lS4Vb...</code> \u2014 three segments separated by dots. Paste it into a <a href="/en/tools/jwt-decoder">JWT decoder</a> and it's suddenly readable English. That's the first thing most people learn and the first thing they misjudge. A JWT is not encrypted. It's signed.</p>

<h2>The Three Parts</h2>

<p>Every JWT has header, payload, and signature. The header declares the algorithm and token type. The payload carries the claims \u2014 who the token is for, when it expires, what it allows. Both are base64url-encoded, which is why they decode to plain text so easily; the <a href="/en/tools/base64-converter">base64 converter</a> shows the same encoding trick on any data. The signature is the third part, and it's the one that actually does the security work.</p>

<h2>Readable Doesn't Mean Safe</h2>

<p>Because the payload is base64, anyone can read it. That's the point \u2014 the issuer wants the receiver to inspect the claims without a server round-trip. The consequence: never put secrets in a JWT payload. A password, an API key, or a personal detail in the payload is public the moment the token exists. The common mistake is assuming that because the token "looks encoded," it's protected. Encoding is not encryption.</p>

<h2>What the Signature Actually Protects</h2>

<p>The signature prevents tampering. The issuer computes a hash of the header and payload with a secret key, and the receiver recomputes it. Change one character in the payload and the signature stops matching \u2014 the token is rejected. It's the same one-way math behind the <a href="/en/tools/hash-generator">hash generator</a>, but wrapped in a protocol: sign, don't encrypt. If a token needs its contents hidden, it needs real encryption, not a JWT.</p>

<p>Decoding a JWT tells you what's inside, not who vouched for it \u2014 that's what the signature is for. We walked through reading real tokens in our <a href="/en/blog/jwt-decoder-debug-api-tokens-guide">guide to debugging API tokens</a>. Next time you see three dotted segments, decode them in the <a href="/en/tools/jwt-decoder">JWT decoder</a> and read what the payload actually claims \u2014 then check whether the signature still checks out.</p>`
  },
];
"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8", newline="\n") as f:
    f.write(content)

print("Free station: 372->378 objects done.")
