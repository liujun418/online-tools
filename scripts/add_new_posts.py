"""Insert 3 new blog posts into blog.ts"""
import re

PATH = "C:/Users/jun/online-tools/src/lib/blog.ts"
with open(PATH, encoding="utf-8") as f:
    ts = f.read()

NEW = """

  {
    slug: "online-developer-tools-bookmarks-2026",
    title: "21 Developer Tools You Can Use Without Installing Anything (2026)",
    description: "A curated list of online developer tools for formatting, encoding, converting, and testing — all in the browser. No installs, no signups.",
    date: "2026-05-21",
    category: "Developer",
    tags: ["online developer tools", "free dev tools", "web tools for developers", "online formatter", "developer productivity"],
    relatedTools: ["json-formatter", "base64-converter", "url-encoder", "hash-generator", "markdown-preview", "css-minifier", "regex-tester", "html-entities"],
    content: `"""

NEW_CONTENT_1 = """<p>I got a new laptop last week. Before installing anything, I needed to format a JSON blob, encode a URL, and check a hash. All three took under 30 seconds — no installs, no terminals, no signups. Just browser tabs.</p>

<p>Here are 21 online developer tools that replace the things you would normally install or script yourself. All free. All work in any browser.</p>

<h2>Data Formatting</h2>

<p><strong><a href="/en/tools/json-formatter">JSON Formatter</a></strong> — Paste ugly JSON, get indented, collapsible tree view with validation and line numbers. Also minifies back to single-line for production. Made for the "I just got a 3000-character JSON blob from an API" scenario.</p>

<p><strong><a href="/en/tools/json-to-csv">JSON to CSV Converter</a></strong> — Flattens nested JSON arrays into spreadsheet-ready CSV. Handles nested objects by flattening keys with dot notation. No Excel macro required.</p>

<p><strong><a href="/en/tools/csv-to-json">CSV to JSON Converter</a></strong> — The reverse. Paste a CSV and get a JSON array of objects. Detects headers automatically. Picks the right data types instead of making everything a string.</p>

<h2>Encoding and Decoding</h2>

<p><strong><a href="/en/tools/base64-converter">Base64 Encoder/Decoder</a></strong> — Standard and URL-safe Base64 in both directions. For when you are reading JWT payloads, embedding images as data URIs, or decoding Basic auth headers.</p>

<p><strong><a href="/en/tools/url-encoder">URL Encoder/Decoder</a></strong> — Encodes spaces, symbols, and Unicode for URL safety. Also decodes percent-encoded URLs back to readable text. Solves the "why is my link broken" problem in one click.</p>

<p><strong><a href="/en/tools/html-entities">HTML Entities Encoder/Decoder</a></strong> — Converts <code>&lt;</code> to <code>&amp;lt;</code> and back. Useful when embedding code snippets in HTML or cleaning up escaped text from an API.</p>

<h2>Hashing and Security</h2>

<p><strong><a href="/en/tools/hash-generator">Hash Generator</a></strong> — SHA-1, SHA-256, SHA-384, SHA-512, MD5. Hash any text and compare two hashes side by side. For verifying file checksums.</p>

<p><strong><a href="/en/tools/password-generator">Password Generator</a></strong> — Cryptographically secure random passwords using Web Crypto API. Choose length and character types. Generated locally — nothing sent to any server.</p>

<p><strong><a href="/en/tools/uuid-generator">UUID Generator</a></strong> — Generates v4 UUIDs. One click, one UUID. Click again for another. No libraries, no imports.</p>

<h2>Text and Code</h2>

<p><strong><a href="/en/tools/markdown-preview">Markdown Preview</a></strong> — Write Markdown on the left, see rendered output on the right. GitHub Flavored Markdown. Catches formatting mistakes before you push.</p>

<p><strong><a href="/en/tools/css-minifier">CSS Minifier</a></strong> — Strips whitespace, comments, and unnecessary characters from CSS. Smaller file, faster load.</p>

<p><strong><a href="/en/tools/regex-tester">Regex Tester</a></strong> — Write a regex, test it against sample text, see matches highlighted in real time. No more "works on my machine" surprises.</p>

<p><strong><a href="/en/tools/case-converter">Case Converter</a></strong> — Convert between UPPERCASE, lowercase, Title Case, camelCase, snake_case, and kebab-case.</p>

<p><strong><a href="/en/tools/text-diff">Text Diff Checker</a></strong> — Paste two versions of text, see what changed. Line-by-line comparison with additions and deletions highlighted.</p>

<h2>Generators and Utilities</h2>

<p><strong><a href="/en/tools/text-to-slug">Text to Slug</a></strong> — Converts "My Blog Post Title!" to "my-blog-post-title". For URLs, file names, and IDs.</p>

<p><strong><a href="/en/tools/lorem-ipsum">Lorem Ipsum Generator</a></strong> — Generates placeholder text by paragraph, sentence, or word count. For mockups and testing.</p>

<p><strong><a href="/en/tools/word-counter">Word Counter</a></strong> — Character, word, sentence, and paragraph counts. Plus reading time estimate.</p>

<p><strong><a href="/en/tools/remove-duplicate-lines">Duplicate Line Remover</a></strong> — Paste a list, remove duplicates, sort alphabetically. For cleaning up email lists and data imports.</p>

<h2>The Browser-Only Advantage</h2>

<p>All of these tools run entirely in your browser. No data is uploaded to any server. No account required. No ads. No "pro" upsells. Just the tool, doing one thing, right there in a tab.</p>

<p>Bookmark the ones you use most. Keep the rest in the back of your mind for when you need them. That is the whole point of <a href="/en">online tools</a> — there when you need them, invisible when you do not.</p>"""

NEW_POST_1 = NEW + '`' + "\n" + NEW_CONTENT_1.strip() + "\n" + '`' + "\n  },"

NEW2 = """
  {
    slug: "verify-file-checksum-guide",
    title: "How to Verify a Downloaded File Is Not Corrupted or Tampered With",
    description: "Learn how to use SHA-256 and MD5 checksums to verify file integrity. Step-by-step guide for Windows, Mac, and online tools.",
    date: "2026-05-21",
    category: "Developer",
    tags: ["verify checksum", "SHA-256 verification", "MD5 checksum", "file integrity check", "hash verification"],
    relatedTools: ["hash-generator", "md5-generator"],
    content: `"""

NEW_CONTENT_2 = """<p>You download a 2GB software installer. The website shows a string of random-looking characters next to the download button labeled "SHA-256". Most people ignore it. Here is why you should not — and how to check it in 30 seconds.</p>

<h2>Why checksums matter</h2>

<p>When you download a file, two things can go wrong. First, the download can be corrupted — a few bits flipped during transfer, and your installer silently breaks. Second, someone could have tampered with the file — replacing the real download with malware.</p>

<p>A checksum protects against both. The software author computes a hash of the original file and publishes it. You compute the hash of the file you downloaded. If they match, the file is identical — bit for bit — to what the author intended. If they do not match, delete the file and download again from a different source.</p>

<p>Major projects like Ubuntu, Tor Browser, and VeraCrypt all publish checksums. It takes 30 seconds and eliminates the most common vector for malware distribution through downloads.</p>

<h2>Method 1: Online Hash Generator (fastest for text)</h2>

<p>Open the <a href="/en/tools/hash-generator">hash generator</a>. Paste the text content you want to verify. For small text files, configs, and scripts, copy-paste works. For binary files, use Method 2 or 3.</p>

<p>Select SHA-256 from the dropdown. The hash appears instantly. Compare it side-by-side with the published checksum using the built-in comparison feature. If they match, your file is verified.</p>

<h2>Method 2: Windows (PowerShell)</h2>

<pre><code>Get-FileHash -Path "C:\\Downloads\\file.iso" -Algorithm SHA256</code></pre>

<p>Replace the path with your actual file path. PowerShell prints the hash. Compare it visually with the published one.</p>

<p>For MD5:</p>

<pre><code>Get-FileHash -Path "C:\\Downloads\\file.iso" -Algorithm MD5</code></pre>

<h2>Method 3: Mac / Linux (Terminal)</h2>

<pre><code>shasum -a 256 ~/Downloads/file.iso</code></pre>

<p>For MD5:</p>

<pre><code>md5 ~/Downloads/file.iso</code></pre>

<p>The output is the hash followed by the filename. Compare with the published checksum. If identical, the file is intact.</p>

<h2>When you must verify checksums</h2>

<ul>
<li><strong>Operating system installers:</strong> Corrupted ISO = unbootable system</li>
<li><strong>Password managers and crypto wallets:</strong> Tampered installer = all your passwords or money stolen</li>
<li><strong>BIOS/firmware updates:</strong> Corrupted firmware = bricked device</li>
<li><strong>Privacy tools (Tor, Signal, VPN):</strong> Tampered binary = your privacy compromised</li>
<li><strong>Large downloads over unreliable connections:</strong> Corrupted ZIP = mysterious extraction errors</li>
</ul>

<p>For everything else — casual downloads, media files, documents — checksums are optional. But the 30 seconds it takes to verify can save hours of debugging a corrupted install. Make it a habit for anything security-critical. And the <a href="/en/tools/hash-generator">hash generator</a> makes it easy.</p>"""

NEW_POST_2 = NEW2 + '`' + "\n" + NEW_CONTENT_2.strip() + "\n" + '`' + "\n  },"

NEW3 = """
  {
    slug: "json-vs-csv-vs-xml-data-formats",
    title: "JSON vs CSV vs XML: When to Use Each Format (With Real Examples)",
    description: "JSON, CSV, and XML each solve different problems. Learn which format to use for APIs, spreadsheets, config files, and data exchange — with concrete examples.",
    date: "2026-05-20",
    category: "Developer",
    tags: ["JSON vs CSV", "data formats comparison", "XML vs JSON", "when to use CSV", "data interchange formats"],
    relatedTools: ["json-formatter", "json-to-csv", "csv-to-json"],
    content: `"""

NEW_CONTENT_3 = """<p>Someone sends you data as XML. You wanted JSON. Or they send CSV and the nested fields are a mess. Choosing the right data format up front saves hours of conversion and debugging later.</p>

<p>Here is when to use each — with real examples, not textbook definitions.</p>

<h2>JSON: The Default for Web APIs</h2>

<pre><code>{
  "users": [
    {
      "id": 1,
      "name": "Alice",
      "roles": ["admin", "editor"],
      "metadata": { "lastLogin": "2026-05-20" }
    }
  ]
}</code></pre>

<p><strong>Best for:</strong> APIs, configuration files, data with nested relationships, anything consumed by JavaScript or Python. If your data has objects inside objects, arrays of mixed types, or optional fields, JSON handles it naturally.</p>

<p><strong>When not to use it:</strong> Very large datasets (JSON is verbose — field names repeat in every record). Tabular data with flat structure (CSV is more compact). Situations where a human needs to read and edit the data directly (JSON syntax is picky about commas and quotes).</p>

<p>A <a href="/en/tools/json-formatter">JSON formatter</a> makes nested JSON readable. Paste compact JSON and get an indented tree view with collapsible nodes.</p>

<h2>CSV: The Spreadsheet Format</h2>

<pre><code>id,name,role,lastLogin
1,Alice,admin,2026-05-20
2,Bob,editor,2026-05-19
3,Carol,viewer,2026-05-18</code></pre>

<p><strong>Best for:</strong> Tabular data (rows and columns), spreadsheet import/export, data analysis in Excel or pandas, large datasets where every record has the same fields. CSV files are compact — a million-row CSV might be 50MB where the equivalent JSON is 200MB.</p>

<p><strong>When not to use it:</strong> Nested data (arrays within objects, objects within objects). CSV is flat — one level only. Fields that contain commas or line breaks (these need quoting and escaping, which gets messy).</p>

<p>Converting between JSON and CSV is common: APIs return JSON, but analysts want CSV. Our <a href="/en/tools/json-to-csv">JSON to CSV converter</a> handles this in one click. Going the other way? <a href="/en/tools/csv-to-json">CSV to JSON</a> does the reverse.</p>

<h2>XML: The Legacy Standard (Still Everywhere)</h2>

<pre><code>&lt;users&gt;
  &lt;user id="1"&gt;
    &lt;name&gt;Alice&lt;/name&gt;
    &lt;role&gt;admin&lt;/role&gt;
  &lt;/user&gt;
&lt;/users&gt;</code></pre>

<p><strong>Best for:</strong> Document formats (SVG, DOCX, RSS feeds, sitemaps), enterprise systems (SOAP APIs, Java configurations), situations requiring schema validation (XSD), and data that mixes text with metadata.</p>

<p><strong>When not to use it:</strong> New web APIs (use JSON). Simple key-value configs (use JSON or YAML). Anything where verbosity is a problem — XML's closing tags roughly double the character count compared to JSON.</p>

<p><strong>Why XML still matters:</strong> Microsoft Office files (DOCX, XLSX) are ZIP files containing XML. SVG images are XML. RSS and Atom feeds are XML. Android app layouts are XML. Java and .NET enterprise systems default to XML. You will encounter XML whether you choose to use it or not.</p>

<h2>How to choose in practice</h2>

<ul>
<li><strong>Building a REST API?</strong> JSON. No question.</li>
<li><strong>Exporting data for Excel?</strong> CSV.</li>
<li><strong>Configuration file?</strong> JSON or YAML.</li>
<li><strong>Integrating with enterprise/Java/.NET?</strong> XML (they probably require it).</li>
<li><strong>Data with nested arrays and objects?</strong> JSON.</li>
<li><strong>Million-row dataset for analysis?</strong> CSV.</li>
<li><strong>RSS feed or sitemap?</strong> XML (those standards require it).</li>
</ul>

<p>And if someone sends you the wrong format, our converters handle the translation: <a href="/en/tools/json-formatter">format</a>, <a href="/en/tools/json-to-csv">convert</a>, validate, and move on. No scripting required.</p>"""

NEW_POST_3 = NEW3 + '`' + "\n" + NEW_CONTENT_3.strip() + "\n" + '`' + "\n  },"

insert_pos = ts.rfind("];")
all_new = NEW_POST_1 + NEW_POST_2 + NEW_POST_3
ts = ts[:insert_pos] + all_new + "\n];\n"

with open(PATH, "w", encoding="utf-8") as f:
    f.write(ts)

print(f"Added 3 new posts. Total length: {len(ts)} chars")
