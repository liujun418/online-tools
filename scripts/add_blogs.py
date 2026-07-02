"""Add 6 blogs to free station (136→142) — July 2, 2026"""
import os, sys

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "url-encoder-double-encoding-hidden-bug",
    title: "URL Encoder Double Encoding The Hidden Bug That Breaks Your Links",
    description: "Double encoding turns %20 into %2520 and breaks URLs silently. Here's why it happens, how to spot it, and how to fix it before your users notice.",
    date: "2026-07-02",
    category: "Developer Tools",
    tags: ["URL encoder", "double encoding", "percent encoding", "query string", "web debugging"],
    relatedTools: ["url-encoder", "url-decoder", "text-diff"],
    content: `<p>You share a link with a colleague: <code>https://example.com/search?q=coffee+shop</code>. They click it and get a 404. You check the URL in their browser and see <code>%2520</code> where there should be a space. What happened? <strong>Double encoding</strong> — the URL got encoded twice, and now it's broken.</p>

<p>Double encoding is one of those bugs that's invisible in development, survives code review, and only appears when links pass through multiple systems. Here's how it happens and how to stop it.</p>

<h2>How Double Encoding Happens</h2>

<p>URL encoding converts special characters into <code>%XX</code> format. A space becomes <code>%20</code>. An ampersand becomes <code>%26</code>. The problem starts when a URL that's already encoded passes through a second encoder.</p>

<p>The second encoder sees the <code>%</code> character in <code>%20</code> and thinks "this percent sign needs to be encoded too." So it encodes <code>%</code> as <code>%25</code>, turning <code>%20</code> into <code>%2520</code>. Your browser now decodes <code>%25</code> back to <code>%</code>, leaving you with the literal string <code>%20</code> instead of a space.</p>

<p>This most commonly happens when: (1) your frontend encodes a query parameter, then your HTTP client encodes the entire URL again; (2) a redirect middleware re-encodes an already-encoded Location header; (3) you store encoded URLs in a database and encode them again on retrieval.</p>

<h2>Spotting Double Encoding in the Wild</h2>

<p>The telltale sign is <code>%25</code> in your URL. If you see <code>%2520</code>, <code>%2526</code>, or <code>%253D</code>, you're looking at double encoding. <code>%25</code> is the encoded version of <code>%</code>, so every double-encoded character starts with <code>%25</code>.</p>

<p>Quick diagnostic: decode the URL once. If the result still contains <code>%XX</code> sequences, decode it again. If the second decode produces readable text, you had double encoding. If the first decode already produces readable text, the URL was correctly single-encoded.</p>

<h2>The Query String Is the Most Common Victim</h2>

<p>Query strings are where double encoding does the most damage. A user searches for "café & bakery" and the URL should be <code>?q=caf%C3%A9+%26+bakery</code>. If it gets double-encoded, <code>%C3%A9</code> becomes <code>%25C3%25A9</code> and your server receives gibberish.</p>

<p>This gets worse with <strong>multi-byte UTF-8 characters</strong>. Chinese, Arabic, and emoji characters produce multiple <code>%XX</code> sequences. Double-encoding a single Chinese character can produce 18+ characters of percent-encoded chaos.</p>

<h2>Prevention: Encode Once, At the Boundary</h2>

<p>The golden rule: <strong>encode at the last possible moment</strong>, when the URL leaves your system. Don't encode data before storing it in a database. Don't encode in your React state. Encode when you construct the final URL string that goes into an <code>&lt;a href&gt;</code> or <code>fetch()</code> call.</p>

<p>If you're building URLs programmatically, use the <code>URL</code> constructor or a URL-building library instead of string concatenation. <code>new URL('/search', base).searchParams.set('q', query)</code> handles encoding correctly and won't double-encode.</p>

<p>For encoding URLs safely, use our <a href="/en/tools/url-encoder">URL encoder</a> which shows you exactly what gets encoded. For checking if a broken URL has been double-encoded, paste it into our <a href="/en/tools/text-diff">text diff tool</a> alongside the expected version. And for decoding URLs to see what they actually contain, decode in stages to spot the double-encoding layer.</p>
`,
  },
  {
    slug: "text-diff-code-review-merge-conflict",
    title: "Text Diff Code Review Merge Conflict Resolution Like a Senior Developer",
    description: "How senior developers use text diff tools to review pull requests, resolve merge conflicts, and catch bugs that syntax highlighting hides.",
    date: "2026-07-02",
    category: "Developer Tools",
    tags: ["text diff", "code review", "merge conflict", "PR review", "diff tool"],
    relatedTools: ["text-diff", "json-formatter", "markdown-preview"],
    content: `<p>Most developers use diff tools wrong. They scan the red and green lines in their PR, look for obvious mistakes, and click "Approve." Senior developers use diffs differently — they read them like a <strong>story of what changed and why</strong>, and they catch bugs that aren't visible in the final code.</p>

<p>A good text diff tool shows you more than what lines were added and deleted. It shows you <strong>intent</strong>, <strong>side effects</strong>, and <strong>inconsistencies</strong> across a changeset. Here's how to read diffs at a senior level.</p>

<h2>What to Look for in Every Diff</h2>

<p><strong>Deleted error handling:</strong> A line of error checking was removed. Was it replaced with something better, or did the developer just delete it because it was annoying? If there's no replacement, that's a regression waiting to happen.</p>

<p><strong>Changed constants:</strong> A timeout went from 5000ms to 1000ms. A retry count changed from 3 to 1. These look innocent in a diff but change system behavior dramatically. Every constant change needs a comment explaining why.</p>

<p><strong>Copied code blocks:</strong> A 15-line block appears in the diff with minor variable name changes. That's duplicated logic. Flag it — it should be extracted into a function, not copy-pasted.</p>

<p><strong>Accidental whitespace changes:</strong> A line shows as "changed" but only the indentation differs. This happens when someone's editor auto-formats code they didn't intend to modify. It clutters the diff and can mask real changes.</p>

<h2>Resolving Merge Conflicts with Confidence</h2>

<p>Merge conflicts happen when two branches changed the same lines. The diff shows you three versions: YOUR change, THEIR change, and the ORIGINAL. The key insight: <strong>don't just pick one side</strong>. Understand why both changes were made before deciding.</p>

<p>A conflict on an import statement usually means both branches added a dependency. Keep both imports. A conflict on a function body is harder — one branch refactored the logic while the other added a feature. In that case, the refactored version needs to incorporate the feature addition, which means manual merging, not just picking a side.</p>

<p>For complex conflicts, copy both versions into a side-by-side diff tool. Seeing them next to each other (not interleaved with conflict markers) makes the differences clearer and reduces the chance of losing someone's work.</p>

<h2>The Diff Check You're Probably Skipping</h2>

<p>After resolving conflicts, <strong>diff the merge result against the original base branch</strong>. This shows you exactly what the merged code changed from the common ancestor. It catches: (1) code that was accidentally deleted during conflict resolution, (2) imports that were removed by one branch but still needed, and (3) duplicate code from both branches that wasn't deduplicated.</p>

<p>For reviewing code changes, use our <a href="/en/tools/text-diff">text diff tool</a> with side-by-side view. For checking if JSON config files were changed correctly, our <a href="/en/tools/json-formatter">JSON formatter</a> pretty-prints nested data. And for reviewing documentation changes, our <a href="/en/tools/markdown-preview">Markdown preview</a> shows the rendered output.</p>
`,
  },
  {
    slug: "color-names-hex-to-human-design-tokens",
    title: "Color Names Hex to Human Readable Design Tokens for Your Design System",
    description: "#1E90FF is dodgerblue, but what do you call your brand's specific shade? How color naming systems bridge the gap between hex codes and human-readable design tokens.",
    date: "2026-07-02",
    category: "Developer Tools",
    tags: ["color names", "hex color", "design tokens", "CSS color", "design system"],
    relatedTools: ["color-names", "color-picker", "color-contrast-checker"],
    content: `<p>Open any CSS file and you'll find colors expressed three ways: hex codes like <code>#1E90FF</code>, RGB functions like <code>rgb(30, 144, 255)</code>, and named colors like <code>dodgerblue</code>. None of these tell you what the color <strong>means</strong> in your design system. Is <code>#1E90FF</code> your primary brand color, your link color, or your error state?</p>

<p>This is the gap that <strong>design tokens</strong> fill — human-readable names that map to color values and carry semantic meaning. And a color name lookup tool is the bridge between the hex code your developer tools give you and the token name your design system expects.</p>

<h2>The Three Levels of Color Naming</h2>

<p><strong>Level 1: CSS Named Colors.</strong> There are 148 named colors in CSS — red, dodgerblue, mediumspringgreen, papayawhip. They're fun but useless for design systems. "Dodgerblue" tells you nothing about when or where to use it. And 148 colors is a tiny fraction of the 16.7 million colors your screen can display.</p>

<p><strong>Level 2: Design Token Names.</strong> These are semantic: <code>--color-primary-500</code>, <code>--color-surface-background</code>, <code>--color-text-muted</code>. The name tells you the color's <strong>role</strong> in the system. Primary-500 is the fifth shade in the primary palette. Text-muted is for secondary text. A designer can change the hex value of <code>--color-primary-500</code> from blue to green, and every component that uses it updates automatically.</p>

<p><strong>Level 3: Functional Names.</strong> These are the most specific: <code>--color-button-primary-hover</code>, <code>--color-input-border-focus</code>, <code>--color-alert-error-background</code>. They map directly to a specific UI state. Functional names are verbose but impossible to misuse — a developer can't accidentally use the error color for a success message when the token is named <code>alert-error-background</code>.</p>

<h2>Building the Bridge: Hex → Human</h2>

<p>Here's a scenario that happens constantly: your designer sends a Figma screenshot with a color circled and says "use this blue." You eyedropper it, get <code>#3B82F6</code>, and now need to know: is this already in our design system? What's the closest named CSS color? What should the token name be?</p>

<p>A color name lookup tool answers all three. <code>#3B82F6</code> is closest to "dodgerblue" (CSS name), might already be <code>blue-500</code> in your system, and could be named <code>--color-action-primary</code> if it's used for primary buttons and links.</p>

<h2>When Named Colors Beat Hex Codes</h2>

<p>Hex codes are precise but <strong>impossible to discuss verbally</strong>. "Change the button to three-B-eight-two-F-six" is not a conversation anyone wants to have. Named colors are less precise but communicable: "use the primary blue, two shades darker." Design tokens give you both: the precision of a hex code and the communicability of a name.</p>

<p>For finding the name of any hex color, use our <a href="/en/tools/color-names">color names finder</a> which maps hex codes to CSS names and closest matches. For picking colors visually, our <a href="/en/tools/color-picker">color picker</a> gives you the hex code and RGB values. And for checking if your color combinations are accessible, our <a href="/en/tools/color-contrast-checker">color contrast checker</a> validates WCAG compliance.</p>
`,
  },
  {
    slug: "json-to-csv-nested-data-flattening",
    title: "JSON to CSV Nested Data Flattening vs Manual Excel Import",
    description: "Nested JSON objects and arrays don't fit into flat CSV columns. Here's how flattening strategies compare to manual Excel data import for real-world datasets.",
    date: "2026-07-02",
    category: "Developer Tools",
    tags: ["JSON to CSV", "nested JSON", "data flattening", "Excel import", "data pipeline"],
    relatedTools: ["json-to-csv", "json-formatter", "csv-to-json"],
    content: `<p>You exported your analytics data as JSON. It's a 200MB file with nested objects three levels deep. You need to open it in Excel for your manager, who wants a pivot table by end of day. You have two choices: (1) manually flatten it in Excel for four hours, or (2) use a <strong>JSON to CSV converter</strong> that handles nested data in 30 seconds.</p>

<p>The catch: JSON to CSV conversion of nested data isn't straightforward. You have to make decisions about how to flatten the structure, and each decision has trade-offs.</p>

<h2>The Problem: JSON Trees vs CSV Tables</h2>

<p>JSON is a <strong>tree</strong>. Each object can contain other objects and arrays, which can contain more objects and arrays, to any depth. CSV is a <strong>table</strong>. Each row has the same columns, and each cell contains a single value. Converting a tree to a table requires <strong>flattening</strong> — deciding how to collapse nested structures into flat columns.</p>

<p>Consider a user object with an address: <code>{"name": "Alice", "address": {"street": "123 Main", "city": "Springfield", "zip": "62701"}}</code>. The simplest flattening creates columns like <code>address.street</code>, <code>address.city</code>, <code>address.zip</code>. This works for one level of nesting but gets unwieldy fast.</p>

<h2>Arrays: The Real Headache</h2>

<p>Objects nest neatly into dot-notation columns. Arrays are messier. A user with multiple phone numbers — <code>["555-0100", "555-0101"]</code> — doesn't fit into a single cell. Your options:</p>

<p><strong>Explode into multiple rows:</strong> Create one row per array element. Alice with two phone numbers becomes two rows, each with one phone number and the rest of Alice's data duplicated. This preserves all data but inflates row count and makes aggregation harder.</p>

<p><strong>Join into a single cell:</strong> Store all phone numbers in one cell, separated by commas or pipes: <code>555-0100|555-0101</code>. This keeps one row per user but breaks Excel's ability to filter or sort by phone number.</p>

<p><strong>Explode into multiple columns:</strong> Create <code>phone_0</code>, <code>phone_1</code>, <code>phone_2</code> columns up to the maximum array length. Clean but fragile — add a user with three phone numbers and your schema breaks.</p>

<h2>Flattening Strategy Decision Tree</h2>

<p><strong>Use dot-notation columns</strong> (address.city) when: nesting depth ≤ 3, every object has the same keys, and column count stays under 50. This is the most Excel-friendly format.</p>

<p><strong>Use row explosion</strong> when: arrays contain the primary data you need to analyze, each array element is independently meaningful, and you're loading into a database or BI tool (not Excel).</p>

<p><strong>Use JSON columns</strong> (keep nested objects as JSON strings in cells) when: the nested data is metadata that won't be filtered or sorted, and you need to preserve the exact original structure for later programmatic processing.</p>

<h2>Manual Excel vs Automated Conversion</h2>

<p>Excel's "Get Data from JSON" (Power Query) handles one level of nesting automatically. Beyond that, you're manually expanding columns and writing M formulas. For a one-time conversion of a small file, Power Query is fine. For anything you'll do more than once, or files over 10MB, automated JSON to CSV conversion saves hours and produces consistent results.</p>

<p>For converting nested JSON to CSV, use our <a href="/en/tools/json-to-csv">JSON to CSV converter</a> with flattening options. For inspecting the JSON structure before conversion, our <a href="/en/tools/json-formatter">JSON formatter</a> shows the full tree. And for converting CSV back to JSON after Excel editing, our <a href="/en/tools/csv-to-json">CSV to JSON converter</a> handles the reverse direction.</p>
`,
  },
  {
    slug: "stopwatch-timer-deep-work-focus",
    title: "Stopwatch Timer Deep Work Focus Sessions vs Pomodoro Apps",
    description: "Pomodoro apps enforce 25-minute blocks. A simple stopwatch lets you measure real focus duration. Here's when each approach produces better deep work.",
    date: "2026-07-02",
    category: "Fun & Media",
    tags: ["stopwatch", "timer", "deep work", "Pomodoro", "productivity", "focus"],
    relatedTools: ["stopwatch-and-timer", "reaction-test", "scoreboard"],
    content: `<p>The Pomodoro Technique is the default productivity advice: work for 25 minutes, take a 5-minute break, repeat. Apps enforce this rhythm with timers, notifications, and streak tracking. And for many people, it's the wrong approach.</p>

<p>A simple <strong>stopwatch</strong> — one that counts UP, not down — can be a better tool for deep work. Here's why, and when to use each approach.</p>

<h2>The Problem with Fixed Intervals</h2>

<p>The 25-minute Pomodoro block was chosen arbitrarily by Francesco Cirillo in the 1980s using a tomato-shaped kitchen timer. It has no scientific basis. And the research we do have on attention spans suggests that <strong>focus duration varies dramatically</strong> by person, task, time of day, and experience level.</p>

<p>A 25-minute timer interrupts you just as you're reaching <strong>flow state</strong> — the mental state where you're fully immersed and producing your best work. Cal Newport's research on deep work suggests that flow takes 15-20 minutes to achieve. A 25-minute Pomodoro gives you 5-10 minutes of actual flow before the timer breaks it.</p>

<p>Worse, the timer creates <strong>deadline anxiety</strong>. You watch the countdown: 8 minutes left, 5 minutes, 2 minutes. Your brain shifts from "solve the problem" to "beat the clock." That's productive for email triage, destructive for creative problem-solving.</p>

<h2>What a Stopwatch Does Better</h2>

<p>A stopwatch counts UP. You click "start" when you begin focused work and "stop" when you finish or get interrupted. There's no countdown, no deadline, no anxiety about the remaining time. You just measure how long you actually focused.</p>

<p>After a week of stopwatch tracking, you learn your <strong>actual focus patterns</strong>: you can sustain 90 minutes in the morning but only 20 minutes after lunch. You do your best coding between 9-11am and your best writing between 2-3pm. A Pomodoro app can't tell you this — it imposes a schedule instead of revealing your natural rhythm.</p>

<p>The stopwatch also creates <strong>accountability without pressure</strong>. Seeing "42 minutes" on the clock when you get distracted is a gentle nudge to get back to work. Seeing "3 minutes left" on a Pomodoro timer is permission to slack off until the break.</p>

<h2>When Pomodoro Actually Works</h2>

<p>Pomodoro shines for <strong>tasks you're avoiding</strong>. When you really don't want to start something, "just 25 minutes" is psychologically manageable. It's also good for <strong>shallow work</strong> — email, admin, meetings prep — where flow state isn't relevant and frequent context switches are fine.</p>

<p>For deep work (coding, writing, designing, problem-solving), switch to a stopwatch. Start it, work until your attention naturally flags, and stop. Over time, you'll extend your focus duration — not because a timer told you to, but because you trained your attention span.</p>

<p>For tracking your focus sessions, use our <a href="/en/tools/stopwatch-and-timer">stopwatch and timer</a> with both count-up and countdown modes. For measuring your mental performance after focus sessions, our <a href="/en/tools/reaction-test">reaction time test</a> shows cognitive fatigue. And for tracking scores in focus challenges with colleagues, our <a href="/en/tools/scoreboard">scoreboard</a> adds friendly competition.</p>
`,
  },
  {
    slug: "coin-flip-psychology-trust-random",
    title: "The Psychology of Coin Flips Why We Trust a 50-50 Chance to Make Decisions",
    description: "Coin flips don't actually produce 50-50 results. But the psychology of why we trust them to make hard decisions reveals something deeper about human nature.",
    date: "2026-07-02",
    category: "Fun & Media",
    tags: ["coin flip", "randomness", "decision psychology", "probability", "cognitive bias"],
    relatedTools: ["coin-flip", "random-number-generator", "dice-roller"],
    content: `<p>You're torn between two choices — take the job offer or stay, move to the new city or don't, say yes or no. Someone says "just flip a coin." You flip, it lands on heads, and suddenly you know what you wanted all along — not because the coin decided, but because your <strong>emotional reaction to the result</strong> revealed your true preference.</p>

<p>This is the paradox of coin flips: they work not because they're random, but because they <strong>surface what you already want</strong>. And the psychology behind why we trust a piece of metal to make life decisions is more interesting than the probability.</p>

<h2>Coins Aren't Actually 50-50</h2>

<p>Let's get the math out of the way first. A coin flip is not a perfect 50-50 proposition. Stanford mathematician Persi Diaconis showed that a coin has about a <strong>51% chance of landing on the same side it started on</strong>. The bias comes from precession — the coin wobbles as it spins, spending slightly more time with the starting side facing up.</p>

<p>This 1% bias is small enough that it doesn't matter for decision-making, but it means coin flips are not truly random. They're <strong>chaotic</strong> — deterministic in principle but unpredictable in practice because the initial conditions (force, angle, air resistance) are too complex to measure precisely.</p>

<h2>Why We Trust Coins for Decisions</h2>

<p>Coin flips work for three psychological reasons that have nothing to do with probability.</p>

<p><strong>First: decision fatigue relief.</strong> When you've been weighing pros and cons for hours, your brain is exhausted. The coin offloads the decision to an external agent. It's not that the coin is wise — it's that <strong>any decision feels better than no decision</strong>, and the coin breaks the stalemate.</p>

<p><strong>Second: the reaction test.</strong> The moment the coin lands, you feel either relief or disappointment. That flash of emotion is your true preference revealing itself. If it lands on "take the job" and your stomach drops, you didn't actually want the job. The coin didn't make the decision — it <strong>made your hidden preference visible</strong>.</p>

<p><strong>Third: blame deflection.</strong> If the decision goes badly, you can blame the coin. This sounds silly, but it reduces anticipatory anxiety enough to actually make the decision. The coin absorbs the fear of being wrong.</p>

<h2>When NOT to Flip a Coin</h2>

<p>Don't flip a coin for: decisions with asymmetric consequences (the downside of one option is catastrophic), decisions that affect other people without their input, decisions that are reversible (just pick one and change later if needed), and decisions where you have time to gather more information (uncertainty is not the same as indifference).</p>

<p>Do flip a coin for: decisions where both options are genuinely acceptable, decisions where you've been stuck for more than 24 hours, and decisions where the cost of delay exceeds the cost of a wrong choice.</p>

<p>For your next tough decision, use our <a href="/en/tools/coin-flip">coin flip tool</a> — and pay attention to how you feel about the result. For generating random numbers for more complex decisions, our <a href="/en/tools/random-number-generator">random number generator</a> handles custom ranges. And for probability-based decision-making with multiple outcomes, try our <a href="/en/tools/dice-roller">dice roller</a>.</p>
`,
  },

];

export function getBlogPosts(): BlogPost[]"""

if old not in content:
    print("ERROR: marker not found in free station blog.ts!")
    print("Looking for:", repr(old))
    sys.exit(1)

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("Free station: 6 blogs inserted successfully (136 -> 142)")
print(f"File size: {len(content)} chars")
