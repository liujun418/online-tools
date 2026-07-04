"""Add 6 blogs to free station (148→154) — July 4, 2026"""
import os, sys

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "free-translator-offline-vs-online",
    title: "Free Online Translator Offline vs Online When Each Translation Method Wins",
    description: "Online translators handle 100+ languages with neural models. Offline dictionaries work without internet. Here's when each approach produces better translations in real travel and work situations.",
    date: "2026-07-04",
    category: "Text Tools",
    tags: ["free translator", "offline translation", "online translation", "travel", "language learning"],
    relatedTools: ["translate", "case-converter", "text-to-slug"],
    content: `<p>You're in a rural market in Oaxaca, trying to ask a vendor if the cheese contains rennet (you're vegetarian). You pull out Google Translate. No signal. You switch to the offline Spanish dictionary you downloaded. It gives you "cuajo" for rennet — but the vendor uses an indigenous Zapotec word you've never heard. Neither tool fully solves your problem, but one gets you closer.</p>

<p>The <strong>online vs offline translation</strong> debate isn't about which is "better." It's about matching the tool to the situation — and most people use the wrong one at the wrong time.</p>

<h2>What Online Translators Do Best</h2>

<p>Online translators (Google Translate, DeepL, Bing Translator) run on <strong>neural machine translation models</strong> hosted on massive server farms. They process entire sentences as context units, not word-by-word. This means they: (1) handle idioms reasonably well — "it's raining cats and dogs" becomes the equivalent idiom in the target language, not a literal translation; (2) preserve grammatical gender and agreement across long sentences; and (3) support 100+ languages including low-resource languages with small training datasets.</p>

<p>Online translation wins for: <strong>documents and emails</strong> where you need full-sentence fluency, <strong>unfamiliar languages</strong> where you can't verify the output yourself, and <strong>rare language pairs</strong> (Finnish to Korean) where offline dictionaries barely exist.</p>

<h2>What Offline Translation Does Better</h2>

<p>Offline translation — downloaded dictionaries, phrasebooks, and on-device translation models — wins in specific scenarios: <strong>No internet:</strong> Airplane mode, remote areas, international data roaming off. An offline dictionary with 50,000 entries is infinitely more useful than the world's best neural model with zero bars of signal.</p>

<p><strong>Privacy:</strong> Your translation query never leaves your device. For business negotiations, legal documents, medical conversations — anything confidential — offline translation keeps your data local. Online translators process your text on their servers, and while Google claims not to use Translate queries for ad targeting, the data passes through their infrastructure.</p>

<p><strong>Speed:</strong> Offline lookup is instantaneous — no network latency, no API call, no "waiting for translation" spinner. For quick word lookups during a conversation, the 50ms local lookup beats the 500ms-2000ms network round trip every time.</p>

<h2>The Hybrid Strategy That Actually Works</h2>

<p>Download offline language packs for your destination before traveling. Use offline mode for quick word lookups and privacy-sensitive situations. Switch to online when you need full-sentence fluency or encounter a word your offline dictionary doesn't have. And for both: learn to read the output critically — no translator handles sarcasm, cultural references, or tone reliably.</p>

<p>For translating text between 100+ languages, use our <a href="/en/tools/translate">free online translator</a> with neural machine translation. For converting translated text to proper case, our <a href="/en/tools/case-converter">case converter</a> handles title case and sentence case. And for generating URL-friendly slugs from translated content, our <a href="/en/tools/text-to-slug">URL slug generator</a> creates clean permalinks.</p>
`,
  },
  {
    slug: "reaction-test-cognitive-decline-early-warning",
    title: "Reaction Test Cognitive Decline Early Warning What Slowing Reflexes Actually Signal",
    description: "Reaction time slows with age — but sudden changes can signal cognitive decline, sleep debt, or medication side effects. Here's how to use reaction tests as an early warning system.",
    date: "2026-07-04",
    category: "Fun & Media",
    tags: ["reaction test", "cognitive decline", "brain health", "reflexes", "early warning"],
    relatedTools: ["reaction-test", "stopwatch-and-timer", "scoreboard"],
    content: `<p>Your average reaction time to a visual stimulus is 215 milliseconds. Last month it was 210. Three months ago it was 205. The trend is slow — 10 milliseconds over three months — but it's consistent. Is this normal aging, or is something wrong?</p>

<p><strong>Reaction time</strong> is one of the most sensitive measures of brain function, and tracking it over time can reveal problems before you notice them in daily life. Here's what the numbers mean and when to pay attention.</p>

<h2>What's Normal for Your Age</h2>

<p>Simple visual reaction time (see a light, press a button) averages: <strong>20s: 190-200ms, 30s: 200-215ms, 40s: 215-230ms, 50s: 230-250ms, 60s: 250-270ms, 70s+: 270-300ms.</strong> These are population averages — individual baselines vary by 30-50ms. What matters is <strong>your personal trend</strong>, not the population number.</p>

<p>F1 drivers can react in 150-180ms. That's not "faster than normal humans" — it's the result of training anticipation, not raw reaction speed. They're not reacting faster; they're <strong>predicting better</strong>. Your reaction time test measures raw reaction, not anticipation, so don't compare yourself to Lewis Hamilton.</p>

<h2>When Slowing Reaction Time Is a Red Flag</h2>

<p>A gradual slowdown of 1-3ms per year after age 30 is <strong>normal aging</strong>. A sudden slowdown of 20-30ms over a month is <strong>not normal</strong> and can indicate: (1) <strong>sleep debt</strong> — just one night of poor sleep increases reaction time by 20-50ms, equivalent to being legally drunk in some jurisdictions; (2) <strong>medication side effects</strong> — antihistamines, benzodiazepines, and some blood pressure medications slow reaction time measurably; (3) <strong>early cognitive decline</strong> — a 2018 study in the journal Neurology found that reaction time slowing preceded other cognitive symptoms by 2-3 years in some patients; or (4) <strong>concussion recovery</strong> — reaction time is one of the last functions to return to baseline after a concussion, often lagging 2-4 weeks behind symptom resolution.</p>

<h2>How to Track Reaction Time Properly</h2>

<p><strong>Test at the same time of day.</strong> Reaction time varies by 10-15ms throughout the day — fastest in late morning, slowest in early morning and late evening. Pick a consistent time.</p>

<p><strong>Use the same device and test.</strong> Different screens have different input lag. Your phone touchscreen might have 50ms of latency; your laptop trackpad might have 30ms. The absolute number matters less than the trend on the same setup.</p>

<p><strong>Take the average of 5-10 trials.</strong> Single-trial reaction time is too noisy. A 10-trial average gives a reliable measure. Discard any trial where you anticipated the stimulus (reaction under 100ms is almost certainly anticipation, not reaction).</p>

<p><strong>Track weekly, not daily.</strong> Daily fluctuation is noise. Weekly averages over 3+ months reveal trends. If your 4-week moving average is consistently declining, mention it to your doctor.</p>

<p>For measuring your reaction time, use our <a href="/en/tools/reaction-test">reaction time test</a> with multi-trial averaging. For timing your test sessions consistently, our <a href="/en/tools/stopwatch-and-timer">stopwatch and timer</a> helps schedule regular testing. And for tracking scores over time, our <a href="/en/tools/scoreboard">scoreboard</a> records your history.</p>
`,
  },
  {
    slug: "bmi-calculator-body-fat-vs-bmi",
    title: "BMI Calculator Body Fat Percentage vs BMI Which Number Actually Predicts Health",
    description: "BMI labels athletes as obese and misses normal-weight obesity. Body fat percentage is harder to measure but far more useful. Here's how to use both numbers together.",
    date: "2026-07-04",
    category: "Calculators",
    tags: ["BMI calculator", "body fat percentage", "obesity", "health metrics", "body composition"],
    relatedTools: ["bmi-calculator", "calorie-calculator", "percentage-calculator"],
    content: `<p>Two people walk into a doctor's office. Person A: 5'10", 185 lbs, BMI 26.5 — "overweight." Person B: 5'10", 185 lbs, BMI 26.5 — "overweight." Same height, same weight, same BMI. But Person A has 12% body fat and deadlifts 400 pounds. Person B has 30% body fat and hasn't exercised in five years. Their <strong>health profiles are completely different</strong>, and BMI can't tell them apart.</p>

<p>This is BMI's fundamental flaw: it measures <strong>weight relative to height</strong>, not body composition. A better number — body fat percentage — is harder to get but tells you infinitely more.</p>

<h2>The Problem BMI Was Never Designed to Solve</h2>

<p>BMI was invented by Adolphe Quetelet, a Belgian mathematician, in the 1830s. He wasn't studying health — he was studying <strong>the "average man"</strong> as a statistical concept. BMI was designed to describe populations, not diagnose individuals. It was adopted by insurers and doctors in the 20th century because it's free and takes 5 seconds, not because it's accurate.</p>

<p>BMI's known failure modes: (1) <strong>athletes classified as overweight/obese</strong> — muscle is denser than fat, so muscular people score higher; (2) <strong>"normal-weight obesity"</strong> — people with BMI under 25 but body fat over 30% (about 20% of "normal weight" adults by some estimates); (3) <strong>elderly people classified as normal when they've lost dangerous amounts of muscle</strong> — sarcopenia (muscle loss) can keep BMI "healthy" while metabolic health deteriorates; (4) <strong>racial differences ignored</strong> — the same BMI corresponds to different body fat percentages in different ethnic groups (e.g., at BMI 25, South Asians average 5-7% higher body fat than Europeans).</p>

<h2>Body Fat Percentage: The Better Number</h2>

<p>Body fat percentage directly measures what BMI approximates. Healthy ranges: <strong>men: 10-20% (athletes 6-13%), women: 18-28% (athletes 14-20%).</strong> Above 25% for men and 32% for women is generally considered obese, regardless of BMI.</p>

<p>The problem: accurate body fat measurement requires equipment. DEXA scan (gold standard, $100-300 per scan), hydrostatic weighing (very accurate, hard to find), bioelectrical impedance (home scales, ±3-5% accuracy), and calipers (skill-dependent, ±3-5% with a trained operator). None of these are as quick or free as stepping on a scale.</p>

<h2>How to Use Both Numbers Together</h2>

<p><strong>Use BMI as a screening tool:</strong> If BMI is under 18.5 or over 30, investigate further. These extremes correlate with health risks even accounting for BMI's flaws.</p>

<p><strong>Use body fat percentage as the diagnostic tool:</strong> If BMI is in the gray zone (25-30), body fat percentage tells you whether you're muscular or overfat. Waist circumference adds another data point — over 40 inches for men or 35 inches for women indicates elevated risk regardless of BMI.</p>

<p><strong>Track trends, not single measurements:</strong> BMI increasing while body fat stays stable = you're gaining muscle. BMI stable while body fat increases = you're losing muscle and gaining fat (the worst combination).</p>

<p>For calculating your BMI, use our <a href="/en/tools/bmi-calculator">BMI calculator</a> with instant results. For estimating your daily energy needs based on body composition, our <a href="/en/tools/calorie-calculator">calorie calculator</a> factors in activity level. And for tracking percentage changes in your measurements, our <a href="/en/tools/percentage-calculator">percentage calculator</a> computes the math.</p>
`,
  },
  {
    slug: "css-minifier-vs-svg-minifier-performance",
    title: "CSS Minifier vs SVG Minifier Web Performance Pipeline Two Tools One Goal",
    description: "CSS minifiers strip whitespace from stylesheets. SVG minifiers strip metadata from vector graphics. Together they cut page weight — but the optimization strategies are completely different.",
    date: "2026-07-04",
    category: "Developer Tools",
    tags: ["CSS minifier", "SVG minifier", "web performance", "page speed", "minification"],
    relatedTools: ["css-minifier", "svg-minifier", "code-formatter"],
    content: `<p>Your website's Lighthouse score is 72. The "Reduce unused CSS" warning is yellow. Your SVG icon sprite is 47KB for 12 icons. You know minification helps, but <strong>CSS minification and SVG minification are completely different processes</strong> with different tools, different risks, and different payoffs. Running your SVG through a CSS minifier does nothing. Running your CSS through an SVG optimizer breaks your styles.</p>

<p>Here's what each tool actually does to your files, and how to use both in a performance pipeline.</p>

<h2>CSS Minification: Strip the Syntax, Keep the Meaning</h2>

<p>CSS minification is <strong>syntactic</strong> — it removes characters the browser doesn't need while preserving all functionality. The transformations: remove all comments (<code>/* This is a comment */</code>), remove whitespace (spaces, tabs, newlines), remove the last semicolon in each rule block (it's optional), shorten hex colors where possible (<code>#ffffff</code> → <code>#fff</code>), remove units from zero values (<code>0px</code> → <code>0</code>), and merge identical adjacent rules.</p>

<p>A well-minified CSS file is <strong>30-50% smaller</strong> than the original. On a 100KB stylesheet, that's 30-50KB saved — about 0.1 seconds of load time on a 4G connection. Not transformative for a single file, but across 5-10 stylesheets on a typical site, it adds up.</p>

<p>CSS minification is <strong>safe and lossless</strong>. The browser renders the minified CSS identically to the original. There's no reason not to minify CSS in production.</p>

<h2>SVG Minification: Optimize the Drawing Instructions</h2>

<p>SVG minification is <strong>structural</strong> — it optimizes the vector drawing instructions themselves. SVGs are XML files, and they accumulate bloat from: editor metadata (Adobe Illustrator adds 500+ bytes of generator comments and layer names), unused namespace declarations, unnecessary precision (path coordinates with 4 decimal places when 1 is visually identical), and redundant elements (groups that contain a single element, empty defs sections).</p>

<p>SVG optimization also performs <strong>lossy transformations</strong>: rounding path coordinates to fewer decimal places, converting basic shapes to paths (which can be smaller), merging paths, and removing invisible elements. These can change the visual output slightly if pushed too aggressively — a path rounded to 0 decimal places will visibly shift from the original.</p>

<p>A well-optimized SVG is <strong>20-70% smaller</strong> than the original. An Illustrator-exported icon that's 3KB can drop to 800 bytes. Across an icon set of 50 icons, that's 100KB+ saved — meaningful for page weight.</p>

<h2>Building the Pipeline</h2>

<p>In development: write readable CSS with comments and whitespace. Export SVGs from your design tool at default settings. <strong>In your build step:</strong> CSS minifier runs first (safe, lossless, can always run). SVG minifier runs second with conservative settings (2 decimal places for paths, remove metadata, keep viewBox). Test the optimized SVGs visually before deploying — a shifted icon is worse than a slightly larger icon.</p>

<p>For minifying your CSS, use our <a href="/en/tools/css-minifier">CSS minifier</a> for instant compression. For optimizing SVG icons and illustrations, our <a href="/en/tools/svg-minifier">SVG minifier</a> strips metadata and optimizes paths. And for formatting minified code back to readable form during debugging, our <a href="/en/tools/code-formatter">code formatter</a> handles CSS, JS, and HTML.</p>
`,
  },
  {
    slug: "regex-tester-vs-text-diff-pattern-vs-line",
    title: "Regex Tester vs Text Diff Pattern Matching vs Line-by-Line Comparison",
    description: "Regex testers find patterns across text. Text diff tools compare two texts line by line. They solve different problems — here's when to reach for each tool and why using the wrong one wastes hours.",
    date: "2026-07-04",
    category: "Developer Tools",
    tags: ["regex tester", "text diff", "pattern matching", "text comparison", "developer tools"],
    relatedTools: ["regex-tester", "text-diff", "url-encoder"],
    content: `<p>Your log file has 50,000 lines. You need to find all lines containing IP addresses that made more than 10 requests in a single second. A <strong>text diff tool</strong> can't do this — it compares two texts, it doesn't search within one text. A <strong>regex tester</strong> can find the pattern in seconds: <code>\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b</code>.</p>

<p>But if you have two versions of a configuration file and need to see exactly what changed between them, a regex tester is useless — you need a text diff. These two tools solve <strong>completely different problems</strong>, and developers waste hours using the wrong one.</p>

<h2>When Regex Wins: Finding, Extracting, Validating</h2>

<p>Regex (regular expressions) is a <strong>pattern-matching language</strong>. You describe a pattern, and the engine finds all matches in a text. Use regex when you need to: find all occurrences of a pattern across a large text (email addresses, phone numbers, IPs, dates in specific formats), extract specific data from structured text (pull all URLs from an HTML file, extract values from log entries), validate that text follows a format (is this a valid credit card number? is this a properly formatted API key?), or find-and-replace with pattern matching (replace all dates from MM/DD/YYYY to YYYY-MM-DD format).</p>

<p>Regex is for <strong>intra-document pattern matching</strong>. It answers "where in this text does pattern X appear?" and "what are all the matches of pattern X?"</p>

<h2>When Text Diff Wins: Comparing, Reviewing, Merging</h2>

<p>Text diff is for <strong>inter-document comparison</strong>. It answers "what changed between version A and version B?" Use text diff when you need to: review code changes in a pull request (what lines were added, deleted, or modified?), compare two configuration files (what settings differ between staging and production?), merge two versions of a document (combine changes from two editors who worked simultaneously), or verify that a transformation was applied correctly (compare the input and output of a data processing step).</p>

<p>Text diff operates on the <strong>line level</strong>. It doesn't understand patterns or semantics — it understands "this line exists in A but not B." This is exactly what you want for version comparison and exactly what you don't want for pattern search.</p>

<h2>The Wrong Tool Penalty</h2>

<p>Using regex to compare two files: you'd need to write a pattern that captures every possible change (additions, deletions, modifications, moved lines). This is effectively writing a diff algorithm in regex — which is theoretically impossible for arbitrary changes. Hours wasted.</p>

<p>Using text diff to find patterns: you'd need to manually scan the diff output line by line looking for IP addresses. On a 50,000-line file, this is 500+ pages of output. Days wasted.</p>

<p>For finding patterns in text, use our <a href="/en/tools/regex-tester">regex tester</a> with real-time match highlighting. For comparing two versions of any text, our <a href="/en/tools/text-diff">text diff tool</a> shows additions, deletions, and changes side by side. And for encoding special characters in your regex patterns, our <a href="/en/tools/url-encoder">URL encoder</a> handles percent encoding.</p>
`,
  },
  {
    slug: "history-of-measurement-systems-cubits-to-kg",
    title: "The Bizarre History of Measurement Systems From Egyptian Cubits to the Modern Kilogram",
    description: "The meter was defined as 1/10,000,000 of the distance from the equator to the North Pole. The kilogram was a platinum cylinder in Paris. How measurement evolved from body parts to universal constants.",
    date: "2026-07-04",
    category: "Reference",
    tags: ["measurement history", "metric system", "imperial units", "SI units", "unit converter"],
    relatedTools: ["unit-converter", "roman-numerals", "age-calculator"],
    content: `<p>In 1793, two French astronomers set out to measure the distance from the North Pole to the equator through Paris. They spent six years triangulating their way across France and Spain during the French Revolution, getting arrested multiple times (surveying equipment looks suspicious during wartime), and ultimately made a <strong>mathematical error</strong> that made the meter 0.2 millimeters too short. That slightly-wrong meter became the foundation of the entire metric system.</p>

<p>The history of measurement is a history of <strong>humans trying to agree on anything</strong> — and mostly failing for thousands of years. Here's how we got from body parts to universal constants.</p>

<h2>Body Parts: The Original Measurement System</h2>

<p>The <strong>cubit</strong> (ancient Egypt, ~3000 BCE): the length of the forearm from elbow to middle fingertip. About 52.5 cm, but every pharaoh had a different arm, so every construction project had a different cubit. The solution: a <strong>royal master cubit</strong> — a granite rod kept in the temple that all builders calibrated against. The first measurement standard.</p>

<p>The <strong>foot</strong> (ancient Rome): length of a human foot, standardized to about 29.6 cm under Emperor Augustus. Roman soldiers measured roads by counting paces (1 pace = 5 feet, 1,000 paces = 1 mile — literally "mille passus," a thousand paces). The Roman mile was about 1,480 meters, slightly shorter than the modern mile (1,609 meters).</p>

<p>The <strong>inch</strong> (medieval England): originally the width of a man's thumb. Standardized by King Edward II in 1324 as "three grains of barley, dry and round, placed end to end lengthwise." Agricultural standards were considered more reliable than royal thumbs.</p>

<h2>The French Revolution Gives Us the Metric System</h2>

<p>The metric system was born from the French Revolution's desire to <strong>rationalize everything</strong> — including measurements. Pre-revolutionary France had an estimated 250,000 different measurement units across the country. A "pound" in Paris was different from a "pound" in Marseille. Tax collection was chaos.</p>

<p>The new system was based on <strong>universal constants</strong>, not body parts or royal decrees: the meter = 1/10,000,000 of the distance from the equator to the North Pole (later refined), the gram = the mass of 1 cubic centimeter of water at 4°C, and the liter = 1,000 cubic centimeters. Everything derived from natural constants, not human anatomy.</p>

<p>France made the metric system <strong>mandatory in 1799</strong> and then spent the next 40 years failing to enforce it. People kept using the old units. Napoleon himself reportedly hated the metric system and rolled back some of its requirements.</p>

<h2>The Kilogram Problem</h2>

<p>From 1889 to 2019, the kilogram was defined by a <strong>physical object</strong>: a platinum-iridium cylinder stored in a vault outside Paris called "Le Grand K" (The Big K). The problem: over time, Le Grand K lost mass — about 50 micrograms over 100 years, roughly the weight of an eyelash. This meant the kilogram was <strong>literally getting lighter</strong>, and every measurement in science that depended on the kilogram was drifting with it.</p>

<p>In 2019, scientists redefined the kilogram using <strong>Planck's constant</strong> — a fundamental constant of quantum physics that cannot change. The kilogram is no longer a physical object. It's a mathematical relationship defined by the speed of light, Planck's constant, and the frequency of cesium atoms. Your kitchen scale is calibrated against quantum mechanics.</p>

<h2>Why the US Still Uses Imperial</h2>

<p>The US is one of three countries (with Myanmar and Liberia) that hasn't officially adopted the metric system. Congress actually <strong>did</strong> pass the Metric Conversion Act in 1975, making metric the "preferred system" — but made conversion voluntary. Without a mandate, industries that benefited from switching (pharmaceuticals, science, auto manufacturing) did; industries that didn't (construction, home cooking) didn't. The result: Americans learn two systems and convert between them constantly.</p>

<p>For converting between measurement systems, use our <a href="/en/tools/unit-converter">unit converter</a> with length, weight, temperature, and more. For understanding other historical numbering systems, our <a href="/en/tools/roman-numerals">Roman numerals converter</a> shows how Romans did math. And for calculating time spans across different calendar systems, our <a href="/en/tools/age-calculator">age calculator</a> handles exact date differences.</p>
`,
  },

];

export function getBlogPosts(): BlogPost[]"""

if old not in content:
    print("ERROR: marker not found!")
    sys.exit(1)

content = content.replace(old, new_blogs)
with open(BLOG_FILE, "w", encoding="utf-8") as f:
    f.write(content)
print("Free station: 6 blogs inserted (148 -> 154)")
