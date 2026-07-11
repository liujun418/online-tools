"""Add 6 blogs to free station (188→194) — July 11, 2026"""
import os, sys

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "free-translator-vs-paid-api-when-free-is-good-enough",
    title: "Free Online Translator vs Paid Translation APIs When Free Machine Translation Is Good Enough — and When You Need a Human",
    description: "Google Translate and DeepL are free and handle 90% of casual translation needs. But the last 10% — legal documents, medical instructions, literary prose — still needs human judgment. Here's the boundary.",
    date: "2026-07-11",
    category: "Text Tools",
    tags: ["free translator", "machine translation", "Google Translate", "DeepL", "translation quality"],
    relatedTools: ["translate", "text-polish", "case-converter"],
    content: `<p>You need to translate a product description into Spanish for your e-commerce site. A <a href="/en/tools/translate">free online translator</a> handles it in seconds. The translation is accurate, the grammar is correct, and the product details are preserved. A Spanish speaker reads it and says it looks fine. Cost: zero. Time: five seconds.</p>

<p>Now you need to translate a legal contract from Japanese to English for a business partnership. The free translator produces a grammatically correct translation. But the Japanese legal term "善意の第三者" is translated as "good faith third party" — which is literally correct but legally meaningless in English contract law, where the correct term is "bona fide third party." The free translator did not know the legal context. It translated the words, not the meaning.</p>

<p>This is the boundary between free machine translation and professional translation. Here is when free is good enough, when you need to pay, and how to tell the difference before you publish something that makes you look incompetent.</p>

<h2>What Free Machine Translation Does Well</h2>

<p>Modern neural machine translation (NMT) — the technology behind Google Translate, DeepL, and our <a href="/en/tools/translate">free translator</a> — is remarkably good at: everyday conversational language, straightforward factual descriptions (product listings, news articles, travel information), common business correspondence (emails, meeting notes, status updates), and languages with large training datasets (Spanish, French, German, Chinese, Japanese — the more training data, the better the translation).</p>

<p>For these use cases, free translation is not just good enough — it is often indistinguishable from a human translation for the average reader. A Spanish speaker reading your translated product description will not know it was machine-translated. The grammar is correct. The vocabulary is natural. The meaning is preserved.</p>

<h2>Where Free Translation Still Fails</h2>

<p><strong>Domain-specific terminology:</strong> Legal, medical, technical, and financial documents use specialized vocabulary that has precise meanings. A machine translator knows the common meaning of "consideration" but not its specific legal meaning (something of value exchanged in a contract). It translates the word, not the term of art.</p>

<p><strong>Idioms and cultural references:</strong> "It's raining cats and dogs" translates literally to "Está lloviendo gatos y perros" — which is nonsense in Spanish. The correct translation is "Está lloviendo a cántaros" (it's raining from pitchers). Machine translators are getting better at idioms, but they still fail on culture-specific references, jokes, and wordplay.</p>

<p><strong>Tone and register:</strong> A machine translator does not know whether your email should be formal or casual, deferential or direct. It translates the words. It does not adjust the social dynamics. In Japanese, the difference between polite and casual speech is encoded in verb endings — and using the wrong one can be offensive. The machine translator picks the most common form, which is often wrong for the context.</p>

<p><strong>Low-resource languages:</strong> Languages with limited training data — Icelandic, Swahili, Bengali, many indigenous languages — produce noticeably worse machine translations. The model has fewer examples to learn from. The translations are comprehensible but clearly non-native.</p>

<h2>The Decision Framework</h2>

<p>Ask: <strong>what is the cost of a mistranslation?</strong> If the answer is "someone might chuckle at a slightly awkward phrase" → free translation is fine. If the answer is "someone might sign the wrong contract, take the wrong medication, or be offended" → hire a human translator. The free tool handles 90% of translation needs. The remaining 10% is where professional translators earn their fees — not by translating words, but by understanding context, culture, and consequence.</p>

<p>Translate your next document at <a href="/en/tools/translate">free online translator</a> — know when it is good enough, and know when to call a human.</p>`
  },
  {
    slug: "reaction-test-gaming-performance-reflex-training",
    title: "Reaction Test Gaming Performance How Pro Gamers Train Their Reflexes — and What the Average Person's Reaction Time Actually Is",
    description: "The average human reaction time to visual stimulus is 250 milliseconds. Pro gamers average 150-180ms. F1 drivers react in 100ms. Here's what reaction tests measure, how to improve, and where the biological limits are.",
    date: "2026-07-11",
    category: "Fun & Media",
    tags: ["reaction test", "gaming", "reflexes", "performance", "neuroscience"],
    relatedTools: ["reaction-test", "stopwatch-and-timer", "scoreboard"],
    content: `<p>You click the red-green box on a <a href="/en/tools/reaction-test">reaction test</a>. The screen turns green. You click. Your time: 285 milliseconds. Is that good? The average human visual reaction time is about 250ms. You are slightly slower than average. A pro gamer — someone who plays first-person shooters competitively — averages 150-180ms. An F1 driver reacting to a start light averages 100-150ms. An Olympic sprinter reacting to a starting gun: 100-120ms.</p>

<p>Reaction time is one of the few cognitive metrics that is both measurable in seconds and improvable with training. Here is what the test actually measures, what the biological limits are, and how to train your way from 285ms to under 200ms.</p>

<h2>What Reaction Time Actually Measures</h2>

<p>A simple reaction time test — like the red-green box — measures the total time from <strong>stimulus onset</strong> (the screen turns green) to <strong>motor response</strong> (you click). This time includes: the light hitting your retina (10ms), the signal traveling from your eye to your visual cortex (20-40ms), your brain processing the signal and deciding to act (100-150ms), the signal traveling from your motor cortex to your finger (20-30ms), and your finger muscle contracting to click (30-50ms).</p>

<p>The biological bottleneck is the <strong>decision-making stage</strong> — your brain recognizing that the screen changed color and deciding to click. This stage accounts for roughly half of your total reaction time. The rest is physics and biology — signal transmission speeds that cannot be meaningfully improved.</p>

<p>Reaction time is not the same as reflexes. Reflexes (like pulling your hand away from a hot surface) bypass the brain entirely — the signal goes from your spinal cord directly to your muscles. Reaction time requires conscious processing. Reflexes are faster (50-100ms) but limited to pre-wired responses. Reaction time is slower but flexible — you can react to any stimulus you are trained to recognize.</p>

<h2>How to Improve Your Reaction Time</h2>

<p><strong>Practice the specific task.</strong> Reaction time improvement is task-specific. Practicing the red-green box test will improve your score on the red-green box test. It will not improve your reaction time in a video game, in a car, or on a starting block. The brain optimizes for the specific stimulus-response pair it practices. If you want to improve your gaming reaction time, play the game. If you want to improve your driving reaction time, drive. The <a href="/en/tools/reaction-test">reaction test</a> measures your baseline. It does not train you for anything except the test itself.</p>

<p><strong>Sleep, caffeine, and physical fitness.</strong> Reaction time degrades with fatigue. A sleep-deprived person has a reaction time comparable to someone legally intoxicated. Caffeine improves reaction time by 5-10% for most people. Physical fitness improves reaction time indirectly — better cardiovascular health means better oxygen delivery to the brain. The effects are small but cumulative.</p>

<p><strong>Age and the inevitable decline.</strong> Reaction time peaks in the early 20s and declines by about 2-6ms per decade. A 20-year-old averaging 250ms will average 270-280ms by age 40 and 300-320ms by age 60. The decline is biological and cannot be reversed. But the decline is smaller than the difference between a trained and untrained person — a 50-year-old who trains can still out-react a 20-year-old who does not.</p>

<h2>What the Numbers Mean</h2>

<p><strong>Under 150ms:</strong> Elite. You are in the top 1% of the population. This is pro gamer / professional athlete territory. <strong>150-200ms:</strong> Excellent. Above average for the general population, competitive for amateur gaming. <strong>200-250ms:</strong> Average. This is where most healthy adults fall. <strong>250-300ms:</strong> Below average. Could be improved with practice, sleep, or caffeine. <strong>Over 300ms:</strong> Well below average. Check your sleep, your device latency (phone screens add 50-100ms), and whether you were distracted during the test.</p>

<p>Test your reaction time at <a href="/en/tools/reaction-test">free reaction test</a> — take it five times, average the results, and see where you fall on the curve.</p>`
  },
  {
    slug: "password-generator-memorizable-passphrase-method",
    title: "Password Generator Memorizable vs Random Passwords Why CorrectHorseBatteryStaple Beats xK9#mP2v — and When You Still Need Both",
    description: "A random 12-character password is uncrackable but unmemorable. A 4-word passphrase is also uncrackable and you can actually remember it. Here's the math behind both methods.",
    date: "2026-07-11",
    category: "Developer",
    tags: ["password generator", "passphrase", "password security", "memorizable", "entropy"],
    relatedTools: ["password-generator", "hash-generator", "uuid-generator"],
    content: `<p>You sign up for a new service. The <a href="/en/tools/password-generator">password generator</a> offers you two options: <code>xK9#mP2v!qL5</code> (random, 12 characters) or <code>correct-horse-battery-staple</code> (passphrase, 4 words). Which one is more secure? The answer: they are roughly equivalent, and the passphrase is infinitely easier to remember.</p>

<p>The random password has 12 characters from a set of roughly 72 possible characters (uppercase, lowercase, digits, symbols). The passphrase has 4 words from a dictionary of roughly 7,776 common words. The math: 72¹² ≈ 1.9 × 10²² possible random passwords. 7776⁴ ≈ 3.7 × 10¹⁵ possible passphrases. The random password has more entropy — about 74 bits vs 52 bits. But 52 bits of entropy still means an attacker making 1 trillion guesses per second (the upper limit of current hardware) would need about 1.5 years to crack it. For most people, 52 bits is plenty.</p>

<p>Here is when to use each method, and why the best password strategy uses both.</p>

<h2>Random Passwords: Maximum Entropy, Minimum Memorability</h2>

<p>A 16-character random password from a set of 72 characters has about 98 bits of entropy. At 1 trillion guesses per second, cracking it would take longer than the age of the universe. It is mathematically uncrackable by any current or foreseeable technology. It is also completely unmemorable. You will not remember <code>vJ9#kL2@mP5!xR8</code>. You will store it in a password manager.</p>

<p>Use random passwords for: accounts stored in a password manager (you never need to type them), accounts with high security requirements (banking, email, domain registrar), and any account where you can paste the password and never think about it again. The password manager remembers it. You do not need to.</p>

<p>Use a <a href="/en/tools/password-generator">password generator</a> to generate random passwords. Do not make up your own "random" passwords — humans are terrible at generating randomness. Your "random" password almost certainly follows a pattern that a password cracker will exploit.</p>

<h2>Passphrases: High Entropy, High Memorability</h2>

<p>A 4-word passphrase from a 7,776-word dictionary has about 52 bits of entropy. A 5-word passphrase has about 65 bits. A 6-word passphrase has about 78 bits. The words are randomly selected, not chosen by you — "correct horse battery staple" is the famous example from the XKCD comic that popularized this method. The words have no logical connection. They are just four random words from the dictionary.</p>

<p>The security comes from the <strong>randomness of the selection</strong>, not from the words themselves. If you choose the words — "my dog's name, my birthday, my favorite band" — the passphrase is weak because your choices are predictable. If the generator randomly selects the words, the passphrase is strong. The randomness is the security. The words are just the encoding.</p>

<p>Use passphrases for: accounts you need to type manually (your computer login, your phone unlock code), accounts where you cannot use a password manager (smart TV, game console), and the master password for your password manager itself — the one password you actually need to memorize. Four to six random words, separated by hyphens or spaces, is both secure and memorable.</p>

<h2>The Strategy: Passphrase for the Vault, Random for Everything Else</h2>

<p>Memorize one strong 5-6 word passphrase — the master password for your password manager. Use random 16-character passwords, generated by the <a href="/en/tools/password-generator">password generator</a>, for every other account. Store them in the password manager. You never need to type them. You never need to remember them. You only need to remember the one passphrase that unlocks the vault.</p>

<p>This is the security strategy that maximizes both security and convenience. One memorable passphrase. Hundreds of unmemorable random passwords. The best of both worlds.</p>`
  },
  {
    slug: "regex-tester-vs-text-diff-pattern-vs-line",
    title: "Regex Tester vs Text Diff Pattern Matching vs Line-by-Line Comparison — Two Developer Tools That Look Similar but Solve Completely Different Problems",
    description: "Regex tester finds patterns within text. Text diff compares two texts line by line. They are both text analysis tools — but using the wrong one means you find nothing or compare everything.",
    date: "2026-07-11",
    category: "Developer",
    tags: ["regex tester", "text diff", "pattern matching", "comparison", "developer tools"],
    relatedTools: ["regex-tester", "text-diff", "text-sorter"],
    content: `<p>You have a 50,000-line log file. You need to find every line that contains an IP address. You use a <a href="/en/tools/regex-tester">regex tester</a> with the pattern <code>\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}</code>. It matches 847 lines in under a second. You copy the matches and move on with your debugging.</p>

<p>Now you have two versions of a configuration file — before and after a deployment. You need to see what changed. You could use a regex tester to search for... what? You do not know what changed. That is the point. You need a <a href="/en/tools/text-diff">text diff</a> tool — it compares the two files line by line and highlights every addition, deletion, and modification. No pattern required. No prior knowledge of what changed. Just the two files, compared.</p>

<p>Regex tester and text diff are both text analysis tools. They both process text and produce output. But they solve <strong>fundamentally different problems</strong> — and using the wrong one is like using a metal detector to find your car keys. Technically possible. Practically useless. Here is when to use each.</p>

<h2>Regex Tester: You Know the Pattern, You Need the Matches</h2>

<p>A regex tester answers the question: <strong>"Where in this text does this pattern appear?"</strong> You provide the pattern and the text. The tool finds every match. Use it when you know exactly what you are looking for. The pattern is the question. The matches are the answer.</p>

<p>Common use cases: extracting all email addresses from a document, finding all function definitions in a code file, validating that a string matches a specific format (phone number, postal code, credit card number), finding and replacing text that matches a pattern across multiple files, and extracting structured data from unstructured text.</p>

<p>The regex tester is a <strong>search tool</strong>. It finds what you tell it to find. It does not tell you what is different between two texts. It does not compare. It matches. The distinction is fundamental.</p>

<h2>Text Diff: You Have Two Versions, You Need the Differences</h2>

<p>A text diff tool answers the question: <strong>"What is different between these two texts?"</strong> You provide two versions of the same document. The tool compares them line by line (or word by word) and highlights: lines added (green), lines removed (red), and lines modified (yellow or side-by-side).</p>

<p>Common use cases: reviewing code changes before a pull request, comparing configuration files before and after a deployment, finding what changed in a document between drafts, and checking whether two versions of a file are identical.</p>

<p>The text diff tool is a <strong>comparison tool</strong>. It finds differences without being told what to look for. It does not search for patterns. It does not match. It compares. Using a regex tester to find differences between two files would require you to write a pattern that matches every possible difference — which is impossible, because you do not know what changed.</p>

<h2>When to Use Both Together</h2>

<p>A common debugging workflow: use the text diff to find what changed between two log files. Then use the regex tester to search for specific patterns within the changed lines. The diff tells you <strong>where</strong> to look. The regex tells you <strong>what</strong> you are looking at. Two tools. Two steps. One workflow.</p>

<p>Try both at <a href="/en/tools/regex-tester">regex tester</a> and <a href="/en/tools/text-diff">text diff</a> — pattern matching and comparison are different operations. The right tool for the right question.</p>`
  },
  {
    slug: "pet-wallpaper-vs-bing-wallpaper-cute-vs-wonder",
    title: "Pet Wallpaper vs Bing Wallpaper Daily Cute vs Daily Wonder — Two Free Wallpaper Sources That Serve Different Emotional Needs",
    description: "Bing Wallpaper shows you a stunning landscape from somewhere on Earth. Pet Wallpaper shows you an adorable animal. Both are free, daily, and high-resolution. But they serve different moods.",
    date: "2026-07-11",
    category: "Fun & Media",
    tags: ["pet wallpaper", "Bing wallpaper", "wallpaper", "daily", "mood"],
    relatedTools: ["pet-wallpaper", "bing-wallpaper", "nasa-apod"],
    content: `<p>You open your laptop on a Monday morning. Your desktop background is a stunning aerial view of the Lofoten Islands in Norway — jagged peaks, deep fjords, the Northern Lights shimmering above. The image is from <a href="/en/tools/bing-wallpaper">Bing Wallpaper</a>. It fills you with a sense of wonder. You stare at it for ten seconds before opening your email. The world is vast and beautiful. Your inbox can wait.</p>

<p>On Wednesday, you have a stressful meeting. Your desktop background is a golden retriever puppy sleeping on a pile of blankets. The image is from <a href="/en/tools/pet-wallpaper">Pet Wallpaper</a>. It fills you with a sense of warmth. You look at it for five seconds, exhale, and join the meeting. The world is soft and cute. The meeting is survivable.</p>

<p>Both wallpaper services are free, daily, and high-resolution. Both replace your desktop background with something beautiful. But they serve <strong>different emotional needs</strong> — and understanding the difference helps you choose the right one for the right moment.</p>

<h2>Bing Wallpaper: Awe and Perspective</h2>

<p>Bing Wallpaper publishes one high-resolution photograph every day — landscapes, wildlife, architecture, cultural events, and natural phenomena from around the world. Each image is accompanied by a short description explaining what you are looking at and where it is. The images are curated by a team of photo editors who select for visual impact, geographic diversity, and educational value.</p>

<p>The emotional effect is <strong>awe</strong> — the feeling of being in the presence of something vast and beautiful that transcends your individual experience. Psychologists have studied the effects of awe extensively. Experiencing awe reduces stress, increases prosocial behavior, and expands your perception of time. A 2015 study found that people who experienced awe reported feeling like they had more time available — the opposite of the time-scarcity feeling that dominates modern work life.</p>

<p>Bing Wallpaper is the <strong>perspective</strong> wallpaper. It reminds you that the world is bigger than your to-do list. Use it when you need to zoom out — Monday mornings, before big presentations, after difficult conversations.</p>

<h2>Pet Wallpaper: Warmth and Connection</h2>

<p>Pet Wallpaper publishes high-resolution photographs of animals — dogs, cats, rabbits, birds, and occasionally wildlife. The images are sourced from photographers and stock libraries, curated for maximum cuteness. Unlike Bing Wallpaper, there is no educational description. The image is the message. The message is: <strong>look at this adorable animal</strong>.</p>

<p>The emotional effect is <strong>mood elevation</strong> — a quick, reliable boost of positive emotion. Research on the "cute response" shows that viewing images of baby animals improves focus and fine motor performance. A 2012 study found that participants who viewed cute animal images performed better on tasks requiring careful attention than those who viewed adult animal images or food images. The effect is real and measurable.</p>

<p>Pet Wallpaper is the <strong>comfort</strong> wallpaper. It does not inspire awe. It inspires a smile. Use it when you need a small emotional lift — stressful workdays, creative blocks, or any moment when a puppy's face would improve your outlook.</p>

<h2>The Strategy: Switch Based on What You Need</h2>

<p>You do not have to choose one. Set <a href="/en/tools/bing-wallpaper">Bing Wallpaper</a> as your default for perspective and discovery. Switch to <a href="/en/tools/pet-wallpaper">Pet Wallpaper</a> on days when you need comfort, not awe. The two services are not competitors. They are complementary emotional tools — two different kinds of beauty, free, every day.</p>`
  },
  {
    slug: "perpetual-calendar-mathematics-february-29-2100",
    title: "The Mathematics of Perpetual Calendars Why February 29 2100 Will Not Exist — and the 400-Year Cycle That Keeps Our Calendars in Sync",
    description: "A perpetual calendar can tell you the day of the week for any date — past or future. The math behind it is elegant, and the exceptions (like 2100 not being a leap year) reveal the genius of the Gregorian reform.",
    date: "2026-07-11",
    category: "Reference",
    tags: ["perpetual calendar", "Gregorian calendar", "leap year", "mathematics", "history"],
    relatedTools: ["perpetual-calendar", "age-calculator", "unix-timestamp"],
    content: `<p>You look up your birth date on a <a href="/en/tools/perpetual-calendar">perpetual calendar</a>. It tells you you were born on a Thursday. You look up your 100th birthday. It tells you that day will be a Tuesday. You look up February 29, 2100. It tells you that date does not exist. The calendar is not broken. It is correctly applying the Gregorian leap year rule — and the exception that most people have never heard of.</p>

<p>A perpetual calendar is a mathematical system that can determine the day of the week for any date in any year — past, present, or future. The math is elegant. The exceptions are where the history gets interesting. Here is how perpetual calendars work, why February 29, 2100 will not exist, and the 400-year cycle that keeps our calendar aligned with the seasons.</p>

<h2>The Basic Leap Year Rule (and Why It Is Not Enough)</h2>

<p>A year is approximately 365.2422 days — the time it takes Earth to orbit the Sun. A calendar year of 365 days is about 0.2422 days too short. After four years, the calendar is roughly one day behind the seasons. The solution: add an extra day every four years — February 29, the leap year.</p>

<p>But the correction is slightly too large. A year is not exactly 365.25 days. It is 365.2422 days. Adding a leap day every four years overcorrects by about 0.0078 days per year, or roughly one day every 128 years. After a few centuries, the calendar would drift ahead of the seasons. This is exactly what happened with the Julian calendar, introduced by Julius Caesar in 45 BCE. By 1582, the calendar had drifted 10 days ahead of the seasons. The spring equinox, which determines the date of Easter, was falling on March 11 instead of March 21.</p>

<h2>The Gregorian Reform: The 400-Year Rule</h2>

<p>In 1582, Pope Gregory XIII introduced the Gregorian calendar — the calendar most of the world uses today. The reform: <strong>century years are only leap years if they are divisible by 400</strong>. 1600 was a leap year. 2000 was a leap year. 1700, 1800, and 1900 were not leap years — they were skipped to correct the accumulated drift. 2100, 2200, and 2300 will not be leap years. 2400 will be.</p>

<p>The full leap year rule: a year is a leap year if it is divisible by 4, <strong>except</strong> if it is divisible by 100, <strong>unless</strong> it is also divisible by 400. The three conditions produce a 400-year cycle of 97 leap years and 303 common years. The average year length in this system is 365 + 97/400 = 365.2425 days — within 0.0003 days of the actual solar year. The calendar will not drift by a full day for over 3,000 years.</p>

<p>February 29, 2100 will not exist because 2100 is divisible by 100 but not by 400. The last time a century year was skipped was 1900. The next time will be 2100 — a date that most people alive today will not see, but the <a href="/en/tools/perpetual-calendar">perpetual calendar</a> already knows about.</p>

<h2>How the Perpetual Calendar Actually Works</h2>

<p>The math behind a perpetual calendar is based on <strong>modular arithmetic</strong> — the same math that underlies cryptography and computer science. Each month has a known offset from January. Each year advances the day of the week by one (two for leap years). The cumulative offset from a known reference date (like January 1, 1900, which was a Monday) determines the day of the week for any date.</p>

<p>The algorithm: calculate the number of days between the reference date and the target date, accounting for leap years using the Gregorian rule, then divide by 7 and take the remainder. Remainder 0 = same day as reference. Remainder 1 = next day. And so on. The math is simple enough to do by hand, which is why people have been calculating days of the week for centuries — long before computers.</p>

<p>The perpetual calendar is a reminder that the calendar we take for granted is a <strong>mathematical construct</strong> — a system of rules and exceptions designed to keep human timekeeping aligned with astronomical reality. The fact that it works, within 0.0003 days per year, after 400 years of accumulated corrections, is a quiet triumph of applied mathematics.</p>

<p>Look up any date at <a href="/en/tools/perpetual-calendar">perpetual calendar</a> — past, present, or future. The math knows what day of the week it will be, even if you do not.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("Free station: 188->done.")