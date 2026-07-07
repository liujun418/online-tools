"""Add 6 blogs to free station (164→170) — July 7, 2026"""
import os, sys

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "word-counter-readability-scores-flesch-kincaid",
    title: "Word Counter Readability Scores Flesch-Kincaid Grade Level and Why Word Count Alone Is a Useless Metric",
    description: "You wrote 800 words. Great. But can a 7th grader understand it? Or does it read like a legal contract? Readability scores answer the question word count ignores.",
    date: "2026-07-07",
    category: "Text Tools",
    tags: ["word counter", "readability", "Flesch-Kincaid", "grade level", "writing quality"],
    relatedTools: ["word-counter", "text-polish", "case-converter"],
    content: `<p>You check your word count: 823 words. You hit the target. You publish. But nobody reads past the second paragraph because your sentences average 28 words each and every other word is three syllables. Word count told you <strong>how much</strong> you wrote. Readability scores tell you <strong>whether anyone will actually read it</strong>.</p>

<p>Most writers obsess over word count because it is the easiest metric to measure. It is also the least useful. Here is what readability scores actually measure, which ones matter, and how to use a <a href="/en/tools/word-counter">word counter with readability analysis</a> to write text people finish.</p>

<h2>The Two Readability Scores That Actually Matter</h2>

<p><strong>Flesch Reading Ease</strong> scores text from 0 to 100. Higher is easier. The formula combines average sentence length and average syllables per word. A score of 60-70 is "plain English" — readable by 13-15 year olds. Most consumer-facing content should aim for 60+. A score of 30-50 is "difficult" — college-level reading. A score below 30 is "very difficult" — academic papers and legal documents live here. This page you are reading scores around 65.</p>

<p><strong>Flesch-Kincaid Grade Level</strong> translates the Reading Ease score into a US school grade. A score of 8.0 means an 8th grader should understand the text. Most newspapers write at an 8th-10th grade level. Stephen King writes at about a 6th grade level — short sentences, simple words, maximum impact. Harvard Law Review articles score around 15+ (college graduate).</p>

<p>The insight: <strong>lower grade levels reach more people</strong>. This is not dumbing down. It is clarity. Hemingway wrote at a 4th-6th grade level. His prose is not simple — it is <em>clear</em>. There is a difference.</p>

<h2>Other Readability Metrics Worth Knowing</h2>

<p><strong>Gunning Fog Index:</strong> Estimates the years of formal education needed to understand a text on first reading. A score of 12 means a high school senior can read it comfortably. The formula penalizes long sentences and complex words (three or more syllables). Fog Index tends to run slightly higher than Flesch-Kincaid for the same text.</p>

<p><strong>SMOG Index:</strong> Simplified Measure of Gobbledygook. Designed for healthcare materials — patient information leaflets, consent forms, medication instructions. A SMOG score of 10 means 10 years of education needed. Most healthcare content should aim for SMOG 6-8 to ensure patients actually understand their medical instructions.</p>

<p><strong>Coleman-Liau Index:</strong> Unlike other formulas that count syllables, Coleman-Liau uses <strong>character count per word</strong> instead. The theory: syllable counting is ambiguous (is "fire" one syllable or two?), but character counting is deterministic. Coleman-Liau is easier to compute programmatically and gives similar results.</p>

<h2>How to Use These Scores in Practice</h2>

<p>Run your text through a <a href="/en/tools/word-counter">word counter with readability</a> and look at the numbers. If your grade level is above 12 and you are writing for a general audience, shorten your sentences first — that has the biggest impact on every readability formula. Then replace complex words with simpler ones: "utilize" → "use," "facilitate" → "help," "commence" → "start."</p>

<p>Readability scores are not a grade on your writing. They are a <strong>prediction of reader success</strong>. A score of 60+ on Flesch Reading Ease means most readers will finish your text. A score below 30 means most will bounce. The word count tells you how long the text is. The readability score tells you whether the length matters at all.</p>

<p>Check your text at <a href="/en/tools/word-counter">free word counter</a> — it shows word count, character count, reading time, and readability scores all on one screen.</p>`
  },
  {
    slug: "dice-roller-board-game-probability-math",
    title: "Dice Roller Board Game Probability Why 2d6 Is Not the Same as 1d12 and Other Math Every Game Designer Knows",
    description: "Rolling two six-sided dice gives results from 2 to 12 — but the distribution is a bell curve, not flat. 1d12 is uniform. The difference changes entire game strategies.",
    date: "2026-07-07",
    category: "Fun & Media",
    tags: ["dice roller", "probability", "board games", "bell curve", "game design"],
    relatedTools: ["dice-roller", "random-number-generator", "coin-flip"],
    content: `<p>You are designing a board game. Your combat system needs randomness. You have two options: roll one 12-sided die (1d12) for 1-12 damage, or roll two 6-sided dice (2d6) for 2-12 damage. The ranges are almost the same. The probabilities are <strong>completely different</strong> — and choosing the wrong one breaks your game balance.</p>

<p>Here is the probability math behind dice, why game designers obsess over it, and how a <a href="/en/tools/dice-roller">dice roller</a> helps you test your assumptions before you print a rulebook.</p>

<h2>Uniform vs Normal Distribution: The Core Concept</h2>

<p><strong>1d12 is uniform.</strong> Every result from 1 to 12 has exactly the same probability: 8.33% (1/12). Roll a thousand times and each number appears roughly the same number of times. You are equally likely to roll a 1 (a disaster) as a 12 (a triumph).</p>

<p><strong>2d6 is a triangle distribution</strong> (approximating a bell curve). There are 36 possible combinations (6 × 6), but only one way to roll a 2 (1+1) and one way to roll a 12 (6+6). There are six ways to roll a 7 (1+6, 2+5, 3+4, 4+3, 5+2, 6+1). The probability of rolling a 7 is 16.67% — six times the probability of rolling a 2 or 12 (2.78% each).</p>

<p>The practical effect: 2d6 produces <strong>reliable, middling results</strong> with rare extremes. 1d12 produces <strong>chaotic, unpredictable results</strong> where extremes are just as common as averages. If your game is about calculated risk, use 2d6. If your game is about wild swings of fortune, use 1d12.</p>

<h2>Why Settlers of Catan Uses 2d6</h2>

<p>Settlers of Catan's resource production is based on 2d6 rolls. Resources numbered 6 and 8 produce on 13.9% of rolls each (5/36 combinations). Resources numbered 2 and 12 produce on 2.8% of rolls each (1/36). The robber triggers on a 7 — the most common roll at 16.7%.</p>

<p>This is not arbitrary. The 2d6 distribution creates <strong>natural scarcity and abundance</strong>. Players fight over 6 and 8 tiles because they produce the most reliably. Nobody builds on 2 or 12. The 7 being the most common roll means the robber activates frequently, preventing any player from getting too comfortable. The entire game economy is built on the shape of a 2d6 bell curve. Change the dice mechanic and you change the game.</p>

<h2>3d6 vs 1d20: The GURPS vs D&D Divide</h2>

<p>Dungeons & Dragons uses 1d20 for most checks — uniform distribution, 5% chance of any result. GURPS (Generic Universal RolePlaying System) uses 3d6 — a true bell curve with 216 possible combinations, where results of 9-12 appear 48% of the time and results of 3 or 18 appear 0.46% of the time each.</p>

<p>In D&D, a +1 bonus always increases your success chance by exactly 5 percentage points regardless of your current skill. In GURPS, a +1 bonus is worth more when your skill is near the middle of the curve (around 10) and less when your skill is already high or low — the curve compresses the extremes. D&D is swingy and dramatic. GURPS is predictable and simulationist. Neither is better — they create different <strong>emotional experiences</strong> through probability.</p>

<h2>Testing Your Own Game Mechanics</h2>

<p>Before you commit to a dice mechanic, test it. Use a <a href="/en/tools/dice-roller">dice roller</a> to simulate 100 rolls of your proposed system. Plot the results. Ask: do the extremes happen too often? Not often enough? Does the average feel right? Does a +1 bonus matter enough to feel worth pursuing?</p>

<p>The math is not the game. But the math shapes everything the player feels. Get it right before you build the rest on top of it.</p>`
  },
  {
    slug: "image-to-base64-email-embedding-vs-cdn",
    title: "Image to Base64 Email Newsletters Embedding Images vs CDN Hosting The Hidden Tradeoffs Nobody Talks About",
    description: "Embed images as Base64 in your HTML email and they display instantly — no external requests, no blocked images. But the email size balloons and Gmail clips you. Here's the real tradeoff.",
    date: "2026-07-07",
    category: "Developer",
    tags: ["image to base64", "email", "data URI", "newsletter", "CDN"],
    relatedTools: ["image-to-base64", "base64-to-image", "html-entities"],
    content: `<p>You design a beautiful HTML email newsletter. Header logo, three product photos, a footer signature. You upload the images to your CDN and send a test. Gmail blocks the images by default. Outlook shows broken image placeholders. Apple Mail loads them but the CDN URL reveals tracking parameters. The email looks broken until the recipient clicks "Show Images" — which most people never do.</p>

<p>The alternative: embed images directly in the HTML as <strong>Base64 data URIs</strong>. The images load instantly because they are part of the email body, not external resources. But the tradeoffs are not obvious. Here is what you gain and what you lose.</p>

<h2>How Base64 Image Embedding Works</h2>

<p>A Base64 data URI looks like this: <code>&lt;img src="data:image/png;base64,iVBORw0KGgo..."&gt;</code>. The image file is encoded as a long string of characters and placed directly in the HTML. No separate file. No HTTP request. The image is <strong>in the document</strong>.</p>

<p>Use a <a href="/en/tools/image-to-base64">image to Base64 converter</a> to encode any image. Upload the file, get the Base64 string, paste it into your src attribute. The conversion increases file size by about 33% — Base64 uses 4 characters to represent 3 bytes of binary data. A 100KB image becomes roughly 133KB of Base64 text.</p>

<h2>The Email-Specific Tradeoffs</h2>

<p><strong>Pro: Images display immediately, no "Show Images" prompt.</strong> This is the big one. Email clients that block external images (Gmail, Outlook, Yahoo by default) do not block data URIs because the image data is part of the message body. Your newsletter looks the same on first open as it does to you during testing. For small, critical images — a logo, a signature, a call-to-action button — this is worth the tradeoff.</p>

<p><strong>Con: Gmail clips messages larger than 102KB.</strong> Base64 encoding blows up your email size. A newsletter with three 50KB product photos encoded as Base64 adds ~200KB to the message body. Gmail truncates any message over 102KB with a "[Message clipped] View entire message" link. The clipped version hides below-the-fold content — including your footer, unsubscribe link, and potentially the second half of your email. This is a legal compliance risk under CAN-SPAM.</p>

<p><strong>Con: Base64 images are not cached.</strong> External images are cached by the email client and CDN. If you send the same logo in every newsletter, the CDN version loads from cache on the second email. The Base64 version is re-downloaded every time — it is part of the unique message body of each email.</p>

<h2>The Hybrid Strategy (Recommended)</h2>

<p>Embed <strong>small, critical images</strong> as Base64: your logo (keep it under 5KB), your signature or headshot, call-to-action buttons, icons. These ensure the email looks intentional even before images are enabled. Host <strong>large, decorative images</strong> on a CDN with proper alt text: product photos, hero images, lifestyle shots. These are nice-to-have, not need-to-have, and the alt text communicates the message even when the image is blocked.</p>

<p>Also: <strong>compress before you encode</strong>. Run images through a compressor before Base64 encoding. A 5KB logo is fine. A 50KB logo is not — and Base64 will make it 67KB. Every kilobyte counts when Gmail's clipping threshold is 102KB.</p>

<p>Convert your images at <a href="/en/tools/image-to-base64">image to Base64</a> — encode, test, and decide which images earn the bytes and which stay on the CDN.</p>`
  },
  {
    slug: "calorie-calculator-vs-bmi-energy-balance-vs-body-size",
    title: "Calorie Calculator vs BMI Calculator Energy Balance vs Body Size Why Two Numbers That Seem Related Measure Completely Different Things",
    description: "Your BMI says you're overweight. Your calorie calculator says you need 2,400 calories to maintain weight. These numbers interact — but they measure different things, and confusing them leads to bad decisions.",
    date: "2026-07-07",
    category: "Calculators",
    tags: ["calorie calculator", "BMI calculator", "energy balance", "body composition", "weight loss"],
    relatedTools: ["calorie-calculator", "bmi-calculator", "percentage-calculator"],
    content: `<p>You open a <a href="/en/tools/bmi-calculator">BMI calculator</a> and it says 27.3 — "overweight." You open a <a href="/en/tools/calorie-calculator">calorie calculator</a> and it says your maintenance is 2,338 calories per day. These numbers appear in the same health conversation. They both involve your body weight. They are often used together in weight loss plans. But they measure <strong>fundamentally different things</strong>, and treating them as interchangeable leads to frustration.</p>

<p>BMI is a <strong>size classification</strong>. Calorie needs are an <strong>energy flow rate</strong>. One is a label. The other is a budget. Here is how they relate — and where they diverge.</p>

<h2>BMI: A Population-Level Sorting Tool, Not a Personal Health Diagnosis</h2>

<p>BMI (Body Mass Index) = weight (kg) / height² (m²). It was invented by Adolphe Quetelet in the 1830s — a Belgian mathematician and astronomer, not a physician. He was studying the "average man" for population statistics, not diagnosing individuals. The formula was adopted by insurance companies in the 20th century because it correlated with mortality risk <strong>across large populations</strong>.</p>

<p>The problem with individual application: BMI does not distinguish between muscle and fat. A 5'10", 210-pound bodybuilder with 12% body fat has a BMI of 30.1 — "obese." A 5'10", 210-pound sedentary person with 35% body fat also has a BMI of 30.1. Same BMI. Radically different health profiles. BMI is a screening tool, not a diagnostic tool. It says "check this person more carefully," not "this person is unhealthy."</p>

<p>BMI also ignores <strong>fat distribution</strong>. Visceral fat (around organs) is metabolically dangerous. Subcutaneous fat (under the skin) is less so. Two people with identical BMIs can have completely different fat distribution and completely different health risks. Waist-to-hip ratio and waist-to-height ratio are better predictors of metabolic health than BMI alone.</p>

<h2>Calorie Needs: A Dynamic Energy Budget</h2>

<p>Your daily calorie needs (TDEE — Total Daily Energy Expenditure) are calculated from your BMR (Basal Metabolic Rate — the calories you burn just existing) multiplied by an activity factor. BMR is estimated from your weight, height, age, and sex using formulas like Mifflin-St Jeor or Katch-McArdle (which also uses body fat percentage).</p>

<p>The key insight: <strong>your calorie needs change as your weight changes</strong>. A 200-pound person burns more calories walking a mile than a 150-pound person — they are moving more mass. When you lose weight, your TDEE drops. The calorie deficit that caused weight loss at 200 pounds becomes maintenance at 180 pounds. This is why weight loss plateaus — the math changes as you shrink.</p>

<p>BMI does not change with your calorie intake. It changes with your weight. Your calorie needs change with your weight too — but also with your activity, muscle mass, age, and hormones. They are related through the variable of weight, but they answer different questions.</p>

<h2>Why Confusing Them Leads to Bad Decisions</h2>

<p>Scenario: your BMI says "overweight." You use a calorie calculator, set a 500-calorie deficit, and start losing weight. Two months later, your weight is down 15 pounds but your BMI still says "overweight" (you were near the top of the range). You get discouraged and quit. The mistake: using BMI as a <strong>progress metric</strong> instead of a <strong>classification tool</strong>.</p>

<p>Better approach: use the calorie calculator to set your energy budget. Use weight, waist circumference, energy levels, and how your clothes fit as progress metrics. Use BMI as a rough category check — once per month, not every day. The calorie calculator is your daily tool. The BMI calculator is your occasional reference point. They work together, but the calorie calculator is the one you actually act on.</p>

<p>Check both numbers at <a href="/en/tools/calorie-calculator">calorie calculator</a> and <a href="/en/tools/bmi-calculator">BMI calculator</a> — understand what each one actually tells you before you build a plan around them.</p>`
  },
  {
    slug: "html-to-markdown-vs-markdown-preview-round-trip",
    title: "HTML to Markdown vs Markdown Preview The Conversion Round Trip and Why It Never Comes Back Exactly the Same",
    description: "Convert HTML to Markdown, then preview the Markdown back to HTML. The result is close to the original — but never identical. Here's what gets lost in each direction and why.",
    date: "2026-07-07",
    category: "Developer",
    tags: ["HTML to Markdown", "Markdown preview", "conversion", "formatting", "round trip"],
    relatedTools: ["html-to-markdown", "markdown-preview", "text-diff"],
    content: `<p>You have an old blog post in HTML. You want to switch to Markdown for your static site generator. You use an <a href="/en/tools/html-to-markdown">HTML to Markdown converter</a> — paste the HTML, get clean Markdown. Then you preview the Markdown to make sure it looks right. The rendered HTML is <strong>close</strong> to your original, but the links are in a different order, the table alignment is slightly off, and some inline formatting disappeared. What happened?</p>

<p>HTML → Markdown → HTML is a <strong>lossy round trip</strong>. Information is lost in both directions. Here is exactly what gets lost, why, and how to minimize the damage.</p>

<h2>HTML → Markdown: What Gets Dropped</h2>

<p><strong>Alignment attributes.</strong> HTML tables support <code>align="right"</code> on cells, <code>&lt;th&gt;</code> vs <code>&lt;td&gt;</code> semantics, <code>colspan</code> and <code>rowspan</code>. Markdown tables have none of these. A Markdown table is always left-aligned text with pipe separators. Complex HTML tables with merged cells cannot be represented in basic Markdown at all — the converter either drops the alignment or approximates with extra spaces.</p>

<p><strong>Inline styling.</strong> <code>&lt;span style="color: red; font-size: 18px;"&gt;Important&lt;/span&gt;</code> has no Markdown equivalent. Markdown has bold, italic, code, links, and images — that is it. Inline CSS styles, class names, and IDs are silently dropped. The text content survives. The presentation does not.</p>

<p><strong>Image dimensions.</strong> <code>&lt;img src="photo.jpg" width="600" height="400"&gt;</code> becomes <code>![alt text](photo.jpg)</code>. The width and height attributes are gone. If your layout depended on specific image sizes, the Markdown version will render at the image's native resolution.</p>

<p><strong>Nested lists with different types.</strong> HTML supports ordered lists with custom start numbers and mixed ordered/unordered nesting. Markdown's list handling varies by implementation — some reset numbering on nested lists, some do not. The converter makes a best guess, but complex nested lists often need manual cleanup.</p>

<h2>Markdown → HTML: What Gets Added (That Was Not There Before)</h2>

<p>When you use a <a href="/en/tools/markdown-preview">Markdown preview</a> to render Markdown back to HTML, the renderer adds its own HTML structure. A Markdown heading <code>## Section</code> becomes <code>&lt;h2 id="section"&gt;Section&lt;/h2&gt;</code> — the renderer added an <code>id</code> attribute for anchor linking. A code block gets wrapped in <code>&lt;pre&gt;&lt;code&gt;</code> with syntax highlighting classes. These additions are useful but they are not in the original HTML.</p>

<p>Different Markdown renderers produce different HTML from the same Markdown. GitHub Flavored Markdown, CommonMark, and original Markdown all handle edge cases differently — especially around line breaks in paragraphs, underscore handling in the middle of words, and link reference definitions. The Markdown you generate from HTML will render correctly only in the renderer you target.</p>

<h2>The Practical Workflow: Convert, Then Diff</h2>

<p>Step 1: Convert HTML → Markdown with the <a href="/en/tools/html-to-markdown">HTML to Markdown converter</a>. Step 2: Preview the Markdown to see the rendered output. Step 3: Use a <a href="/en/tools/text-diff">text diff tool</a> to compare the original HTML and the rendered HTML. Step 4: Manually fix the differences that matter for your content — tables, image sizes, complex formatting. Step 5: Once the rendered output matches your expectations, save the Markdown as your canonical source.</p>

<p>The conversion is a starting point, not a finished product. The tools get you 90% of the way. The last 10% — alignment, dimensions, edge cases — requires human judgment about what matters for your content.</p>

<p>Start your conversion at <a href="/en/tools/html-to-markdown">HTML to Markdown</a> and preview the result at <a href="/en/tools/markdown-preview">Markdown preview</a> — the round trip is lossy, but with the right workflow the losses are manageable.</p>`
  },
  {
    slug: "svg-minifier-why-vector-graphics-won-history",
    title: "Why SVG Won The Vector Graphics Format That Outlived Flash Silverlight VML and a Dozen Proprietary Rivals",
    description: "SVG was proposed in 1998. It was ignored for years while Flash, Silverlight, and VML fought for vector graphics dominance. SVG outlived them all. Here's why — and what it teaches about open standards.",
    date: "2026-07-07",
    category: "Developer",
    tags: ["SVG", "vector graphics", "web standards", "XML", "history"],
    relatedTools: ["svg-minifier", "css-minifier", "code-formatter"],
    content: `<p>In 1998, the W3C published the first draft of SVG (Scalable Vector Graphics). Internet Explorer 5 had 65% browser market share. Broadband adoption was under 5%. Most web graphics were GIFs — 256 colors, chunky compression, no transparency beyond 1-bit. A vector format for the web seemed like a niche academic exercise.</p>

<p>Twenty-eight years later, SVG is the <strong>only vector format that survived the browser wars</strong>. Flash is dead. Silverlight is dead. VML (Vector Markup Language) is dead. Adobe's proprietary formats live inside Creative Cloud but not in browsers. SVG won. Here is why it took so long, what killed its rivals, and what the victory teaches about open standards.</p>

<h2>The Rivals That SVG Outlived</h2>

<p><strong>Macromedia/Adobe Flash (1996-2020):</strong> Flash was not a format — it was a platform. Vector graphics, animation, interactivity, video, and a full programming language (ActionScript) in one plugin. At its peak in the late 2000s, Flash was installed on over 98% of desktop browsers. Flash failed because it was a <strong>proprietary plugin</strong> in a world moving toward open web standards. Steve Jobs's "Thoughts on Flash" letter in 2010 — banning Flash from iOS — accelerated the decline, but the writing was already on the wall. Browsers were becoming powerful enough to do natively what Flash required a plugin for.</p>

<p><strong>Microsoft Silverlight (2007-2021):</strong> Microsoft's answer to Flash. Used XAML for UI, C# for logic via .NET. Netflix used Silverlight for streaming from 2008-2013. Silverlight died for the same reason as Flash — plugin dependency — plus the rise of HTML5 video and the fact that Microsoft itself stopped caring after Windows 8 prioritized HTML5/JS for Metro apps.</p>

<p><strong>VML (1998-2012):</strong> Microsoft's vector markup language, submitted to W3C in 1998 alongside SVG. IE5-8 supported VML natively. Google Maps used VML in old IE versions for vector overlays. VML lost because it was <strong>IE-only</strong> — no other browser implemented it. SVG had cross-browser backing from the start (even if implementation took years).</p>

<h2>Why SVG Survived</h2>

<p><strong>1. It was an open standard from day one.</strong> No single company controlled SVG. The W3C SVG Working Group included Adobe, Apple, Google, Microsoft, Mozilla, and Opera. No one company could kill it, and no one company could charge for it. This is the single biggest factor.</p>

<p><strong>2. It is text-based.</strong> SVG files are XML. You can open an SVG in a text editor, read it, and edit it by hand. This means SVG is searchable, diffable, and scriptable. A designer can hand a developer an SVG and the developer can animate individual elements with CSS or JavaScript. Flash files (.swf) were binary blobs that required proprietary tools to modify.</p>

<p><strong>3. CSS and JavaScript integration.</strong> SVG elements are DOM elements. You can style them with CSS, animate them with CSS transitions, and manipulate them with JavaScript. An SVG icon can change color on hover using the same CSS as the rest of your site. This is impossible with raster images and was impossible with Flash.</p>

<p><strong>4. It scaled with screen resolutions.</strong> SVG's "scalable" is in the name. When Retina displays arrived in 2010, websites with raster images suddenly looked blurry at 2× resolution. SVG icons looked perfect at any resolution. The mobile revolution made SVG essential, not optional.</p>

<h2>What SVG Still Gets Wrong</h2>

<p>SVG is not perfect. The spec is enormous — SVG 1.1 Full is over 800 pages. Browsers implemented different subsets, leading to years of compatibility issues. SVG fonts were dropped from the spec. SVG animation (SMIL) was deprecated in favor of CSS animations, then partially un-deprecated. The <code>&lt;use&gt;</code> element for symbol reuse has shadow-DOM quirks that still confuse developers.</p>

<p>And SVG files can be bloated. Illustrator exports SVG with layers of metadata, comments, and editor-specific attributes. This is where an <a href="/en/tools/svg-minifier">SVG minifier</a> comes in — stripping the editor cruft while preserving the visible graphics. A typical Illustrator SVG shrinks by 30-70% after minification.</p>

<p>SVG won because it was <strong>good enough, open, and text-based</strong> at the exact moment the web needed a vector format for high-DPI screens. The lesson: proprietary formats win battles. Open standards win wars. It just takes longer.</p>

<p>Optimize your SVGs at <a href="/en/tools/svg-minifier">SVG minifier</a> — strip the cruft, keep the vectors.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("Free station: 164->done. Check slugs.")