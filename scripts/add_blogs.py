"""Add 6 blogs to free station (194→200) — July 13, 2026"""
import os, sys

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "bmi-calculator-body-composition-beyond-the-number",
    title: "BMI Calculator Body Composition Beyond the Number Why Waist-to-Hip Ratio and Body Fat Percentage Tell You More Than BMI Alone",
    description: "Your BMI says you're 'overweight.' Your body fat percentage is 15% and your waist-to-hip ratio is 0.85. The BMI number is useful — but incomplete. Here are the metrics that fill in the gaps.",
    date: "2026-07-13",
    category: "Calculators",
    tags: ["BMI calculator", "body composition", "waist-to-hip ratio", "body fat", "health metrics"],
    relatedTools: ["bmi-calculator", "calorie-calculator", "percentage-calculator"],
    content: `<p>You step on the scale. The scale says 195 pounds. At 5'10", your <a href="/en/tools/bmi-calculator">BMI calculator</a> result is 28.0 — "overweight." The scale does not know that you have been lifting weights for three years, that your body fat percentage is 15%, and that your waist-to-hip ratio is 0.85 — all within the healthy range. The BMI number is not wrong. It is just <strong>incomplete</strong>. It measures weight relative to height. It does not measure what that weight is made of.</p>

<p>BMI is the most widely used health metric in the world. It is also the most widely misunderstood. Here is what BMI actually measures, what it misses, and the complementary metrics that give you a complete picture of your body composition.</p>

<h2>What BMI Actually Measures (and What It Was Designed For)</h2>

<p>BMI = weight (kg) / height² (m²). It was invented by Adolphe Quetelet, a Belgian mathematician, in the 1830s. He was not a physician. He was not studying individual health. He was studying the <strong>distribution of human body sizes across populations</strong> — a statistical exercise in describing the "average man." The formula was adopted by insurance companies in the 20th century because it correlated with mortality risk across thousands of policyholders. It was never intended to diagnose individual health.</p>

<p>BMI works reasonably well at the population level because, on average, higher BMI correlates with higher body fat. But the correlation breaks down for individuals — especially individuals with above-average muscle mass. A 5'10", 210-pound bodybuilder has a BMI of 30.1 — "obese." A 5'10", 210-pound sedentary person with 35% body fat also has a BMI of 30.1. Same BMI. Completely different health profiles. The number does not distinguish between muscle and fat.</p>

<h2>The Complementary Metrics That Fill the Gaps</h2>

<p><strong>Waist-to-Hip Ratio (WHR):</strong> Waist circumference divided by hip circumference. A WHR above 0.90 for men or 0.85 for women indicates central obesity — fat stored around the organs, which is metabolically more dangerous than fat stored under the skin. WHR is a better predictor of cardiovascular risk than BMI. It measures <strong>where</strong> the fat is, not just how much there is.</p>

<p><strong>Body Fat Percentage:</strong> The percentage of your total body weight that is fat. Healthy ranges: 10-20% for men, 20-30% for women. Measured by calipers, bioelectrical impedance scales, or DEXA scans. Body fat percentage answers the question that BMI cannot: how much of your weight is fat and how much is muscle, bone, and water? Two people with the same BMI can have body fat percentages that differ by 10-15 percentage points.</p>

<p><strong>Waist-to-Height Ratio:</strong> Waist circumference divided by height. A ratio above 0.5 indicates increased cardiovascular risk. This metric is simpler than BMI — your waist should be less than half your height. It works across different ethnic groups, ages, and genders better than BMI. Some researchers argue it should replace BMI as the default screening tool.</p>

<h2>How to Use These Metrics Together</h2>

<p>Use the <a href="/en/tools/bmi-calculator">BMI calculator</a> for the initial screening — it takes 10 seconds and gives you a rough category. Then add the complementary metrics: measure your waist-to-hip ratio with a tape measure (30 seconds), estimate your body fat percentage with a scale or calipers (2 minutes), and calculate your waist-to-height ratio (10 seconds). The three metrics together — BMI, WHR, and body fat percentage — give you a more complete picture than any single number.</p>

<p>The BMI number is not useless. It is just the first data point, not the final diagnosis. Use it as a starting point, then fill in the gaps with the metrics that actually measure what you care about.</p>`
  },
  {
    slug: "qr-code-scanner-security-malicious-codes-public",
    title: "QR Code Scanner Security Risks How to Check a QR Code Before You Scan It — and the Malicious Codes Hiding in Public Spaces",
    description: "QR codes in public places are increasingly being replaced with malicious stickers that redirect to phishing sites. A QR code scanner with a preview feature can save you from the attack.",
    date: "2026-07-13",
    category: "Developer",
    tags: ["QR code scanner", "security", "phishing", "malicious QR", "public safety"],
    relatedTools: ["qr-code-scanner", "qr-code-generator", "url-encoder"],
    content: `<p>You are at a restaurant. The menu is a QR code sticker on the table. You scan it with your phone. The URL preview shows: <code>https://menu-order-pay.com/r/8x7k2</code> — a domain you have never seen before. You hesitate. The restaurant's actual website is <code>therestaurantname.com</code>. This QR code might be legitimate. Or it might be a <strong>malicious sticker</strong> placed over the real QR code by someone who wants to steal your payment information.</p>

<p>QR code phishing — sometimes called "quishing" — is growing. In 2024, the FBI reported a 300% increase in QR code-based fraud compared to 2022. The attack is simple: print a malicious QR code on a sticker, place it over a legitimate QR code in a public space, and wait for people to scan it. A <a href="/en/tools/qr-code-scanner">QR code scanner</a> that shows the decoded URL <strong>before</strong> opening it is the first line of defense. Here is how to scan safely.</p>

<h2>The Anatomy of a QR Code Phishing Attack</h2>

<p><strong>Step 1: The attacker identifies a target.</strong> High-traffic locations with trusted QR codes: restaurant menus, parking payment kiosks, event tickets, public transport information boards, charity donation posters. The QR code is expected. The victim scans without thinking.</p>

<p><strong>Step 2: The attacker creates a malicious QR code.</strong> The QR code encodes a URL that looks legitimate at a glance: <code>paybyphone-parking.com</code> instead of <code>paybyphone.com</code>, <code>menu-order.co</code> instead of the restaurant's actual domain, or a URL shortener that hides the true destination. The QR code is printed on a sticker the same size as the original.</p>

<p><strong>Step 3: The sticker is placed over the legitimate QR code.</strong> The victim scans the sticker, not the original. The malicious website looks identical to the legitimate one — same branding, same layout, same text. The victim enters their payment information. The attacker captures it. The victim is redirected to the real site and never knows their credentials were stolen.</p>

<h2>How to Scan QR Codes Safely</h2>

<p><strong>Use a QR scanner that shows the URL first.</strong> A <a href="/en/tools/qr-code-scanner">QR code scanner</a> that decodes the QR code and displays the URL <strong>before</strong> opening it gives you a moment to inspect the destination. Check the domain. Does it match the expected website? Are there subtle misspellings or extra characters? If anything looks suspicious, do not open the link.</p>

<p><strong>Check for physical tampering.</strong> Before scanning a QR code in a public space, look at the sticker. Is it a sticker on top of another sticker? Is the QR code printed directly on the surface, or is it a label that could have been added later? A QR code that looks like a sticker on a sticker is a red flag.</p>

<p><strong>Type the URL manually if you are unsure.</strong> If the QR code is supposed to link to a restaurant's menu, type the restaurant's website directly into your browser and find the menu there. The QR code is a convenience. It is not the only way to access the information. When in doubt, do not scan.</p>

<p><strong>Use a dedicated QR scanner app, not your phone camera.</strong> Phone cameras automatically open QR code URLs without showing the destination. A dedicated QR scanner app — like <a href="/en/tools/qr-code-scanner">our free QR scanner</a> — shows the decoded content first and lets you decide whether to proceed. The preview is the security feature.</p>

<h2>What to Do If You Scanned a Malicious QR Code</h2>

<p>If you entered payment information on a site that you suspect was fraudulent: contact your bank immediately, freeze the card used, monitor your account for unauthorized transactions, and report the malicious QR code location to the business and local authorities. The faster you act, the less damage the attacker can do.</p>

<p>Scan safely at <a href="/en/tools/qr-code-scanner">free QR code scanner</a> — preview the URL before you open it. The one-second pause is the difference between a safe scan and a stolen password.</p>`
  },
  {
    slug: "markdown-preview-real-time-technical-writing",
    title: "Markdown Preview Real-Time Documentation Workflow How Technical Writers Use Live Preview to Write Faster and Make Fewer Formatting Errors",
    description: "Writing Markdown in a text editor and previewing it in a separate window is slow. A live Markdown preview that updates as you type catches formatting errors instantly. Here's the workflow.",
    date: "2026-07-13",
    category: "Developer",
    tags: ["Markdown preview", "technical writing", "documentation", "live preview", "workflow"],
    relatedTools: ["markdown-preview", "html-to-markdown", "text-diff"],
    content: `<p>You write documentation in Markdown. You type the syntax, commit the file, push to GitHub, and wait for the README to render. The heading is missing a space after the <code>##</code> so it renders as plain text. The table is misaligned because one pipe is missing. The link is broken because the URL has a typo. You fix the errors, commit, push, and wait again. Each formatting error costs you a full commit-push-render cycle.</p>

<p>A <a href="/en/tools/markdown-preview">Markdown preview</a> that renders as you type eliminates the cycle. You see the formatting errors <strong>while you are writing</strong>, not after you commit. The heading renders correctly. The table aligns. The link works. You fix the errors in the editor, not in the commit history. Here is the live preview workflow that technical writers use to produce documentation faster and with fewer errors.</p>

<h2>Why Live Preview Is Better Than Edit-Commit-Render</h2>

<p>The edit-commit-render cycle has a latency of 30-60 seconds per iteration. You type the Markdown. You commit. You push. You wait for GitHub to render it. You find an error. You fix it. You commit again. You push again. You wait again. A 2,000-word document with 10 formatting errors takes 10-20 minutes of commit-push-render cycles to get right.</p>

<p>Live preview eliminates the latency. The preview updates as you type — every keystroke, every newline, every formatting change. The feedback loop is <strong>immediate</strong>. You see the formatting error the moment you make it. You fix it immediately. No commit. No push. No waiting. The same 2,000-word document with 10 formatting errors takes 2 minutes to get right — because you catch each error as you make it, not after you commit.</p>

<p>The live preview also catches <strong>structural errors</strong> that are invisible in raw Markdown. A missing blank line before a list means the list does not render as a list. In raw Markdown, the text looks fine. In the preview, the list items are collapsed into a single paragraph. The preview reveals the structural problem that the raw text hides.</p>

<h2>The Technical Writing Workflow with Live Preview</h2>

<p><strong>Step 1: Write in the editor, watch the preview.</strong> Use the <a href="/en/tools/markdown-preview">Markdown preview</a> in a split-screen setup: raw Markdown on the left, rendered preview on the right. Write in the left panel. Verify in the right panel. The preview is your quality check. If the preview looks right, the Markdown is correct.</p>

<p><strong>Step 2: Check the formatting edge cases.</strong> Tables with mixed column widths, nested lists (does the indentation produce the correct nesting level?), code blocks with language-specific syntax highlighting (does the language tag work?), and links with parentheses in the URL (does the Markdown parser handle the parentheses correctly?). These edge cases are the most common sources of rendering errors. The live preview catches them.</p>

<p><strong>Step 3: Copy the rendered HTML if needed.</strong> Some platforms accept HTML but not Markdown. The live preview renders Markdown to HTML. Copy the HTML output and paste it into the platform. The formatting is preserved. The workflow is: write in Markdown (fast, readable), preview to verify (immediate feedback), export as HTML if needed (compatibility).</p>

<h2>When Live Preview Is Not Enough</h2>

<p>Different platforms use different Markdown renderers. GitHub Flavored Markdown, CommonMark, and original Markdown handle edge cases differently — especially around line breaks, underscore emphasis in the middle of words, and link reference definitions. The live preview shows you how <strong>one</strong> renderer interprets your Markdown. It does not guarantee that every platform will render it identically. For critical documentation, preview on the target platform before publishing.</p>

<p>Write and preview your documentation at <a href="/en/tools/markdown-preview">free Markdown preview</a> — write, see, fix, repeat. The live preview catches the errors before your readers do.</p>`
  },
  {
    slug: "unit-converter-vs-base-converter-physical-vs-numerical",
    title: "Unit Converter vs Base Converter Physical Units vs Number Bases — Two Converters That Look Similar but Operate in Completely Different Domains",
    description: "A unit converter transforms miles to kilometers (physical measurement). A base converter transforms binary to hexadecimal (numerical representation). They are both 'converters' — but the math is unrelated.",
    date: "2026-07-13",
    category: "Calculators",
    tags: ["unit converter", "base converter", "conversion", "measurement", "number systems"],
    relatedTools: ["unit-converter", "base-converter", "roman-numerals"],
    content: `<p>You need to convert 10 miles to kilometers. You use a <a href="/en/tools/unit-converter">unit converter</a> — 10 miles = 16.09 kilometers. The conversion is a multiplication by a fixed constant (1.609). The units are physical measurements of the same thing (distance) expressed in different scales.</p>

<p>Now you need to convert the binary number 10101100 to hexadecimal. You use a <a href="/en/tools/base-converter">base converter</a> — 10101100₂ = AC₁₆. The conversion involves grouping bits into nibbles and mapping each group to a hex digit. The bases are different ways of representing the same number. The value is the same. Only the representation changes.</p>

<p>Both tools are called "converters." Both transform one value into another. But the underlying math, the use cases, and the error modes are completely different. Here is when to use each — and why confusing them produces nonsense.</p>

<h2>Unit Converter: Physical Measurement, Fixed Ratios</h2>

<p>A unit converter transforms a physical quantity from one unit of measurement to another. The conversion is always a <strong>multiplication by a constant</strong>. Miles to kilometers: multiply by 1.609. Pounds to kilograms: multiply by 0.454. Fahrenheit to Celsius: subtract 32, then multiply by 5/9 (a linear transformation, not just a constant).</p>

<p>The key property: the units measure the <strong>same physical dimension</strong>. Length converts to length. Mass converts to mass. Temperature converts to temperature. You cannot convert length to mass — they are different dimensions. The unit converter prevents you from making this category error by only offering conversions within the same dimension.</p>

<p>Common use cases: travel (miles to kilometers, Fahrenheit to Celsius for weather), cooking (cups to milliliters, ounces to grams), fitness (pounds to kilograms, feet to meters for height), and science and engineering (any physical measurement conversion).</p>

<h2>Base Converter: Numerical Representation, Positional Systems</h2>

<p>A base converter transforms a number from one <strong>positional numeral system</strong> to another. The value of the number does not change. Only the representation changes. The decimal number 42 is the same quantity as binary 101010, hexadecimal 2A, and octal 52. They are all the same number. They are written differently.</p>

<p>The conversion works by decomposing the number into powers of the source base and recomposing it into powers of the target base. For binary to hexadecimal, every 4 bits map to one hex digit — a shortcut that works because 16 is a power of 2. For decimal to binary, the conversion requires repeated division by 2 and collecting remainders — no shortcut available.</p>

<p>Common use cases: programming (binary and hexadecimal for bitwise operations, memory addresses, and color codes), computer science education (understanding how numbers are represented in different bases), debugging (interpreting hex dumps and binary data), and digital electronics (binary is the native language of logic gates).</p>

<h2>Why Confusing Them Produces Nonsense</h2>

<p>If you paste "10 miles" into a base converter, it will try to interpret "10" as a number in some base and convert it to another base. It will produce a result like "1010" (binary) — which is the binary representation of the decimal number 10, not a distance conversion. The result is mathematically correct and completely useless. The unit converter expects a physical quantity with a unit. The base converter expects a number without a unit. The input format determines which tool you should use.</p>

<p>The rule: if your input includes a unit (miles, kg, °F, liters) → unit converter. If your input is a pure number that you want to express in a different base (binary, hex, octal, decimal) → base converter. The tools are named for what they do. The names are almost interchangeable. The functions are not.</p>

<p>Convert at <a href="/en/tools/unit-converter">unit converter</a> and <a href="/en/tools/base-converter">base converter</a> — physical measurements and numerical representations. Two different problems. Two different tools.</p>`
  },
  {
    slug: "gif-search-vs-youtube-thumbnail-two-media-tools",
    title: "GIF Search vs YouTube Thumbnail Two Media Tools for Completely Different Platforms — and Why You Need Both in Your Content Creation Toolkit",
    description: "GIF Search helps you find the perfect reaction GIF for a tweet. YouTube Thumbnail helps you preview how your video thumbnail will look on different devices. Different tools, different platforms, same creator.",
    date: "2026-07-13",
    category: "Fun & Media",
    tags: ["GIF search", "YouTube thumbnail", "content creation", "social media", "media tools"],
    relatedTools: ["gif-search", "youtube-thumbnail", "bing-wallpaper"],
    content: `<p>You are a content creator. This morning, you need: a reaction GIF for a tweet announcing your latest video, and a thumbnail preview for the video itself — to make sure the text is readable at mobile size. You use a <a href="/en/tools/gif-search">GIF search</a> for the first task and a <a href="/en/tools/youtube-thumbnail">YouTube thumbnail preview</a> for the second. Both are media tools. Both are free. Both solve problems that every content creator faces daily. But they serve completely different stages of the content creation workflow.</p>

<p>Here is how these two tools fit into a creator's daily workflow — and why having both bookmarked saves you 15 minutes of searching every day.</p>

<h2>GIF Search: The Social Media Engagement Tool</h2>

<p>A GIF is a short, looping animation — typically 2-5 seconds, no sound, taken from a movie, TV show, or viral video. GIFs are the internet's emotional vocabulary. They express reactions — excitement, frustration, sarcasm, celebration — more vividly than words alone. A tweet with a well-chosen GIF gets more engagement than a tweet without one. The GIF is not the content. It is the <strong>emotional amplifier</strong> for the content.</p>

<p>The <a href="/en/tools/gif-search">GIF search</a> tool lets you search across a massive library of GIFs by keyword. Type "celebration" and get hundreds of GIFs of people celebrating. Type "facepalm" and get hundreds of GIFs of people expressing disappointment. The search is fast, the library is extensive, and the GIFs are free to use in social media posts.</p>

<p>Use GIF search for: social media posts (Twitter, Facebook, Instagram Stories), messaging (Slack, Discord, WhatsApp), and adding personality to blog posts and newsletters. The right GIF makes your content feel human. The wrong GIF makes it feel like a corporate social media intern trying too hard. The difference is in the search — finding the GIF that matches your exact emotional intent, not just the first result for the keyword.</p>

<h2>YouTube Thumbnail Preview: The Conversion Optimization Tool</h2>

<p>A YouTube thumbnail is the most important factor in whether someone clicks on your video. More important than the title. More important than the description. The thumbnail is the first thing viewers see, and it determines whether they scroll past or click. A good thumbnail is: visually clear at small sizes (most viewers see it at 200×113 pixels on mobile), has minimal text (4-5 words maximum, large font), and has high contrast (bright colors, clear subject, uncluttered background).</p>

<p>The <a href="/en/tools/youtube-thumbnail">YouTube thumbnail preview</a> tool lets you upload your thumbnail and see how it will look at different sizes — desktop, mobile, sidebar, search results. What looks great at 1280×720 pixels on your design screen might be illegible at 200×113 pixels on a phone. The preview tool shows you the reality before you publish.</p>

<p>Use the thumbnail preview for: every YouTube video you publish (check the thumbnail at all sizes before uploading), A/B testing thumbnail designs (compare two thumbnails side by side at mobile size), and verifying that text is readable and faces are recognizable at the smallest display size.</p>

<h2>The Creator's Daily Workflow</h2>

<p>Morning: publish a video with a thumbnail you verified on the <a href="/en/tools/youtube-thumbnail">thumbnail preview</a>. Promote the video on Twitter with a reaction GIF from the <a href="/en/tools/gif-search">GIF search</a>. Two tools. Two platforms. One creator. The GIF drives engagement on social media. The thumbnail drives clicks on YouTube. Both are free. Both are instant. Both deserve a place on your bookmarks bar.</p>`
  },
  {
    slug: "food-picker-psychology-decision-fatigue",
    title: "The Psychology of Food Choice Why Random Food Pickers Defeat Decision Fatigue — and the Neuroscience of Why Choosing Dinner Is Exhausting",
    description: "You made 200 decisions today. The last one — 'What should I eat for dinner?' — feels impossible. A food picker eliminates the decision. Here's the neuroscience of why choosing food is disproportionately draining.",
    date: "2026-07-13",
    category: "Fun & Media",
    tags: ["food picker", "decision fatigue", "psychology", "neuroscience", "choice"],
    relatedTools: ["food-picker", "coin-flip", "random-number-generator"],
    content: `<p>You have made roughly 200 decisions today. What time to wake up. What to wear. What to eat for breakfast. Which email to answer first. Which task to prioritize. Whether to speak up in the meeting. Whether to send that message. Each decision consumed a small amount of mental energy. By 7 PM, your decision-making capacity is depleted. And now you face the hardest decision of the day: <strong>what to eat for dinner</strong>.</p>

<p>Food choice is disproportionately draining because it involves multiple competing variables: taste (what do I want?), nutrition (what should I eat?), effort (what do I have the energy to cook?), time (what can I make before I get too hungry?), cost (what can I afford?), and availability (what ingredients do I have?). Each variable pulls in a different direction. The optimization problem is genuinely hard. The result: you stare at the fridge for five minutes, close it, and order the same thing you always order.</p>

<p>A <a href="/en/tools/food-picker">food picker</a> eliminates the decision. You tell it your preferences. It picks a random option. You eat. The mental energy you would have spent choosing dinner is now available for something that matters. Here is the neuroscience of why food decisions are so exhausting — and why random food pickers are genuinely useful psychological tools.</p>

<h2>Decision Fatigue: The Neuroscience of Depleted Willpower</h2>

<p>Decision fatigue is the deterioration of decision quality after a long session of decision-making. The phenomenon was first studied in the context of judicial decisions: judges were more likely to grant parole in the morning (about 65% approval) than in the late afternoon (near 0% approval) — not because the afternoon cases were weaker, but because the judges' decision-making capacity was depleted. The same phenomenon affects every decision you make after a long day of deciding.</p>

<p>The mechanism: decision-making consumes glucose in the prefrontal cortex — the brain region responsible for executive function. Each decision depletes the available glucose. As glucose levels drop, the brain conserves energy by making <strong>simpler, lazier decisions</strong> — the default option, the easiest option, the option that requires the least cognitive effort. This is why you order the same takeout every time. Your brain is not choosing the best option. It is choosing the easiest option.</p>

<h2>Why Food Choice Is Disproportionately Draining</h2>

<p>Food choice combines multiple decision types into one: <strong>hedonic</strong> (what will taste good?), <strong>practical</strong> (what can I make with what I have?), <strong>nutritional</strong> (what aligns with my health goals?), and <strong>social</strong> (what will my partner/family want?). Each type of decision recruits different brain regions. The combination is cognitively expensive.</p>

<p>Food choice also carries <strong>emotional weight</strong>. Food is tied to identity, culture, mood, and self-control. "What should I eat?" is never just about calories. It is about: am I being healthy? Am I being indulgent? Am I honoring my preferences? Am I wasting money? The emotional load makes the decision heavier than a purely practical choice like "which route should I take to work?"</p>

<h2>How a Food Picker Solves the Problem</h2>

<p>A <a href="/en/tools/food-picker">food picker</a> offloads the decision to a random number generator. You set the parameters — cuisine preferences, dietary restrictions, effort level — and the tool picks a random option from the remaining choices. The decision is made. The cognitive load is zero. The tool does not pick the <strong>best</strong> option. It picks a <strong>random acceptable</strong> option. The difference is crucial: eliminating the optimization problem is more valuable than solving it. A random acceptable dinner is better than an optimal dinner that you never choose because you are too tired to decide.</p>

<p>The food picker is not a gimmick. It is a <strong>decision fatigue management tool</strong>. It works for the same reason that Barack Obama wore only gray and blue suits — eliminating low-stakes decisions preserves cognitive capacity for high-stakes decisions. Let the food picker choose dinner. Save your decision-making energy for the decisions that actually matter.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("Free station: 194->done.")