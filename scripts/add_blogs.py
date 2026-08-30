# -*- coding: utf-8 -*-
import io

path = r"C:\Users\jun\online-tools\src\lib\blog.ts"
with io.open(path, encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "roi-calculator-marketing-campaign-guide",
    title: "Measuring Marketing ROI Without Guesswork",
    description: "A campaign brought in $900 on a $500 spend, so it's profitable, right? Not necessarily. Here's how to measure marketing ROI against the alternative, not against zero.",
    date: "2026-08-28",
    category: "Calculator",
    tags: ["ROI calculator", "marketing ROI", "campaign tracking", "ROAS", "small business"],
    relatedTools: ["roi-calculator", "percentage-calculator", "compound-interest"],
    content: `<p>You run a $500 ad campaign, it brings in $900 in sales, and your first instinct is to celebrate. You just made an 80% profit. Then you remember the product cost, the shipping, the two hours you spent on the creative, and the fact that you could have simply kept that $500 in the bank. The instinct wasn't wrong about the math — it was measuring against the wrong baseline.</p>

<h2>The "Profit" That Isn't Profit</h2>

<p>Most people measure a campaign against zero: revenue in, spend out, done. That ignores everything the revenue had to pay for before it reached you. If the $900 in sales carried $400 in product and delivery costs, your real return on that $500 is $100, not $400. The counter-intuitive part is that a campaign can look profitable and still be a bad decision, because the money could have earned a guaranteed return sitting in a high-yield account or a business savings buffer. A <a href="/en/tools/roi-calculator">ROI calculator</a> helps here because it lets you type in the full cost picture — not just the ad spend — and see the actual percentage you're earning on the money you committed.</p>

<h2>Compare to the Alternative, Not to Zero</h2>

<p>The upgrade that changes how you read results: compare each campaign to its alternative, not to doing nothing. Would this budget have earned more as a straight investment? Did the same spend on a different channel beat it last month? That comparison is where percentages matter, so convert every number into the same terms first with a <a href="/en/tools/percentage-calculator">percentage calculator</a> — the percentage gain on spend, the percentage each channel contributed, the percentage you lost to costs. When two campaigns both "made money," the one with the higher percentage gain on the same dollar is the one to repeat.</p>

<h2>Include Time, or You're Fooling Yourself</h2>

<p>The final piece is time, because a $100 gain in a week and a $100 gain in a year are completely different outcomes. Run the return through a <a href="/en/tools/compound-interest">compound interest</a> comparison to see what the same money would have done sitting invested — if the campaign beats that, it's genuinely earning its keep. We covered the difference between return calculations in our guide to <a href="/en/blog/roi-calculator-vs-manual-spreadsheet">ROI calculators versus spreadsheets</a>; the takeaway here is simpler. Measure against the alternative, include every cost, count the time, and only then trust the number the campaign hands you.</p>`
  },
  {
    slug: "code-formatter-read-messy-code-guide",
    title: "Read Someone Else's Messy Code: Format First, Understand Second",
    description: "Inherited code that's badly formatted feels impossible to read. The fastest way in isn't to squint harder — it's to run it through a formatter before you try to understand a single line.",
    date: "2026-08-28",
    category: "Developer",
    tags: ["code formatter", "legacy code", "code reading", "code review", "indentation"],
    relatedTools: ["code-formatter", "json-formatter", "html-to-markdown"],
    content: `<p>You inherit a file that looks like it was typed by someone holding the keyboard upside down in a hurry. Half the blocks aren't indented, closing braces sit wherever they landed, and a function that should take ten seconds to scan takes ten minutes. Your first instinct is to understand it before touching anything. That instinct is backwards. Format the code first, then read it — structure turns confusion into something you can actually follow.</p>

<h2>Indentation Is Information</h2>

<p>Badly formatted code hides its own shape. When indentation is missing or inconsistent, you can't see what nests inside what, and nesting is most of what you're trying to understand. Run the file through a <a href="/en/tools/code-formatter">code formatter</a> and the structure snaps into view: which block belongs to which condition, where the loop ends, which function is inside which. The counter-intuitive part is that formatting makes the code <em>easier to read without changing what it does</em> — a formatter that touches only whitespace can't alter behavior, which is exactly why it's safe to run on a file you don't understand yet.</p>

<h2>Format as a Reading Aid, Not a Style Debate</h2>

<p>This isn't about winning a style argument. If the team uses a different indentation style, you can reformat again later; the point right now is comprehension, not convention. The same trick scales to the data the code works with. When the file is full of nested JSON — configs, API fixtures, test data — run that through a <a href="/en/tools/json-formatter">JSON formatter</a> too, so you're reading cleanly nested structures instead of one long line. And when the messy file turns out to be HTML docs you need to understand, a <a href="/en/tools/html-to-markdown">HTML to Markdown</a> pass strips the markup noise and leaves readable content. Format every layer before you read any layer.</p>

<h2>The Clean-Up That Pays for Itself</h2>

<p>There's a version of this for whole codebases too, which we covered in our guide to <a href="/en/blog/code-formatter-legacy-projects-style-guide-migration">formatting legacy projects without breaking them</a>. The habit is always the same: structure first, understanding second, changes third. You'll read the file once clean instead of three times squinting, and you'll make your first real edit knowing what the code actually does — which is the whole point.</p>`
  },
  {
    slug: "nasa-apod-astronomy-beginners-guide",
    title: "How to Actually Look at an Astronomy Photo",
    description: "The picture of the day often looks like a trippy screensaver in impossible colors. That's because it's data, not a photo. Here's how beginners learn to read any space image.",
    date: "2026-08-28",
    category: "Fun & Media",
    tags: ["NASA APOD", "astronomy for beginners", "space photos", "false color", "science"],
    relatedTools: ["nasa-apod", "bing-wallpaper", "world-map"],
    content: `<p>You open the astronomy picture of the day and see a swirl of neon colors that looks like a screensaver from 1997. The caption mentions wavelengths and filters, and you close the tab feeling like you missed the point. You didn't miss it — nobody told you the rules for looking at these images. The first rule: a space picture is usually data dressed up as a photo, and reading it means knowing what the colors mean.</p>

<h2>The Picture Is Data, Not a Photo</h2>

<p>Astronomers rarely point a camera at the sky. They point sensors that record light outside what your eyes can see — infrared, radio, X-rays — and then map those invisible bands to colors you can see. That's why a nebula comes out in electric blues and fiery oranges: each color is a different wavelength, not a different paint. The counter-intuitive part is that the most famous images are often the least "realistic." The <a href="/en/tools/nasa-apod">NASA APOD</a> archive labels these, so when you open an image, read the caption first — it will usually tell you which wavelengths were mapped to which colors.</p>

<h2>Three Questions for Any Space Image</h2>

<p>Ask three questions and you'll get 90% of the way there. What am I looking at — a planet, a nebula, a galaxy, or a camera artifact? How big is it, really? And is this color real or mapped? For scale, this is where a quick check beats intuition: galaxies are millions of light-years wide while a nebula might be a few light-years, and your brain can't tell from a thumbnail. Pairing the image with a <a href="/en/tools/world-map">world map</a> perspective helps too — zoom out on how small our whole planet is in the same frame, and the scale of what you're seeing starts to land.</p>

<h2>Start With the Familiar</h2>

<p>You don't have to start with the deepest nebulae. The Moon, Jupiter, the Sun in hydrogen-alpha — these are recognizable even in false color, and recognizing them teaches you to trust the format. Comparing your own context to the daily image is also a good habit; the <a href="/en/tools/bing-wallpaper">Bing wallpaper</a> gives you a beautiful Earth view most days, a nice counterweight to the cosmic scale of APOD. We covered the two image-of-the-day sources in our guide to <a href="/en/blog/nasa-apod-vs-bing-wallpaper-daily-images">APOD versus Bing wallpaper</a>; the reading skill transfers. Look at the caption, name the wavelength, guess the scale, and the trippy screensaver becomes a story you can actually follow.</p>`
  },
  {
    slug: "color-contrast-checker-data-viz-charts-guide",
    title: "Accessible Charts: Why Your Data Viz Fails the Contrast Test",
    description: "A dashboard that looks sharp on your monitor can be unreadable on a projector or for colorblind viewers. Chart text needs contrast checks too — here's the checklist.",
    date: "2026-08-28",
    category: "Developer",
    tags: ["color contrast", "data visualization", "charts", "accessibility", "WCAG"],
    relatedTools: ["color-contrast-checker", "color-converter", "svg-minifier"],
    content: `<p>Your dashboard looks crisp on the office monitor. Then you present it on a projector and nobody can read the legend, or a colorblind teammate asks why two lines are the same color. You checked the body text for contrast, so what went wrong? Charts have their own contrast rules, and the labels and legends you skipped are exactly the parts that fail.</p>

<h2>Contrast Isn't Just for Body Text</h2>

<p>Accessibility guidance mostly talks about paragraphs, so it's easy to assume small chart labels don't matter. They do — arguably more, because a legend you can't read makes the whole chart meaningless. The rule of thumb: small text needs a 4.5:1 ratio, and large text (roughly 18pt, or 14pt bold) needs 3:1. Every label, axis tick, legend entry, and callout in your chart is text, and every one of them needs checking. A <a href="/en/tools/color-contrast-checker">color contrast checker</a> turns that from a guess into a number in seconds.</p>

<h2>The Pair That Looks Distinct But Isn't</h2>

<p>The trap in charts is that colors can look completely different to you and still fail contrast against each other or against the background. Two saturated blues with different hues can land at nearly the same luminance, which is exactly what a projector or a colorblind viewer loses. The counter-intuitive part: distinct colors aren't the goal — distinct <em>luminance</em> is. If you're designing a palette, convert your candidate colors through a <a href="/en/tools/color-converter">color converter</a> to see them in terms of lightness rather than hue, and prefer pairs that differ in brightness, not just in name. Then verify the whole set in the checker before you build the chart.</p>

<h2>A Chart Checklist</h2>

<p>Three checks before you ship any data viz. Check the text: every label against its background, small and large separately. Check the series: each line or bar against the background, not just against each other. And check the colorblind view — if the chart relies on red-green to separate series, add a second signal like a dash pattern or a direct label. When you've settled the palette, you can minify the chart's SVG with a <a href="/en/tools/svg-minifier">SVG minifier</a> before deploying so the accessible version is also the fast one. We covered the full WCAG 2.2 contrast rules in our guide to <a href="/en/blog/color-contrast-checker-wcag-2-2-new-standards">new contrast standards</a>; the chart version is the same discipline applied to every pixel with a label attached. Check the text, check the series, check the colorblind view — then your chart works for everyone, projector included.</p>`
  },
  {
    slug: "roman-numerals-clock-faces-guide",
    title: "Why Clocks Say IIII (Not IV): Reading Numerals Fast",
    description: "Look at most analog watches and the four is written as four I's. It's not a typo — and the reason reveals how to read Roman numerals at a glance.",
    date: "2026-08-28",
    category: "Calculator",
    tags: ["Roman numerals", "clock faces", "watch design", "IIII vs IV", "numeral reading"],
    relatedTools: ["roman-numerals", "perpetual-calendar", "age-calculator"],
    content: `<p>You glance at a classic analog watch and do a double take: the four is written as four I's, IIII, not the IV you learned in school. It looks like a factory error on every expensive watch you've ever seen. It isn't. Clock faces have used IIII for centuries, and the reason is a small lesson in why we read numerals the way we do.</p>

<h2>Four I's, Not IV</h2>

<p>The short answer: balance and tradition. Four I's fills the left side of the dial in a way that visually mirrors the VIII on the right, and it avoids confusing the eye with an upside-down IV. The longer answer is that ordinary people of the clock's era weren't fluent in subtractive notation — they read IIII as four strokes more naturally than IV. The counter-intuitive part is that your watch is the one place where the "wrong" Roman four is the correct one, and the format you're used to is a classroom invention. Either way, no clock is broken.</p>

<h2>Reading Numerals at a Glance</h2>

<p>Once you know what to expect, Roman numerals are faster to read than they look, because clocks and calendars only use a handful. I is one, V is five, X is ten, and everything smaller than forty is a combination of those three. The trick is to read left to right and watch for the subtraction pattern: a smaller numeral before a bigger one means subtract (IV is four, IX is nine), and the rest is plain addition (XII is ten plus two). Run any year or date through a <a href="/en/tools/roman-numerals">Roman numeral converter</a> a few times and the pattern becomes second nature — you'll stop counting strokes and start seeing the numbers.</p>

<h2>Where the Old Numbers Still Live</h2>

<p>Clocks are the daily encounter, but the numerals also show up in dates you'd otherwise misread. Cornerstones, movie release years, and book copyright pages all use them, which is where a <a href="/en/tools/perpetual-calendar">perpetual calendar</a> comes in handy when you're dating an old document, and an <a href="/en/tools/age-calculator">age calculator</a> when a gravestone or a family record spells out a birth year you need to decode before you can calculate anything. We covered the modern survival of Roman numerals in our guide to <a href="/en/blog/roman-numerals-where-they-still-matter-guide">where they still matter</a>; the clock face is the most visible example. Look for the subtraction pattern, expect IIII on any classic dial, and the old numbers stop being a puzzle.</p>`
  },
  {
    slug: "scoreboard-streaming-game-night-guide",
    title: "Scoreboard for Game Night and Live Streams",
    description: "Half the fun of game night is arguing about who's winning. Put a visible running score on the TV and the arguments stop — here's how to set one up for the living room or a stream.",
    date: "2026-08-28",
    category: "Fun & Media",
    tags: ["scoreboard", "game night", "trivia", "live stream", "esports"],
    relatedTools: ["scoreboard", "fullscreen-text", "reaction-test"],
    content: `<p>You host a family game night, and a third of the evening is spent arguing about who's actually winning. Uncle Dave insists he's ahead, the kids are keeping their own private tally, and nobody agrees on the round totals. The fix isn't a referee — it's a score everyone can see. A visible running score settles more arguments than any rulebook, and it turns the same evening into something that feels like a real tournament.</p>

<h2>Scores You Can See Beat Scores You Argue About</h2>

<p>The counter-intuitive part of game night scoring is that the display matters more than the accuracy. Once the score is on the TV in big numbers, the debate moves from "who's winning" to "who's ahead by how much," which is a much better argument. Set up a <a href="/en/tools/scoreboard">scoreboard</a> on the television or a second screen, and keep the rules simple: one tally per team or player, updated after every round, never rewritten in secret. The visible number also creates the competitive arc — trailing teams get a comeback narrative and the last round means something.</p>

<h2>The Game Night Setup</h2>

<p>For a living room, one screen does the job: scoreboard on the TV with player names, and everything else kept out of the way. Pair it with a <a href="/en/tools/fullscreen-text">fullscreen text</a> display for the round number or a countdown between turns, so people aren't craning to see whose turn it is. If you're running trivia or a reaction-style party game, add a <a href="/en/tools/reaction-test">reaction test</a> as the tiebreaker round — it's quick, it's hilarious, and it hands the final point to speed instead of stubbornness.</p>

<h2>Live Streams and Tournaments</h2>

<p>The same setup scales to a stream, where a running score is almost required. Viewers join mid-way through and need to know the state of the match instantly; a scoreboard on the overlay answers that before they ask. Keep the tally current between every round, update it loudly, and let the chat follow along. We covered creative scoreboard uses beyond sports in our guide to <a href="/en/blog/scoreboard-beyond-sports-creative-uses">scoreboards for classrooms and trivia</a>; game night and streaming are the same principle at home. Put the number on screen, update it every round, and let the argument that remains be about strategy — not about the score.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

assert content.count(old) == 1, "marker not found or not unique"
content = content.replace(old, new_blogs)
with io.open(path, "w", encoding="utf-8", newline="\n") as f:
    f.write(content)
print("OK free station blogs inserted")
