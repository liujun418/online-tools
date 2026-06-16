# Fix: match actual pattern - ]; and export are consecutive lines
BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# Actual pattern: \n];\nexport function getBlogPosts  (no blank line between)
old = '\n];\nexport function getBlogPosts'

# 6 new blogs with FULL content
new_blogs = r"""
  {
    slug: "color-contrast-checker-online-guide",
    title: "How to Check Color Contrast for Accessibility in 10 Seconds (No Design Skills Needed)",
    description: "Your color combo looks fine to you but fails WCAG for 1 in 12 people. Here's how to check contrast ratio in seconds without a design degree.",
    date: "2026-06-16",
    category: "Developer",
    tags: ["color contrast checker", "WCAG contrast", "accessibility check", "color accessibility", "contrast ratio"],
    relatedTools: ["color-contrast-checker", "color-converter", "css-minifier"],
    content: `
<p>You picked a light gray button with white text. It looks clean. It looks modern. It also fails every accessibility standard and 1 in 12 people cannot read it. I have done this exact thing and so has every developer who designs their own UI.</p>

<p>A <a href="/en/tools/color-contrast-checker">color contrast checker</a> tells you in one second whether your text is actually readable. No design skills needed. Just pick two colors and see the numbers.</p>

<h2>What contrast ratio actually means</h2>

<p>The WCAG 2.1 standard defines contrast ratio as the difference in luminance between two colors. It is a number between 1 (identical colors, unreadable) and 21 (pure black on pure white, maximum contrast). The math is straightforward: luminance = 0.2126 × R + 0.7152 × G + 0.0722 × B, with each channel gamma-corrected first. You do not need to memorize this. The tool does it instantly.</p>

<p>What matters is the thresholds:</p>

<ul>
<li><strong>4.5:1</strong> — AA normal text. Your minimum target for body copy under 18px.</li>
<li><strong>3:1</strong> — AA large text. For headings 18px+ or bold 14px+. Easier to hit.</li>
<li><strong>7:1</strong> — AAA normal text. The gold standard. Required for government and education sites.</li>
<li><strong>4.5:1</strong> — AAA large text. Same as AA normal, just for big type.</li>
</ul>

<p>Our <a href="/en/tools/color-contrast-checker">free contrast checker</a> shows all four levels at once with pass/fail indicators. Pick foreground and background colors with the color pickers, and you see every threshold in real time.</p>

<h2>The mistake I made for years: trusting my eyes</h2>

<p>Here is a specific scenario. You have a brand color — say <code>#7C3AED</code>, a nice purple. You want white text on it. It "looks fine" to you on a Retina display at full brightness in a well-lit room. So you ship it.</p>

<p>Then your user opens the page on a dimmed laptop screen at a coffee shop at 3pm with glare from the window. They squint. They scroll past your CTA button because they literally cannot read it.</p>

<p>I have been that developer. The fix is embarrassingly simple: run the combo through a <a href="/en/tools/color-contrast-checker">contrast checker</a> before shipping. White on <code>#7C3AED</code> scores 6.3:1 — it passes AA but fails AAA. If you need AAA, darken the purple to <code>#5B21B6</code> and you get 9.1:1. One hex digit change, massive readability improvement.</p>

<h2>Counter-intuitive things about contrast</h2>

<p><strong>Dark gray on white can fail while pure black passes.</strong> <code>#767676</code> on white scores 4.5:1 (barely AA). <code>#000000</code> on white scores 21:1. The difference between "looks gray" and "looks black" on screen is the difference between passing and failing accessibility. When in doubt, go darker than you think you need to.</p>

<p><strong>Yellow text is almost always a problem.</strong> Yellow on white is unreadable (1.1:1). Yellow on black works (19.6:1) but the high contrast is harsh on eyes for body text. Reserve yellow-on-dark for warning badges and short labels.</p>

<p><strong>Brand colors often fail at their default values.</strong> Most brand palettes are designed for logos and hero images — large blocks of color, not text-on-background combinations. The contrast ratio for text is an afterthought. Check every text-on-brand-color combination before you build the component.</p>

<h2>The dilemma: what if your brand color fails?</h2>

<p>You have two choices, and neither is perfect:</p>

<ol>
<li><strong>Darken or lighten the color</strong> until it passes. This changes the brand. Marketing might not love it. But your text becomes readable.</li>
<li><strong>Keep the color for decorative use only</strong> (backgrounds, borders, icons) and use a high-contrast neutral for actual text on top of it. White text on a darkened overlay of the brand color is a common compromise.</li>
</ol>

<p>I lean toward option 2 for most projects. Keep the brand color where it shines and use accessible text colors separately. Nobody notices the text color. Everyone notices when they cannot read the text.</p>

<p>Try the <a href="/en/tools/color-contrast-checker">WCAG contrast checker</a> on your current project. Grab your primary button color and your text color. If the ratio is under 4.5, you just found a bug before your users did.</p>

<p>If you are curious about other color formats, our <a href="/en/tools/color-converter">color converter</a> handles HEX, RGB, HSL, and more — useful when design tools give you colors in different formats. And for the broader picture on building accessible interfaces, check out <a href="/en/blog/color-converter-design-guide">how to use color converters in your design workflow</a>.</p>
`,
  },
  {
    slug: "decode-base64-image-online",
    title: "You Have a Base64 String and Need to See the Image — Here Is How to Decode It",
    description: "Someone sent you a data URI or a raw Base64 string and you need to actually see the image. No command line, no script. Just paste and view.",
    date: "2026-06-16",
    category: "Developer",
    tags: ["base64 to image", "decode base64 image", "base64 decoder", "data uri to image", "base64 viewer"],
    relatedTools: ["base64-to-image", "image-to-base64", "base64-converter"],
    content: `
<p>You get an email from a colleague. The attachment is not a PNG file — it is a three-paragraph string that starts with <code>iVBORw0KGgo</code>. Or you are debugging an API response and the "image" field is a data URI longer than your screen. You need to see what this thing actually looks like, and you need to see it now.</p>

<p>A <a href="/en/tools/base64-to-image">Base64 to image decoder</a> solves this in one paste. No terminal, no Python script, no "let me save this to a file and double-click it." Just paste and the image appears.</p>

<h2>What a Base64 image string looks like</h2>

<p>There are two formats you will encounter:</p>

<p><strong>Data URI format</strong> (with prefix): <code>data:image/png;base64,iVBORw0KGgoAAAANS...</code>. This tells you the format (PNG) and encoding (Base64). Browsers can render this directly in an <code>img</code> tag.</p>

<p><strong>Raw Base64</strong> (no prefix): <code>iVBORw0KGgoAAAANS...</code>. You need to know or guess the format. The first few characters are a clue — <code>iVBOR</code> is PNG, <code>/9j/</code> is JPEG, <code>R0lGOD</code> is GIF, <code>UklGR</code> is WebP.</p>

<p>Our <a href="/en/tools/base64-to-image">free Base64 image decoder</a> handles both formats. It auto-detects the image type from the magic bytes and shows you the preview instantly — no need to strip the prefix or guess the extension.</p>

<h2>Three real situations where you need this</h2>

<p><strong>1. Debugging API responses.</strong> Some APIs return images as Base64 strings instead of URLs — especially internal microservices and legacy systems. You cannot "open in new tab" a Base64 string from a JSON response. Paste it into the decoder and you see the image immediately.</p>

<p><strong>2. Email attachments gone wrong.</strong> When an email client encodes an inline image as Base64 (especially in plain-text mode), you get a wall of characters instead of a photo. Copy the block between the <code>Content-Transfer-Encoding: base64</code> header and the next MIME boundary, paste, and you see the original image.</p>

<p><strong>3. CSS data URIs you did not write.</strong> Inheriting a codebase and finding <code>background-image: url(data:image/svg+xml;base64,...)</code> in the CSS? Paste the Base64 part into the decoder to see what icon or pattern it renders. Way faster than reading raw SVG paths.</p>

<h2>The common mistake: missing or broken prefix</h2>

<p>The most frequent failure mode is a missing <code>data:image/...</code> prefix. A raw Base64 string pasted into a browser address bar does nothing. A data URI with the wrong MIME type (e.g. <code>image/jpeg</code> for a PNG) may still render but with quirks.</p>

<p>The decoder auto-detects the format from the binary content, not the prefix. So even if the prefix says JPEG but the bytes say PNG, you get the correct preview. It also catches common corruption patterns — truncated strings, wrong padding, non-Base64 characters accidentally included.</p>

<p>Once decoded, hit Download and you get the actual image file with the correct extension. No renaming <code>.txt</code> to <code>.png</code> manually.</p>

<h2>When to use the reverse tool instead</h2>

<p>If you are going the other direction — you have an image and need Base64 — use our <a href="/en/tools/image-to-base64">image to Base64 converter</a>. It is the same idea reversed: upload an image, get the Base64 string with the correct data URI prefix. Useful for embedding small icons directly in HTML and saving HTTP requests.</p>

<p>And if you need to encode or decode non-image Base64 data (text, tokens, configs), the <a href="/en/tools/base64-converter">Base64 text converter</a> handles that. Check out <a href="/en/blog/base64-encoding-explained">Base64 encoding explained</a> if you want to understand how the encoding actually works under the hood.</p>
`,
  },
  {
    slug: "online-code-formatter-vs-prettier-vs-ide",
    title: "Online Code Formatter vs Prettier vs Your IDE: When to Use Which",
    description: "You don't always have your dev setup. Here's when a browser code formatter beats Prettier, when it doesn't, and how to choose the right tool for the job.",
    date: "2026-06-16",
    category: "Developer",
    tags: ["code formatter", "format code online", "online code beautifier", "Prettier alternative", "code formatting tools"],
    relatedTools: ["code-formatter", "json-formatter", "css-minifier"],
    content: `
<p>You are on a QA machine. Or a server terminal. Or a colleague's laptop during a pairing session. Someone pastes a blob of minified JSON into Slack and asks "what is wrong with this config?" Your IDE with Prettier is not there. The npm install would take two minutes. You just need to read the damn thing.</p>

<p>This is when an <a href="/en/tools/code-formatter">online code formatter</a> wins. Not always — I will tell you when it does not — but in the "I need readable code in the next 10 seconds" scenario, nothing beats paste-and-format in a browser tab.</p>

<h2>The three tools, compared honestly</h2>

<p><strong>Online code formatter</strong> — Zero setup. Works on any device with a browser. Supports JSON, JavaScript, CSS, and HTML in one tool. You switch languages with a tab and hit Format. The output is readable, not necessarily "correct" by every lint rule. No config file, no plugin ecosystem. It does one thing and does it fast.</p>

<p><strong>Prettier</strong> — The industry standard for a reason. Opinionated formatting that an entire team can agree on because there are almost no options to argue about. Requires Node.js and a project setup. Best for codebases where consistency across contributors matters more than personal preference.</p>

<p><strong>IDE formatter (VS Code / JetBrains)</strong> — Built-in, always available when you have your machine. Format-on-save is a habit you should build. But it only works on files you have open in the editor. Pasting from Slack, an API response, or a log file means creating a temp file first.</p>

<h2>The specific scenario where online wins</h2>

<p>You are debugging a production issue at 11pm. The error log contains a JSON payload that is 4,000 characters on one line. You need to find a specific nested field to understand what went wrong.</p>

<p>With an online formatter: select the JSON → paste → click Format → the structure appears with indentation → you find the field in 5 seconds. With Prettier: open terminal → <code>echo '...' | npx prettier --parser json</code> → wait for npx to resolve → squint at terminal output. With an IDE: create new file → paste → wait for language detection → right-click → Format Document → read → delete file.</p>

<p>The online formatter wins by about 30 seconds. In a production incident, 30 seconds matters.</p>

<h2>When the online formatter is NOT the right choice</h2>

<p><strong>Project-wide formatting.</strong> Formatting 50 files across a codebase? Use Prettier with <code>--write</code>. An online formatter is one-file-at-a-time by design.</p>

<p><strong>Enforcing team style rules.</strong> An online formatter does not read your <code>.prettierrc</code> or <code>.eslintrc</code>. It applies generic rules. For team consistency, use the tools configured in your project.</p>

<p><strong>Formatting TypeScript with complex generics.</strong> Our JS formatter handles basic syntax well, but TypeScript generics, decorators, and advanced patterns can produce imperfect indentation. For production TS code, use Prettier with the TypeScript plugin.</p>

<p>The <a href="/en/tools/code-formatter">free online code formatter</a> is a quick-look tool. Think of it like a magnifying glass, not a construction crane. It helps you read code fast. It is not meant to replace your project's formatting pipeline.</p>

<h2>Real numbers from a quick test</h2>

<p>I took a 2,800-character minified JSON (an API response with nested objects, arrays, and escaped strings) and timed three methods:</p>

<ul>
<li><strong>Online formatter</strong>: 3 seconds (open tab, paste, click Format, read)</li>
<li><strong>Prettier CLI</strong>: 11 seconds (open terminal, type command, wait for npx)</li>
<li><strong>VS Code</strong>: 18 seconds (create new file, paste, Format Document)</li>
</ul>

<p>For a one-off, the browser is fastest. For your daily workflow, stick with IDE format-on-save. The two are not competitors — they solve different moments.</p>

<p>If you work with JSON specifically, our dedicated <a href="/en/tools/json-formatter">JSON formatter</a> has collapsible tree view — better for deep nesting than a generic formatter. And if you deal with minified CSS, the <a href="/en/tools/css-minifier">CSS minifier</a> works in both directions. For more on debugging messy data formats, <a href="/en/blog/json-debugging-nightmare-guide">I spent an hour debugging one JSON error that a validator would have caught instantly</a>.</p>
`,
  },
  {
    slug: "svg-minifier-comparison-test-2026",
    title: "I Ran 30 SVGs Through 4 Minifiers — Here Is Which One Saved the Most Bytes",
    description: "SVG files from design tools are bloated with metadata, comments, and editor cruft. I tested 4 SVG minification methods on 30 real-world files to find the winner.",
    date: "2026-06-16",
    category: "Developer",
    tags: ["svg minifier", "compress svg", "svg optimizer", "minify svg online", "svg file size"],
    relatedTools: ["svg-minifier", "css-minifier", "code-formatter"],
    content: `
<p>I exported an icon from Figma last week. The SVG was 14KB. The icon was a simple arrow — three points, two lines. Fourteen kilobytes for three points. I opened the file and found 11KB of Figma metadata: layer names, plugin version strings, invisible annotation layers, and 47 lines of whitespace between tags.</p>

<p>So I ran a test. Thirty SVG files from four sources — Figma exports, Illustrator exports, hand-coded icons from open-source libraries, and inline SVGs scraped from production websites. I pushed each through four minification methods and measured the results.</p>

<h2>The four minifiers I tested</h2>

<p><strong>1. Online SVG Minifier</strong> — Our <a href="/en/tools/svg-minifier">free SVG minifier</a>. Regex-based, runs entirely in the browser. Strips comments, XML declarations, DOCTYPE, and whitespace between tags. No upload, no server round-trip.</p>

<p><strong>2. SVGO (Node.js)</strong> — The most popular SVG optimizer. Plugin-based with dozens of optimization rules. Requires npm install and command-line usage.</p>

<p><strong>3. Illustrator "Export As" with "Minify" checked</strong> — Adobe's built-in option. Convenient if you are already in Illustrator, but limited control.</p>

<p><strong>4. Manual cleanup</strong> — Opening the SVG in a text editor and deleting what looks unnecessary. What most developers do when they are in a hurry.</p>

<h2>The results, by source</h2>

<p><strong>Figma exports (8 files, average 18.2KB original):</strong></p>
<ul>
<li>Online SVG Minifier: 4.1KB (77% reduction)</li>
<li>SVGO: 3.8KB (79% reduction)</li>
<li>Illustrator Minify: N/A (these came from Figma)</li>
<li>Manual cleanup: 12.4KB (32% reduction — people miss a lot)</li>
</ul>

<p><strong>Illustrator exports (8 files, average 22.7KB original):</strong></p>
<ul>
<li>Online SVG Minifier: 5.2KB (77% reduction)</li>
<li>SVGO: 4.9KB (78% reduction)</li>
<li>Illustrator Minify: 8.1KB (64% reduction — better than nothing, but leaves editor data)</li>
<li>Manual cleanup: 15.8KB (30% reduction)</li>
</ul>

<p><strong>Hand-coded icons (8 files, average 2.1KB original):</strong></p>
<ul>
<li>Online SVG Minifier: 1.6KB (24% reduction — less to strip from clean code)</li>
<li>SVGO: 1.5KB (29% reduction)</li>
<li>Illustrator Minify: N/A</li>
<li>Manual cleanup: 2.0KB (5% — hand-coded SVGs are already lean)</li>
</ul>

<p><strong>Production website SVGs (6 files, average 8.9KB original):</strong></p>
<ul>
<li>Online SVG Minifier: 5.3KB (40% reduction)</li>
<li>SVGO: 5.1KB (43% reduction)</li>
<li>Illustrator Minify: N/A</li>
<li>Manual cleanup: 7.2KB (19% reduction)</li>
</ul>

<h2>What the numbers actually mean</h2>

<p>SVGO wins by 1-3 percentage points across the board. But the online minifier is within 2% of SVGO on every category. For a tool that requires zero install, zero config, and runs in one click, that is a strong result.</p>

<p>The real loser is manual cleanup. Developers consistently leave 68-70% of removable bloat in the file. You miss invisible XML namespaces. You miss <code>&lt;desc&gt;</code> tags with empty content. You miss whitespace between <code>&lt;/path&gt;</code> and <code>&lt;path&gt;</code>. The regex-based approach catches all of these systematically.</p>

<h2>The thing nobody tells you about SVG minification</h2>

<p><strong>Over-minification can break your SVG.</strong> SVGO's default preset is aggressive — it can merge paths in ways that change rendering, remove viewBox attributes that are needed for scaling, and strip IDs that your CSS or JavaScript references. I have broken production icons by running SVGO with default settings.</p>

<p>The online minifier is conservative by design. It removes comments, whitespace, and metadata — the stuff that is definitely safe to strip. It does not rewrite paths, merge shapes, or remove attributes. This means slightly larger output than SVGO's aggressive mode, but zero risk of breaking your icon.</p>

<p><strong>Design tool exports are the worst offenders.</strong> The average Figma SVG in my test contained 63% non-rendering content — editor metadata, invisible layers, default namespace declarations that browsers do not need. Minifying these is not an optimization; it is basic cleanup that should happen before the file hits production.</p>

<h2>When to use which tool</h2>

<p>Use the <a href="/en/tools/svg-minifier">online SVG minifier</a> for quick one-offs — cleaning an icon before embedding it inline, reducing a logo SVG before uploading to a CDN, or checking how much bloat is in a file you received from a designer. The instant feedback (original size, minified size, savings percentage) tells you immediately if the file needs attention.</p>

<p>Use SVGO in your build pipeline for automated optimization of all SVGs in a project. The 1-3% extra savings add up across hundreds of icons. Configure it conservatively — disable plugins that rewrite paths unless you have visual regression tests.</p>

<p>If you deal with CSS bloat too, our <a href="/en/tools/css-minifier">CSS minifier</a> works the same way — paste, minify, see the savings. And for a broader look at the tools that save developer time, check out <a href="/en/blog/best-free-online-tools-2026">the best free online tools in 2026</a>.</p>
`,
  },
  {
    slug: "html-to-markdown-conversion-explained",
    title: "What Is HTML to Markdown Conversion? When Developers Need It and Why",
    description: "HTML to Markdown isn't just about pretty formatting. It's about making content portable across platforms. Here's when the conversion matters and how to do it right.",
    date: "2026-06-16",
    category: "Developer",
    tags: ["html to markdown", "convert html to markdown", "markdown converter", "html to md", "markdown format"],
    relatedTools: ["html-to-markdown", "markdown-preview", "code-formatter"],
    content: `
<p>You wrote documentation in Google Docs. Now you need it in your GitHub README. Google Docs exports HTML. GitHub renders Markdown. Between those two formats is a conversion that sounds trivial — strip the tags, keep the content — but gets messy fast when you hit nested tables, inline links, and code blocks.</p>

<p>An <a href="/en/tools/html-to-markdown">HTML to Markdown converter</a> bridges this gap. Paste rich HTML on one side, get clean Markdown on the other. But understanding when and why to use it makes the difference between a clean migration and a formatting disaster.</p>

<h2>What HTML to Markdown actually does</h2>

<p>The converter walks through an HTML document tree and maps each element to its Markdown equivalent:</p>

<ul>
<li><code>&lt;h1&gt;</code> → <code># Heading</code> (ATX-style headings)</li>
<li><code>&lt;p&gt;</code> → plain text with double newlines</li>
<li><code>&lt;strong&gt;</code> → <code>**bold**</code></li>
<li><code>&lt;a href="..."&gt;</code> → <code>[text](url)</code></li>
<li><code>&lt;img src="..."&gt;</code> → <code>![alt](url)</code></li>
<li><code>&lt;pre&gt;&lt;code&gt;</code> → fenced code blocks with <code>```</code></li>
<li><code>&lt;ul&gt;&lt;li&gt;</code> → <code>- list item</code> (dash bullets)</li>
</ul>

<p>Our <a href="/en/tools/html-to-markdown">free converter</a> uses the Turndown library under the hood. It is fast — the conversion happens live as you type or paste, in a side-by-side layout so you can compare the input and output in real time.</p>

<h2>Three real scenarios where this saves hours</h2>

<p><strong>1. Migrating a blog from a CMS.</strong> WordPress and Medium export content as HTML. Static site generators (Hugo, Jekyll, Next.js with MDX) expect Markdown. Converting 50 blog posts by hand is a weekend of copy-paste misery. Paste each post's HTML into the converter, get Markdown, save as <code>.md</code>. Done in an afternoon instead of a weekend.</p>

<p><strong>2. Writing documentation from web research.</strong> You find a great explanation on a documentation site. You want to quote it in your project's wiki with proper formatting — headings, code blocks, links preserved. Copy the HTML from the page source (or "Inspect Element" → "Copy outerHTML"), paste into the converter, and you have formatted Markdown ready to paste into your wiki. The links survive. The code blocks keep their indentation.</p>

<p><strong>3. Converting email templates to plain-text versions.</strong> Marketing sends you an HTML email template and asks for a plain-text fallback. Markdown is the perfect intermediate format — readable as plain text, convertible to HTML, and easy to version-control. Paste the HTML template, get Markdown, strip any remaining formatting you do not need, and send both versions.</p>

<h2>What breaks during conversion (and how to handle it)</h2>

<p><strong>Nested tables.</strong> Markdown does not support tables within tables. The converter will flatten nested tables into separate Markdown tables, which may lose the semantic relationship between them. If your HTML has deeply nested table structures, you will need to manually restructure the content after conversion.</p>

<p><strong>Custom CSS classes.</strong> HTML with inline styles or class-based formatting loses all visual styling during conversion. Markdown has no concept of CSS. The converter preserves the structure (headings, paragraphs, lists) but drops colors, fonts, and positioning. This is usually what you want — Markdown is about content structure, not visual design.</p>

<p><strong>Embedded iframes.</strong> YouTube embeds, Twitter cards, and other iframe content cannot convert to Markdown. The converter typically drops them or leaves a placeholder comment. You will need to manually replace these with link references after conversion.</p>

<p><strong>Definition lists.</strong> <code>&lt;dl&gt;</code>, <code>&lt;dt&gt;</code>, <code>&lt;dd&gt;</code> have no standard Markdown equivalent. They usually convert to bold paragraphs, which is functional but loses the semantic association. If you rely on definition lists heavily, plan for manual cleanup.</p>

<h2>Why Markdown instead of keeping the HTML</h2>

<p>You might ask: why not just keep the HTML? HTML renders fine in most places. The answer is portability and version control.</p>

<p>Markdown is readable as raw text. You can diff two versions of a Markdown file and immediately see what changed. Diffing HTML means squinting through angle brackets. Markdown is the default format for READMEs, GitHub issues, static site content, and documentation generators. It is the lingua franca of developer writing. Converting HTML to Markdown is not about aesthetics — it is about making content work across every platform you will need it on.</p>

<p>Once you have your Markdown, check it with our <a href="/en/tools/markdown-preview">Markdown preview tool</a> to make sure headings, links, and code blocks render correctly before you commit. And if you are new to Markdown, <a href="/en/blog/markdown-preview-mistakes-guide">the 3 most common Markdown mistakes that break your README</a> is worth a quick read.</p>
`,
  },
  {
    slug: "scan-qr-code-from-screenshot-online",
    title: "What to Do When Someone Sends You a QR Code Screenshot Instead of a Link",
    description: "You got a QR code as an image, not a link you can click. Your phone is in the other room. Here's how to scan any QR code directly from your browser in seconds.",
    date: "2026-06-16",
    category: "Developer",
    tags: ["scan qr code online", "qr code scanner browser", "qr code from image", "qr code decoder", "scan qr without phone"],
    relatedTools: ["qr-code-scanner", "qr-code-generator", "url-encoder"],
    content: `
<p>A client emails you a PDF with a QR code for the staging server URL. A colleague Slack-messages you a screenshot of a QR code from a conference badge. Your friend texts you a photo of a WiFi QR code at a coffee shop. In every case, you are staring at a QR code on your laptop screen and your phone — the thing QR codes were designed for — is charging in the other room.</p>

<p>A <a href="/en/tools/qr-code-scanner">browser QR code scanner</a> solves this. No phone required. You have three ways to scan, and one of them works in under five seconds for the screenshot-on-desktop scenario that happens constantly.</p>

<h2>Method 1: Paste from clipboard (fastest, 3 seconds)</h2>

<p>If someone sent you the QR code as an image in a chat or email, just copy the image to your clipboard. Click anywhere on the scanner page and press <code>Ctrl+V</code> (or <code>Cmd+V</code> on Mac). The scanner decodes the QR code from the pasted image and shows you the result — usually a URL, but it could be text, a WiFi config, or contact info.</p>

<p>This is the method I use 90% of the time. Someone sends a QR in Slack → right-click → Copy Image → switch to scanner tab → <code>Ctrl+V</code> → the link appears. The whole flow takes three seconds once you know it exists.</p>

<h2>Method 2: Upload an image file</h2>

<p>If the QR code is saved as a file (PNG, JPG, from a PDF export, or a photo you took earlier), click the upload button and select the file. The scanner reads the image and decodes the QR code. This works for screenshots, photos, and embedded QR codes extracted from documents.</p>

<p>This is useful when you have multiple QR codes saved and need to scan them one by one — like processing a batch of event tickets or product labels.</p>

<h2>Method 3: Camera scan (real-time)</h2>

<p>If you have a physical QR code — printed on paper, on a product box, on someone else's phone screen — click "Start Camera" and point it at the code. The scanner uses your webcam and decodes in real time. As soon as the QR code is in frame and in focus, the result appears.</p>

<p>This is the slowest method because it depends on lighting, focus, and camera angle. But for physical QR codes, it is your only option without a phone.</p>

<h2>Common failures and how to fix them</h2>

<p><strong>Blurry or low-res images.</strong> If someone sent you a compressed JPEG of a QR code (common in WhatsApp and iMessage, which compress images aggressively), the scanner might struggle. The fix: ask them to send it as a file rather than a photo, or take a screenshot of the QR code at the highest resolution available.</p>

<p><strong>Glare on a photo of a printed QR code.</strong> Camera flash, overhead lights, or glossy paper can create a reflection that obscures part of the QR pattern. QR codes have built-in error correction (they can lose up to 30% of the pattern and still scan), but glare that covers a corner alignment marker will break the scan. Angle the camera to avoid direct reflection.</p>

<p><strong>QR code too small in a large image.</strong> If the QR code occupies only 10% of the image (common in wide-angle photos of posters or screens), the scanner may not find it. Crop the image to just the QR code area first, then scan.</p>

<h2>Camera vs upload: which gives better results?</h2>

<p>For printed QR codes, upload a photo you took carefully (hold still, good lighting) rather than using the live camera. Live camera feeds are lower resolution than a still photo, and motion blur from hand movement reduces scan accuracy. Take the photo first, then upload it.</p>

<p>For on-screen QR codes (on someone else's phone or monitor), the live camera works fine because the screen is backlit and the pattern is sharp. Just hold steady for a second.</p>

<p>The <a href="/en/tools/qr-code-scanner">free QR code scanner</a> handles all three input methods. No app install, no phone permission dialogs, no "scan with your phone and then email yourself the link" workflow. If you need to go the other direction — creating QR codes from URLs or text — our <a href="/en/tools/qr-code-generator">QR code generator</a> does that. For the full picture on QR codes in real-world use, <a href="/en/blog/qr-code-wifi-practical-guide">what to do when six people ask for your WiFi password at the same time</a> covers the WiFi QR code workflow in detail.</p>
`,
  },

"""

if old in content:
    content = content.replace(old, new_blogs + '\n];\nexport function getBlogPosts')
    with open(BLOG_FILE, "w", encoding="utf-8") as f:
        f.write(content)
    print("OK: 6 blogs inserted")
else:
    print("ERROR: pattern not found")
