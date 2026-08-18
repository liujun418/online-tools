"""Add 6 blogs to free station (384->390) - August 18, 2026"""
BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "income-tax-calculator-tax-refund-withholding-guide",
    title: "Why a Big Tax Refund Means You Overpaid: Withholding Math Explained",
    description: "Your big tax refund is a sign you overpaid all year — an interest-free loan to the government. Here's how withholding works, why refunds cost you, and how to fix your W-4.",
    date: "2026-08-18",
    category: "Calculator",
    tags: ["income tax", "tax refund", "tax withholding", "W-4", "taxes explained"],
    relatedTools: ["income-tax-calculator", "percentage-calculator", "compound-interest"],
    content: `<p>You file your taxes in February, and in April a check for $2,800 shows up. You call it a bonus and buy something. It wasn't a bonus. It was your own money, loaned to the government for a year at 0% interest, and returned to you in a lump sum that you got to enjoy for about a week before it was spent anyway.</p>

<h2>Why Your Refund Is So Big</h2>

<p>A refund happens when your employer withholds more tax than you owe. Each paycheck, the withholding formula estimates your annual tax and takes a slice. If the estimate runs high — a second income, a side gig, no dependents claimed — the overpayment piles up. The result isn't a windfall; it's a forced savings plan with the government as the bank and you as the depositor who forgot the interest rate was zero.</p>

<p>The common mistake is celebrating the refund instead of checking the cause. Run an <a href="/en/tools/income-tax-calculator">income tax calculator</a> to see what you actually owe for the year. Compare that to what was withheld, and the gap is the refund — pure overpayment.</p>

<h2>The Cost of a Big Refund</h2>

<p>Counter-intuitive but true: the bigger the refund, the worse the deal. That $2,800 sat in the Treasury all year while you paid interest on a credit card at 20% or left a savings account earning 4% untouched. Refund overpayment is a fixed, invisible cost you pay every single paycheck. The <a href="/en/tools/percentage-calculator">percentage calculator</a> shows how the small monthly over-withholding adds up to a very large annual giveaway.</p>

<h2>How to Fix Your Withholding</h2>

<p>The fix is a W-4 update, not a gamble. Adjust your withholding to aim for a refund near zero — the money stays in your paycheck, where the <a href="/en/tools/compound-interest">compound interest</a> on what you invest beats any refund by a mile. Keep a small buffer so you never owe a penalty, and recheck once a year when your life changes: new job, marriage, baby, side income.</p>

<p>We covered how tax brackets actually set your rate in our guide to <a href="/en/blog/income-tax-calculator-guide">how tax brackets and effective rates work</a>. A refund feels like free money because it arrives in a lump. Fix the withholding, keep the cash monthly, and let your own money do something for you.</p>`
  },
  {
    slug: "life-hacks-travel-packing-guide",
    title: "Travel Life Hacks That Actually Work: Packing, Jet Lag, and Hotel Rooms",
    description: "Most travel hacks are clickbait. These hold up: rolling clothes, the two-bag rule, jet-lag math with sunlight, and the free quiet-room trick at check-in.",
    date: "2026-08-18",
    category: "Fun & Media",
    tags: ["travel hacks", "packing tips", "jet lag", "travel tips", "life hacks"],
    relatedTools: ["life-hacks", "global-weather", "translate"],
    content: `<p>It's the night before a six-day trip and your suitcase is a crime scene. You've packed four pairs of shoes, two hairdryers, and a paperback you'll never open. By the time you leave, the zipper is a suggestion. Most "travel hacks" are clickbait, but a few hold up under real luggage limits. These are the ones that actually work.</p>

<h2>The Packing System That Works</h2>

<p>Roll, don't fold — you've heard it, but here's why it works: rolled clothes compress into the gaps of a case and, more importantly, they don't crease where the fold lands. Pair it with the two-bag rule: everything you need for the flight in a small personal bag, everything you need for the trip in the main case. The common mistake is packing for the worst case instead of the actual trip. Spread clothes, shoes, and cables across both bags so losing one never ends the trip.</p>

<h2>Jet Lag Is a Math Problem</h2>

<p>The counter-intuitive part: jet lag isn't about how much you sleep, it's about when light hits your eyes. Your body clock shifts roughly an hour a day, so a nine-hour time difference takes about nine days to fix naturally. You can cheat it. Get sunlight at the destination's morning, avoid it in the late afternoon, and shift your meals to the local schedule immediately. And check the destination before you pack a single thing — a <a href="/en/tools/global-weather">global weather</a> check tells you whether that jacket is essential or dead weight.</p>

<h2>Hotel Room Hacks</h2>

<p>The upgrade trick that costs nothing: ask for a quiet room at check-in, not a suite. The front desk can usually move you without any compensation, and a quiet room beats a bigger one on every night you actually sleep. And the phrase you learn before landing beats any translation app — the <a href="/en/tools/translate">translate</a> tool handles the rest, but "where is the..." in the local language gets you treated like a traveler instead of a tourist.</p>

<p>Why simple shortcuts feel so satisfying is covered in our guide to <a href="/en/blog/life-hacks-morning-routine-productivity-science-based">morning routine science</a>. Travel punishes mistakes fast. Pack light, respect the sun, ask for quiet — and enjoy the trip instead of managing your luggage.</p>`
  },
  {
    slug: "zodiac-sign-chinese-vs-western-zodiac-guide",
    title: "Chinese Zodiac vs Western Zodiac: 12 Animals vs 12 Constellations",
    description: "Your Western sign says Leo, your Chinese sign says Dragon — two zodiac systems, two different logics. Here's how the Chinese zodiac works and why it's not astrology by another name.",
    date: "2026-08-18",
    category: "Reference",
    tags: ["chinese zodiac", "zodiac animals", "chinese astrology", "lunar calendar", "western zodiac"],
    relatedTools: ["zodiac-sign", "perpetual-calendar", "book-of-answers"],
    content: `<p>Someone at a party asks what your sign is. You answer Leo. They nod, then ask what your Chinese sign is, and you have no idea — but somehow it's supposed to be just as important. The two systems share the word "zodiac" and almost nothing else. One runs on constellations and months, the other on animals and years. Here's what the Chinese zodiac actually is, and why it's not Western astrology wearing a costume.</p>

<h2>The Two Zodiacs Are Built Differently</h2>

<p>The Western zodiac divides the sky into twelve equal slices and assigns each a slice of the calendar — your sign comes from the month you were born. The Chinese zodiac assigns an animal to each lunar year: Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, Pig. Your Western sign changes every month; your Chinese animal changes every year. So "Leo" and "Dragon" aren't two descriptions of the same person — they're two different systems answering two different questions.</p>

<h2>Year Animals Are Not Sun Signs</h2>

<p>The common mistake is reading your Chinese animal like a Western sun sign: "I'm a Pig, so I'm easygoing." The Chinese zodiac is traditionally a whole personality profile, and the year animal is just the headline. The system layers in the hour of birth (the hour animal), the five elements, and a polarity of yin and yang — a much more specific reading than "your year equals your personality." It's a grid, not a list.</p>

<h2>The Lunar Calendar Connection</h2>

<p>The counter-intuitive part: the Chinese New Year is not January 1. It falls on the second new moon after the winter solstice, anywhere from late January to mid-February, so someone born in January could belong to the previous year's animal. A <a href="/en/tools/perpetual-calendar">perpetual calendar</a> settles your exact birth date, and a <a href="/en/tools/zodiac-sign">zodiac sign calculator</a> handles the Western side — so you can finally answer the party question with both systems. If you'd rather not do the math at all, the <a href="/en/tools/book-of-answers">book of answers</a> keeps the spirit without the charts.</p>

<p>We covered how the Western zodiac actually works in our guide to <a href="/en/blog/zodiac-sign-calculator-sun-sign-astrology-guide">finding your sun sign</a>. Two zodiacs, two logics: one by month, one by year. Know which one you're using, and the party conversation stops being a trap.</p>`
  },
  {
    slug: "lateral-thinking-workplace-techniques-guide",
    title: "Lateral Thinking at Work: Three Techniques for When the Obvious Answer Fails",
    description: "Stuck in a meeting where everyone agrees on the wrong idea? Three lateral thinking techniques — assumption hunting, reversal, and random input — break the logjam.",
    date: "2026-08-18",
    category: "Fun & Media",
    tags: ["lateral thinking", "creative problem solving", "brainstorming", "workplace productivity", "thinking techniques"],
    relatedTools: ["lateral-thinking", "random-number-generator", "book-of-answers"],
    content: `<p>The meeting has run forty minutes past schedule and everyone agrees on the wrong answer. Not the risky answer — the wrong one. It's obvious to you, but you can't break the consensus with logic, because logic is what built it. This is where lateral thinking earns its keep: not as a puzzle for kids, but as a set of tools for exactly this stuck-room situation.</p>

<h2>Assumption Hunting</h2>

<p>Every bad plan hides an unexamined assumption. Write down the thing everyone is treating as fixed — "we have to ship this month," "the budget is final," "the client won't budge" — then question exactly one of them out loud. The common mistake is attacking the assumption you disagree with; the technique is attacking the one everyone takes for granted. You're not looking for a wrong answer; you're looking for the rule nobody remembers making.</p>

<h2>The Reversal Trick</h2>

<p>Take the goal and invert it. If the problem is "how do we get users to sign up," ask "how do we guarantee nobody signs up?" The answers to the reverse question come fast, and buried among them is the real friction: the three-step form, the paywall, the login wall. Inverting the goal exposes the obstacle that the forward direction keeps dancing around.</p>

<h2>Random Input Works Because You Can't Fake It</h2>

<p>The counter-intuitive part: a random word, a random number, even the <a href="/en/tools/random-number-generator">random number generator</a> tool on your own desk — the point isn't that the random thing is useful. The point is that you can't control it, so your brain is forced to build a bridge between an irrelevant input and the problem. That bridge is where new solutions live. The <a href="/en/tools/book-of-answers">book of answers</a> works on the same principle: an answer you didn't engineer is an answer you couldn't have planned.</p>

<p>Lateral thinking versus ordinary logic — two modes your brain can switch between — is covered in our guide to <a href="/en/blog/lateral-thinking-vs-vertical-logic-brain-modes">lateral thinking vs vertical logic</a>. Run a <a href="/en/tools/lateral-thinking">lateral thinking</a> session the next time a room agrees too fast. Hunt the assumptions, invert the goal, and let randomness break the consensus. The stuck meeting was never actually stuck — it just needed a different angle.</p>`
  },
  {
    slug: "regex-tester-search-vscode-grep-guide",
    title: "Regex in Your Everyday Tools: VS Code, grep, and Search That Understands Patterns",
    description: "You already own a regex engine: the search bar. VS Code find, grep, and analytics dashboards accept patterns — here's how to search with structure instead of scrolling.",
    date: "2026-08-18",
    category: "Developer",
    tags: ["regex", "regular expressions", "vscode search", "grep", "pattern matching"],
    relatedTools: ["regex-tester", "text-diff", "word-counter"],
    content: `<p>A log file with forty thousand lines. You need every line that mentions ERROR but only when it came from the payments service, and not when the error is a known retry. Scrolling is not an option. Regular expressions sound like a programmer's weapon, but the tools you already use — your editor, your terminal, your analytics dashboard — accept them directly. You've had a superpower on your desk all along.</p>

<h2>VS Code: Find That Understands Structure</h2>

<p>Open Find, click the .* icon to enable regular expressions, and search for <code>^.*payments</code> — one pass, all matches, zero scrolling. The common mistake is searching for the literal text you see in one line and missing the pattern across the other nine thousand. With regex, you search for the shape of the problem, not a single example of it. The <a href="/en/tools/regex-tester">regex tester</a> tool is the safe place to build and check a pattern before you point it at a real file.</p>

<h2>grep: The Original Power Search</h2>

<p>In a terminal, grep is regex made useful: <code>grep -E "^ERROR" log.txt</code> gives you exactly the matching lines, and a few pieces of syntax extend it — the dot for any character, the star for repeats, the caret for line start, the dollar for line end, square brackets for a character set. Learn those and you can query any log, config, or export file in one command instead of opening it.</p>

<h2>Know When Regex Is Overkill</h2>

<p>The counter-intuitive part: regex is not always the right tool. A quick count is a job for the <a href="/en/tools/word-counter">word counter</a>; comparing two versions line by line is a job for <a href="/en/tools/text-diff">text diff</a>. Regex shines when the match is structural — and that's exactly when eyeballing a list misses things. Use the right tool for the shape of the job.</p>

<p>We covered when simple find-and-replace is enough in our guide to <a href="/en/blog/regex-tester-vs-ide-find-replace">regex vs find-and-replace</a>. The editor search bar is a gateway to pattern matching. Build the pattern safely, then unleash it — forty thousand lines shrink to one screen.</p>`
  },
  {
    slug: "cron-parser-vs-systemd-timers-guide",
    title: "Cron vs systemd Timers: When the Modern Scheduler Wins (and When It Doesn't)",
    description: "systemd timers fix cron's biggest gaps — dependencies, real logs, calendar events. But cron still wins on simplicity and portability. Here's how to choose between them.",
    date: "2026-08-18",
    category: "Developer",
    tags: ["cron", "systemd timers", "cron vs systemd", "linux scheduling", "automation"],
    relatedTools: ["cron-parser", "unix-timestamp", "hash-generator"],
    content: `<p>It's 3 a.m. and your backup job didn't run. The crontab looks right, the logs are empty, and you're about to blame the scheduler. Cron has scheduled jobs since 1975, and on most Linux systems there's a newer option that fixes exactly the problems cron is known for: systemd timers. Understanding when to use which one saves you the 3 a.m. wake-up call.</p>

<h2>What systemd Timers Do Better</h2>

<p>systemd timers can run a job only after another service is up — say, back up the database but only once the database is running. That's a dependency, and cron has no concept of one. Timers also give you real logs through journalctl, calendar events that describe the next run in plain terms, and the option to run once, on a schedule, or only in a specific power state. The counter-intuitive part: timers are often assumed to use cron syntax, but they use calendar events, so a <a href="/en/tools/cron-parser">cron parser</a> won't read them directly — check the syntax before you port an old job.</p>

<h2>Where Cron Still Wins</h2>

<p>Cron survives because it's simple and everywhere. One line, one meaning, portable across every Unix — a crontab file from a 1995 server still works today. If your job is "run this script at these times," cron is done in ten seconds, and the next person who reads it knows exactly what it does. Timers solve real problems; they also add a layer of complexity a simple job doesn't need. The <a href="/en/tools/unix-timestamp">unix timestamp</a> tool helps sanity-check the times either way, and the <a href="/en/tools/hash-generator">hash generator</a> confirms a job's output integrity when it matters.</p>

<h2>How to Compare Them</h2>

<p>Use cron for simple, portable, schedule-only jobs. Use systemd timers when you need dependencies, real logging, or calendar-aware scheduling. The mistake is choosing by fashion instead of need: a timer won't fix a job that never runs in cron if the problem is your timezone or your expression — we covered those traps in our guide to <a href="/en/blog/cron-parser-crontab-schedules-explained">reading crontab schedules</a>.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8", newline="\n") as f:
    f.write(content)

print("Free station: 384->390 objects done.")
