"""Add 6 blogs to free station (254→260) — July 23, 2026"""
import os, sys

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "color-contrast-checker-mobile-app-design-accessibility",
    title: "Color Contrast Checker for Mobile App Design How to Ensure Your iOS and Android App Meets Accessibility Standards",
    description: "Your app's gray text on a white background looks elegant. It also fails WCAG contrast requirements and is unreadable for millions of users. Here's the mobile app accessibility checklist.",
    date: "2026-07-23",
    category: "Developer",
    tags: ["color contrast checker", "mobile app", "accessibility", "iOS", "Android"],
    relatedTools: ["color-contrast-checker", "color-picker", "color-names"],
    content: `<p>You design a mobile app. The login screen has light gray placeholder text on a white background. The "Submit" button is a pale blue on a slightly darker blue background. The error message is red text on a white background. The design looks clean and modern. It also fails accessibility standards on all three elements. The gray placeholder text has a contrast ratio of 2.1:1 — well below the 4.5:1 minimum. The button text has a contrast ratio of 2.8:1. The red error text has a contrast ratio of 3.9:1 — below the 4.5:1 minimum for normal text. Your app is unusable for: people with low vision, people using their phones in bright sunlight, and people over 50 (contrast sensitivity declines with age).</p>

<p>A <a href="/en/tools/color-contrast-checker">color contrast checker</a> catches these issues during design — before the app is built, before users complain, before accessibility lawsuits. Here is the mobile app accessibility checklist.</p>

<h2>Why Mobile Apps Need Stricter Contrast Than Websites</h2>

<p>Mobile apps are used in <strong>uncontrolled environments</strong>. Websites are typically viewed indoors, on a desk, with controlled lighting. Mobile apps are viewed: in direct sunlight (screen glare reduces perceived contrast), in dark rooms (dark mode with low contrast is especially hard to read), and while moving (walking, commuting — the user's attention is divided, and low-contrast text is harder to process). The environment makes mobile apps harder to read. The contrast must be higher to compensate.</p>

<p>The WCAG 2.1 contrast requirements apply to mobile apps as well as websites: 4.5:1 for normal text, 3:1 for large text (18pt+ or 14pt+ bold), and 3:1 for UI components (buttons, form fields, icons). These are minimums. For mobile apps, aim for higher — 7:1 for body text, 4.5:1 for large text. The higher contrast compensates for the uncontrolled viewing environment.</p>

<h2>The Mobile App Contrast Checklist</h2>

<p>Check every text element in your app with the <a href="/en/tools/color-contrast-checker">contrast checker</a>: body text, headings, button text, form labels and placeholder text, error messages and validation text, tab labels and navigation text, and icon colors against their backgrounds. The most common failures: placeholder text (often the lowest-contrast element in an app), error messages (red text on white — the red is often too light to meet 4.5:1), and disabled button text (gray text — must still be readable, even if the button is disabled).</p>

<p>For each element: identify the text color and background color. Use the contrast checker to verify the ratio. If the ratio is below 4.5:1 (normal) or 3:1 (large), adjust the colors. The fix is usually: darken the text, lighten the background, or both. The color scheme stays the same. The contrast increases. The app becomes accessible.</p>

<h2>Platform-Specific Accessibility Features</h2>

<p>Both iOS and Android provide accessibility settings that users can enable: Larger Text (iOS) / Font Size (Android) — your app must handle dynamic text sizes, Bold Text — your app must respect the system bold setting, and Increase Contrast — your app should check contrast with this setting enabled. The system settings override your design. The contrast checker verifies your base design. The system settings verify the accessibility. Both must work.</p>

<p>Check your app's contrast at <a href="/en/tools/color-contrast-checker">color contrast checker</a> — before the app is built, before users complain, before the accessibility audit. The contrast is the cheapest accessibility fix. The checker is the tool. The users are the reason.</p>`
  },
  {
    slug: "cron-parser-serverless-scheduled-functions-aws-lambda",
    title: "Cron Parser for Serverless Scheduled Functions How to Configure AWS Lambda Cloudflare Workers and Vercel Cron Jobs",
    description: "Your serverless function needs to run every 15 minutes on weekdays. The cron expression is */15 * * * 1-5. But is that right? A cron parser validates your expression before you deploy. Here's the serverless cron guide.",
    date: "2026-07-23",
    category: "Developer",
    tags: ["cron parser", "serverless", "AWS Lambda", "Cloudflare", "scheduled"],
    relatedTools: ["cron-parser", "unix-timestamp", "hash-generator"],
    content: `<p>You configure a scheduled function on AWS Lambda. The function should run every 15 minutes, Monday through Friday, between 9 AM and 5 PM. You write the cron expression: <code>*/15 9-17 * * 1-5</code>. You deploy. The function runs: every 15 minutes, every day, 24 hours a day. You wake up on Saturday to a $200 AWS bill. The cron expression was wrong. <code>*/15 9-17 * * 1-5</code> means: every 15 minutes, during hours 9-17, every day of the month, every month, Monday through Friday. The hours 9-17 restriction works. The Monday-Friday restriction works. But the function still ran on Saturday — because you did not test the expression before deploying.</p>

<p>A <a href="/en/tools/cron-parser">cron parser</a> validates your expression and shows the next execution times before you deploy. "At 09:00 AM, every 15 minutes, Monday through Friday" — plus the next 10 execution times. You verify the times. You deploy. The function runs correctly. No $200 surprise. Here is the serverless cron configuration guide.</p>

<h2>Serverless Cron: How Each Platform Handles Scheduled Functions</h2>

<p><strong>AWS Lambda (EventBridge Scheduler):</strong> Uses standard 5-field cron expressions. Rate-based scheduling is also available: <code>rate(15 minutes)</code> instead of <code>*/15 * * * *</code>. Rate expressions are simpler but less flexible — you cannot specify specific hours or days. Cron expressions are more flexible but more error-prone. The cron parser is the safety check.</p>

<p><strong>Cloudflare Workers (Cron Triggers):</strong> Uses 5-field cron expressions. Cloudflare's cron implementation is slightly different from standard cron — test your expression with the cron parser before deploying. Cloudflare also limits cron trigger frequency on the free plan (typically minimum 1-hour intervals).</p>

<p><strong>Vercel Cron Jobs:</strong> Uses 5-field cron expressions. Vercel's cron syntax is standard. The free plan allows 1 cron job per project. Paid plans allow more. Vercel also displays the next execution time in the dashboard — but only after deployment. The cron parser shows the next execution times before deployment.</p>

<p><strong>GitHub Actions (schedule trigger):</strong> Uses POSIX cron syntax (5 fields). GitHub Actions cron jobs run on UTC time — not your local timezone. A cron expression <code>0 9 * * 1-5</code> runs at 9:00 AM UTC, not 9:00 AM your time. The timezone offset is the most common GitHub Actions cron mistake. The cron parser shows times in your local timezone. Adjust for UTC when writing GitHub Actions cron expressions.</p>

<h2>Common Serverless Cron Mistakes</h2>

<p><strong>Timezone confusion:</strong> Most serverless cron implementations use UTC. Your cron expression is evaluated in UTC. 9 AM in your cron expression is 9 AM UTC — which might be 2 AM, 4 AM, or 5 PM your time, depending on your timezone. The cron parser shows the next execution times. Adjust the hours in your expression to match your local timezone.</p>

<p><strong>Day-of-month vs day-of-week confusion:</strong> When both day-of-month and day-of-week are specified (not *), the cron job runs when <strong>either</strong> condition matches. <code>0 0 1 * 1</code> runs at midnight on the 1st of every month AND every Monday — not just "Monday the 1st." The cron parser shows the next execution times. The confusion is visible in the times before deployment.</p>

<p><strong>Step values producing unexpected patterns:</strong> <code>*/7 * * * *</code> means "every 7 minutes" — but starting from minute 0, so at 0, 7, 14, 21, 28, 35, 42, 49, 56. Not every 7 minutes from now. The cron parser shows the specific minutes. The pattern is visible before deployment.</p>

<p>Validate your cron expressions at <a href="/en/tools/cron-parser">cron parser</a> — before deploying, before the $200 bill, before the 3 AM production incident.</p>`
  },
  {
    slug: "password-generator-family-shared-password-management",
    title: "Password Generator for Families How to Manage Shared Passwords for Streaming Services Utilities and Household Accounts Without Sacrificing Security",
    description: "Your family shares 15 accounts — Netflix, Spotify, utilities, insurance. The passwords are 'password123' or written on a sticky note on the fridge. Here's the family password management strategy.",
    date: "2026-07-23",
    category: "Developer",
    tags: ["password generator", "family", "shared passwords", "security", "household"],
    relatedTools: ["password-generator", "hash-generator", "uuid-generator"],
    content: `<p>Your family shares 15 accounts: Netflix, Hulu, Spotify, Amazon Prime, the electric company, the water utility, the internet provider, the insurance company, the pediatrician's patient portal, the school's parent portal, and five more. Each account has a password. The passwords are: "netflix123" (the Netflix password), "spotify456" (the Spotify password), "password" (the utility company — they forced you to create an account to pay your bill), and the Wi-Fi password on a sticky note on the fridge. This is the family password situation. It is insecure. It is also completely normal. Most families manage passwords this way — because the alternative (every family member using a password manager) is not realistic.</p>

<p>A <a href="/en/tools/password-generator">password generator</a> creates strong, unique passwords for each account. The family password management strategy makes them usable. Here is the strategy.</p>

<h2>The Family Password Problem</h2>

<p>Family password management has unique challenges that individual password management does not: multiple users with varying technical skills (grandparents, children, tech-savvy teenagers — all sharing the same accounts), shared accounts (the Netflix password must be known by everyone in the household), and emergency access (if one family member is unavailable, another must be able to access the insurance, banking, and utility accounts). The solution for individuals — a password manager with a single master password — does not work for families. The 8-year-old cannot remember a master password. The grandparent will not use a password manager. The family needs a <strong>shared system</strong>, not a personal tool.</p>

<h2>The Family Password Strategy</h2>

<p><strong>Tier 1: Shared entertainment accounts (Netflix, Spotify, streaming).</strong> Generate a strong, memorable passphrase with the <a href="/en/tools/password-generator">password generator</a>. Use a 4-word passphrase: <code>correct-horse-battery-staple</code>. Write it on a whiteboard in the kitchen — yes, physically write it down. The threat model for a Netflix password is not a burglar reading your whiteboard. It is a hacker on the internet guessing "netflix123." The whiteboard is secure against the internet. The passphrase is secure against guessing. The physical security + the digital security = the right level of protection for a streaming account.</p>

<p><strong>Tier 2: Household utility accounts (electric, water, internet).</strong> Generate a random 16-character password for each account. Store them in a shared note on your phone (Apple Notes, Google Keep) — the note is behind your phone's screen lock. The phone is the family's shared password manager. The screen lock is the security. The note is the storage. The shared phone is the access point.</p>

<p><strong>Tier 3: Financial and sensitive accounts (banking, insurance, medical).</strong> These should NOT be shared. Each adult should have their own login with their own strong password. The password generator creates a unique password for each adult. Each adult stores their passwords in their own password manager or secure note. The family does not share these passwords. The family knows WHERE the passwords are stored — in case of emergency. The family does not know the passwords themselves.</p>

<h2>When to Change Shared Passwords</h2>

<p>Change shared passwords when: a family member moves out (college, divorce, roommate situation), a device with saved passwords is lost or stolen, and you suspect an account has been compromised. The password generator creates a new password. The family updates the shared note or whiteboard. The old password is retired. The new password is shared. The family is secure.</p>`
  },
  {
    slug: "json-to-csv-vs-csv-to-json-data-conversion-pipeline",
    title: "JSON to CSV vs CSV to JSON The Data Conversion Pipeline — When to Convert in Each Direction and What Gets Lost Along the Way",
    description: "JSON to CSV flattens nested data for Excel. CSV to JSON restructures flat data for APIs. Both are conversions. Both are lossy. Here's the complete conversion pipeline and what survives the round trip.",
    date: "2026-07-23",
    category: "Developer",
    tags: ["JSON to CSV", "CSV to JSON", "data conversion", "pipeline", "round trip"],
    relatedTools: ["json-to-csv", "csv-to-json", "json-formatter"],
    content: `<p>You receive a JSON file from an API: 2,000 customer records with nested objects and typed fields. You need to analyze it in Excel. You use a <a href="/en/tools/json-to-csv">JSON to CSV converter</a>. The nested objects are flattened. The types are lost. The CSV opens in Excel. You analyze the data. You make changes. You convert the CSV back to JSON with a <a href="/en/tools/csv-to-json">CSV to JSON converter</a>. The round-trip JSON is different from the original. The pipeline is lossy. Information was destroyed in both directions.</p>

<p>Here is the complete data conversion pipeline — when to convert in each direction, what gets lost, and how to preserve the original JSON as the authoritative source.</p>

<h2>JSON → CSV: Flattening for Analysis</h2>

<p>Convert JSON to CSV when: you need to analyze the data in Excel or Google Sheets, you need to share the data with non-technical stakeholders who work in spreadsheets, or you need to import the data into a system that only accepts CSV. The conversion flattens: nested objects become dot-notation columns, arrays become comma-separated strings, and types become strings (everything in CSV is text). The CSV is a <strong>working copy</strong> for analysis. The original JSON is the <strong>authoritative version</strong>. The CSV is for reading. The JSON is for storing.</p>

<h2>CSV → JSON: Restructuring for APIs</h2>

<p>Convert CSV to JSON when: you need to send the data to an API that expects JSON, you need to use the data in a JavaScript application, or you need to restore the structured format after analysis. The conversion restructures: the first row is used as headers (keys), each subsequent row becomes a JSON object, and values are inferred as strings unless the converter detects numbers or booleans. The restructured JSON is an <strong>approximation</strong> of the original. The nesting is not restored. The types are inferred, not preserved. The original JSON structure is lost. The CSV-to-JSON converter produces valid JSON. It does not produce the same JSON you started with.</p>

<h2>The Golden Rule: Preserve the Original JSON</h2>

<p>The conversion pipeline is: original JSON → CSV (for analysis) → modified CSV → JSON (for API). The original JSON is never modified. It is the reference. The pipeline produces: the original JSON (authoritative), the CSV (working copy), and the round-trip JSON (derived work). The derived JSON is valid and functional. It is not identical to the original. The differences are: structure (nested objects are flattened), types (everything is inferred), and arrays (represented as comma-separated strings). The round trip is lossy. The original is lossless. Always keep the original.</p>

<p>Convert at <a href="/en/tools/json-to-csv">JSON to CSV</a> for analysis and <a href="/en/tools/csv-to-json">CSV to JSON</a> for APIs. The pipeline is lossy. The original is the truth.</p>`
  },
  {
    slug: "reaction-test-vs-stopwatch-timer-reflex-vs-endurance",
    title: "Reaction Test vs Stopwatch Timer Reflex vs Endurance — Two Performance Tools That Measure Completely Different Aspects of Human Capability",
    description: "A reaction test measures how fast you respond to a single stimulus — a fraction of a second. A stopwatch measures how long you sustain effort — minutes or hours. Both measure performance. Different dimensions.",
    date: "2026-07-23",
    category: "Fun & Media",
    tags: ["reaction test", "stopwatch", "timer", "reflex", "endurance"],
    relatedTools: ["reaction-test", "stopwatch-and-timer", "scoreboard"],
    content: `<p>You click the red-green box on a <a href="/en/tools/reaction-test">reaction test</a>. The screen turns green. You click. Your time: 245 milliseconds. The test measured your <strong>reflex speed</strong> — how fast your brain processes a visual stimulus and sends a motor command to your finger. The measurement is a fraction of a second. The test is a sprint of attention.</p>

<p>Now you start a <a href="/en/tools/stopwatch-and-timer">stopwatch</a> and begin a 90-minute deep work session. The stopwatch is measuring your <strong>sustained effort</strong> — how long you can maintain focus on a single task. The measurement is in minutes and hours. The stopwatch is a marathon of attention.</p>

<p>Both tools measure human performance. Both display numbers. Both are in the Fun & Media category. But they measure completely different dimensions of capability. Here is the difference.</p>

<h2>Reaction Test: Measuring Reflex Speed</h2>

<p>A reaction test measures the time from <strong>stimulus onset</strong> to <strong>motor response</strong> — the total time for your brain to see a change, decide to act, and send the signal to your muscles. The average human visual reaction time is 250ms. Pro gamers average 150-180ms. F1 drivers react in 100-150ms. The reaction test measures: processing speed (how fast your brain processes visual information), decision speed (how fast you decide to act), and motor speed (how fast the signal travels to your muscles). The test is a single, discrete event. The measurement is in milliseconds. The performance is <strong>peak</strong> — the fastest you can respond, not how long you can sustain it.</p>

<p>Use the reaction test for: benchmarking your reflex speed, tracking changes over time, and comparing your performance to population averages.</p>

<h2>Stopwatch and Timer: Measuring Sustained Effort</h2>

<p>A stopwatch measures <strong>duration</strong> — how long something takes. The measurement is in minutes and hours. The performance is <strong>sustained</strong> — how long you can maintain effort, not how fast you can respond once. The stopwatch is for: tracking work sessions, measuring workout durations, and timing events. The timer is for: interval training (work/rest cycles), Pomodoro sessions (25 minutes of focus), and countdowns to deadlines.</p>

<p>Use the stopwatch for: measuring how long a task takes, tracking sustained effort over time, and enforcing time boundaries. Use the timer for: interval training, focus sessions, and any activity with a fixed duration.</p>

<h2>Why You Need Both</h2>

<p>Reaction speed and sustained effort are different capabilities. A fast reaction time does not mean you can focus for 90 minutes. The ability to focus for 90 minutes does not mean you have fast reflexes. The reaction test measures the sprint. The stopwatch measures the marathon. Both are performance. Different dimensions. Different tools. Use the <a href="/en/tools/reaction-test">reaction test</a> for the sprint and the <a href="/en/tools/stopwatch-and-timer">stopwatch</a> for the marathon. Reflex and endurance. Different measurements. Different training.</p>`
  },
  {
    slug: "pet-wallpaper-psychology-stress-reduction-cute-science",
    title: "Why Looking at Animal Photos Reduces Stress The Science of Cute and Its Measurable Effects on Mood and Productivity",
    description: "Looking at puppy photos isn't just procrastination. Research shows it improves focus, reduces stress, and elevates mood. Here's the science behind why cute animal images work — and how to use them productively.",
    date: "2026-07-23",
    category: "Fun & Media",
    tags: ["pet wallpaper", "psychology", "stress", "cute", "science"],
    relatedTools: ["pet-wallpaper", "bing-wallpaper", "nasa-apod"],
    content: `<p>You are having a stressful workday. You open a <a href="/en/tools/pet-wallpaper">pet wallpaper</a> tab. A golden retriever puppy appears on your screen — sleeping on a pile of blankets, one paw twitching as it dreams. You look at it for 10 seconds. You exhale. You feel slightly better. You go back to work. This is not procrastination. It is a <strong>micro-break</strong> — and research shows it is one of the most effective stress-reduction techniques available.</p>

<p>Looking at cute animal images is not a distraction from work. It is a <strong>performance enhancer</strong>. Here is the science behind why cute animal photos work — and how to use them productively.</p>

<h2>The Science of Cute: What Happens in Your Brain</h2>

<p>Viewing cute images triggers a specific neural response: the brain's reward centers (nucleus accumbens) release dopamine — the same neurotransmitter involved in pleasure, motivation, and learning. The "cute response" is evolutionarily wired — baby animals have features (large eyes, round faces, small noses) that trigger caregiving instincts in humans. The response is automatic. You cannot choose whether to find a puppy cute. Your brain decides for you — in about 150 milliseconds, before conscious awareness.</p>

<p>The effect is measurable. A 2012 study at Hiroshima University found that participants who viewed cute animal images performed better on tasks requiring focused attention than those who viewed adult animal images or food images. The "cute response" improved <strong>narrowed attentional focus</strong> — the ability to concentrate on a specific task without distraction. The participants did not know the images were affecting their performance. The effect was subconscious. The cuteness improved their focus without their awareness.</p>

<h2>The Micro-Break Research</h2>

<p>Micro-breaks — brief pauses of 30 seconds to 2 minutes during work — have been shown to: reduce accumulated stress, restore attention and focus, and improve overall task performance. The key: the break must be a genuine mental disengagement from work. Checking email is not a micro-break — it is task-switching. Looking at a cute animal photo is a micro-break — it engages a completely different neural circuit than work tasks. The mental disengagement is the mechanism. The cute photo is the vehicle.</p>

<p>The optimal micro-break: 30-60 seconds, every 60-90 minutes, engaging with something unrelated to work. A <a href="/en/tools/pet-wallpaper">pet wallpaper</a> fits perfectly: it is non-work content, it is visually engaging, it triggers a positive emotional response, and it is time-limited (you look, you smile, you go back to work). The micro-break is not a guilty pleasure. It is a research-backed performance strategy.</p>

<h2>How to Use Pet Wallpaper as a Productivity Tool</h2>

<p>Set your desktop background to rotate through pet images. Each time you return to your desktop, you get a micro-break. The image is there. You look. You smile. You work. The background is the delivery mechanism. The micro-break is the benefit. Alternatively, set a timer for 60-90 minutes. When the timer goes off, open the pet wallpaper tab. Look at the image. Breathe. Close the tab. Return to work. The timer is the trigger. The pet photo is the reward. The work is the focus. The cycle is the productivity system.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("Free station: 254->done.")