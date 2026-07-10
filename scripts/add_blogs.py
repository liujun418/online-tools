"""Add 6 blogs to free station (182→188) — July 10, 2026"""
import os, sys

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "case-converter-api-programming-naming-conventions",
    title: "Case Converter for Programmers Snake Case Camel Case Pascal Case Kebab Case — A Complete Guide to Code Naming Conventions",
    description: "Your API uses snake_case. Your frontend uses camelCase. Your CSS uses kebab-case. Converting between them manually is error-prone. Here's a case converter that handles all four.",
    date: "2026-07-10",
    category: "Text Tools",
    tags: ["case converter", "snake case", "camel case", "pascal case", "naming conventions"],
    relatedTools: ["case-converter", "text-to-slug", "code-formatter"],
    content: `<p>You write a backend API in Python. The JSON response uses snake_case: <code>user_id</code>, <code>created_at</code>, <code>is_active</code>. Your frontend is JavaScript, which conventionally uses camelCase: <code>userId</code>, <code>createdAt</code>, <code>isActive</code>. You now have to convert every field name manually — or write a mapping layer that doubles your code. Neither is fun.</p>

<p>Programming naming conventions are not just cosmetic. Each convention signals something about the language, framework, and context. A <a href="/en/tools/case-converter">case converter</a> that handles all four major conventions saves you from the most tedious kind of refactoring: renaming things one character at a time. Here is a guide to the naming conventions every developer encounters.</p>

<h2>The Four Major Code Naming Conventions</h2>

<p><strong>camelCase:</strong> First word lowercase, subsequent words capitalized. <code>getUserName</code>, <code>fetchOrderHistory</code>, <code>isAuthenticated</code>. Used in: JavaScript, TypeScript, Java (methods and variables), Swift (variables). The dominant convention for frontend development. The name comes from the humped shape — the capital letters look like a camel's humps.</p>

<p><strong>PascalCase:</strong> Every word capitalized, including the first. <code>UserName</code>, <code>OrderHistory</code>, <code>HttpClient</code>. Used in: C# (class names), TypeScript (interfaces and types), React (component names), Java (class names). PascalCase signals "this is a type or a class, not a variable." When you see <code>UserProfile</code> in code, your brain expects a class definition, not a variable assignment.</p>

<p><strong>snake_case:</strong> All lowercase, words separated by underscores. <code>user_name</code>, <code>order_history</code>, <code>http_client</code>. Used in: Python (variables, functions, methods), Ruby, PostgreSQL (column names by convention), C (standard library). The dominant convention for backend and data work. Snake case is the most readable for long identifiers because the underscores provide clear word boundaries.</p>

<p><strong>kebab-case:</strong> All lowercase, words separated by hyphens. <code>user-name</code>, <code>order-history</code>, <code>http-client</code>. Used in: CSS (class names, IDs), URLs (slugs), HTML (attributes like <code>data-user-id</code>), CLI arguments (<code>--output-dir</code>). Kebab case is the web's naming convention — it appears in more places than any other, but never in actual code because hyphens are subtraction operators in most languages.</p>

<h2>The Cross-Stack Conversion Problem</h2>

<p>A full-stack feature touches every naming convention. The database column is <code>user_birth_date</code> (snake_case). The API response field is <code>user_birth_date</code> (snake_case, matching the DB). The TypeScript interface is <code>userBirthDate</code> (camelCase, JavaScript convention). The React component is <code>UserBirthDate</code> (PascalCase). The CSS class is <code>.user-birth-date</code> (kebab-case).</p>

<p>Four different representations of the same piece of data. A <a href="/en/tools/case-converter">case converter</a> handles the conversion in one click: paste the snake_case version, click camelCase, copy to your frontend. Paste the camelCase version, click PascalCase, use in your component. The converter does not just change case — it handles the special characters (underscores, hyphens, spaces) that separate words in each convention.</p>

<h2>When to Use Each Convention (and When to Break the Rules)</h2>

<p>Follow the language's convention. It is not about personal preference. It is about <strong>other developers being able to read your code without context-switching</strong>. When a Python developer sees <code>getUserName</code>, they pause. The camelCase signals "this was written by someone who is thinking in JavaScript." The pause is tiny — a fraction of a second — but it accumulates across thousands of lines of code.</p>

<p>The exception: when integrating with an external system, match the external system's convention. If your Python backend receives camelCase JSON from a third-party API, keep it camelCase in the data layer. Convert to snake_case only at the boundary between external data and internal logic. The conversion layer is where the <a href="/en/tools/case-converter">case converter</a> earns its place in your workflow.</p>

<p>Convert between all four naming conventions at <a href="/en/tools/case-converter">free case converter</a> — snake to camel, camel to Pascal, any direction, one click.</p>`
  },
  {
    slug: "html-entities-special-characters-cross-platform-encoding",
    title: "HTML Entities Special Characters Guide How to Encode & < > and © So They Display Correctly Across Every Browser Email and Platform",
    description: "You typed an ampersand in your HTML. It broke the page. You typed a copyright symbol in your email. It showed as ?. HTML entities prevent these failures — here's when and how to use them.",
    date: "2026-07-10",
    category: "Developer",
    tags: ["HTML entities", "special characters", "encoding", "ampersand", "cross-platform"],
    relatedTools: ["html-entities", "url-encoder", "html-to-markdown"],
    content: `<p>You write a blog post that mentions "AT&T." The page breaks because the browser interprets <code>&amp;</code> as the start of an HTML entity and tries to parse the rest of the text as one. You write a privacy policy that includes the copyright symbol ©. It looks fine in your browser but shows as a garbled character in Outlook 2016 and as a blank square on an older Android phone. You write a tutorial that includes <code>&lt;div&gt;</code> in a code example. The browser renders an actual div instead of displaying the text.</p>

<p>Special characters are the most common source of cross-platform rendering failures — and the fix is <strong>HTML entities</strong>. A <a href="/en/tools/html-entities">HTML entities converter</a> encodes characters into their safe, universal representations. Here is which characters need encoding and why.</p>

<h2>The Three Characters You Must Always Encode</h2>

<p><strong>Ampersand (&amp; → <code>&amp;amp;</code>):</strong> The ampersand is the escape character in HTML. It signals the start of an entity. If you want to display a literal ampersand — in "AT&T," "Procter &amp; Gamble," "Simon &amp; Schuster" — you must encode it. An unencoded ampersand in HTML is a syntax error. Browsers are forgiving and often recover, but email clients and older browsers are not. Always encode ampersands in any text that will be rendered as HTML.</p>

<p><strong>Less than (&lt; → <code>&amp;lt;</code>):</strong> The less-than sign starts an HTML tag. If you write <code>&lt;div&gt;</code> in a blog post about HTML, the browser sees a tag, not text. Encode it as <code>&amp;lt;div&amp;gt;</code> to display the literal characters. This is especially important in code tutorials, documentation, and any content that includes HTML or XML examples.</p>

<p><strong>Greater than (&gt; → <code>&amp;gt;</code>):</strong> The greater-than sign ends an HTML tag. It is less dangerous than &lt; (browsers handle unencoded &gt; better) but it should still be encoded for consistency and safety. In practice, always encode both &lt; and &gt; together.</p>

<h2>Characters That Need Encoding in Specific Contexts</h2>

<p><strong>Quotes in attributes:</strong> If your HTML attribute value contains a double quote, encode it as <code>&amp;quot;</code>. Otherwise the quote terminates the attribute early. <code>&lt;img alt="He said &amp;quot;hello&amp;quot;"&gt;</code> — the encoded quotes are part of the alt text, not the end of the attribute.</p>

<p><strong>Non-breaking space:</strong> <code>&amp;nbsp;</code> creates a space that prevents line breaks. Use it to keep words together: <code>Dr.&amp;nbsp;Smith</code> ensures "Dr." and "Smith" never split across lines. Overusing &amp;nbsp; for layout (instead of CSS margins/padding) is a classic beginner mistake — it is a content character, not a layout tool.</p>

<p><strong>Copyright, trademark, and special symbols:</strong> © → <code>&amp;copy;</code>, ® → <code>&amp;reg;</code>, ™ → <code>&amp;trade;</code>, € → <code>&amp;euro;</code>, £ → <code>&amp;pound;</code>, ¥ → <code>&amp;yen;</code>. These symbols have named entities that are easier to remember than numeric codes. Named entities work in all browsers and email clients, while the raw Unicode characters sometimes fail in older systems.</p>

<h2>HTML Entities in Email: The Strictest Rendering Environment</h2>

<p>Email clients are the most hostile rendering environment for special characters. Outlook uses Word's HTML rendering engine (not a browser engine), which has incomplete Unicode support. Some Android email clients use stripped-down renderers that lack entire character ranges. The solution: encode <strong>all</strong> non-ASCII characters as HTML entities in email HTML. The copyright symbol, the em dash, the curly quotes from a word processor — encode them all. It makes the HTML source uglier but ensures the rendered email looks correct everywhere.</p>

<p>Use the <a href="/en/tools/html-entities">HTML entities converter</a> to encode and decode any text. Paste your content, see the encoded version, and copy the safe representation that renders correctly on every platform.</p>`
  },
  {
    slug: "nasa-apod-classroom-education-resource",
    title: "NASA APOD Astronomy Picture of the Day How Teachers Use Space Images to Make Science Unforgettable",
    description: "Every day since 1995, NASA has published one astronomy image with an explanation written by a professional astronomer. It's the longest-running daily science communication project on the internet — and a free classroom resource.",
    date: "2026-07-10",
    category: "Reference",
    tags: ["NASA APOD", "astronomy", "education", "classroom", "science communication"],
    relatedTools: ["nasa-apod", "bing-wallpaper", "global-weather"],
    content: `<p>On June 16, 1995, NASA published the first Astronomy Picture of the Day (APOD): an image of the Earth from space, accompanied by a paragraph explaining what you were looking at. They have published a new image every single day since — over 11,000 consecutive days, spanning 30 years. The project has outlasted the Space Shuttle program, the rise and fall of Internet Explorer, the entire existence of MySpace and Vine, and three generations of web technology.</p>

<p>APOD is the <strong>longest-running daily science communication project on the internet</strong> — and it is completely free, updated daily, and accessible through a <a href="/en/tools/nasa-apod">NASA APOD viewer</a> that shows today's image and the full archive. Here is why teachers, students, and space enthusiasts keep coming back after 30 years.</p>

<h2>What Makes APOD Different from Every Other Science Website</h2>

<p>APOD is not a database of astronomy facts. It is a <strong>daily narrative</strong>. Each image is chosen by a professional astronomer — Robert Nemiroff and Jerry Bonnell have been the editors since day one — and each explanation is written in clear, accessible language that assumes curiosity but not expertise. A typical APOD entry: a stunning image of a nebula, a galaxy, or a planetary surface, followed by 200-400 words explaining what you are seeing, how it was photographed, and why it matters.</p>

<p>The explanations are written by professional astronomers, not journalists or content marketers. They are accurate, specific, and free of hype. They do not say "This mind-blowing image will change everything you know about the universe." They say "NGC 7023, also known as the Iris Nebula, is a reflection nebula located about 1,300 light-years away in the constellation Cepheus. The blue color comes from starlight reflecting off microscopic dust particles." The difference is the difference between science and science-flavored content.</p>

<h2>How Teachers Use APOD in the Classroom</h2>

<p><strong>Daily warm-up:</strong> Start every science class by showing today's APOD image. Ask students: what do you see? What do you think this is? Read the explanation together. Five minutes of curiosity before the lesson begins. Over a school year, students are exposed to 180 astronomy images — galaxies, nebulae, planets, comets, eclipses, spacecraft, and historical astronomy photographs. The cumulative exposure builds a mental model of the universe that no textbook chapter can match.</p>

<p><strong>Writing prompts:</strong> Show an APOD image without the explanation. Ask students to write their own description — what they see, what they think it is, what questions they have. Then read the actual explanation and compare. This teaches scientific observation, descriptive writing, and the habit of asking questions before seeking answers.</p>

<p><strong>Research projects:</strong> Each APOD image is a potential research topic. A student sees an image of Europa, Jupiter's moon, and wants to learn more. The APOD explanation provides the starting point and the key vocabulary. The student researches further, writes a report, presents to the class. The image sparked the curiosity. The explanation provided the on-ramp.</p>

<h2>The 30-Year Archive as a Time Capsule</h2>

<p>APOD's archive — every image since June 16, 1995 — is a <strong>history of astronomy</strong> told in daily images. You can browse the archive by date, search by keyword, or explore randomly. The images document three decades of astronomical discoveries: the first exoplanets, the Hubble Deep Field, the Cassini mission to Saturn, the New Horizons flyby of Pluto, the first image of a black hole. Each discovery appeared on APOD within days, explained by the astronomers who study it.</p>

<p>Browse today's image and the complete archive at <a href="/en/tools/nasa-apod">NASA APOD viewer</a> — 30 years of the universe, one day at a time, free for everyone.</p>`
  },
  {
    slug: "css-minifier-vs-svg-minifier-different-optimization",
    title: "CSS Minifier vs SVG Minifier Different File Types Require Different Optimization Strategies — Why One Tool Cannot Optimize Both",
    description: "CSS minification removes whitespace and comments. SVG minification does that too — but also removes editor metadata, simplifies paths, and rounds coordinates. Different file types, different optimizations.",
    date: "2026-07-10",
    category: "Developer",
    tags: ["CSS minifier", "SVG minifier", "optimization", "web performance", "file compression"],
    relatedTools: ["css-minifier", "svg-minifier", "code-formatter"],
    content: `<p>You have a CSS file that is 45KB — mostly comments and whitespace. You run it through a <a href="/en/tools/css-minifier">CSS minifier</a>. It becomes 18KB. Comments gone, whitespace collapsed, semicolons stripped where optional. The file is smaller but functionally identical. Good.</p>

<p>Now you have an SVG file exported from Illustrator — 120KB. You run it through the same CSS minifier. It becomes 115KB. The whitespace is gone, but the file is still bloated with editor metadata, unused namespace declarations, and unnecessarily precise path coordinates like <code>M12.847392,45.123847</code> that could be <code>M12.8,45.1</code> with no visible difference. The CSS minifier did its job. It is just the wrong job.</p>

<p>An <a href="/en/tools/svg-minifier">SVG minifier</a> does things that a CSS minifier cannot do — because SVG files are fundamentally different from CSS files. Here is why different file types need different optimizers.</p>

<h2>What a CSS Minifier Does (and Does Not Do)</h2>

<p>A CSS minifier processes text according to CSS syntax rules. It removes comments (<code>/* like this */</code>), collapses whitespace (spaces, tabs, newlines become single spaces), removes the last semicolon before a closing brace (<code>{color: red;}</code> → <code>{color:red}</code>), shortens hex colors where possible (<code>#ffffff</code> → <code>#fff</code>), and removes unnecessary units (<code>0px</code> → <code>0</code>).</p>

<p>These are <strong>syntactic optimizations</strong>. The minifier reads the CSS grammar, finds redundancy, and removes it. The optimizations are safe because they are based on the rules of CSS, not on guesswork. A CSS minifier does not need to understand your design. It just needs to understand CSS syntax.</p>

<h2>What an SVG Minifier Does That a CSS Minifier Cannot</h2>

<p>An SVG minifier performs <strong>semantic optimizations</strong> that require understanding what an SVG file actually contains. It removes: editor-specific metadata (Illustrator and Inkscape embed their own namespaces, export timestamps, and UI state — kilobytes of data that browsers ignore), XML declarations and DOCTYPE declarations (optional for inline SVG), comments, and unnecessary namespace declarations.</p>

<p>But the real value of an SVG-specific minifier is in <strong>numeric precision reduction</strong>. SVG path data contains coordinates like <code>M12.847392,45.123847 C12.928374,45.293847...</code> — eight decimal places of precision that no human can see and no screen can render. An SVG minifier rounds these to 1-2 decimal places: <code>M12.8,45.1 C12.9,45.3...</code>. The visual difference is zero. The file size reduction is 30-50% on complex paths.</p>

<p>The minifier also collapses redundant groups, removes empty elements, and simplifies transformations. These are SVG-specific optimizations that require understanding the SVG DOM structure, not just parsing text. A CSS minifier does not know what a <code>&lt;path&gt;</code> element is or what <code>d="M..."</code> means. It just sees text. The SVG minifier sees geometry.</p>

<h2>When to Use Each (and When to Use Both)</h2>

<p><strong>CSS files:</strong> Use the CSS minifier. The SVG minifier would not know what to do with CSS syntax.</p>

<p><strong>SVG files:</strong> Use the SVG minifier. The CSS minifier would only remove whitespace and leave 80% of the bloat untouched.</p>

<p><strong>HTML files with inline CSS and inline SVG:</strong> Use both. Minify the CSS blocks with the CSS minifier, minify the SVG blocks with the SVG minifier, then minify the HTML wrapper. Three tools, three file types, three different optimization strategies.</p>

<p>Optimize your files at <a href="/en/tools/css-minifier">CSS minifier</a> and <a href="/en/tools/svg-minifier">SVG minifier</a> — different tools for different file types. The right tool saves kilobytes. The wrong tool saves nothing.</p>`
  },
  {
    slug: "random-number-generator-vs-dice-roller-true-random-vs-bell-curve",
    title: "Random Number Generator vs Dice Roller True Random vs Bell Curve Simulation — Why 1d100 Is Not the Same as 2d50",
    description: "A random number between 1 and 100 gives every value equal probability. Rolling 2d50 gives a bell curve peaking at 51. Different tools, different probability distributions, different use cases.",
    date: "2026-07-10",
    category: "Fun & Media",
    tags: ["random number generator", "dice roller", "probability", "bell curve", "game design"],
    relatedTools: ["random-number-generator", "dice-roller", "coin-flip"],
    content: `<p>You need to generate a number between 1 and 100. You have two options: use a <a href="/en/tools/random-number-generator">random number generator</a> set to 1-100, or use a <a href="/en/tools/dice-roller">dice roller</a> to roll 2d50. The ranges are the same — 1 to 100 for the RNG, 2 to 100 for the dice. But the <strong>probability distributions</strong> are completely different. The RNG gives every number a 1% chance. The dice roll gives 51 a roughly 4% chance and 2 a 0.04% chance. Same range. Radically different behavior.</p>

<p>Here is why the difference matters for game design, simulations, and any system that uses randomness to make decisions.</p>

<h2>Uniform Distribution: The Random Number Generator</h2>

<p>A random number generator set to 1-100 produces a <strong>uniform distribution</strong> — every number in the range has exactly the same probability. Roll a 1: 1% chance. Roll a 50: 1% chance. Roll a 100: 1% chance. The results are completely unpredictable. Over a large number of rolls, every number appears roughly the same number of times.</p>

<p>Use a uniform distribution when: every outcome <strong>should</strong> be equally likely. Picking a random winner from a list of 100 entrants — every person should have the same chance. Generating a random percentage for a scientific simulation — every percentage should be equally probable. A/B testing — every user should have an equal chance of being assigned to group A or B. The RNG is the tool of fairness and unpredictability.</p>

<p>The RNG is also the right tool when you need <strong>cryptographic randomness</strong> — though browser-based RNGs use <code>Math.random()</code> which is not cryptographically secure. For security-critical applications, use a CSPRNG (Cryptographically Secure Pseudo-Random Number Generator). For everyday use — games, simulations, random selections — the browser RNG is sufficient.</p>

<h2>Bell Curve Distribution: The Dice Roller</h2>

<p>Rolling multiple dice and summing the results produces a <strong>bell curve distribution</strong> (technically a normal distribution approximated by the sum of uniform distributions). The more dice you roll, the more the distribution concentrates around the mean. 2d50 produces a triangular distribution peaking at 51. 3d6 produces a bell curve peaking at 10-11. 10d10 produces a tight bell curve where values below 30 and above 80 are astronomically unlikely.</p>

<p>Use a bell curve distribution when: you want <strong>reliable, middling results</strong> with rare extremes. Critical hits in a role-playing game — rolling 1d20 gives a 5% chance of a natural 20 (critical hit) and a 5% chance of a natural 1 (critical fail). Rolling 3d6 gives a 0.46% chance of an 18 and a 0.46% chance of a 3. The bell curve makes critical hits <strong>rare and exciting</strong> while the uniform distribution makes them <strong>frequent and expected</strong>.</p>

<p>Game designers choose between uniform and bell curve distributions to shape the <strong>emotional experience</strong> of the game. Uniform = swingy, dramatic, unpredictable. Bell curve = steady, predictable, strategic. The math is the same. The feeling is completely different.</p>

<h2>When to Use Each (and When to Use Both)</h2>

<p><strong>Random number generator:</strong> equal probability is the goal. Fairness, unpredictability, simple random selection.</p>

<p><strong>Dice roller:</strong> a bell curve distribution is the goal. Game mechanics, character creation (rolling stats), simulating natural phenomena (most results cluster around the average, extremes are rare).</p>

<p><strong>Both together:</strong> use the RNG to determine which dice to roll, then roll the dice. A game might use the RNG to pick a random event from a table (equal probability), then use the dice roller to determine the outcome of that event (bell curve). The tools are complementary, not competitive.</p>

<p>Generate random numbers at <a href="/en/tools/random-number-generator">random number generator</a> and roll dice at <a href="/en/tools/dice-roller">dice roller</a> — understand the distribution before you build the mechanic.</p>`
  },
  {
    slug: "morse-code-why-180-year-old-system-still-works",
    title: "Morse Code Why a 180-Year-Old Communication System Still Works When Everything Else Fails — and the Surprising Places You Still Encounter It",
    description: "Satellites fail. Internet goes down. Cell towers lose power. But a flashlight, a radio tone, or a blinking light can still send Morse code across any distance. Here's why the simplest encoding system refuses to die.",
    date: "2026-07-10",
    category: "Developer",
    tags: ["Morse code", "communication", "history", "emergency", "encoding"],
    relatedTools: ["morse-code", "base-converter", "url-encoder"],
    content: `<p>In 1844, Samuel Morse sent the first telegraph message: "What hath God wrought." The message traveled from Washington D.C. to Baltimore — about 40 miles — encoded as dots and dashes along a single wire. The telegraph revolutionized communication, shrinking the world from weeks of mail delivery to seconds of electrical pulses. Then the telephone replaced it. Then the internet replaced the telephone. Morse code should have died in the 20th century alongside the telegraph.</p>

<p>It did not. Morse code is still used by amateur radio operators, aviation navigation beacons, assistive technology for people with disabilities, and emergency signaling when everything else fails. A <a href="/en/tools/morse-code">Morse code translator</a> that converts text to dots and dashes is not a historical curiosity. It is a tool for understanding a communication system that works when nothing else does. Here is why Morse code refuses to die.</p>

<h2>Why Morse Code Survives: The Simplicity Advantage</h2>

<p>Morse code has one property that no modern communication system can match: it can be transmitted and received with <strong>any signaling mechanism</strong>. A flashlight. A buzzer. A radio tone. A tapped finger. A blinking LED. A reflected mirror. An electrical pulse on a wire. Sound. Light. Touch. Any medium that can produce two states — on and off, long and short — can encode Morse code.</p>

<p>This is the simplicity advantage. A WiFi signal requires a complex stack of hardware, firmware, protocols, and infrastructure. Morse code requires a switch. When infrastructure fails — natural disaster, power outage, remote location — Morse code still works. The minimal hardware requirement is the reason Morse code is still taught in pilot training, ham radio licensing, and military communications courses.</p>

<h2>Where You Still Encounter Morse Code in 2026</h2>

<p><strong>Aviation navigation beacons:</strong> VOR (VHF Omnidirectional Range) navigation stations transmit a three-letter Morse code identifier alongside their navigation signal. Pilots listen to the Morse code to verify they are tuned to the correct station. The code is audible in the cockpit. Every pilot learns to recognize Morse code identifiers — not the full alphabet, just enough to confirm the station ID.</p>

<p><strong>Amateur radio:</strong> Ham radio operators still use Morse code (CW — Continuous Wave) for long-distance communication. The advantage: Morse code signals can be decoded by the human ear at much lower signal-to-noise ratios than voice. When voice is buried in static, Morse code is still readable. A skilled operator can copy Morse code at 20-30 words per minute — faster than most people type.</p>

<p><strong>Assistive technology:</strong> Morse code is used as an input method for people with severe motor disabilities. A single switch — a sip-and-puff tube, a head switch, an eye-blink sensor — can produce dots and dashes. The computer translates the Morse code into text. For someone who cannot use a keyboard or voice input, Morse code provides a communication channel that requires only one binary input.</p>

<p><strong>Emergency signaling:</strong> SOS (... --- ...) is the most recognized Morse code sequence in the world. It can be signaled with a flashlight, a whistle, a mirror, or by banging on a pipe. The simplicity of SOS — three dots, three dashes, three dots — is by design. It is easy to remember, easy to produce, and unmistakable once recognized.</p>

<h2>How to Learn Morse Code in 10 Minutes</h2>

<p>You do not need to learn the entire alphabet. Learn SOS (... --- ...) and your initials. That is enough for emergency signaling and basic identification. The <a href="/en/tools/morse-code">Morse code translator</a> handles the rest — type any text, see the dots and dashes, hear the audio. Use it to encode a message, decode a received signal, or practice recognition.</p>

<p>Morse code is not the fastest communication system. It is not the most efficient. It is the <strong>most reliable</strong> — because it makes the fewest assumptions about what technology is available. Sometimes the simplest tool is the one that survives.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("Free station: 182->done.")