"""Add 6 blogs to free station (378->384) - August 17, 2026"""
BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "morse-code-timing-dit-dah-farnsworth-guide",
    title: "Morse Code Timing: Why a Dit Is Never Just 'Quick' and How to Learn Faster",
    description: "Morse code isn't dots and dashes \u2014 it's a clock. The 1:3:7 ratio, words-per-minute math, and the Farnsworth spacing trick that gets you fluent in weeks, not months.",
    date: "2026-08-17",
    category: "Developer",
    tags: ["morse code", "morse timing", "farnsworth spacing", "learn morse code", "morse code speed"],
    relatedTools: ["morse-code", "text-repeater", "reaction-test"],
    content: `<p>You decided to learn Morse code. You memorized the chart, passed the test, and then you tried to copy real traffic at 20 words per minute \u2014 and your brain froze. The chart isn't the problem. Morse isn't a set of dots and dashes; it's a rhythm, and the rhythm is defined by precise timing.</p>

<h2>Morse Code Is a Clock, Not a Chart</h2>

<p>The whole system is built on one time unit. A dit is 1 unit. A dah is 3 units. The gap between the parts of one letter is 1 unit, between letters is 3, and between words is 7. That's why "A" as ".-" and "N" as "-." are only distinguishable by the gap \u2014 pause too long and your "A" becomes "E T". A skilled operator isn't counting dots; they're hearing the ratio. That's also why a <a href="/en/tools/morse-code">Morse code translator</a> is a fine study tool but can't teach you rhythm \u2014 the rhythm only exists at speed.</p>

<h2>Speed Is Measured in "PARIS" \u2014 and That's a Trap</h2>

<p>Morse speed is quoted in words per minute, but the standard "word" is PARIS \u2014 a made-up 50-unit word, not a real word. So "20 wpm" just means the 50-unit clock is sent 20 times a minute. The common mistake: drilling slowly, getting comfortable, then jumping to target speed and failing. The fix is counter-intuitive: send the characters at full target speed but stretch the gaps between characters and words. That technique has a name \u2014 Farnsworth spacing.</p>

<h2>The Farnsworth Trick</h2>

<p>With Farnsworth spacing, each letter is sent at, say, 20 wpm \u2014 so your ear learns the true rhythm of the letters \u2014 while the pauses are stretched to give your brain time to catch up. Your brain builds pattern-matching circuits at real speed, then you shrink the gaps as you improve. Loop practice sentences with a <a href="/en/tools/text-repeater">text repeater</a>, and sharpen the listening-to-reaction loop with the <a href="/en/tools/reaction-test">reaction test</a> on the side. You'll copy faster in weeks than you would in months of chart drilling.</p>

<p>Morse survives because it's the last thing that works when nothing else does \u2014 we covered why in our guide to <a href="/en/blog/morse-code-why-180-year-old-system-still-works">why a 180-year-old system still works</a>. The way to learn it fast is the same as the way to use it: forget the chart, feel the timing.</p>`
  },
  {
    slug: "cron-parser-dst-scheduling-gotchas-guide",
    title: "Cron and Daylight Saving Time: When a Nightly Job Runs Twice, or Not at All",
    description: "Your cron job ran an hour early. Then it didn't run. Daylight saving breaks naive cron expressions \u2014 and there's a second trap hiding in day-of-month vs day-of-week nobody expects.",
    date: "2026-08-17",
    category: "Developer",
    tags: ["cron", "cron parser", "daylight saving time", "cron scheduling", "cron gotchas"],
    relatedTools: ["cron-parser", "unix-timestamp", "hash-generator"],
    content: `<p>You scheduled a database backup for 2:00 a.m. every night. After the time change, it runs at 1:00 a.m. Then your site is down because a report ran twice. The crontab looks perfect. The problem isn't your expression \u2014 it's that cron doesn't know what time is.</p>

<h2>Cron Is a Dumb Clock</h2>

<p>A cron expression just says "run when the wall clock matches." It has no concept of daylight saving time. When clocks spring forward, the hour from 2:00 to 3:00 doesn't exist \u2014 a job at <code>0 2 * * *</code> simply doesn't fire. When clocks fall back, 1:30 a.m. happens twice \u2014 a job at <code>30 1 * * *</code> runs twice. Most operators hit this exactly once and then swear forever at the scheduler.</p>

<h2>The Fix Is Boring and Reliable: UTC</h2>

<p>Counter-intuitive but true: the way to make cron immune to DST is to not use your local timezone at all. Run jobs in UTC (<code>TZ=UTC</code> in the crontab, or the platform default on managed schedulers) and the clock never jumps. If a job genuinely needs to run at a local time \u2014 "9 a.m. for the East Coast" \u2014 that's a business-time problem, and the schedule changes at DST boundaries by design. Decide up front which hours are "server time" and which are "human time," and never mix them in one crontab.</p>

<h2>The Second Trap: Day-of-Month AND Day-of-Week</h2>

<p>The less famous gotcha lives in fields 3 and 5. In standard cron, if you restrict BOTH the day-of-month and the day-of-week, the job runs when EITHER matches \u2014 they're OR'd, not AND'd. So <code>0 2 1 * 1</code> does not mean "the first of the month when it's a Monday." It means "every first of the month AND every Monday." A real "first Monday of the month" needs extra logic. Before you deploy, run the expression through a <a href="/en/tools/cron-parser">cron parser</a> and read the exact matches it reports \u2014 and when you're thinking in epoch seconds, the <a href="/en/tools/unix-timestamp">unix timestamp</a> tool keeps the numbers straight.</p>

<p>Timezone mistakes are the classic source of "why did my job run at 3 a.m." \u2014 we covered them in our guide to <a href="/en/blog/cron-parser-timezones-deployments">cron timezone traps</a>. Schedule in UTC, watch the OR logic, and verify every expression before it fires.</p>`
  },
  {
    slug: "ai-tools-evaluate-before-paying-guide",
    title: "How to Evaluate an AI Tool Before You Pay: Free Tiers, Privacy, and the Trial Trap",
    description: "You signed up for a 7-day trial, got charged on day 8, and the tool can't do what the demo showed. Here's a checklist for vetting any AI tool \u2014 free-tier limits, data handling, and output quality \u2014 before a card touches the site.",
    date: "2026-08-17",
    category: "Reference",
    tags: ["ai tools", "evaluate ai tools", "ai tool pricing", "ai privacy", "ai tool checklist"],
    relatedTools: ["ai-tools", "password-generator", "translate"],
    content: `<p>You watched a 90-second demo video, signed up for the "free trial," and set a calendar reminder to cancel. A week later you're paying $29 a month for a tool that writes worse than the free option you were already using. The demo was always good. The fine print was always the product. Here's how to evaluate an AI tool before your card touches the site.</p>

<h2>The Free-Tier Test: Generate Ten, Not One</h2>

<p>Almost every AI tool advertises "free," but the free tier is a teaser: a character cap, a watermark, a one-per-day limit. The common mistake is generating one pretty sample and signing up. Instead, produce ten real outputs with your real prompts on the free tier. Watch for the limits \u2014 not the ones in the marketing copy, the ones that appear when you hit the wall. If there's no free tier at all, treat an unknown tool with a price tag as a red flag, not a signal of quality.</p>

<h2>Privacy Is the Hidden Cost</h2>

<p>Your prompts are data. At some services they're training data; at others they're stored for months or shared with partners. Before you paste anything sensitive \u2014 client documents, personal photos, business plans \u2014 read the data-retention and training clauses. The rule of thumb: the "free" tier often has the worst terms, and a paid tier that promises your data won't be used for training is worth more than a faster model. If you can't find the policy, treat that as the answer.</p>

<h2>The Cancel Test and the Trial Trap</h2>

<p>Here's the counter-intuitive part: the harder a tool makes canceling, the less you want to subscribe. Before paying, find the cancel button, the renewal date, and the refund policy \u2014 the whole flow should take under a minute. Trials that auto-renew into annual plans are a known trap. When you're comparing options, a curated directory like the <a href="/en/tools/ai-tools">AI tools directory</a> narrows the field, and a fresh strong password from the <a href="/en/tools/password-generator">password generator</a> means you're not reusing a real one across signups.</p>

<p>Finding the right tool is the first half \u2014 we covered how to search one in our guide to <a href="/en/blog/free-ai-tools-directory-guide">using an AI tools directory</a>. The second half is testing it like you'd test a car: drive it, read the fine print, and keep your wallet closed until it earns the tap.</p>`
  },
  {
    slug: "jwt-decoder-vs-session-tokens-guide",
    title: "JWT vs Session Tokens: Stateless, Unrevocable, and the Refresh Trade-Off",
    description: "Your JWT is valid for 30 days and you can't revoke it. A session you can kill instantly. Here's when stateless tokens win, when they're a trap, and why refresh tokens exist.",
    date: "2026-08-17",
    category: "Developer",
    tags: ["jwt", "session tokens", "authentication", "refresh token", "jwt vs session"],
    relatedTools: ["jwt-decoder", "base64-converter", "hash-generator"],
    content: `<p>You built your app with JWT authentication. A user logs out \u2014 and the token still works for three days. You try to block a banned account and discover the hard way: there's no switch to flip. A JWT, once issued, is valid until it expires, and the server has no built-in way to take it back. This is the stateless trade-off, and it's the most important thing to understand before you build auth.</p>

<h2>What "Stateless" Actually Buys You</h2>

<p>Decode a JWT with a <a href="/en/tools/jwt-decoder">JWT decoder</a> and you'll see the three parts: header, payload, signature. The token carries its own claims \u2014 who the user is, when it expires, what they can do \u2014 and the server verifies the signature without a database lookup. That's why JWTs scale across microservices and why they're fast: no session store, no query per request. The cost is control. There is no "delete this token" endpoint because the server never kept a copy to delete.</p>

<h2>The Revocation Problem</h2>

<p>A server-side session is the opposite: the server holds the session in a store, so logging out is just a delete \u2014 instant revocation. Banning a user, ending a stolen session, kicking someone off every device \u2014 trivial with sessions, impossible with a plain JWT unless you build a blacklist. And a blacklist brings back the database you removed, which defeats the point. The common compromise: a short-lived access token \u2014 15 minutes instead of 30 days \u2014 plus a refresh token that can be revoked. The counter-intuitive lesson: a long JWT expiry isn't convenience, it's a security hole. A stolen 30-day token is a 30-day hijack that nobody can undo.</p>

<h2>Read the Token Before You Trust It</h2>

<p>Whatever you choose, debug by reading the actual claims. Decode the token in the <a href="/en/tools/jwt-decoder">JWT decoder</a> and check <code>exp</code>, <code>iat</code>, and the scope claims \u2014 the payload is just base64, so the <a href="/en/tools/base64-converter">base64 converter</a> shows what's really inside. And never trust a client-sent claim like "role: admin" without verifying the signature, because a token is only as trustworthy as the key that signed it. We covered reading expiry claims in our guide to <a href="/en/blog/jwt-decoder-token-expiry-security">JWT expiration and security claims</a>.</p>

<p>Stateless or stateful isn't a style choice \u2014 it's a control trade-off. Pick JWTs when you need scale and can accept short life spans; pick sessions when you need to revoke. Just know before you build that a token you can't revoke is a promise you can't break.</p>`
  },
  {
    slug: "zodiac-sign-elements-modalities-explained",
    title: "Fire, Earth, Air, Water: What Zodiac Sign Elements and Modalities Actually Mean",
    description: "Astrology doesn't just have 12 signs \u2014 it organizes them into a grid of elements and modalities. Here's what fire signs, cardinal signs, and the system behind them actually describe.",
    date: "2026-08-17",
    category: "Reference",
    tags: ["zodiac", "zodiac elements", "fire signs", "zodiac signs explained", "astrology basics"],
    relatedTools: ["zodiac-sign", "perpetual-calendar", "book-of-answers"],
    content: `<p>Someone tells you "you're a fire sign, that's why you're impulsive." It sounds like astrology's version of a fortune cookie \u2014 but it's actually a coherent system. The twelve zodiac signs aren't a list; they're a grid. Four elements describe how a sign sees the world, and three modalities describe how it acts in it. Together they explain more about a sign than the date range alone.</p>

<h2>The Four Elements</h2>

<p>Fire signs \u2014 Aries, Leo, Sagittarius \u2014 are about energy, action, and ignition. Earth signs \u2014 Taurus, Virgo, Capricorn \u2014 are about stability, practicality, and the physical world. Air signs \u2014 Gemini, Libra, Aquarius \u2014 are about thought, communication, and ideas. Water signs \u2014 Cancer, Scorpio, Pisces \u2014 are about emotion, intuition, and depth. Each sign's element is the lens it processes everything through: the fire sign starts things, the earth sign builds them, the air sign talks about them, the water sign feels them.</p>

<h2>The Three Modalities</h2>

<p>On top of the elements, each sign carries a modality. Cardinal signs \u2014 Aries, Cancer, Libra, Capricorn \u2014 are the initiators; they begin their season and start things. Fixed signs \u2014 Taurus, Leo, Scorpio, Aquarius \u2014 are the sustainers; they hold the season steady. Mutable signs \u2014 Gemini, Virgo, Sagittarius, Pisces \u2014 are the adapters; they close the season and shift. Combine element with modality and each sign becomes precise: Aries is cardinal fire, the one who lights fires and moves first; Taurus is fixed earth, the unmovable ground; Gemini is mutable air, the adaptable messenger.</p>

<h2>The Counter-Intuitive Part</h2>

<p>Two signs sharing an element aren't automatically kindred spirits \u2014 Leo and Sagittarius can clash as hard as they bond. And signs sharing a modality \u2014 all four cardinal signs \u2014 recognize each other's drive even when their elements disagree. If you looked up your sign in a <a href="/en/tools/zodiac-sign">zodiac sign calculator</a> and found the description only half-true, the element-and-modality reading is where the "that's so me" feeling actually comes from. A <a href="/en/tools/perpetual-calendar">perpetual calendar</a> confirms your exact birth date, and if you'd rather ask a question than read a chart, the <a href="/en/tools/book-of-answers">book of answers</a> keeps the vibe.</p>

<p>We covered how to find your exact sun sign in our guide to <a href="/en/blog/zodiac-sign-calculator-sun-sign-astrology-guide">zodiac sign calculation</a>. The next time someone calls you a fire sign, you'll know exactly what the system means \u2014 and exactly what it doesn't.</p>`
  },
  {
    slug: "ip-lookup-geo-blocking-vpn-detection-guide",
    title: "Geo-Blocking and VPN Detection: How Websites Decide Where You Are",
    description: "The same site shows you different prices than it shows your neighbor \u2014 because of your IP address. Here's how IP geolocation works, why it's sometimes wrong, and how services try to catch VPNs.",
    date: "2026-08-17",
    category: "Developer",
    tags: ["ip lookup", "geo blocking", "vpn detection", "ip geolocation", "ip address location"],
    relatedTools: ["ip-lookup", "world-map", "global-weather"],
    content: `<p>You open a streaming site from a friend's house and the catalog is different. You check a flight price on your phone and on your laptop and the fares don't match. The website didn't guess where you are \u2014 your IP address told it. IP geolocation is how the internet decides your physical location, and once you understand how it works, a lot of weird behavior on the web makes sense.</p>

<h2>How IP Geolocation Works \u2014 and Where It Fails</h2>

<p>Every device on the internet gets an IP address, and that address is mapped to a location by databases built from internet registries, network data, and commercial sources. Run your address through an <a href="/en/tools/ip-lookup">IP lookup</a> and you'll usually get a city. Usually. The accuracy collapses with corporate proxies, mobile carriers that route traffic through a central gateway, and VPN exit nodes \u2014 your IP can place you in a city you've never visited. An IP address is not GPS; it's a best guess.</p>

<h2>Why Sites Care So Much</h2>

<p>That best guess drives real decisions. Streaming platforms geo-block content because of licensing deals. Online stores show region-specific prices and taxes. A job board shows local listings. The result: two people looking at the same URL can see completely different sites. It's not a glitch \u2014 it's geography doing its job.</p>

<h2>VPN Detection: The Counter-Intuitive Game</h2>

<p>If your IP determines what you can watch, a VPN should change everything \u2014 and it does, until it doesn't. Services fight back by blacklisting known VPN ranges, flagging IPs that switch too fast, and fingerprinting the connection itself. The counter-intuitive part: a VPN IP is rarely invisible. It's visible as a VPN \u2014 the question is only whether the service chooses to block it. That's the arms race: VPN providers race to get their exit nodes delisted, and the blocking side races to catch new ones.</p>

<p>IP geolocation is one tool among many for "where" questions \u2014 we compared it with the <a href="/en/tools/world-map">world map</a> and the <a href="/en/tools/global-weather">global weather</a> tracker as location tools. The limits of what an IP can tell you are the most important part, and we covered them in our guide to <a href="/en/blog/ip-lookup-tool-guide">what an IP address can and cannot reveal</a>. Your IP knows more than you think \u2014 and less than it pretends.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8", newline="\n") as f:
    f.write(content)

print("Free station: 378->384 objects done.")
