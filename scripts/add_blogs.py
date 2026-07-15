"""Add 6 blogs to free station (206→212) — July 15, 2026"""
import os, sys

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "text-repeater-ascii-art-creative-text-patterns",
    title: "Text Repeater Beyond Spam How to Create ASCII Art Repetitive Patterns and Test Data with a Text Multiplier",
    description: "A text repeater sounds like a tool for spamming. But it is secretly a creative tool for ASCII art, test data generation, and decorative text patterns. Here are the legitimate uses nobody talks about.",
    date: "2026-07-15",
    category: "Text Tools",
    tags: ["text repeater", "ASCII art", "test data", "patterns", "creative"],
    relatedTools: ["text-repeater", "fullscreen-text", "text-sorter"],
    content: `<p>You see a text repeater and think: "Why would anyone need to repeat text 100 times?" The answer is not spam. It is <strong>ASCII art</strong> — creating pictures from repeated characters. It is <strong>test data generation</strong> — filling a database with placeholder content. It is <strong>decorative text</strong> — creating borders, separators, and patterns for plain-text documents. A <a href="/en/tools/text-repeater">text repeater</a> is a creative tool that happens to look like a spam tool. Here are the legitimate uses that nobody talks about.</p>

<h2>ASCII Art: Painting with Characters</h2>

<p>ASCII art is the practice of creating images using only text characters — letters, numbers, and symbols arranged on a grid. A simple heart: repeated "<" and "3" characters. A complex landscape: hundreds of characters arranged to form mountains, trees, and sky. The text repeater is the ASCII artist's brush — it generates the repeated characters that form the shapes.</p>

<p>Example: a horizontal line of stars across a flyer. Instead of typing <code>********************</code> manually, you type <code>*</code> and repeat it 50 times. The result is a perfectly straight line of stars. A vertical line of pipes: <code>|</code> repeated with newline separators creates a vertical border. The text repeater generates the repetition. The artist arranges it into art.</p>

<p>ASCII art is used in: plain-text email signatures (a decorative border around your name and title), README files (a logo or banner made of text characters), terminal applications (decorative headers and dividers), and old-school internet culture (signature blocks, forum posts, and status updates).</p>

<h2>Test Data Generation: Filling Databases with Realistic Content</h2>

<p>Every developer needs test data. You are building a search feature that needs to handle 10,000 results. You need 10,000 rows in the database. You could write a script. Or you could use the text repeater to generate: 10,000 email addresses, 10,000 names, 10,000 product descriptions. The text repeater multiplies a template into a dataset.</p>

<p>Example: generate 100 test email addresses. Type <code>testuser@example.com</code> and repeat it 100 times with newline separators. The output is a list of 100 identical email addresses. Not realistic — but fast. For more realistic data, vary the template: <code>user1@example.com</code>, <code>user2@example.com</code> — the text repeater generates the repetition, and you manually vary the numbers.</p>

<p>Use the text repeater for: load testing (fill a database with placeholder data), UI testing (fill a form with repeated text to test overflow behavior), and API testing (generate repeated JSON payloads to test rate limiting).</p>

<h2>Decorative Text: Borders, Separators, and Patterns</h2>

<p>Plain-text documents need visual structure. A horizontal rule of dashes: <code>--------------------</code>. A double-line separator: <code>====================</code>. A decorative border of asterisks: <code>********************</code>. The text repeater generates these in one click. No manual typing. No copy-paste. Just the character, the count, and the separator.</p>

<p>Use the text repeater for: plain-text emails (decorative separators between sections), forum posts (structured headers and dividers), code comments (a banner comment that spans 80 characters), and any context where you need visual structure in a plain-text environment.</p>

<p>The <a href="/en/tools/text-repeater">text repeater</a> is not a spam tool. It is a <strong>text generation tool</strong>. ASCII art, test data, and decorative text are the legitimate uses. The tool does not care what you use it for. But now you know what it is actually good at.</p>`
  },
  {
    slug: "scoreboard-beyond-sports-classroom-quiz-trivia",
    title: "Scoreboard Tool Beyond Sports How to Use a Digital Scoreboard for Classroom Quizzes Trivia Nights and Habit Tracking",
    description: "A scoreboard is not just for basketball. It is for quiz bowls, pub trivia, classroom competitions, and personal habit tracking. Here are the creative uses of a simple two-team scoreboard.",
    date: "2026-07-15",
    category: "Fun & Media",
    tags: ["scoreboard", "classroom", "trivia", "quiz", "habit tracking"],
    relatedTools: ["scoreboard", "stopwatch-and-timer", "dice-roller"],
    content: `<p>You see a scoreboard and think "sports." Two teams, points, a timer. But a <a href="/en/tools/scoreboard">digital scoreboard</a> is a general-purpose <strong>counting and comparison tool</strong>. It tracks two numbers over time. The numbers can represent anything: quiz scores, trivia points, daily habits, productivity metrics. The scoreboard does not care what the numbers mean. It just displays them. Here are the creative uses beyond sports.</p>

<h2>Classroom Quiz Competitions</h2>

<p>Split the class into two teams. Team A vs Team B. Each correct answer adds a point. The scoreboard tracks the scores in real time, displayed on the projector for the whole class to see. The visual feedback of watching the score change is more engaging than a teacher silently tallying points on a notepad. Students pay attention. They compete. They learn.</p>

<p>Use the scoreboard for: vocabulary quizzes (Team A vs Team B, first to 10 points wins), math drills (each correct answer earns a point, first team to solve the problem gets the point), and review sessions (before a test, quiz the class on the material and track which team is leading).</p>

<p>The scoreboard is a <strong>gamification tool</strong>. It adds competition to any activity that can be scored. The competition increases engagement. The engagement increases learning. The scoreboard is the visual representation of the game.</p>

<h2>Pub Trivia and Game Nights</h2>

<p>You are hosting a trivia night at home. Six teams, six rounds. You need a scoreboard that everyone can see. The <a href="/en/tools/scoreboard">scoreboard</a> displays on a TV or projector. After each round, update the scores. The visual tally builds tension. The leading team feels the pressure. The trailing team feels the motivation to catch up. The scoreboard is the <strong>narrative engine</strong> of the trivia night.</p>

<p>Use the scoreboard for: pub trivia (track scores across multiple rounds), board game tournaments (track wins and losses across multiple games), and family game nights (track cumulative scores across different games).</p>

<h2>Personal Habit Tracking</h2>

<p>You are trying to build a habit — reading every day, exercising, practicing an instrument. You and a friend decide to hold each other accountable. Each day you complete the habit, you earn a point. The scoreboard tracks who is ahead. The competition is friendly. The accountability is real. The scoreboard is a <strong>social accountability tool</strong> disguised as a game.</p>

<p>Use the scoreboard for: reading challenges (points for each book finished), fitness challenges (points for each workout completed), and productivity challenges (points for each day of focused work).</p>

<h2>Custom Labels, Not Just Team Names</h2>

<p>The scoreboard lets you customize the labels. They do not have to be "Team A" and "Team B." They can be: "Me" vs "My Goals," "This Week" vs "Last Week," "Before" vs "After," or any two categories you want to compare. The labels make the scoreboard meaningful. The numbers make it measurable. The combination makes it a <strong>personal analytics tool</strong> — not just a sports scoreboard.</p>

<p>Track anything with two categories at <a href="/en/tools/scoreboard">free scoreboard</a> — quiz scores, trivia points, daily habits. The scoreboard does not care what the numbers mean. You do.</p>`
  },
  {
    slug: "book-of-answers-decision-making-random-nudge",
    title: "Book of Answers Decision Making Tool When You Need a Random Nudge Not a Definitive Answer",
    description: "You are stuck between two choices. Both are fine. You need a nudge, not a solution. The Book of Answers gives you a random response — and the trick is that your reaction to the answer tells you what you really wanted.",
    date: "2026-07-15",
    category: "Fun & Media",
    tags: ["book of answers", "decision making", "random", "psychology", "intuition"],
    relatedTools: ["book-of-answers", "coin-flip", "food-picker"],
    content: `<p>You are torn between two job offers. Job A pays more. Job B has better work-life balance. You have analyzed the pros and cons. You have talked to friends. You have made a spreadsheet. You are still stuck. You open a <a href="/en/tools/book-of-answers">Book of Answers</a> — a digital version of the classic decision-making book — and ask: "Should I take Job A?" The answer: "The answer is not what you seek." Frustrating. Useless. But then you notice: you are <strong>disappointed</strong> that the answer was not "Yes." You wanted it to say yes. You realize: you already knew which job you wanted. You just needed the Book of Answers to reveal it to you.</p>

<p>This is the real purpose of random decision-making tools. They do not make decisions for you. They reveal the decisions you have already made. Here is the psychology behind the Book of Answers — and why it works even though you know it is random.</p>

<h2>The Coin Flip Revelation Effect</h2>

<p>There is a famous psychological trick: when you cannot decide between two options, flip a coin. Assign heads to Option A, tails to Option B. Flip the coin. But do not look at the result. Instead, ask yourself: <strong>which outcome were you hoping for while the coin was in the air?</strong> That is your answer. The coin did not decide. It revealed.</p>

<p>The Book of Answers works the same way. You ask a question. The book gives a random response. Your emotional reaction to the response — relief, disappointment, excitement, frustration — tells you what you actually wanted. The answer is not the answer. Your <strong>reaction to the answer</strong> is the answer. The book is a mirror. It reflects your own preferences back at you.</p>

<p>This is not mysticism. It is a well-documented psychological phenomenon called <strong>affective forecasting</strong> — your emotional reaction to a predicted outcome reveals your true preferences. The Book of Answers triggers this reaction. The randomness is the mechanism. Your emotional response is the result.</p>

<h2>When to Use the Book of Answers</h2>

<p>Use the Book of Answers when: you are stuck between two roughly equal options (neither is clearly better, so the decision is about preference, not analysis), you have already analyzed the decision and the analysis did not help (more information will not solve the problem — the problem is emotional, not informational), and you need permission to trust your intuition (the Book of Answers gives you an external "answer" that you can use as permission to follow your gut).</p>

<p>Do not use the Book of Answers for: decisions with objectively better options (if one job pays $50K and the other pays $500K, you do not need a random answer), decisions with serious consequences (medical decisions, legal decisions, financial decisions with life-changing amounts of money), and decisions where you are avoiding responsibility (the Book of Answers is a tool for self-reflection, not for abdicating responsibility).</p>

<h2>The History of the Book of Answers</h2>

<p>The original Book of Answers was published in 1999 by Carol Bolt. It was a physical book — you held it in your hands, concentrated on a question, opened to a random page, and read the answer. The book sold millions of copies. It was translated into dozens of languages. People used it seriously, knowing it was random, because the mechanism worked. The <a href="/en/tools/book-of-answers">digital Book of Answers</a> is the same concept — a collection of ambiguous, thought-provoking responses that trigger self-reflection. The technology changed. The psychology did not.</p>

<p>Ask your question at <a href="/en/tools/book-of-answers">Book of Answers</a> — the answer is not the answer. Your reaction is.</p>`
  },
  {
    slug: "loan-calculator-vs-mortgage-calculator-personal-vs-home",
    title: "Loan Calculator vs Mortgage Calculator Personal Loans vs Home Loans — Why the Calculators Are Different Even Though the Math Is the Same",
    description: "A loan calculator and a mortgage calculator both compute monthly payments from principal, interest rate, and term. The math is identical. But the use cases, assumptions, and extra costs are completely different.",
    date: "2026-07-15",
    category: "Calculators",
    tags: ["loan calculator", "mortgage calculator", "personal loan", "home loan", "comparison"],
    relatedTools: ["loan-calculator", "mortgage-calculator", "emi-calculator"],
    content: `<p>You need to borrow $30,000. You open a <a href="/en/tools/loan-calculator">loan calculator</a> and a <a href="/en/tools/mortgage-calculator">mortgage calculator</a>. Both ask for the same three inputs: principal, interest rate, and term. Both calculate the same output: monthly payment. The math is identical. The results are identical. So why do these two calculators exist as separate tools?</p>

<p>Because the <strong>math is the same, but the assumptions are completely different</strong>. A personal loan of $30,000 at 8% for 5 years is calculated the same way as a mortgage of $30,000 at 8% for 5 years — but the personal loan has no property taxes, no insurance, no PMI, and no closing costs. The mortgage has all of them. The monthly payment from the calculator is the starting point. The true cost of the loan is the starting point plus everything else. Here is the difference.</p>

<h2>Personal Loan Calculator: The Simple Math</h2>

<p>A personal loan is an <strong>unsecured</strong> loan — no collateral, no property, no insurance requirements. The monthly payment is the only cost. The personal loan calculator gives you the complete answer: principal + interest = monthly payment. No hidden costs. No additional fees. The number you see is the number you pay.</p>

<p>Personal loans are used for: debt consolidation, home improvement (small projects, not whole-house renovations), major purchases (appliances, furniture, medical expenses), and unexpected expenses (emergency repairs, temporary cash flow gaps).</p>

<p>The personal loan calculator is the <strong>truth-teller</strong>. It tells you exactly what you will pay each month. No asterisks. No fine print. The simplicity is the point.</p>

<h2>Mortgage Calculator: The Starting Point, Not the Final Answer</h2>

<p>A mortgage is a <strong>secured</strong> loan — the property is the collateral. The monthly payment includes: principal and interest (the mortgage calculator's output), property taxes (1-3% of the home's value annually, divided by 12), homeowner's insurance ($500-2,000 annually, divided by 12), and PMI (Private Mortgage Insurance, required if your down payment is less than 20% — typically 0.5-1% of the loan amount annually).</p>

<p>The mortgage calculator gives you the principal and interest payment. The <strong>true monthly cost</strong> is 30-50% higher when you include taxes, insurance, and PMI. The mortgage calculator is the starting point, not the final answer. It tells you the loan payment. It does not tell you the homeownership payment.</p>

<p>Additional mortgage costs that the calculator does not include: closing costs (2-5% of the loan amount, paid upfront), maintenance and repairs (1-2% of the home's value annually), and HOA fees (if applicable, $100-500 monthly). The mortgage calculator gives you the <strong>loan payment</strong>. The true cost of homeownership is the loan payment plus all of these. The gap between the two is the most common financial surprise for first-time homebuyers.</p>

<h2>When to Use Each Calculator</h2>

<p>Use the <a href="/en/tools/loan-calculator">loan calculator</a> for: personal loans, auto loans, student loans, and any unsecured or simple-interest loan. The calculator gives you the complete monthly payment. No hidden costs.</p>

<p>Use the <a href="/en/tools/mortgage-calculator">mortgage calculator</a> for: home loans, refinancing analysis, and comparing mortgage offers. The calculator gives you the principal and interest payment. Then add 30-50% for taxes, insurance, and PMI to get the true monthly cost. The calculator is the starting point. The additional costs are the reality.</p>`
  },
  {
    slug: "ai-tools-directory-vs-random-quote-discovery-vs-serendipity",
    title: "AI Tools Directory vs Random Quote Structured Discovery vs Serendipitous Inspiration — How to Find the Right Tool for the Right Moment",
    description: "An AI tools directory helps you find the specific tool you need. A random quote gives you inspiration you were not looking for. Both are discovery tools. Both serve different mindsets.",
    date: "2026-07-15",
    category: "Reference",
    tags: ["AI tools", "random quote", "discovery", "inspiration", "serendipity"],
    relatedTools: ["ai-tools", "random-quote", "quotes"],
    content: `<p>You need an AI image generator for a specific project. You open an <a href="/en/tools/ai-tools">AI tools directory</a> — a curated list of AI tools organized by category. You browse the Image Generation category, find a tool that fits your needs, and start using it. The directory gave you exactly what you were looking for. The discovery was <strong>directed</strong> — you knew the category, you found the tool.</p>

<p>Now you are not looking for anything specific. You open a <a href="/en/tools/random-quote">random quote</a> generator. It gives you a quote from Carl Sagan: "Somewhere, something incredible is waiting to be known." You were not looking for inspiration. The quote found you. The discovery was <strong>serendipitous</strong> — you did not know what you needed until you found it.</p>

<p>Both tools are in the Reference category. Both are discovery tools. But they serve completely different mindsets — one is for when you know what you want, the other is for when you do not. Here is when to use each.</p>

<h2>AI Tools Directory: Directed Discovery</h2>

<p>An AI tools directory is a <strong>curated catalog</strong> of AI-powered tools organized by category: image generation, text generation, audio processing, video editing, code generation, and more. Each tool listing includes the tool name, a brief description, and a link. The directory is a <strong>problem-solving tool</strong> — you have a specific need, and you browse the relevant category to find a tool that solves it.</p>

<p>Use the AI tools directory when: you have a specific task and need a tool to complete it, you want to explore what is available in a particular category, and you are comparing multiple tools for the same purpose. The directory is the <strong>librarian</strong> of AI tools. It helps you find exactly what you are looking for.</p>

<h2>Random Quote: Serendipitous Discovery</h2>

<p>A random quote generator is a <strong>serendipity engine</strong>. It gives you one unexpected quote from a vast collection — no search, no filter, no choice. The value is in the surprise. The quote you did not know you needed to hear. The perspective you did not know you were missing. The tool is a <strong>reflection tool</strong> — you are not solving a problem, you are opening yourself to inspiration.</p>

<p>Use the random quote generator when: you need a moment of inspiration before starting work, you are creatively blocked and need something unexpected to spark an idea, and you want to start your day with a thought-provoking idea. The random quote is the <strong>wise stranger</strong> — it gives you what you need, not what you want.</p>

<h2>The Two Modes of Discovery</h2>

<p>Directed discovery and serendipitous discovery are complementary. The AI tools directory serves the <strong>planning mind</strong> — the part of you that knows what you need and is looking for the best solution. The random quote serves the <strong>receptive mind</strong> — the part of you that is open to unexpected inspiration. You need both modes because you are both. The directory helps you find the right tool. The random quote helps you find the right mindset. Different tools. Different discoveries. Same human.</p>

<p>Explore at <a href="/en/tools/ai-tools">AI tools directory</a> and find inspiration at <a href="/en/tools/random-quote">random quote</a> — directed discovery and serendipitous inspiration. Two paths to what you need.</p>`
  },
  {
    slug: "md5-hash-broken-algorithm-still-everywhere",
    title: "MD5 Hash Why a Cryptographically Broken Algorithm Still Appears Everywhere — from File Downloads to Database Indexing",
    description: "MD5 was broken in 2004. Researchers can create two different files with the same MD5 hash. Yet MD5 is still used for checksums, database indexing, and caching. Here's why it refuses to die.",
    date: "2026-07-15",
    category: "Developer",
    tags: ["MD5", "hash", "cryptography", "checksum", "security"],
    relatedTools: ["md5-generator", "hash-generator", "password-generator"],
    content: `<p>In 2004, Chinese researchers Xiaoyun Wang and Hongbo Yu demonstrated a practical collision attack on MD5. They could create two different files with the same MD5 hash — a cryptographic death sentence. The security community declared MD5 broken. Every security guideline since 2005 has said: "Do not use MD5. Use SHA-256." Yet in 2026, MD5 is still everywhere. File download pages still list MD5 checksums. Database systems still use MD5 for indexing. Content delivery networks still use MD5 for cache keys. A <a href="/en/tools/md5-generator">MD5 hash generator</a> is still one of the most-used developer tools.</p>

<p>Why does a broken algorithm refuse to die? The answer reveals the difference between <strong>cryptographic security</strong> and <strong>practical utility</strong> — and why MD5 is still perfectly fine for most of the things people actually use it for. Here is what MD5 can still do, what it cannot do, and when to use SHA-256 instead.</p>

<h2>What MD5 Cannot Do (and Why It Was Declared Dead)</h2>

<p>MD5 is broken for <strong>collision resistance</strong> — the property that prevents an attacker from creating two different inputs with the same hash. A collision attack on MD5 takes seconds on modern hardware. This means: a malicious actor can create a fake software update with the same MD5 hash as the legitimate update, a forged digital certificate with the same MD5 hash as a trusted certificate, and two different documents with the same MD5-based digital signature. In all of these cases, the attacker exploits the collision to make a malicious file appear legitimate.</p>

<p>Do not use MD5 for: digital signatures, SSL/TLS certificates, password hashing (use bcrypt, scrypt, or Argon2), and any security context where an attacker might try to create a collision. In these cases, MD5 is not just weak — it is actively dangerous.</p>

<h2>What MD5 Can Still Do (and Why It Survives)</h2>

<p>MD5 is still perfectly fine for <strong>non-adversarial</strong> use cases — situations where no one is trying to attack the hash. These include: <strong>file integrity checksums</strong> (detecting accidental corruption during download, not deliberate tampering), <strong>database indexing</strong> (MD5 produces a fixed-size hash of variable-length data, which is useful for creating compact index keys), <strong>cache keys</strong> (CDNs and caching systems use MD5 to generate unique keys from URLs or content), and <strong>deduplication</strong> (identifying duplicate files by comparing their MD5 hashes).</p>

<p>In all of these cases, the threat model is <strong>accidental collision</strong>, not <strong>deliberate attack</strong>. The probability of two random files having the same MD5 hash by accident is 1 in 2¹²⁸ — astronomically small. The collision attacks that broke MD5 require the attacker to deliberately craft both files. In a non-adversarial context, MD5 is still perfectly reliable.</p>

<p>MD5 survives because it is: fast (MD5 is faster than SHA-256, which matters for high-throughput systems), compact (128-bit output vs 256-bit for SHA-256 — smaller cache keys and index entries), and universally supported (every programming language and platform has an MD5 implementation).</p>

<h2>When to Use MD5 vs SHA-256</h2>

<p>Use MD5 for: file integrity checksums (detecting accidental corruption), database indexing and cache keys, deduplication of non-security-critical data, and any non-adversarial hashing where speed and compactness matter. Use SHA-256 for: digital signatures, certificate validation, password hashing (with a proper salt), and any security context where an attacker might try to create a collision. The <a href="/en/tools/hash-generator">hash generator</a> supports both algorithms. Use the right one for your threat model.</p>

<p>MD5 is cryptographically broken and practically immortal. It will outlive every security guideline that says not to use it. Not because the guidelines are wrong — they are right about the security risks. But because most of the things people use MD5 for are not security risks. The algorithm is broken for the thing it was designed for and perfectly fine for the things people actually use it for. That is why it refuses to die.</p>

<p>Generate hashes at <a href="/en/tools/md5-generator">MD5 generator</a> and <a href="/en/tools/hash-generator">hash generator</a> — know the difference between what MD5 cannot do and what it still does perfectly well.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("Free station: 206->done.")