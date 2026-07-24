"""Add 6 blogs to free station (260→266) — July 24, 2026"""
import os, sys

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "svg-minifier-icon-libraries-feather-heroicons-optimization",
    title: "SVG Minifier for Icon Libraries How to Optimize Feather Heroicons and Custom Icon Sets for Production",
    description: "Your icon library is 200 SVG files totaling 480KB. 60% of that is editor metadata and whitespace. An SVG minifier reduces it to 180KB. Here's the icon library optimization workflow.",
    date: "2026-07-24",
    category: "Developer",
    tags: ["SVG minifier", "icon library", "Feather", "Heroicons", "optimization"],
    relatedTools: ["svg-minifier", "css-minifier", "code-formatter"],
    content: `<p>You use 200 SVG icons in your web application — a mix of Feather Icons, Heroicons, and custom-designed icons. The total file size is 480KB. That is 480KB of SVG being parsed, rendered, and shipped to every user on every page load. The icons are small. The cumulative size is not. You open a few SVG files and see: editor metadata (Illustrator and Figma export comments — kilobytes of data browsers ignore), excessive precision (path coordinates like <code>M12.847392,45.123847</code> — eight decimal places no screen can render), and whitespace and indentation (beautiful for humans, useless for browsers).</p>

<p>An <a href="/en/tools/svg-minifier">SVG minifier</a> strips the bloat. 480KB becomes 180KB — a 62% reduction. Here is the icon library optimization workflow.</p>

<h2>What SVG Minification Actually Removes</h2>

<p>SVG minification removes: comments (both HTML-style and SVG-specific), XML declarations and DOCTYPE (optional for inline SVG), editor metadata (Illustrator, Figma, Inkscape each embed their own namespaces), unnecessary namespace declarations, whitespace and indentation, and excessive numeric precision (rounding path coordinates from 8 decimal places to 1-2 — visually identical, significantly smaller).</p>

<p>The minifier does NOT change: the visual appearance of the SVG, the paths, shapes, and elements, the viewBox and dimensions, or any functional attributes. The minified SVG looks identical to the original. It is just smaller. The optimization is invisible. The performance improvement is measurable.</p>

<h2>The Icon Library Optimization Workflow</h2>

<p><strong>Step 1: Minify all SVG files.</strong> Process every SVG in your icon library through the <a href="/en/tools/svg-minifier">SVG minifier</a>. The minifier handles each file individually. Keep the original files in a separate directory — the minified versions are for production, the originals are for editing.</p>

<p><strong>Step 2: Verify visual quality.</strong> Spot-check 10-20% of the minified icons. Open them in a browser. Do they look identical to the originals? The minifier should change nothing visually. If an icon looks different, the path rounding was too aggressive (unlikely at 1-2 decimal places, but possible for very small icons). Increase the precision for that specific icon.</p>

<p><strong>Step 3: Integrate into the build pipeline.</strong> Add SVG minification to your production build step. Clean SVG files in, minified SVG out. The build pipeline handles the minification automatically. You edit the clean originals. The pipeline produces the minified versions. The workflow is: edit → commit → build (auto-minifies) → deploy (minified SVGs).</p>

<p><strong>Step 4: Bundle into a sprite sheet (optional).</strong> For maximum performance, combine all minified SVGs into a single SVG sprite sheet. One HTTP request for all icons. The sprite sheet is the final optimization step. The minified SVGs are the input. The sprite sheet is the output. The combination of minification + spriting reduces 200 HTTP requests (one per icon) to 1 HTTP request (the sprite sheet).</p>

<p>Optimize your icons at <a href="/en/tools/svg-minifier">SVG minifier</a> — 480KB to 180KB, 200 files to 200 optimized files. The icons look the same. The page loads faster.</p>`
  },
  {
    slug: "code-formatter-legacy-projects-style-guide-migration",
    title: "Code Formatter for Legacy Projects How to Enforce a Consistent Style Guide Without Rewriting Your Entire Codebase",
    description: "Your legacy codebase has 3 different indentation styles in 500 files. A code formatter enforces consistency incrementally — format one file at a time, or format everything at once. Here's the slow migration strategy.",
    date: "2026-07-24",
    category: "Developer",
    tags: ["code formatter", "legacy code", "style guide", "migration", "consistency"],
    relatedTools: ["code-formatter", "json-formatter", "css-minifier"],
    content: `<p>You inherit a codebase. It is 500 files of JavaScript, CSS, and JSON — written by 8 different developers over 5 years. Some files use 2-space indentation. Some use 4-space. Some use tabs. Three files mix tabs and spaces within the same function. The style guide was "whatever your IDE defaults to." There was no enforcement. The codebase is functional. It is also <strong>unreadable</strong>. New developers spend their first week learning not the code, but which files use which formatting style.</p>

<p>You propose: "Let's format the entire codebase with a <a href="/en/tools/code-formatter">code formatter</a>." The team objects: "That will create 500 files of formatting-only changes. We will lose git blame. We will never be able to merge our existing branches." The objection is valid. The solution is not to format everything at once. It is to format <strong>incrementally</strong>. Here is the slow migration strategy.</p>

<h2>Why "Format Everything at Once" Fails</h2>

<p>Formatting the entire codebase in one commit has real costs: git blame becomes useless (every line in every file now has the same commit — the format commit), active branches become unmergeable (every open pull request now conflicts with the format commit), and the diff is unreadable (500 files changed with formatting-only changes — no human can review it). The format-everything approach is fast. It is also destructive. The damage to the git history and the team's workflow outweighs the benefit of consistent formatting.</p>

<h2>The Incremental Migration Strategy</h2>

<p><strong>Rule 1: Format only the files you touch.</strong> When a developer opens a file to fix a bug or add a feature, they format that file first — in a separate commit: "Format: utils.js." Then they make their changes in a second commit. The format commit and the change commit are separate. The git blame for the format commit points to "formatting." The git blame for the change commit points to the actual code change. The history is preserved.</p>

<p><strong>Rule 2: Use the online formatter for one-off files.</strong> When a developer needs to format a single file, they paste it into the <a href="/en/tools/code-formatter">code formatter</a>, copy the output, and commit. No build tool configuration. No npm install. No dependency conflicts. The online formatter handles the file. The developer handles the commit. The workflow is: open file → paste into formatter → copy output → commit → make changes → commit.</p>

<p><strong>Rule 3: Track progress.</strong> Count how many files have been formatted vs total files. 100/500 = 20% formatted. The metric shows progress. The metric motivates. Without the metric, formatting is an invisible goal that never feels closer. With the metric, every formatted file moves the number.</p>

<h2>When to Format Everything at Once (the Exception)</h2>

<p>Format everything at once when: the codebase is small (under 50 files), there are no active branches, and the team agrees. In all other cases, the incremental strategy preserves git history, avoids merge conflicts, and actually gets adopted. Use the <a href="/en/tools/code-formatter">code formatter</a> for one file at a time. Format the files you touch. Watch the percentage climb. One file at a time, the codebase becomes consistent.</p>`
  },
  {
    slug: "base64-to-image-email-forensics-recovering-embedded-images",
    title: "Base64 to Image for Email Forensics How to Recover Embedded Images from Email Source Code and HTML Archives",
    description: "You have an old email archive. The images are embedded as Base64 data URIs in the HTML source. You need to extract them as viewable image files. Here's the email forensics recovery workflow.",
    date: "2026-07-24",
    category: "Developer",
    tags: ["Base64 to image", "email forensics", "recovery", "archive", "data URI"],
    relatedTools: ["base64-to-image", "image-to-base64", "base64-converter"],
    content: `<p>You are migrating your company's email archives from an old system to a new one. The old system stored emails as raw HTML files. Inline images — logos, signatures, product photos — were embedded as Base64 data URIs in the HTML source. The new system expects image attachments. You have 50,000 emails. Each email has 2-10 embedded images. You need to extract roughly 250,000 Base64-encoded images from HTML source and convert them to image files. Manual extraction is impossible. You need a <a href="/en/tools/base64-to-image">Base64 to image</a> decoder.</p>

<p>Here is the email forensics and archive recovery workflow — how to extract embedded images from HTML source and convert them to viewable, usable image files.</p>

<h2>How to Find Base64 Images in Email Source</h2>

<p>Open the email's raw HTML source (View Source in most email clients, or the .eml/.html file in a text editor). Search for: <code>data:image/</code> — the standard prefix for Base64-encoded images in HTML. A data URI looks like: <code>&lt;img src="data:image/png;base64,iVBORw0KGgoAAAANS..."&gt;</code>. The <code>data:image/png;base64,</code> prefix identifies: it is a data URI (inline content, not an external URL), the MIME type is image/png, the encoding is Base64, and the actual image data follows the comma. Copy everything after the comma — the Base64 string. That is the encoded image.</p>

<h2>The Bulk Recovery Workflow</h2>

<p><strong>Step 1: Extract all data URIs from the HTML archive.</strong> Search all email files for <code>data:image/</code>. Extract each Base64 string — everything between the comma and the closing quote of the src attribute. Each extracted string is one embedded image.</p>

<p><strong>Step 2: Decode each Base64 string to an image.</strong> Paste each extracted string into the <a href="/en/tools/base64-to-image">Base64 to image decoder</a>. The tool decodes the Base64 and renders the image. Download the decoded image as a PNG or JPEG file. The image is now a standalone file — no longer embedded in HTML.</p>

<p><strong>Step 3: Verify the decoded images.</strong> Spot-check the recovered images. Do they look correct? Are they complete (not truncated)? Is the image format correct (PNG vs JPEG)? The decoder detects the image format automatically from the Base64 header bytes. The output format should match the original format specified in the data URI prefix.</p>

<p><strong>Step 4: Import into the new email system.</strong> Attach the recovered images to the corresponding emails in the new system. The emails are now migrated with their images intact. The Base64 data URIs that were embedded in the HTML are now standalone image attachments. The migration is complete.</p>

<h2>When Base64 Recovery Is Not Possible</h2>

<p>Base64 recovery fails when: the data URI is truncated (the Base64 string is incomplete — the image is partially or fully corrupted), the MIME type is missing or incorrect (the decoder guesses the format, but may guess wrong), and the Base64 string contains line breaks or other corruption (the decoder strips whitespace, but other corruption may prevent decoding). For corrupted Base64 strings, the original image is lost. The decoder can only recover what is present in the source. If the source is corrupted, the recovery is partial at best.</p>

<p>Recover your embedded images at <a href="/en/tools/base64-to-image">Base64 to image decoder</a> — from embedded data URI to standalone image file. 250,000 images. One decoder.</p>`
  },
  {
    slug: "svg-minifier-vs-code-formatter-graphics-vs-code",
    title: "SVG Minifier vs Code Formatter Graphics Optimization vs Code Formatting — Two Tools That Both 'Format' but Serve Completely Different Files",
    description: "SVG minifier optimizes vector graphics. Code formatter formats programming source code. Both process text. Both improve readability. But the files they process and the optimizations they apply are unrelated.",
    date: "2026-07-24",
    category: "Developer",
    tags: ["SVG minifier", "code formatter", "graphics", "code", "comparison"],
    relatedTools: ["svg-minifier", "code-formatter", "css-minifier"],
    content: `<p>You have an SVG file exported from Illustrator: 45KB of XML with editor metadata, 8-decimal path coordinates, and excessive whitespace. You run it through an <a href="/en/tools/svg-minifier">SVG minifier</a>. Output: 12KB. The minifier rounded coordinates, stripped metadata, and collapsed whitespace. The file is smaller and functionally identical.</p>

<p>Now you have a JavaScript file: 15KB of code with inconsistent indentation and mixed style conventions. You run it through a <a href="/en/tools/code-formatter">code formatter</a>. Output: 15KB. The formatter fixed the indentation and style. The file size did not change significantly. The file is more readable and functionally identical.</p>

<p>Both tools process text. Both produce "formatted" or "optimized" output. But they serve completely different purposes. Here is the difference — and why using an SVG minifier on code or a code formatter on SVG produces garbage.</p>

<h2>SVG Minifier: Graphics Optimization</h2>

<p>An SVG minifier reduces file size by removing non-functional content from SVG files. It performs: numeric precision reduction (rounding path coordinates), metadata stripping (removing editor-specific tags), and whitespace collapsing. The goal is <strong>smaller file size</strong> for faster page loads. The minifier is a performance tool. It optimizes for bandwidth and parsing speed.</p>

<h2>Code Formatter: Code Readability</h2>

<p>A code formatter improves readability by enforcing consistent formatting rules. It adds: indentation, line breaks, and spacing. It does not reduce file size. It may increase it (adding line breaks where the original had none). The goal is <strong>human readability</strong> — for code review, debugging, and collaboration. The formatter is a communication tool. It optimizes for human understanding.</p>

<h2>Why Confusing Them Produces Garbage</h2>

<p>If you run SVG code through a code formatter: the formatter will add indentation and line breaks — increasing the file size, not reducing it. It will not round path coordinates or strip metadata. The SVG will be more readable but no smaller. If you run JavaScript code through an SVG minifier: the minifier will strip whitespace and comments — making the code unreadable. It may also try to "round" numeric values in the code, potentially changing logic.</p>

<p>The rule: SVG goes in the SVG minifier. Code goes in the code formatter. Use <a href="/en/tools/svg-minifier">SVG minifier</a> for graphics and <a href="/en/tools/code-formatter">code formatter</a> for code. Different files. Different purposes. Different tools.</p>`
  },
  {
    slug: "quotes-directory-vs-random-quote-search-vs-serendipity",
    title: "Quotes Directory vs Random Quote Search vs Serendipity — When You Need the Perfect Quote and When You Need Any Quote",
    description: "A quotes directory helps you find the perfect quote by author or topic. A random quote generator gives you an unexpected piece of wisdom. Different needs. Different tools.",
    date: "2026-07-24",
    category: "Reference",
    tags: ["quotes", "random quote", "search", "serendipity", "inspiration"],
    relatedTools: ["quotes", "random-quote", "book-of-answers"],
    content: `<p>You are writing a speech about perseverance. You need a quote from Winston Churchill. You open a <a href="/en/tools/quotes">quotes directory</a>, search for "Churchill" + "perseverance," and find: "Success is not final, failure is not fatal: it is the courage to continue that counts." Perfect. The directory answered a <strong>specific</strong> question: "What did Winston Churchill say about perseverance?" The answer was factual and exactly what you needed.</p>

<p>Now you are starting your morning. You open a <a href="/en/tools/random-quote">random quote generator</a>. It gives you: "The only way to do great work is to love what you do." — Steve Jobs. You were not looking for anything. The quote found you. The generator answered an <strong>unspoken</strong> question: "What do I need to hear right now?" The answer was unexpected and exactly what you needed.</p>

<p>Both tools deliver quotes. But they serve completely different needs. Here is when to use each.</p>

<h2>Quotes Directory: Precision Discovery</h2>

<p>A quotes directory is a searchable database. You search by: author, keyword, or topic. You find specific quotes for specific purposes. The directory is a <strong>research tool</strong>. Use when: writing a speech, article, or presentation, you need a specific type of quote, or you need to find and verify the exact wording of a quote.</p>

<h2>Random Quote: Serendipitous Discovery</h2>

<p>A random quote generator gives you one unexpected quote. No search. No filter. The value is in the <strong>surprise</strong>. Use when: you need daily inspiration, you are creatively blocked, or you want a moment of reflection. The random quote is the <strong>wise stranger</strong>. It gives you what you need, not what you want.</p>

<p>Use <a href="/en/tools/quotes">quotes directory</a> to search and <a href="/en/tools/random-quote">random quote</a> for serendipity. Precision and surprise. Different needs. Different tools.</p>`
  },
  {
    slug: "unit-converter-history-metric-vs-imperial-divide",
    title: "The History of Measurement The Metric vs Imperial Divide How Two Measurement Systems Came to Dominate the World — and Why the US Still Uses Inches",
    description: "Every country on Earth uses the metric system — except the US, Liberia, and Myanmar. The divide is not about math. It is about history, politics, and the cost of switching. Here's the 200-year story.",
    date: "2026-07-24",
    category: "Reference",
    tags: ["unit converter", "metric system", "imperial system", "history", "measurement"],
    relatedTools: ["unit-converter", "base-converter", "roman-numerals"],
    content: `<p>Every country on Earth uses the metric system — except three: the United States, Liberia, and Myanmar. The metric system is simpler (base-10, consistent prefixes), more universal (used by 95% of the world's population), and legally sanctioned (the US has officially permitted metric since 1866, and metric is the legal standard for US trade). And yet, Americans measure height in feet, weight in pounds, and temperature in Fahrenheit. The divide is not about math. It is about history, politics, and the staggering cost of switching.</p>

<p>A <a href="/en/tools/unit-converter">unit converter</a> bridges the divide. You enter inches. It outputs centimeters. The converter is the daily tool that millions of people use to navigate a world split between two measurement systems. Here is the 200-year story of how the divide was created — and why it persists.</p>

<h2>The French Revolution: The Birth of Metric</h2>

<p>Before the metric system, France alone had approximately 250,000 different units of measurement — varying by region, by town, and by trade. A "pound" of bread in Paris was a different weight than a "pound" in Marseille. The confusion was not an accident. It was a tool of control — local lords and merchants used the confusion to cheat customers. The French Revolution (1789) sought to sweep away not just the monarchy, but the entire apparatus of feudal privilege — including the chaotic system of measurement. The metric system was born from revolutionary ideals: a system based on nature (the meter was defined as 1/10,000,000 of the distance from the North Pole to the equator), not on the length of a king's foot. A system that was rational. A system that was <strong>universal</strong>. A system that could not be manipulated by local authorities.</p>

<h2>Why the US Did Not Switch</h2>

<p>The US considered switching to metric multiple times. Thomas Jefferson, as Secretary of State, proposed a decimal-based measurement system in 1790. Congress debated metric adoption in the 1820s, 1860s, and 1970s. The 1975 Metric Conversion Act declared metric the "preferred system" for US trade — but made conversion voluntary. Voluntary conversion failed. The reason: the cost of switching. Replacing every mile marker, every scale, every measuring cup, every textbook, every manufacturing specification, and every person's intuitive understanding of measurement would cost billions and take decades. The cost was always higher than the political will. The metric system is better. The imperial system is <strong>entrenched</strong>. Better does not always win. Entrenched usually wins.</p>

<h2>Where the Divide Actually Matters</h2>

<p>The metric-imperial divide has real consequences: NASA's Mars Climate Orbiter (1999) — a $327 million spacecraft was lost because one team used metric units and another used imperial. The spacecraft entered the Martian atmosphere at the wrong altitude and burned up. Medicine dosing errors — an incorrect conversion between pounds and kilograms can result in a 2.2× dosing error. Manufacturing and trade — American companies exporting to metric countries must convert all specifications. The <a href="/en/tools/unit-converter">unit converter</a> is the tool that prevents these errors. Enter the value. Select the units. The converter does the math. The conversion is correct. The spacecraft survives.</p>

<p>Convert at <a href="/en/tools/unit-converter">unit converter</a> — navigating the metric-imperial divide, one conversion at a time.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("Free station: 260->done.")