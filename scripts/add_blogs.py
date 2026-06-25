"""Add 6 blogs to free station (94→100) — June 25, 2026"""
BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "random-number-generator-beyond-dice-rolls",
    title: "Random Number Generator — 7 Uses Beyond Dice Rolls and Lotteries",
    description: "Random numbers aren't just for gambling. From A/B testing to sampling, here are practical uses you probably haven't considered.",
    date: "2026-06-25",
    category: "Calculator",
    tags: ["random number generator", "RNG online", "generate random numbers", "sampling"],
    relatedTools: ["random-number-generator", "random-name-generator", "uuid-generator"],
    content: `
<p>When most people hear "random number generator," they think lottery tickets or Dungeons & Dragons dice rolls. Fair enough — those are the obvious use cases. But if that is all you use an RNG for, you are leaving a surprising amount of utility on the table.</p>

<p>Our <a href="/en/tools/random-number-generator">free random number generator</a> gives you numbers in any range with one click. No signup, no download. Here are seven ways to use it that go way beyond picking lottery numbers.</p>

<h2>1. A/B test group assignment</h2>

<p>Say you are running an email subject line test. You have 200 recipients and two variants. The lazy approach: send variant A to the first 100, variant B to the second 100. Problem: the first 100 might be alphabetically sorted, earlier signups, or some other hidden bias.</p>

<p>The correct approach: assign each recipient a random number 1-2. Group 1 gets A, group 2 gets B. Now your groups are actually randomized — no hidden bias from list order. Our <a href="/en/tools/random-number-generator">RNG tool</a> makes this trivial: set range 1-2, generate as many times as you need, and tag each recipient.</p>

<p>This same pattern works for user interview selection (pick 5 random customers from a list of 200), survey sampling, and any situation where "first N" is not actually random.</p>

<h2>2. Random sampling from large datasets</h2>

<p>You have a CSV with 50,000 rows. You want to spot-check 20 rows manually because running queries on the full dataset takes forever. How do you pick which 20?</p>

<p>Generate 20 random numbers between 1 and 50,000. Those are your row numbers. Open the CSV, jump to those rows, and inspect. It takes 30 seconds instead of "let me scroll and hope I catch something."</p>

<p>This is not a toy technique — <strong>statisticians call this "simple random sampling"</strong> and it is the foundation of survey methodology. An RNG turns a subjective spot-check into a defensible sampling process.</p>

<h2>3. Game prototyping and playtesting</h2>

<p>Board game designers use RNGs constantly during prototyping. Before you code anything, you simulate dice mechanics with a number generator to see if the probabilities feel right. A game where the player needs to roll 12 or higher on 2d6 — that is roughly a 2.8% chance. Does that feel too rare? Generate 100 random 2d6 sums and count how many hit 12. Now you know, without printing a single card.</p>

<p>Our <a href="/en/tools/dice-roller">dice roller</a> handles standard RPG dice, but for custom ranges — like a game mechanic that needs a number between 7 and 43 — the general <a href="/en/tools/random-number-generator">random number generator</a> is more flexible.</p>

<h2>4. Practice problem generation</h2>

<p>If you are learning to code and practicing with random datasets, an RNG generates your inputs. Need to test your sorting algorithm? Generate 50 random numbers, sort them, verify. Need to practice SQL queries? Generate random IDs, amounts, and dates, and build a test table.</p>

<p>Teachers do this too: generate random math problems by setting a range for each operand. "Generate two numbers between 10 and 99, multiply them." Now you have an infinite supply of unique practice sheets.</p>

<h2>5. Fair contest winner selection</h2>

<p>You ran a giveaway on social media. 347 people commented. How do you pick a winner without accusations of favoritism?</p>

<p>Number the entries 1-347 (export comments, number the rows). Generate one random number in that range. That is your winner. Screen-record the process if you want receipts. It is transparent, defensible, and takes 10 seconds.</p>

<h2>6. Randomized playlist and media shuffle</h2>

<p>Spotify's shuffle algorithm is famously not random — it weights recently played artists lower. If you want actual random shuffle, number your playlist tracks and generate the sequence with an RNG. You will hear songs you forgot you saved, and you might even notice patterns in your own music taste that algorithmic shuffle was hiding.</p>

<h2>7. Seating arrangements and team splits</h2>

<p>Running a workshop with 30 people? Number everyone, generate random pairs or groups of 4. It breaks up cliques, forces cross-team interaction, and nobody can complain about "unfair" grouping because the RNG made the call — not you.</p>

<p><strong>One mistake to avoid:</strong> using the same seed or the same sequence repeatedly. If you generate numbers 1-10 ten times, you might get repeats. That is fine for individual decisions. But if you need every number exactly once (like assigning 30 people to 30 seats), generate numbers 1-30, and as each one comes up, cross it off the list. If you get a duplicate, skip it and generate again.</p>

<p>For picking random names instead of numbers, our <a href="/en/tools/random-name-generator">random name generator</a> handles character names, project codenames, and more. And for a deeper look at when to use randomness versus structured naming, see our comparison of <a href="/en/blog/random-name-generator-vs-brainstorming">random name generators versus manual brainstorming</a>.</p>
`,
  },
  {
    slug: "uuid-generator-when-random-isnt-enough",
    title: "UUID Generator Explained — When a Random Number Isn't Unique Enough",
    description: "Random numbers can collide. UUIDs practically can't. Here's why v4 UUIDs matter and when you should reach for them instead of a simple random ID.",
    date: "2026-06-25",
    category: "Developer",
    tags: ["UUID generator", "generate UUID v4", "unique identifier", "GUID"],
    relatedTools: ["uuid-generator", "random-number-generator", "password-generator"],
    content: `
<p>You are building a database table and need a primary key. Your first instinct: auto-increment integers. Simple, fast, everyone understands them. Then the first time you merge two databases or expose an ID in a URL, you realize auto-increment was a mistake.</p>

<p>Enter the UUID — a 128-bit identifier that is <strong>practically guaranteed to be unique</strong> across every computer on Earth. Our <a href="/en/tools/uuid-generator">free UUID generator</a> creates them with one click. But what makes a UUID different from just picking a random number between one and a billion?</p>

<h2>Why "random enough" is not enough</h2>

<p>A random number between 1 and 1,000,000,000 has a collision probability that rises fast. With just 40,000 random picks, you have roughly a 50% chance of hitting a duplicate. That is the birthday paradox — collisions arrive way sooner than intuition expects.</p>

<p>A UUID v4, on the other hand, has 122 bits of randomness. That is 2¹²² possible values — roughly 5.3 × 10³⁶. To have a 50% chance of collision, you would need to generate about 2.7 × 10¹⁸ UUIDs. If you generated one billion UUIDs per second, it would take about 85 years to hit that number. <strong>You will not generate a duplicate UUID by accident.</strong></p>

<h2>UUID versions — v1, v4, and why v4 is the default</h2>

<p>There are several UUID versions, but for most developers, only two matter:</p>

<p><strong>UUID v1:</strong> based on timestamp + MAC address. It is unique, but it reveals when and where it was generated. If privacy matters — say, user IDs in a public API — v1 UUIDs leak information. Someone can extract the creation timestamp and potentially the machine that generated it.</p>

<p><strong>UUID v4:</strong> purely random. No timestamp, no MAC address, no pattern. Just 122 random bits plus 6 version/variant bits. This is what our <a href="/en/tools/uuid-generator">UUID generator</a> produces. It is the safe default: unique, unguessable, and reveals nothing about the system that created it.</p>

<p>There are also v3 and v5 (name-based, deterministic) and v7 (time-ordered, newer standard), but v4 covers the vast majority of use cases.</p>

<h2>When to use UUIDs instead of auto-increment</h2>

<ul>
<li><strong>Distributed systems:</strong> two servers insert records simultaneously. With auto-increment, they conflict. With UUIDs, they do not — each server generates IDs independently.</li>
<li><strong>Public-facing IDs:</strong> <code>/users/453</code> tells an attacker exactly how many users you have. <code>/users/a3f2b8c1-9d4e-4f7a-8b2c-1e5f6a7d8c9b</code> reveals nothing.</li>
<li><strong>Database merges:</strong> combining two customer databases? UUID primary keys merge cleanly. Auto-increment integers require renumbering every foreign key reference.</li>
<li><strong>Offline-first apps:</strong> a mobile app creates records offline, then syncs. UUIDs mean no ID conflicts when the sync happens.</li>
</ul>

<h2>When NOT to use UUIDs</h2>

<p>UUIDs are 36 characters as strings (including hyphens). That is 4× larger than a 64-bit integer in storage. If you have a billion-row table, the storage difference matters. They also fragment B-tree indexes more than sequential integers. For small, single-server apps where IDs never leave the database, auto-increment is fine.</p>

<p><strong>A common mistake:</strong> generating UUIDs in application code but storing them as strings in the database. Most databases (PostgreSQL, MySQL 8+, SQLite) have native UUID types that store them as 16 bytes instead of 36 characters. Use the native type.</p>

<p>For generating secure passwords alongside your UUIDs, our <a href="/en/tools/password-generator">password generator</a> creates strong random credentials. And for basic random numbers when collision does not matter, see our <a href="/en/tools/random-number-generator">random number generator</a>.</p>
`,
  },
  {
    slug: "stopwatch-timer-precision-timing-guide",
    title: "Stopwatch and Timer — Precision Timing Without Installing an App",
    description: "Stopwatches aren't just for gym class. From tracking work sprints to measuring page load times, here's how a browser stopwatch beats phone apps.",
    date: "2026-06-25",
    category: "Calculator",
    tags: ["stopwatch", "online timer", "countdown timer", "time tracking"],
    relatedTools: ["stopwatch-and-timer", "reaction-test", "scoreboard"],
    content: `
<p>Your phone has a stopwatch. Your smartwatch has one too. So does your microwave, your fitness tracker, and probably your fridge at this point. Why would anyone need a browser-based stopwatch?</p>

<p>Because sometimes you are already at your computer, the phone is in another room, and you just need to time something <strong>right now</strong> without context-switching. Our <a href="/en/tools/stopwatch-and-timer">free online stopwatch and timer</a> does exactly that — one click, no install, no unlocking your phone.</p>

<h2>The friction cost of phone stopwatches</h2>

<p>Here is what actually happens when you reach for your phone to time something: you pick it up, Face ID fails because your face is at a weird angle, you type your PIN, find the Clock app, swipe to the stopwatch tab, and tap start. That is a 5-8 second process — and by then, the thing you wanted to time might already be underway.</p>

<p>Compare that to: click the browser tab, click Start. Two seconds, one hand, no context switch. For short measurements — boiling an egg, timing a Pomodoro break, measuring how long a build script takes — that friction difference actually matters.</p>

<h2>What our stopwatch can do that a basic phone app can't</h2>

<p>Most phone stopwatches give you start, stop, and reset. Our <a href="/en/tools/stopwatch-and-timer">online stopwatch and timer</a> adds a few things that make it more useful for actual work:</p>

<p><strong>Lap tracking with notes.</strong> Hit "Lap" at key moments, and each split time is recorded. Measuring a multi-step process — like "how long does each stage of our deployment pipeline take" — becomes trivially trackable. You get the total time plus each segment breakdown.</p>

<p><strong>Countdown mode with alarm.</strong> The timer mode counts down from a set duration and alerts you when time is up. This is for Pomodoro sessions, time-boxed debugging ("I will spend exactly 20 minutes on this bug"), or reminding yourself to stand up every hour.</p>

<p><strong>Full-screen display.</strong> If you are presenting or teaching, you can put the stopwatch in full-screen mode. Everyone in the room can see the elapsed time without squinting at your phone.</p>

<h2>Real use cases beyond "timing a run"</h2>

<p><strong>Measuring build and deploy times.</strong> Run <code>npm run build</code> and start the stopwatch simultaneously. When the terminal returns, stop. Now you have a baseline. After optimization, compare. A stopwatch is the simplest performance benchmark tool that exists.</p>

<p><strong>Tracking support call duration.</strong> If you do customer support or consulting, track how long each call takes. At the end of the week, you know exactly how much time went to calls versus other work.</p>

<p><strong>Pomodoro with accountability.</strong> The timer counts down 25 minutes. When it rings, you stop — no "just five more minutes." The audible alarm breaks the flow intentionally, which is the whole point of Pomodoro.</p>

<p><strong>Presentation pacing.</strong> Running a workshop or talk? Start the stopwatch when you begin. Glance at it between slides to know if you are running long. Way less distracting than checking your phone on stage.</p>

<p><strong>A common mistake:</strong> leaving the stopwatch running in a background tab and forgetting about it. Hours later, you glance at it and see "03:47:22" and think you have been working on something for four hours. Most browsers throttle background tabs, so the time might be slightly off. For accurate long-duration tracking, use a dedicated time tracker — the stopwatch is for short, focused measurements.</p>

<p>For measuring reflexes instead of task duration, our <a href="/en/tools/reaction-test">reaction time test</a> tracks milliseconds. And for keeping score during timed games, the <a href="/en/tools/scoreboard">scoreboard tool</a> pairs well with the timer. For more on reaction benchmarks, see our <a href="/en/blog/reaction-test-speed-comparison">reaction test speed comparison</a>.</p>
`,
  },
  {
    slug: "color-picker-vs-color-contrast-checker",
    title: "Color Picker vs Color Contrast Checker — Which One Do You Actually Need?",
    description: "Picking a color and checking its contrast are two different problems. Here's when you need each, and why using only a color picker leaves your design inaccessible.",
    date: "2026-06-25",
    category: "Developer",
    tags: ["color picker", "color contrast checker", "WCAG accessibility", "hex color"],
    relatedTools: ["color-picker", "color-contrast-checker"],
    content: `
<p>You found a nice blue for your button. Hex #4A90D9. It looks great on the white background. You ship it. A week later, someone emails you: "I can't read the button text." Turns out your white text on that medium-blue button has a contrast ratio of 3.2:1 — below the WCAG AA minimum of 4.5:1. Oops.</p>

<p>A <a href="/en/tools/color-picker">color picker</a> and a <a href="/en/tools/color-contrast-checker">contrast checker</a> solve two completely different problems. Here is why you need both in your toolkit, and what happens when you only use one.</p>

<h2>What a color picker does (and does not do)</h2>

<p>A color picker extracts the exact hex, RGB, or HSL value of any color on your screen. You hover over a pixel, click, and you get the code. This is essential for:</p>

<ul>
<li>Matching a brand color from a logo or website screenshot</li>
<li>Sampling a color from an image to use in CSS</li>
<li>Exploring color variations with an interactive picker</li>
<li>Getting precise hex values without guessing</li>
</ul>

<p>What a color picker does <strong>not</strong> do: tell you whether that color will be readable when paired with another color. It gives you the raw value — #4A90D9 — and nothing else. Whether that blue on white text passes accessibility standards is a separate question that the picker does not answer.</p>

<h2>What a contrast checker does</h2>

<p>A <a href="/en/tools/color-contrast-checker">contrast checker</a> takes two colors — foreground and background — and calculates their contrast ratio. It then tells you whether that ratio passes WCAG 2.1 standards:</p>

<ul>
<li><strong>AA normal text:</strong> 4.5:1 minimum</li>
<li><strong>AA large text (18px+ bold or 24px+ regular):</strong> 3:1 minimum</li>
<li><strong>AAA normal text:</strong> 7:1 minimum</li>
<li><strong>AAA large text:</strong> 4.5:1 minimum</li>
</ul>

<p>It also shows you a preview of how the text will actually look — white on blue, black on blue, whatever combination you are testing — so you can judge readability with your own eyes alongside the mathematical score.</p>

<h2>The workflow: pick first, then verify</h2>

<p>The correct workflow is sequential, not either/or:</p>

<ol>
<li><strong>Pick:</strong> use the <a href="/en/tools/color-picker">color picker</a> to grab a color from your brand palette, a reference image, or an existing design element. Get the hex code.</li>
<li><strong>Verify:</strong> plug that hex code plus your background color into the <a href="/en/tools/color-contrast-checker">contrast checker</a>. Does it pass AA for the font size you are using? If not, adjust — darken the text or lighten the background until it passes.</li>
<li><strong>Repeat:</strong> for every text-background pair in your design. Button text on button background. Body text on page background. Caption text on card background. Each combination gets its own check.</li>
</ol>

<h2>When only one is enough</h2>

<p><strong>Color picker only:</strong> when you are grabbing colors for non-text purposes — a decorative border, a chart color, a gradient stop. These do not need contrast checking because nobody needs to read them.</p>

<p><strong>Contrast checker only:</strong> when you already have hex codes and just need to verify them. Maybe your design system defines specific color pairs, and you are auditing whether they all pass.</p>

<p><strong>Most projects need both:</strong> you find colors with the picker, then validate them with the checker. Skipping the checker is how inaccessible designs ship.</p>

<p>For the full guide on contrast ratios and accessibility standards, see our <a href="/en/blog/color-contrast-checker-guide">color contrast checker guide</a> with WCAG compliance walkthrough.</p>
`,
  },
  {
    slug: "json-to-csv-vs-manual-excel-import",
    title: "JSON to CSV vs Manual Excel Import — Stop Copy-Pasting JSON Fields One by One",
    description: "Converting JSON to CSV manually is tedious and error-prone. Here's why an online converter beats manual methods for nested data, large files, and repeated conversions.",
    date: "2026-06-25",
    category: "Developer",
    tags: ["JSON to CSV", "convert JSON", "JSON converter online", "export JSON"],
    relatedTools: ["json-to-csv", "json-formatter"],
    content: `
<p>You get a JSON file from an API response. It has 2,000 objects, each with 15 nested fields. Your boss wants it as an Excel spreadsheet by end of day. You open the JSON, stare at it, and consider your options. None of them are good.</p>

<p>Option A: copy-paste each field into Excel, one cell at a time. For 2,000 × 15 = 30,000 cells. That is not a plan, that is a resignation letter.</p>

<p>Option B: use <a href="/en/tools/json-to-csv">our JSON to CSV converter</a>. Paste the JSON, click convert, download the CSV. Open in Excel. Done in 30 seconds.</p>

<p>Let us walk through why manual methods break down and where an online converter actually saves the day.</p>

<h2>The "just use Excel" trap</h2>

<p>Modern Excel has a "Get Data from JSON" feature. Power Query can parse JSON. These are real tools and they work — for flat, simple JSON. The moment you hit nested objects, arrays inside objects, or inconsistent field presence, Power Query becomes a puzzle you did not sign up to solve.</p>

<p>Try importing this into Excel manually:</p>

<pre><code class="language-json">{
  "orders": [
    {
      "id": 1042,
      "customer": {"name": "Alice", "email": "alice@example.com"},
      "items": [{"sku": "A100", "qty": 2}, {"sku": "B200", "qty": 1}],
      "total": 47.50
    }
  ]
}</code></pre>

<p>Excel will flatten <code>customer.name</code> and <code>customer.email</code> into separate columns — that is actually fine. But the <code>items</code> array? Excel does not know whether to create one row per item, concatenate them into a single cell, or ignore the field entirely. You end up manually reshaping the data anyway.</p>

<h2>How the converter handles nested JSON</h2>

<p>Our <a href="/en/tools/json-to-csv">JSON to CSV converter</a> handles nested structures by flattening them: <code>customer.name</code> becomes a column, <code>customer.email</code> becomes another column. Arrays get stringified into a single cell (which you can then split in Excel if needed).</p>

<p>It is not magic — the flattening has limits. Deeply nested arrays of objects (3+ levels) will produce verbose column names. But for the 90% case — API responses, database exports, form submissions — it works immediately.</p>

<h2>When JSON to CSV conversion fails</h2>

<p><strong>Arrays of varying length:</strong> if each object has a <code>tags</code> array with anywhere from 1 to 50 items, the CSV column for tags will be inconsistent. Some rows get 1 tag, others get 50. Excel handles this poorly.</p>

<p><strong>Binary or base64 fields:</strong> if your JSON contains <code>"image": "iVBORw0KGgo..."</code>, that base64 string will end up as a CSV cell. A single image can be megabytes. Your CSV is now unusably large.</p>

<p><strong>Mixed data types:</strong> if the same field is sometimes a string and sometimes a number — <code>"price": "47.50"</code> in one record and <code>"price": 47.50</code> in another — the converter has to pick one type. Usually it chooses string, and you fix it in Excel afterward.</p>

<p><strong>The workaround:</strong> validate your JSON first with the <a href="/en/tools/json-formatter">JSON formatter and validator</a>. It catches syntax errors before the converter chokes on them. If the JSON is invalid, the CSV output will be garbled or empty — garbage in, garbage out.</p>

<p>For more on working with JSON in the browser, see our <a href="/en/blog/json-formatter-online-guide">beginner's guide to formatting JSON online</a>.</p>
`,
  },
  {
    slug: "password-generator-why-clever-passwords-fail",
    title: "Why Your 'Clever' Password Isn't — What a Password Generator Gets Right",
    description: "You think 'P@ssword123!' is clever. Attackers think it's predictable. Here's why generated passwords beat human creativity every time.",
    date: "2026-06-25",
    category: "Developer",
    tags: ["password generator", "strong password", "password security", "random password"],
    relatedTools: ["password-generator", "hash-generator", "uuid-generator"],
    content: `
<p>Take a moment and think of your go-to password pattern. Is it a word plus a number plus a symbol? A pet's name with your birth year? The street you grew up on with an exclamation mark? If you answered yes to any of these, your passwords are <strong>predictable in ways that password-cracking tools specifically target</strong>.</p>

<p>Our <a href="/en/tools/password-generator">free password generator</a> creates truly random passwords with one click. Here is why that matters more than you think.</p>

<h2>The human password problem</h2>

<p>Humans are terrible at randomness. When asked to create a "random" password, most people follow the same patterns:</p>

<ul>
<li>One dictionary word, capitalized: <code>Monkey</code></li>
<li>Append a number (often a year): <code>Monkey2024</code></li>
<li>Append a symbol (usually ! or @ or #): <code>Monkey2024!</code></li>
<li>Maybe substitute a character: <code>M0nkey2024!</code></li>
</ul>

<p>This is called <strong>leet-speak substitution</strong>, and password crackers have had rules for it since the 1990s. Replacing "o" with "0" and "e" with "3" adds approximately zero seconds to a cracking attempt. The tool tries all common substitutions automatically.</p>

<h2>How password crackers actually work</h2>

<p>Modern password cracking is not about trying every possible combination (though that happens too). It is about <strong>prioritizing likely patterns</strong>. A cracking tool starts with:</p>

<ol>
<li>Dictionary words (all of them, in multiple languages)</li>
<li>Common substitutions (o→0, a→@, s→$, e→3, i→1)</li>
<li>Common append patterns (years, single symbols, "123", "!")</li>
<li>Leaked password databases (billions of real passwords from breaches)</li>
</ol>

<p>Your "clever" <code>M0nkey2024!</code> gets cracked in under a second because it matches every pattern the tool is optimized for. A generated password like <code>x7Kp2mQ9vR4nL8wS</code> has no dictionary words, no patterns, no meaningful substitutions — the cracker has to fall back to brute force, which for a 16-character random password takes longer than the age of the universe.</p>

<h2>What makes a password generator different</h2>

<p>When you use a <a href="/en/tools/password-generator">password generator</a>, the output is <strong>cryptographically random</strong>. Not "random-ish" like a human picking letters. Actually random, using the same entropy source that encryption protocols use.</p>

<p>You can configure the generator to match different site requirements:</p>

<ul>
<li><strong>Length:</strong> 16+ characters is the current recommendation. At 12 characters, a random password is borderline crackable with nation-state resources. At 16, it is not.</li>
<li><strong>Character sets:</strong> include uppercase, lowercase, numbers, and symbols. Some sites require at least one from each category — the generator handles that automatically.</li>
<li><strong>Avoid ambiguous characters:</strong> turn off 0/O, 1/l/I, 5/S if you ever need to type the password manually. Some generators offer this as a toggle.</li>
</ul>

<h2>"But I can't remember random passwords"</h2>

<p>You are not supposed to. Use a password manager. The workflow is:</p>

<ol>
<li>Generate a random password with our <a href="/en/tools/password-generator">password generator</a></li>
<li>Save it in your password manager (Bitwarden, 1Password, iCloud Keychain, etc.)</li>
<li>Never type it again — autofill handles it</li>
</ol>

<p>The only passwords you need to memorize are your computer login, your password manager master password, and maybe your email. Everything else should be generated and stored.</p>

<p><strong>One caveat:</strong> password generators create strong passwords, but they do not protect against phishing. If you type your generated password into a fake login page, the randomness does not help. That is where two-factor authentication and password manager domain matching come in.</p>

<p>For hashing those passwords (never store them in plain text!), our <a href="/en/tools/hash-generator">hash generator</a> supports SHA-256, MD5, and more. And for unique identifiers that are not secrets, our <a href="/en/tools/uuid-generator">UUID generator</a> creates collision-free IDs.</p>
`,
  },

];

export function getBlogPosts(): BlogPost[]"""

if old in content:
    content = content.replace(old, new_blogs)
    with open(BLOG_FILE, "w", encoding="utf-8") as f:
        f.write(content)
    print("OK: 6 blogs inserted into free station blog.ts")
else:
    print("ERROR: insertion marker not found")
    idx = content.rfind("];")
    print(f"Last '];' at index: {idx}")
    print(content[idx-100:idx+100])
