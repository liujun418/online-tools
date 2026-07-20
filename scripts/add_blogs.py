"""Add 6 blogs to free station (236→242) — July 20, 2026"""
import os, sys

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "mortgage-calculator-first-time-home-buyer-guide",
    title: "Mortgage Calculator for First-Time Home Buyers How to Estimate Your True Monthly Payment Including PMI Taxes and Insurance",
    description: "The mortgage calculator says $1,800/month. Your actual payment will be $2,400. Here's what the calculator leaves out — and how to estimate the real number before you make an offer.",
    date: "2026-07-20",
    category: "Calculators",
    tags: ["mortgage calculator", "first-time home buyer", "PMI", "closing costs", "monthly payment"],
    relatedTools: ["mortgage-calculator", "loan-calculator", "emi-calculator"],
    content: `<p>You open a <a href="/en/tools/mortgage-calculator">mortgage calculator</a>. You enter: $300,000 home price, 20% down ($60,000), 6.5% interest rate, 30-year fixed. The calculator says: $1,517 per month. You budget $1,800 to be safe. You buy the house. Your first mortgage statement arrives: $2,410. You are $610 over budget — $7,320 per year — because the mortgage calculator showed you the <strong>principal and interest payment</strong>, not the <strong>total monthly housing payment</strong>.</p>

<p>The mortgage calculator is correct. It is also incomplete. Here is what it leaves out, why the gap between the calculator's number and the real number surprises almost every first-time buyer, and how to estimate the true cost before you make an offer.</p>

<h2>What the Mortgage Calculator Shows (and What It Does Not)</h2>

<p>A mortgage calculator computes the monthly payment for principal and interest — the cost of borrowing the money. It does not include: <strong>property taxes</strong> (1-3% of the home's value annually, divided by 12 months — on a $300,000 home at 1.5%, that is $375/month), <strong>homeowners insurance</strong> ($500-2,000 annually, depending on location and coverage — roughly $80/month for a typical home), and <strong>PMI</strong> (Private Mortgage Insurance, required if your down payment is less than 20% — typically 0.5-1% of the loan amount annually, or $100-200/month).</p>

<p>These three items add $555/month to the example above. The $1,517 principal and interest payment becomes $2,072. And that does not include: HOA fees ($100-500/month in condos and planned communities), maintenance and repairs (budget 1-2% of the home's value annually, or $250-500/month), and utility cost differences (your apartment's $80 electric bill might become $200 in a house).</p>

<h2>How to Use the Mortgage Calculator Correctly</h2>

<p><strong>Step 1: Calculate principal and interest.</strong> Use the <a href="/en/tools/mortgage-calculator">mortgage calculator</a> with the home price, down payment, interest rate, and loan term. This gives you the base payment. This is the only number the calculator provides. The rest is up to you.</p>

<p><strong>Step 2: Add property taxes.</strong> Look up the property tax rate for the county you are buying in. It is public information — usually on the county assessor's website. Multiply the home price by the tax rate. Divide by 12. Add this to the monthly payment.</p>

<p><strong>Step 3: Add homeowners insurance.</strong> Get a quote from an insurance company before you make an offer. A 5-minute phone call gives you a real number. Budget $80-150/month for a typical single-family home. Add this.</p>

<p><strong>Step 4: Add PMI if your down payment is under 20%.</strong> PMI costs roughly 0.5-1% of the loan amount annually. On a $270,000 loan (10% down on $300,000), PMI is roughly $135-225/month. Add this. PMI can be removed once you reach 20% equity — but you have to request it. The lender will not remove it automatically.</p>

<p><strong>Step 5: The total is your real monthly payment.</strong> This is the number you should budget for. The mortgage calculator gave you the starting point. You added the real costs. The gap between the calculator's number and the real number is the most common financial surprise for first-time home buyers. Now you know. The <a href="/en/tools/mortgage-calculator">mortgage calculator</a> is the starting point. The additional costs are the reality.</p>`
  },
  {
    slug: "css-minifier-build-tool-integration-webpack-vite-next",
    title: "CSS Minifier Build Tool Integration How to Add CSS Minification to Your Webpack Vite or Next.js Pipeline — and When an Online Minifier Is the Better Choice",
    description: "Your build tool can minify CSS automatically. But for one-off files, debugging, or legacy projects without a build step, an online CSS minifier is faster. Here's when to use each.",
    date: "2026-07-20",
    category: "Developer",
    tags: ["CSS minifier", "build tool", "webpack", "Vite", "pipeline"],
    relatedTools: ["css-minifier", "svg-minifier", "code-formatter"],
    content: `<p>You have a CSS file that is 85KB — mostly comments, whitespace, and verbose property values. You need the minified version for production. You have two options: configure your build tool (Webpack, Vite, Next.js) to minify automatically, or paste the file into a <a href="/en/tools/css-minifier">CSS minifier</a> and get the minified version instantly. Both produce the same minified CSS. The decision is about <strong>workflow</strong>, not technology.</p>

<p>Here is when to configure automatic minification in your build pipeline — and when the online minifier is the better choice.</p>

<h2>Build Tool Minification: The Automatic Solution</h2>

<p>Modern build tools include CSS minification out of the box or with minimal configuration. Next.js uses PostCSS with cssnano by default in production builds. Vite uses esbuild for CSS minification. Webpack uses css-minimizer-webpack-plugin (which wraps cssnano). In all cases, the minification happens automatically when you build for production. You write unminified CSS. The build tool minifies it. You deploy the minified version. The workflow is seamless — once configured.</p>

<p>The advantage: set it and forget it. Every production build automatically minifies all CSS files. No manual steps. No forgotten files. The entire CSS output is consistently minified. The disadvantage: configuration overhead. Setting up a build tool requires installing dependencies, writing config files, and debugging the occasional incompatibility. For a new project, this is standard practice. For a legacy project without a build step, or a one-off CSS file, the overhead is not worth it.</p>

<p>Use build tool minification for: projects that already have a build step (Next.js, Vite, Webpack), projects with multiple CSS files that need consistent minification, and any project where you are setting up the build tool anyway.</p>

<h2>Online CSS Minifier: The Manual Solution</h2>

<p>An online <a href="/en/tools/css-minifier">CSS minifier</a> is the zero-configuration alternative. Paste your CSS. Click minify. Copy the output. The minifier removes comments, whitespace, unnecessary semicolons, and trailing zeros. It shortens hex colors where possible (#ffffff → #fff). It converts 0px to 0. The output is functionally identical to what a build tool produces. The workflow is manual — but it takes 10 seconds per file.</p>

<p>The advantage: zero setup. No config files. No dependencies. No build step. Works on any CSS file, from any project, on any computer. The disadvantage: manual process. You must remember to minify before deploying. If you forget, the unminified CSS goes to production. For a single file, this is fine. For a project with dozens of CSS files, build tool automation is better.</p>

<p>Use the online minifier for: one-off CSS files (a single stylesheet for a static site), legacy projects without a build step (minify manually before each deploy), debugging (minify a file to check if a bug is caused by the minification process), and learning (see exactly what the minifier does to your CSS — the online tool shows before-and-after stats so you can learn what changes).</p>

<h2>The Hybrid Strategy</h2>

<p>Use build tool minification for your project's own CSS — the styles you write and maintain. Use the online minifier for third-party CSS — vendor stylesheets, framework files, or any CSS you did not write but need to minify. The build tool handles your code. The online tool handles everything else. The hybrid strategy gives you automation where it matters and flexibility where you need it.</p>

<p>Minify your CSS at <a href="/en/tools/css-minifier">CSS minifier</a> — for when the build tool is not an option, or when you just need one file minified in 10 seconds.</p>`
  },
  {
    slug: "base64-encoder-decoder-data-uri-binary-string-guide",
    title: "Base64 Encoder Decoder Complete Guide How to Convert Between Text Binary Data URIs and Files — and Why Base64 Adds 33% to Your File Size",
    description: "Base64 turns binary data into text — making images embeddable in HTML, files transmittable in JSON, and data copyable as plain text. Here's how encoding works, when to use it, and why it costs you 33% extra size.",
    date: "2026-07-20",
    category: "Developer",
    tags: ["Base64", "encode", "decode", "data URI", "binary"],
    relatedTools: ["base64-converter", "image-to-base64", "base64-to-image"],
    content: `<p>You need to embed a small icon in an HTML email. You could: host the image on a CDN (requires an external HTTP request — and email clients block external images by default), or encode the image as a Base64 data URI and embed it directly in the HTML (no external request, image displays immediately). You choose Base64. You paste the icon into a <a href="/en/tools/base64-converter">Base64 encoder</a>. The tool outputs a string starting with <code>iVBORw0KGgo...</code> — thousands of characters that represent your 3KB icon. You embed it in your HTML. The email loads. The icon displays. No external requests. No blocked images.</p>

<p>Base64 is the universal translator between binary data and text. It powers data URIs, email attachments, API payloads, and JSON data transport. Here is how it works, when to use it, and why it makes your data 33% larger.</p>

<h2>How Base64 Works: The 4-to-3 Ratio</h2>

<p>Base64 encoding takes binary data — a sequence of bytes — and converts it to a sequence of 64 printable ASCII characters: A-Z, a-z, 0-9, +, and /. The conversion: every 3 bytes (24 bits) of binary data become 4 Base64 characters (4 × 6 bits = 24 bits). The output is always 33% larger than the input — because every 3 input bytes produce 4 output characters. A 100KB image becomes approximately 133KB of Base64 text.</p>

<p>The 33% overhead is the cost of making binary data text-safe. Base64 characters are all printable ASCII — they survive transmission through email, JSON, XML, and any text-based protocol. Binary data (bytes 0-255) does not survive these transmissions — control characters, non-ASCII bytes, and null bytes are corrupted or stripped. Base64 solves this by encoding binary data into a subset of ASCII that every system can handle. The overhead is the price of compatibility.</p>

<h2>When to Use Base64 (and When Not To)</h2>

<p><strong>Use Base64 for:</strong> embedding small images in HTML/CSS (data URIs for icons, logos, and email images — eliminates HTTP requests), transmitting binary data in JSON APIs (the JSON format does not support binary — Base64 encodes the binary as a string), email attachments (MIME encoding uses Base64 for file attachments), and storing binary data in text-only databases (if you cannot use a BLOB column, Base64 encode the binary data as text).</p>

<p><strong>Do not use Base64 for:</strong> large files (the 33% overhead is significant — a 50MB file becomes 66MB of Base64), files that will be transmitted as binary anyway (HTTP file downloads, FTP transfers — these protocols handle binary natively), and performance-critical applications (encoding and decoding Base64 takes CPU time — for large volumes, the overhead adds up).</p>

<p><strong>Base64 vs Base64url:</strong> Standard Base64 uses + and / as the last two characters, and = for padding. These characters have special meanings in URLs (+ means space, / is a path separator). Base64url replaces + with - and / with _, and omits the = padding. Use Base64url for URLs, JWT tokens, and query parameters. The <a href="/en/tools/base64-converter">Base64 encoder/decoder</a> supports both formats. Encode for data. Decode for viewing. Choose the right format for the destination.</p>`
  },
  {
    slug: "image-to-base64-vs-base64-to-image-encoding-vs-decoding",
    title: "Image to Base64 vs Base64 to Image Encoding vs Decoding — Two Tools That Are Opposites but Belong in the Same Workflow",
    description: "One converts images to text for embedding. The other converts text back to images for viewing. They are mathematical inverses — and confusing them turns your image into gibberish text or your text into a broken image.",
    date: "2026-07-20",
    category: "Developer",
    tags: ["image to Base64", "Base64 to image", "encoding", "decoding", "data URI"],
    relatedTools: ["image-to-base64", "base64-to-image", "base64-converter"],
    content: `<p>You receive an API response. The thumbnail field contains: <code>iVBORw0KGgoAAAANSUhEUgAA...</code> — a 50,000-character Base64 string. This is an image, encoded as text. You need to see the actual image — to verify the API is returning the right data, to debug a rendering issue, or to extract the image for use elsewhere. You use a <a href="/en/tools/base64-to-image">Base64 to image</a> decoder. The tool converts the text back to an image. You see the thumbnail. It is the correct image. The API is working.</p>

<p>Now you need to do the reverse. You have a small logo file. You need to embed it in an HTML email as a data URI. You use an <a href="/en/tools/image-to-base64">image to Base64</a> encoder. The tool converts the image to a Base64 string. You embed the string in the HTML. The email loads. The logo displays. No external image requests.</p>

<p>These two tools are <strong>mathematical inverses</strong>. One converts image → text. The other converts text → image. They are the encoding and decoding halves of the same process. Here is when to use each — and why you usually need both.</p>

<h2>Image to Base64: Encoding for Transport</h2>

<p>The encoder answers: <strong>"How do I send this image through a text-only channel?"</strong> You have an image file (PNG, JPEG, WebP). You need to embed it in HTML, transmit it in JSON, or store it in a text column. The encoder converts the binary image data to a Base64 text string. The string is 33% larger than the original image, but it can travel through any text-based system.</p>

<p>Use the encoder for: embedding images in HTML emails (logos, icons, signature images — no blocked external images), sending images in JSON API payloads (the image travels as a string in the JSON body), and storing small images in text databases (Base64-encode the image and store it in a VARCHAR column).</p>

<h2>Base64 to Image: Decoding for Viewing</h2>

<p>The decoder answers: <strong>"What does this Base64 string look like as an image?"</strong> You have a Base64 string — from an API response, a database query, or an email source. You need to see the actual image. The decoder converts the Base64 text back to an image file. You can view it, save it, or use it in your application.</p>

<p>Use the decoder for: debugging API responses (verify the image data is correct by viewing it), extracting images from emails (save the embedded logo or attachment as an image file), and recovering images from databases (decode Base64-stored images back to viewable files).</p>

<h2>The Complete Round Trip</h2>

<p>The workflow that uses both tools: encode an image to Base64 → transmit the Base64 string (API, email, database) → decode the Base64 back to an image → view or use the image. The encoder prepares the image for transport. The decoder recovers the image after transport. The two tools are halves of the same process. You cannot encode without eventually needing to decode — unless the image is never viewed by a human again. The encoder and decoder are a pair. Use <a href="/en/tools/image-to-base64">image to Base64</a> to encode and <a href="/en/tools/base64-to-image">Base64 to image</a> to decode. Encoding and decoding. Two directions. One workflow.</p>`
  },
  {
    slug: "word-counter-vs-text-diff-analysis-vs-comparison",
    title: "Word Counter vs Text Diff Analysis vs Comparison — Two Text Tools That Look at the Same Text and See Completely Different Things",
    description: "Word counter analyzes a single text — words, characters, readability. Text diff compares two texts — additions, deletions, modifications. Both work on text. Both produce insights. But the insights are unrelated.",
    date: "2026-07-20",
    category: "Text Tools",
    tags: ["word counter", "text diff", "analysis", "comparison", "text"],
    relatedTools: ["word-counter", "text-diff", "case-converter"],
    content: `<p>You have a 5,000-word essay. You want to know: how many words? What is the reading level? How long will it take to read? You use a <a href="/en/tools/word-counter">word counter</a>. The tool analyzes the text and reports: 5,127 words, Flesch-Kincaid grade level 10.2, estimated reading time 21 minutes. The word counter analyzed <strong>one text</strong> and generated statistics about it.</p>

<p>Now you have two versions of the same essay — the original draft and the edited version. You want to know: what changed? You use a <a href="/en/tools/text-diff">text diff</a> tool. The tool compares the two texts and highlights: lines added (green), lines removed (red), and lines modified (yellow). The text diff compared <strong>two texts</strong> and generated a difference report.</p>

<p>Both tools work on text. Both produce insights. But they answer completely different questions. Here is when to use each — and why confusing analysis with comparison leads to useless results.</p>

<h2>Word Counter: Single-Text Analysis</h2>

<p>A word counter answers: <strong>"What are the properties of this text?"</strong> It counts words, characters, sentences, and paragraphs. It estimates reading time and speaking time. It calculates readability scores (Flesch-Kincaid, Gunning Fog, SMOG). All from a single input text.</p>

<p>Use word counter for: checking if you meet a word count requirement (essay, article, report), estimating how long your content will take to read or present, checking if your writing is at the right grade level for your audience, and tracking your writing productivity over time.</p>

<h2>Text Diff: Two-Text Comparison</h2>

<p>A text diff answers: <strong>"What is different between these two texts?"</strong> It compares two versions of a document and highlights every difference — words added, removed, or modified. The output is a visual representation of the changes.</p>

<p>Use text diff for: reviewing edits (what did your editor change?), comparing document versions (before and after a revision), code review (what changed in this commit?), and verifying that changes are correct (the diff shows exactly what was modified).</p>

<h2>Why You Sometimes Need Both</h2>

<p>A common workflow: after editing a document, use the text diff to see what changed. Then use the word counter on the final version to verify the word count, reading time, and readability. The diff tells you what was changed. The counter tells you whether the final version meets your requirements. Two tools. Two questions. One document. Analysis and comparison are different operations. The word counter analyzes. The text diff compares. Use <a href="/en/tools/word-counter">word counter</a> for analysis and <a href="/en/tools/text-diff">text diff</a> for comparison. Different questions. Different tools.</p>`
  },
  {
    slug: "random-number-generator-history-dice-to-quantum",
    title: "The History of Random Number Generation From Dice to Quantum RNG — How Humans Have Been Trying to Be Random for 5,000 Years",
    description: "The oldest dice were found in a 5,000-year-old Mesopotamian tomb. Today, quantum random number generators use subatomic particles to produce true randomness. Here's the 5,000-year quest to be unpredictable.",
    date: "2026-07-20",
    category: "Fun & Media",
    tags: ["random number", "history", "dice", "quantum", "RNG"],
    relatedTools: ["random-number-generator", "dice-roller", "coin-flip"],
    content: `<p>The oldest known dice were excavated from a 5,000-year-old tomb in Mesopotamia. They were made of bone — knucklebones from sheep, carved into six-sided cubes. The markers on each face were simple indentations. The dice were not fair — the bone was not uniform, the faces were not perfectly square, and the weight was not evenly distributed. But they were random enough for games of chance, divination rituals, and distributing inheritance among heirs. For 5,000 years, humans have been trying to generate randomness — and for most of that time, we have been using dice.</p>

<p>Today, a <a href="/en/tools/random-number-generator">random number generator</a> produces numbers with a click. It uses a pseudo-random algorithm seeded by system entropy. It is fast, convenient, and fair. But it is not truly random — and the difference between pseudo-random and truly random is one of the most fascinating stories in the history of computing. Here is the 5,000-year quest to be unpredictable.</p>

<h2>Era 1: Physical Randomness (3000 BCE - 1940s) — The Age of Dice</h2>

<p>For most of human history, randomness came from physical objects: dice (Mesopotamia, 3000 BCE), coin flips (ancient Rome — "navia aut caput," ship or head), drawing lots (used in elections, land distribution, and criminal sentencing across cultures), and shuffled cards and tiles (China, 9th century CE — the predecessors of modern playing cards).</p>

<p>Physical randomness has one fundamental problem: <strong>bias</strong>. No physical object is perfectly fair. Dice are slightly weighted toward certain faces. Coins land on the same side they started on about 50.8% of the time. Card shuffles are imperfect — a study found that most people do not shuffle enough to truly randomize a deck. The randomness is approximate. The bias is real. For games, approximate is good enough. For cryptography, it is a disaster.</p>

<h2>Era 2: Mathematical Randomness (1940s - Present) — The Age of Algorithms</h2>

<p>The first pseudo-random number generators (PRNGs) were developed in the 1940s for the Manhattan Project — nuclear weapons simulations required vast quantities of random numbers. John von Neumann developed the "middle-square method" in 1949: take a number, square it, extract the middle digits as the next "random" number. The method was simple and fast. It was also terrible — the sequences were short, predictable, and prone to degenerating into repeating patterns. Von Neumann himself said: "Anyone who considers arithmetical methods of producing random digits is, of course, in a state of sin."</p>

<p>Modern PRNGs use sophisticated algorithms like the Mersenne Twister. They produce sequences that pass statistical tests for randomness. But they are still deterministic — given the same seed, they produce the same sequence. The randomness is in the seed. The output is a mathematical consequence of the seed and the algorithm. This is fine for games, simulations, and everyday use — including the <a href="/en/tools/random-number-generator">random number generator</a> on this site. It is not fine for cryptography, where unpredictability is a security requirement.</p>

<h2>Era 3: True Randomness (2010s - Present) — The Age of Quantum RNG</h2>

<p>Quantum random number generators (QRNGs) use subatomic particles to produce true randomness. The principle: at the quantum level, certain events are fundamentally unpredictable — not just unknown, but unknowable. When a photon hits a half-silvered mirror, it either passes through or reflects. The outcome is truly random. A QRNG measures these quantum events and converts them to random bits. The output is not pseudo-random. It is not deterministic. It is <strong>truly random</strong> — the first time in human history that we have been able to generate unpredictability from fundamental physics rather than from imperfect physical objects or deterministic algorithms.</p>

<p>The practical difference: a PRNG can be predicted if you know the seed and the algorithm. A QRNG cannot be predicted — not even in principle. For everyday use, the PRNG in the <a href="/en/tools/random-number-generator">random number generator</a> is more than sufficient. For cryptographic keys, national security, and applications where predictability would be catastrophic, QRNGs are the standard. The 5,000-year quest from sheep knucklebones to quantum photons is complete. We can now generate true randomness from the fabric of reality itself.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("Free station: 236->done.")