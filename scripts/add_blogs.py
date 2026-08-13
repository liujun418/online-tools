"""Add 6 blogs to free station (361→367) — August 13, 2026"""
import os

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "jwt-decoder-token-expiry-security",
    title: "How to Read JWT Expiration and Security Claims Like a Developer",
    description: "A JWT contains an exp claim that tells you when the token dies. Read it wrong and your API calls fail mysteriously. Here's how to decode and verify JWT expiration, issuer, and audience.",
    date: "2026-08-13",
    category: "Developer",
    tags: ["jwt decoder", "token expiration", "exp claim", "JWT security", "API authentication"],
    relatedTools: ["jwt-decoder", "hash-generator", "base64-converter"],
    content: `<p>Your API starts returning <strong>401 Unauthorized</strong> at exactly 10:00 AM every day. The tokens worked an hour ago. You check the server logs. Nothing obvious. You open the token in a <a href="/en/tools/jwt-decoder">JWT decoder</a> and look at the payload. There it is: <code>"exp": 1723507200</code>. The token expired at 10:00 AM. The exp claim — a Unix timestamp — is the <strong>expiration time</strong>, and your token died on schedule.</p>

<h2>How to Read a JWT Expiration Claim</h2>

<p><strong>Step 1: Decode the token.</strong> Paste your JWT into the <a href="/en/tools/jwt-decoder">JWT decoder</a>. A JWT is three base64url parts separated by dots: header, payload, signature. The decoder splits them and shows the claims in plain text. <strong>Step 2: Find the exp claim.</strong> Look for <code>exp</code> in the payload. It is a Unix timestamp — seconds since January 1, 1970, UTC. The decoder converts it to a human-readable date. If the date is in the past, the token is expired. <strong>Step 3: Check the other security claims.</strong> <code>iss</code> tells you the issuer — the server that issued the token. <code>aud</code> is the audience — the service the token is meant for. <code>iat</code> is issued-at time. <code>nbf</code> (not before) means the token is not valid until a certain time. A token that fails <code>aud</code> will be rejected even if it has not expired. <strong>Step 4: Verify the signature.</strong> The signature proves the token was not tampered with. The <a href="/en/tools/hash-generator">hash generator</a> shows you how signature algorithms produce fixed-length outputs. The <a href="/en/tools/base64-converter">base64 converter</a> helps you understand the encoding layer under the claims. The <a href="/en/tools/jwt-decoder">JWT decoder</a> is the diagnostic tool. The exp claim is the expiry clock. Together they turn a confusing 401 into a fixable cause.</p>`
  },
  {
    slug: "cron-parser-timezones-deployments",
    title: "Cron Timezone Traps How a Parser Saves You From a 3AM Job",
    description: "Your cron job runs at the wrong hour in production. The crontab looks right. The server timezone is the problem. Here's how a cron parser exposes timezone and scheduling mistakes before they fire.",
    date: "2026-08-13",
    category: "Developer",
    tags: ["cron parser", "timezone", "crontab", "scheduled jobs", "deployment"],
    relatedTools: ["cron-parser", "unix-timestamp", "stopwatch-and-timer"],
    content: `<p>You deployed a cron job that should run at 6:00 AM. It runs at 1:00 PM instead. The crontab line reads <code>0 6 * * *</code> — correct in every book. But the server runs on UTC and you think in your local timezone. When you set the job from your local machine at 6 AM, the server interpreted it as 6 AM <strong>UTC</strong>. A <a href="/en/tools/cron-parser">cron parser</a> shows you exactly what the server will do.</p>

<h2>How a Cron Parser Catches Timezone Mistakes</h2>

<p><strong>Step 1: Paste the expression.</strong> Open the <a href="/en/tools/cron-parser">cron parser</a> and enter <code>0 6 * * *</code>. The parser lists the next 10 run times. <strong>Step 2: Check the timezone.</strong> The parser shows the times in a chosen timezone. Run the same expression in UTC and in your local zone. The hour shifts — that is the trap. If your job must run at 6 AM local, the crontab must account for the server's zone, or run inside a timezone-aware container. <strong>Step 3: Verify the next runs.</strong> The parser shows the actual next executions. You can see whether the job fires at the right minute, day, and month — including edge cases like day-of-month overlap with day-of-week. <strong>Step 4: Confirm with the deployment config.</strong> Many platforms (serverless schedulers, containers) inherit the host timezone. The <a href="/en/tools/unix-timestamp">unix timestamp converter</a> helps you reason about UTC offsets. The <a href="/en/tools/stopwatch-and-timer">stopwatch and timer</a> is for the human side of timekeeping. The <a href="/en/tools/cron-parser">cron parser</a> is the schedule inspector. The timezone is the hidden variable. Together they keep your job firing where — and when — you expect.</p>`
  },
  {
    slug: "regex-tester-extract-parse-text",
    title: "How to Extract Data With Regex A Practical Text-Parsing Guide",
    description: "A log file has 5,000 lines. You need every email, IP, and date. Reading by hand takes an hour. A regex tester extracts them in seconds. Here's a practical text-parsing workflow.",
    date: "2026-08-13",
    category: "Developer",
    tags: ["regex tester", "text extraction", "regex patterns", "parse text", "data mining"],
    relatedTools: ["regex-tester", "text-sorter", "remove-duplicate-lines"],
    content: `<p>Your application writes a log file. Each line contains a user ID, an IP address, and a timestamp mixed with prose. You need to pull every IP address into a list. There are 5,000 lines. You open a <a href="/en/tools/regex-tester">regex tester</a> and write a pattern that matches IP addresses. In seconds, you have every IP extracted and ready to analyze.</p>

<h2>How to Extract Data With a Regex Tester</h2>

<p><strong>Step 1: Identify what you need.</strong> Define the pattern you are hunting. An IP address looks like <code>\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}</code>. An email has a local part, an @, and a domain. A date follows a format like <code>2026-08-13</code>. <strong>Step 2: Write and test the pattern.</strong> Paste the pattern and a sample of your text into the <a href="/en/tools/regex-tester">regex tester</a>. The tester highlights matches live. You refine the pattern until it catches the real data and skips the false positives. <strong>Step 3: Use capture groups.</strong> Wrap the part you need in parentheses — <code>(\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})</code> — to extract just that piece instead of the whole match. <strong>Step 4: Post-process the results.</strong> Export the matches and run them through the <a href="/en/tools/text-sorter">text sorter</a> to organize them, and the <a href="/en/tools/remove-duplicate-lines">remove duplicate lines</a> tool to collapse repeats. The <a href="/en/tools/regex-tester">regex tester</a> is the extraction engine. The pattern is the search key. Together they turn 5,000 lines of prose into a clean dataset.</p>`
  },
  {
    slug: "percentage-calculator-vs-fraction-calculator",
    title: "Percentage vs Fraction When Each Format Tells the Truth Better",
    description: "The same ratio looks different as a percentage or a fraction. 1/3 is exact. 33.33% is rounded. Understanding when each format matters makes your calculations clearer. Here's the difference.",
    date: "2026-08-13",
    category: "Calculator",
    tags: ["percentage calculator", "fraction", "ratio", "percent vs fraction", "math"],
    relatedTools: ["percentage-calculator", "unit-converter", "roi-calculator"],
    content: `<p>You are comparing two deals. One gives 1/3 off. The other gives 33.33% off. Are they the same? Mathematically, almost — but not quite. One third is the exact value <strong>0.333...</strong>, a repeating decimal. 33.33% is a rounded approximation of it. A <a href="/en/tools/percentage-calculator">percentage calculator</a> tells you the percentage. The fraction tells you the exact ratio. Here is when each format matters.</p>

<h2>Percentage vs Fraction: When Each Format Wins</h2>

<p><strong>Percentages win for comparison.</strong> 25% vs 30% is instantly readable. You do not mentally convert 1/4 vs 3/10. The <a href="/en/tools/percentage-calculator">percentage calculator</a> converts amounts to percentages so you can compare discounts, growth, and shares at a glance. <strong>Fractions win for exactness.</strong> 1/3 of a recipe is exact. 33.33% of it is a rounded approximation that leaves a fraction of a gram unaccounted for. When precision matters — cooking, dividing bills, splitting shares — the fraction is the truth. <strong>Fractions win for conceptual clarity.</strong> "Half" means 1/2 to everyone. "50%" needs the baseline stated. In statistics and probability, fractions show the relationship directly: 1 in 4 is clearer than 25%. <strong>Percentages win for changes.</strong> Growth from 50 to 75 is +50%, and the <a href="/en/tools/percentage-calculator">percentage calculator</a> handles the percent-change math automatically. The <a href="/en/tools/unit-converter">unit converter</a> handles the measurement side of the same problems. The <a href="/en/tools/roi-calculator">ROI calculator</a> uses percentages to compare returns across investments. The percentage is for comparing. The fraction is for being exact. Use each where it tells the truth.</p>`
  },
  {
    slug: "word-counter-vs-text-sorter",
    title: "Word Counter vs Text Sorter Counting vs Organizing Text",
    description: "A word counter tells you how many words are in your text. A text sorter rearranges them. One measures. One organizes. Here's when each tool is the right call.",
    date: "2026-08-13",
    category: "Text",
    tags: ["word counter", "text sorter", "text analysis", "organize text", "comparison"],
    relatedTools: ["word-counter", "text-sorter", "remove-duplicate-lines"],
    content: `<p>Your editor says the blog post is 1,200 words. You need to confirm, and you also want the reference list sorted alphabetically. Two different jobs. The <a href="/en/tools/word-counter">word counter</a> measures the text. The <a href="/en/tools/text-sorter">text sorter</a> organizes it. Here is when each is the right tool.</p>

<h2>Word Counter vs Text Sorter: Measure vs Organize</h2>

<p><strong>The word counter measures.</strong> It counts words, characters, sentences, and paragraphs. You use it when word count matters — a blog target, a social media limit, an essay requirement. The <a href="/en/tools/word-counter">word counter</a> also shows reading time, which helps you gauge whether the piece is the right length for the medium. <strong>The text sorter organizes.</strong> It takes a list — keywords, URLs, names — and sorts it alphabetically, numerically, or by length. You use it when order matters. The <a href="/en/tools/text-sorter">text sorter</a> can deduplicate and trim whitespace in the same pass. <strong>They solve different problems.</strong> Counting does not organize. Sorting does not measure. If you paste a jumbled list into the word counter, you learn its length but not its order. If you paste a paragraph into the text sorter, you get a sorted jumble — useless. <strong>They combine well.</strong> Sort a keyword list with the <a href="/en/tools/text-sorter">text sorter</a>, then run it through the <a href="/en/tools/word-counter">word counter</a> to check the total, and use the <a href="/en/tools/remove-duplicate-lines">remove duplicate lines</a> tool to clean repeats. The counter answers "how much." The sorter answers "in what order." Pick by the question you are asking.</p>`
  },
  {
    slug: "url-encoding-percent-history",
    title: "Why URLs Use Percent Signs The History of URL Encoding",
    description: "A space in a URL becomes %20. An ampersand becomes %26. Why percent signs? It goes back to the early internet, RFC 1738, and a simple rule about safe characters. Here's the story.",
    date: "2026-08-13",
    category: "Developer",
    tags: ["url encoding", "percent encoding", "URL history", "RFC 1738", "web standards"],
    relatedTools: ["url-encoder", "html-entities", "text-to-slug"],
    content: `<p>You copy a link with spaces in it. The browser shows <code>%20</code> where each space should be. A filename with an ampersand becomes <code>&amp;</code> on the wire and <code>%26</code> in the URL. Why percent signs? Why not underscores or dashes? The answer is a decision made in 1994 that every URL still follows. An <a href="/en/tools/url-encoder">URL encoder</a> applies the rule; here is where the rule came from.</p>

<h2>The History of Percent Encoding</h2>

<p><strong>1994: RFC 1738 defines the URL.</strong> The early web needed a way to put arbitrary text into a URL, but URLs had reserved characters — <code>/</code>, <code>?</code>, <code>&amp;</code>, <code>=</code> — that had structural meaning. Spaces were not allowed at all. The standard chose a simple escape: a percent sign followed by two hexadecimal digits, one per byte. <code>%20</code> means "byte 0x20," which is a space. <code>%26</code> means "byte 0x26," which is an ampersand. <strong>Why percent?</strong> It was not used by any other character in URLs, so it was safe as a marker. A percent told the reader "the next two characters are a byte code, not literal text." <strong>It survives because it works.</strong> Every language, every browser, every server implements the same rule. The <a href="/en/tools/url-encoder">URL encoder</a> applies it on demand. The <a href="/en/tools/html-entities">HTML entities</a> tool handles the parallel problem for HTML — where <code>&amp;amp;</code> plays the same escaping role. The <a href="/en/tools/text-to-slug">text to slug</a> tool is the modern alternative for readable URLs. The percent sign is the escape hatch. Two hex digits are the byte. Together they let a URL carry any text, safely.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("Free station: 361->367 done.")
