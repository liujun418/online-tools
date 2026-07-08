"""Add 6 blogs to free station (170→176) — July 8, 2026"""
import os, sys

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "jwt-decoder-debug-api-tokens-guide",
    title: "JWT Decoder How to Debug API Tokens Without Writing a Single Line of Code — and Why You Should Never Paste JWTs into Random Websites",
    description: "You got a JWT token from an API response. You need to see what's inside. Here's how to decode it safely — and the red flags that tell you a JWT decoder is trustworthy.",
    date: "2026-07-08",
    category: "Developer",
    tags: ["JWT decoder", "API tokens", "debug", "JSON Web Token", "authentication"],
    relatedTools: ["jwt-decoder", "base64-converter", "hash-generator"],
    content: `<p>You are integrating a third-party API. The authentication endpoint returns a long string of gibberish: <code>eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIi...</code> You know it is a JWT token. You know it contains user information. But you cannot read it — and you need to know what permissions this token grants, when it expires, and whether the API is sending the claims you expect.</p>

<p>You could write a script to decode it. Or you could paste it into a <a href="/en/tools/jwt-decoder">JWT decoder</a> and see everything instantly. Here is what is inside a JWT, how to decode it safely, and the one question you should always ask before pasting a token anywhere.</p>

<h2>What Is Inside a JWT Token?</h2>

<p>A JWT (JSON Web Token) has three parts separated by dots: <strong>header</strong>, <strong>payload</strong>, and <strong>signature</strong>. Each part is Base64url-encoded JSON. The header tells you the algorithm used to sign the token — typically HS256 (HMAC with SHA-256) or RS256 (RSA with SHA-256). The payload contains the <strong>claims</strong> — key-value pairs that describe the authenticated user or session. The signature is the cryptographic proof that the token was issued by a trusted authority and has not been tampered with.</p>

<p>Common claims you will see: <code>sub</code> (subject — usually the user ID), <code>iss</code> (issuer — who created the token), <code>aud</code> (audience — who the token is intended for), <code>iat</code> (issued at — Unix timestamp), <code>exp</code> (expiration — Unix timestamp), and custom claims like <code>role</code>, <code>permissions</code>, or <code>email</code>.</p>

<p>The <code>exp</code> claim is the one you check most often. A token that says it expires at 1718236800 — what does that mean? A <a href="/en/tools/jwt-decoder">JWT decoder</a> converts that Unix timestamp to a human-readable date in your local timezone and highlights whether the token has already expired. No mental math required.</p>

<h2>Why You Should Never Paste JWTs into Random Websites</h2>

<p>JWT tokens are <strong>bearer tokens</strong>. Anyone who possesses the token can use it to authenticate as you until it expires. If you paste a valid JWT into a malicious website, that website now has your token and can make API calls on your behalf. This is not theoretical — token theft is a common attack vector.</p>

<p>The safety question to ask before using any online JWT decoder: <strong>"Does the decoding happen in my browser, or on a server?"</strong> If the tool sends your token to a server, it is a security risk. If it decodes entirely in the browser using JavaScript, your token never leaves your device. Our <a href="/en/tools/jwt-decoder">JWT decoder</a> does all processing locally — open the page, disconnect your internet, paste a token, and it still works. That is the test.</p>

<p>Also: never paste production tokens with full permissions. Use a test token, a token that is about to expire, or a token with minimal scope. JWT decoding is for debugging, not for storing tokens in a browser tab indefinitely.</p>

<h2>How to Spot a Good JWT Decoder</h2>

<p>A good decoder shows: the algorithm (so you can verify the token uses RS256 or HS256, not <code>none</code> — yes, some badly configured systems accept unsigned tokens), the header and payload as formatted JSON (not a single collapsed line), and the timestamps converted to your local timezone with color-coded expiration status. Bonus: a one-click copy of the decoded payload JSON so you can paste it into your debugging notes.</p>

<p>If a decoder asks you to sign up, upload your token to a cloud service, or displays ads for "token validation services" — close the tab. The best JWT decoder is a simple, client-side tool that does one thing well. Try it at <a href="/en/tools/jwt-decoder">free JWT decoder</a> — paste, decode, copy, done.</p>`
  },
  {
    slug: "cron-parser-crontab-schedules-explained",
    title: "Cron Parser How to Read Crontab Schedules Without the Manual — and Why 0 0 * * 0 Is Not the Same as @weekly",
    description: "You found a cron expression in a server config. Does it run at midnight every day, or midnight on Sundays? Here's how to decode cron syntax without the reference card.",
    date: "2026-07-08",
    category: "Developer",
    tags: ["cron parser", "crontab", "cron expression", "scheduling", "server administration"],
    relatedTools: ["cron-parser", "unix-timestamp", "hash-generator"],
    content: `<p>You SSH into a production server and check the crontab: <code>30 2 * * 1 /usr/bin/backup.sh</code>. You know this runs a backup script. But when? 2:30 AM every day? 2:30 AM on Mondays? 2:30 AM on the 1st of every month? You could dig through the cron man page. Or you could paste the expression into a <a href="/en/tools/cron-parser">cron parser</a> and see "At 02:30 AM, every Monday" plus the next ten execution times.</p>

<p>Cron syntax is deceptively simple — five fields, each with specific rules. But the special characters and overlapping day-of-month/day-of-week behavior create edge cases that trip up even experienced developers. Here is how to read any cron expression in seconds.</p>

<h2>The Five Fields, Explained in Plain English</h2>

<p>A cron expression is five space-separated fields: <strong>minute (0-59), hour (0-23), day of month (1-31), month (1-12), day of week (0-7)</strong> — where 0 and 7 both mean Sunday. Each field can be a specific number, a wildcard (<code>*</code> means "every"), a range (<code>1-5</code> means "1 through 5"), a list (<code>1,3,5</code>), or a step value (<code>*/15</code> means "every 15").</p>

<p><strong>The most common expressions:</strong> <code>*/5 * * * *</code> = every 5 minutes. <code>0 * * * *</code> = every hour at the top of the hour. <code>0 9 * * 1-5</code> = 9:00 AM, Monday through Friday. <code>0 0 1 * *</code> = midnight on the 1st of every month. <code>0 0 * * 0</code> = midnight every Sunday.</p>

<p>The <strong>day-of-month vs day-of-week trap:</strong> When both day-of-month and day-of-week are specified (not <code>*</code>), cron runs when <strong>either</strong> condition matches. <code>0 0 13 * 5</code> runs at midnight on every Friday AND on the 13th of every month — not just "Friday the 13th." This is the most common cron scheduling bug. If you want "Friday the 13th," you need logic inside the script, not in the cron expression.</p>

<h2>Step Values: The Most Misunderstood Feature</h2>

<p><code>*/5</code> in the minute field means "every 5 minutes" — specifically, at minutes 0, 5, 10, 15, 20, ... 55. It does NOT mean "every 5 minutes starting from whenever the system booted." Cron always starts counting from the beginning of the range. <code>*/7</code> means minutes 0, 7, 14, 21, 28, 35, 42, 49, 56 — an uneven pattern that most people do not intend. Use step values that divide evenly into the range (2, 3, 4, 5, 6, 10, 12, 15, 20, 30) unless you have a specific reason for an uneven pattern.</p>

<p>You can also combine ranges with steps: <code>1-30/10</code> in the minute field means minutes 1, 11, 21. This is useful for offsetting jobs — running at 1, 11, 21, 31, 41, 51 minutes past the hour instead of the more common 0, 10, 20, 30, 40, 50. Offsetting reduces load spikes when hundreds of cron jobs all fire at minute 0.</p>

<h2>Using a Cron Parser as a Safety Check</h2>

<p>Before you save a crontab, paste the expression into a <a href="/en/tools/cron-parser">cron parser</a>. The human-readable description tells you what the expression actually does — not what you intended it to do. The next-execution list shows you exactly when the job will fire in the next few hours or days. If the times look wrong, the expression is wrong.</p>

<p>This 5-second check catches the most common mistakes: confusing day-of-month with day-of-week, using step values that produce unexpected patterns, forgetting that cron uses the server's timezone (not UTC necessarily), and accidentally scheduling jobs for times that do not exist (2:30 AM during daylight saving spring-forward).</p>

<p>Parse your cron expressions at <a href="/en/tools/cron-parser">free cron parser</a> — paste, read, verify, save. Five seconds that prevents a 3 AM production incident.</p>`
  },
  {
    slug: "text-sorter-organize-lists-clean-data",
    title: "Text Sorter How to Organize Lists and Clean Data Without Excel — The 7 Sort Modes Every Data Cleaner Needs",
    description: "You have a messy list of 500 items. You need them alphabetized, deduped, and trimmed. Excel is overkill. Here's how to sort, clean, and organize any text list in seconds.",
    date: "2026-07-08",
    category: "Text Tools",
    tags: ["text sorter", "sort lines", "data cleaning", "alphabetical sort", "productivity"],
    relatedTools: ["text-sorter", "remove-duplicate-lines", "word-counter"],
    content: `<p>You have a CSV export of 500 email addresses. Some are duplicates. Some have trailing spaces. The order is whatever the database felt like returning. You need them alphabetized, deduped, and trimmed before importing into your email tool. You could open Excel, fight with the sort dialog, write a formula for dedup, and export. Or you could paste the list into a <a href="/en/tools/text-sorter">text sorter</a>, click A→Z, check Remove Duplicates and Trim Lines, and be done in three seconds.</p>

<p>Text sorting sounds trivial — every programming language has a <code>.sort()</code> method. But the difference between the seven sort modes matters more than you think, and the combination of sort + dedup + trim in one click is what makes a dedicated tool faster than writing code every time. Here is when to use each mode.</p>

<h2>The Seven Sort Modes and When They Matter</h2>

<p><strong>A→Z (Alphabetical ascending):</strong> The default. Use for email lists, name lists, dictionary words, any text where alphabetical order is the natural organization. Combined with Remove Duplicates, it turns a messy list into a clean, deduped, alphabetized reference.</p>

<p><strong>Z→A (Alphabetical descending):</strong> Same as A→Z but reversed. Useful when you want to see the "end" of the alphabet first — Z-prefix usernames, last-to-first in a reverse directory, or simply when you need the opposite order for a specific workflow.</p>

<p><strong>By Length:</strong> Sorts lines from shortest to longest. This reveals patterns you cannot see in alphabetical order. All the single-word entries cluster at the top. All the paragraph-length entries sink to the bottom. Use this to find abnormally short or long entries in a dataset — a customer name that is one character, a product description that is 5,000 characters, a URL that is suspiciously long.</p>

<p><strong>Numeric:</strong> Treats each line as a number and sorts by numeric value. Crucially, <code>1, 2, 10, 20</code> instead of <code>1, 10, 2, 20</code> (which is what alphabetical sort would produce). Use for version numbers, quantities, prices, IDs, any numeric data stored as text. Lines that are not valid numbers are pushed to the end, making it easy to spot non-numeric entries in what should be a numeric column.</p>

<p><strong>Randomize:</strong> Shuffles lines into random order using Fisher-Yates. Use for: randomizing quiz questions, creating randomized assignment or presentation order, picking a random winner from a list, generating random test data, or shuffling a playlist. Each click produces a different order.</p>

<p><strong>Reverse:</strong> Simply reverses the current order — last line becomes first, first becomes last. Use when you need the opposite of whatever order the list is currently in, without re-sorting. Combined with sorting first, this gives you descending versions of any sort mode.</p>

<h2>The Power Trio: Sort + Dedup + Trim</h2>

<p>The three checkboxes are what make a <a href="/en/tools/text-sorter">text sorter</a> a data cleaning tool, not just a sorting tool. <strong>Remove Duplicates</strong> eliminates repeated lines, keeping the first occurrence. Combined with Ignore Case, "Apple" and "apple" are treated as duplicates. <strong>Trim Lines</strong> strips leading and trailing whitespace from every line — "apple " and "apple" become the same word before sorting. This catches the most common source of "false duplicates" in real-world data: invisible spaces.</p>

<p>Use this trio together for the standard data-cleaning workflow: paste → Trim Lines → Remove Duplicates → A→Z → copy. The whole process takes under ten seconds and produces a clean, deduped, alphabetized, whitespace-normalized list ready for import into any system.</p>

<p>Clean your next list at <a href="/en/tools/text-sorter">free text sorter</a> — paste, sort, dedupe, done.</p>`
  },
  {
    slug: "uuid-generator-vs-random-number-unique-vs-random",
    title: "UUID Generator vs Random Number Generator When Unique Matters More Than Random — and Why v4 UUIDs Are Not Actually Random Numbers",
    description: "A UUID and a random number both look like strings of digits. But one is designed for global uniqueness and the other for statistical randomness. They solve different problems.",
    date: "2026-07-08",
    category: "Developer",
    tags: ["UUID generator", "random number generator", "unique ID", "GUID", "collision probability"],
    relatedTools: ["uuid-generator", "random-number-generator", "hash-generator"],
    content: `<p>You need to generate identifiers for database rows. You have two options: a <strong>random number</strong> (1 to 9,999,999,999) or a <strong>UUID</strong> (like <code>550e8400-e29b-41d4-a716-446655440000</code>). Both look arbitrary. Both are generated programmatically. But they solve fundamentally different problems — and using the wrong one leads to collisions, security vulnerabilities, or system failures.</p>

<p>A <a href="/en/tools/random-number-generator">random number generator</a> gives you a value from a fixed range. A <a href="/en/tools/uuid-generator">UUID generator</a> gives you a globally unique identifier. The difference is not the format. It is the <strong>guarantee</strong>. Here is when each one makes sense.</p>

<h2>UUID v4: Designed for Uniqueness Across Space and Time</h2>

<p>A UUID v4 (Universally Unique Identifier version 4) is a 128-bit number, typically displayed as 36 characters: 32 hex digits separated by 4 hyphens. The "v4" means 122 of the 128 bits are randomly generated. The remaining 6 bits encode the version (4) and variant. This gives approximately 5.3 × 10³⁶ possible UUIDs — a number so large that the probability of generating a duplicate is effectively zero, even if every computer on Earth generated UUIDs continuously for decades.</p>

<p>The key property: UUIDs are designed to be generated <strong>independently</strong> by different systems without coordination. Your web server, your mobile app, and your database replica can all generate UUIDs without talking to each other, and the probability of collision is negligible. This is why distributed systems use UUIDs as primary keys — no central ID generator, no sequence coordination, no bottleneck.</p>

<p>UUIDs are not random numbers. They are <strong>unique identifiers</strong>. The randomness is a means to achieve uniqueness, not the goal. Using a UUID where you need a random number (like shuffling a list or picking a random winner) is wrong — UUIDs are biased by the version and variant bits, and their length makes them impractical for human-facing random selection.</p>

<h2>Random Number Generator: Statistical Randomness for Decisions</h2>

<p>A <a href="/en/tools/random-number-generator">random number generator</a> produces values from a specified range (1-100, 1-10000, etc.) with a uniform distribution. Each value in the range has an equal probability of being selected. The goal is <strong>fairness and unpredictability</strong>, not uniqueness.</p>

<p>If you generate 10 random numbers from a range of 1-100, duplicates are expected — that is the birthday paradox at work. With only 23 people, the probability of a shared birthday exceeds 50%. With 10 random numbers from 1-100, the probability of at least one duplicate is about 37%. This is not a bug. It is the expected behavior of a system designed for fairness, not uniqueness.</p>

<p>Use random numbers for: A/B test group assignment, picking a random winner from a list, generating random sample data, simulating dice rolls, and any situation where you need an unbiased selection from a defined range. Use UUIDs for: database primary keys, request IDs in distributed systems, file names when users might upload files with the same name, and any situation where a collision would break something.</p>

<h2>The Quick Decision Rule</h2>

<p>If a collision would <strong>break your application</strong> (duplicate primary key, conflicting file name) → UUID. If a collision is <strong>expected and acceptable</strong> (random sampling, A/B testing, dice simulation) → random number generator. The tools are named for what they generate, but the decision is about what happens when — not if — a duplicate occurs.</p>

<p>Generate both at <a href="/en/tools/uuid-generator">UUID generator</a> and <a href="/en/tools/random-number-generator">random number generator</a> — understand the guarantee before you pick the tool.</p>`
  },
  {
    slug: "color-contrast-checker-vs-color-picker-design-vs-accessibility",
    title: "Color Contrast Checker vs Color Picker Design vs Accessibility — Why Picking Beautiful Colors Is Not Enough",
    description: "You picked a gorgeous pale gray text on a white background. It looks elegant. It also fails WCAG contrast requirements and is unreadable for 12% of your users. Here's how to design for both beauty and accessibility.",
    date: "2026-07-08",
    category: "Developer",
    tags: ["color contrast checker", "color picker", "WCAG", "accessibility", "design"],
    relatedTools: ["color-contrast-checker", "color-picker", "color-names"],
    content: `<p>You design a landing page. The hero text is a subtle gray (#999999) on a white background (#FFFFFF). It looks elegant. It passes your designer's eye test. It also fails <strong>WCAG AA contrast requirements</strong> — the contrast ratio is 2.85:1, well below the 4.5:1 minimum for normal text. Approximately 12% of men and 0.5% of women have some form of color vision deficiency. For them, your elegant gray text is invisible.</p>

<p>A <a href="/en/tools/color-picker">color picker</a> helps you choose beautiful colors. A <a href="/en/tools/color-contrast-checker">color contrast checker</a> tells you whether those colors are actually readable. They are complementary tools, not competitors. Here is why you need both in your design workflow.</p>

<h2>What WCAG Contrast Ratios Actually Require</h2>

<p>The Web Content Accessibility Guidelines (WCAG) 2.1 define three conformance levels for color contrast:</p>

<p><strong>AA Normal Text (4.5:1):</strong> The minimum for body text, form labels, button text, and any text smaller than 18pt (24px) or 14pt (18.7px) bold. Most of your website's text falls under this requirement. #999999 on white fails at 2.85:1. #767676 on white passes at exactly 4.54:1 — just barely. The safe minimum for gray text on white is #767676 or darker.</p>

<p><strong>AA Large Text (3:1):</strong> For text larger than 18pt (24px) or bold text larger than 14pt (18.7px). Headlines and hero text often qualify for this lower threshold. #999999 on white — which failed for body text — passes for large text at 3:1.</p>

<p><strong>AAA Enhanced (7:1 for normal, 4.5:1 for large):</strong> The strictest level. Required for sites that serve elderly users, users with low vision, or accessibility-critical applications. At this level, even #595959 on white is borderline. Most commercial websites do not target AAA, but it is the gold standard.</p>

<h2>The Color Picker + Contrast Checker Workflow</h2>

<p><strong>Step 1: Pick with the color picker.</strong> Use the <a href="/en/tools/color-picker">color picker</a> to visually select a foreground color (text) and background color (background, button, banner). The picker gives you the hex code, RGB, and HSL values. This is the creative step — you are choosing colors that look good together.</p>

<p><strong>Step 2: Verify with the contrast checker.</strong> Paste the hex codes into the <a href="/en/tools/color-contrast-checker">contrast checker</a>. It instantly shows the contrast ratio and whether it passes AA, AAA, or fails each level. If it fails, adjust the lightness of the foreground color — making text darker on light backgrounds is the simplest fix.</p>

<p><strong>Step 3: Iterate until both criteria are met.</strong> For a given background color, there is a range of foreground colors that both look good AND pass contrast requirements. The contrast checker helps you find the boundary. The color picker helps you stay on the aesthetically pleasing side of it.</p>

<h2>The Business Case for Contrast</h2>

<p>This is not just about compliance. Low-contrast text <strong>reduces conversion rates</strong>. If users cannot read your call-to-action button text, they do not click. If they cannot read your pricing table, they do not buy. A study by the Nielsen Norman Group found that users read low-contrast text 26% slower and make more errors. The accessibility fix is also a business optimization.</p>

<p>Check your colors at <a href="/en/tools/color-contrast-checker">color contrast checker</a> and pick new ones at <a href="/en/tools/color-picker">color picker</a> — design and accessibility are not opposites. They are two steps in the same workflow.</p>`
  },
  {
    slug: "life-hacks-psychology-of-simple-shortcuts",
    title: "The Psychology of Life Hacks Why Simple Shortcuts Feel So Satisfying — and Why Some of Them Actually Work",
    description: "Life hacks are tiny optimizations that feel disproportionately good. A binder clip for a toothpaste tube, a rubber band for a stripped screw. The psychological payoff is real — here's the science behind why shortcuts make us happy.",
    date: "2026-07-08",
    category: "Reference",
    tags: ["life hacks", "psychology", "productivity", "mental shortcuts", "everyday tips"],
    relatedTools: ["life-hacks", "book-of-answers", "lateral-thinking"],
    content: `<p>You use a binder clip to squeeze the last bit of toothpaste out of the tube. The hack saves you maybe 30 cents worth of toothpaste. But the satisfaction you feel is completely disproportionate to the financial savings. You feel clever. You feel efficient. You feel like you <strong>won</strong> against the designed obsolescence of a toothpaste tube. This is the psychology of life hacks — and it explains why a collection of <a href="/en/tools/life-hacks">100 life hacks</a> is one of the most popular pages on the internet.</p>

<p>Life hacks are not really about saving time or money. They are about the <strong>psychological reward of finding a clever solution</strong>. Here is the science behind why tiny shortcuts feel so good, and why some of them actually work.</p>

<h2>The Insight Aha Moment: Dopamine on a Micro Scale</h2>

<p>When you learn a life hack — "use a rubber band to remove a stripped screw" — your brain experiences a small <strong>insight moment</strong>. Neuroscientists call this the "aha effect." It triggers a release of dopamine in the nucleus accumbens, the same reward pathway activated by food, money, and social approval. The insight does not need to be profound. It just needs to be <strong>unexpected and useful</strong>.</p>

<p>The life hack format is perfectly engineered for this. It is a problem you recognize ("yes, stripped screws are annoying"), followed by a solution you did not expect ("a rubber band — really?"), followed by immediate applicability ("I have a rubber band in my desk drawer right now"). The entire cycle — recognition, surprise, utility — happens in under five seconds. That is a micro-dose of dopamine, and it is genuinely addictive.</p>

<h2>Why Grouped Hacks Feel More Valuable</h2>

<p>A single life hack is a tip. A curated collection of 100 life hacks is a <strong>resource</strong>. The difference is psychological. When you browse a <a href="/en/tools/life-hacks">life hacks collection</a>, you are not looking for one specific solution. You are browsing for the <strong>possibility of discovering something useful</strong>. The anticipation of finding a relevant hack is itself rewarding — the same mechanism that makes scrolling social media or flipping through a magazine satisfying.</p>

<p>This is also why life hack collections are organized by category. Cleaning hacks, kitchen hacks, travel hacks, tech hacks — each category primes your brain for a specific context. "I cook. There might be something here for me." The categorization makes the browsing feel productive rather than random.</p>

<h2>Which Life Hacks Actually Work (and Which Are Just for Fun)</h2>

<p>Not all life hacks are created equal. Some are genuinely useful optimizations: using a wooden spoon across a boiling pot to prevent it from boiling over (physics — the spoon pops the bubbles), putting a wet paper towel under a cutting board to stop it from sliding (friction), or using bread to pick up broken glass shards (the porous surface catches tiny splinters). These work because they exploit real physical principles.</p>

<p>Others are placebo dressed as cleverness. Using a hair straightener to iron a shirt collar saves you from getting out the ironing board, but the time spent heating the straightener and carefully pressing the collar is often longer than just ironing the shirt. The hack <em>feels</em> clever, which is the point — but the actual time savings are imaginary.</p>

<p>The best life hacks combine <strong>real utility with the aha moment</strong>. They work, and they make you feel smart for knowing them. That is the sweet spot. Browse the full collection at <a href="/en/tools/life-hacks">100 life hacks</a> — you will find at least three that you will actually use, and a dozen more that will make you smile.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("Free station: 170->done.")