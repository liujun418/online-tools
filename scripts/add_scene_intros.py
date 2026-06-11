"""Add sceneIntro to all tools in tools.ts"""
import re

PATH = "C:/Users/jun/online-tools/src/lib/tools.ts"
with open(PATH, encoding="utf-8") as f:
    ts = f.read()

SCENE_INTROS = {
    "word-counter": "You paste an essay into the input box. Three seconds later you know: 1,487 words. Thirteen short of the minimum. You add a sentence and submit. No opening Google Docs, no copy-pasting between apps — just paste and see your counts instantly.",
    "case-converter": "Someone sent you an email IN ALL CAPS. You need it in normal case before replying. Or you wrote camelCase but the API wants snake_case. Instead of retyping everything, you paste and click one button.",
    "text-repeater": "You need to generate 200 lines of test data for a load test. Or print a page of labels. Or fill a database column with placeholder text. Typing it manually is absurd. This does it in one click.",
    "text-diff": "Your coworker edited the config file without telling you what they changed. You have the old version and the new version. Paste both and see every addition, deletion, and modification highlighted line by line.",
    "text-to-slug": "Your blog title is 'How to Build a REST API in Python (2026 Guide)'. You need the URL slug: 'how-to-build-a-rest-api-in-python-2026-guide'. This converts it instantly — lowercase, hyphens, no special characters.",
    "remove-duplicate-lines": "You have a list of 5,000 email addresses and you need to know how many are unique. Or you are deduplicating log entries. Paste the list and the duplicates disappear. Sort, deduplicate, done.",
    "lorem-ipsum": "You are building a landing page layout but the copy is not ready yet. You need realistic text to fill the space so you can see the design. Generate paragraphs, sentences, or words — just enough to test the layout.",
    "json-formatter": "An API returned 3,000 characters of JSON on a single line. Somewhere in there is the field you need. Paste it here, and suddenly you have a collapsible tree view with indentation and line numbers. Also catches missing commas and trailing commas.",
    "base64-converter": "You are reading a JWT token and need to see what is inside the payload. Or you need to embed a tiny icon as a data URI. Base64 encode and decode in both directions — standard and URL-safe.",
    "url-encoder": "Your link has Chinese characters and spaces. Some browsers handle it. Many do not. Encode it to percent-format and it works everywhere. Also decodes: paste a percent-encoded URL to see the original.",
    "html-entities": "You are writing a code tutorial and need to display <div> as text without the browser rendering it. Encode the angle brackets into HTML entities. Going the other way? Decode <code>&amp;lt;</code> back to <.",
    "css-minifier": "Your CSS file is 50KB of whitespace and comments. Before deploying to production, strip everything unnecessary. Paste formatted CSS, get a single compressed line. Smaller file, faster load time.",
    "hash-generator": "You downloaded a 2GB ISO and the website shows a SHA-256 checksum. You need to verify the file was not corrupted or tampered with. Generate the hash of your download and compare it side by side with the published one.",
    "md5-generator": "You need a quick, lightweight hash for cache invalidation or duplicate detection. MD5 is not for passwords or security, but it is fast and reliable for data integrity checks. Generate a 32-character hex string instantly.",
    "uuid-generator": "You need a unique ID. Not a sequential number someone can guess — a proper random identifier. One click gives you a v4 UUID. Click again for another. Use it for database keys, file names, or request tracking.",
    "password-generator": "Your dog's name plus 123 is not a strong password. Neither is anything you can think of yourself — humans are terrible at randomness. Generate a truly random password with the length and character types you need.",
    "regex-tester": "You wrote a regex and it works on your machine. But will it match the edge cases? Paste your pattern and test text. Matches highlight in real time. See groups, positions, and what your regex actually captures.",
    "markdown-preview": "You are writing a README and want to see it rendered before pushing to GitHub. Write Markdown on the left, see the formatted output on the right. Catch broken tables, missing heading spaces, and unclosed code blocks before anyone sees them.",
    "unix-timestamp": "An API timestamp is '1715299200' and you need to know what date that is. Or you need the current Unix timestamp for an API call. Convert between human-readable dates and epoch seconds in both directions.",
    "base-converter": "You are reading a hex dump and need to convert to decimal. Or working with binary data and need octal. Base converter handles binary, octal, decimal, and hex — plus custom bases from 2 to 36.",
    "ip-lookup": "You got a security alert about a login from an unfamiliar IP address. Is it a VPN server? A different country? Or your neighbor? Look up the IP to see approximate location, ISP, and connection type.",
    "csv-to-json": "Someone sent you a CSV with 5,000 rows and asked for it in JSON. You could write a Python script. Or you could paste it here and be done in 5 seconds. Auto-detects data types so numbers stay numbers.",
    "json-to-csv": "An API returned a JSON array and you need to open it in Excel. Paste the JSON, get a CSV. Nested objects are flattened with dot notation. The reverse of CSV to JSON.",
    "image-to-base64": "You need a tiny icon embedded directly in your HTML — no separate file, no extra HTTP request. Drop your image and get a Base64 data URI string ready to paste into an img tag or CSS background.",
    "qr-code-generator": "You want guests to connect to your WiFi without asking for the password. Or share your contact info at a networking event without typing. A QR code encodes text, URLs, or WiFi credentials into a scannable square. Print it, share it, done.",
    "bmi-calculator": "You want a quick health snapshot. Enter your height and weight. The calculator tells you your BMI and which category you fall into. It is one data point — not a diagnosis — but a useful starting point.",
    "calorie-calculator": "You are tracking what you eat and want to know how many calories are in today's meals. Pick foods from the list, set portions, and see the total. Useful for meal planning and nutritional awareness.",
    "loan-calculator": "The dealer gave you a monthly payment that sounds reasonable. But what is the actual cost? Enter the loan amount, rate, and term to see monthly payment, total interest, and an amortization schedule breaking down every payment.",
    "mortgage-calculator": "You are house shopping and want to know the real monthly cost — not just principal and interest, but property tax and insurance too. This calculator shows the full picture so you are not surprised by the actual payment.",
    "compound-interest": "You put $5,000 in an account earning 4% interest. What will it be worth in 10 years if you add $200 a month? This calculator shows how compound interest turns small regular investments into real money over time.",
    "percentage-calculator": "What is 15% of $87.50? What percentage is 45 of 200? That restaurant bill with tax and tip — what is the total? The percentage calculator answers these in one input.",
    "discount-calculator": "That jacket is 40% off, marked down from $85. What is the final price? And with 8% sales tax? Enter the original price, discount, and tax rate to see exactly what you will pay.",
    "tip-calculator": "The bill arrived. $73.40 for dinner. How much do you tip? 15%? 20%? Split between 3 people? Enter the amount, pick a percentage, choose the number of people, and everyone knows what they owe.",
    "roi-calculator": "You invested $2,000 in a project and it returned $3,500. What was your ROI? 75%. Enter any investment and return to see the percentage gain or loss instantly.",
    "income-tax-calculator": "Your salary is $75,000. How much goes to federal income tax? Enter your gross income and filing status. The calculator applies US tax brackets and the standard deduction to estimate your tax.",
    "age-calculator": "How old is someone born on March 15, 1982? Enter any birth date and get the exact age in years, months, and days. Also shows the next birthday countdown and the day of the week they were born.",
    "pregnancy-calculator": "Expecting? Enter the first day of your last period to estimate your due date. See which trimester you are in and get week-by-week development milestones.",
    "unit-converter": "A British recipe says 180°C and your oven uses Fahrenheit. It also says 200g flour and your scale is in ounces. Stop Googling each conversion one at a time. Length, weight, temperature, volume, area, speed, time — all in one place.",
    "color-converter": "Figma gives you HEX. Your CSS needs RGB for a box-shadow with transparency. Your designer wants HSL to tweak saturation. See all three formats at once with a live preview picker.",
    "roman-numerals": "What year is MMXXVI? Or you need to write 2026 in Roman numerals for a tattoo or a clock face. Convert between Arabic numbers and Roman numerals in both directions.",
    "morse-code": "What does SOS sound like? Or you want to write a message in Morse code. Convert text to dots and dashes and back. Also plays the audio so you can hear the pattern.",
    "zodiac-sign": "Born on August 12? You are a Leo. Enter any date to find the zodiac sign. Also shows the element, ruling planet, and personality traits associated with that sign.",
    "random-number-generator": "Need a random number between 1 and 100? Or 100 numbers for a raffle? Pick your range, set the count, and generate. Uses cryptographically random values when available.",
    "random-name-generator": "Need a character name for your novel? Or a placeholder username for testing? Generate random first and last names. Pick gender, set the count, and get a list.",
    "coin-flip": "Heads or tails? Flip a virtual coin to settle decisions, start a game, or teach probability. Watch the 3D spinning animation. See your flip history — heads count, tails count, and total.",
    "food-picker": "Can not decide what to eat? Pick a category, spin the card, and the food picker chooses for you. Block foods you do not like so they do not appear again. Includes 60+ Western meals.",
    "book-of-answers": "You have a question and want a different perspective. Concentrate on your question, click to open the book, and read a random thoughtful response from 500+ curated answers. Not a yes/no oracle — a thinking tool.",
    "lateral-thinking": "You love mystery puzzles. Read a scenario that seems impossible. Make guesses, get hints, and eventually reveal the surprising truth. Each puzzle is AI-generated so you get fresh scenarios every time.",
    "quotes": "You need a quote for a speech, a presentation, or a social media post. Browse 500+ famous quotes organized by theme — courage, wisdom, love, success. Search by author, keyword, or category.",
    "random-quote": "One click, one quote. For daily inspiration without scrolling through categories. Each click pulls a random quote from the collection. Simple and fast.",
    "life-hacks": "You want to clean your microwave without scrubbing. Or remove a stain from a shirt. Or organize a messy drawer. Browse 100 practical tips across cleaning, kitchen, storage, laundry, and home maintenance.",
    "hashtag-generator": "You posted a photo and need the right hashtags to reach your audience. Enter a keyword or topic, and get a list of relevant, popular hashtags for Instagram, Twitter, or TikTok.",
    "fancy-text-generator": "You want your bio to stand out with 𝓯𝓪𝓷𝓬𝔂 text or 𝔻𝕠𝕦𝕓𝕝𝕖 𝕤𝕥𝕣𝕦𝕔𝕜 letters. Type normal text and see it in multiple decorative Unicode styles. Copy and paste anywhere.",
    "translate": "You got a message in French. Or you need to write back in Spanish. Paste your text, pick source and target languages (100+ available), and see the translation instantly.",
    "scoreboard": "Game night. Everyone needs to see the score. Open this on the TV or a tablet. Tap to add or subtract points. Large numbers visible across the room. No paper scorecard to lose.",
    "reaction-test": "How fast are your reflexes? Click when the color changes and see your time in milliseconds. Compare with friends or track your improvement over time.",
    "perpetual-calendar": "What day of the week was July 15, 1982? Or what date is the third Friday of September 2027? Pick any month from any year (1-9999) and see the full calendar instantly.",
    "time-screen": "You want a clean clock on your second monitor. No notifications, no widgets — just the time in large digits. Open this, go full screen, and leave it running. Dark or light background.",
    "fullscreen-text": "You need to display a message on a screen. A 'Recording in Progress' sign on your office door. A welcome message at an event. A price display on a tablet. Type your text, pick colors, and go full screen.",
    "bing-wallpaper": "That beautiful Bing homepage image today — you want it as your desktop wallpaper. Browse recent daily wallpapers, see the story behind each image, and download in full resolution.",
    "nasa-apod": "Every day NASA publishes one stunning astronomy image with an astronomer's explanation. See today's picture, browse the archive, and read the science behind each image.",
    "pet-wallpaper": "You want a cute animal photo as your wallpaper. Browse high-quality pet images. Pick your favorite, download, and set as your background.",
    "global-weather": "You are traveling next week and want to know what the weather will be like. Search any city worldwide. See current conditions, temperature, humidity, wind speed, and a 7-day forecast.",
    "world-map": "You want to look up a location or explore geography. An interactive world map with zoom and pan. Search for cities, countries, or landmarks and see them on the map.",
    "crypto-price": "What is Bitcoin trading at right now? Track live cryptocurrency prices including BTC, ETH, SOL, and more. See USD price, 24-hour change, and market cap. Powered by CoinGecko.",
    "gif-search": "You need a reaction GIF for a Slack message. Search millions of trending GIFs from GIPHY. Keyword search, grid preview, one-click download or copy link.",
    "youtube-thumbnail": "You need a thumbnail from a YouTube video for a reference, a presentation, or a blog post. Paste the video URL and get the thumbnail in multiple resolutions. Download the one you need.",
    "ai-tools": "You heard about AI tools but do not know where to start. This page curates free and paid AI-powered tools for image editing, content creation, and more — all organized by category.",
}

# Add sceneIntro to each tool
for tool_id, intro in SCENE_INTROS.items():
    # Find the tool by id and add sceneIntro after the path or description
    pattern = rf'(id:\s*"{tool_id}".*?icon:.*?)$'
    # More reliable: find the tool block and add sceneIntro before howToUse or faq
    pattern2 = rf'(id:\s*"{tool_id}".*?)(howToUse:\s*\[)'
    m = re.search(pattern2, ts, re.DOTALL)
    if m:
        # Check if sceneIntro already exists
        block = ts[m.start():m.end()]
        if 'sceneIntro:' in block:
            continue
        insert = f'sceneIntro: "{intro}",\n    '
        ts = ts[:m.start(2)] + insert + ts[m.start(2):]
        print(f'  OK: {tool_id}')
    else:
        print(f'  NOT FOUND: {tool_id}')

with open(PATH, "w", encoding="utf-8") as f:
    f.write(ts)
print(f"Done. {len(SCENE_INTROS)} tools updated")
