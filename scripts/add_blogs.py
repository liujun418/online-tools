"""Add 6 blogs to free station (100→106) — June 26, 2026"""
BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "dice-roller-probability-real-use-cases",
    title: "Dice Roller — When You Need More Than a Six-Sided Die (and Why Probability Matters)",
    description: "Dice aren't just for board games. From randomized decision-making to teaching probability, here's how an online dice roller beats shaking physical dice.",
    date: "2026-06-26",
    category: "Fun & Media",
    tags: ["dice roller", "online dice", "random dice", "probability", "DnD dice"],
    relatedTools: ["dice-roller", "random-number-generator", "coin-flip"],
    content: `
<p>You grab a d20 to decide who does the dishes. It rolls under the couch. You crawl under to retrieve it, and by the time you come back up, everyone has already forgotten what the roll was for. Physical dice have a retrieval cost that nobody talks about.</p>

<p>Our <a href="/en/tools/dice-roller">free online dice roller</a> handles d4 through d100 with one click — no crawling under furniture required. But beyond convenience, there are actual reasons an online roller beats physical dice for certain use cases.</p>

<h2>When physical dice fail</h2>

<p>Physical dice are not perfectly fair. Manufacturing tolerances mean some faces are slightly heavier than others. Casino dice are machined to tolerances within 0.0005 inches — your board game dice are not. Over thousands of rolls, cheap dice show measurable bias toward certain numbers.</p>

<p>Our <a href="/en/tools/dice-roller">dice roller</a> uses cryptographic randomness — every outcome is equally probable. For anything where fairness matters (settling disputes, running a classroom activity, picking a random student), a digital roller removes the "is this die loaded?" question entirely.</p>

<h2>Custom dice that physical dice can't match</h2>

<p>Need a d37? A d13? A d7? Physical dice beyond the standard set (d4, d6, d8, d10, d12, d20, d100) are specialty items that cost $15+ each — if they even exist. An online dice roller gives you any number of sides you want. Need a d47 for a weird game mechanic? Type "47" and roll. It is instant and free.</p>

<p>This matters for more than game design. Teachers use custom dice ranges for math exercises: "Roll a d50, multiply the result by 3, subtract 7." Each student gets a unique problem set. The <a href="/en/tools/random-number-generator">random number generator</a> works for arbitrary ranges, but the dice roller gives you the familiar dice metaphor with visual feedback.</p>

<h2>Multiple dice, simultaneous rolls</h2>

<p>Need to roll 4d6 and drop the lowest? That is a standard D&D stat-generation method. With physical dice, you roll four dice, scan for the lowest, mentally add the remaining three, and write down the result. Repeat six times. With an online roller, you click once and get all six ability scores pre-calculated.</p>

<p>This "roll multiple, drop lowest" pattern is common in tabletop gaming, and the mental math overhead is real. After your fourth character build, you start making addition errors. The online roller eliminates that.</p>

<h2>Teaching probability with actual data</h2>

<p>Tell a student "rolling a 7 on 2d6 is six times more likely than rolling a 12." They nod. Then have them roll 2d6 one hundred times — physically, that takes 10 minutes of tedious dice-throwing. With our <a href="/en/tools/dice-roller">dice roller</a>, it takes 30 seconds. The probability distribution emerges visually: 7 appears roughly 17% of the time, 12 appears roughly 3%. The concept sticks because they saw it happen, not because a textbook said so.</p>

<p><strong>One common mistake:</strong> people think "I rolled three 1s in a row, so the next roll is more likely to be a 6." This is the gambler's fallacy. Each roll is independent. The dice have no memory. If your brain refuses to accept this, roll a d6 one hundred times and count the streaks — you will see clusters of repeated numbers that feel "impossible" but are mathematically expected.</p>

<p>For coin flips instead of dice, our <a href="/en/tools/coin-flip">coin flip tool</a> gives you heads or tails with the same cryptographic randomness. And for a deeper look at randomness, see our guide to the <a href="/en/blog/random-number-generator-beyond-dice-rolls">random number generator's uses beyond dice and lotteries</a>.</p>
`,
  },
  {
    slug: "qr-code-scanner-web-vs-phone-app",
    title: "QR Code Scanner — Why a Browser Scanner Beats Downloading Yet Another App",
    description: "You see a QR code. You unlock your phone, find the camera app, frame it, wait, tap the notification. Or: open a browser tab, paste an image, done. Here's when each method wins.",
    date: "2026-06-26",
    category: "Developer",
    tags: ["QR code scanner", "scan QR online", "QR from image", "barcode scanner"],
    relatedTools: ["qr-code-scanner", "qr-code-generator", "barcode-generator"],
    content: `
<p>QR codes are everywhere — restaurant menus, event tickets, WiFi passwords, payment links, product packaging. And every time you see one, the ritual is the same: pull out your phone, open the camera, frame the code, hold steady, wait for the notification, tap it. It works, but it is about six steps too many when you are already sitting at a computer.</p>

<p>Our <a href="/en/tools/qr-code-scanner">QR code scanner</a> works in your browser — paste a screenshot, upload an image, or use your webcam. No app install, no phone handoff. Here is when each approach makes sense.</p>

<h2>The phone camera approach: good for physical-world scanning</h2>

<p>When you are standing in front of a QR code on a wall, a poster, or a product label, your phone camera is the right tool. It is already in your hand, the camera is already pointed at the code, and the scanning happens automatically. This is the use case QR codes were designed for, and it works well.</p>

<p>The friction comes when the QR code is <strong>on the screen you are already looking at</strong>. A Zoom call shares a QR code for a survey. A website shows a QR code to download an app. A PDF document has a QR code linking to supplementary materials. In all these cases, scanning with your phone means pointing a camera at a screen — which introduces glare, moire patterns, and focus hunting. The browser scanner bypasses all of that.</p>

<h2>The browser scanner approach: when the QR code is already on your screen</h2>

<p>Our <a href="/en/tools/qr-code-scanner">QR code scanner</a> supports three input methods:</p>

<p><strong>1. Screenshot paste:</strong> take a screenshot of the QR code (Win+Shift+S on Windows, Cmd+Shift+4 on Mac), paste it into the scanner with Ctrl+V. Done in 2 seconds. No phone involved.</p>

<p><strong>2. Image upload:</strong> if someone emailed you a QR code image or it is saved in a document, drag the file onto the scanner. Works for PNG, JPG, and WebP.</p>

<p><strong>3. Webcam scan:</strong> if you have a laptop with a camera, you can hold a physical QR code up to the webcam. This is the bridge between physical and digital — same convenience as a phone camera, but the result appears on your computer screen where you actually need it.</p>

<p>The killer feature of a browser scanner: the decoded content stays on your computer. A URL opens in your desktop browser, not your phone. A WiFi password can be copied and pasted into your network settings. A vCard contact gets saved to your desktop address book. No transferring data between devices.</p>

<h2>When phone scanning is actually worse</h2>

<ul>
<li><strong>Dark environments:</strong> phone cameras need light to focus on a QR code. If you are in a dimly lit conference room with a QR code on a projector screen, your phone camera will struggle. A screenshot from your laptop has perfect lighting.</li>
<li><strong>Small QR codes on screen:</strong> a QR code that is 100px wide on a webpage is too small for a phone camera to scan reliably from a normal viewing distance. Screenshot and paste into the browser scanner — it reads the pixels directly.</li>
<li><strong>Damaged or low-contrast QR codes:</strong> a QR code printed on a wrinkled receipt or a curved surface is hard for any scanner, but the browser scanner can apply image preprocessing that phone cameras skip.</li>
</ul>

<p>For generating QR codes instead of scanning them, our <a href="/en/tools/qr-code-generator">QR code generator</a> creates codes for URLs, WiFi, vCards, and more. And for creative QR code use cases, see our <a href="/en/blog/qr-code-7-creative-uses-beyond-urls">guide to 7 creative QR code uses beyond URLs</a>.</p>
`,
  },
  {
    slug: "barcode-generator-retail-logistics-guide",
    title: "Barcode Generator — EAN-13, UPC-A, Code 128, and When to Use Each Format",
    description: "Not all barcodes are the same. EAN-13 for retail, Code 128 for shipping, UPC-A for North America — here's which format your project actually needs.",
    date: "2026-06-26",
    category: "Developer",
    tags: ["barcode generator", "EAN-13", "UPC", "Code 128", "barcode formats"],
    relatedTools: ["barcode-generator", "qr-code-generator"],
    content: `
<p>You need a barcode. You search "barcode generator," see a dozen format options, and realize you have no idea which one to pick. EAN-13? UPC-A? Code 128? Code 39? They all look like vertical lines to the untrained eye, but picking the wrong format means your barcode will not scan at the point of sale, the warehouse, or the shipping depot.</p>

<p>Our <a href="/en/tools/barcode-generator">free barcode generator</a> supports all major formats. Here is which one you need for your specific situation.</p>

<h2>EAN-13: the global retail standard</h2>

<p>If you are selling a physical product that will be scanned at retail checkout counters anywhere outside North America, you need EAN-13. It is a 13-digit number (12 data digits + 1 check digit) that uniquely identifies your product in the global GS1 system.</p>

<p><strong>What you need:</strong> a GS1 company prefix (purchased from GS1 in your country). This prefix goes into the first digits of your barcode, followed by your product code, and the check digit is calculated automatically by our <a href="/en/tools/barcode-generator">barcode generator</a>.</p>

<p><strong>Do not guess EAN-13 numbers.</strong> If you make up a random 13-digit number, it might conflict with a real product in the global database. Retailers scan your barcode and get someone else's product listing. Buy a proper GS1 prefix — it costs $250-750 depending on how many products you need to identify.</p>

<h2>UPC-A: the North American equivalent</h2>

<p>UPC-A is the 12-digit barcode used in the United States and Canada. Functionally identical to EAN-13 (EAN-13 is a superset — UPC-A barcodes scan correctly on EAN-13 systems but not always vice versa). If you are selling only in North America, UPC-A is sufficient. If you might expand globally, start with EAN-13.</p>

<h2>Code 128: logistics, shipping, and internal tracking</h2>

<p>Code 128 is the workhorse of logistics. Unlike EAN-13 and UPC-A (which encode only numbers), Code 128 encodes letters, numbers, and some symbols. This makes it ideal for:</p>

<ul>
<li><strong>Shipping labels:</strong> tracking numbers that include letters (e.g., "1Z999AA10123456784")</li>
<li><strong>Inventory management:</strong> warehouse bin codes like "A12-B34-C56"</li>
<li><strong>Asset tracking:</strong> equipment IDs that mix letters and numbers</li>
<li><strong>Healthcare:</strong> patient wristbands, specimen labels, medication tracking</li>
</ul>

<p>Code 128 is <strong>denser</strong> than Code 39 — it packs more data into less horizontal space. If your barcode needs to fit on a small label, Code 128 is the right choice. Our <a href="/en/tools/barcode-generator">barcode generator</a> handles Code 128 with automatic check digit calculation.</p>

<h2>Code 39: the older, simpler alternative</h2>

<p>Code 39 is older than Code 128 and encodes fewer characters (only uppercase A-Z, 0-9, and a handful of symbols). It takes more space per character. You still see it on government ID cards, military equipment, and automotive parts because these industries standardized on it decades ago and never migrated.</p>

<p><strong>Use Code 39 only if:</strong> your industry requires it for compliance, or your scanning hardware is old enough that it only supports Code 39 (rare in 2026, but still happens in some industrial settings).</p>

<h2>QR code vs barcode: when to use which</h2>

<p>Barcodes are 1D — a line scanner reads them in one pass. QR codes are 2D — a camera reads them from any angle. Barcodes hold 12-50 characters; QR codes hold up to 4,000. Use a barcode when you need fast, single-direction scanning at checkout or on a conveyor belt. Use a <a href="/en/tools/qr-code-generator">QR code</a> when you need to encode a URL, contact info, WiFi credentials, or more data than fits in a barcode.</p>

<p><strong>Common mistake:</strong> printing a barcode too small. The minimum width for reliable scanning is about 1.5 inches for a 12-digit UPC-A. Smaller than that, and budget scanners cannot resolve the individual bars. Test your barcode with the actual scanner hardware your warehouse or retail partner uses — not just your phone.</p>

<p>For a comparison of barcode versus QR code technologies and when each makes sense, see our <a href="/en/blog/qr-code-scanner-web-vs-phone-app">QR code scanner comparison guide</a>.</p>
`,
  },
  {
    slug: "emi-calculator-real-loan-examples",
    title: "EMI Calculator — How Much That 'Affordable' Monthly Payment Actually Costs You Over 5 Years",
    description: "A ₹20,000 monthly EMI sounds manageable until you realize you are paying ₹3.2 lakh in interest. Here's how to use an EMI calculator to see the real cost before signing.",
    date: "2026-06-26",
    category: "Calculator",
    tags: ["EMI calculator", "loan EMI", "monthly installment", "interest calculation", "car loan"],
    relatedTools: ["emi-calculator", "loan-calculator", "mortgage-calculator"],
    content: `
<p>A salesperson tells you the EMI is only ₹18,500 per month. For a car that costs ₹9 lakh. For 5 years. It sounds reasonable — ₹18,500 is less than your monthly rent. What they do not emphasize: over 5 years, you will pay approximately ₹11.1 lakh for a ₹9 lakh car. That is ₹2.1 lakh in interest — enough to buy a second-hand scooter.</p>

<p>Our <a href="/en/tools/emi-calculator">free EMI calculator</a> shows you the total interest before you sign anything. Here is how to use it for real financial decisions, not just "plug in numbers and nod."</p>

<h2>How EMI math actually works</h2>

<p>EMI stands for Equated Monthly Installment. The formula is:</p>

<pre><code class="language-text">EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)</code></pre>

<p>Where P is the principal (loan amount), r is the monthly interest rate (annual rate ÷ 12 ÷ 100), and n is the number of months. The key insight: <strong>early payments are mostly interest, not principal</strong>. In month 1 of a 5-year car loan at 9%, roughly 70% of your EMI goes to interest and only 30% reduces your debt.</p>

<p>Our <a href="/en/tools/emi-calculator">EMI calculator</a> shows you the full amortization schedule — month by month, you can see exactly how much of each payment is interest versus principal. Most people are shocked by the first few rows.</p>

<h2>Three real scenarios where the EMI calculator saves you money</h2>

<p><strong>Scenario 1: The "low EMI" trap.</strong> A bank offers you two options for a ₹15 lakh home loan at 8.5%: 20-year tenure at ₹13,000/month, or 15-year tenure at ₹14,800/month. The 20-year option looks cheaper — it saves ₹1,800 per month! But over the full term, the 20-year loan costs ₹31.2 lakh total. The 15-year loan costs ₹26.6 lakh. That "cheaper" EMI costs you ₹4.6 lakh extra in interest. The EMI calculator makes this visible immediately.</p>

<p><strong>Scenario 2: Prepayment impact.</strong> You have a ₹10 lakh loan at 10% for 5 years. Your EMI is ₹21,247. After 12 months, you get a ₹1 lakh bonus and put it toward the loan. Should you reduce the EMI or reduce the tenure? Reducing tenure saves more interest — you pay off the loan faster, so interest accrues for fewer months. The EMI calculator shows both options side by side.</p>

<p><strong>Scenario 3: Rate shopping.</strong> Bank A offers 8.5%, Bank B offers 8.2%. The difference sounds tiny — 0.3%! On a ₹20 lakh, 10-year loan, that 0.3% difference is ₹41,000 in total interest. The EMI calculator turns abstract rate comparisons into concrete rupee amounts.</p>

<h2>What the EMI calculator does not tell you</h2>

<p><strong>Processing fees:</strong> most banks charge 0.5-1% of the loan amount as a processing fee. On a ₹20 lakh loan, that is ₹10,000-20,000 upfront. Add it to your cost comparison.</p>

<p><strong>Prepayment penalties:</strong> some loans charge 2-4% on prepayment amounts. If you plan to prepay (and you should), check whether your loan has prepayment penalties. Floating rate loans in India typically do not; fixed rate loans often do.</p>

<p><strong>Floating vs fixed rate risk:</strong> the EMI calculator assumes a constant rate. If you take a floating rate loan and RBI raises rates, your EMI goes up — or your tenure extends. The calculator gives you a snapshot at current rates, not a guarantee.</p>

<p>For comparing EMI loans against other loan types, our <a href="/en/tools/loan-calculator">loan calculator</a> handles simple interest loans, and the <a href="/en/tools/mortgage-calculator">mortgage calculator</a> covers home loans with PMI and property taxes. For the deeper comparison, see our <a href="/en/blog/mortgage-vs-loan-calculator-comparison">mortgage versus loan calculator comparison</a>.</p>
`,
  },
  {
    slug: "food-picker-decision-fatigue-solved",
    title: "Food Picker — What It Reveals About Decision Fatigue and Why Random Choice Is Sometimes Better",
    description: "You and your partner have spent 20 minutes deciding where to eat. A food picker solves this in 2 seconds. But there's actual psychology behind why random choice beats deliberation for low-stakes decisions.",
    date: "2026-06-26",
    category: "Fun & Media",
    tags: ["food picker", "what to eat", "decision fatigue", "random choice", "food decision"],
    relatedTools: ["food-picker", "random-number-generator", "coin-flip"],
    content: `
<p>You ask your partner what they want for dinner. "I don't know, what do you want?" This exchange repeats three times. Twenty minutes later, you order from the same place you always order from, and neither of you is happy about it. This is decision fatigue — and a food picker solves it in two seconds.</p>

<p>Our <a href="/en/tools/food-picker">free food picker</a> randomly selects a meal from a customizable list. It sounds trivial. But the reason it works is not trivial at all — it is grounded in how human brains handle (and fail to handle) repeated low-stakes decisions.</p>

<h2>What decision fatigue actually is</h2>

<p>Psychologists have studied decision fatigue since the 1990s. The core finding: <strong>every decision you make depletes a shared mental resource</strong>. Choosing what to wear, which email to answer first, what to eat for lunch — these all draw from the same reservoir of decision-making energy. By dinner time, you have made hundreds of micro-decisions, and your brain is looking for shortcuts.</p>

<p>That is why you default to the same takeout place every night. It is not that you love their pad thai that much — it is that choosing something new requires mental energy you no longer have. The food picker removes the decision entirely, which is exactly what your tired brain wants.</p>

<h2>When random choice beats deliberation</h2>

<p>Random choice is superior to deliberation when three conditions are met:</p>

<ol>
<li><strong>The stakes are low.</strong> A bad dinner is disappointing but not catastrophic. You can afford to be wrong.</li>
<li><strong>The options are roughly equal.</strong> If you genuinely cannot decide between pizza and sushi, they are probably both acceptable outcomes. If one option would make you miserable, remove it from the list.</li>
<li><strong>The cost of deciding exceeds the cost of a suboptimal outcome.</strong> Spending 20 minutes deciding on dinner costs you 20 minutes of your evening. A suboptimal dinner costs you mild disappointment. The math favors random choice.</li>
</ol>

<p>Our <a href="/en/tools/food-picker">food picker</a> enforces condition 2 by making you customize the list first. Remove the options you genuinely dislike. What remains is your "acceptable outcome" set — any result from this set is fine. The random pick is now guaranteed to be at least acceptable.</p>

<h2>Beyond food: other decisions to randomize</h2>

<p>The food picker pattern applies to any low-stakes, roughly-equal decision:</p>

<ul>
<li><strong>What movie to watch:</strong> you and your partner scroll Netflix for 30 minutes, watch nothing, go to bed. Put 5 options in a list, randomize, watch whatever comes up. Even a mediocre movie is better than 30 minutes of scrolling.</li>
<li><strong>Which workout to do:</strong> you have 5 workout routines you tolerate equally. Randomize. The decision is made before you can talk yourself out of exercising.</li>
<li><strong>Which task to tackle first:</strong> you have 6 equally important tasks. Instead of deliberating for 10 minutes, randomize and start. Momentum beats prioritization for small task lists.</li>
<li><strong>Where to go on a weekend trip:</strong> you and your friends have 4 destinations nobody objects to. Randomize. The trip will be fun regardless of which one is chosen — but only if a choice actually gets made.</li>
</ul>

<p><strong>The caveat:</strong> randomization only works if you commit to the result before you see it. If you randomize, get "pizza," and immediately think "actually I want sushi instead," the problem was never indecision — it was that you already knew what you wanted and were avoiding admitting it. In that case, just order the sushi.</p>

<p>For more randomization tools, our <a href="/en/tools/coin-flip">coin flip</a> handles binary decisions and our <a href="/en/tools/random-number-generator">random number generator</a> handles numeric ranges. And for a broader look at randomness in decision-making, see our guide on <a href="/en/blog/random-number-generator-beyond-dice-rolls">random number generators beyond dice rolls</a>.</p>
`,
  },
  {
    slug: "hash-generator-sha256-md5-real-world-guide",
    title: "Hash Generator — SHA-256, MD5, and What 'One-Way Encryption' Actually Means",
    description: "Hashing sounds like encryption but isn't. Here's the difference, why MD5 is dead, and where SHA-256 actually matters in your daily digital life.",
    date: "2026-06-26",
    category: "Developer",
    tags: ["hash generator", "SHA-256", "MD5", "checksum", "one-way encryption"],
    relatedTools: ["hash-generator", "password-generator", "uuid-generator"],
    content: `
<p>You download a software installer. The download page shows a long string of letters and numbers labeled "SHA-256 checksum." You ignore it and click install. Most people do. But that string is the only thing standing between you and a tampered installer that contains malware.</p>

<p>Our <a href="/en/tools/hash-generator">free hash generator</a> creates SHA-256, MD5, SHA-1, and other hash values from any text or file. Here is what hashing actually does, why it is not encryption, and where it matters in ways you might not expect.</p>

<h2>Hashing vs encryption: the one-way street</h2>

<p>Encryption is two-way: you encrypt data with a key, and you decrypt it with a key. If you have the key, you can recover the original message. Hashing is one-way: you put data in, you get a fixed-length string out, and <strong>there is no mathematical way to recover the original input from the output</strong>.</p>

<p>This is why websites store hashed passwords, not encrypted passwords. If a database is breached, the attacker gets <code>5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8</code> — the SHA-256 hash of "password" — instead of "password" itself. They cannot reverse the hash to get the original. They have to guess passwords, hash each guess, and compare. That is why "password" is a terrible password — it is the first thing attackers guess.</p>

<h2>SHA-256: the current standard</h2>

<p>SHA-256 (Secure Hash Algorithm, 256-bit output) is the most widely used secure hash function. It produces a 64-character hexadecimal string. It is used in:</p>

<ul>
<li><strong>Blockchain:</strong> Bitcoin uses double SHA-256 for proof-of-work mining and transaction verification.</li>
<li><strong>TLS/SSL certificates:</strong> the padlock icon in your browser relies on SHA-256 to verify that the website you are connecting to is the real one, not an imposter.</li>
<li><strong>File integrity verification:</strong> when you download Linux ISOs, software installers, or firmware updates, the SHA-256 checksum confirms the file was not corrupted or tampered with during download.</li>
<li><strong>Git commits:</strong> every commit in a Git repository is identified by a SHA-1 hash (Git is migrating to SHA-256). The hash uniquely identifies the exact state of the code at that point in time.</li>
</ul>

<p>Our <a href="/en/tools/hash-generator">hash generator</a> computes SHA-256 instantly. Paste your text or upload a file, and you get the hash. Compare it to the published checksum — if they match, your download is intact.</p>

<h2>MD5: why it is dead (but still everywhere)</h2>

<p>MD5 produces a 32-character hexadecimal hash. It was designed in 1991 and was broken in 2004 — researchers found a way to create two different files with the same MD5 hash (a "collision"). This means an attacker could create a malicious file that has the same MD5 checksum as a legitimate file.</p>

<p>Despite being cryptographically broken, MD5 is still used for non-security purposes:</p>

<ul>
<li><strong>Deduplication:</strong> comparing files by MD5 hash is fast. If two files have the same MD5, they are probably identical. This is fine for finding duplicate photos, not for verifying downloads.</li>
<li><strong>Cache keys:</strong> some systems use MD5 hashes of URLs or query parameters as cache keys. Speed matters more than collision resistance here.</li>
<li><strong>Legacy systems:</strong> older software that has not been updated still uses MD5 for password hashing. If your website still uses MD5 for passwords, stop everything and fix that first.</li>
</ul>

<p><strong>Rule of thumb:</strong> use SHA-256 for anything security-related. Use MD5 only for non-security tasks where speed matters more than collision resistance. And never use SHA-1 — it was broken in 2017 and should be treated the same as MD5.</p>

<h2>Real-world hash verification workflow</h2>

<ol>
<li>Download a file (software installer, ISO, firmware).</li>
<li>The download page shows a SHA-256 checksum: <code>a1b2c3d4...</code></li>
<li>Upload the downloaded file to our <a href="/en/tools/hash-generator">hash generator</a> (or paste text content).</li>
<li>Select SHA-256, generate the hash.</li>
<li>Compare character by character. If they match exactly, the file is authentic and undamaged. If even one character differs, the file was either corrupted during download or tampered with.</li>
</ol>

<p>For generating secure passwords that produce strong hashes, our <a href="/en/tools/password-generator">password generator</a> creates cryptographically random credentials. And for unique identifiers that are not hashes, see our <a href="/en/tools/uuid-generator">UUID generator</a>.</p>
`,
  },

];

export function getBlogPosts(): BlogPost[]"""

if old in content:
    content = content.replace(old, new_blogs)
    with open(BLOG_FILE, "w", encoding="utf-8") as f:
        f.write(content)
    print("OK: 6 blogs inserted into free station blog.ts")
else:
    print("ERROR: insertion marker not found")
    idx = content.rfind("];")
    print(f"Last '];' at index: {idx}")
    print(content[idx-100:idx+100])
