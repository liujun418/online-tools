export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  content: string;
  relatedTools?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "json-formatter-online-guide",
    title: "How to Format JSON Online — No IDE Required",
    description: "JSON getting messy? Here's how to format, validate, and fix JSON without installing anything. Just paste and see the structure instantly.",
    date: "2026-05-20",
    category: "Developer",
    tags: ["json formatter", "format json online", "json validator", "json beautifier", "developer tools"],
    relatedTools: ["json-formatter", "json-to-csv", "base64-converter"],
    content: `<p>You open a log file and it's one giant line of JSON. Three thousand characters, no line breaks, and somewhere in there is the field you need to debug. We've all been there.</p>

<p>The quickest fix: <a href="/en/tools/json-formatter">format JSON online</a> with a browser tool. No IDE, no command line, no npm install. Just paste and it's readable.</p>

<h2>What a JSON formatter actually does</h2>
<p>A JSON formatter takes raw, compact JSON and adds indentation and line breaks so you can read the structure. Most formatters also validate the syntax — they'll catch missing commas, trailing commas, and unclosed brackets before you waste time debugging.</p>

<p>Our <a href="/en/tools/json-formatter">free JSON formatter</a> does both: format with collapsible tree view, and validate with line numbers pointing to errors. The minify option squashes it back to a single line for production.</p>

<h2>Common JSON problems and how to spot them</h2>
<p>Trailing commas are the most common culprit. JSON doesn't allow a comma after the last item in an array or object, but most developers write them out of habit from JavaScript. The validator catches these instantly.</p>
<p>Another one: unescaped quotes inside strings. If your JSON value contains a double quote, it needs a backslash. The formatter highlights these as syntax errors with the offending line number.</p>
<p>For nested objects, the collapsible tree view is a lifesaver. You can drill down into the specific path you care about without scrolling through hundreds of lines.</p>

<h2>When to use a standalone formatter vs your editor</h2>
<p>VS Code and JetBrains format JSON fine — when you already have the file open. But for quick one-offs (pasting from an API response, checking a config blob, verifying JSON from a colleague's Slack message), opening your editor is slower than a browser tab. The online formatter is already there.</p>

<p>Try it next time you need to <a href="/en/tools/json-formatter">validate and format JSON</a>. No signup, no ads getting in the way.</p>`,
  },
  {
    slug: "base64-encoding-explained",
    title: "Base64 Encoding Explained — When and Why You Actually Need It",
    description: "Base64 encoding isn't encryption, compression, or security. It's a way to safely move binary data through text-only systems. Here's when to use it.",
    date: "2026-05-19",
    category: "Developer",
    tags: ["base64 encoding", "base64 explained", "encode base64", "decode base64", "base64 converter"],
    relatedTools: ["base64-converter", "image-to-base64", "url-encoder"],
    content: `<p>Base64 encoding shows up everywhere — email attachments, data URIs, JWT tokens, API authentication headers. But what it does is often misunderstood. It's not encryption. It's not compression. It actually makes data about 33% larger.</p>

<p>So why use it? Because it turns binary data (which can contain any byte value) into a safe set of 64 ASCII characters. This matters when you need to send binary through a system that only handles text.</p>

<h2>When you actually need Base64</h2>
<p>The most common real-world use: embedding small images directly in HTML or CSS. A <a href="/en/tools/image-to-base64">Base64 image converter</a> turns a PNG or JPG into a data URI string you can paste into an img tag. This saves an HTTP request for tiny icons and logos.</p>

<p>Another case: Basic authentication headers. The username:password string gets Base64-encoded and sent as <code>Authorization: Basic dXNlcjpwYXNz</code>. It's not secure — anyone can decode it — but it's the standard format servers expect.</p>

<p>JWTs (JSON Web Tokens) use Base64URL encoding for their header and payload sections. The three parts you see separated by dots are just Base64-encoded JSON objects.</p>

<h2>How to encode and decode Base64</h2>
<p>Our <a href="/en/tools/base64-converter">free Base64 encoder</a> handles both directions. Paste your text to encode it, or paste a Base64 string to decode it. It supports standard Base64 and the URL-safe variant (which swaps + and / for - and _).</p>

<p>The tool runs entirely in your browser — your data never hits a server. This matters because Base64 strings often contain sensitive content like API keys, tokens, and credentials.</p>`,
  },
  {
    slug: "strong-password-guide",
    title: "How to Make a Strong Password You Can Actually Remember",
    description: "Stop using your dog's name plus 123. Here's how to create passwords that are both strong and memorable, plus why password managers aren't as scary as they sound.",
    date: "2026-05-18",
    category: "Security",
    tags: ["strong password", "password generator", "password security", "random password", "password tips"],
    relatedTools: ["password-generator", "hash-generator", "md5-generator"],
    content: `<p>Everyone knows they should use strong passwords. Everyone also reuses the same three passwords across twenty sites. The gap between knowing and doing is that strong passwords feel impossible to remember.</p>

<p>Here's the good news: <a href="/en/tools/password-generator">random password generators</a> solve the strength part. And a simple system solves the remembering part.</p>

<h2>What makes a password strong</h2>
<p>Strength comes from length, not complexity. A 16-character all-lowercase password is harder to crack than an 8-character password with every symbol on the keyboard. Each additional character multiplies the possible combinations exponentially.</p>

<p>A <a href="/en/tools/password-generator">password generator</a> lets you pick the length and character types. For most accounts, 16 characters with mixed case and numbers is plenty. For email and banking, bump it to 20+ with symbols.</p>

<h2>The remembering trick</h2>
<p>Don't try to memorize random passwords. Use a password manager — Bitwarden is free and open source, and it works on every device. You memorize one strong master password, and the manager handles the rest.</p>

<p>For the master password itself, use four or five random words strung together. Something like "correct-horse-battery-staple" is both strong (44 bits of entropy) and memorable. Add a number and symbol if the site requires them.</p>

<p>The password generator can also create passphrase-style passwords if you prefer that format. Either way, <a href="/en/tools/password-generator">generate a strong password</a> rather than making one up — humans are terrible at randomness.</p>`,
  },
  {
    slug: "url-encoding-for-beginners",
    title: "URL Encoding: What Those %20 Signs Mean and When to Use Them",
    description: "Spaces become %20, ampersands become %26, and suddenly your URL works. A practical guide to URL encoding for anyone who's ever copied a link that broke.",
    date: "2026-05-17",
    category: "Developer",
    tags: ["url encoding", "url encoder", "percent encoding", "encode url", "decode url"],
    relatedTools: ["url-encoder", "text-to-slug", "base64-converter"],
    content: `<p>You copy a link from an email. It has spaces and Chinese characters in it. You paste it into a browser and it's broken — half the characters turned into gibberish. That's because URLs can only contain a limited set of characters. Everything else needs to be encoded.</p>

<p>An <a href="/en/tools/url-encoder">online URL encoder</a> does this in one click. Paste your URL, and it converts all the special characters into percent-encoded format that browsers and servers understand.</p>

<h2>What gets encoded and why</h2>
<p>URLs can only safely contain: letters (A-Z, a-z), numbers (0-9), hyphens, underscores, periods, and tildes. Everything else — spaces, symbols, non-Latin characters — gets converted to a percent sign followed by two hex digits.</p>

<p>Space becomes %20. Ampersand (&) becomes %26. A Chinese character like 中文 becomes %E4%B8%AD%E6%96%87. The browser automatically decodes these back to readable text in the address bar, which is why you see the Chinese characters but the actual URL underneath is encoded.</p>

<h2>When you need to manually encode</h2>
<p>You'll need to manually encode URLs when building query strings, working with APIs, or creating links that contain user-generated content. If your URL includes a search term, a username, or any text with special characters, encode it first.</p>

<p>The tool also decodes: paste an encoded URL and it shows you the original text. This is handy for reading URLs that got double-encoded or debugging why a link isn't working. Try it at our <a href="/en/tools/url-encoder">free URL encoder and decoder</a>.</p>`,
  },
  {
    slug: "calculate-loan-payments",
    title: "How to Calculate Loan Payments Without a Spreadsheet",
    description: "See exactly how much that car loan or personal loan costs per month. Break down principal vs interest, and learn why paying extra early saves more than you'd think.",
    date: "2026-05-16",
    category: "Finance",
    tags: ["loan calculator", "calculate loan payments", "amortization", "monthly payment", "interest calculator"],
    relatedTools: ["loan-calculator", "mortgage-calculator", "compound-interest", "percentage-calculator"],
    content: `<p>You're at the dealership and they tell you the monthly payment. But what's the actual cost of the loan? The difference between the sale price and what you'll pay after five years of interest can be thousands of dollars.</p>

<p>A <a href="/en/tools/loan-calculator">loan calculator</a> shows you the full picture: monthly payment, total interest, and an amortization schedule breaking down every payment.</p>

<h2>How to use the numbers</h2>
<p>Enter the loan amount, interest rate, and term. The calculator shows your monthly payment immediately. But the real insight is in the amortization table — it reveals that in the first year, most of your payment goes to interest, not principal.</p>

<p>This is why making extra payments early matters so much. An extra $50 a month on a $20,000 five-year loan at 7% saves about $800 in interest and pays off the loan eight months early. The <a href="/en/tools/loan-calculator">free loan calculator</a> lets you experiment with these numbers.</p>

<h2>Loan vs mortgage calculators</h2>
<p>For home loans, use the <a href="/en/tools/mortgage-calculator">mortgage calculator</a> instead. It factors in property tax and home insurance, which can add 30-40% to your monthly payment. Many first-time buyers look at the principal and interest alone and get surprised by the actual monthly cost.</p>

<h2>Understanding the interest rate</h2>
<p>The APR (Annual Percentage Rate) includes fees, not just interest. If a lender advertises 5% interest but 5.8% APR, those extra 0.8 points are fees baked into the rate. Always compare loans using APR, not the headline rate.</p>`,
  },
  {
    slug: "bmi-calculator-what-it-means",
    title: "BMI Calculator: What the Number Actually Means (and What It Doesn't)",
    description: "BMI is a useful screening tool but it misses a lot. Here's when to pay attention to your BMI and when to ignore it entirely.",
    date: "2026-05-15",
    category: "Health",
    tags: ["BMI calculator", "body mass index", "BMI explained", "weight category", "health calculator"],
    relatedTools: ["bmi-calculator", "calorie-calculator", "unit-converter"],
    content: `<p>Body Mass Index takes your height and weight and produces a single number that categorizes you as underweight, normal, overweight, or obese. It's quick, it's free, and it's used everywhere from doctor's offices to insurance forms.</p>

<p>But BMI has blind spots. It doesn't distinguish between muscle and fat. It doesn't account for where you carry weight. It was developed from population data that didn't include many body types.</p>

<h2>When BMI is useful</h2>
<p>For most people who don't have unusual muscle mass, <a href="/en/tools/bmi-calculator">checking your BMI</a> gives a reasonable starting point. If your BMI is above 30 or below 18.5, it's worth a conversation with a doctor. The number itself isn't a diagnosis — it's a flag.</p>

<p>BMI also works well for tracking changes over time. If your BMI is trending up or down over several measurements, that's useful data regardless of whether the absolute number is perfect.</p>

<h2>When to ignore it</h2>
<p>If you lift weights regularly, BMI will likely classify you as overweight because muscle is denser than fat. The same goes for people with stocky builds, pregnant women, and elderly people who have lost muscle mass — the number becomes misleading.</p>

<p>For a fuller picture, combine BMI with other measurements like waist circumference or body fat percentage. Our <a href="/en/tools/bmi-calculator">free BMI calculator</a> gives you the number in seconds, but treat it as one data point among several.</p>`,
  },
  {
    slug: "color-converter-hex-rgb-hsl",
    title: "HEX to RGB to HSL: A Designer's Quick Guide to Color Formats",
    description: "Converting between HEX, RGB, and HSL isn't hard — once you understand what each format is for. Spoiler: use HEX for code, HSL for thinking.",
    date: "2026-05-14",
    category: "Design",
    tags: ["color converter", "HEX to RGB", "RGB to HSL", "color picker", "CSS color"],
    relatedTools: ["color-converter", "css-minifier", "markdown-preview"],
    content: `<p>You're copying a color from Figma and need it in HEX for your CSS. Then the developer asks for RGB. And the designer wants HSL so they can tweak the saturation. Three formats, same color.</p>

<p>A <a href="/en/tools/color-converter">color converter</a> handles all the conversions instantly. Pick a color with the wheel, paste any format, or adjust sliders — and get the values in every format at once.</p>

<h2>Which format to use when</h2>
<p><strong>HEX</strong> (#3B82F6) is the standard for CSS and HTML. It's compact and universally supported. Use it for most web work — backgrounds, text colors, borders.</p>

<p><strong>RGB</strong> (59, 130, 246) is useful when you need to add transparency. RGB becomes RGBA with a fourth value for opacity: rgba(59, 130, 246, 0.5). This is how you make semi-transparent overlays and shadows.</p>

<p><strong>HSL</strong> (217, 91%, 60%) is the most intuitive for actually thinking about color. The first number is the hue (where it sits on the color wheel), the second is saturation (how vivid), and the third is lightness (how bright). This makes it easy to create color palettes — keep the hue, tweak the other two.</p>

<p>Our <a href="/en/tools/color-converter">free color converter</a> shows all three formats at once with a live preview. Adjust any slider and watch the others update in real time.</p>`,
  },
  {
    slug: "markdown-preview-guide",
    title: "Stop Pushing Broken Markdown: Use a Preview Tool First",
    description: "A Markdown preview tool catches formatting mistakes before you publish. No more broken headings, misaligned tables, or code blocks that don't render.",
    date: "2026-05-13",
    category: "Writing",
    tags: ["markdown preview", "markdown editor", "markdown guide", "write markdown", "markdown online"],
    relatedTools: ["markdown-preview", "text-to-slug", "word-counter", "case-converter"],
    content: `<p>You write a README, push to GitHub, and the formatting is wrong. Headings aren't headings. The code block is missing its language tag. The table is a mess. You edit, push again, wait for it to render, and hope it's fixed this time.</p>

<p>This is why a <a href="/en/tools/markdown-preview">Markdown preview tool</a> saves so much time. Write on the left, see the rendered output on the right, and catch mistakes instantly.</p>

<h2>Common Markdown mistakes that preview catches</h2>
<p>Headings need a space after the #. <code>##Heading</code> won't render as a heading, but <code>## Heading</code> will. The preview shows this immediately.</p>

<p>Tables are the worst. The separator row needs exactly the right number of pipes and dashes. One missing pipe and the whole table breaks. The preview shows your table as it'll actually render, so you can fix alignment before anyone sees it.</p>

<p>Code blocks need a blank line before them in some Markdown flavors. If your code is squished into the previous paragraph, the preview catches it.</p>

<p>Our <a href="/en/tools/markdown-preview">Markdown editor and preview</a> supports GitHub-flavored Markdown — the same flavor GitHub, GitLab, and most static site generators use. It includes syntax highlighting for code blocks, checkboxes for task lists, and strikethrough for edits.</p>`,
  },
  {
    slug: "hash-generator-checksum-guide",
    title: "What Is a Hash? SHA-256, MD5, and Why Checksums Still Matter",
    description: "Hash functions turn any text into a fixed-length string. Here's why that's useful for verifying downloads, storing passwords, and checking file integrity.",
    date: "2026-05-12",
    category: "Developer",
    tags: ["hash generator", "SHA-256", "MD5", "checksum", "file verification", "hash function"],
    relatedTools: ["hash-generator", "md5-generator", "uuid-generator"],
    content: `<p>You download a Linux ISO or a software package, and the website shows a long string of letters and numbers labeled "SHA-256". That's a hash — a digital fingerprint of the file. If even one bit of the file changes, the hash changes completely.</p>

<p>A <a href="/en/tools/hash-generator">hash generator</a> creates these fingerprints from any text. You can use it to verify file integrity, compare two pieces of data without seeing the actual data, or generate cache keys.</p>

<h2>SHA vs MD5: which one to use</h2>
<p>SHA-256 is the current standard. It produces a 64-character hex string and has no known practical collisions (two different inputs producing the same hash). Use this for anything security-related.</p>

<p>MD5 is faster but broken for security. Don't use it for passwords or anything where someone might try to fake a match. It's still fine for non-security uses like cache invalidation, checksums for data integrity (not authentication), and deduplication.</p>

<p>Our <a href="/en/tools/hash-generator">free hash generator</a> supports SHA-1, SHA-256, SHA-384, SHA-512, and MD5. You can hash any text and compare two hashes side by side to see if they match. We also have a <a href="/en/tools/md5-generator">dedicated MD5 generator</a> if that's all you need.</p>

<h2>Real-world hash uses</h2>
<p>Password storage: websites don't store your actual password. They store a hash of it. When you log in, they hash what you typed and compare. If the hashes match, you're in. This is why "forgot password" exists instead of "show me my password" — they can't reverse the hash to get the original.</p>

<p>Git uses SHA-1 hashes for every commit. The commit ID you see is just a hash of the commit's contents and metadata. This is why changing a commit message changes the hash — and why rebasing creates new commits.</p>`,
  },
  {
    slug: "online-unit-converter-switch-metric-imperial",
    title: "Converting Units Online: Better Than Googling '5 Miles in Km' Each Time",
    description: "Stop typing conversion queries into Google one at a time. A proper unit converter handles length, weight, temperature, and volume all in one place.",
    date: "2026-05-11",
    category: "Tools",
    tags: ["unit converter", "metric to imperial", "unit conversion", "length converter", "weight converter"],
    relatedTools: ["unit-converter", "base-converter", "roman-numerals"],
    content: `<p>You're following a recipe from a British site and it says 180°C. Your oven uses Fahrenheit. You type "180c to f" into Google. Then the recipe says 200g of flour and you do it again. Then 30cm cake tin. Then 1.5 liters of stock.</p>

<p>There's a faster way. An <a href="/en/tools/unit-converter">online unit converter</a> handles all these conversions in one place. Pick the category, enter your number, and see the result instantly. Switch between metric and imperial with one click.</p>

<h2>Categories that cover 95% of what you need</h2>
<p>The <a href="/en/tools/unit-converter">free unit converter</a> covers length (meters, feet, inches, miles, kilometers), weight (kg, lbs, ounces, grams), temperature (Celsius, Fahrenheit, Kelvin), area, volume, speed, and time. That covers cooking, travel, DIY projects, and most everyday conversions.</p>

<p>Temperature is the one people mess up most — remembering whether it's multiply-by-1.8-plus-32 or multiply-by-9/5-plus-32. The converter just does it. No mental math at 7am while trying to preheat the oven.</p>

<h2>Quick tip for frequent converters</h2>
<p>Bookmark the page. If you find yourself converting the same units repeatedly, keep it in your browser bookmarks bar. It's faster than any app — no opening, no loading screen, just paste and convert.</p>`,
  },
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
