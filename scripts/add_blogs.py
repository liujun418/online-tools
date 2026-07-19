"""Add 6 blogs to free station (230→236) — July 19, 2026"""
import os, sys

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "calendar-date-planning-event-scheduling-guide",
    title: "Perpetual Calendar Date Planning Guide How to Schedule Events Plan Deadlines and Calculate Future Dates Beyond the Current Year",
    description: "You need to know what day of the week June 15, 2032 falls on. Your phone calendar only goes to 2030. A perpetual calendar handles any date — past or future. Here's how to use it for long-range planning.",
    date: "2026-07-19",
    category: "Reference",
    tags: ["calendar", "date planning", "scheduling", "perpetual", "long-range"],
    relatedTools: ["perpetual-calendar", "age-calculator", "unix-timestamp"],
    content: `<p>You are planning a 10-year anniversary event. The anniversary is June 15, 2032. You need to know: what day of the week is June 15, 2032? (It is a Tuesday — book the venue accordingly.) Your phone calendar only reaches 2030. Your project management software only handles recurring events within the current year. You need a <a href="/en/tools/perpetual-calendar">perpetual calendar</a> — a tool that calculates the day of the week for any date, past or future, with no range limit.</p>

<p>A perpetual calendar is not just for looking up historical dates. It is a <strong>long-range planning tool</strong>. Here is how to use it for scheduling, deadline calculation, and date planning beyond the current year.</p>

<h2>Why Standard Calendars Fail at Long-Range Planning</h2>

<p>Digital calendars (Google Calendar, Outlook, Apple Calendar) have practical limits: they typically support dates up to 2030-2038, they struggle with events that span decades, and they are designed for recurring events within the current year ("every Tuesday"), not for one-time events years in the future. A perpetual calendar has no range limit. It calculates the day of the week for any date using the Gregorian calendar rules — including the 400-year leap year cycle. June 15, 2032? Tuesday. January 1, 2100? Friday (and not a leap year — 2100 is divisible by 100 but not by 400). The perpetual calendar knows the rules. The standard calendar knows the current year.</p>

<h2>Practical Long-Range Planning Uses</h2>

<p><strong>Event planning:</strong> Weddings, anniversaries, reunions. You want to book a venue 2-3 years in advance. The venue asks: "What day of the week?" You need to know before you can negotiate pricing. Saturdays cost more than Tuesdays. The perpetual calendar tells you the day of the week for any future date. You can plan the date around the budget.</p>

<p><strong>Deadline calculation:</strong> Contracts, legal agreements, regulatory compliance. A contract says "within 90 days of the effective date." What is the exact date 90 days from October 15, 2026? The perpetual calendar calculates it: January 13, 2027 — a Wednesday. You can calculate any deadline from any starting date. The calendar handles the math. You handle the compliance.</p>

<p><strong>Birthday and anniversary tracking:</strong> You want to know what day of the week your 50th birthday will fall on. Your 100th birthday. Your 200th birthday (the perpetual calendar can calculate it, even though you will not be there). The calendar satisfies curiosity and enables planning for milestone events years in advance.</p>

<p><strong>Historical research:</strong> You read that a historical event occurred on "Tuesday, March 15, 1927." The perpetual calendar confirms it: March 15, 1927 was indeed a Tuesday. The calendar verifies historical dates and helps researchers establish timelines.</p>

<h2>The Math Behind the Calendar</h2>

<p>The perpetual calendar uses modular arithmetic: calculate the number of days between a known reference date (January 1, 1900 was a Monday) and the target date, accounting for leap years using the Gregorian rule, divide by 7, and take the remainder. Remainder 0 = same day as reference. Remainder 1 = next day. The math is simple. The leap year rules are the complexity. The perpetual calendar handles both. The <a href="/en/tools/perpetual-calendar">perpetual calendar tool</a> does the math instantly. You enter the date. It tells you the day. No manual calculation. No range limit. Any date. Past or future.</p>`
  },
  {
    slug: "stopwatch-timer-interval-training-athletic-performance",
    title: "Stopwatch and Timer for Interval Training How Athletes Use Precision Timing to Optimize Workouts and Track Performance Gains",
    description: "High-intensity interval training requires precise work/rest ratios — 30 seconds on, 15 seconds off, repeat. A stopwatch and timer with interval mode handles this. Here's the athletic training guide.",
    date: "2026-07-19",
    category: "Fun & Media",
    tags: ["stopwatch", "timer", "interval training", "athletic", "performance"],
    relatedTools: ["stopwatch-and-timer", "scoreboard", "reaction-test"],
    content: `<p>You are doing high-intensity interval training (HIIT). The protocol: 30 seconds of maximum effort, 15 seconds of rest, repeat 8 times. You start the workout. You try to track the intervals by glancing at the clock on the wall. After the second interval, you lose count. After the fourth, you cannot remember if you are on interval 4 or 5. You rest too long between intervals because you are not tracking the rest period precisely. The workout is supposed to be 8 intervals of 30/15. It becomes "some intervals of approximately 30/20-ish." The precision is lost. The training effect is diminished.</p>

<p>A <a href="/en/tools/stopwatch-and-timer">stopwatch and timer</a> with interval tracking eliminates the guesswork. Set the work period. Set the rest period. Set the number of intervals. The timer handles the rest. You handle the effort. Here is the interval training guide for athletes and fitness enthusiasts.</p>

<h2>Why Precision Timing Matters for Training</h2>

<p>Interval training works by manipulating the <strong>work-to-rest ratio</strong>. Different ratios target different energy systems: 1:1 ratio (30s work, 30s rest) — aerobic endurance, 2:1 ratio (30s work, 15s rest) — lactate threshold, 3:1 or higher (45s work, 15s rest) — anaerobic power. The ratio determines the training effect. If the rest period is too long, the training effect shifts from anaerobic to aerobic. If the rest period is too short, the athlete cannot complete the intervals at the target intensity. The precision of the timing determines the precision of the training effect.</p>

<p>A timer that enforces the exact work/rest ratio ensures: the training effect matches the intended goal, the athlete can track progress over time (consistent intervals = comparable workouts), and the workout is reproducible (the same protocol produces the same training stimulus).</p>

<h2>Common Interval Training Protocols</h2>

<p><strong>Tabata:</strong> 20 seconds work, 10 seconds rest, 8 rounds (4 minutes total). One of the most researched HIIT protocols. Targets maximum aerobic and anaerobic capacity. The 20/10 split is unforgiving — the timer is essential.</p>

<p><strong>30/15 HIIT:</strong> 30 seconds work, 15 seconds rest, 8-12 rounds. A balanced protocol that builds both aerobic and anaerobic fitness. The 2:1 ratio is the most versatile for general fitness.</p>

<p><strong>Sprint intervals:</strong> 15-30 seconds maximum sprint, 2-4 minutes rest (full recovery), 6-10 rounds. The long rest period allows full recovery between sprints. The goal is maximum speed on every interval. The timer ensures the rest period is long enough for full recovery.</p>

<p><strong>EMOM (Every Minute on the Minute):</strong> Complete a set amount of work at the start of each minute. Rest for the remainder of the minute. The work time shrinks as you fatigue. The timer enforces the minute boundary. EMOM is self-regulating — the work is fixed, the rest adjusts to your fitness level.</p>

<h2>Using the Stopwatch for Performance Tracking</h2>

<p>The stopwatch mode is for: time trials (how fast can you complete a fixed distance or workout?), benchmark workouts (tracking the same workout over time to measure improvement), and rest periods between sets (enforcing consistent rest between strength training sets). The timer mode is for intervals. The stopwatch mode is for continuous effort. The <a href="/en/tools/stopwatch-and-timer">stopwatch and timer</a> supports both. Use the timer for structured intervals. Use the stopwatch for tracking continuous performance. The precision of the timing determines the quality of the training. The quality of the training determines the rate of improvement.</p>`
  },
  {
    slug: "free-translator-browser-extension-vs-website-workflow",
    title: "Free Online Translator Browser Extension vs Website Tool Which Translation Workflow Is Faster for Different Types of Content",
    description: "A browser extension translates web pages inline. A website translator handles long-form documents and custom text. Both are free. Both use the same AI. But the workflow is completely different.",
    date: "2026-07-19",
    category: "Text Tools",
    tags: ["free translator", "browser extension", "workflow", "comparison", "productivity"],
    relatedTools: ["translate", "text-to-slug", "word-counter"],
    content: `<p>You need to translate a Spanish news article. You could: right-click in your browser and select "Translate to English" — the extension translates the entire page inline, preserving the formatting. Or you could copy the text, paste it into a <a href="/en/tools/translate">free online translator</a>, and read the translation alongside the original. Both are free. Both use neural machine translation. Both produce the same translation quality. But the <strong>workflow</strong> is completely different — and the right choice depends on what you are translating and why.</p>

<p>Here is when to use each translation workflow, and how to combine them for different types of content.</p>

<h2>Browser Extension Translation: Inline, Instant, Immersive</h2>

<p>Browser-based translation (Chrome's built-in translator, browser extensions) translates entire web pages inline — the translated text replaces the original on the page. The formatting is preserved. The images are preserved. The layout is preserved. You read the translated page as if it were originally written in your language.</p>

<p>Best for: reading foreign-language news articles and blog posts (you want to consume the content, not study the language), browsing foreign-language websites (shopping, research, travel planning), and getting the gist of a page quickly (the inline translation is fast — one click, and the entire page is translated).</p>

<p>Worst for: comparing original and translation (the original text is hidden — you cannot see both versions side by side), copying and saving the translation (the translated text is ephemeral — it disappears when you refresh the page), and translating custom text (you cannot paste your own text into a browser extension — it only translates pages).</p>

<h2>Website Translator Tool: Deliberate, Side-by-Side, Customizable</h2>

<p>A website-based <a href="/en/tools/translate">free online translator</a> is a dedicated tool: you paste text into the input box, select the source and target languages, and the translation appears in the output box. The original and translation are visible side by side. You can edit the input. You can copy the output. You can translate any text — not just web pages.</p>

<p>Best for: translating specific text (emails, documents, messages, custom content), comparing original and translation (side-by-side view for language learning or verification), and translating long-form content (paste an entire document and get a complete translation).</p>

<p>Worst for: translating entire web pages (you have to copy and paste the content manually — the browser extension does this automatically), and quick browsing (opening a separate tab and pasting text is slower than inline translation).</p>

<h2>The Hybrid Workflow: Use Both</h2>

<p>Use the browser extension for: browsing and discovering content in foreign languages. When you find a page worth reading in detail, use the website translator for: deep reading and comparison. The extension is for exploration. The website tool is for study. The extension handles the 90% of translations where you just need the gist. The website tool handles the 10% where you need precision, comparison, or a saved copy of the translation.</p>

<p>Both tools are free. Both use the same neural machine translation technology. The difference is the workflow. Use the right workflow for the right task. Translate at <a href="/en/tools/translate">free online translator</a> — for when you need more than inline translation.</p>`
  },
  {
    slug: "json-to-csv-vs-csv-to-json-data-conversion-round-trip",
    title: "JSON to CSV vs CSV to JSON The Data Conversion Round Trip — What Gets Lost When You Convert Between Formats and Why the Original Is Always Better",
    description: "You convert JSON to CSV for Excel analysis, then back to JSON for your API. The round trip is lossy — nested objects flatten, arrays become strings, and types disappear. Here's what gets lost in each direction.",
    date: "2026-07-19",
    category: "Developer",
    tags: ["JSON to CSV", "CSV to JSON", "data conversion", "round trip", "lossy"],
    relatedTools: ["json-to-csv", "csv-to-json", "json-formatter"],
    content: `<p>You receive a JSON file from an API: 2,000 customer records, each with nested objects (address, preferences, order history) and typed fields (dates, numbers, booleans). You need to analyze the data in Excel. Excel does not read JSON natively. You use a <a href="/en/tools/json-to-csv">JSON to CSV converter</a> to flatten the JSON into a CSV file. The CSV opens in Excel. You analyze the data. You make changes. You convert the CSV back to JSON with a <a href="/en/tools/csv-to-json">CSV to JSON converter</a>. The round-trip JSON looks different from the original. The nested objects are gone — flattened into dot-notation keys. The types are gone — everything is a string. The arrays are gone — converted to comma-separated strings. The round trip was <strong>lossy</strong>. Information was destroyed in both directions.</p>

<p>Here is exactly what gets lost when you convert between JSON and CSV — and why the original JSON is always better than the round-tripped version.</p>

<h2>JSON → CSV: What Gets Lost</h2>

<p><strong>Nested objects:</strong> JSON supports nested structures — objects within objects, objects within arrays. CSV is a flat table — rows and columns. Nested objects are flattened using dot notation: <code>{"user": {"name": "John", "address": {"city": "NYC"}}}</code> becomes columns <code>user.name</code> and <code>user.address.city</code>. The structure is represented. The hierarchy is lost. You cannot reconstruct the original nesting from the flattened keys — the converter guesses at the structure, and the guess might be wrong.</p>

<p><strong>Arrays:</strong> JSON supports arrays — ordered lists of values. CSV does not. Arrays are converted to comma-separated strings: <code>[1, 2, 3]</code> becomes <code>"1,2,3"</code>. The array is represented as a string. The types of the elements are lost. The array structure is lost. You cannot reconstruct the original array from the string — the converter does not know whether "1,2,3" was an array of numbers or a single string that happens to contain commas.</p>

<p><strong>Data types:</strong> JSON has types — strings, numbers, booleans, null. CSV has no types — everything is a string. <code>42</code> becomes <code>"42"</code>. <code>true</code> becomes <code>"true"</code>. <code>null</code> becomes <code>""</code> or <code>"null"</code>. The type information is lost. When you convert back to JSON, the converter must guess the types. The guess is based on heuristics — if a value looks like a number, it becomes a number. The heuristic is usually correct. When it is wrong, the data is corrupted.</p>

<h2>CSV → JSON: What Gets Added (That Was Not There Before)</h2>

<p>The CSV to JSON converter makes assumptions about the data: every row becomes a JSON object, the first row is assumed to be headers, and all values are strings unless the converter infers types. The assumptions are usually correct. When they are wrong: the first row was not headers but data — the converter used the data as keys, and the actual data is lost. A column contained mixed types — some numbers, some strings. The converter inferred the type from the first value and mishandled the rest. A column contained empty values — the converter converted them to empty strings, null, or omitted them entirely, depending on the converter's configuration.</p>

<h2>The Golden Rule of Data Conversion</h2>

<p>Always preserve the original JSON. The CSV is a <strong>working copy</strong> for analysis. The original JSON is the <strong>authoritative version</strong>. The round trip is lossy. The original is lossless. When you need to edit the data, edit the original JSON — not the CSV. The CSV is for reading. The JSON is for storing. Confuse the two, and you will lose data in the conversion.</p>

<p>Convert at <a href="/en/tools/json-to-csv">JSON to CSV</a> for analysis and <a href="/en/tools/csv-to-json">CSV to JSON</a> for API compatibility. But always keep the original JSON. The round trip is lossy. The original is the truth.</p>`
  },
  {
    slug: "nasa-apod-vs-bing-wallpaper-space-vs-earth",
    title: "NASA APOD vs Bing Wallpaper Space vs Earth Daily Images — Two Free Daily Photo Services That Expand Your Mind in Different Directions",
    description: "NASA APOD shows you the universe — galaxies, nebulae, black holes. Bing Wallpaper shows you the Earth — landscapes, wildlife, cultures. Both are free, daily, and high-resolution. Both change how you see the world.",
    date: "2026-07-19",
    category: "Reference",
    tags: ["NASA APOD", "Bing wallpaper", "astronomy", "photography", "daily"],
    relatedTools: ["nasa-apod", "bing-wallpaper", "pet-wallpaper"],
    content: `<p>You open your laptop on Monday. The desktop background is a <a href="/en/tools/nasa-apod">NASA APOD</a> image: the Carina Nebula — 7,500 light-years away, a cloud of gas and dust 300 light-years across, where stars are being born. The image was captured by the James Webb Space Telescope. You stare at it for a moment. You are a tiny creature on a tiny planet in a tiny solar system in a galaxy of 100 billion stars. The image expands your mind outward — toward the cosmos.</p>

<p>On Tuesday, the desktop background is a <a href="/en/tools/bing-wallpaper">Bing Wallpaper</a> image: a rice terrace in Bali, Indonesia — layers of green descending a hillside, a farmer in a conical hat, morning mist rising from the valley. The image was captured by a professional photographer. You stare at it for a moment. This is a real place on Earth. A real person is working in that field right now. The image expands your mind outward — toward the planet you live on.</p>

<p>Both services are free, daily, and high-resolution. Both change your desktop background to something beautiful. But they expand your mind in different directions. Here is the difference.</p>

<h2>NASA APOD: The Universe Perspective</h2>

<p>The Astronomy Picture of the Day has been published every single day since June 16, 1995 — over 11,000 consecutive days. Each image is chosen by professional astronomers and accompanied by a clear, accessible explanation. The images show: galaxies, nebulae, and star clusters (the large-scale structure of the universe), planets, moons, and comets (our solar system neighbors), and spacecraft, telescopes, and astronauts (the human tools we use to explore space).</p>

<p>The emotional effect of APOD is <strong>awe</strong> — the feeling of being in the presence of something vast and incomprehensible. The Carina Nebula is 300 light-years across. Light takes 300 years to travel from one side to the other. You are looking at a structure so large that your brain cannot process the scale. The awe is humbling. It is also perspective-giving. Your problems are small compared to the Carina Nebula. The universe does not care about your quarterly review. The APOD image is a daily reminder of scale.</p>

<h2>Bing Wallpaper: The Earth Perspective</h2>

<p>Bing Wallpaper publishes one high-resolution photograph every day — landscapes, wildlife, architecture, and cultural events from around the world. Each image includes a short description of what you are seeing and where it is. The images are curated by a team of photo editors. The images show: natural wonders (mountains, oceans, forests, deserts), human culture (festivals, architecture, daily life), and wildlife (animals in their natural habitats).</p>

<p>The emotional effect of Bing Wallpaper is <strong>wonder</strong> — the feeling of discovering something beautiful and new about the planet you live on. The rice terrace in Bali is a real place. You could go there. You could see it with your own eyes. The wonder is aspirational. It is also connecting. The image reminds you that Earth is full of beauty worth exploring. The Bing Wallpaper is a daily reminder of the planet.</p>

<h2>The Complementary Pair</h2>

<p>NASA APOD shows you the universe. Bing Wallpaper shows you the Earth. One reminds you how small you are. The other reminds you how beautiful your home is. Both are free. Both are daily. Both are worth setting as your rotating desktop background. Start your day with the universe at <a href="/en/tools/nasa-apod">NASA APOD</a> and with the Earth at <a href="/en/tools/bing-wallpaper">Bing Wallpaper</a>. The cosmos and the planet. Two daily reminders of scale and beauty.</p>`
  },
  {
    slug: "zodiac-sign-astronomy-vs-astrology-science-divide",
    title: "The Astronomy vs Astrology Divide Why Your Zodiac Sign Is Not Where You Think It Is — and the 2,000-Year Drift That Changed Everything",
    description: "You think you are a Leo. But the Sun was actually in Cancer on your birthday. The zodiac signs have drifted by about one full sign over 2,000 years. Here's the astronomy behind the astrology.",
    date: "2026-07-19",
    category: "Reference",
    tags: ["zodiac sign", "astronomy", "astrology", "precession", "science"],
    relatedTools: ["zodiac-sign", "perpetual-calendar", "nasa-apod"],
    content: `<p>You were born on August 10. Your zodiac sign is Leo. You have identified as a Leo your entire life. You have read Leo horoscopes. You have agreed with Leo personality descriptions. There is one problem: on August 10, the Sun is actually in the constellation <strong>Cancer</strong> — not Leo. The zodiac signs used by astrologers are off by about one full sign. The Leo you think you are is, astronomically, a Cancer. The horoscope you have been reading was for the wrong sign.</p>

<p>This is not a conspiracy. It is a 2,000-year-old astronomical error caused by the <strong>precession of the equinoxes</strong> — the slow wobble of Earth's axis. A <a href="/en/tools/zodiac-sign">zodiac sign finder</a> tells you your traditional astrological sign. The astronomy tells you where the Sun actually was. Here is the science behind the divide.</p>

<h2>The Precession Problem: Why the Zodiac Drifted</h2>

<p>Earth's axis wobbles — like a spinning top slowing down. One complete wobble takes about 26,000 years. This wobble is called <strong>axial precession</strong>. The effect: the position of the Sun against the background stars on any given date shifts by about 1 degree every 72 years. Over 2,000 years — the time since the zodiac was formalized by the Babylonians and Greeks — the shift is approximately 28 degrees, or about <strong>one full zodiac constellation</strong>.</p>

<p>The zodiac was defined around 500 BCE, when the Sun was in Aries on the spring equinox. Today, the Sun is in <strong>Pisces</strong> on the spring equinox. The zodiac signs have drifted by one full sign. The astrological calendar has not been updated. The astronomical calendar has. The result: most people's astrological sign is one sign behind their astronomical constellation.</p>

<h2>There Are Actually 13 Zodiac Constellations</h2>

<p>The traditional zodiac has 12 signs. The Sun's path across the sky — the ecliptic — actually passes through <strong>13 constellations</strong>. The 13th is <strong>Ophiuchus</strong> — the Serpent Bearer. The Sun is in Ophiuchus from approximately November 29 to December 17. If you were born between those dates, your Sun was in Ophiuchus — a constellation that does not exist in traditional astrology. The Babylonians knew about Ophiuchus. They excluded it to keep the zodiac at 12 signs — one for each month of their calendar. The exclusion was a calendar convenience, not an astronomical reality.</p>

<h2>Why Astrology and Astronomy Diverged</h2>

<p>Astrology and astronomy were once the same discipline. Babylonian priest-astronomers tracked the movements of the planets and stars for both religious and practical purposes — predicting seasons, scheduling planting, interpreting omens. The distinction between "what the stars do" (astronomy) and "what the stars mean" (astrology) did not exist.</p>

<p>The split occurred during the Scientific Revolution (1500-1700). Astronomy became a science — based on observation, mathematics, and falsifiable predictions. Astrology remained a belief system — based on tradition, interpretation, and unfalsifiable claims. Astronomy updated its models when new data arrived (the precession of the equinoxes was discovered by Hipparchus in 127 BCE — the zodiac was not updated). Astrology did not update its models. The divergence was not about accuracy. It was about <strong>willingness to update based on evidence</strong>.</p>

<h2>What This Means for Your Zodiac Sign</h2>

<p>Your zodiac sign is a <strong>cultural tradition</strong>, not an astronomical fact. It reflects the sky as it was 2,000 years ago, not the sky as it is today. You can identify with your traditional sign as a cultural practice. You can also recognize that the Sun was actually in a different constellation on your birthday. The two facts are not contradictory. They are different frameworks for different purposes. The <a href="/en/tools/zodiac-sign">zodiac sign finder</a> tells you your traditional sign. The astronomy tells you where the Sun actually was. Culture and science. Both are real. They just describe different things.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("Free station: 230->done.")