"""Add 6 blogs to free station (396->402) - August 20, 2026"""
BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "income-tax-calculator-itemized-vs-standard-deduction-guide",
    title: "Standard Deduction vs Itemizing: When Itemizing Actually Saves You Money",
    description: "You keep the receipts every year 'just in case,' but always take the standard deduction. Here's how to know when itemizing is worth the paperwork — and when it's a trap.",
    date: "2026-08-20",
    category: "Calculator",
    tags: ["standard deduction", "itemized deduction", "tax deductions", "income tax", "tax filing"],
    relatedTools: ["income-tax-calculator", "mortgage-calculator", "compound-interest"],
    content: `<p>It's the weekend you promised yourself you'd do your taxes, and the kitchen table is covered in receipts. The mortgage interest statement from the bank. The donation slips from three charities. A folder of medical bills that were supposed to be sorted months ago. Your friend told you she itemizes and saves thousands. You've taken the standard deduction every year since you can remember. Which one are you supposed to be doing — and how do you actually know?</p>

<h2>What the Two Paths Are</h2>

<p>The standard deduction is a fixed amount the tax code lets you subtract from your income without showing any paperwork — a flat figure that changes slightly with inflation and is higher for couples. Itemizing means you add up specific deductible expenses — mortgage interest, state and local taxes, charitable gifts, and medical costs above a threshold — and subtract that total instead. The rule is simple: you take whichever number is bigger. The mistake is assuming the bigger one is always the itemized one, or never bothering to check.</p>

<h2>The Crossover Point</h2>

<p>The decision comes down to one comparison: do your itemizable expenses beat the standard deduction? For most filers, mortgage interest is the biggest line — and in the early years of a loan, most of your payment is interest, not principal. The <a href="/en/tools/mortgage-calculator">mortgage calculator</a> will show you exactly how much interest you paid each year. Add your state income tax, your charitable giving, and your qualified medical expenses. If the total clears the standard amount, itemizing wins — if it doesn't, every hour spent organizing those receipts was an hour you could have spent on something else.</p>

<h2>The Counter-Intuitive Strategy</h2>

<p>Here's the part nobody tells you: you don't have to decide annually in isolation. Because the standard deduction is a fixed baseline, the smart play is often to <em>bunch</em> — lumping two years of charitable donations into a single year so that year crosses the itemizing threshold, then taking the standard deduction the following year when your total is thin. And before you build a strategy around a one-off deduction year, run the same money through the <a href="/en/tools/compound-interest">compound interest calculator</a> — sometimes the tax saving isn't worth the cash you tied up. The <a href="/en/tools/income-tax-calculator">income tax calculator</a> is where you see your effective rate under both paths side by side.</p>

<p>We covered why a big refund means you overpaid in our guide to <a href="/en/blog/income-tax-calculator-tax-refund-withholding-guide">tax refunds and withholding</a>. Deductions are the other side of that coin. Check the crossover once a year, and keep the receipts only for the years they'll actually count.</p>`
  },
  {
    slug: "zodiac-sign-rising-sign-vs-sun-sign-explained",
    title: "Your Sun Sign vs Your Rising Sign: Why Horoscopes Feel Wrong Half the Time",
    description: "You're a Gemini, but the description never quite fits. The missing piece is the rising sign — the face you show the world — and it changes everything about how your chart reads.",
    date: "2026-08-20",
    category: "Reference",
    tags: ["rising sign", "sun sign", "astrology", "birth chart", "horoscope"],
    relatedTools: ["zodiac-sign", "book-of-answers", "random-quote"],
    content: `<p>You've known your sign since you were twelve: Gemini — chatty, curious, all over the place. But this month's horoscope says Gemini is "grounded and cautious," and you've never felt less grounded in your life. Your best friend, also a Gemini, is genuinely the calmest person you know. Either the horoscope is nonsense, or you're missing something. The thing you're missing has a name: the rising sign.</p>

<h2>The Two Signs Doing Two Jobs</h2>

<p>Your sun sign is the sign the sun was in at your birth — it's the classic "what's your sign" answer, and it describes your core: the tendencies you've been building since childhood. Your rising sign is the sign that was rising over the eastern horizon at the exact minute you were born. It changes roughly every two hours, which is why your birth time matters — and it describes the outer layer: the first impression you make, the way strangers read you. Two Geminis with different rising signs can come across as completely different people, which is why the monthly blurb feels right for one of you and wrong for the other.</p>

<h2>Why It Explains the Mismatch</h2>

<p>The counter-intuitive part is structural. Astrologers read an entire chart starting from the rising sign — it's the "front door" of the chart, and it determines which house every planet, including your sun, falls into. So two people born under the same sun sign but at different times of day are reading completely different sky maps. The monthly horoscope is written for a generic reader; it can't account for your rising sign, your moon sign, or anything else on the chart. When a description feels off, it's not that astrology is meaningless — it's that you're reading one layer of a three-dimensional system.</p>

<h2>Finding Your Full Picture</h2>

<p>If you don't know your sun sign, the <a href="/en/tools/zodiac-sign">zodiac sign finder</a> will tell you in seconds, and your birth time turns that into a rising sign. From there, the fun is in the details — and if you treat the whole thing as entertainment, the <a href="/en/tools/book-of-answers">book of answers</a> and the <a href="/en/tools/random-quote">random quote generator</a> are the more honest relatives in the same cabinet: they give you something to ponder without pretending to be science.</p>

<p>We covered the elements and modalities in our guide to <a href="/en/blog/zodiac-sign-elements-modalities-explained">zodiac sign elements</a>. The rising sign is the piece those explanations skip — the front door of the chart, and the reason your sign is only ever half the story.</p>`
  },
  {
    slug: "lateral-thinking-functional-fixedness-candle-problem-guide",
    title: "The Candle Problem: What a 1945 Psychology Experiment Reveals About Your Brain",
    description: "A candle, a box of tacks, and a matchbook. Most people fail this 80-year-old puzzle — and the reason explains why you get stuck on problems at work.",
    date: "2026-08-20",
    category: "Fun & Media",
    tags: ["candle problem", "functional fixedness", "lateral thinking", "creativity", "problem solving"],
    relatedTools: ["lateral-thinking", "food-picker", "book-of-answers"],
    content: `<p>The facilitator at the team retreat places three things on the table: a candle, a box of tacks, and a book of matches. "Your task," she says, "is to attach the candle to the wall so it burns without dripping wax on the table." The room splits into two groups. Half the people pick up the candle, melt the bottom with a match, and press it to the wall — where it slides down within seconds. The other half stares at the tacks. Most of the room is solving the wrong problem.</p>

<h2>The Solution Nobody Sees</h2>

<p>The answer is embarrassingly simple: empty the tack box, tack the box to the wall as a shelf, and rest the candle on it. The experiment is Karl Duncker's candle problem, first run in 1945, and the reason it stumps people is that the box arrives as a container and refuses to be seen as anything else. That blindness has a name — functional fixedness — and it's not a puzzle quirk. It's a daily filter: you see a paper clip as a paper clip, a lunch break as a lunch break, a deadline as a deadline. The moment you need a clip to hold a broken zipper, your brain has to override the label it already assigned.</p>

<h2>Why Motivation Makes It Worse</h2>

<p>The counter-intuitive part is the follow-up research. In 1962, psychologist Sam Glucksberg repeated the candle problem and offered a cash prize to one group for solving it fast. The group without the reward solved it faster. The money made people more motivated — and more rigid, zeroing in on the candle itself instead of renaming the box. Pressure narrows your thinking exactly when you need it to widen. That's why the fix isn't trying harder; it's asking a different question.</p>

<h2>Training the Muscle</h2>

<p>Functional fixedness loosens with practice. The <a href="/en/tools/lateral-thinking">lateral thinking puzzles</a> here exist for that reason — every one is a chance to catch yourself reaching for the obvious answer. And when you're properly stuck on a real problem, the nudge doesn't have to be dramatic: a <a href="/en/tools/food-picker">random food picker</a> breaking your decision loop, or a <a href="/en/tools/book-of-answers">book of answers</a> dropping an unrelated question in your lap, can be enough to reframe the object you've been fixating on.</p>

<p>We covered applying lateral thinking at work in our guide to <a href="/en/blog/lateral-thinking-workplace-techniques-guide">lateral thinking techniques</a>. The candle problem is the laboratory version of that same skill. Next time you're stuck, ask what else the thing in front of you could be — the answer is usually a tack box.</p>`
  },
  {
    slug: "color-converter-cmyk-vs-rgb-print-screen-guide",
    title: "CMYK vs RGB: Why Printed Colors Never Match Your Screen",
    description: "You design a bright coral poster, print it, and get mud. That's the RGB-to-CMYK problem — and it explains why your screen lies to you about print.",
    date: "2026-08-20",
    category: "Reference",
    tags: ["CMYK", "RGB", "color gamut", "print color", "color conversion"],
    relatedTools: ["color-converter", "base-converter", "color-contrast-checker"],
    content: `<p>You spent an hour on the poster — a coral-orange headline over a soft gradient, the exact shade you've been using in your brand palette. You hit print, and what comes out of the office printer is a dull brick red. Not the color on your screen. Not even close. You reprint, adjust, reprint again. Nothing works. The poster was never going to match, and the reason isn't your printer or your settings — it's the fundamental difference between how screens and ink create color.</p>

<h2>Light vs Ink: Two Ways to Make a Color</h2>

<p>Your screen works in RGB — red, green, blue light added together. It emits light, so it can make colors that glow: vivid coral, electric blue, neon green. A printer works in CMYK — cyan, magenta, yellow, and black ink layered on paper. Ink absorbs light instead of emitting it, which means the brightest color a printer can reach is the brightness of the paper itself. Every color you see in print is light that the ink failed to absorb. That single difference is the whole story.</p>

<h2>The Gamut Problem</h2>

<p>Each color system has a range of colors it can express, called a gamut, and they don't overlap completely. RGB's gamut is huge — it includes those glowing colors your screen loves. CMYK's gamut is smaller, and the colors it loses are exactly the bright, saturated ones: the coral oranges, the vivid cyans, the deep saturated purples. The counter-intuitive part is that it's not just a brightness drop — some colors shift hue entirely when they can't be reproduced. A designer who picks colors on screen and never checks them in CMYK is designing a poster that doesn't exist in print form.</p>

<h2>What to Actually Do</h2>

<p>When a client hands you a hex code, the <a href="/en/tools/color-converter">color converter</a> turns it into the RGB you see on screen — and if print matters, check whether the shade survives conversion to CMYK before you build the whole layout around it. (And if you ever wondered what those six hex digits mean, the <a href="/en/tools/base-converter">base converter</a> shows the same number in decimal and binary — hex is just base 16.) For anything meant to be readable on screen too, the <a href="/en/tools/color-contrast-checker">color contrast checker</a> keeps accessibility from getting lost in the gamut shuffle. Design in RGB, proof in CMYK, and your posters will finally look like your screenshots.</p>

<p>We compared the converter to the visual color picker in our guide to <a href="/en/blog/color-converter-vs-color-picker-hex-conversion-vs-visual-selection">hex conversion vs visual selection</a>. CMYK is the reason the converter alone isn't enough for print — your screen can show you colors your printer can never produce.</p>`
  },
  {
    slug: "cron-parser-five-reasons-job-not-running-guide",
    title: "5 Reasons Your Cron Job Silently Didn't Run (and How to Check)",
    description: "The backup was scheduled for 2am. It didn't run. Nothing in the logs looks wrong. Here are the five silent ways cron jobs fail — and how to catch each one.",
    date: "2026-08-20",
    category: "Developer",
    tags: ["cron job", "crontab", "scheduled task", "cron debugging", "server automation"],
    relatedTools: ["cron-parser", "regex-tester", "unix-timestamp"],
    content: `<p>It's 9am and your database backup should have run at 2am. You open the server, check the backup directory — empty. No error email, no alert, just silence. You run <code>crontab -l</code>, and the entry is right there, exactly as you wrote it. The job looks perfect. It just didn't happen. If you've been here, you know the worst part of cron isn't that jobs fail — it's that they fail quietly, and there are five completely ordinary reasons.</p>

<h2>1. The Environment Isn't Yours</h2>

<p>When cron runs a job, it runs it with a minimal environment — a bare <code>PATH</code>, no shell profile, no aliases. The script that works in your terminal calling <code>node</code> or <code>docker</code> fails under cron with a silent "command not found" because the binary isn't on cron's path. Fix: use absolute paths in the script, or set <code>PATH</code> at the top of the crontab.</p>

<h2>2. You're Editing the Wrong Table</h2>

<p>There are two kinds of crontab. <code>crontab -e</code> edits your user's table, where jobs run as you. System jobs live in <code>/etc/crontab</code> and require a user field before the command. It's easy to add a system-style entry to your user crontab — or a user-style entry to the system file — and have it ignored or run as the wrong account. Check who the job runs as, not just whether the text is present.</p>

<h2>3. The Schedule Means Something Else</h2>

<p>Cron syntax has traps. The big one: when you set both a day-of-month and a day-of-week, cron runs the job on either — not both. <code>0 2 15 * 1</code> runs at 2am on the 15th <em>and</em> every Monday, not "the Monday that is the 15th." Paste the expression into the <a href="/en/tools/cron-parser">cron parser</a> and look at the next five computed run times — a 5-second check that catches the trap instantly.</p>

<h2>4. The Job Ran, but Output Vanished</h2>

<p>Nothing set <code>MAILTO</code>, so the job's stdout went nowhere. The script exited nonzero, and nobody saw it. This is the most common silent failure of all: the job ran fine, the command inside it failed, and the failure was swallowed. Redirect output to a file, or set <code>MAILTO</code>, so a failure produces a trace you can actually read.</p>

<h2>5. The Clock Isn't What You Think</h2>

<p>Cron uses the system timezone — which on many VPS images is UTC. Your "2am" was 2am UTC, not your local time. And around daylight saving, an hour can vanish entirely. The <a href="/en/tools/unix-timestamp">unix timestamp</a> shows what the machine actually thinks the time is, and it's the fastest way to confirm the server's clock disagrees with your intention. When you're checking whether a pattern matches, the <a href="/en/tools/regex-tester">regex tester</a> handles the input-validation half of the job, but cron's time semantics are its own trap.</p>

<p>We compared cron to systemd timers in our guide to <a href="/en/blog/cron-parser-vs-systemd-timers-guide">cron vs systemd timers</a>. The silent failures above are cron-specific — systemd logs loudly, which is half the reason people switch. Check the path, the user, the schedule, the output, and the clock — and your backups will start running on time.</p>`
  },
  {
    slug: "lorem-ipsum-cicero-history-meaning-guide",
    title: "Lorem Ipsum Isn't Latin: The 2,000-Year-Old Text Hiding in Every Mockup",
    description: "That placeholder text in every design you've ever made comes from a Roman philosopher writing about pain in 45 BC. Here's the story — and why it's gibberish.",
    date: "2026-08-20",
    category: "Text Tools",
    tags: ["lorem ipsum", "placeholder text", "Cicero", "design history", "typesetting"],
    relatedTools: ["lorem-ipsum", "text-repeater", "text-to-slug"],
    content: `<p>You've pasted lorem ipsum into mockups for years without reading a single word of it. Then one slow afternoon you actually look at a line: <em>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.</em> It half-resembles Latin, which makes sense — and then you learn where it came from, and it stops making sense entirely. The scrambled text filling every wireframe and poster draft on the internet is the wreckage of a 45 BC philosophy essay about pain.</p>

<h2>A 2,000-Year-Old Run-On Sentence</h2>

<p>Lorem ipsum descends from <em>De finibus bonorum et malorum</em> — "On the Ends of Good and Evil" — by the Roman statesman Cicero, written in 45 BC. The passage that survives begins with the ideas of a philosopher arguing that pain is to be avoided, and ends with a sentence whose modern translation is basically "there is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain." A printer in the 1500s who wanted to show off a typeface without cluttering the specimen with readable text took that essay, scrambled the words, and truncated it — and the scrambled version stuck. What you see in a mockup is a corrupted, randomized excerpt of an argument about suffering.</p>

<h2>Why It Looks Like Latin but Isn't</h2>

<p>The counter-intuitive part: lorem ipsum is deliberately unreadable. The standard passage was corrupted enough that no one can parse it as a sentence, and that's exactly the point. Placeholder text exists so the reader judges the layout, not the meaning. When you use real text, the eye drifts to the words — stakeholders critique the copy instead of the spacing. When you use lorem ipsum, all that's left to look at is the design. That's why the <a href="/en/tools/lorem-ipsum">lorem ipsum generator</a> exists, and why, when you need three paragraphs of it quickly, the <a href="/en/tools/text-repeater">text repeater</a> is the shortcut.</p>

<h2>The Danger of the Placeholder</h2>

<p>The trap is that the placeholder occasionally survives to production. Every developer has shipped a page where "Lorem ipsum dolor sit amet" slipped past the final review — and every designer has received the frantic ticket afterward. When your heading is finally real, the <a href="/en/tools/text-to-slug">text to slug</a> tool turns it into the clean URL you'll put in the release notes. Use lorem ipsum deliberately, label it clearly, and replace it before the demo — because the worst-case outcome isn't awkward Latin; it's a customer reading Cicero's thoughts on pain on your pricing page.</p>

<p>We covered when to use dummy text versus real content in our guide to <a href="/en/blog/lorem-ipsum-ux-design-placeholder-best-practices">lorem ipsum in UX design</a>. This is the history behind that decision — why the filler is specifically Latin-flavored gibberish, and why a 2,000-year-old essay is still doing layout work today.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8", newline="\n") as f:
    f.write(content)

print("Free station: 396->402 objects done.")
