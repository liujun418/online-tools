"""Add 6 blogs to free station (390->396) - August 19, 2026"""
BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "jwt-decoder-hs256-rs256-signature-verification-guide",
    title: "How to Verify a JWT Signature: HS256, RS256, and Why \"Signed\" Doesn't Mean Safe",
    description: "A signed JWT can still be forged if you verify it the wrong way. Here's how to check a token's signature — HS256 vs RS256, the algorithm-swap attack, and the verification steps.",
    date: "2026-08-19",
    category: "Developer",
    tags: ["JWT signature", "HS256", "RS256", "JWT verification", "token security"],
    relatedTools: ["jwt-decoder", "hash-generator", "base64-converter"],
    content: `<p>You open a request log and find the token that broke your API. It's a JWT — three parts separated by dots, the middle one a blob of characters. You paste it into a <a href="/en/tools/jwt-decoder">JWT decoder</a> and see the payload: a user ID, a role, an expiry. The header says the token was signed with HS256. "Signed" sounds safe. Then someone reminds you that signing alone proves nothing if you verify with the wrong key.</p>

<h2>What the Signature Actually Does</h2>

<p>A JWT's third segment is a signature computed over the header and payload. Anyone can read all three parts — that's the point of the format, and why decoding a token is not a security review. The signature exists so a server can confirm the token wasn't altered after it was issued. Verification is a check: recompute the signature with the secret key and see if it matches. If it does, the token came from someone who knows the key. If it doesn't, reject it. The <a href="/en/tools/hash-generator">hash generator</a> shows the same idea with ordinary checksums: a string that changes whenever the input changes.</p>

<h2>HS256 vs RS256: Why the Choice Matters</h2>

<p>HS256 signs with a single shared secret — one key that both signs and verifies. RS256 uses a key pair: a private key signs, a public key verifies. The counter-intuitive part: "signed" tokens fail not because the math is weak but because of how the algorithm is chosen. If the server trusts whatever algorithm the token header claims, an attacker can send a token with header {"alg":"none"} or downgrade RS256 to HS256 and sign it with the public key — which is, by design, public. The fix is a server that pins the algorithm instead of trusting the header.</p>

<h2>The Verification Workflow</h2>

<p>When you inspect an unfamiliar JWT, decode all three parts first and check the header's alg against what the issuing service actually uses. Then verify the signature with the right key, confirm the expiry hasn't passed, and check the issuer and audience claims — an expired-but-signed token is still an expired token. The <a href="/en/tools/base64-converter">base64 converter</a> helps when you want to look at the raw encoded segments side by side. Signature checks stop forged tokens; claim checks stop tokens that were once valid and should no longer be.</p>

<p>A signed JWT is a claim that hasn't been tampered with, not a promise that it's trustworthy. We covered expiration and security claims in our guide to <a href="/en/blog/jwt-decoder-token-expiry-security">reading JWT expiration</a>. Decode it, pin the algorithm, verify with the right key — and the token you trusted becomes a token you checked.</p>`
  },
  {
    slug: "quotes-famous-misattributed-sayings-guide",
    title: "Famous Quotes That Were Never Actually Said: The Misattributions We All Repeat",
    description: "The internet is full of quotes that sound wise and were never spoken. Why do we misattribute famous lines — and how to check before you share.",
    date: "2026-08-19",
    category: "Fun & Media",
    tags: ["famous quotes", "misattributed quotes", "quote verification", "quote history", "misquotes"],
    relatedTools: ["quotes", "random-quote", "book-of-answers"],
    content: `<p>You shared a quote on LinkedIn — "Success is not final, failure is not fatal: it is the courage to continue that counts." You credited Winston Churchill. Someone commented with a link. The quote is from a 2008 motivational book, and the link pointed to a historian explaining that Churchill never said it. You weren't trying to be wrong. You just repeated something the internet had repeated so many times that it felt like fact.</p>

<h2>The Great Misattribution Machine</h2>

<p>Misquotes spread for a mechanical reason: they're useful before they're true. A pithy line attached to Einstein, Twain, or Gandhi travels further than the same line with no author, because the name is the credibility. Quote sites, social posts, and gift books all compete for shares, and attribution is the cheapest thing to skip. The result is a stable of famous lines that were never spoken — "Be yourself; everyone else is already taken" wasn't Wilde, and "The definition of insanity is doing the same thing over and over" wasn't Einstein.</p>

<h2>Why We Believe the Attribution</h2>

<p>The counter-intuitive part: your memory is not the problem. The framing is. When a quote arrives already dressed in a famous name, the name acts as a source signal your brain doesn't re-check. Repeated exposure makes it feel like truth even when the first instance was a joke or a misremembering. The same cognitive shortcut that makes a <a href="/en/tools/random-quote">random quote</a> feel profound also makes a misattributed one feel authentic.</p>

<h2>How to Check Before You Share</h2>

<p>Thirty seconds beats embarrassment. Search the exact wording plus the name; if the only results are image macros and quote sites with no citation, treat it as unverified. Check a quote-specific source like the Quote Investigator archive. And when you can't verify the speaker, do what a <a href="/en/tools/quotes">quotes directory</a> makes easy: share the line with no author attached — it's still worth reading, just not worth attributing. The <a href="/en/tools/book-of-answers">book of answers</a> is another reminder that a meaningful line doesn't need a famous name to land.</p>

<p>Not every quote needs a verified source, but every shared one deserves an honest one. We compared curated and random quote tools in our guide to <a href="/en/blog/quotes-directory-vs-random-generator">quotes directory vs random generator</a>. Check the source, keep the line, drop the fake attribution.</p>`
  },
  {
    slug: "discount-calculator-percentage-off-vs-flat-amount-guide",
    title: "20% Off vs $20 Off: Which Discount Is Actually Better for You",
    description: "A $20-off coupon and a 20%-off coupon are not the same deal — the winner depends entirely on the price. Here's the math that decides.",
    date: "2026-08-19",
    category: "Calculator",
    tags: ["discount math", "percentage off", "coupon comparison", "sale price", "discount calculator"],
    relatedTools: ["discount-calculator", "percentage-calculator", "tip-calculator"],
    content: `<p>You're standing in an aisle with two offers. One coupon takes $20 off. The other takes 20% off. Both feel similar, and the store made sure both look generous. For a $200 item they're identical — $40 either way. For a $60 item they're not close: $20 off beats 20% off ($12) by a wide margin, while at $400, 20% off ($80) crushes the flat $20. The deal is decided entirely by the price.</p>

<h2>The Math That Decides</h2>

<p>The crossover point is where the flat amount equals the percentage: for $20 off vs 20% off, that's a $100 item. Above $100, the percentage wins; below it, the flat amount wins. The common mistake is comparing offers by the number on the coupon instead of by the item you're actually buying. A <a href="/en/tools/discount-calculator">discount calculator</a> settles it in one entry: put in the price and both offers, and the cheaper price shows itself before you carry anything to the register.</p>

<h2>Stacked Discounts: Order Matters</h2>

<p>The counter-intuitive part is when the store lets you stack. "Take 30% off, then $10 off" and "$10 off, then 30% off" are not the same price. The percentage is larger, so applying it first makes a bigger dent on a bigger number — 30% then $10 almost always wins over $10 then 30%. On a $150 item: 30% first gives $150 to $105 to $95. $10 first gives $150 to $140 to $98. Three dollars, free, by order of operations. The <a href="/en/tools/percentage-calculator">percentage calculator</a> handles the percent side while you think about sequence.</p>

<h2>Sale Price Isn't the Whole Story</h2>

<p>Finally, the deepest discount is the one attached to the item you needed. A <a href="/en/tools/tip-calculator">tip calculator</a> is a reminder that small percentage math shows up everywhere — and the same habit of checking the actual number instead of the banner applies at restaurants, in sales, and in subscription pricing. Discounts are arithmetic wearing a marketing hat.</p>

<p>We covered comparing 30% off with buy-one-get-one in our guide to <a href="/en/blog/discount-calculator-online-shopping-bogo-deals">BOGO vs percentage deals</a>. Run the numbers on the real item, mind the order of stacked discounts, and the coupon in your hand stops being a guess.</p>`
  },
  {
    slug: "world-map-projection-misconceptions-guide",
    title: "Why Greenland Is Bigger Than Africa on Every Map: Map Projections Explained",
    description: "Africa is 14 times larger than Greenland, yet every flat map makes them look similar. The Mercator projection distorted our world — here's why.",
    date: "2026-08-19",
    category: "Reference",
    tags: ["map projections", "Mercator projection", "map distortion", "world map", "geography"],
    relatedTools: ["world-map", "global-weather", "ip-lookup"],
    content: `<p>You open an online world map and trace a flight from London to Cape Town. The route arcs across Europe and Africa, and it looks like a detour. Then you notice something stranger: on the map, Greenland stretches almost the full width of the Atlantic, and Africa looks only a little larger. Africa is actually 14 times bigger than Greenland. Every flat map you've seen has been lying — politely, and by design.</p>

<h2>The Mercator Problem</h2>

<p>Most familiar maps use the Mercator projection, created in 1569 for sailors. Its genius is that straight lines on the map are constant compass bearings, which made navigation simple. Its flaw is that it preserves shapes by stretching areas: a square near the equator is roughly accurate, but the same square drawn near the poles inflates. Greenland, Russia, Canada, and Antarctica balloon; Africa, South America, and India — all straddling the equator — stay near true size. The result: the world looks like a set of huge northern countries, when the equator actually hosts most of the planet's land.</p>

<h2>Why Projections Must Lie</h2>

<p>The counter-intuitive part: no flat map can be accurate. A sphere cannot be flattened without distortion — area, shape, distance, and direction can't all be preserved at once. Every projection chooses which lie to tell. Mercator keeps shapes (and angles) and sacrifices size. Equal-area projections like Gall-Peters keep relative sizes and distort shapes. That's why a <a href="/en/tools/world-map">world map</a> view and a globe disagree: the globe shows the truth, the flat map shows a trade-off.</p>

<h2>What This Means for How We See the World</h2>

<p>This isn't trivia — map bias shapes perception. Countries shown large feel important; a shrunken Africa makes its actual scale less visible in news, weather, and geography lessons. Next time you check a destination with the <a href="/en/tools/global-weather">global weather</a> tool, note the latitude: near the poles, distances on a flat map exaggerate. And the <a href="/en/tools/ip-lookup">IP lookup</a> tool is a good reminder that where things are is a data question, not just a drawing question.</p>

<p>We covered how maps got built across the centuries in our guide to <a href="/en/blog/world-map-history-ptolemy-to-google-maps">world map history</a>. A map is a model, not a photograph. Read the projection, and the lie stops fooling you.</p>`
  },
  {
    slug: "pregnancy-calculator-40-week-count-explained",
    title: "You're Not 9 Months Pregnant: Why the 40-Week Count Confuses Everyone",
    description: "The classic pregnancy math — nine months — doesn't match the 40-week calendar that clinics use. Here's how pregnancy calculators actually count.",
    date: "2026-08-19",
    category: "Calculator",
    tags: ["pregnancy calculator", "gestational age", "40 weeks", "due date math", "pregnancy weeks"],
    relatedTools: ["pregnancy-calculator", "age-calculator", "calorie-calculator"],
    content: `<p>Your friend says she's six months pregnant, then sends a screenshot of a pregnancy calculator that says 25 weeks. If you do the math on six months at four weeks each, that's 24 weeks — close. But if you count calendar months, six months from her start date lands at about 26 weeks. All three numbers are "right," and none of them matches the 40-week count her clinic uses. This is the confusion at the heart of pregnancy math.</p>

<h2>Why 40 Weeks Isn't 9 Months</h2>

<p>A pregnancy is counted as 40 weeks from the first day of the last menstrual period, and 40 weeks is routinely called "nine months." But nine calendar months is roughly 39 weeks — and by the time the 40-week mark arrives, you're already partway into the tenth calendar month. The gap exists because calendar months average 4.3 weeks, not 4. Some months have 31 days, and the count starts before conception. The classic "nine months" is a comfortable number that doesn't match the clinical calendar.</p>

<h2>How the Count Starts</h2>

<p>The other counter-intuitive piece: gestational age is counted from the last menstrual period, roughly two weeks before conception even happened. So at "week two," there's no embryo yet. Clinicians use this because the last period is a date a person can actually remember, while the moment of conception is usually unknown. The <a href="/en/tools/pregnancy-calculator">pregnancy calculator</a> works the same way: it takes the start date and adds 40 weeks, with trimesters measured from that same anchor.</p>

<h2>What to Say Instead of Months</h2>

<p>When someone asks how far along you are, weeks are the honest unit: they map directly to the clinical timeline, and they don't wobble between 4-week and calendar months. If you need the month count for context, convert with care — roughly four weeks is a lunar month, not a calendar one. The <a href="/en/tools/age-calculator">age calculator</a> shows the same principle for regular ages: the number depends entirely on how you define the interval. And if the pregnancy is part of a health-tracking routine, the <a href="/en/tools/calorie-calculator">calorie calculator</a> is a reminder that numbers in health are only useful when you know what they're counting.</p>

<p>We covered why the due date is really an estimate in our guide to <a href="/en/blog/pregnancy-calculator-due-date-accuracy">pregnancy due date accuracy</a>. The count is 40 weeks, the months are a shortcut, and knowing which one you're using keeps the confusion where it belongs — nowhere.</p>`
  },
  {
    slug: "gif-search-workplace-business-communication-guide",
    title: "GIFs at Work: Using Animated Images in Business Communication Without Sounding Unprofessional",
    description: "A well-placed GIF can defuse a tense thread and speed up a decision. A badly placed one can cost you credibility. Here's how to use GIFs at work.",
    date: "2026-08-19",
    category: "Fun & Media",
    tags: ["GIFs at work", "workplace communication", "remote teams", "business GIFs", "team chat"],
    relatedTools: ["gif-search", "quotes", "translate"],
    content: `<p>The thread had been going sideways for an hour. Three engineers arguing about a naming convention, temperature rising, everyone typing longer and sharper replies. Then someone posted a GIF of a cat staring at a laptop with the caption "watching this debate unfold." The room exhaled. The tone reset, the argument resumed at normal volume, and a naming decision got made twenty minutes later. That's a GIF earning its place at work.</p>

<h2>Where GIFs Actually Help</h2>

<p>Animated GIFs are tone language. In text, you can't hear the shrug behind "okay, sure." A GIF can carry the exact register — dry, delighted, exhausted — that a message needs, and it lands faster than a sentence of apology. They work best in low-stakes moments: celebrating a deploy, acknowledging a fix, reacting to a long email before you write the real reply. The rule is to let the GIF do the emotional work while your words do the professional work.</p>

<h2>The Unwritten Rules</h2>

<p>Use a <a href="/en/tools/gif-search">GIF search</a> that shows the source so you know what you're sending — a reaction GIF from a movie you can't identify is a risk. Match the culture: a team that communicates dry and flat will read a string of gifs as noise, not humor. And respect the medium: one GIF per exchange, never a response to a serious complaint, and never when the person needs facts instead of mood. The counter-intuitive part is that restraint is what makes the occasional GIF effective — a tool that fires every message stops carrying information.</p>

<h2>When to Skip the GIF</h2>

<p>Performance reviews, incident postmortems, contract talk, and anywhere the words are the deliverable. In those rooms, a GIF reads as deflection. The same discipline applies to the rest of your toolkit: a <a href="/en/tools/translate">translate</a> tool for a message in another language, or a <a href="/en/tools/quotes">quotes</a> search when you need an actual line to land, are deliberate choices. GIFs are for the human moment between the work, not a substitute for the work itself.</p>

<p>We covered finding and downloading the right GIF in our guide to <a href="/en/blog/gif-search-download-guide">GIF search and download</a>. Use it to reset the tone, know your source, and let your words stay the message.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8", newline="\n") as f:
    f.write(content)

print("Free station: 390->396 objects done.")
