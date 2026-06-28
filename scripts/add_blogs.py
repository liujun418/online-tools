"""Add 6 blogs to free station (112→118) — June 28, 2026"""
BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "json-formatter-deep-nesting-tree-view",
    title: "JSON Formatter — How Tree View Finds Bugs in Deeply Nested JSON That Raw Text Search Completely Misses",
    description: "Ctrl+F works for flat JSON. For 8 levels of nested objects, a tree view is the difference between finding the bug in 10 seconds and scrolling for 20 minutes.",
    date: "2026-06-28",
    category: "Developer",
    tags: ["JSON formatter", "JSON tree view", "nested JSON", "JSON debugging", "deep JSON"],
    relatedTools: ["json-formatter", "code-formatter", "text-diff"],
    content: `
<p>You are debugging an API response. The JSON is 2,000 lines, 8 levels deep, and somewhere in there a field called <code>status</code> is set to <code>null</code> instead of <code>"active"</code>. You Ctrl+F for "status" — 47 matches across 12 different nested objects. You have no idea which one is wrong. You scroll. You get lost. You scroll back. You lose your place. Twenty minutes later you find it — it was in <code>data.items[3].metadata.user.status</code>, nested six objects deep.</p>

<p>Our <a href="/en/tools/json-formatter">free JSON formatter</a> with collapsible tree view solves this in seconds. Here is why visual structure beats text search for nested data — and how to use tree view like a debugging power tool.</p>

<h2>Why flat text search fails on nested JSON</h2>

<p>Text search treats JSON as a single flat string. It does not know that <code>status</code> at line 47 is inside <code>user.profile</code> and <code>status</code> at line 312 is inside <code>order.payment</code>. Both matches look identical in the search results panel. You have to click each one, scroll to see the context, and mentally track which path you are in.</p>

<p>With a tree view, the path is visually obvious. Each level is indented. You can collapse entire subtrees — collapse <code>metadata</code>, collapse <code>headers</code>, collapse everything except the section you are debugging. The tree shows you exactly where you are: <code>root → data → items → [3] → metadata → user → status</code>. No mental tracking required.</p>

<p><strong>The real productivity gain:</strong> you stop reading JSON and start navigating it. Reading 2,000 lines takes minutes. Collapsing irrelevant branches and expanding only the path you need takes seconds. For repeated debugging sessions on the same API, you learn the tree structure and navigate it faster each time.</p>

<h2>The three tree view features that actually matter</h2>

<p><strong>1. Collapse all / expand all.</strong> Start with everything collapsed. You see only the top-level keys: <code>data</code>, <code>error</code>, <code>meta</code>. Expand <code>data</code>. Now you see the next level. This is faster than scrolling past 1,900 lines of irrelevant nested data to find the 100 lines you care about.</p>

<p><strong>2. Path breadcrumb.</strong> The tree view should show where you are: <code>root > data > items[2] > details</code>. Without this, you are still guessing. With it, you can copy the path and search your codebase for where that path is constructed — connecting the bug in the output to the bug in the code.</p>

<p><strong>3. Value type indicators.</strong> Strings, numbers, booleans, null, arrays, objects — each should be visually distinct. A <code>null</code> where a string should be stands out immediately. In raw text, <code>"status": null</code> and <code>"status": "active"</code> look similar enough to miss. In tree view with color-coded types, the null is a different color — you catch it without even reading the value.</p>

<h2>Real debugging workflow with tree view</h2>

<p><strong>Step 1: Paste the JSON and format.</strong> The formatter validates syntax and adds indentation. If formatting fails, you have a syntax error — fix that first before debugging values.</p>

<p><strong>Step 2: Collapse all, then trace the path.</strong> You know the bug is in <code>response.data.orders[].payment</code>. Expand <code>data</code>, then <code>orders</code>, then the first array element, then <code>payment</code>. You are there in 4 clicks — no scrolling.</p>

<p><strong>Step 3: Compare with expected structure.</strong> If the API docs say <code>payment.amount</code> should be a number and it is a string, you see it immediately — the tree view shows the type. In raw text, <code>"amount": "99.99"</code> and <code>"amount": 99.99</code> differ by two quote characters that are nearly invisible in a monospace font.</p>

<p><strong>Step 4: Diff the tree view against a known-good response.</strong> Paste the expected JSON and the actual JSON into our <a href="/en/tools/text-diff">text diff tool</a> to find structural differences — missing keys, extra keys, changed types — that text search alone would never catch.</p>

<p>For standardizing JSON formatting before comparison, our <a href="/en/tools/code-formatter">code formatter</a> normalizes indentation. And for a guide to common JSON formatting mistakes, see our <a href="/en/blog/json-formatter-common-mistakes">JSON formatter common mistakes guide</a>.</p>
`,
  },
  {
    slug: "base-converter-binary-hex-decimal-guide",
    title: "Binary Hex Decimal Converter — Number Bases Explained for Developers Who Skipped That CS Lecture",
    description: "You need to convert #FF5733 to RGB, or 10101100 to decimal, or 255 to hex — and you do not want to do it by hand. A base converter does it in one paste.",
    date: "2026-06-28",
    category: "Developer",
    tags: ["binary converter", "hex converter", "decimal", "number bases", "base converter"],
    relatedTools: ["base-converter", "hash-generator", "url-encoder"],
    content: `
<p>You are reading a binary file format specification and it says "bits 4-7 represent the flags." You need to know what binary <code>1011</code> is in decimal. You could calculate it: 8+0+2+1=11. Or you could paste it into a converter and get the answer before you finish the mental math. For one conversion, mental math is fine. For the 40th conversion of the day, it is not.</p>

<p>Our <a href="/en/tools/base-converter">free base converter</a> switches between binary, octal, decimal, and hexadecimal instantly. Here is where number base conversions show up in real development work — not in CS exams, but in the code you write every day.</p>

<h2>Where you actually encounter different number bases</h2>

<p><strong>Hexadecimal (base-16) — colors and memory addresses:</strong> every color in CSS is hex. <code>#FF5733</code> means FF (255) red, 57 (87) green, 33 (51) blue. Every memory address in a stack trace is hex: <code>0x7fff5fbff8c0</code>. Every SHA hash is hex: <code>e3b0c44298fc1c14...</code>. If you work with colors, debugging, or cryptography, you work with hex daily — whether you think about it or not.</p>

<p><strong>Binary (base-2) — bitmasks, flags, and file formats:</strong> permission systems use bitmasks: read=4 (100), write=2 (010), execute=1 (001). Read+write = 6 (110). File format headers use specific bit positions. Network protocols pack multiple values into single bytes. You do not need to be fluent in binary — you need to convert specific bit patterns to decimal when reading specs and debugging.</p>

<p><strong>Octal (base-8) — Unix file permissions:</strong> <code>chmod 755 script.sh</code> — that 755 is octal. 7 = rwx (111), 5 = r-x (101), 5 = r-x (101). Octal appears less often than hex or binary, but when it appears (file permissions, some legacy formats), you need to recognize it.</p>

<p><strong>Decimal (base-10) — the default:</strong> everything else. When a spec says "the first byte is the version number," they mean the decimal value of that byte. When a binary value is 11001000, you need to know that is 200 in decimal — because that is the number you will compare, store, or display.</p>

<h2>Common conversion mistakes that break things</h2>

<p><strong>Mistake 1: Forgetting leading zeros.</strong> Binary <code>101</code> is 5. Binary <code>0101</code> is also 5. But in a byte context (8 bits), <code>00000101</code> is 5. If you are reading a spec that says "bits 0-2 represent the priority," you need to extract exactly those 3 bits — not the whole byte. Leading zeros matter for bit position; they do not matter for numeric value.</p>

<p><strong>Mistake 2: Hex case sensitivity that does not exist.</strong> <code>FF</code>, <code>ff</code>, and <code>0xFF</code> are all 255. The <code>0x</code> prefix is notation, not part of the value. A converter should handle all three. If you are writing a parser, decide on a canonical format (uppercase or lowercase) and normalize all input.</p>

<p><strong>Mistake 3: Confusing decimal and hex values that look similar.</strong> <code>10</code> in hex is 16 in decimal. <code>99</code> in hex is 153 in decimal. If a config file says <code>timeout: 30</code> and you read it as hex (48 decimal), your timeouts are 60% longer than intended. Always check whether a number is decimal or hex before converting.</p>

<p><strong>Mistake 4: Octal confusion with leading zeros.</strong> In many programming languages, <code>077</code> is octal (63 decimal), not decimal 77. JavaScript's <code>parseInt('077')</code> historically treated leading zeros as octal. Modern JavaScript requires <code>parseInt('077', 10)</code> for decimal. This has caused real security bugs in older code.</p>

<p>For generating hash values that are always displayed in hex, our <a href="/en/tools/hash-generator">hash generator</a> produces SHA-256 and MD5 checksums. For encoding URLs where hex values appear as <code>%XX</code>, see our <a href="/en/tools/url-encoder">URL encoder</a>. And for a guide to hash functions in practice, read our <a href="/en/blog/hash-generator-sha256-md5-real-world-guide">hash generator real-world guide</a>.</p>
`,
  },
  {
    slug: "markdown-preview-live-edit-workflow",
    title: "Markdown Preview — Edit README Files Without the Commit-Push-Pray Cycle, See Exactly What Renders Before You Push",
    description: "You edit a README, push to GitHub, and the table is broken. Again. A live markdown preview catches formatting errors before they leave your machine.",
    date: "2026-06-28",
    category: "Developer",
    tags: ["markdown preview", "live markdown", "README editor", "markdown to HTML", "markdown editor"],
    relatedTools: ["markdown-preview", "html-to-markdown", "text-to-slug"],
    content: `
<p>You update your project's README. You add a table, a code block, and a nested list. It looks fine in your text editor. You commit. You push. You open GitHub. The table is misaligned — you missed a pipe character. The nested list rendered flat — you used tabs instead of spaces for indentation. The code block is missing syntax highlighting — you forgot to specify the language after the opening backticks. You fix it, commit again, push again. Three commits for what should have been one edit.</p>

<p>Our <a href="/en/tools/markdown-preview">free markdown preview tool</a> shows you exactly what your markdown will render as — before you commit, before you push, before anyone else sees the broken version. Here is how to integrate live preview into your writing workflow.</p>

<h2>The markdown errors that preview catches instantly</h2>

<p><strong>Table formatting:</strong> markdown tables are fragile. One missing pipe, one misaligned dash in the separator row, and the entire table collapses into plain text. In a text editor, the table still looks like a table — your brain fills in the structure. In a preview, the broken table is obviously broken. Fix it before you push.</p>

<p><strong>Nested list indentation:</strong> markdown requires exactly 4 spaces (or 1 tab, depending on the parser) for each nesting level. 3 spaces? Flat list. 5 spaces? Flat list. Mixed tabs and spaces? Inconsistent results across different markdown renderers. Preview shows you exactly how each renderer will interpret your indentation.</p>

<p><strong>Link rot before it happens:</strong> you type <code>[documentation](/docs/api)</code> but the actual path is <code>/docs/api-reference</code>. In a text editor, the link looks fine — it is blue and underlined. In a preview, clicking it reveals the 404. Catch broken internal links before they reach your users.</p>

<p><strong>Image paths:</strong> you reference <code>./screenshot.png</code> but the image is in <code>./images/screenshot.png</code>. Preview shows the broken image icon immediately. Fix the path once instead of after someone files an issue.</p>

<h2>Side-by-side vs single-pane: which workflow is faster</h2>

<p><strong>Side-by-side (source on left, preview on right):</strong> best for editing existing documents. You type on the left, see the rendered result on the right in real time. The immediate feedback loop means you catch errors as you make them, not after. This is the default for most markdown editors and the mode we recommend.</p>

<p><strong>Single-pane toggle (edit mode / preview mode):</strong> best for reading or presenting. You write in edit mode, then switch to preview mode to see the clean rendered output. Less efficient for editing (you have to toggle back and forth) but better for focused reading without the distraction of raw markdown syntax.</p>

<p><strong>When to use which:</strong> side-by-side for writing and editing — the real-time feedback prevents errors. Single-pane preview for final review — read through the rendered output as your users will see it, looking for flow and clarity issues that are invisible in raw markdown.</p>

<h2>Markdown preview as a writing tool, not just a code tool</h2>

<p>Markdown preview is not just for README files. Use it for:</p>

<ul>
<li><strong>Technical blog posts:</strong> write in markdown, preview to check formatting, then publish. Most static site generators (Hugo, Jekyll, Next.js MDX) use markdown. Preview catches formatting issues before the build fails.</li>
<li><strong>Documentation:</strong> API docs, internal wikis, project specs — all commonly written in markdown. Preview ensures your carefully formatted code examples actually render with syntax highlighting.</li>
<li><strong>GitHub Issues and PRs:</strong> write your issue description or PR summary in a markdown preview tool, then paste into GitHub. The preview confirms checkboxes render, code blocks are formatted, and links work — before you submit.</li>
</ul>

<p>Our <a href="/en/tools/markdown-preview">markdown preview tool</a> supports GitHub-Flavored Markdown (tables, task lists, strikethrough, autolinks) — the same dialect GitHub, GitLab, and most developer platforms use. For converting HTML back to markdown, see our <a href="/en/tools/html-to-markdown">HTML to Markdown converter</a>. For clean URL slugs from your document titles, our <a href="/en/tools/text-to-slug">URL slug generator</a> handles the conversion. And for a guide to HTML-to-markdown workflows, read our <a href="/en/blog/html-to-markdown-conversion-explained">HTML to Markdown conversion guide</a>.</p>
`,
  },
  {
    slug: "regex-tester-vs-ide-find-replace",
    title: "Regex Tester vs IDE Find-and-Replace — When Simple Search Is Not Enough and You Need Pattern Matching",
    description: "IDE find-and-replace handles exact strings. For patterns — 'all email addresses,' 'any date in MM/DD/YYYY format,' 'every HTML tag with class X' — you need regex. Here is where the line is.",
    date: "2026-06-28",
    category: "Developer",
    tags: ["regex tester", "regular expression", "find and replace", "pattern matching", "regex debugger"],
    relatedTools: ["regex-tester", "text-diff", "code-formatter"],
    content: `
<p>You need to find every email address in a 50,000-line log file. Your IDE's find-and-replace requires you to type the exact email address you are looking for. You do not know the email addresses — that is what you are trying to find. This is the exact moment when Ctrl+F stops being useful and regex becomes the only tool that can solve the problem.</p>

<p>Our <a href="/en/tools/regex-tester">free regex tester</a> lets you build, test, and debug regular expressions against real data before you run them. Here is where regex beats simple search, where it loses, and how to avoid the regex that works in the tester but fails in production.</p>

<h2>The clear dividing line: exact strings vs patterns</h2>

<p><strong>Use Ctrl+F / find-and-replace when:</strong> you know the exact string. "Find every occurrence of <code>DEPRECATED_API_V1</code>" — exact string, simple search, done in 2 seconds.</p>

<p><strong>Use regex when:</strong> you know the pattern but not the exact values. "Find every string that looks like an email address" — <code>[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}</code>. "Find every date in YYYY-MM-DD format" — <code>\d{4}-\d{2}-\d{2}</code>. "Find every HTML tag with <code>class="highlight"</code>" — <code><[^>]+class="highlight"[^>]*></code>. The pattern matches hundreds or thousands of specific strings — none of which you knew in advance.</p>

<p><strong>The productivity math:</strong> finding 500 email addresses manually would take hours. A regex finds all 500 in under a second. The 10 minutes you spend writing and testing the regex pays for itself the first time you use it. The 100th time you use a similar regex, the investment has paid off 100-fold.</p>

<h2>Why you need a tester, not just a regex engine</h2>

<p>Writing regex in your code editor and running it against the actual data is tempting. The problem: you do not see what the regex matched until after it runs. If your regex has a bug — and it will, because regex is notoriously hard to read — you might match too much, too little, or nothing at all. Running a broken regex against production data can delete things you did not intend to delete.</p>

<p><strong>A regex tester gives you three things your code editor does not:</strong></p>

<p><strong>1. Real-time match highlighting:</strong> as you type the regex, matches highlight in the test text. You see immediately that <code>\d+</code> matches "2026" but also matches "1" in "version 1.0" — not what you wanted. Adjust to <code>\d{4}</code> to match only 4-digit numbers.</p>

<p><strong>2. Capture group visualization:</strong> your regex <code>(\w+)@(\w+\.\w+)</code> captures the username and domain from email addresses. The tester shows you exactly what each group captured. Without this, you are printing capture groups to console and squinting at the output.</p>

<p><strong>3. Match count and position:</strong> the tester tells you "47 matches found" and highlights each one. If you expected 500 matches and got 47, your regex is too restrictive. If you expected 50 and got 500, it is too loose. The count is your first correctness check.</p>

<h2>The most common regex mistakes that testers catch</h2>

<p><strong>Greedy vs lazy matching:</strong> <code><.*></code> matches everything from the first <code><</code> to the last <code>></code> in the entire file — one giant match. <code><.*?></code> matches each tag individually. The difference is one character (<code>?</code>), and it is the most common regex bug. A tester shows you the difference instantly.</p>

<p><strong>Forgetting to escape special characters:</strong> <code>.</code> matches any character. <code>\.</code> matches a literal period. If you write <code>example.com</code> as your regex, it matches "exampleXcom," "example7com," and a hundred other variations — not just the domain. Escape the dot.</p>

<p><strong>Missing anchors:</strong> <code>\d{3}</code> matches "123" in "12345" and "123" in "abc123def." <code>^\d{3}$</code> matches only strings that are exactly three digits. Without anchors, your regex matches substrings you did not intend to match.</p>

<p>For comparing the before and after of a regex find-and-replace operation, our <a href="/en/tools/text-diff">text diff tool</a> shows exactly what changed. For standardizing code formatting before applying regex, our <a href="/en/tools/code-formatter">code formatter</a> normalizes indentation. And for a guide to diff workflows, read our <a href="/en/blog/text-diff-compare-code-like-a-pro">text diff compare code like a pro guide</a>.</p>
`,
  },
  {
    slug: "css-minifier-build-tool-vs-online",
    title: "CSS Minifier — Build Tool vs Online, When You Need Webpack and When a Browser Tool Is Faster",
    description: "Your build pipeline already minifies CSS. So why would you ever use an online CSS minifier? Three situations where the browser tool beats the build tool — and two where it absolutely does not.",
    date: "2026-06-28",
    category: "Developer",
    tags: ["CSS minifier", "minify CSS", "build tool", "Webpack", "online minifier"],
    relatedTools: ["css-minifier", "code-formatter", "svg-minifier"],
    content: `
<p>Your project uses Vite. Every build auto-minifies CSS through PostCSS and cssnano. You have never thought about CSS minification — it just happens. Then a colleague sends you a standalone CSS file over Slack and asks "can you minify this and send it back?" You do not want to create a whole project just to minify one file. This is when an online CSS minifier is the right tool — and knowing when to use which saves real time.</p>

<p>Our <a href="/en/tools/css-minifier">free CSS minifier</a> processes CSS in the browser with no setup. Here is the honest comparison: when the browser tool wins, when the build tool wins, and how to decide in 5 seconds.</p>

<h2>When the online minifier wins</h2>

<p><strong>1. One-off files with no project context.</strong> A single CSS file from a colleague, a downloaded theme, a snippet from Stack Overflow. Creating a project, installing dependencies, and configuring a build pipeline for one file is absurd. Paste, minify, copy, done — 10 seconds.</p>

<p><strong>2. Quick size checks during code review.</strong> "How much does this new CSS add to the bundle?" Minify the before and after versions, compare sizes. You get an instant answer without running a full build. For pull request reviews where build times are 5+ minutes, the online check takes 10 seconds.</p>

<p><strong>3. Debugging minification-specific bugs.</strong> A production-only CSS bug that does not reproduce in development. The difference is minification. Paste the unminified CSS into the online tool, minify it, compare the output with the production CSS. If they differ, the bug is in the minification step — not in the CSS itself. This isolates the problem in seconds instead of hours of "works on my machine."</p>

<h2>When the build tool wins</h2>

<p><strong>1. Multi-file projects with imports.</strong> Your CSS is split across 30 files with <code>@import</code> statements. An online minifier processes one file at a time. Your build tool resolves the import graph, combines everything, removes unused CSS (PurgeCSS), and minifies the result. For multi-file projects, the build tool is the only practical option.</p>

<p><strong>2. Production deployments.</strong> Your build tool does more than minify: it adds vendor prefixes (Autoprefixer), transpiles modern CSS for older browsers, generates source maps, and produces content-hashed filenames for cache busting. An online minifier does exactly one thing — remove whitespace and comments. That is not enough for production.</p>

<p><strong>The decision framework:</strong> if you can describe your task as "I have one CSS file and I want it smaller," use the online tool. If your task involves multiple files, imports, browser compatibility, or cache strategy, use your build tool. The online tool is a scalpel — precise, fast, single-purpose. The build tool is a factory — powerful, comprehensive, but requires setup.</p>

<h2>What CSS minification actually removes</h2>

<p>Minification is not compression (gzip handles that). Minification removes characters the browser does not need:</p>

<ul>
<li><strong>Whitespace:</strong> spaces, tabs, newlines — typically 20-30% of file size. The biggest single saving.</li>
<li><strong>Comments:</strong> <code>/* This is a comment */</code> — developers need these, browsers do not. Can be 5-15% of file size in well-documented CSS.</li>
<li><strong>Redundant semicolons:</strong> the last semicolon before a closing brace is optional. <code>color: red;}</code> becomes <code>color:red}</code>.</li>
<li><strong>Leading zeros:</strong> <code>0.5em</code> becomes <code>.5em</code>. Tiny saving per instance, but adds up across thousands of declarations.</li>
<li><strong>Color value shortening:</strong> <code>#FF0000</code> becomes <code>red</code> (when shorter). <code>#FFCC00</code> becomes <code>#FC0</code>. <code>rgb(255,0,0)</code> becomes <code>red</code>.</li>
</ul>

<p>A well-minified CSS file is typically 30-50% smaller than its unminified source. Combined with gzip compression (another 60-80% reduction), the final transfer size is often 15-25% of the original. That is the difference between a 200KB CSS file blocking render and a 30KB CSS file loading instantly.</p>

<p>For formatting CSS before minification (to standardize indentation), our <a href="/en/tools/code-formatter">code formatter</a> handles CSS, JS, JSON, and HTML. For minifying SVG instead of CSS, our <a href="/en/tools/svg-minifier">SVG minifier</a> optimizes vector graphics. And for a comparison of minifier types, read our <a href="/en/blog/css-minifier-vs-js-minifier-vs-html-minifier">CSS vs JS vs HTML minifier comparison</a>.</p>
`,
  },
  {
    slug: "unit-converter-why-its-harder-than-it-looks",
    title: "Unit Converter — Why Converting Units Is Harder Than Multiplying by a Number, From Pints to the Mars Climate Orbiter",
    description: "12 inches in a foot, 3 feet in a yard, 1,760 yards in a mile — who designed this? Unit conversion seems simple until you discover that not all gallons are the same gallon.",
    date: "2026-06-28",
    category: "Calculator",
    tags: ["unit converter", "metric imperial", "measurement conversion", "unit conversion"],
    relatedTools: ["unit-converter", "base-converter", "percentage-calculator"],
    content: `
<p>You look up a recipe from a British website. It calls for "200g of flour, 150ml of milk, and bake at 180°C." Your measuring cups are in cups and ounces. Your oven is in Fahrenheit. You open three different converter tabs — one for weight, one for volume, one for temperature — and hope you do not mix up fluid ounces (volume) with ounces (weight) while converting. Unit conversion is simple in theory and surprisingly treacherous in practice.</p>

<p>Our <a href="/en/tools/unit-converter">free unit converter</a> handles length, weight, temperature, volume, area, and speed in one place. Here is why unit conversion is harder than "just multiply by the conversion factor" — and the real-world disasters caused by getting it wrong.</p>

<h2>When "just multiply" fails: units that are not simple ratios</h2>

<p><strong>Temperature:</strong> Celsius to Fahrenheit is not a simple multiplication. The formula is °F = (°C × 9/5) + 32. The +32 offset means 0°C is 32°F, not 0°F. Doubling 10°C (50°F) gives 20°C (68°F) — not 100°F. Temperature conversions are affine, not linear, which breaks the "just multiply" mental model.</p>

<p><strong>Volume — the US vs Imperial gallon trap:</strong> a US gallon is 3.785 liters. An Imperial (UK) gallon is 4.546 liters. They differ by 20%. If you convert "miles per gallon" from a UK car review to US units without adjusting for the gallon difference, your fuel economy calculation is off by 20%. This is not a theoretical edge case — it affects every car review, every recipe, and every fuel calculation that crosses the Atlantic.</p>

<p><strong>Fluid ounces vs weight ounces:</strong> "8 oz of milk" — is that 8 fluid ounces (volume, ~237ml) or 8 ounces by weight (~227g)? For water and milk, they are close enough that the difference rarely matters. For honey (denser than water), oil (less dense), or flour (much less dense), the difference is significant. US recipes use fluid ounces for liquids and weight ounces for dry ingredients — but they abbreviate both as "oz." Context is everything.</p>

<h2>The Mars Climate Orbiter: a $327 million unit conversion error</h2>

<p>In 1999, NASA's Mars Climate Orbiter disintegrated in the Martian atmosphere. The root cause: one team used metric units (Newton-seconds) for thruster force, another team used Imperial units (pound-seconds). The spacecraft entered the atmosphere at the wrong altitude — 57 km instead of 140-150 km — and burned up. Cost: $327 million. Cause: one missing unit conversion.</p>

<p>This is not ancient history. In 1983, an Air Canada flight ran out of fuel mid-flight because the ground crew calculated fuel in pounds instead of kilograms — the plane had half the fuel the crew thought it did. The pilots glided to an emergency landing at a decommissioned airfield. The "Gimli Glider" incident is taught in aviation safety courses as a unit conversion failure.</p>

<p>These disasters share the same root cause: unit conversion was treated as trivial, so nobody double-checked it. The lesson: when the stakes are high, use a converter. Do not do it in your head. Do not do it on a napkin. Use a tool that does not get tired, distracted, or confused about which type of gallon you meant.</p>

<h2>Unit conversion in everyday life</h2>

<p><strong>Travel:</strong> speed limits in km/h when you think in mph. Temperatures in Celsius when you dress for Fahrenheit. Fuel in liters when your brain budgets in gallons. A converter on your phone prevents speeding tickets and under-dressing for the weather.</p>

<p><strong>Cooking:</strong> a French recipe in grams, your kitchen scale in ounces. A British recipe with "gas mark 4" (that is 180°C / 350°F). Converting each ingredient individually is tedious; a multi-unit converter handles all of them.</p>

<p><strong>Fitness:</strong> treadmill in kilometers, your running app in miles. Weights in kilograms at the gym, pounds in your tracking app. Consistent units mean consistent tracking — and consistent tracking is what produces results.</p>

<p>For percentage-based conversions (discounts, tips, tax), our <a href="/en/tools/percentage-calculator">percentage calculator</a> handles those calculations. For number base conversions (binary, hex), see our <a href="/en/tools/base-converter">base converter</a>. And for a quick reference guide, read our <a href="/en/blog/unit-converter-quick-guide">unit converter quick guide</a>.</p>
`,
  },

];

export function getBlogPosts(): BlogPost[]"""

if old in content:
    content = content.replace(old, new_blogs)
    with open(BLOG_FILE, "w", encoding="utf-8") as f:
        f.write(content)
    print("OK: 6 blogs inserted into free station blog.ts (112→118)")
else:
    print("ERROR: insertion marker not found")
    idx = content.rfind("];")
    print(f"Last '];' at index: {idx}")
