# -*- coding: utf-8 -*-
import io

path = r"C:\Users\jun\online-tools\src\lib\blog.ts"
with io.open(path, encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "image-to-base64-reduce-requests-speed-guide",
    title: "Faster First Load: Using Base64 Images to Cut HTTP Requests",
    description: "A tiny icon that takes 80ms to load can still delay your page. Embedding small images as Base64 cuts the request entirely — but only if you know where it actually helps.",
    date: "2026-09-15",
    category: "Developer",
    tags: ["image to base64", "page speed", "HTTP requests", "performance", "data URI"],
    relatedTools: ["image-to-base64", "css-minifier", "svg-minifier"],
    content: `<p>Your page has a tiny 2KB icon and it still costs you an 80ms HTTP request. The browser asks, the server answers, and for a file smaller than this paragraph, you paid a full round trip. Embedding that image as a Base64 string into your HTML or CSS cuts the request entirely — but the trick only works if you're careful about where you use it.</p>

<h2>When Less Is More (and When It Isn't)</h2>

<p>Base64 encoding adds roughly 33% to a file's size, so it only wins when the overhead of the request is bigger than the overhead of the extra bytes. For small images — icons, logos, tiny arrows, background tiles — it's almost always a win. For anything bigger than a few kilobytes, the bloated file costs more than the saved request. The counter-intuitive part: a well-cached small image might load <em>faster</em> from the browser cache than an embedded one on repeat visits, because the cached file is smaller than the encoded string. Run the image through an <a href="/en/tools/image-to-base64">image to Base64</a> tool, compare the encoded size to the original, and decide based on how many times a visitor will see it.</p>

<h2>The Right Places for Embedded Images</h2>

<p>The best candidates are the images that load above the fold on a first visit and don't change between pages. A favicon, a loading spinner, a small logo, a few inline icons — these are exactly where Base64 shines. Pair the strategy with a <a href="/en/tools/css-minifier">CSS minifier</a> so you're not also shipping unminified CSS alongside the embedded image, and for vector images, run them through an <a href="/en/tools/svg-minifier">SVG minifier</a> first — a smaller SVG makes a smaller Base64 string, which makes the whole trade-off easier to justify. Small files + first load + high visibility = the sweet spot.</p>

<h2>One Rule to Avoid Regret</h2>

<p>One simple rule keeps you from overdoing it: don't embed anything bigger than 10KB, and don't embed it more than once per page. We covered the data URI trade-offs in our guide to <a href="/en/blog/image-to-base64-data-uri-practical-guide">practical Base64 image uses</a>; the speed version is the same idea with a sharper focus. Embed the small stuff, keep the big stuff as separate files, and your first load gets faster without bloating the whole page.</p>`
  },
  {
    slug: "css-minifier-critical-css-first-load-guide",
    title: "Critical CSS: How a Minifier Makes Your First Paint Faster",
    description: "Your stylesheet is 200KB and only 10KB of it matters for the first screen. Inlining critical CSS above the fold is the fastest speed win most sites never try.",
    date: "2026-09-15",
    category: "Developer",
    tags: ["CSS minifier", "critical CSS", "above the fold", "first paint", "performance"],
    relatedTools: ["css-minifier", "html-to-markdown", "json-formatter"],
    content: `<p>You've got a 200KB stylesheet and the first screen only needs 10KB of it. The browser still downloads all 200KB before it can paint anything, because it doesn't know which rules matter yet. The fastest fix most sites never apply is to pull that 10KB — your critical CSS — inline into the page and defer the rest. A good CSS minifier is what makes the trick actually work, because every unminified byte in the critical path is a byte you didn't need.</p>

<h2>Why Critical CSS Moves the Needle</h2>

<p>First contentful paint is held up by render-blocking resources, and CSS is usually the biggest one. If the stylesheet is 200KB, the browser waits for all of it. If you put the 10KB the first screen needs directly in the HTML, the browser can paint as soon as it has those few kilobytes — and the rest of the stylesheet loads in the background. The counter-intuitive part is that you're technically adding bytes to the HTML, but because those bytes replace a blocking request, the page still renders faster. That's the whole trick.</p>

<h2>Build, Minify, Inline</h2>

<p>The workflow is straightforward. Identify which rules apply above the fold — either by hand for simple pages or with an automated tool for complex ones — extract them, run them through a <a href="/en/tools/css-minifier">CSS minifier</a>, and drop the minified version in a style tag at the top of the head. Load the full stylesheet asynchronously so it doesn't block rendering. Minification is non-negotiable here: whitespace and comments in the critical path are pure waste. For the HTML that carries the inline styles, keep the rest of the page lean too — a <a href="/en/tools/html-to-markdown">HTML to Markdown</a> pass can help spot markup bloat before it ships, and for any data structures riding along, a <a href="/en/tools/json-formatter">JSON formatter</a> keeps them readable during development without bloating production.</p>

<h2>The Fastest Fix That's Free</h2>

<p>Critical CSS is one of the highest-ROI speed improvements you can make, and it costs nothing except a little time identifying which rules matter. We covered minifier integration in our guide to <a href="/en/blog/css-minifier-build-tool-vs-online">build tools versus online minifiers</a>; the critical CSS version is the same principle aimed directly at first paint. Extract what the first screen needs, minify it, inline it, defer the rest — and watch your first paint drop.</p>`
  },
  {
    slug: "random-number-generator-fair-team-groups-guide",
    title: "Fair Team Grouping Without Anyone Complaining",
    description: "Picking teams by hand always produces the same complaint: the groups are rigged. A random number generator doesn't play favorites — here's how to use it so everyone trusts the result.",
    date: "2026-09-15",
    category: "Calculator",
    tags: ["random number generator", "team grouping", "fair teams", "tournament setup", "icebreaker"],
    relatedTools: ["random-number-generator", "dice-roller", "coin-flip"],
    content: `<p>You need to split a group into teams, and no matter how you do it, someone says the groups are rigged. Hand-picking invites bias, picking straws feels silly, and letting people choose always produces lopsided groups. A random number generator solves it in thirty seconds — if you do it in public, out loud, so everyone sees that the machine isn't playing favorites.</p>

<h2>The Fairness Problem</h2>

<p>People trust randomness more than they trust other people's judgment, even when the judgment is perfectly reasonable. The moment a real person picks the teams, every person on the weaker team sees bias, and nobody on the stronger team gets to enjoy the win. A <a href="/en/tools/random-number-generator">random number generator</a> takes you out of the equation entirely — the machine picks, and the machine has nothing to gain. The counter-intuitive part is that fairness matters less than perceived fairness. If everyone believes it's fair, it might as well be, and randomness produces that belief faster than any explanation.</p>

<h2>How to Do It in Public</h2>

<p>Run the generator in front of everyone. List the participants with numbers, generate numbers to assign them to groups, and let anyone who doubts the result press the button again to see it's not rigged. For small groups, a coin flip is enough for a binary split, so a <a href="/en/tools/coin-flip">coin flip</a> tool works as a quick variant. For tournament-style events with more complex seeding, a <a href="/en/tools/dice-roller">dice roller</a> adds a bit of theater — physical dice feel more random than a screen, even when the odds are identical. The key is that everyone watches it happen; a result delivered after the fact always feels cooked, no matter how fair it actually is.</p>

<h2>One Rule for No Complaints</h2>

<p>The only rule that really matters: generate the groups once, in front of everyone, and don't regenerate. We covered randomness in decision making in our guide to <a href="/en/blog/random-number-generator-beyond-dice-rolls">uses for random number generators</a>; team grouping is one of the simplest and most satisfying. Take yourself out of the decision, run it in public, and the complaining stops before it starts.</p>`
  },
  {
    slug: "reaction-test-caffeine-effect-on-reflexes-guide",
    title: "Does Coffee Actually Make You Faster? Test It Yourself",
    description: "Everyone says coffee sharpens you up. But how much faster are you really, and does the second cup add anything? A reaction test lets you measure the difference on your own brain.",
    date: "2026-09-15",
    category: "Fun & Media",
    tags: ["reaction test", "caffeine", "coffee", "reflexes", "self-experiment"],
    relatedTools: ["reaction-test", "stopwatch-and-timer", "scoreboard"],
    content: `<p>Everyone knows coffee makes you faster. But how much faster, and at what point does the second cup make you jittery instead of quick? A reaction test turns a feeling — "I'm more awake now" — into a number you can actually compare. You don't need a lab. You just need a baseline and a timer.</p>

<h2>The Baseline Is the Trick</h2>

<p>The hard part of any self-experiment is knowing where you started. Before your first coffee of the day, take a <a href="/en/tools/reaction-test">reaction test</a> five times and note your average — that's your baseline, groggy brain, no caffeine. Then have your coffee, wait twenty minutes, and take the test again. The difference is the actual effect of the coffee on <em>your</em> body, not some average in a study. The counter-intuitive part: most people are surprised by how small the difference is once they measure it. The feeling of being awake is much bigger than the measurable improvement in milliseconds.</p>

<h2>Run the Experiment Properly</h2>

<p>To make the results mean something, control the variables. Test at the same time each day. Use the same number of practice rounds so you're not just getting better at the test itself. Use a <a href="/en/tools/stopwatch-and-timer">stopwatch and timer</a> to measure the gap between the coffee and the test, and keep track of the numbers with a <a href="/en/tools/scoreboard">scoreboard</a> so you can see the trend across several days. If you really want to go deep, try the same thing with tea, energy drinks, or a cold shower and compare. The point isn't to publish a paper — it's to learn something about your own body that you can actually use.</p>

<h2>What You'll Probably Find</h2>

<p>Most people see a measurable boost from one cup and diminishing returns from a second. More than three and reaction time actually gets worse, because jitteriness costs more than alertness gains. We covered reflex training in our guide to <a href="/en/blog/reaction-test-pro-gamer-f1-driver">pro gamer reaction times</a>; the home version is the same idea scaled way down. Grab a baseline, test the coffee, and find out for yourself whether your morning ritual is actually working.</p>`
  },
  {
    slug: "qr-code-scanner-restaurant-menus-guide",
    title: "QR Code Menus Are Here to Stay — Use Them Right",
    description: "Scanning a code for the menu was pandemic-era emergency tech that never went away. Done well, it's faster and cleaner than a paper menu. Done badly, it's a frustration.",
    date: "2026-09-15",
    category: "Developer",
    tags: ["QR code scanner", "restaurant menus", "contactless", "QR menus", "customer experience"],
    relatedTools: ["qr-code-scanner", "qr-code-generator", "url-encoder"],
    content: `<p>The QR code menu started as a pandemic stopgap and never left. Some restaurants love it — cheaper to update, cleaner, no printing costs. Some customers hate it — another app to open, bad lighting, no one to ask when the code won't scan. The truth is that QR menus work fine when they're done well and feel terrible when they're not, and most of the difference comes down to a few simple choices.</p>

<h2>Why Scanning Fails</h2>

<p>The biggest frustration isn't the menu — it's getting the code to scan in the first place. Dark tables, glossy laminated cards, tiny codes tucked in a corner, glare from overhead lights — these are the things that turn a two-second task into thirty seconds of waving your phone. A good <a href="/en/tools/qr-code-scanner">QR code scanner</a> works in low light, but only up to a point. The counter-intuitive part: most restaurants don't test their own code in the actual lighting of the restaurant. They design it on a bright monitor and assume it will scan by candlelight.</p>

<h2>The Good QR Menu Checklist</h2>

<p>If you're the one setting it up, get the basics right. Print the code big enough — at least an inch square, bigger if it's across the table. Test it with the lights dimmed, the way customers will actually encounter it. Pair the code with a printed short version — the most-ordered items, the daily specials — so people who don't want to scan still have something to look at. If you're generating the code, use a <a href="/en/tools/qr-code-generator">QR code generator</a> with a high error-correction level so smudges and crumbs don't break it, and make sure the URL it points to is clean — run it through a <a href="/en/tools/url-encoder">URL encoder</a> if there are special characters, because a garbled link in a QR code is a dead menu.</p>

<h2>It's Not Going Anywhere</h2>

<p>QR menus aren't going back to paper, which means the good ones are going to get better and the bad ones are going to keep frustrating people. We covered QR security in our guide to <a href="/en/blog/qr-code-scanner-security-malicious-codes">malicious QR codes</a>; the restaurant version is the same technology in a friendlier context. Print it big, test it in the dark, keep a paper backup, and your customers will use it without even thinking about it.</p>`
  },
  {
    slug: "book-of-answers-hard-decisions-intuition-guide",
    title: "When You Can't Decide: Let a Random Book Test Your Gut",
    description: "You've been going back and forth for weeks and the decision still isn't getting easier. When logic fails, a book of answers doesn't tell you what to do — it reveals what you already want.",
    date: "2026-09-15",
    category: "Fun & Media",
    tags: ["book of answers", "decision making", "intuition", "hard choices", "random answers"],
    relatedTools: ["book-of-answers", "coin-flip", "lateral-thinking"],
    content: `<p>You've been going back and forth for weeks. Job offers, moves, relationships — the decisions that matter most are the ones where both sides look equally reasonable, and logic never quite tips the scale. When you've listed all the pros and cons and you still can't decide, the answer was never in the list. It's already in you, and a book of answers is just a way to pull it out.</p>

<h2>The Trick Isn't the Answer</h2>

<p>Here's how it works. You ask your question in your head, you open a <a href="/en/tools/book-of-answers">book of answers</a>, and you get a short, cryptic line. The line itself isn't the point — the point is your reaction to it. If the answer says "go for it" and you feel a wave of relief, you already knew what you wanted. If it says "wait" and you feel disappointed, you already knew that too. The counter-intuitive part: the book doesn't give you the answer. It gives you a chance to catch yourself having one.</p>

<h2>How to Use It Without Faking It</h2>

<p>Ask the question out loud, or at least with specific words in your head — vague questions get vague reactions. Pick one page, one answer, and don't regenerate until you get the one you secretly want; that defeats the whole point. If the answer genuinely doesn't land, try rephrasing the question and go again, but limit yourself to two or three tries. For binary decisions, a <a href="/en/tools/coin-flip">coin flip</a> works the same way — flip it, notice how you feel about the result, and that feeling is your real answer. For decisions that need a new angle rather than a yes/no, a <a href="/en/tools/lateral-thinking">lateral thinking</a> prompt can break the loop by making you think about the problem from a direction you hadn't considered.</p>

<h2>The Answer Was Already There</h2>

<p>Nobody makes hard decisions by math alone. We covered the psychology of coin flip decisions in our guide to <a href="/en/blog/coin-flip-vs-book-of-answers-decisions">coin flips versus the book of answers</a>; the core idea is the same. When logic has stopped helping, the fastest way forward is to give your intuition something to push against. Ask the question, get an answer, watch your reaction — and then decide.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

assert content.count(old) == 1, "marker not found or not unique"
content = content.replace(old, new_blogs)
with io.open(path, "w", encoding="utf-8", newline="\n") as f:
    f.write(content)
print("OK free station blogs inserted")
