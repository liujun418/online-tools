"""Update blog.ts with expanded content + 3 new posts."""
import re

PATH = "C:/Users/jun/online-tools/src/lib/blog.ts"

with open(PATH, encoding="utf-8") as f:
    ts = f.read()

# ── Fix existing posts (replace content fields with expanded versions) ──

EXPANDED = {
    "json-formatter-online-guide": """<p>You open a log file and it is one giant line of JSON. Three thousand characters, no line breaks, and somewhere in there is the field you need to debug. We have all been there.</p>

<p>The quickest fix: <a href="/en/tools/json-formatter">format JSON online</a> with a browser tool. No IDE, no command line, no npm install. Just paste and it is readable.</p>

<h2>What a JSON formatter actually does</h2>

<p>A JSON formatter takes raw, compact JSON and adds indentation and line breaks so you can read the structure. Most formatters also validate the syntax — they catch missing commas, trailing commas, and unclosed brackets before you waste time debugging.</p>

<p>Our <a href="/en/tools/json-formatter">free JSON formatter</a> does both: format with collapsible tree view, and validate with line numbers pointing to errors. The minify option squashes it back to a single line for production.</p>

<h2>Common JSON problems and how to spot them</h2>

<p><strong>Trailing commas</strong> are the most common culprit. JSON does not allow a comma after the last item in an array or object, but most developers write them out of habit from JavaScript. The validator catches these instantly with a line number.</p>

<p><strong>Unescaped quotes inside strings.</strong> If your JSON value contains a double quote, it needs a backslash. The formatter highlights these as syntax errors.</p>

<p><strong>Duplicate keys.</strong> JSON technically allows duplicate keys but most parsers only keep the last one. If your data is missing fields, check for duplicates.</p>

<p><strong>Wrong data types.</strong> A number in quotes (<code>"42"</code> instead of <code>42</code>) might pass validation but break your application logic. The tree view makes it easy to spot type mismatches.</p>

<p>For nested objects, the collapsible tree view is a lifesaver. You can drill down into the specific path you care about without scrolling through hundreds of lines. Click to expand objects and arrays, see their structure at a glance.</p>

<h2>When to use a standalone formatter vs your editor</h2>

<p>VS Code and JetBrains format JSON fine — when you already have the file open. But for quick one-offs (pasting from an API response, checking a config blob, verifying JSON from a Slack message), opening your editor is slower than a browser tab.</p>

<p>The <a href="/en/tools/json-formatter">online formatter</a> is already there. No file to create. No extension to install. Just paste and see the result. It is also useful when you are on a computer that is not yours — a QA machine, a server terminal, or a colleague's laptop.</p>

<p>Try it next time you need to <a href="/en/tools/json-formatter">validate and format JSON</a>. No signup, no ads getting in the way.</p>""",

    "base64-encoding-explained": """<p>Base64 encoding shows up everywhere — email attachments, data URIs, JWT tokens, API authentication headers. But what it actually does is often misunderstood. It is not encryption. It is not compression. It actually makes data about 33% larger.</p>

<p>So why use it? Because it turns binary data (which can contain any byte value) into a safe set of 64 ASCII characters. This matters when you need to send binary through a system that only handles text.</p>

<h2>How Base64 actually works</h2>

<p>Base64 takes your input and converts every 3 bytes (24 bits) into 4 characters from a 64-character alphabet: <code>A-Z</code>, <code>a-z</code>, <code>0-9</code>, <code>+</code>, and <code>/</code>. The <code>=</code> character is used for padding when the input length is not a multiple of 3.</p>

<p>Example: the string <code>Man</code> encodes to <code>TWFu</code>. Each letter is 8 bits → 24 bits total → split into 4 groups of 6 bits → each 6-bit group maps to one Base64 character.</p>

<h2>When you actually need Base64</h2>

<p><strong>Embedding images in HTML/CSS.</strong> A <a href="/en/tools/image-to-base64">Base64 image converter</a> turns a PNG or JPG into a data URI string you can paste into an <code>img</code> tag. This saves an HTTP request for tiny icons and logos. The syntax: <code>&lt;img src="data:image/png;base64,iVBORw0K..." /&gt;</code>.</p>

<p><strong>Basic authentication headers.</strong> The username:password string gets Base64-encoded and sent as <code>Authorization: Basic dXNlcjpwYXNz</code>. It is not secure — anyone can decode it — but it is the standard format HTTP servers expect.</p>

<p><strong>JWT tokens.</strong> JSON Web Tokens use Base64URL encoding for their header and payload sections. The three parts you see separated by dots are just Base64-encoded JSON objects. Decode the middle part to see what claims the token carries.</p>

<p><strong>Email attachments.</strong> The MIME standard uses Base64 to encode binary attachments (images, PDFs, ZIP files) into email-safe text. That is why attached files show up as long blocks of seemingly random characters in raw email sources.</p>

<h2>Base64 vs Base64URL</h2>

<p>Standard Base64 uses <code>+</code> and <code>/</code> — characters that are not safe in URLs or filenames. Base64URL replaces them with <code>-</code> and <code>_</code> and omits the padding <code>=</code>. JWTs use Base64URL. Our <a href="/en/tools/base64-converter">free Base64 encoder</a> handles both — choose standard or URL-safe from the dropdown.</p>

<h2>Encoding vs Encryption: Do Not Confuse Them</h2>

<p>Base64 is reversible by design. Anyone can decode a Base64 string. Do not use it to "hide" passwords, API keys, or sensitive data. It is a transport encoding, not a security measure.</p>

<p>If you need to actually protect data, use encryption (AES, RSA) or hashing (SHA-256, bcrypt). Base64 is for making binary data text-safe — nothing more.</p>""",

    "strong-password-guide": """<p>Everyone knows they should use strong passwords. Everyone also reuses the same three passwords across twenty sites. The gap between knowing and doing is that strong passwords feel impossible to remember.</p>

<p>Here is the good news: <a href="/en/tools/password-generator">random password generators</a> solve the strength part. And a simple system solves the remembering part.</p>

<h2>What makes a password strong</h2>

<p>Strength comes from length, not complexity. A 16-character all-lowercase password is harder to crack than an 8-character password with every symbol on the keyboard. Each additional character multiplies the possible combinations exponentially.</p>

<p>The math: a 8-character password using 95 possible characters has 95^8 ≈ 6.6 quadrillion combinations. A 16-character password using just lowercase letters has 26^16 ≈ 43 sextillion combinations — about 6.5 million times more.</p>

<p>A <a href="/en/tools/password-generator">password generator</a> lets you pick the length and character types. For most accounts, 16 characters with mixed case and numbers is plenty. For email and banking, bump it to 20+ with symbols.</p>

<h2>How password generators actually work</h2>

<p>Good generators use cryptographically secure random number generators — not the predictable <code>Math.random()</code> that JavaScript uses by default. This matters because a predictable "random" password is no better than one you made up yourself.</p>

<p>Our generator pulls from the Web Crypto API (<code>crypto.getRandomValues</code>), which is the same randomness source browsers use for TLS encryption. Each password is generated locally in your browser — nothing is sent to a server, nothing is stored.</p>

<h2>The remembering trick (password managers)</h2>

<p>Do not try to memorize random passwords. Use a password manager — Bitwarden is free and open source, and it works on every device. You memorize one strong master password, and the manager handles the rest.</p>

<p>For the master password itself, use four or five random words strung together. Something like "correct-horse-battery-staple" is both strong (44 bits of entropy) and memorable. Add a number and symbol if the site requires them.</p>

<p>The password generator can also create passphrase-style passwords if you prefer that format. Either way, <a href="/en/tools/password-generator">generate a strong password</a> rather than making one up — humans are terrible at randomness. Studies consistently show that "random" passwords humans create follow predictable patterns: capital first letter, number at the end, common word substitutions (@ for a, 3 for e).</p>

<h2>Why "password123!" is not clever</h2>

<p>Attackers know all the common patterns: common words followed by numbers, the site name as part of the password, birthday dates, pet names, sports teams. Password cracking tools try these patterns first. A truly random password from a generator has none of these weaknesses.</p>""",

    "url-encoding-for-beginners": """<p>You copy a link from an email. It has spaces and Chinese characters in it. You paste it into a browser and it is broken — half the characters turned into gibberish. That is because URLs can only contain a limited set of characters. Everything else needs to be encoded.</p>

<p>An <a href="/en/tools/url-encoder">online URL encoder</a> does this in one click. Paste your URL, and it converts all the special characters into percent-encoded format that browsers and servers understand.</p>

<h2>What gets encoded and why</h2>

<p>URLs can only safely contain: letters (A-Z, a-z), numbers (0-9), hyphens, underscores, periods, and tildes. Everything else — spaces, symbols, non-Latin characters — gets converted to a percent sign followed by two hex digits.</p>

<p>Space becomes <code>%20</code>. Ampersand (&) becomes <code>%26</code>. A Chinese character like 中文 becomes <code>%E4%B8%AD%E6%96%87</code>. The browser automatically decodes these back to readable text in the address bar, which is why you see the Chinese characters but the actual URL underneath is encoded.</p>

<p><strong>Characters that always need encoding:</strong> space (<code>%20</code>), hash (<code>%23</code>), percent (<code>%25</code>), ampersand (<code>%26</code>), plus (<code>%2B</code>), question mark when not starting a query string, and any byte above 0x7F (all non-ASCII characters).</p>

<h2>Common URL encoding mistakes</h2>

<p><strong>Double encoding.</strong> You encode a URL, then encode it again. <code>%20</code> becomes <code>%2520</code> (the <code>%</code> gets encoded to <code>%25</code>). The browser decodes once and you are left with <code>%20</code> instead of a space. This happens most often when URL encoding is applied at multiple layers — your code encodes, then the framework encodes again.</p>

<p><strong>Encoding the entire URL vs just the query string.</strong> You should encode the query parameter values, not the whole URL. <code>https://example.com/search?q=hello%20world</code> is correct. Encoding the entire thing breaks the structure.</p>

<p><strong>Forgetting to decode before displaying.</strong> If you show a percent-encoded string to users as-is, it looks broken. Always decode before display. Our <a href="/en/tools/url-encoder">URL decoder</a> handles both directions — paste encoded text to see the original.</p>

<h2>When you need to manually encode</h2>

<p>You need to manually encode URLs when building query strings, working with APIs, or creating links that contain user-generated content. If your URL includes a search term, a username, or any text with special characters, encode it first.</p>

<p>Most programming languages have built-in functions: <code>encodeURIComponent()</code> in JavaScript, <code>urllib.parse.quote()</code> in Python, <code>URLEncoder.encode()</code> in Java. But if you need a quick check without writing code, the <a href="/en/tools/url-encoder">online encoder</a> is right there.</p>""",

    "calculate-loan-payments": """<p>You are at the dealership and they tell you the monthly payment. But what is the actual cost of the loan? The difference between the sale price and what you will pay after five years of interest can be thousands of dollars.</p>

<p>A <a href="/en/tools/loan-calculator">loan calculator</a> shows you the full picture: monthly payment, total interest, and an amortization schedule breaking down every payment.</p>

<h2>How to use the numbers</h2>

<p>Enter the loan amount, interest rate, and term. The calculator shows your monthly payment immediately. But the real insight is in the amortization table — it reveals that in the first year, most of your payment goes to interest, not principal.</p>

<p>Here is a real example: a $20,000 five-year loan at 7% interest. Monthly payment: $396.02. Total interest paid over 5 years: $3,761.20. In month 1, $279.17 goes to interest and only $116.85 to principal. By month 60, it flips — $392.71 to principal, $3.31 to interest. The crossover point where you are paying more principal than interest happens around month 32.</p>

<p>This is why making extra payments early matters so much. An extra $50 a month saves about $800 in interest and pays off the loan eight months early. The <a href="/en/tools/loan-calculator">free loan calculator</a> lets you experiment with extra payments to see the impact.</p>

<h2>Loan vs mortgage calculators</h2>

<p>For home loans, use the <a href="/en/tools/mortgage-calculator">mortgage calculator</a> instead. It factors in property tax and home insurance, which can add 30-40% to your monthly payment. Many first-time buyers look at the principal and interest alone and get surprised by the actual monthly cost.</p>

<p>On a $300,000 mortgage at 6.5%, the principal and interest is about $1,896. Add $300/month for property tax and $100/month for insurance, and the real monthly cost is closer to $2,300. The mortgage calculator shows all of this broken down.</p>

<h2>Understanding the interest rate</h2>

<p>The APR (Annual Percentage Rate) includes fees, not just interest. If a lender advertises 5% interest but 5.8% APR, those extra 0.8 points are fees baked into the rate. Always compare loans using APR, not the headline rate.</p>

<p>Other things that affect your actual cost: origination fees (1-5% of the loan amount upfront), prepayment penalties (some lenders charge you for paying early), and whether the rate is fixed or variable. A variable rate at 5% might look cheaper than a fixed rate at 6%, but if rates rise, that variable loan gets more expensive.</p>

<p>Use the <a href="/en/tools/loan-calculator">loan calculator</a> to run different scenarios. Change the rate, the term, the extra payments. See how each variable affects the total cost before you sign anything.</p>""",

    "bmi-calculator-what-it-means": """<p>Body Mass Index takes your height and weight and produces a single number that categorizes you as underweight, normal, overweight, or obese. It is quick, it is free, and it is used everywhere from doctor offices to insurance forms.</p>

<p>But BMI has blind spots. It does not distinguish between muscle and fat. It does not account for where you carry weight. It was developed from population data that did not include many body types.</p>

<h2>How BMI is calculated</h2>

<p>The formula: weight (kg) divided by height (m) squared. For imperial: weight (lbs) divided by height (inches) squared, multiplied by 703. A <a href="/en/tools/bmi-calculator">BMI calculator</a> does this math instantly — enter your numbers and get your BMI plus the category it falls into.</p>

<p>The standard categories: Under 18.5 (underweight), 18.5-24.9 (normal weight), 25-29.9 (overweight), 30 and above (obese). These thresholds come from population-level health risk data, not individual diagnosis.</p>

<h2>When BMI is useful</h2>

<p>For most people who do not have unusual muscle mass, <a href="/en/tools/bmi-calculator">checking your BMI</a> gives a reasonable starting point. If your BMI is above 30 or below 18.5, it is worth a conversation with a doctor. The number itself is not a diagnosis — it is a flag.</p>

<p>BMI also works well for tracking changes over time. If your BMI is trending up or down over several measurements, that is useful data regardless of whether the absolute number is perfect. Consistency matters — measure at the same time of day, ideally in the morning.</p>

<h2>When to ignore it</h2>

<p>If you lift weights regularly, BMI will likely classify you as overweight because muscle is denser than fat. A 5'10" bodybuilder at 210 lbs with 12% body fat has a BMI of 30.1 — "obese" by the scale, despite being in excellent shape. The same goes for stocky builds, pregnant women, and elderly people who have lost muscle mass.</p>

<p>BMI also does not account for fat distribution. Carrying fat around your midsection (visceral fat) is associated with higher health risks than fat on hips and thighs, even at the same BMI. Waist circumference is a better indicator for this specific risk.</p>

<p>For athletes, use body fat percentage instead. For elderly people, focus on functional measures like grip strength and walking speed. For everyone else, BMI is one data point among several — useful for population trends, limited for individual assessment. Our <a href="/en/tools/bmi-calculator">free BMI calculator</a> gives you the number in seconds, but treat it as a starting point, not a verdict.</p>""",

    "color-converter-hex-rgb-hsl": """<p>You are copying a color from Figma and need it in HEX for your CSS. Then the developer asks for RGB. And the designer wants HSL so they can tweak the saturation. Three formats, same color.</p>

<p>A <a href="/en/tools/color-converter">color converter</a> handles all the conversions instantly. Pick a color with the wheel, paste any format, or adjust sliders — and get the values in every format at once.</p>

<h2>HEX: The Web Standard</h2>

<p><strong>HEX</strong> (<code>#3B82F6</code>) is a 6-character string representing RGB values in hexadecimal. The first two characters are red (<code>3B</code> = 59), next two are green (<code>82</code> = 130), last two are blue (<code>F6</code> = 246).</p>

<p>It is compact, universally supported, and the default for CSS. Use HEX for most web work — backgrounds, text colors, borders. Shorthand HEX works when each pair has matching digits: <code>#336699</code> can become <code>#369</code>.</p>

<p><strong>8-digit HEX</strong> adds an alpha channel: <code>#3B82F6FF</code> where the last two digits (<code>FF</code>) represent full opacity. This is equivalent to <code>rgba(59, 130, 246, 1.0)</code>.</p>

<h2>RGB/RGBA: When You Need Transparency</h2>

<p><strong>RGB</strong> (<code>rgb(59, 130, 246)</code>) is the functional notation. Each value is 0-255. It is less compact than HEX but more readable when you need to understand the color values.</p>

<p><strong>RGBA</strong> adds the alpha channel: <code>rgba(59, 130, 246, 0.5)</code>. The alpha value goes from 0 (fully transparent) to 1 (fully opaque). This is how you make semi-transparent overlays, shadows, and hover effects. CSS also supports the modern syntax: <code>rgb(59 130 246 / 0.5)</code>.</p>

<h2>HSL: The Designer's Format</h2>

<p><strong>HSL</strong> (<code>hsl(217, 91%, 60%)</code>) represents color the way humans think about it, not the way screens display it.</p>

<ul>
<li><strong>Hue</strong> (217): where the color sits on the color wheel, 0-360 degrees. 0=red, 120=green, 240=blue.</li>
<li><strong>Saturation</strong> (91%): how vivid the color is. 0% is gray, 100% is pure color.</li>
<li><strong>Lightness</strong> (60%): how bright. 0% is black, 100% is white, 50% is the pure hue.</li>
</ul>

<p>HSL is the best format for creating color palettes. Keep the hue, vary the saturation and lightness. Or shift the hue by 30 degrees for analogous colors, 180 degrees for complementary. This is dramatically easier than doing the same thing with RGB values.</p>

<p>The <a href="/en/tools/color-converter">free color converter</a> shows all three formats at once with a live preview. Adjust any slider and watch the others update in real time.</p>""",

    "markdown-preview-guide": """<p>You write a README, push to GitHub, and the formatting is wrong. Headings are not headings. The code block is missing its language tag. The table is a mess. You edit, push again, wait for it to render, and hope it is fixed this time.</p>

<p>This is why a <a href="/en/tools/markdown-preview">Markdown preview tool</a> saves so much time. Write on the left, see the rendered output on the right, and catch mistakes instantly.</p>

<h2>Common Markdown mistakes that preview catches</h2>

<p><strong>Headings need a space</strong> after the <code>#</code>. <code>##Heading</code> will not render as a heading, but <code>## Heading</code> will. This is the most common mistake and the preview shows it immediately.</p>

<p><strong>Tables are the worst.</strong> The separator row needs exactly the right number of pipes and dashes. One missing pipe and the whole table breaks. The preview shows your table as it will actually render.</p>

<p><strong>Code blocks</strong> need a blank line before them in some Markdown flavors. If your code is squished into the previous paragraph, the preview catches it. Language tags on code blocks — <code>```python</code> vs <code>```</code> — control syntax highlighting. The preview shows you exactly how the highlighting will look.</p>

<p><strong>Nested lists</strong> need exactly the right indentation. Two spaces or four? The spec says two, but some parsers require four. The preview removes the guesswork.</p>

<h2>Quick syntax reference</h2>

<pre><code># H1 Heading
## H2 Heading
### H3 Heading

**bold text**
*italic text*
~~strikethrough~~
`inline code`

[link text](https://example.com)
![alt text](image.jpg)

- Unordered list item
- Another item

1. Ordered list item
2. Another item

| Column 1 | Column 2 |
|----------|----------|
| Cell 1   | Cell 2   |

```python
print("code block with syntax highlighting")
```
</code></pre>

<h2>When to use each Markdown flavor</h2>

<p><strong>GitHub Flavored Markdown (GFM)</strong> is the most common. It supports tables, task lists (<code>- [ ]</code> and <code>- [x]</code>), strikethrough, and auto-linked URLs. Use this for README files, issues, PR descriptions, and documentation hosted on GitHub or GitLab.</p>

<p><strong>CommonMark</strong> is the strict standard. No tables, no task lists, no strikethrough. Use this when you need guaranteed compatibility across all Markdown parsers — or when writing for a platform that explicitly uses CommonMark.</p>

<p>The <a href="/en/tools/markdown-preview">Markdown preview tool</a> supports GFM. Write, preview, copy the formatted output or the raw Markdown. It is the fastest way to check your formatting before pushing.</p>""",

    "hash-generator-checksum-guide": """<p>You download a Linux ISO or a software package, and the website shows a long string of letters and numbers labeled "SHA-256". That is a hash — a digital fingerprint of the file. If even one bit of the file changes, the hash changes completely.</p>

<p>A <a href="/en/tools/hash-generator">hash generator</a> creates these fingerprints from any text. You can use it to verify file integrity, compare two pieces of data without seeing the actual data, or generate cache keys.</p>

<h2>How hash functions actually work</h2>

<p>A hash function takes any input — one word or an entire hard drive — and produces a fixed-length output. SHA-256 always outputs 256 bits (64 hex characters). MD5 always outputs 128 bits (32 hex characters).</p>

<p>The key properties that make hashes useful:</p>

<ul>
<li><strong>Deterministic:</strong> same input always produces the same hash.</li>
<li><strong>Avalanche effect:</strong> changing even one bit of input completely changes the output. "hello" and "Hello" produce completely different hashes.</li>
<li><strong>One-way:</strong> you cannot reverse a hash to get the original input. This is why "forgot password" exists instead of "show me my password."</li>
<li><strong>Collision resistance:</strong> (ideally) two different inputs should not produce the same hash.</li>
</ul>

<h2>SHA vs MD5: which one to use</h2>

<p><strong>SHA-256</strong> is the current standard. It produces a 64-character hex string and has no known practical collisions. Use this for anything security-related: password hashing (with salt), digital signatures, certificate validation.</p>

<p><strong>MD5</strong> is faster but broken for security. Researchers have demonstrated practical collision attacks — two different PDFs with the same MD5 hash. Do not use MD5 for passwords or anything where someone might try to fake a match.</p>

<p>MD5 is still fine for non-security uses: cache invalidation keys, data integrity checksums (not authentication), deduplication, and quick "are these two files the same?" comparisons.</p>

<p>Our <a href="/en/tools/hash-generator">free hash generator</a> supports SHA-1, SHA-256, SHA-384, SHA-512, and MD5. You can hash any text and compare two hashes side by side to see if they match. The comparison feature is useful for verifying file integrity — copy the expected hash from the website, paste your computed hash, and confirm they are identical.</p>

<h2>Real-world hash uses</h2>

<p><strong>Password storage:</strong> websites do not store your actual password. They store a hash of it — specifically, a salted hash using bcrypt, scrypt, or Argon2. When you log in, they hash what you typed and compare. If the hashes match, the password was correct.</p>

<p><strong>Git commits:</strong> Git uses SHA-1 hashes for every commit. The commit ID you see (<code>8ed9bbb</code>) is just the first 7 characters of the commit's hash. This is why changing a commit message changes the hash — and why rebasing creates new commits.</p>

<p><strong>File download verification:</strong> major software projects publish checksums next to their downloads. After downloading, you compute the hash locally and compare. If they match, the file was not corrupted or tampered with during download. This is especially important for OS images, wallet software, and security tools.</p>

<p>We also have a <a href="/en/tools/md5-generator">dedicated MD5 generator</a> if that is all you need.</p>""",

    "online-unit-converter-switch-metric-imperial": """<p>You are following a recipe from a British site and it says 180°C. Your oven uses Fahrenheit. You type "180c to f" into Google. Then the recipe says 200g of flour and you do it again. Then 30cm cake tin. Then 1.5 liters of stock.</p>

<p>There is a faster way. A <a href="/en/tools/unit-converter">unit converter</a> handles all these conversions in one place. Pick the category, enter your number, and see the result instantly.</p>

<h2>Categories that cover real life</h2>

<p>The <a href="/en/tools/unit-converter">free unit converter</a> covers <strong>length</strong> (meters, feet, inches, miles, kilometers, yards, centimeters, millimeters), <strong>weight</strong> (kg, lbs, ounces, grams, stones, tons), <strong>temperature</strong> (Celsius, Fahrenheit, Kelvin), <strong>area</strong> (sq meters, sq feet, acres, hectares), <strong>volume</strong> (liters, gallons, cups, milliliters, fluid ounces), <strong>speed</strong> (km/h, mph, m/s, knots), and <strong>time</strong> (seconds, minutes, hours, days).</p>

<p>That covers: cooking, travel, DIY projects, fitness tracking, weather checking, and most everyday conversions. No switching between five different Google searches.</p>

<h2>The conversions people mess up most</h2>

<p><strong>Temperature:</strong> Celsius to Fahrenheit is the formula everyone second-guesses. Is it multiply by 1.8 then add 32? Or multiply by 9/5? (Both are correct — 9/5 = 1.8.) The converter just does it. No mental math before coffee.</p>

<p><strong>Fluid ounces vs milliliters:</strong> US fluid ounce = 29.57ml. UK fluid ounce = 28.41ml. They are different. A US recipe and a UK recipe using "ounces" are using different measurements. The converter distinguishes between US and UK fluid ounces.</p>

<p><strong>Kilograms to pounds:</strong> People approximate 1kg = 2.2lbs, which is close enough for casual use. But for things like shipping weight (where you pay by the pound) or medication dosing (where precision matters), use the exact conversion.</p>

<p><strong>Miles vs kilometers:</strong> The 5/8 approximation (5 miles ≈ 8 km) works for mental estimates. But for running pace calculations or road trip planning, the exact conversion eliminates cumulative error.</p>

<h2>Quick tip for frequent converters</h2>

<p>Bookmark the <a href="/en/tools/unit-converter">unit converter page</a>. If you find yourself converting the same units repeatedly, keeping it one click away is faster than any app — no launching, no loading screen, just type and convert.</p>""",
}

# Add h2/h3 headings for missing structure
for slug, new_content in EXPANDED.items():
    # Find the post and replace content (slug could be in single or double quotes)
    pattern = rf"(slug:\s*[\"']{slug}[\"'].*?content:\s*`)"
    m = re.search(pattern, ts, re.DOTALL)
    if not m:
        print(f"  NOT FOUND: {slug}")
        continue
    # Find the closing backtick
    start = m.end()
    # Find matching template literal end
    depth = 1
    i = start
    while i < len(ts) - 1:
        if ts[i:i+2] == '${' and ts[i-1:i] != '\\':
            i += 1
            continue
        if ts[i] == '`' and ts[i-1] != '\\':
            depth -= 1
            if depth == 0:
                content_end = i
                break
        i += 1
    if depth != 0:
        print(f"  PARSE ERROR: {slug}")
        continue
    ts = ts[:start] + "\n" + new_content.strip() + "\n" + ts[content_end:]
    print(f"  OK: {slug} ({len(new_content)} chars)")

with open(PATH, "w", encoding="utf-8") as f:
    f.write(ts)

print(f"\nUpdated: {len(EXPANDED)} posts")
