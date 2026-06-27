"""Add 6 blogs to free station (106→112) — June 27, 2026"""
BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "coin-flip-beyond-heads-or-tails",
    title: "Coin Flip — 6 Situations Where a Virtual Coin Toss Is Actually the Smartest Decision Tool",
    description: "Flipping a coin sounds like giving up on deciding. But for certain decisions, randomization is genuinely the optimal strategy. Here's when and why.",
    date: "2026-06-27",
    category: "Fun & Media",
    tags: ["coin flip", "random decision", "coin toss", "decision making"],
    relatedTools: ["coin-flip", "random-number-generator", "food-picker"],
    content: `
<p>You are stuck between two choices. Neither is obviously better. You have been going back and forth for 20 minutes. Someone says "just flip a coin" — and you immediately think "no, I want option A." Congratulations, the coin flip just revealed your actual preference without ever being tossed.</p>

<p>Our <a href="/en/tools/coin-flip">free coin flip tool</a> does more than settle bar bets. It exposes hidden preferences, breaks analysis paralysis, and — when used correctly — produces better outcomes than deliberation for a specific class of decisions. Here is the surprisingly useful psychology behind a simple heads-or-tails.</p>

<h2>The coin flip that reveals your preference</h2>

<p>Assign option A to heads, option B to tails. Flip the coin. Before you look at the result, pay attention to what you are hoping for. If you find yourself thinking "please be heads," you already know your preference. The coin did not decide — it revealed what you already wanted but could not admit.</p>

<p>This is the most useful application of a coin flip, and it costs nothing. The act of externalizing the decision — giving it to the coin — forces your brain to take a side. Before the flip, both options were abstract. After assigning them to heads and tails, one of them is about to become real, and your emotional reaction tells you which one you actually want.</p>

<h2>When random choice beats careful deliberation</h2>

<p>Psychologists have studied this. For decisions where the options are roughly equal in quality, random choice produces <strong>higher satisfaction</strong> than deliberation. The reason: deliberation amplifies regret. When you deliberate for 30 minutes and pick the wrong restaurant, you are annoyed — you invested time and still got a bad outcome. When you flip a coin and get the wrong restaurant, you shrug — the coin picked it, not you. Lower emotional investment, lower regret.</p>

<p>This only works when three conditions are met: (1) the options are genuinely close in quality, (2) the stakes are low to moderate, and (3) you commit to the result before flipping. If you flip, get tails, and immediately say "best two out of three," you were never going to accept the coin's decision — and the problem was not indecision, it was avoidance.</p>

<h2>Practical uses beyond "what to eat"</h2>

<p><strong>Meeting agenda order:</strong> two topics are equally urgent. Instead of debating for 10 minutes which to discuss first, flip a coin. The meeting starts 10 minutes earlier, and both topics get covered either way.</p>

<p><strong>Hiring tiebreaker:</strong> two candidates are equally qualified after interviews. You have spent three hours debating. Flip a coin. If your gut screams "no, not that one" when the result lands, you just identified your actual preference. Hire the other candidate.</p>

<p><strong>Vacation destination:</strong> you and your partner narrowed it to two places. Neither of you wants to be the one who "picked" in case the trip has bad weather or a disappointing hotel. Flip a coin. Now the coin is responsible, not either of you. This is not avoidance — it is relationship maintenance.</p>

<p><strong>Workout selection:</strong> you have two workout routines you tolerate equally. Instead of spending 5 minutes deciding, flip. The decision is made before you can talk yourself out of exercising entirely.</p>

<p><strong>Creative block breaker:</strong> two design directions, two writing angles, two code approaches. Flip a coin and start building the one that comes up. Forward momentum beats perfect direction for creative work. You can always switch later — but you cannot switch from "did not start."</p>

<p><strong>One caveat:</strong> do not flip a coin for high-stakes, irreversible decisions. Surgery, career changes, large financial commitments — these deserve deliberation, not randomization. The coin flip is for the 80% of daily decisions where the cost of deciding exceeds the cost of a suboptimal outcome.</p>

<p>For more sophisticated randomization, our <a href="/en/tools/random-number-generator">random number generator</a> handles ranges, and our <a href="/en/tools/food-picker">food picker</a> handles multi-option meal decisions. For a deeper look at decision fatigue, see our <a href="/en/blog/food-picker-decision-fatigue-solved">guide to how a food picker solves decision fatigue</a>.</p>
`,
  },
  {
    slug: "url-encoder-when-percent-20-matters",
    title: "URL Encoder — Why Your Link Broke and How %20, %23, and %26 Fix It",
    description: "You paste a URL into an email and it breaks at the first space. URL encoding fixes that — and understanding it prevents a surprising number of everyday web annoyances.",
    date: "2026-06-27",
    category: "Developer",
    tags: ["URL encoder", "percent encoding", "URL decode", "encode URL"],
    relatedTools: ["url-encoder", "text-to-slug", "html-entities"],
    content: `
<p>You copy a link from your browser, paste it into an email, and the link breaks. The URL had spaces in it, or a # symbol, or an & that got interpreted as an HTML entity. What should have been a working link is now a broken string of text that goes nowhere.</p>

<p>Our <a href="/en/tools/url-encoder">free URL encoder</a> converts unsafe characters into percent-encoded equivalents that work everywhere — in emails, in code, in APIs, in database queries. Here is what URL encoding actually does and where it matters in your daily digital life.</p>

<h2>What characters break URLs (and why)</h2>

<p>A URL can only safely contain a limited set of characters: letters (A-Z, a-z), digits (0-9), and a handful of special characters (hyphen, underscore, period, tilde). Everything else — spaces, symbols, non-ASCII characters, even some punctuation — must be percent-encoded.</p>

<p>The encoding is simple: <code>%</code> followed by the character's hexadecimal ASCII code. A space becomes <code>%20</code>. A # becomes <code>%23</code>. An & becomes <code>%26</code>. A ? becomes <code>%3F</code>. The <code>%</code> tells the browser "the next two characters are a hex code, interpret them as the original character."</p>

<p><strong>Common breakage scenarios:</strong></p>
<ul>
<li><strong>Spaces in filenames:</strong> "my report.pdf" in a URL becomes "my%20report.pdf." If you skip encoding, the space terminates the URL at "my" and everything after is lost.</li>
<li><strong>& in query parameters:</strong> <code>?name=Tom&Jerry</code> — the & splits the query string, so the server sees name=Tom and Jerry as a separate (invalid) parameter. Encode the &: <code>?name=Tom%26Jerry</code>.</li>
<li><strong># in URLs:</strong> the # character starts a fragment identifier. <code>/page#section</code> means "go to /page, then scroll to #section." If your actual content includes #, encode it as %23.</li>
<li><strong>Non-ASCII characters:</strong> Chinese characters, emoji, accented letters — these are encoded as UTF-8 byte sequences, each byte prefixed with %. "café" becomes "caf%C3%A9."</li>
</ul>

<h2>URL encoding vs slug generation: different tools, different jobs</h2>

<p>URL encoding makes a string safe for use in a URL. Slug generation converts a human-readable title into a clean, SEO-friendly URL path segment. They solve different problems:</p>

<ul>
<li><strong>URL encoding:</strong> "Hello World & Friends!" → "Hello%20World%20%26%20Friends%21" — preserves every character, just makes them URL-safe. Use this for query parameters, API calls, and any situation where you need the original string to survive a round-trip through a URL.</li>
<li><strong>Slug generation:</strong> "Hello World & Friends!" → "hello-world-friends" — strips punctuation, lowercases, replaces spaces with hyphens. Use this for blog post URLs, page paths, and SEO-friendly permalinks.</li>
</ul>

<p>Our <a href="/en/tools/url-encoder">URL encoder</a> handles the first case — encode and decode with one click. Our <a href="/en/tools/text-to-slug">URL slug generator</a> handles the second — convert titles to clean URL paths. Use the right tool for the right job.</p>

<h2>Real situations where URL encoding saves you</h2>

<p><strong>API calls with user input:</strong> a user types "AC/DC" into a search box. Your frontend sends <code>/api/search?q=AC/DC</code>. The slash in "AC/DC" breaks the URL path. Encode the query: <code>/api/search?q=AC%2FDC</code>. Now it works.</p>

<p><strong>Email links with special characters:</strong> you email a link to <code>example.com/file?name=report (final).pdf</code>. The parentheses and space break the link in most email clients. Encode: <code>example.com/file?name=report%20(final).pdf</code>. The link survives.</p>

<p><strong>Database storage of URLs:</strong> storing raw URLs in a database is fine — until someone inserts a URL with a % that is not percent-encoding. Double-encoding happens: %20 becomes %2520. Always decode before displaying and encode before storing.</p>

<p>For encoding HTML entities instead of URL characters, our <a href="/en/tools/html-entities">HTML entities converter</a> handles &amp;, &lt;, &gt; and more. And for clean URL slugs, see our <a href="/en/blog/url-slug-best-practices-seo-guide">URL slug best practices SEO guide</a>.</p>
`,
  },
  {
    slug: "bmi-calculator-what-the-number-actually-means",
    title: "BMI Calculator — What That Number Actually Tells You (and What It Definitely Doesn't)",
    description: "BMI says you are 'overweight.' But are you actually unhealthy? Here's what BMI measures, what it misses, and why athletes and bodybuilders consistently 'fail' it.",
    date: "2026-06-27",
    category: "Calculator",
    tags: ["BMI calculator", "body mass index", "BMI meaning", "health metrics"],
    relatedTools: ["bmi-calculator", "calorie-calculator", "age-calculator"],
    content: `
<p>You type your height and weight into a BMI calculator. The result says 27.3 — "overweight." You go to the gym four times a week, your blood work is perfect, and you can run a 5K without stopping. What gives?</p>

<p>Our <a href="/en/tools/bmi-calculator">free BMI calculator</a> gives you the number instantly. But understanding what that number means — and what it definitely does not mean — is the difference between useful health information and unnecessary anxiety. Here is the honest, no-hype explanation.</p>

<h2>What BMI actually measures</h2>

<p>BMI (Body Mass Index) is weight in kilograms divided by height in meters squared. That is it. It is a <strong>population-level screening tool</strong>, not an individual health diagnosis. It was invented in the 1830s by a Belgian mathematician (not a doctor) named Adolphe Quetelet, who was studying "the average man" — not individual health.</p>

<p>The formula was designed to estimate obesity prevalence across populations of thousands, not to tell any single person whether they are healthy. Using BMI as an individual health metric is like using average rainfall to decide whether to water your specific plant today — it is directionally informative but misses most of what matters.</p>

<h2>What BMI misses completely</h2>

<p><strong>Muscle vs fat:</strong> BMI cannot distinguish between muscle and fat. A 5'10", 210-pound bodybuilder with 12% body fat has a BMI of 30.1 — "obese." The same BMI as a sedentary person of the same height and weight with 35% body fat. These two people have radically different health profiles, but BMI treats them identically.</p>

<p><strong>Fat distribution:</strong> where fat is stored matters more than how much. Visceral fat (around organs, in the abdomen) is strongly linked to metabolic disease. Subcutaneous fat (under the skin, on hips and thighs) is much less concerning. BMI does not know where your fat is.</p>

<p><strong>Age, sex, and ethnicity:</strong> the same BMI means different things for a 25-year-old man versus a 65-year-old woman versus a South Asian person (who tend to develop metabolic issues at lower BMIs than European populations). BMI uses one scale for everyone, which is why it is a screening tool, not a diagnostic tool.</p>

<h2>When BMI is actually useful</h2>

<p>Despite its limitations, BMI is useful for:</p>

<ul>
<li><strong>Population studies:</strong> tracking obesity rates across countries and decades. The individual inaccuracies average out over millions of people.</li>
<li><strong>Identifying extremes:</strong> a BMI under 16 or over 40 reliably indicates a health issue that needs attention, regardless of muscle mass or body composition.</li>
<li><strong>Starting a conversation:</strong> a BMI outside the normal range is a reason to check other metrics — waist circumference, blood pressure, blood sugar, cholesterol — not a diagnosis by itself.</li>
</ul>

<p><strong>What to do instead of obsessing over BMI:</strong> track your waist-to-height ratio (waist circumference should be less than half your height), your resting heart rate, your blood work (A1C, lipids, liver enzymes), and — most importantly — how you feel during daily activities. Can you climb stairs without getting winded? Can you carry groceries without back pain? These functional measures matter more than a single number from an 1830s formula.</p>

<p>For tracking calorie intake alongside BMI, our <a href="/en/tools/calorie-calculator">calorie calculator</a> estimates daily energy needs. And for a broader perspective on health metrics, see our <a href="/en/blog/calorie-calculator-vs-fitness-apps">calorie calculator versus fitness apps comparison</a>.</p>
`,
  },
  {
    slug: "text-diff-compare-code-like-a-pro",
    title: "Text Diff Tool — Compare Code, Contracts, and Config Files Without Squinting at Two Windows",
    description: "Spotting the one changed line in a 500-line config file by eye is impossible. A text diff tool highlights every insertion, deletion, and modification instantly.",
    date: "2026-06-27",
    category: "Developer",
    tags: ["text diff", "compare text", "code diff", "file comparison"],
    relatedTools: ["text-diff", "code-formatter", "json-formatter"],
    content: `
<p>You changed one setting in a 300-line YAML config file. The deploy failed. You need to find what changed, but you did not commit the original version, and scrolling through two windows side by side looking for differences is making your eyes cross. You will miss the change — humans are terrible at spotting small differences in large blocks of similar text.</p>

<p>Our <a href="/en/tools/text-diff">free text diff tool</a> compares two text blocks and highlights every addition, deletion, and modification — line by line, word by word. Here is how to use it for the three most common real-world scenarios.</p>

<h2>Scenario 1: Finding what broke the deploy</h2>

<p>You have the working config file and the broken config file. Paste both into the <a href="/en/tools/text-diff">text diff tool</a> — original on the left, modified on the right. The tool highlights added lines in green, removed lines in red, and modified lines with inline character differences.</p>

<p>In 2 seconds, you see: line 47, <code>port: 5432</code> changed to <code>port: 5342</code>. That is the typo. You would have scanned past that 10 times in a manual comparison. The diff tool catches it instantly because it compares character by character, not impression by impression.</p>

<h2>Scenario 2: Reviewing a contract revision</h2>

<p>A client sends back a revised contract. They say they "just fixed a few typos." You need to know if they changed anything substantive before you sign. Paste the original contract and the revised version into the diff tool.</p>

<p>The tool shows: paragraph 8, sentence 3, "within 30 days" changed to "within 14 days." That is not a typo — that is a payment term change. The diff tool is a legal review assistant that costs nothing and misses nothing. For contracts, NDAs, terms of service, and any document where small wording changes have large consequences, a diff is essential.</p>

<h2>Scenario 3: Debugging CSS or configuration drift</h2>

<p>Your staging environment works. Production does not. The code is identical — so the difference must be in configuration. Paste the staging config and the production config into the diff tool. Line 23: <code>NODE_ENV=staging</code> vs <code>NODE_ENV=production</code>. Line 89: <code>CACHE_TTL=3600</code> vs <code>CACHE_TTL=60</code>. Two differences found in 5 seconds. Without a diff tool, you would have compared these files manually for 20 minutes and probably missed the CACHE_TTL difference.</p>

<h2>When manual comparison works better</h2>

<p>For files under 20 lines, manual comparison is faster than opening a diff tool. For files where the structure has changed completely (a full rewrite, not a modification), the diff will show every line as changed — which is technically correct but useless. Diff tools work best when the two versions are 80%+ identical and you need to find the 20% that changed.</p>

<p><strong>A common mistake:</strong> comparing files with different indentation or formatting. If one version uses tabs and the other uses spaces, every line will show as different. Run both files through our <a href="/en/tools/code-formatter">code formatter</a> first to normalize indentation and formatting, then diff them. You will get meaningful results instead of whitespace noise.</p>

<p>For formatting JSON before comparing, our <a href="/en/tools/json-formatter">JSON formatter</a> standardizes indentation. And for a guide to online developer tools, see our <a href="/en/blog/code-formatter-vs-prettier-vs-ide">code formatter versus Prettier versus IDE comparison</a>.</p>
`,
  },
  {
    slug: "color-names-beyond-red-green-blue",
    title: "Color Names — From 'That Weird Blue-Green' to 'Teal' in One Search",
    description: "You know the color you want but not its name. 'Burnt orange'? 'Terracotta'? 'Rust'? A color name lookup tool pinpoints the exact name — and the hex code — from visual input.",
    date: "2026-06-27",
    category: "Developer",
    tags: ["color names", "color picker", "named colors", "CSS colors", "hex to name"],
    relatedTools: ["color-names", "color-picker", "color-contrast-checker"],
    content: `
<p>You are writing CSS and need a specific shade of blue-green. You type <code>teal</code> — too dark. <code>aquamarine</code> — too light. <code>turquoise</code> — close but slightly off. You end up opening a color picker, finding the hex code, and typing <code>#48C9B0</code>. But what do you name the CSS variable? <code>--muted-teal</code>? <code>--sea-foam</code>? <code>--blue-greenish-thing</code>?</p>

<p>Our <a href="/en/tools/color-names">color names tool</a> maps hex codes to their closest named color. It turns "that specific shade I can see but cannot name" into a human-readable label — useful for CSS variables, design systems, and communicating with designers who think in names, not hex codes.</p>

<h2>The surprising usefulness of named colors</h2>

<p>CSS supports 148 named colors — from <code>aliceblue</code> to <code>yellowgreen</code>. Most developers know maybe 20 of them. The rest are obscure but occasionally perfect: <code>gainsboro</code> (a light grey), <code>peru</code> (a warm brown), <code>thistle</code> (a pale purple), <code>cornsilk</code> (a yellowish white).</p>

<p>Using named colors in prototypes has a real advantage: readability. <code>background: papayawhip</code> tells you what color it is without looking up a hex code. <code>background: #FFEFD5</code> tells you nothing until you preview it. For rapid prototyping where you will refine colors later, named colors are self-documenting.</p>

<h2>Design system naming conventions</h2>

<p>When building a design system, naming colors by their hex code is a maintenance nightmare. <code>--color-1A2B3C</code> means nothing. <code>--color-primary-600</code> is better but still abstract. <code>--color-slate-700</code> is best — it communicates both the hue family (slate = blue-grey) and the shade level (700 = relatively dark).</p>

<p>Our <a href="/en/tools/color-names">color names tool</a> helps you find the right family name. Input <code>#64748B</code> and it returns "slate" or "storm grey" — now you have a semantic anchor for your design token naming. Combine the family name with a lightness scale (50-950, following Tailwind conventions), and your color system becomes both machine-parseable and human-readable.</p>

<h2>Real scenarios where color names matter</h2>

<p><strong>Communicating with non-technical stakeholders:</strong> "make the button #3B82F6" means nothing to a product manager. "Make the button blue, specifically this shade of blue — it is called 'royal blue'" communicates the intent and gives them a reference they can Google.</p>

<p><strong>Writing documentation:</strong> "the error state uses <code>crimson</code> (#DC143C) for critical errors and <code>goldenrod</code> (#DAA520) for warnings." Documentation that only lists hex codes is unreadable. Documentation that pairs names with hex codes is skimmable.</p>

<p><strong>Accessibility audits:</strong> "the <code>darkgray</code> text on <code>white</code> background fails WCAG AA." Named colors in audit reports make findings easier to discuss and fix than hex-code-only reports.</p>

<p>For picking colors visually, our <a href="/en/tools/color-picker">color picker</a> extracts hex codes from any pixel on your screen. For checking contrast, see our <a href="/en/tools/color-contrast-checker">contrast checker</a>. And for the color picker versus contrast checker comparison, read our <a href="/en/blog/color-picker-vs-color-contrast-checker">guide to when you need each tool</a>.</p>
`,
  },
  {
    slug: "pregnancy-calculator-due-date-week-by-week",
    title: "Pregnancy Calculator — Due Date, Trimesters, and What Each Week Actually Means",
    description: "A due date is more than '9 months from now.' Pregnancy is counted in 40 weeks from the last period — not from conception. Here's why the math works that way and how to track each stage.",
    date: "2026-06-27",
    category: "Calculator",
    tags: ["pregnancy calculator", "due date", "pregnancy weeks", "trimesters", "gestational age"],
    relatedTools: ["pregnancy-calculator", "age-calculator", "bmi-calculator"],
    content: `
<p>You found out you are pregnant. The first question everyone asks: "When are you due?" You do some quick math — it is June, nine months from now is March, so… March? Then your doctor tells you the due date is actually calculated from your last menstrual period, not from conception, and suddenly your mental math is off by two weeks.</p>

<p>Our <a href="/en/tools/pregnancy-calculator">free pregnancy calculator</a> gives you the due date, current week, trimester, and key milestones. Here is why the math works the way it does and what each stage actually means.</p>

<h2>Why 40 weeks, not 9 months</h2>

<p>Pregnancy is 40 weeks from the first day of your last menstrual period (LMP). Conception typically happens around week 2 of this count — during ovulation, roughly 14 days after the period started. So the first two weeks of "pregnancy" you are not actually pregnant yet. This sounds absurd, but it is the standard because the LMP date is usually known, while the exact conception date is usually not.</p>

<p>This means when a pregnancy test shows positive at "4 weeks pregnant," the embryo has only existed for about 2 weeks. The math is confusing by design — it is a dating convention, not a biological measurement.</p>

<h2>The three trimesters: what actually happens</h2>

<p><strong>First trimester (weeks 1-13):</strong> all major organs and body systems form. The heart starts beating around week 6. By week 12, the fetus has fingers, toes, and a profile that looks recognizably human. This is also when miscarriage risk is highest (about 10-20% of known pregnancies), which is why many people wait until week 12 to announce.</p>

<p><strong>Second trimester (weeks 14-27):</strong> the "golden period" for most people. Nausea typically subsides, energy returns, and the baby's movements become noticeable around weeks 18-22. The anatomy scan at week 20 checks all major structures and can usually determine sex if desired.</p>

<p><strong>Third trimester (weeks 28-40):</strong> rapid weight gain, lung maturation, and preparation for birth. Babies born after 37 weeks are considered "full term." Babies born before 37 weeks are preterm and may need NICU support depending on how early they arrive.</p>

<h2>Due date accuracy: it is an estimate</h2>

<p>Only about 4% of babies arrive on their exact due date. The due date is the midpoint of a 5-week window: anytime between 37 and 42 weeks is considered "term." First-time mothers average 41 weeks + 1 day. The due date is useful for planning — when to stop working, when family should visit, when to schedule the last prenatal appointments — but it is not a deadline. The baby did not read the calendar.</p>

<p><strong>Factors that shift the due date:</strong> irregular cycles make LMP-based dating less accurate (early ultrasound dating is more reliable), IVF pregnancies use the transfer date for precise dating, and twins typically arrive earlier (around 36-37 weeks on average).</p>

<p>Our <a href="/en/tools/pregnancy-calculator">pregnancy calculator</a> gives you the standard 40-week estimate based on LMP. For more precise dating, your healthcare provider will use first-trimester ultrasound measurements, which are accurate to within 5-7 days.</p>

<p>For calculating age after birth, our <a href="/en/tools/age-calculator">age calculator</a> gives exact years, months, and days. And for health metrics during pregnancy, our <a href="/en/tools/bmi-calculator">BMI calculator</a> provides pre-pregnancy BMI context.</p>
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
