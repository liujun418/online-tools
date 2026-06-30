"""Add 6 blogs to free station (124→130) — June 30, 2026"""
BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "lorem-ipsum-beyond-placeholder-text",
    title: "Lorem Ipsum Generator — Beyond Placeholder Text, How Designers Actually Use Dummy Copy in Real Layouts",
    description: "Lorem ipsum is not random gibberish — it's scrambled Latin from 45 BC. Here's why designers still use it, when real copy works better, and how to generate the right amount for any layout.",
    date: "2026-06-30",
    category: "Text",
    tags: ["lorem ipsum", "placeholder text", "dummy copy", "design mockup", "content filler"],
    relatedTools: ["lorem-ipsum", "word-counter", "text-to-slug"],
    content: `
<p>You are designing a website. The client has not sent the copy yet — they never have, they never will, not before the design deadline. You need text that looks like text so stakeholders focus on the layout, not the words. You type "Lorem ipsum dolor sit amet" and generate three paragraphs. The design meeting goes smoothly — nobody asks "what does this say," they ask about the spacing and the font choices. This is exactly what placeholder text is for.</p>

<p>Our <a href="/en/tools/lorem-ipsum">free lorem ipsum generator</a> produces dummy text in paragraphs, sentences, or words. Here is where lorem ipsum comes from, why it works better than "content goes here," and when you should use real copy instead.</p>

<h2>Where lorem ipsum actually comes from</h2>

<p>Lorem ipsum is not random. It is scrambled Latin from Cicero's "De Finibus Bonorum et Malorum" (On the Ends of Good and Evil), written in 45 BC. The original passage begins: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." A typesetter in the 1500s scrambled it to create a type specimen book. The scrambled version — starting with "Lorem ipsum" — became the printing industry's standard dummy text and survived into the digital age.</p>

<p><strong>Why it works:</strong> Latin looks like English from a distance (same alphabet, similar word lengths, similar letter frequency) but is not readable by English speakers. This is the key insight: placeholder text should look like real text without being readable. If you use "Content goes here, this is where the heading will be, the client will provide this later" — stakeholders read it. They comment on it. They ask "is this the actual copy?" Lorem ipsum prevents this because nobody reads Latin. The visual texture is preserved; the content is invisible.</p>

<h2>When lorem ipsum is the right choice</h2>

<p><strong>Early-stage wireframes and mockups:</strong> the layout is being decided. Font sizes, line heights, column widths, spacing — these need realistic text to evaluate. Lorem ipsum provides exactly the right visual weight without distracting anyone with meaning. Generate 2-3 paragraphs for body text, 3-5 words for headings, and 10-15 words for subheadings.</p>

<p><strong>Client presentations where copy is pending:</strong> the client needs to approve the design direction. If you use real copy, the meeting becomes about word choices. If you use lorem ipsum, the meeting stays about design. This is the single most practical benefit — it keeps stakeholders focused on what you are actually presenting.</p>

<p><strong>Font and typography testing:</strong> you are comparing two fonts and need to see how they handle real text density. Lorem ipsum provides consistent, neutral text that reveals kerning issues, line spacing problems, and readability differences without the content influencing your judgment.</p>

<h2>When real copy beats lorem ipsum</h2>

<p><strong>Final design reviews:</strong> once the layout is approved, replace lorem ipsum with real copy. Real headlines are shorter or longer than placeholder ones. Real paragraphs have different rhythm. A design that looks perfect with lorem ipsum can break with real content — a headline that wraps to 3 lines instead of 1, a bullet list where items are uneven lengths. Test with real copy before development handoff.</p>

<p><strong>Content-heavy pages:</strong> a blog post template, a product description page, an FAQ section. These live and die by their content. Designing them with lorem ipsum is designing in the dark — you are making layout decisions without knowing the content structure. Get real copy, or at least structurally realistic copy (actual questions for FAQ, actual product specs for product pages).</p>

<p><strong>Accessibility testing:</strong> screen readers read lorem ipsum as Latin. This tells you nothing about how a real user would experience the page. For accessibility reviews, use real or realistic copy in the correct language.</p>

<p><strong>SEO-critical pages:</strong> placeholder text on a landing page that accidentally goes live is an SEO disaster. Google indexes lorem ipsum, ranks it for nothing, and your page looks abandoned. Always replace placeholder text before publishing — and double-check that no lorem ipsum survived into production.</p>

<p>For counting how many words of placeholder text you generated, our <a href="/en/tools/word-counter">word counter</a> checks paragraph and word counts. For converting placeholder headings to clean URL slugs, our <a href="/en/tools/text-to-slug">URL slug generator</a> handles the conversion. And for a guide to text tools, see our <a href="/en/blog/lorem-ipsum-generator-guide">lorem ipsum generator guide</a>.</p>
`,
  },
  {
    slug: "bing-wallpaper-4k-collection-guide",
    title: "Bing Wallpaper Download — How to Build a Stunning 4K Wallpaper Collection Without Paying for Stock Photos",
    description: "Bing updates its homepage image daily — a high-resolution photo from somewhere in the world. Here's how to download, organize, and use these images as wallpapers, screensavers, and design references.",
    date: "2026-06-30",
    category: "Reference",
    tags: ["Bing wallpaper", "4K wallpaper", "daily wallpaper", "desktop background", "free wallpaper"],
    relatedTools: ["bing-wallpaper", "nasa-apod", "pet-wallpaper"],
    content: `
<p>You search "free 4K wallpapers" and land on a site with 47 ads, 3 fake download buttons, and a 720p image labeled "4K." You just want a nice background for your desktop. Meanwhile, Microsoft has been quietly publishing a new high-resolution photograph every single day on Bing's homepage — no ads, no fake buttons, just genuinely good photography from around the world. You can download today's image in 30 seconds. You can also download the last week's images. Here is how to build a collection.</p>

<p>Our <a href="/en/tools/bing-wallpaper">free Bing wallpaper tool</a> shows today's image, the last 7 days, and download options in multiple resolutions. Here is how Bing's wallpaper system works, how to build a collection, and what these images are actually useful for beyond your desktop background.</p>

<h2>How Bing's daily image system works</h2>

<p>Every day, Bing features a new photograph on its homepage. These are not stock photos — they are curated from professional photographers, wildlife agencies, and cultural institutions worldwide. Each image includes metadata: location (where was this taken), photographer credit, a short description, and sometimes a quiz or trivia link related to the image subject.</p>

<p><strong>The resolution is genuine:</strong> Bing serves these images at up to 4K (3840×2160) resolution. This is not upscaled — the source photographs are high-resolution captures from professional equipment. For a desktop wallpaper on any monitor size, the quality is sufficient. For print, the resolution at 4K gives you about 13×7 inches at 300 DPI — fine for small prints, not for posters.</p>

<p><strong>The curation is the hidden value:</strong> someone at Microsoft is selecting one photograph per day from thousands of submissions. The curation favors: stunning landscapes (New Zealand fjords, Norwegian northern lights, Patagonian peaks), wildlife close-ups (snow leopards, hummingbirds, sea turtles), architectural photography (Japanese temples, Italian coastal villages, modern landmarks), and cultural events (festivals, traditions, seasonal celebrations). The collection is globally diverse — it is not all Yosemite and the Eiffel Tower.</p>

<h2>Building a wallpaper collection (beyond today's image)</h2>

<p><strong>Download the last 7 days:</strong> our tool shows the current image plus the 6 previous days. Download the ones you like. In one week, you have 7 high-quality wallpapers — enough to rotate daily.</p>

<p><strong>Archive the images you like:</strong> Bing does not provide an official archive of past images (there are third-party archives, but their reliability varies). Save the images you want to keep — you cannot count on being able to find "that one photo of the Icelandic waterfall from last March" later.</p>

<p><strong>Organize by category:</strong> landscapes, wildlife, architecture, abstract, seasonal. After a few months, you will have 50-100 images. Categorizing them makes rotation easier — set your wallpaper to rotate through a specific category based on mood or season.</p>

<p><strong>Set up automatic rotation:</strong> both Windows and macOS support wallpaper slideshows. Point the slideshow at your Bing wallpaper folder, set the interval (1 hour, 6 hours, daily), and you have a constantly refreshing desktop. Combined with our tool's weekly downloads, your wallpaper collection stays current without manual effort.</p>

<h2>What these images are useful for (beyond wallpaper)</h2>

<p><strong>Design reference and mood boards:</strong> Bing wallpapers are professionally composed photographs. The color palettes, lighting, and composition are reference-quality — useful for designers building mood boards, photographers studying composition, and artists collecting visual references. The location metadata tells you where each image was taken, which is useful for travel planning and location scouting.</p>

<p><strong>Video call backgrounds:</strong> a high-resolution landscape photo makes a better virtual background than your actual messy office. Bing wallpapers are ideal for this — wide-angle landscapes with clean compositions work perfectly as Zoom/Teams backgrounds.</p>

<p><strong>Screen saver slideshows:</strong> if you still use a screen saver, a folder of Bing wallpapers on slideshow mode turns your idle screen into a rotating gallery of world-class photography.</p>

<p><strong>What you cannot do:</strong> these images are licensed for personal use as wallpapers. They are not licensed for commercial use, redistribution, or incorporation into products. Microsoft's terms allow personal, non-commercial use. If you need images for a commercial project, use properly licensed stock photography.</p>

<p>For space and astronomy wallpapers, our <a href="/en/tools/nasa-apod">NASA APOD viewer</a> shows NASA's Astronomy Picture of the Day. For animal wallpapers, our <a href="/en/tools/pet-wallpaper">pet wallpaper tool</a> provides animal photography. And for a comparison of daily image sources, see our <a href="/en/blog/nasa-apod-vs-bing-wallpaper-daily-images">NASA APOD vs Bing Wallpaper comparison</a>.</p>
`,
  },
  {
    slug: "global-weather-read-forecast-meteorologist",
    title: "Global Weather Checker — How to Read a 7-Day Forecast Like a Meteorologist, Not Just Check the Temperature",
    description: "You check the weather, see '30% chance of rain,' and skip the umbrella. Then it rains. The problem is not the forecast — it is how you read it. Here's what each metric actually means.",
    date: "2026-06-30",
    category: "Reference",
    tags: ["weather checker", "7-day forecast", "weather reading", "meteorology", "precipitation probability"],
    relatedTools: ["global-weather", "unit-converter", "crypto-price"],
    content: `
<p>You open a weather app. It says 72°F, partly cloudy, 30% chance of rain. You think: "30% is low, I will skip the umbrella." Four hours later, you are walking home in the rain, annoyed at the "wrong" forecast. The forecast was not wrong — your interpretation was. A 30% chance of rain does not mean it will rain over 30% of the area or for 30% of the day. It means: on days with these exact atmospheric conditions, it rained 30% of the time. You rolled the dice and lost.</p>

<p>Our <a href="/en/tools/global-weather">free global weather checker</a> shows temperature, precipitation, wind, humidity, and pressure for any city. Here is what each metric actually means, how to read a forecast like a meteorologist, and why "30% chance of rain" should probably make you bring the umbrella.</p>

<h2>Precipitation probability: the most misunderstood number in weather</h2>

<p><strong>What PoP (Probability of Precipitation) actually means:</strong> it is the forecaster's confidence that rain will occur somewhere in the forecast area, multiplied by the percentage of the area expected to get rain. Confidence: 60%. Area coverage: 50%. PoP = 0.6 × 0.5 = 0.30 = 30%.</p>

<p><strong>What this means in practice:</strong> a 30% PoP is not "probably won't rain." It is "on 3 out of 10 days with these conditions, it rains somewhere in the forecast area." If you have 10 events planned this summer on days with a 30% PoP, 3 of them will likely get rained on. Bring the umbrella for any outdoor event where rain would ruin it — even at 20%.</p>

<p><strong>The practical threshold:</strong> 0-20% = rain unlikely, skip umbrella unless the event is critical. 20-40% = rain possible, bring umbrella if getting wet would be more than mildly annoying. 40-60% = rain likely, bring umbrella. 60%+ = rain very likely, plan indoor alternatives.</p>

<h2>Temperature is not what your skin feels</h2>

<p><strong>Air temperature vs feels-like temperature:</strong> the air temperature is measured in the shade, 1.5 meters above ground, with no wind. Your skin does not experience this. Wind strips away the warm air layer next to your skin (wind chill). Humidity prevents sweat from evaporating, making it feel hotter (heat index). A 90°F day with 80% humidity feels like 113°F. A 30°F day with 20 mph wind feels like 17°F.</p>

<p><strong>What to actually check:</strong> look at the "feels like" or "apparent" temperature, not the air temperature. This is the number that determines whether you need a jacket, whether your run will be miserable, and whether it is safe to exercise outdoors. The air temperature is a scientific measurement; the feels-like temperature is what your body experiences.</p>

<h2>Wind speed and direction: the forecast within the forecast</h2>

<p><strong>Wind direction tells you what weather is coming:</strong> wind from the north (in the northern hemisphere) typically brings colder air. Wind from the south brings warmer, moister air. Wind from the west (in mid-latitudes) typically means weather systems are moving through — expect changes. Wind from the east can mean a stalled weather pattern. The wind direction is a crude but useful predictor of the next 12-24 hours.</p>

<p><strong>Wind speed practical thresholds:</strong> 0-5 mph = calm, barely noticeable. 5-15 mph = breezy, pleasant for walking. 15-25 mph = windy, cycling becomes effort-dependent on direction, hats become projectiles. 25-35 mph = difficult to walk against, umbrellas are useless, small branches break. 35+ mph = stay indoors unless necessary, driving becomes hazardous for high-profile vehicles.</p>

<h2>Atmospheric pressure: the trend that predicts rain</h2>

<p><strong>Falling pressure = weather is getting worse.</strong> Rising pressure = weather is improving. The absolute pressure number matters less than the trend over the last 3-6 hours. A rapid pressure drop (more than 3 hPa in 3 hours) signals an approaching storm system. A steady rise signals clearing skies.</p>

<p><strong>The amateur meteorologist's trick:</strong> check the pressure trend, not the absolute number. If pressure is falling and the wind is from the south (bringing moisture), rain is likely in the next 12-24 hours regardless of what the precipitation percentage says right now. The percentage will catch up as the system approaches — the pressure trend gives you advance warning.</p>

<p>For converting between Celsius and Fahrenheit (most weather services let you switch, but if not), our <a href="/en/tools/unit-converter">unit converter</a> handles temperature conversions. For checking if weather is affecting crypto markets (extreme weather impacts mining and energy prices), our <a href="/en/tools/crypto-price">crypto price tracker</a> shows market movements. And for a guide to weather checking, see our <a href="/en/blog/global-weather-checker-guide">global weather checker guide</a>.</p>
`,
  },
  {
    slug: "remove-duplicate-lines-vs-excel-dedup",
    title: "Remove Duplicate Lines vs Excel Remove Duplicates — When a 2-Second Browser Tool Beats a Spreadsheet",
    description: "Excel's Remove Duplicates works on rows, requires the data to be in a spreadsheet, and takes 5 clicks. A browser-based dedup tool works on any text you paste. Here's when each approach wins.",
    date: "2026-06-30",
    category: "Text",
    tags: ["remove duplicate lines", "Excel dedup", "deduplicate text", "text cleaning", "data cleanup"],
    relatedTools: ["remove-duplicate-lines", "json-to-csv", "word-counter"],
    content: `
<p>You have a list of 5,000 email addresses. Some appear twice. You need to deduplicate them. You could: open Excel, import the CSV, select the column, click Data > Remove Duplicates, confirm the dialog, export back to CSV — about 90 seconds and 8 clicks. Or you could paste the list into a browser tool, click one button, and copy the result — about 3 seconds. The output is identical. The time is not.</p>

<p>Our <a href="/en/tools/remove-duplicate-lines">free remove duplicate lines tool</a> deduplicates any text list instantly. Here is when the browser tool wins, when Excel (or Google Sheets) wins, and how to pick the right tool for your specific dedup scenario.</p>

<h2>When the browser tool wins</h2>

<p><strong>Quick one-off dedup:</strong> someone Slack'd you a list. You need the unique values. You do not need a spreadsheet — you need this one operation on this one list. Paste, dedup, copy, done. The browser tool has zero setup cost. Excel has a setup cost (open app, import data, format columns) that is justified for complex operations but not for one click.</p>

<p><strong>Text that is not tabular:</strong> a list of URLs, a list of hashtags, a list of names — single-column data with no structure. Excel treats this as a 1-column spreadsheet, which works but is overkill. The browser tool treats it as text — which is what it actually is.</p>

<p><strong>Dedup as part of a text processing pipeline:</strong> you are cleaning data before pasting it into another tool. Remove duplicates → count words → convert to JSON. Each step is a browser tool. Chaining browser tools is faster than importing to Excel, doing one operation, exporting, and importing to the next tool.</p>

<p><strong>Case-sensitive vs case-insensitive dedup:</strong> "John@Email.com" and "john@email.com" — are these duplicates? Email addresses are case-insensitive (they are duplicates). Names might be case-sensitive (John Smith and john smith could be different people). A good browser dedup tool lets you choose. Excel's Remove Duplicates is case-insensitive by default with no toggle.</p>

<h2>When Excel wins</h2>

<p><strong>Multi-column dedup:</strong> you need to remove rows where columns A, B, AND C are all identical — but rows where only A and B match should be kept. Excel's Remove Duplicates lets you select which columns to consider. Browser dedup tools work on one column at a time. For relational dedup, use a spreadsheet or database.</p>

<p><strong>Dedup with aggregation:</strong> you have duplicate customer entries and need to merge them — sum the purchase amounts, keep the most recent contact date, concatenate the notes. This is not dedup; it is dedup with aggregation. Excel (Power Query) or SQL handles this. Browser dedup tools only dedup.</p>

<p><strong>Large datasets (100K+ rows):</strong> browser tools process text in memory. Paste 200,000 lines and the browser tab may freeze. Excel handles millions of rows. For large datasets, use the right tool for the scale.</p>

<p><strong>Data you are already working with in a spreadsheet:</strong> if the data is already in Excel and you are doing other spreadsheet operations, use Excel's dedup. Switching to a browser tool mid-workflow costs more in context switching than it saves in clicks.</p>

<h2>The dedup edge cases that break both tools</h2>

<p><strong>Whitespace differences:</strong> "hello" and "hello " (trailing space) are different strings. The browser tool and Excel both treat them as unique. Solution: trim whitespace before dedup. Most browser tools have a trim option; in Excel, use =TRIM() first.</p>

<p><strong>Line ending differences:</strong> Windows (CR+LF), Mac (LF), Linux (LF) — a list pasted from a Windows text file might have invisible carriage returns. These make otherwise identical lines look different to the dedup algorithm. Solution: normalize line endings first. Good browser tools handle this automatically.</p>

<p><strong>Unicode normalization:</strong> "café" can be represented as "café" (single character) or "cafe" + combining accent (two characters). They look identical but are different strings. Most dedup tools do not normalize Unicode. Solution: if you are working with accented or non-Latin text, verify the dedup result manually on a sample before trusting it on the full dataset.</p>

<p>For converting deduplicated lists between formats, our <a href="/en/tools/json-to-csv">JSON to CSV converter</a> handles format conversion. For counting how many duplicates were removed, our <a href="/en/tools/word-counter">word counter</a> shows before and after line counts. And for a guide to text cleaning, see our <a href="/en/blog/remove-duplicate-lines-from-text">remove duplicate lines from text guide</a>.</p>
`,
  },
  {
    slug: "fancy-text-generator-vs-custom-font",
    title: "Fancy Text Generator vs Custom Web Font — Unicode Styles That Work Everywhere vs Fonts That Break on Half Your Audience's Devices",
    description: "A custom font looks perfect on your machine and broken on 30% of your audience's devices. Unicode fancy text renders identically everywhere — Instagram, Twitter, email subject lines, even plain text files. Here's the tradeoff.",
    date: "2026-06-30",
    category: "Text",
    tags: ["fancy text", "Unicode styles", "custom font", "text styling", "Instagram fonts"],
    relatedTools: ["fancy-text-generator", "case-converter", "translate"],
    content: `
<p>You find a beautiful custom font for your Instagram bio. You install it, type your bio, screenshot it, post it. It looks amazing. Then someone opens your profile on an Android phone that does not have that font installed. They see a fallback font — probably Arial or Roboto — that completely changes the spacing, the weight, and the vibe of your carefully designed bio. Your font choice reached exactly one person: you. Everyone else saw the fallback.</p>

<p>Our <a href="/en/tools/fancy-text-generator">fancy text generator</a> creates styled text using Unicode characters — not fonts. Unicode text renders identically on every device, every app, every platform. Here is the tradeoff between Unicode styles and custom fonts, and why Unicode wins for anywhere you cannot control the rendering environment.</p>

<h2>Unicode styles vs fonts: the fundamental difference</h2>

<p><strong>Fonts are software:</strong> a font file (.ttf, .otf, .woff2) contains instructions for how to draw each character. If the reader's device has the font installed (or the website loads it), they see your intended style. If not, they see a fallback. On the web, you can load custom fonts with @font-face — but this adds 50-200KB to your page load, may be blocked by ad blockers or corporate firewalls, and does not work in email, messaging apps, or social media bios.</p>

<p><strong>Unicode styles are characters:</strong> Unicode contains pre-styled character variants in specific blocks. 𝔗𝔥𝔦𝔰 is not "This" in a fancy font — it is a sequence of Mathematical Fraktur characters (U+1D513 through U+1D522). They are regular Unicode characters, just in a different code block. Any system that supports Unicode (all modern systems) renders them correctly — no font file needed, no fallback, no compatibility issues.</p>

<p><strong>The tradeoff:</strong> Unicode styles are limited to the character sets defined in the Unicode standard (bold, italic, bold italic, script, fraktur, monospace, circled, squared, and a few others — maybe 20 styles total). Custom fonts give you unlimited styles — but only for the subset of your audience whose devices can render them. Unicode gives you 20 styles that work for 100% of your audience. Fonts give you unlimited styles that work for 60-90% of your audience. Choose based on reach vs variety.</p>

<h2>Where Unicode fancy text wins (every time)</h2>

<p><strong>Social media bios and posts:</strong> Instagram, Twitter, TikTok, LinkedIn — none let you change fonts. All support Unicode. A Unicode-styled bio renders correctly on every device. A font-based bio (screenshot as image) is not searchable text, not accessible to screen readers, and looks blurry on high-DPI screens.</p>

<p><strong>Email subject lines:</strong> email clients strip custom fonts from subject lines. Unicode characters survive. A 𝕭𝖔𝖑𝖉 subject line renders bold in Gmail, Outlook, Apple Mail, and every other client. Use sparingly — overusing fancy text in subject lines triggers spam filters and looks desperate. One styled word for emphasis works; an entire styled subject line does not.</p>

<p><strong>Messaging apps:</strong> WhatsApp, Telegram, Signal, iMessage — Unicode works. Custom fonts do not. If you want to send a styled message that looks the same on the recipient's phone as it does on yours, Unicode is the only option.</p>

<p><strong>Plain text environments:</strong> .txt files, code comments, terminal output, CSV files — these have no font support at all. Unicode fancy text is the only way to add visual hierarchy to plain text. Use bold Unicode for headers, italic for emphasis, monospace for code — all in a .txt file.</p>

<h2>Where custom fonts still win</h2>

<p><strong>Brand identity on your own website:</strong> your brand font is part of your visual identity. Unicode cannot replicate your brand's custom typeface. Load your brand font with @font-face on your website — the performance cost is worth the brand consistency. But provide a reasonable fallback stack for the 5-10% of visitors whose browsers or networks block custom fonts.</p>

<p><strong>Print design:</strong> Unicode fancy text is screen-only. Print requires actual fonts with proper kerning, ligatures, and weight variations. Do not use Unicode mathematical letters in a printed document — the spacing will be wrong and the result will look amateurish.</p>

<p><strong>Long-form reading:</strong> more than 1-2 words of Unicode fancy text is hard to read. The characters are designed for mathematical notation, not reading. Screen readers may spell out Mathematical Fraktur characters letter by letter instead of reading them as words — an accessibility disaster. Use fancy text for short emphasis (headlines, bios, captions), not for body text.</p>

<p>For converting fancy text between cases, our <a href="/en/tools/case-converter">case converter</a> handles uppercase, lowercase, and title case. For translating fancy text (Unicode survives translation), our <a href="/en/tools/translate">online translator</a> preserves Unicode styling. And for a guide to Unicode text styles, see our <a href="/en/blog/what-is-fancy-text-generator">what is fancy text generator guide</a>.</p>
`,
  },
  {
    slug: "roi-calculator-irr-payback-period-difference",
    title: "What ROI Actually Measures — The Difference Between ROI, IRR, and Payback Period and When to Use Each",
    description: "ROI says your investment returned 50%. IRR says it returned 18% annually. Payback period says you'll break even in 3 years. They are all 'right' — here's what each metric actually tells you and which to use.",
    date: "2026-06-30",
    category: "Calculator",
    tags: ["ROI", "IRR", "payback period", "investment metrics", "return on investment"],
    relatedTools: ["roi-calculator", "compound-interest", "percentage-calculator"],
    content: `
<p>You invest $10,000 in a side business. After 3 years, you have made $15,000 in profit. Your ROI is 150% — sounds great. Your IRR is about 36% annually — also great. Your payback period was 2 years. Three different numbers, all describing the same investment, all technically correct. Which one should you use when someone asks "was it worth it?" The answer: it depends on what you are comparing it to. Each metric answers a different question.</p>

<p>Our <a href="/en/tools/roi-calculator">free ROI calculator</a> computes return on investment. But ROI is one of several metrics, and using the wrong one leads to bad decisions. Here is what each metric actually measures, when to use each, and how to avoid the most common metric-manipulation tricks.</p>

<h2>ROI (Return on Investment): the simplest metric, the easiest to manipulate</h2>

<p><strong>Formula:</strong> (Gain - Cost) / Cost × 100. A $10,000 investment that returns $15,000 has an ROI of 50%.</p>

<p><strong>What it tells you:</strong> how much total return you got relative to what you put in. Simple, intuitive, universally understood.</p>

<p><strong>What it hides:</strong> time. A 50% ROI over 1 year is excellent. A 50% ROI over 20 years is terrible (about 2% annualized). ROI without a time period is meaningless — but most people report ROI without specifying the time period. This is the most common metric manipulation: "Our fund returned 80%!" (over 15 years — about 4% annually, which is below market average).</p>

<p><strong>When to use:</strong> comparing investments of different sizes over the same time period. $1,000 returning $1,500 (50% ROI) vs $10,000 returning $13,000 (30% ROI) — both over 1 year. The smaller investment had a higher ROI. But if the time periods differ, ROI is the wrong metric.</p>

<h2>IRR (Internal Rate of Return): the metric that accounts for time</h2>

<p><strong>What it tells you:</strong> the annualized return rate, accounting for the timing of every cash flow. If you invested $10,000, received $3,000 after year 1, $5,000 after year 2, and $7,000 after year 3, your IRR is about 20% — meaning the investment grew at roughly 20% per year, compounding.</p>

<p><strong>Why it is better than ROI for multi-year investments:</strong> IRR accounts for when money goes in and when it comes out. Two investments with the same total ROI can have very different IRRs if one returned money faster. Money returned in year 1 is worth more than money returned in year 5 (you can reinvest it). IRR captures this; ROI does not.</p>

<p><strong>When to use:</strong> comparing investments with different time horizons. A 3-year investment with 50% ROI vs a 5-year investment with 60% ROI — which is better? ROI says the 60% one. IRR might show the 3-year one was better (higher annualized return). Always use IRR (or CAGR for simple cases) when comparing investments of different durations.</p>

<h2>Payback Period: the metric that measures risk, not return</h2>

<p><strong>What it tells you:</strong> how long until you get your original investment back. Invest $10,000, earn $5,000/year profit — payback period is 2 years.</p>

<p><strong>Why it matters:</strong> payback period measures risk, not return. A shorter payback period means you recover your money faster, which means less exposure to things going wrong. Two investments might have the same ROI and IRR, but the one with the 1-year payback is less risky than the one with the 5-year payback — you can walk away sooner if conditions change.</p>

<p><strong>When to use:</strong> evaluating risk, especially for small businesses and side projects. "How long until I get my money back if this goes wrong?" is a different question from "how much will I make if this goes right?" Payback period answers the first question. ROI and IRR answer the second. Both questions matter.</p>

<h2>The metric manipulation playbook (what to watch for)</h2>

<p><strong>ROI without time period:</strong> "200% ROI!" (over 30 years = 3.7% annualized). Always ask "over what time period?" If they will not say, they are hiding weak annualized returns.</p>

<p><strong>ROI on revenue, not profit:</strong> "We generated $1M in revenue on a $100K investment — 900% ROI!" Revenue is not profit. If costs were $900K, the actual ROI is 100%. Always check whether "return" means revenue or profit.</p>

<p><strong>IRR with unrealistic reinvestment assumption:</strong> IRR assumes you can reinvest interim cash flows at the same rate. If an investment shows 40% IRR, it assumes you can reinvest the year-1 returns at 40% too — which may not be realistic. For investments with very high IRRs, use MIRR (Modified IRR) which assumes a more realistic reinvestment rate.</p>

<p><strong>Cherry-picked time periods:</strong> "The fund returned 25% last year!" (It returned -10% the year before and 5% the year before that. The 5-year average is 8%.) Always ask for multi-year performance, not single-year highlights.</p>

<p>For modeling compound growth over time, our <a href="/en/tools/compound-interest">compound interest calculator</a> shows how regular investments grow. For quick percentage calculations, our <a href="/en/tools/percentage-calculator">percentage calculator</a> handles ROI math. And for a guide to ROI calculations, see our <a href="/en/blog/roi-calculator-vs-manual-spreadsheet">ROI calculator vs spreadsheet comparison</a>.</p>
`,
  },

];

export function getBlogPosts(): BlogPost[]"""

if old in content:
    content = content.replace(old, new_blogs)
    with open(BLOG_FILE, "w", encoding="utf-8") as f:
        f.write(content)
    print("OK: 6 blogs inserted into free station blog.ts (124→130)")
else:
    print("ERROR: insertion marker not found")
    idx = content.rfind("];")
    print(f"Last '];' at index: {idx}")
