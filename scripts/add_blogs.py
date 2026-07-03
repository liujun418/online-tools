"""Add 6 blogs to free station (142→148) — July 3, 2026"""
import os, sys

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "qr-code-scanner-security-malicious-codes",
    title: "QR Code Scanner Security Check Before You Scan That Restaurant Menu",
    description: "QR codes replaced physical menus overnight. They also created a new attack vector. How to spot malicious QR codes before they compromise your device.",
    date: "2026-07-03",
    category: "Developer Tools",
    tags: ["QR code scanner", "QR security", "malicious QR", "phishing", "cybersecurity"],
    relatedTools: ["qr-code-scanner", "qr-code-generator", "barcode-generator"],
    content: `<p>You sit down at a restaurant, scan the QR code on the table to see the menu, and a website loads. It looks like the restaurant's menu site. You browse, order, and pay through the link. Three days later, there's a $400 charge on your credit card from a website you've never heard of.</p>

<p>You were <strong>QR code phished</strong>. The sticker on the table wasn't the restaurant's QR code — it was a fake one pasted on top by someone who walked in, sat down, and replaced it in under 10 seconds. QR code security isn't something most people think about, but it should be.</p>

<h2>How QR Code Attacks Work</h2>

<p>A QR code is just a URL encoded as a pattern of black and white squares. Your phone's camera reads the pattern, decodes the URL, and opens it — usually without showing you the full URL first. This is the vulnerability: <strong>you don't know where you're going until you're already there</strong>.</p>

<p>Attackers exploit this with three common techniques:</p>

<p><strong>Sticker replacement:</strong> Printing a malicious QR code on a sticker and placing it over a legitimate one. Restaurants, parking meters, event posters, and public transport stops are common targets. The fake sticker looks identical to the real one — QR codes are designed to be visually indistinguishable.</p>

<p><strong>URL redirection:</strong> The QR code points to a legitimate-looking shortened URL (bit.ly, tinyurl.com) that redirects to a phishing site. Your phone shows "bit.ly/2Xk9mP" in the preview — that tells you nothing about the final destination.</p>

<p><strong>Homograph attacks:</strong> The URL in the QR code uses Unicode characters that look identical to Latin letters. <code>starbucks.com</code> with a Cyrillic 'а' instead of Latin 'a' looks identical but goes to a different domain entirely.</p>

<h2>What a Malicious QR Code Can Do</h2>

<p>Scanning a malicious QR code can: (1) open a phishing site that steals login credentials or payment info, (2) trigger an automatic download of malware (less common on iOS, more common on Android with "install from unknown sources" enabled), (3) compose an email or text message with pre-filled content designed to phish your contacts, (4) connect your phone to a malicious WiFi network, or (5) initiate a payment or cryptocurrency transfer if your payment app auto-fills.</p>

<h2>How to Check Before You Scan</h2>

<p><strong>Look at the physical sticker:</strong> Is it a sticker on top of another sticker? Does it look newer than the surface it's on? Run your fingernail across the edge — if it lifts, it's a sticker overlay.</p>

<p><strong>Preview the URL before opening:</strong> Most modern phones show a URL preview when you scan a QR code. Read it. If it's a shortened URL (bit.ly, t.co, ow.ly), be suspicious. If the domain doesn't match the business you're interacting with, don't open it.</p>

<p><strong>Check the destination after opening:</strong> Look at the URL bar. Is the domain correct? Is there a padlock icon (HTTPS)? Does the page ask for permissions that make no sense (camera, contacts, location for a menu)?</p>

<p><strong>Use a QR scanner that shows the full decoded content:</strong> Not all scanner apps are equal. A good one shows the raw URL before offering to open it, giving you a chance to inspect it.</p>

<p>For scanning QR codes safely, use our <a href="/en/tools/qr-code-scanner">QR code scanner</a> which shows the decoded content before opening. For generating your own legitimate QR codes, our <a href="/en/tools/qr-code-generator">QR code generator</a> creates codes for URLs, WiFi, and vCards. For creating product barcodes, try our <a href="/en/tools/barcode-generator">barcode generator</a>.</p>
`,
  },
  {
    slug: "emi-calculator-prepayment-vs-investment",
    title: "EMI Calculator Prepayment vs Investment Which Saves More Money",
    description: "Should you prepay your loan or invest the extra cash? The math isn't obvious — here's how to calculate which option leaves you with more money at the end.",
    date: "2026-07-03",
    category: "Calculators",
    tags: ["EMI calculator", "loan prepayment", "investment", "interest savings", "financial planning"],
    relatedTools: ["emi-calculator", "compound-interest", "roi-calculator"],
    content: `<p>You get a $10,000 bonus. You have a $200,000 home loan at 6.5% interest with 18 years remaining. Should you: (a) prepay $10,000 toward the loan principal, or (b) invest $10,000 in an index fund averaging 9% annual returns? Your gut says "pay off debt." The math may disagree.</p>

<p>This is the <strong>prepayment vs investment dilemma</strong>, and an EMI calculator is the tool that actually answers it — not with rules of thumb, but with numbers specific to your loan.</p>

<h2>The Math: Interest Saved vs Interest Earned</h2>

<p>When you prepay a loan, you're effectively <strong>earning the loan's interest rate</strong> on that money — because you're avoiding paying that interest in the future. If your loan is at 6.5%, prepaying $10,000 "earns" you 6.5% annually in avoided interest. It's a guaranteed, tax-free return.</p>

<p>When you invest the same $10,000 at 9%, you earn 9% — but you pay taxes on the gains (let's say 20% capital gains), bringing the effective return to 7.2%. And you continue paying 6.5% interest on the $10,000 you didn't prepay.</p>

<p>The net benefit of investing = 7.2% (after-tax return) - 6.5% (loan interest still accruing) = <strong>0.7% net gain</strong>. On $10,000 over 18 years, that's about $1,300 — not nothing, but not life-changing either.</p>

<h2>When Prepayment Wins</h2>

<p><strong>High interest rate loans:</strong> If your loan is above 8%, prepayment almost always beats investing. You'd need consistently high investment returns (10%+ after tax) to beat the guaranteed 8% return of debt reduction.</p>

<p><strong>Variable rate loans:</strong> If your interest rate can increase, prepaying now locks in savings at the current rate and reduces your exposure to future rate hikes.</p>

<p><strong>Cash flow is tight:</strong> Prepayment reduces your monthly EMI or shortens your loan tenure. If your monthly budget is strained, lowering the EMI gives you breathing room that an investment account doesn't.</p>

<p><strong>You're risk-averse:</strong> Loan prepayment is a guaranteed return. The stock market is not. If you'd lose sleep over a market downturn, take the guaranteed win.</p>

<h2>When Investing Wins</h2>

<p><strong>Low interest rate loans:</strong> If your loan is below 5%, investing historically beats prepayment by a wide margin. The S&P 500 has averaged ~10% before inflation over the long term. Even after taxes, you're likely to come out ahead.</p>

<p><strong>Tax benefits on the loan:</strong> In some countries, home loan interest is tax-deductible. If you're in the 30% tax bracket, your effective interest rate on a 6.5% loan might be only 4.55% after tax deductions. At that rate, investing almost certainly wins.</p>

<p><strong>Long time horizon:</strong> The longer your remaining loan tenure, the more time compound growth has to work in your favor. With 20+ years remaining, the probability that investing beats prepayment is very high.</p>

<h2>Use the EMI Calculator to Decide</h2>

<p>Run both scenarios: (1) calculate your current EMI and total interest over the remaining tenure; (2) calculate with the prepayment amount subtracted from principal — the EMI stays the same but the tenure shortens, reducing total interest; (3) compare the interest saved to what your prepayment amount would grow to if invested at a realistic after-tax return rate. Whichever number is bigger wins.</p>

<p>For calculating your loan payments, use our <a href="/en/tools/emi-calculator">EMI calculator</a> with prepayment simulation. For projecting investment growth, our <a href="/en/tools/compound-interest">compound interest calculator</a> shows how your money grows over time. And for comparing overall returns, our <a href="/en/tools/roi-calculator">ROI calculator</a> calculates annualized returns.</p>
`,
  },
  {
    slug: "pregnancy-calculator-due-date-accuracy",
    title: "Pregnancy Calculator Due Date Accuracy Why It's 40 Weeks Not 9 Months",
    description: "Pregnancy is counted as 40 weeks from the last menstrual period — not 9 calendar months. Here's why the dating system exists and how accurate due dates actually are.",
    date: "2026-07-03",
    category: "Calculators",
    tags: ["pregnancy calculator", "due date", "gestational age", "Naegele's rule", "trimester"],
    relatedTools: ["pregnancy-calculator", "age-calculator", "bmi-calculator"],
    content: `<p>Someone tells you they're "15 weeks pregnant." You do the math: 15 weeks is about 3.5 months. But they conceived roughly 13 weeks ago. Why the 2-week gap? Because <strong>pregnancy is counted from the first day of the last menstrual period (LMP)</strong>, not from conception — and that changes everything about how due dates work.</p>

<p>Pregnancy dating is one of those things that makes no sense until someone explains it, and then it makes perfect sense. Here's the system and why it exists.</p>

<h2>Why 40 Weeks and Not 9 Months?</h2>

<p>The average pregnancy from conception to birth is about <strong>38 weeks</strong> (266 days). But since most people don't know their exact conception date, doctors count from the first day of the last menstrual period — which is typically about 2 weeks before ovulation and conception. That makes the "official" pregnancy length <strong>40 weeks</strong> (280 days).</p>

<p>This system is called <strong>Naegele's rule</strong>, developed by German obstetrician Franz Naegele in 1812. He observed that adding 280 days (40 weeks) to the first day of the LMP predicted birth dates reasonably well for women with regular 28-day cycles. It's been the standard for over 200 years, despite its limitations.</p>

<p>Why not just use 9 months? Because <strong>calendar months vary in length</strong> (28-31 days). Nine calendar months could be anywhere from 273 to 276 days — not the 280 days of a standard pregnancy. And lunar months (28 days) give you 10 months, not 9. Weeks are consistent: always 7 days, no exceptions.</p>

<h2>How Accurate Are Due Dates?</h2>

<p>Not very. Only about <strong>4-5% of babies are born on their exact due date</strong>. About 80% arrive within two weeks of the due date (38-42 weeks). The due date is best thought of as a <strong>due month</strong> — any time within about two weeks on either side is normal.</p>

<p>First-trimester ultrasound dating is more accurate than LMP dating, especially for women with irregular cycles. An ultrasound at 8-12 weeks measures the crown-rump length of the embryo, which grows at a very consistent rate in early pregnancy. This measurement can date a pregnancy within 5-7 days.</p>

<p>Factors that affect due date accuracy: irregular menstrual cycles (LMP method overestimates or underestimates), late ovulation, maternal age (older mothers tend to deliver slightly earlier), first vs subsequent pregnancies (first babies average 41 weeks + 1 day), and ethnicity (some studies show small but consistent differences in average gestation length).</p>

<h2>The Trimester System</h2>

<p>Pregnancy is divided into three trimesters of roughly 13 weeks each: <strong>First trimester</strong> (weeks 1-13): organ development, highest miscarriage risk. <strong>Second trimester</strong> (weeks 14-26): rapid growth, anatomy scan at 20 weeks. <strong>Third trimester</strong> (weeks 27-40): final growth, lung maturation, positioning for birth.</p>

<p>The trimester system matters because medical care, screening tests, and risk profiles change at each stage. It's not just a convenient way to divide time — it reflects distinct phases of fetal development.</p>

<p>For calculating your due date and tracking trimesters, use our <a href="/en/tools/pregnancy-calculator">pregnancy calculator</a> with LMP or conception date input. For calculating the exact age after birth, our <a href="/en/tools/age-calculator">age calculator</a> tracks years, months, and days. And for tracking healthy weight gain during pregnancy, our <a href="/en/tools/bmi-calculator">BMI calculator</a> provides pre-pregnancy baseline measurements.</p>
`,
  },
  {
    slug: "markdown-preview-vs-wysiwyg-developer-writing",
    title: "Markdown Preview vs WYSIWYG Editor Which Developers Actually Need for Documentation",
    description: "WYSIWYG editors show exactly what you get. Markdown preview shows rendered output alongside source. For technical writing, the split matters more than you think.",
    date: "2026-07-03",
    category: "Developer Tools",
    tags: ["markdown preview", "WYSIWYG", "technical writing", "documentation", "README"],
    relatedTools: ["markdown-preview", "html-to-markdown", "text-diff"],
    content: `<p>Open any developer tool and you'll find documentation written in Markdown. README files, API docs, wikis, static site generators — they all use plaintext Markdown that gets rendered into HTML. But when it's time to <strong>write</strong> that documentation, you have two very different choices: a Markdown preview that shows source and rendered output side by side, or a WYSIWYG editor that hides the Markdown entirely.</p>

<p>For developers writing technical documentation, the choice isn't about which is "better" — it's about <strong>what kind of writing you're doing</strong> and what you need to see while you do it.</p>

<h2>What Markdown Preview Gets Right</h2>

<p>A Markdown preview shows <strong>both the source and the rendered output</strong>, usually side by side. You type <code>## Installation</code> on the left and see a level-2 heading on the right. You write a code block with triple backticks and see it syntax-highlighted in the preview.</p>

<p>This dual view matters for technical writing because: (1) you can <strong>verify the Markdown syntax itself</strong> — a missing backtick or misplaced asterisk is obvious when you see the source; (2) you learn Markdown faster by seeing the mapping between syntax and output in real time; (3) you can copy-paste the raw Markdown into Git, Jira, Slack, or any other tool that accepts Markdown input; and (4) you maintain <strong>portability</strong> — your README.md works on GitHub, GitLab, and Bitbucket without platform-specific formatting quirks.</p>

<h2>Where WYSIWYG Falls Short for Developers</h2>

<p>WYSIWYG (What You See Is What You Get) editors like Google Docs, Notion, and Confluence hide the underlying markup. You bold text by pressing Ctrl+B, not by typing <code>**bold**</code>. This is great for non-technical writing but creates problems for developers:</p>

<p><strong>Formatting surprises:</strong> You paste content from a WYSIWYG editor into a Markdown file and the formatting doesn't survive. Or worse, it partially survives — headings become bold text, lists lose their nesting, and code blocks become regular paragraphs.</p>

<p><strong>Version control blindness:</strong> WYSIWYG editors store formatting in proprietary formats (JSON, HTML, custom XML). When you diff two versions in Git, you see structural changes mixed with formatting noise. Markdown diffs show exactly what changed — one line, one change, easy to review.</p>

<p><strong>Platform lock-in:</strong> Content written in a WYSIWYG editor often can't be cleanly exported. Notion exports to Markdown, but code blocks lose language annotations. Confluence exports to HTML that's full of proprietary attributes. Markdown is a plaintext format that will be readable in 50 years.</p>

<h2>When WYSIWYG Actually Makes Sense</h2>

<p>WYSIWYG wins for: <strong>collaborative editing</strong> with non-developers (designers, product managers, executives who shouldn't have to learn Markdown), <strong>heavily formatted documents</strong> with tables, images, and callouts that are tedious in Markdown, and <strong>design-heavy content</strong> like newsletters and landing pages where the visual layout is the primary concern.</p>

<p>For most developer documentation, the Markdown preview workflow is the right call: write in Markdown, preview the rendered output, commit the plaintext to version control. Your future self (and your teammates) will thank you.</p>

<p>For writing and previewing Markdown, use our <a href="/en/tools/markdown-preview">Markdown preview tool</a> with live side-by-side rendering. For converting existing HTML content to Markdown, our <a href="/en/tools/html-to-markdown">HTML to Markdown converter</a> handles the migration. And for comparing documentation versions, our <a href="/en/tools/text-diff">text diff tool</a> shows exactly what changed.</p>
`,
  },
  {
    slug: "json-formatter-vs-code-formatter-debugging",
    title: "JSON Formatter vs Code Formatter Structured Data Debugging Battle",
    description: "JSON formatters and code formatters look similar but solve different problems. Here's when your minified API response needs a JSON-specific tool, not a general code beautifier.",
    date: "2026-07-03",
    category: "Developer Tools",
    tags: ["JSON formatter", "code formatter", "JSON debugging", "API response", "pretty print"],
    relatedTools: ["json-formatter", "code-formatter", "json-to-csv"],
    content: `<p>You copy a one-line, 50,000-character JSON response from your browser's Network tab. You paste it into a code formatter and click "Format." It becomes... still mostly unreadable. The nesting is technically correct but visually useless. Arrays of 200 objects are each on one line. Deeply nested values are indented 14 levels with no visual grouping.</p>

<p>A <strong>JSON formatter</strong> is not the same thing as a <strong>code formatter</strong>, and using the wrong one turns an API debugging session into a guessing game. Here's the difference and when each one matters.</p>

<h2>What JSON Formatters Do That Code Formatters Don't</h2>

<p>A code formatter (like Prettier) treats JSON as just another syntax to format. It applies consistent indentation, line breaks at a certain print width, and trailing comma rules. This works for <strong>human-written JSON</strong> like config files and package.json — documents that are a few hundred lines with shallow nesting.</p>

<p>A JSON formatter treats JSON as <strong>structured data to explore</strong>. It adds: (1) <strong>tree view</strong> — collapsible sections so you can fold away the 200-element array and focus on the object structure; (2) <strong>path display</strong> — showing you're at <code>data.users[42].address.geo.lat</code> so you know exactly how deep you are; (3) <strong>syntax highlighting by data type</strong> — strings in green, numbers in blue, booleans in orange, null in gray; and (4) <strong>size indicators</strong> — showing that an array has 847 elements so you know the scale of what you're looking at.</p>

<h2>The Real-World Scenario: Debugging an API Response</h2>

<p>Your frontend is throwing <code>Cannot read property 'name' of undefined</code> somewhere in a deeply nested API response. The response is 15KB of minified JSON. Here's the workflow difference:</p>

<p><strong>With a code formatter:</strong> Paste, format, get 400 lines of indented JSON. Scroll through looking for the <code>name</code> field. Realize there are 47 occurrences. Search for <code>"name": null</code>. Find three. None of them is the one causing the error. Realize the problem is that an entire parent object is missing, not that a field is null. Give up and add console.log statements.</p>

<p><strong>With a JSON formatter:</strong> Paste, format, see tree view. Collapse the top-level objects one by one. Notice that <code>data.items[17]</code> is missing the <code>author</code> object that every other item has. There's your bug — the 18th item in the list has no author, and your code assumes every item has one. Time to fix: 2 minutes.</p>

<h2>When You Need Both</h2>

<p>Use a <strong>code formatter</strong> for: package.json, tsconfig.json, .prettierrc, and any JSON file you edit by hand. These are small, shallow, and benefit from consistent formatting that matches the rest of your codebase.</p>

<p>Use a <strong>JSON formatter</strong> for: API responses, webhook payloads, database exports, GeoJSON files, and any JSON where the structure is more important than the formatting. These are large, deeply nested, and benefit from exploration tools, not just pretty printing.</p>

<p>For exploring large JSON responses, use our <a href="/en/tools/json-formatter">JSON formatter</a> with tree view and path navigation. For formatting code files including JSON configs, our <a href="/en/tools/code-formatter">code formatter</a> handles JSON, JS, CSS, and HTML. And for converting API responses to spreadsheet format, our <a href="/en/tools/json-to-csv">JSON to CSV converter</a> flattens nested data.</p>
`,
  },
  {
    slug: "food-picker-decision-fatigue-psychology",
    title: "The Decision Fatigue Epidemic Why a Random Food Picker Makes Better Choices Than You Do",
    description: "By dinner time, you've made 200+ decisions and your brain is exhausted. A random food picker bypasses decision fatigue — here's the psychology behind why it works.",
    date: "2026-07-03",
    category: "Fun & Media",
    tags: ["food picker", "decision fatigue", "random choice", "psychology", "cognitive load"],
    relatedTools: ["food-picker", "coin-flip", "random-number-generator"],
    content: `<p>It's 7pm. You've been making decisions since 7am: what to wear, which email to answer first, what to say in the meeting, whether to push back on the deadline, what to eat for lunch, which route to take home. By dinner time, your brain has burned through its daily <strong>decision-making budget</strong>. You stare at the fridge. You open a delivery app. You scroll for 20 minutes. You order the same thing you always order.</p>

<p>This is <strong>decision fatigue</strong>, and it's why a random food picker — a tool that literally just picks a restaurant or dish for you — can make better dinner choices than your exhausted brain.</p>

<h2>The Science of Decision Fatigue</h2>

<p>Decision fatigue is not a metaphor. The prefrontal cortex — the part of your brain responsible for deliberate decision-making — runs on glucose. Every decision you make consumes a small amount of this fuel. By the end of the day, your brain is running on empty, and it conserves energy by taking shortcuts: choosing the default option, avoiding decisions entirely, or making impulsive choices.</p>

<p>A famous 2011 study of Israeli parole judges found that prisoners who appeared early in the morning were granted parole about 65% of the time. By late morning, the rate dropped to near 0%. After lunch, it jumped back to 65%. By end of day, it was near 0% again. The judges weren't being cruel — their decision-making circuitry was depleted.</p>

<p>Your dinner decision goes through the same prefrontal cortex as a judge's parole ruling. By 7pm, you're functionally a worse decision-maker than you were at 9am.</p>

<h2>Why Random Selection Bypasses the Bottleneck</h2>

<p>A random food picker doesn't make a "better" choice than you would — it makes <strong>any choice at all</strong>, which is the real goal when you're decision-fatigued. The benefit isn't that the random choice is optimal. The benefit is that <strong>the decision gets made</strong> in 2 seconds instead of 20 minutes of scrolling paralysis.</p>

<p>And here's the interesting part: people who use random food pickers report being <strong>more satisfied</strong> with their meals than people who deliberated. Not because the food was better, but because: (1) they didn't spend 20 minutes of their evening on the decision, (2) they tried something they wouldn't have chosen themselves (variety feels good), and (3) they can't regret the choice because they didn't make it — the tool did.</p>

<h2>Decision Fatigue Beyond Food</h2>

<p>Food is the most visible symptom, but decision fatigue affects every evening decision: whether to exercise or skip, whether to work on the side project or watch TV, whether to read or scroll. The pattern is the same: your brain defaults to the <strong>easiest option</strong>, which is rarely the best one.</p>

<p>Strategies that work: (1) make important decisions in the morning, (2) reduce trivial daily decisions (Steve Jobs wore the same outfit every day for exactly this reason), (3) use randomization tools for low-stakes decisions to preserve mental energy for the ones that matter, and (4) batch similar decisions together instead of spreading them throughout the day.</p>

<p>For breaking dinner indecision, use our <a href="/en/tools/food-picker">random food picker</a> to make the choice in seconds. For other binary decisions, our <a href="/en/tools/coin-flip">coin flip tool</a> breaks the stalemate. And for generating random numbers for more complex random choices, try our <a href="/en/tools/random-number-generator">random number generator</a>.</p>
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
print("Free station: 6 blogs inserted (142 -> 148)")
