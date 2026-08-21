"""Add 6 blogs to free station (402->408) - August 21, 2026"""
BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "regex-tester-lookahead-lookbehind-guide",
    title: "Regex Lookahead and Lookbehind: Matching What Comes Next to the Match",
    description: "You've mastered the basics — and you're still stuck writing 'password must contain a letter' checks. Lookahead and lookbehind are the tools you're missing.",
    date: "2026-08-21",
    category: "Developer",
    tags: ["regex lookahead", "regex lookbehind", "regular expressions", "password validation", "zero-width assertion"],
    relatedTools: ["regex-tester", "text-diff", "code-formatter"],
    content: `<p>You're building a signup form and you need a rule: the password must contain at least one letter, one number, and be at least eight characters. The naive approach is three separate checks, or one giant regex that reads like a ransom note. Then a colleague mentions "lookahead" and "lookbehind," and suddenly you're supposed to write assertions that match things without consuming them. If those words make your eyes glaze over, this is the article for you — because these two zero-width assertions are the difference between fighting regex and letting it do the work.</p>

<h2>The Problem Lookahead Solves</h2>

<p>A normal pattern consumes characters as it matches. That's why a password check like <code>^(?=.*[a-z])</code> looks alien: the <code>(?=...)</code> is a lookahead. It looks forward, checks that the thing inside exists somewhere ahead, and then moves on without consuming anything — which is exactly what you want when you're stacking requirements. The pattern above means "at the start, somewhere ahead, there's a lowercase letter." You can chain them: <code>(?=.*[a-z])(?=.*[0-9])</code> verifies both a letter and a digit exist, anywhere, in one expression. The counter-intuitive part is that nothing is actually matched — the assertions are just checkpoints that must pass.</p>

<h2>Lookbehind: The Other Direction</h2>

<p>Lookbehind is the mirror: it checks what came before the match position. The canonical case is prices — you want to match the number after a dollar sign without including the sign. <code>(?&lt;=\$)\d+</code> matches "49" in "$49" but not in "49", because it requires a dollar sign immediately behind. The mistake most people make is reaching for a capturing group and then writing code to strip the extra character — lookbehind removes the need for that dance entirely. Test both directions side by side in the <a href="/en/tools/regex-tester">regex tester</a> and the zero-width behavior becomes obvious: highlight the match and notice the cursor didn't advance past the assertion.</p>

<h2>The Traps Nobody Warns You About</h2>

<p>The counter-intuitive part is that lookarounds change how you think about matching. A <code>(?!...)</code> negative lookahead is how you say "not followed by" — the classic "match <code>foo</code> not followed by <code>bar</code>." But people use it to mean "not containing," which is wrong. And lookbehind has a hard limit in most engines: fixed-length only. The <code>text-diff</code> tool compares strings line by line, but regex assertions compare positions — a different kind of diff. When you finally have an expression that passes, drop it into the <a href="/en/tools/code-formatter">code formatter</a> for the surrounding script, and future-you will thank past-you for the comments.</p>

<p>We covered the greedy-versus-lazy trap in our guide to <a href="/en/blog/regex-tester-lazy-greedy-quantifiers-guide">lazy vs greedy quantifiers</a>. Lookahead and lookbehind are the next rung — match the requirements, not the characters, and the password check writes itself.</p>`
  },
  {
    slug: "youtube-thumbnail-file-size-export-guide",
    title: "YouTube Thumbnail File Sizes and Export Settings: Why Your Upload Keeps Failing",
    description: "The thumbnail looks perfect in Photoshop, but YouTube rejects it or blurs it. The problem is usually file size, format, or dimensions — here's the exact spec.",
    date: "2026-08-21",
    category: "Developer",
    tags: ["youtube thumbnail", "thumbnail file size", "image export", "JPEG compression", "video thumbnails"],
    relatedTools: ["youtube-thumbnail", "image-to-base64", "svg-minifier"],
    content: `<p>You spend forty minutes on a thumbnail. The composition is great, the colors pop, the text is readable — it looks perfect in your editor. You drag it onto YouTube, and one of three things happens: the site says "invalid file," or it uploads and renders blurry, or it uploads fine but every text edge looks like it's wearing a halo. None of these mean your design is bad. They all mean your export settings are wrong, and the fix is a checklist you can memorize in one read-through.</p>

<h2>The Spec That Almost Never Changes</h2>

<p>YouTube wants a 16:9 image, 1280 by 720 pixels at minimum, in JPG, GIF, or PNG, and it recommends 2 MB or less — though in practice a photo-heavy PNG at 1280x720 blows well past that. The failure you're hitting is usually not dimensions. It's file size. A 12 MB PNG gets rejected outright; a 5 MB JPEG may upload but get aggressively re-compressed, which is where the halo around your text comes from. The counter-intuitive rule: smaller is better, because YouTube re-compresses whatever you give it, and a file that's already small and clean survives the second pass much better than a big one does.</p>

<h2>Exporting That Passes the First Time</h2>

<p>From your editor, export at exactly 1280x720 (or higher, always in 16:9). Use JPG with quality around 80-85 — that lands most thumbnails under 2 MB while keeping gradients smooth. If the JPG shows banding on a sky or gradient, that's the quality slider working against you; bump it, check the file size, and split the difference. A quick sanity check is to look at the actual byte size — the <a href="/en/tools/image-to-base64">image to base64</a> tool shows you the raw data weight of an image, which is a useful reality check for how much compression you're dealing with. And if you're exporting a simple graphic rather than a photo, PNG can beat JPG at the same size — JPG is for photos, PNG is for flat color.</p>

<h2>What Actually Blurs Your Thumbnail</h2>

<p>One more trap: the blur isn't always YouTube. If you're viewing the video at 360p, of course the thumbnail looks soft — that's the player, not the file. And if you preview it with the <a href="/en/tools/youtube-thumbnail">thumbnail preview tool</a>, you'll see exactly how it renders at every size before you commit. For most thumbnails, the <a href="/en/tools/svg-minifier">SVG minifier</a> won't help — YouTube doesn't take SVG — but the lesson it teaches applies: compress the asset, not the design. Export small, check at 720p, and your thumbnail will stop being the thing that made your video look low-budget.</p>

<p>We covered the dimensions and preview workflow in our guide to <a href="/en/blog/youtube-thumbnail-size-tool-guide">thumbnail size preview</a>. This is the export half of that story — the file size and compression settings that decide whether your design survives the upload.</p>`
  },
  {
    slug: "morse-code-memorize-fast-mnemonic-guide",
    title: "How to Memorize Morse Code in an Afternoon (The Mnemonic Method)",
    description: "Forget drilling dots and dashes for a week. There's a memory trick that maps every letter to a picture — and it works dramatically faster than repetition.",
    date: "2026-08-21",
    category: "Developer",
    tags: ["morse code", "memorize morse", "mnemonics", "amateur radio", "code learning"],
    relatedTools: ["morse-code", "text-repeater", "base-converter"],
    content: `<p>Your uncle the ham radio operator has been after you for months: learn Morse code. You imagine weeks of flashcards and dot-dash drills. Then a friend who actually learned it tells you she did it in one weekend, and the secret isn't practice — it's pictures. Morse is just a code: a dot, a dash, and two gaps. The hard part is remembering which pattern belongs to which letter, and that's exactly the part a mnemonic system removes. Here's how the trick works and why it beats drilling every time.</p>

<h2>Turn Every Letter Into a Story</h2>

<p>The classic method gives each letter a word or picture whose shape echoes its code. Take <strong>M</strong> — dash dash. "Milk" starts with M, and the picture of a glass of milk has two drips? No — simpler: think of <strong>M</strong> as two dashes because "M" is two vertical strokes that look like two lines; or use the "dash-dash" mnemonic where the letter's sound carries the rhythm. The most famous system assigns each letter a word where the pattern of stressed syllables matches the dots and dashes: A (dot dash) becomes "a<b>HEAD</b>" — short-long. O (dash dash dash) is "MO-RA-TOR-IUM," three long beats. You memorize the words, and the code comes free.</p>

<h2>Why the Picture Beats the Drill</h2>

<p>The counter-intuitive part: you aren't memorizing Morse at all. You're memorizing a rhythm, and the rhythm is anchored to something your brain already stores well — words and pictures. That's why the mnemonic method is dramatically faster than rote repetition: instead of hundreds of exposures per letter, one vivid association does the job. The drill works for recognition speed, which matters for radio traffic — that's what Farnsworth timing is for. But recognition speed is built after recognition itself, and mnemonics build that first step in hours, not weeks.</p>

<h2>Practice What You Just Learned</h2>

<p>Once the associations are in, the <a href="/en/tools/morse-code">morse code translator</a> is your training partner: type a word, read the dots and dashes, say them in rhythm, check the output. Generate practice strings with the <a href="/en/tools/text-repeater">text repeater</a> and translate them cold. And if you want to see the underlying logic, the <a href="/en/tools/base-converter">base converter</a> is a reminder that Morse is one of the oldest binary codes — two symbols, like 0 and 1, just arranged by ear. Start with the ten easiest letters, build up, and by the end of the afternoon you'll be decoding your own name in your head.</p>

<p>We covered the timing and pacing side in our guide to <a href="/en/blog/morse-code-timing-dit-dah-farnsworth-guide">Morse timing and the Farnsworth method</a>. Mnemonics get the code into your head; timing makes it fast. Learn the words first, and the dots and dashes become the easy part.</p>`
  },
  {
    slug: "hashtag-generator-platform-rules-guide",
    title: "Hashtags by Platform: Instagram, TikTok, and X Have Different Rules",
    description: "Thirty hashtags works on Instagram and tanks on X. Here's the platform-by-platform playbook — and how to generate the right set for each.",
    date: "2026-08-21",
    category: "Text Tools",
    tags: ["hashtag strategy", "Instagram hashtags", "TikTok hashtags", "Twitter hashtags", "social media"],
    relatedTools: ["hashtag-generator", "fancy-text-generator", "text-to-slug"],
    content: `<p>You found a great hashtag strategy article, followed it to the letter, and posted the same 30-tag set to Instagram, TikTok, and X. Instagram gave you a small but steady lift. TikTok did nothing. And X users replied "put the hashtags in the replies" and moved on. The article wasn't wrong — it was written for Instagram. Hashtags are not one system. Each platform runs its own ranking logic, and the same tag set that earns you reach on one feed can actively hurt you on another.</p>

<h2>Instagram: Stack Them, but Realistically</h2>

<p>Instagram allows up to 30 and still rewards a solid stack — though the golden range is 20-25, with a mix of broad and niche tags. The mistake is posting 30 maxed-out tags under every photo; Instagram has been quietly downranking that pattern for years. The counter-intuitive part: the tags you think are working (the big ones, millions of posts) are usually not. They bury you in a sea of content within an hour. The <a href="/en/tools/hashtag-generator">hashtag generator</a> handles the mechanical part — but on Instagram, curate down to the tags you could actually win, then rotate them per post.</p>

<h2>TikTok: Fewer, Smarter, or None</h2>

<p>TikTok's search and the For You feed care less about your hashtags than about watch time and completion rate. Three to five tags is the norm; some creators post with none and do fine. What matters on TikTok is the caption's first line and whether people finish the video. The mistake is dumping a 30-tag block into a TikTok caption — it reads as spam and eats caption space that should sell the hook. Tags like #fyp are effectively worthless; they're the "big tag" mistake on a platform where the algorithm ignores them.</p>

<h2>X: Be Sparse or Be Punished</h2>

<p>X is where hashtag hygiene matters most. One to three tags max, and they should read like words a person would say, not a keyword dump. Posts stuffed with hashtags get reduced reach, because X has always treated them as a spam signal. The counter-intuitive part: on X, the <a href="/en/tools/text-to-slug">text to slug</a> tool is closer to the right mental model than a hashtag generator — you want a clean, readable topic tag, not a keyword list. And if you're optimizing your profile's searchable bio, the <a href="/en/tools/fancy-text-generator">fancy text generator</a> handles the styling while you keep the hashtags honest.</p>

<p>We covered niche versus trending tags in our guide to <a href="/en/blog/hashtag-generator-social-media-niche-vs-trending">hashtag niche strategy</a>. The platform rules are the layer above: the same philosophy, tuned per feed. Generate the set, then ask which platform you're posting to — the answer changes the stack.</p>`
  },
  {
    slug: "remove-duplicate-lines-case-whitespace-guide",
    title: "'Apple' vs 'apple' vs 'apple ': The Traps Hiding Inside 'Duplicate'",
    description: "You dedupe a list and duplicates remain. Probably because 'Apple', 'apple', and 'apple ' are three different strings. Here's how to actually clean a list.",
    date: "2026-08-21",
    category: "Text Tools",
    tags: ["deduplicate", "duplicate lines", "case sensitivity", "whitespace", "data cleaning"],
    relatedTools: ["remove-duplicate-lines", "text-sorter", "case-converter"],
    content: `<p>You run a membership list through a duplicate remover, watch it report "1,204 duplicates removed," and feel great. Then you spot it: "John Smith" and "john smith" both still on the list. You rerun it — nothing happens. The tool isn't broken. "John Smith" and "john smith" are different strings, and a default dedupe compares strings byte for byte. The word "duplicate" hides more traps than you'd think, and this is where most people's data-cleaning confidence dies.</p>

<h2>The Three Hidden Duplicates</h2>

<p>There are three kinds of near-duplicates that a naive dedupe misses. Case: "Apple" vs "apple". Whitespace: "apple " vs "apple" — a trailing space makes them different. And invisible characters: a full-width space, a tab, a non-breaking space. Each one looks identical in a spreadsheet cell and is a completely different string to a computer. The counter-intuitive part is that most dedupe tools only offer an exact match, so the list that "already cleaned" is still full of these ghosts. The fix is normalization before deduplication: decide that case and whitespace don't matter, and make them consistent first.</p>

<h2>Normalize, Then Dedupe</h2>

<p>The reliable workflow is three steps. First, normalize the case — convert everything to lowercase (or title case if you're keeping a display list) with the <a href="/en/tools/case-converter">case converter</a>. Second, strip the whitespace — remove leading, trailing, and doubled spaces so "apple " and "apple" become the same string. Third, run the <a href="/en/tools/remove-duplicate-lines">duplicate line remover</a> on the normalized text, then restore your formatting. The result is a list that's actually clean, not just visually clean.</p>

<h2>Sorting Helps You See What's Left</h2>

<p>The final check is visual, and it's the one people skip. After dedupe, run the list through the <a href="/en/tools/text-sorter">text sorter</a> — grouping identical-looking entries together makes the survivors obvious. If "Smith, John" and "Smith, John" still appear side by side, you've found a format difference, not a duplicate problem — a comma instead of a space, a period after the initial. And remember: for real data work, decide your rules once and write them down, because next month's list will be different but the traps won't be.</p>

<p>We compared the browser tool to spreadsheet dedup in our guide to <a href="/en/blog/remove-duplicate-lines-vs-excel-dedup">remove duplicates vs Excel</a>. Normalization is the step both approaches share — and the step most people skip. Clean the case, clean the spaces, then dedupe for real.</p>`
  },
  {
    slug: "life-hacks-smartphone-battery-storage-guide",
    title: "Smartphone Life Hacks: Battery, Storage, and Privacy Fixes That Actually Work",
    description: "Your phone dies by noon and storage is always full. Half the advice online is a myth. Here's what actually helps — battery, storage, and the privacy setting nobody uses.",
    date: "2026-08-21",
    category: "Fun & Media",
    tags: ["smartphone hacks", "battery life", "phone storage", "phone privacy", "life hacks"],
    relatedTools: ["life-hacks", "password-generator", "qr-code-generator"],
    content: `<p>It's 2pm and your phone is at 12%, again. You've closed all the apps, turned the brightness down, and switched to battery saver — and it still died by the time you left work. Meanwhile a friend's phone, same model, lasts until midnight. The difference isn't a magic app; it's a handful of settings that most battery advice gets backward. And the same story is true for storage and privacy: the fixes that actually work are specific, and the ones that don't are the ones everyone repeats.</p>

<h2>Battery: Ignore the Myths, Change the Settings</h2>

<p>Closing background apps usually makes things worse — reopening them costs more energy than leaving them suspended. The real battery drains are screen brightness, location, and push notifications. The counter-intuitive fix: turn off "Precise Location" for apps that don't need it, and limit background refresh to the two apps you actually use in the background. Also, your phone's adaptive battery setting takes weeks to learn your habits — give it time instead of disabling it. And battery saver isn't a switch for emergencies; it's a profile you can leave on and lose almost nothing in daily use.</p>

<h2>Storage: The Two Things That Eat Everything</h2>

<p>Your "system" storage isn't bloated — it's almost always your photo library and your message attachments. The fix that works: enable "optimize storage" so full-resolution originals live in the cloud, and set messages to auto-delete attachments after 30 days. If you have thousands of screenshots, those are the real hoarders. And when you're about to buy more iCloud storage, first ask whether you actually need everything — deleting the screenshots and the 40 GIFs your group chat sent usually frees more than you think.</p>

<h2>Privacy: The Setting Nobody Uses</h2>

<p>The single most useful privacy toggle is the per-app location permission — switching apps from "Always" to "While Using" kills a silent tracker you never see. Next: your phone can generate strong, unique passwords for every login, and that's the <a href="/en/tools/password-generator">password generator</a> principle applied to your life: never reuse a password, let the phone's vault remember them. And one genuinely clever hack: when you have guests, share your Wi-Fi by generating a <a href="/en/tools/qr-code-generator">QR code</a> instead of reading out a 20-character password — they scan, they're on, and you never said a word. These are the settings that make a phone feel like it has room to breathe.</p>

<p>We covered productivity and home-office habits in our guide to <a href="/en/blog/life-hacks-remote-workers-home-office-productivity">life hacks for remote workers</a>. Your phone is the other half of the digital day — fix the battery, free the storage, and turn off what's tracking you, and the "my phone is dying" panic goes with it.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8", newline="\n") as f:
    f.write(content)

print("Free station: 402->408 objects done.")
