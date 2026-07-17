"""Add 6 blogs to free station (218→224) — July 17, 2026"""
import os, sys

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "text-sorter-data-cleaning-csv-log-normalization",
    title: "Text Sorter for Data Cleaning How to Normalize CSV Exports and Log Files Before Analysis — Beyond Simple A-to-Z Sorting",
    description: "A CSV export has 50,000 rows in random order, with duplicates and trailing spaces. Before you can analyze it, you need to sort, dedupe, and trim. Here's the data cleaning pipeline.",
    date: "2026-07-17",
    category: "Text Tools",
    tags: ["text sorter", "data cleaning", "CSV", "normalization", "log files"],
    relatedTools: ["text-sorter", "remove-duplicate-lines", "json-to-csv"],
    content: `<p>You export 50,000 rows of customer data from your CRM. The CSV is technically valid — commas in the right places, rows on separate lines. But the data is messy: rows are in random order (whatever the database felt like returning), duplicate entries exist (the same customer appears three times with slightly different spellings), and trailing spaces are everywhere ("John Smith " vs "John Smith" — same person, different string). Before you can analyze this data, you need to <strong>clean</strong> it.</p>

<p>A <a href="/en/tools/text-sorter">text sorter</a> is not just for alphabetizing lists. It is a <strong>data cleaning tool</strong> — and when combined with deduplication and trimming, it transforms messy exports into analysis-ready datasets. Here is the data cleaning pipeline for CSV and log file normalization.</p>

<h2>The Three-Step Data Cleaning Pipeline</h2>

<p><strong>Step 1: Trim lines.</strong> Enable the Trim Lines option. This removes leading and trailing whitespace from every line. "John Smith " becomes "John Smith." " john.smith@email.com" becomes "john.smith@email.com." Trailing spaces are the most common source of "false duplicates" in exported data — two rows that look identical but differ by invisible whitespace. Trimming eliminates this problem before it causes confusion.</p>

<p><strong>Step 2: Sort by the relevant column.</strong> Use the sort mode that matches your analysis goal. A→Z for alphabetical sorting (names, email addresses, product codes). Numeric sort for values (prices, quantities, IDs). By Length to find abnormally short or long entries (a name that is one character, a description that is 5,000 characters). The sort organizes the data so that: duplicates are adjacent (making them easy to spot), anomalies stand out (the one row that does not fit the pattern), and the data is easier to scan and understand.</p>

<p><strong>Step 3: Remove duplicates.</strong> Enable Remove Duplicates. This eliminates repeated lines, keeping the first occurrence. After trimming and sorting, duplicates are adjacent and identical. The deduplication catches them all. The result: a deduped, sorted, trimmed dataset ready for analysis.</p>

<p>This three-step pipeline is the standard preprocessing workflow for: email lists (before importing into an email marketing tool), product catalogs (before uploading to an e-commerce platform), log files (before analyzing error patterns), and any text-based dataset that needs to be clean before it can be analyzed.</p>

<h2>Real-World Example: Cleaning an Email List</h2>

<p>You export 5,000 email addresses from your old system. The list has: duplicates (the same email appears 3-5 times), inconsistent case ("John@Email.com" vs "john@email.com"), and trailing spaces. You paste the list into the <a href="/en/tools/text-sorter">text sorter</a>. Enable Ignore Case, Trim Lines, and Remove Duplicates. Sort A→Z. The result: a clean, deduped, alphabetized, case-normalized list of unique email addresses. 5,000 rows in. 3,200 unique, clean rows out. Ready for import into your new email marketing tool. The entire process takes 30 seconds.</p>

<h2>Real-World Example: Analyzing Log Files</h2>

<p>Your server generated a 200MB log file. You need to find all unique error messages. You paste the log into the text sorter. Sort A→Z (all error lines cluster together under "ERROR"). Remove Duplicates (each unique error message appears once). The result: a deduped list of every unique error in the log file. You can now count how many distinct errors occurred, identify the most frequent patterns, and prioritize fixes. The text sorter turned an unreadable 200MB log into a clean list of error messages. The analysis that would have taken hours manually takes minutes with sorting and deduplication.</p>

<p>Clean your data at <a href="/en/tools/text-sorter">free text sorter</a> — trim, sort, dedupe. The three-step pipeline for analysis-ready data.</p>`
  },
  {
    slug: "color-contrast-checker-wcag-2-2-new-standards",
    title: "Color Contrast Checker WCAG 2.2 Compliance Guide What the New Accessibility Standards Mean for Your Website",
    description: "WCAG 2.2 introduced new contrast requirements for focus indicators, target sizes, and accessibility. A contrast checker helps you verify compliance. Here's what changed and how to check your site.",
    date: "2026-07-17",
    category: "Developer",
    tags: ["color contrast checker", "WCAG 2.2", "accessibility", "compliance", "web standards"],
    relatedTools: ["color-contrast-checker", "color-picker", "color-names"],
    content: `<p>WCAG 2.1 was published in 2018. WCAG 2.2 was published in 2023. If your website was built to WCAG 2.1 standards, you might assume you are compliant with the latest accessibility guidelines. You might be wrong. WCAG 2.2 added new success criteria — and a <a href="/en/tools/color-contrast-checker">color contrast checker</a> is still the first tool you need to verify compliance. Here is what changed, what stayed the same, and how to check your site against the latest standards.</p>

<h2>What WCAG 2.2 Added (and Why Contrast Still Matters)</h2>

<p>WCAG 2.2 introduced several new success criteria: <strong>Focus Appearance (2.4.11)</strong> — keyboard focus indicators must have a contrast ratio of at least 3:1 against the surrounding area, and the focus indicator must be at least 2 CSS pixels thick. This is a <strong>contrast requirement</strong> for an element that most websites style minimally or not at all. The default browser focus indicator (a thin dotted line) does not meet this requirement. You need to design a custom focus indicator with sufficient contrast.</p>

<p><strong>Target Size (2.5.8):</strong> Interactive elements (buttons, links, form controls) must have a target size of at least 24×24 CSS pixels. This is not a contrast requirement, but it affects how you design buttons — the colors you choose for your buttons must now work on a minimum 24×24 pixel area, which is larger than many existing button designs.</p>

<p><strong>Consistent Help (3.2.6):</strong> Help mechanisms (contact forms, chat, documentation links) must appear in the same relative order across pages. This is a structural requirement, not a visual one. But the help mechanism must also meet contrast requirements — the link or button to access help must have sufficient contrast against its background.</p>

<p>All existing WCAG 2.1 contrast requirements remain in effect: 4.5:1 for normal text, 3:1 for large text, and 3:1 for UI components and graphical objects. The new criteria add to these requirements. They do not replace them.</p>

<h2>How to Check Your Site Against WCAG 2.2</h2>

<p><strong>Step 1: Check text contrast (existing requirement, still required).</strong> Use the <a href="/en/tools/color-contrast-checker">contrast checker</a> to verify all text elements meet the 4.5:1 (normal) or 3:1 (large) ratio. Check: body text, headings, links (including hover and visited states), button text, form labels, and placeholder text in input fields. These are the most common contrast failures.</p>

<p><strong>Step 2: Check UI component contrast (existing requirement, still required).</strong> Verify that all interactive elements have 3:1 contrast against adjacent colors. Check: button backgrounds vs page backgrounds, form input borders vs page backgrounds, and icon colors vs their backgrounds.</p>

<p><strong>Step 3: Check focus indicator contrast (new WCAG 2.2 requirement).</strong> This is the most commonly missed new requirement. Verify that your keyboard focus indicator has 3:1 contrast against both: the element's background and the surrounding page background. The focus indicator must be visible regardless of what it is on top of. A focus indicator that is visible against a white background might be invisible against a dark section of the page. Check it against all backgrounds on your site.</p>

<p><strong>Step 4: Check target size (new WCAG 2.2 requirement).</strong> Measure your interactive elements. They must be at least 24×24 pixels. Small icons, tiny close buttons, and inline text links are the most common failures.</p>

<h2>Why This Matters Beyond Compliance</h2>

<p>WCAG 2.2 compliance is not just about avoiding lawsuits. It is about: reaching more users (15-20% of the population has some form of disability — visual, motor, cognitive, or auditory), improving usability for everyone (accessible design is better design — higher contrast text is easier for everyone to read, larger buttons are easier for everyone to click), and improving SEO (Google ranks accessible sites higher — accessibility is a ranking factor).</p>

<p>Check your site at <a href="/en/tools/color-contrast-checker">color contrast checker</a> — WCAG 2.2 compliance starts with contrast. The new requirements are in addition to the old ones. Both matter. Both are checkable in seconds.</p>`
  },
  {
    slug: "password-generator-enterprise-it-policy-compliance",
    title: "Password Generator for Enterprise IT Policy Compliance How to Generate Bulk Passwords That Meet Corporate Security Requirements",
    description: "Your company password policy requires 14+ characters, upper+lower+digits+symbols, no dictionary words, and unique per system. A password generator enforces these rules automatically. Here's the IT workflow.",
    date: "2026-07-17",
    category: "Developer",
    tags: ["password generator", "enterprise", "IT policy", "compliance", "security"],
    relatedTools: ["password-generator", "hash-generator", "uuid-generator"],
    content: `<p>Your company password policy: minimum 14 characters, at least one uppercase letter, one lowercase letter, one digit, and one symbol, no dictionary words, no personally identifiable information, must be unique across all systems, and must be changed every 90 days. Employees respond to this policy by: writing passwords on sticky notes, using "Password123!" with incremental numbers, and calling IT to reset passwords they have forgotten. The policy is secure on paper. It is a disaster in practice.</p>

<p>A <a href="/en/tools/password-generator">password generator</a> that enforces the policy automatically solves the employee problem. The generator creates compliant passwords. The employee stores them in a password manager. Nobody writes anything on a sticky note. Here is the enterprise password management workflow.</p>

<h2>Why Password Policies Fail Without Generation Tools</h2>

<p>Password policies are written by security teams who understand cryptography and threat models. Password policies are used by employees who understand neither. The gap between the policy and the user is wide enough to drive a truck through. Employees respond to complex password requirements with <strong>workarounds</strong>: predictable patterns ("January2026!", "February2026!", "March2026!"), the minimum acceptable password ("P@ssword12345678" — meets all requirements, is in every password cracking dictionary), and password reuse across systems (the same "secure" password for email, CRM, and expense reporting).</p>

<p>The workarounds defeat the policy. The policy is correct — 14-character random passwords are genuinely more secure than 8-character ones. The implementation is the failure. Giving employees a tool that generates compliant passwords eliminates the workarounds. The employee does not create the password. The generator does. The employee stores it. The generator enforces the policy at the point of creation.</p>

<h2>The Enterprise Password Generation Workflow</h2>

<p><strong>Step 1: Configure the generator to match the policy.</strong> Use the <a href="/en/tools/password-generator">password generator</a> with the settings that match your company policy: length (14, 16, 20, or more characters), character sets (uppercase, lowercase, digits, symbols — toggle as needed), and exclude ambiguous characters (1 vs l vs I, 0 vs O — avoid confusion when passwords are typed manually).</p>

<p><strong>Step 2: Generate passwords in bulk.</strong> For new employee onboarding, generate a batch of passwords — one for each system the employee needs access to. Each password is unique. Each password complies with the policy. The employee imports them into their password manager. The employee never sees the passwords — the password manager auto-fills them. The employee memorizes only one password: the master password for the password manager.</p>

<p><strong>Step 3: Use the generator for periodic resets.</strong> When the 90-day reset cycle arrives, employees use the generator to create a new compliant password. No incremental numbers. No predictable patterns. No sticky notes. The generator handles compliance. The password manager handles storage. The employee handles nothing — which is exactly what you want for security.</p>

<h2>What the Generator Cannot Fix</h2>

<p>The password generator creates secure passwords. It cannot fix: phishing (an employee who enters their password on a fake login page defeats any password policy), password sharing (an employee who tells a colleague their password defeats any password policy), and master password weakness (an employee who sets their password manager master password to "password123" defeats the entire system).</p>

<p>The generator is one component of a comprehensive security strategy. It handles password creation. It does not handle password usage. Train employees on phishing awareness, password sharing policies, and master password best practices. The generator creates the secure passwords. The employees must use them securely.</p>

<p>Generate compliant passwords at <a href="/en/tools/password-generator">password generator</a> — configure the policy, generate the passwords, and give employees a tool that makes compliance easier than workarounds.</p>`
  },
  {
    slug: "json-formatter-vs-code-formatter-data-vs-code",
    title: "JSON Formatter vs Code Formatter Data Serialization vs Code Pretty Printing — Two Formatting Tools That Look Identical but Serve Different Audiences",
    description: "JSON formatter beautifies data for API debugging. Code formatter beautifies code for readability. Both add indentation and line breaks. But the use cases, users, and error modes are completely different.",
    date: "2026-07-17",
    category: "Developer",
    tags: ["JSON formatter", "code formatter", "formatting", "data", "code"],
    relatedTools: ["json-formatter", "code-formatter", "css-minifier"],
    content: `<p>You receive an API response: one giant line of JSON, 850,000 characters with no line breaks. You paste it into a <a href="/en/tools/json-formatter">JSON formatter</a>. The tool adds indentation, line breaks, and syntax highlighting. The data becomes readable. You can now see the structure, find the field you need, and debug the API response.</p>

<p>Now you open a JavaScript file that has inconsistent indentation — tabs mixed with spaces, random line breaks, no consistent style. You paste it into a <a href="/en/tools/code-formatter">code formatter</a>. The tool standardizes the indentation, adds consistent line breaks, and enforces a uniform style. The code becomes readable. You can now understand the logic, find the bug, and fix it.</p>

<p>Both tools are "formatters." Both add indentation and line breaks. Both make text readable. But they serve completely different audiences, handle completely different types of text, and fail in completely different ways. Here is the difference.</p>

<h2>JSON Formatter: Formatting Data</h2>

<p>A JSON formatter processes <strong>structured data</strong> — text that follows the JSON specification (key-value pairs, arrays, nested objects, strings, numbers, booleans, null). The formatter parses the JSON into an abstract syntax tree and then pretty-prints the tree with consistent indentation. The result is a human-readable representation of the data structure.</p>

<p>The JSON formatter's primary function is <strong>validation</strong>. If the JSON is invalid — missing comma, trailing comma, unclosed bracket — the formatter reports the error with a line number. You fix the error. The formatting is secondary to the validation. The validator is the feature. The formatter is the presentation.</p>

<p>Use JSON formatter when: you are debugging API responses, you need to inspect a JSON configuration file, you are working with JSON data that arrived in a single collapsed line, or you need to validate that JSON is syntactically correct before submitting it to an API.</p>

<h2>Code Formatter: Formatting Code</h2>

<p>A code formatter processes <strong>programming language source code</strong> — JavaScript, TypeScript, CSS, HTML. The formatter parses the code into an abstract syntax tree, applies formatting rules (indentation, line breaks, spacing, quote style), and outputs consistently formatted code. The result is code that follows a uniform style.</p>

<p>The code formatter's primary function is <strong>consistency</strong>. The code is already syntactically valid (if it were not, the compiler would have rejected it). The problem is not validity. The problem is <strong>readability</strong> — inconsistent indentation, mixed style conventions, and formatting that obscures the logic. The formatter enforces a consistent style. The consistency is the feature. The formatting is the mechanism.</p>

<p>Use code formatter when: you inherit code with inconsistent formatting, you want to enforce a team style guide automatically, or you need to make unreadable code readable before debugging it.</p>

<h2>Why Confusing Them Produces Errors</h2>

<p>If you paste JavaScript code into a JSON formatter, the formatter will attempt to parse it as JSON. The code is not valid JSON. The formatter will report a syntax error. It will not format the code. It does not understand JavaScript syntax. It only understands JSON syntax.</p>

<p>If you paste JSON data into a code formatter set to JavaScript mode, the formatter will attempt to parse the JSON as JavaScript. JSON is valid JavaScript (with rare exceptions). The formatter will format it — adding semicolons, adjusting spacing, and applying JavaScript formatting rules. The output will be syntactically valid but semantically wrong — a JSON object with JavaScript formatting conventions. Not what you wanted.</p>

<p>The rule: JSON goes in the JSON formatter. Code goes in the code formatter. The tools look similar. The inputs are different. The outputs are different. Use the right one.</p>

<p>Format your data at <a href="/en/tools/json-formatter">JSON formatter</a> and your code at <a href="/en/tools/code-formatter">code formatter</a>. Data formatting and code formatting. Different inputs. Different tools.</p>`
  },
  {
    slug: "crypto-price-vs-roi-calculator-speculation-vs-investment",
    title: "Crypto Price Tracker vs ROI Calculator Speculation vs Investment — Two Financial Tools That Measure Completely Different Things",
    description: "A crypto price tracker shows what Bitcoin is worth right now — a snapshot of market sentiment. An ROI calculator shows what an investment returned over time — a measurement of actual performance. Different data. Different decisions.",
    date: "2026-07-17",
    category: "Calculators",
    tags: ["crypto price", "ROI calculator", "speculation", "investment", "comparison"],
    relatedTools: ["crypto-price", "roi-calculator", "compound-interest"],
    content: `<p>You open a <a href="/en/tools/crypto-price">crypto price tracker</a>. Bitcoin is at $67,342 — up 2.3% today. The price is a <strong>snapshot of market sentiment</strong>. It tells you what the market believes Bitcoin is worth at this exact moment. It does not tell you: what Bitcoin was worth last year, what Bitcoin will be worth next year, what return you would have earned if you had bought at any specific point in the past, or what return you might earn in the future. The price is a data point. It is not an analysis.</p>

<p>You open an <a href="/en/tools/roi-calculator">ROI calculator</a>. You enter: invested $10,000 in an S&P 500 index fund in January 2020, value today is $18,400. The calculator tells you: 84% total return, 14.3% annualized return. This is a <strong>measurement of actual performance</strong> — how much money you made over a specific time period. It tells you what happened. It does not tell you what will happen.</p>

<p>Both tools deal with money. Both are in the Calculators category. But they measure completely different things. Here is the difference — and why confusing price tracking with return calculation leads to bad financial decisions.</p>

<h2>Crypto Price Tracker: A Mirror of Market Sentiment</h2>

<p>A crypto price tracker displays the current market price of cryptocurrencies — Bitcoin, Ethereum, and other digital assets. The price is determined by: the last trade on an exchange, aggregated across multiple exchanges, and updated in real time (or near-real time) as trades occur. The price is a <strong>consensus</strong> — the point where buyers and sellers agree to transact.</p>

<p>The price tracker answers: "What is this asset worth right now?" It does not answer: "Is this a good investment?" "Should I buy now or wait?" "How much would I have made if I bought at a different time?" The price is information. The investment decision is judgment. The tracker provides the information. You provide the judgment.</p>

<p>Use the crypto price tracker for: monitoring your portfolio, checking prices before buying or selling, tracking market trends, and satisfying curiosity about the crypto market. It is a <strong>pulse check</strong>, not an investment analysis.</p>

<h2>ROI Calculator: A Measurement of Past Performance</h2>

<p>An ROI (Return on Investment) calculator computes the return on an investment over a specific time period. The formula: ROI = (Current Value - Initial Investment) / Initial Investment × 100. The calculator tells you: what percentage return you earned and what annualized return that represents.</p>

<p>The ROI calculator answers: "How well did this investment perform?" It does not answer: "How will this investment perform in the future?" Past performance does not guarantee future results. The ROI calculator is a <strong>hindsight tool</strong>. It tells you what happened. It does not predict what will happen.</p>

<p>Use the ROI calculator for: evaluating past investment decisions, comparing the performance of different investments, calculating returns for tax reporting, and setting realistic expectations based on historical returns. It is a <strong>performance measurement</strong>, not a prediction.</p>

<h2>The Danger of Confusing Price with Return</h2>

<p>Bitcoin is up 2.3% today. The price tracker shows a green number. It feels like you made money. But you do not know: is this a sustainable increase or a temporary spike? Is this part of a larger trend or random noise? What is your actual return since you bought? The price tracker cannot tell you. The ROI calculator can — if you enter your purchase date and amount. The price shows the moment. The ROI shows the period. Confusing the moment with the period leads to: buying because the price went up (FOMO), selling because the price went down (panic), and making decisions based on emotions triggered by price movements rather than analysis based on actual returns.</p>

<p>Use the <a href="/en/tools/crypto-price">crypto tracker</a> for the moment and the <a href="/en/tools/roi-calculator">ROI calculator</a> for the period. Price and return. Information and analysis. Different tools. Different decisions.</p>`
  },
  {
    slug: "base-converter-history-number-bases-decimal-vs-binary",
    title: "The History of Number Bases Why Base-10 Dominated Human Civilization and Base-2 Conquered Computing — a 5,000-Year Story",
    description: "Humans count in base-10 because we have 10 fingers. Computers count in base-2 because they have 2 states (on/off). The history of number bases is the history of the tools we use to count. Here's the 5,000-year story.",
    date: "2026-07-17",
    category: "Calculator",
    tags: ["base converter", "number bases", "history", "binary", "decimal"],
    relatedTools: ["base-converter", "roman-numerals", "unix-timestamp"],
    content: `<p>You open a <a href="/en/tools/base-converter">base converter</a> and type "42." The tool shows: binary (101010), hexadecimal (2A), octal (52), and base-3 (1120). All represent the same number — forty-two. The representations are different. The quantity is the same. This is the fundamental insight of positional number systems: the value of a number is independent of the base used to represent it. The number exists. The base is just how we write it down.</p>

<p>But why do humans use base-10? Why do computers use base-2? Why did the Babylonians use base-60 — and why do we still use base-60 for minutes and seconds? The history of number bases is a 5,000-year story about the tools we use to count. Here it is.</p>

<h2>Base-10: The Finger Base (Invention: Prehistoric)</h2>

<p>Humans use base-10 because we have 10 fingers. This is not a coincidence. Almost every human culture independently developed a base-10 counting system. The words for "ten" and "two" share roots across unrelated language families, suggesting that finger counting is a universal human behavior that predates language. The base-10 system is: a biological accident (10 fingers), not a mathematical choice, and so universal that we think of it as "natural" — but a species with 8 fingers would consider base-8 natural. The base is arbitrary. The math is universal.</p>

<p>Base-10's strength: intuitive (counting on fingers is the first mathematical operation humans learn). Base-10's weakness: poor divisibility (10 is divisible only by 2 and 5 — a third of something in base-10 is 0.3333... repeating infinitely).</p>

<h2>Base-60: The Babylonian Legacy (Invention: ~2000 BCE)</h2>

<p>The Babylonians used base-60 — a sexagesimal system. Why 60? The leading theory: 60 is divisible by 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, and 30 — more divisors than any smaller number. In a base-60 system, a third is 20 — an integer, not a repeating fraction. This made Babylonian mathematics exceptionally practical for commerce, astronomy, and construction.</p>

<p>The Babylonian base-60 system survives today in: time (60 seconds per minute, 60 minutes per hour), angles (360 degrees in a circle — 6 × 60), and geographic coordinates (degrees, minutes, seconds). Every time you look at a clock, you are using a 4,000-year-old number system invented by people who have been dead for 150 generations. The base-60 system is the oldest continuously used mathematical convention in human history.</p>

<h2>Base-2: The Computer Base (Invention: 17th Century, Conquered: 20th Century)</h2>

<p>Binary — base-2 — was described by Gottfried Wilhelm Leibniz in the 17th century. Leibniz was fascinated by the elegance of a system with only two digits (0 and 1). He saw it as a philosophical ideal — a representation of creation from nothing (0) and something (1). He did not imagine it would become the foundation of all digital computation.</p>

<p>Binary conquered computing because: electronic circuits have two stable states (on/off, high voltage/low voltage, magnetized/demagnetized). Two states map perfectly to two digits. The transistor — the fundamental building block of all modern computers — is a binary device. It is either conducting (1) or not conducting (0). The binary system is not a mathematical preference. It is a <strong>physical necessity</strong>. Computers do not "choose" to use binary. They are built from binary components. The base-2 system is the interface between mathematics and physics.</p>

<h2>Base-16: The Human-Readable Binary (Invention: 20th Century)</h2>

<p>Hexadecimal (base-16) is a compromise between binary (machine-native but unreadable to humans) and decimal (human-native but unreadable to machines). One hex digit represents exactly 4 binary digits. The binary number 1010 1100 1111 0001 is AC F1 in hex. The hex representation is 75% shorter and far less error-prone for humans to read. Programmers use hex for: memory addresses, color codes (#3B82F6), and binary data representation. Hex is the <strong>human interface</strong> to binary data.</p>

<h2>What the History Teaches</h2>

<p>Number bases are not mathematical truths. They are <strong>tools</strong> — shaped by human anatomy (base-10), practical commerce (base-60), and physical engineering (base-2). The same number — forty-two — is the same quantity regardless of how you write it. The base is the notation. The number is the reality. The <a href="/en/tools/base-converter">base converter</a> translates between notations. The quantity stays the same. The notation changes. The history of number bases is the history of the tools we built to count — our fingers, our markets, our machines. The tools changed. The math did not.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("Free station: 218->done.")