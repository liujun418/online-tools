# -*- coding: utf-8 -*-
import io

path = r"C:\Users\jun\online-tools\src\lib\blog.ts"
with io.open(path, encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "regex-tester-catastrophic-backtracking-performance-guide",
    title: "Your Regex Is Freezing: Catastrophic Backtracking, Explained",
    description: "A regex that flies through most strings and hangs on one is usually doing the same work twice. Here's how catastrophic backtracking happens — and the pattern to spot before it eats your page.",
    date: "2026-08-27",
    category: "Developer",
    tags: ["regex", "backtracking", "ReDoS", "performance", "regular expressions"],
    relatedTools: ["regex-tester", "text-diff", "code-formatter"],
    content: `<p>You've got a regex that validates usernames. It's been fine for months. Then one afternoon someone pastes a long string of the letter <code>a</code> into the form and the whole page hangs for ten seconds. The regex didn't get slower — it hit a pathological input, and the engine started doing the same failed work over and over. This is catastrophic backtracking, and it's the most common way a "fast" regex becomes a server-killer.</p>

<h2>When a Regex Does the Same Work Twice</h2>

<p>Regex engines match by trying and failing. When a match fails at the end, the engine doesn't give up — it backtracks to the last choice point and tries another path. That's normal. The trouble starts when your pattern has two quantifiers that can match the same text. A classic is <code>(a+)+$</code> against a string of <code>a</code>s followed by an <code>X</code>. The outer <code>+</code> can split the group in a dozen ways, and for each split the inner <code>+</code> re-checks the same characters. The number of paths grows exponentially with the input length, so a 20-character string takes milliseconds and a 40-character one takes minutes. Same pattern, same task — just exponentially more work.</p>

<p>The counter-intuitive part: the string that breaks you often looks innocent. It's not a huge document; it's one long run of a single character, or an alternation like <code>(ab|a)+</code> where both branches can match the same prefix. The engine dutifully explores every dead end.</p>

<h2>Spotting the Time Bomb (and Diffing the Fix)</h2>

<p>Two warning signs tell you a pattern is fragile. First, nested quantifiers — anything like <code>(x+)+</code> or <code>(x|y)+</code> where the same text can be consumed in more than one way. Second, alternations whose branches overlap at the start, like <code>(ab|a)*</code>. When you see either, test it on a long, near-match input before it ships. The fastest fix is often to restructure the pattern so the engine never has to retry: possessive quantifiers like <code>a++</code>, or an atomic group that commits once it matches. In many cases you can flatten the whole thing into a simpler token pattern that matches in one pass.</p>

<p>Paste the suspicious pattern into a <a href="/en/tools/regex-tester">regex tester</a> and try it against a deliberately hostile string — if the match time balloons, you've found your bomb before your users did. When you're comparing a broken pattern against your fix, run both through a <a href="/en/tools/text-diff">text diff</a> on the same sample input so you can see exactly which construct changed the behavior. And once the fix is solid, keep the regex readable in your source with a <a href="/en/tools/code-formatter">code formatter</a> so the next person can actually review the logic instead of squinting at one long line.</p>

<h2>One Rule That Prevents Most of It</h2>

<p>The habit that stops this class of bug: whenever you write a quantifier inside a group that's also quantified, pause and ask whether the engine could match the same characters more than one way. We covered the greedy-versus-lazy side of this in our guide to <a href="/en/blog/regex-tester-lazy-greedy-quantifiers-guide">lazy and greedy quantifiers</a>; catastrophic backtracking is what happens when the two of them get stacked. If a pattern ever makes you nervous, test it on the ugliest input you can invent before it goes anywhere near production.</p>`
  },
  {
    slug: "life-hacks-notification-digital-declutter-guide",
    title: "Stop the Ping: Notification Hacks That Quiet Your Day",
    description: "Every ping is a tiny promise of dopamine and a tiny tax on your focus. Here's the notification-cleaning routine that takes twenty minutes and pays for itself all day.",
    date: "2026-08-27",
    category: "Fun & Media",
    tags: ["notifications", "digital declutter", "focus", "productivity", "phone habits"],
    relatedTools: ["life-hacks", "time-screen", "password-generator"],
    content: `<p>Your phone pings, you glance at it, and forty minutes later you're three threads deep in a conversation you never meant to join. The ping isn't the problem — the access is. Every notification is an open invitation for your attention, and the math is brutal: a two-second glance costs about twenty minutes of focus to recover. The fix isn't willpower. It's a one-time cleanup of who's allowed to reach you, and it takes about twenty minutes.</p>

<h2>Why Every Ping Is a Tiny Tax</h2>

<p>Notifications are engineered around a slot-machine loop. Most of them are worthless, but the occasional one is genuinely important, and that unpredictability is exactly what keeps you checking. The counter-intuitive part: cutting most notifications doesn't make you miss things — it makes the ones that remain actually register. When everything pings, your brain learns to filter everything out, including the message from your kid's school that mattered. A quieter phone is a phone you trust.</p>

<p>The second cost is fragmentation. A notification doesn't just steal the seconds you spend reading it; it pulls you out of whatever you were doing, and switching costs are real. Twenty notifications is twenty context switches, even if you ignore most of them. That's the tax nobody budgets for.</p>

<h2>The Twenty-Minute Cleanup</h2>

<p>Start with the heavy hitters: open your notification settings and turn off everything that isn't a person or a payment. Apps that want your attention for engagement — games, shopping, news — get silent at minimum, off entirely where you can. Next, batch your checks. Pick two or three windows a day when you allow yourself to look, and run a focus countdown in between so the urge has a visible end point instead of a vague "later."</p>

<p>Finally, do a small security reset while you're in there. If you've been unsubscribing from a dozen noisy lists and deleting apps that were pulling you back in, rotate the passwords on the accounts you actually keep — a <a href="/en/tools/password-generator">password generator</a> gives you a fresh one in a single click instead of reaching for the same old string. The point of the cleanup is that you decide who reaches you, so make sure the accounts that stay are the ones you can defend. And when you need to hold the line during a work block, put a <a href="/en/tools/time-screen">fullscreen countdown</a> on your second screen — it makes the "no checking until it ends" rule concrete instead of a promise you'll break.</p>

<h2>Build the Habit on Top of the Cleanup</h2>

<p>The tools matter less than the default: new apps start silent, and you opt in to alerts only when one proves useful. We covered building better daily habits in our guide to <a href="/en/blog/life-hacks-morning-routine-productivity-science-based">science-based morning routines</a>; the notification cleanup is the evening version of the same idea — set up the environment so the right behavior is the easy one. It's twenty minutes once, and your attention is yours again.</p>`
  },
  {
    slug: "morse-code-learn-by-ear-listening-guide",
    title: "Learning Morse by Ear: Your Brain Learns to Hear, Not Memorize",
    description: "Morse isn't a code you translate letter by letter — it's a sound your brain recognizes as a whole word. Here's the listening method that beats the flashcard approach.",
    date: "2026-08-27",
    category: "Developer",
    tags: ["Morse code", "listening", "ear training", "ham radio", "learning method"],
    relatedTools: ["morse-code", "text-repeater", "base-converter"],
    content: `<p>Most people learn Morse the way it's printed in a handbook: a table of letters and their dot-dash patterns, memorized like a spelling list. Then they hear a real signal — dits and dahs flowing at speed — and it's just noise. The problem isn't your memory. Morse at any useful speed isn't a code you translate; it's a sound your brain learns to recognize the way it recognizes a spoken word. You don't hear "dash-dot" and think <em>n</em>. You hear the whole rhythm and know it instantly.</p>

<h2>Morse Is a Sound, Not a Table</h2>

<p>Here's the counter-intuitive part of learning by ear: you should start by <em>not</em> memorizing the code at all. Beginners who drill the table tend to count dots and dashes as they arrive, and counting is exactly what makes a fast signal impossible — by the time you've counted four characters, the next one is gone. Instead, play one character at a time and listen to its shape. The character <code>dit-dah-dit</code> isn't three symbols; it's the sound of the letter <code>r</code>, as distinct in Morse as the difference between the spoken words "at" and "it." Your brain builds this recognition the same way it builds word recognition in speech: not by assembling phonemes, but by hearing whole units enough times that the pattern snaps into place.</p>

<h2>Train the Ear With Spacing and Repetition</h2>

<p>The technique that makes this work is called Farnsworth spacing. You keep the dots and dashes at a realistic speed so each character sounds like the real thing, but you leave long gaps between characters — sometimes several seconds. The gap gives your brain time to absorb the sound as a unit, and as recognition improves you shorten the gaps until the characters flow at full speed. Sessions should be short and frequent; ten minutes a day beats an hour on Sunday, because the recognition builds during sleep.</p>

<p>Practice with real words, not random letters. Start with your own name, common words, and call signs, and copy them until the sound of each one is automatic. A <a href="/en/tools/text-repeater">text repeater</a> is perfect for this — loop a short phrase and copy it until you can take it down without thinking, then swap in the next one. When you're stuck on a character, use a <a href="/en/tools/morse-code">Morse code translator</a> to hear the single character on its own, in isolation, so your ear can lock onto it before you meet it again in a stream. And if the whole thing feels abstract, it helps to know Morse is a binary code at heart — every character is a pattern of two symbols, and the same logic that powers <a href="/en/tools/base-converter">number base conversion</a> is running under the dits and dahs. The code isn't magic; it's just a language your ear can be trained to speak.</p>

<h2>The Flashcard Trap</h2>

<p>Flashcards teach your eyes, and Morse is a listening skill. We covered the memorization side in our guide to <a href="/en/blog/morse-code-memorize-fast-mnemonic-guide">mnemonics and fast memorization</a>, and that's a fine first day. But the moment a real signal is involved, switch to ear training — play the sound, copy it, repeat. Your brain will do the rest, and one day you'll realize you stopped counting dits a week ago.</p>`
  },
  {
    slug: "ip-lookup-wrong-country-geolocation-guide",
    title: "Why Sites Think You're in Another Country (and How to Check)",
    description: "A store prices things in the wrong currency and a streaming catalog is missing your region. It's not a broken setting — it's how IP geolocation works. Here's what the internet thinks about you.",
    date: "2026-08-27",
    category: "Reference",
    tags: ["IP geolocation", "IP lookup", "location", "streaming", "privacy"],
    relatedTools: ["ip-lookup", "global-weather", "world-map"],
    content: `<p>You open a store and the prices are in a currency you've never used. A streaming service is showing you a catalog that looks like it belongs to another country. Your first instinct is that a setting is wrong, so you dig through preferences and find nothing. The real explanation is boring and useful: the site isn't looking at your location at all. It's looking at your IP address, and your IP doesn't live where you do.</p>

<h2>What "Your IP Location" Actually Means</h2>

<p>IP geolocation doesn't triangulate your position like GPS. It looks up your IP address in a database that says "this block of addresses belongs to a company registered in X city," and X city is often the ISP's headquarters, a data center, or a registration office — not your neighborhood. The counter-intuitive part is that the more legitimately you use the internet, the more likely this is to be wrong: corporate networks route everyone through one office exit, VPNs exit from wherever their servers are, and mobile carriers hand out addresses from regional pools that can be hundreds of miles from the phone. You can be sitting in Chicago while the whole internet thinks you're in a server farm in Dallas.</p>

<h2>Checking What the Internet Thinks</h2>

<p>The quickest reality check is to look up your own IP and compare the reported city to where you actually are. Run an <a href="/en/tools/ip-lookup">IP lookup</a> and read the location it returns — if it says a city you've never visited, that's your geolocation database entry, not a bug in your browser. A neat way to confirm what's happening: check the weather. Pull up a <a href="/en/tools/global-weather">global weather</a> lookup for the city your IP claims, and if the forecast is clearly for somewhere else, you have visual proof that your traffic is exiting from the other location. For the full picture, a <a href="/en/tools/world-map">world map</a> view of your IP's reported position makes it obvious at a glance whether it's landing where you expect.</p>

<h2>What You Can (and Can't) Do About It</h2>

<p>Some mismatches you can fix, some you can't. If your ISP or VPN is routing you through the wrong region, a different exit server often clears it up. But many sites will keep geolocating you wrong no matter what you do, because the database hasn't been updated. We covered the deliberate side of this — VPNs and geo-blocking — in our guide to <a href="/en/blog/ip-lookup-geo-blocking-vpn-detection-guide">geo-blocking and VPN detection</a>. The honest takeaway: when a site shows you the wrong country, don't assume it's broken. Check your IP first, understand where the mismatch comes from, and you'll stop wasting time on settings that were never the problem.</p>`
  },
  {
    slug: "time-screen-meeting-countdown-timer-guide",
    title: "Fullscreen Countdown: Keeping Meetings and Talks On Time",
    description: "Meetings run long because nobody watches the clock. A visible countdown changes that — here's how to run one on the screen you already have, and the human rules that make it work.",
    date: "2026-08-27",
    category: "Reference",
    tags: ["countdown timer", "meetings", "time management", "presentations", "fullscreen"],
    relatedTools: ["time-screen", "fullscreen-text", "scoreboard"],
    content: `<p>You're in a weekly meeting that should take thirty minutes. At minute thirty-five, someone is still warming up to their point, because nobody in the room is watching the clock. Meetings run long for a boring reason: time is invisible, and an invisible deadline doesn't constrain anyone. Put a countdown on the screen, though, and the whole room changes behavior — speakers wrap up, tangents die faster, and the meeting ends when it said it would. You already have the screen; here's how to run it properly.</p>

<h2>Why a Visible Timer Changes Behavior</h2>

<p>Work expands to fill the time available — that's Parkinson's law, and it's why open-ended slots run long. The counter-intuitive fix is a countdown rather than a stopwatch. An elapsed timer tells you how long you've been going, which reads as "we're fine, plenty left." A countdown tells you what's left, which reads as pressure — and mild pressure is exactly what keeps people concise. The seconds visibly running out do something an agenda item never can: they make the deadline public and shared. Everyone in the room watches the same number fall, so the person who's rambling knows they're rambling, and it's the timer, not you, doing the interrupting.</p>

<h2>Running It on the Screen You Already Have</h2>

<p>Use a second monitor if you have one, or the room's projector, and put a <a href="/en/tools/time-screen">fullscreen countdown</a> on it — large, high-contrast digits that everyone can read from across the table. The display matters less than the rules you attach to it, and the rules are three: warn at two minutes, hard-stop at zero, and never extend for a straggler. If you extend once, you've taught the room that the countdown is a suggestion, and it stops working forever. For talks with a written agenda, you can put the topic list on the same screen next to the countdown with a <a href="/en/tools/fullscreen-text">fullscreen text</a> display, so people see what's coming and the timer together. And if the event is competitive — a game night, a quiz, a workshop with teams — a <a href="/en/tools/scoreboard">scoreboard</a> alongside the countdown keeps both the time and the score visible, which does the same job for fun that the countdown does for work.</p>

<h2>When the Countdown Works Best</h2>

<p>The technique shines in two places: meetings where one person tends to dominate, and presentations where the speaker has a hard time feeling the clock. We covered the difference between a clock and a stopwatch in our guide to <a href="/en/blog/time-screen-vs-stopwatch-clock-display-vs-elapsed-time">clock displays versus elapsed time</a>; the countdown is the third mode — a deadline you can see. Set it, state the rules once, and let the timer be the bad guy. Your meetings will end when they're supposed to, and everyone will quietly thank you for it.</p>`
  },
  {
    slug: "mortgage-calculator-affordability-rule-guide",
    title: "How Much House Can You Actually Afford? The 28% Rule, Tested",
    description: "A lender says you're approved for way more than you'd borrow, and a friend quotes the 28% rule. Neither is the truth. Here's how to size a mortgage against your real budget.",
    date: "2026-08-27",
    category: "Calculator",
    tags: ["mortgage", "affordability", "28% rule", "home buying", "budgeting"],
    relatedTools: ["mortgage-calculator", "income-tax-calculator", "compound-interest"],
    content: `<p>You get pre-approved, and the number is bigger than anything you'd ever comfortably borrow. A friend counters with the 28% rule. Both of them are answering a different question than the one you're actually asking. The lender is telling you the maximum a bank will tolerate. The rule is a rough guardrail. What you need is the number that works when your actual income, your actual bills, and an honest look at ownership costs are all in the same room — and that number is almost always lower than both.</p>

<h2>What the 28% Rule Is Really For</h2>

<p>The 28% rule says your housing costs should stay under 28% of gross income, and the related 36% figure caps total debt. Those numbers exist because they're the ceilings banks use when deciding whether to approve a loan — they measure risk to the lender, not comfort for you. The counter-intuitive part: the rule is a sanity check, not a target. If 28% of your gross income feels tight because you live in an expensive city or you're carrying other debt, you're allowed to aim lower. The rule was never a budgeting method; it's a filter to keep obviously bad loans from happening.</p>

<h2>The Honest Way to Size a Loan</h2>

<p>Start with net income, not gross. Run your pay through an <a href="/en/tools/income-tax-calculator">income tax calculator</a> so you're working with what actually lands in your account, then build the real monthly number: principal and interest, property tax, insurance, and a maintenance allowance. That's the PITI-plus number, and it's higher than the shiny "monthly payment" a calculator spits out before you add the rest. This is where a <a href="/en/tools/mortgage-calculator">mortgage calculator</a> earns its keep — not to tell you the payment, but to let you try different prices, rates, and down payments quickly and see which combination keeps your total under your real budget.</p>

<p>Then stress-test it. Ask what the payment looks like at a rate one or two points higher, and whether your budget survives a lean month or a job change. Ownership is a thirty-year commitment with yearly surprises, and the math should work for the worst realistic case, not just today's. One number worth seeing before you commit: the total interest over the life of the loan. A <a href="/en/tools/compound-interest">compound interest calculator</a> shows you what that rate does across three decades, and for most people it's the moment the "affordable" monthly payment stops looking so cheap.</p>

<h2>The Verdict Is Your Budget's, Not the Calculator's</h2>

<p>The calculator gives you a number; your budget gives you the verdict. We walked through the basics in our guide for <a href="/en/blog/mortgage-calculator-first-time-home-buyer-guide">first-time home buyers</a>, and the same principle holds one step deeper: pre-approval is the bank's ceiling, 28% is the industry's guardrail, and the number that actually works is the one that leaves you sleeping well every month. Aim for that one.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

assert content.count(old) == 1, "marker not found or not unique"
content = content.replace(old, new_blogs)
with io.open(path, "w", encoding="utf-8", newline="\n") as f:
    f.write(content)
print("OK free station blogs inserted")
