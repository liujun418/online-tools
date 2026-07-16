"""Add 6 blogs to free station (212→218) — July 16, 2026"""
import os, sys

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "compound-interest-inflation-real-vs-nominal-returns",
    title: "Compound Interest and Inflation Why Your 7% Return Is Really Only 4% — Understanding Real vs Nominal Returns",
    description: "Your investment calculator says you'll have $1 million in 30 years. But inflation at 3% means that $1 million will only buy what $412,000 buys today. Here's how to calculate real returns.",
    date: "2026-07-16",
    category: "Calculators",
    tags: ["compound interest", "inflation", "real returns", "nominal returns", "investing"],
    relatedTools: ["compound-interest", "roi-calculator", "percentage-calculator"],
    content: `<p>You use a <a href="/en/tools/compound-interest">compound interest calculator</a>. You invest $500 per month for 30 years at 7% annual return. The calculator says: $609,000. You feel good. You are on track. But the calculator is showing you <strong>nominal returns</strong> — the raw dollar amount before inflation. At 3% average inflation, $609,000 in 30 years will only buy what <strong>$250,000 buys today</strong>. Your retirement plan is not as solid as the calculator made it look.</p>

<p>The difference between nominal returns and real returns is the most important concept in long-term investing — and the one that most calculators do not show you. Here is how to calculate real returns, why inflation is a wealth tax that compounds just like interest, and how to adjust your retirement planning accordingly.</p>

<h2>Nominal vs Real Returns: The Inflation Tax</h2>

<p><strong>Nominal return</strong> is the raw percentage your investment grows. If your portfolio goes from $10,000 to $10,700 in a year, your nominal return is 7%. This is the number your brokerage statement shows you and the number the compound interest calculator uses.</p>

<p><strong>Real return</strong> is the nominal return minus inflation — the actual increase in your purchasing power. If your nominal return is 7% and inflation is 3%, your real return is approximately 4% (the exact formula: (1 + 0.07) / (1 + 0.03) - 1 = 3.88%). Your money grew by 7%. Your purchasing power grew by 3.88%. The difference — 3.12% — was consumed by inflation. The inflation tax is silent and invisible. You do not see it on any statement. But it compounds every year, just like interest.</p>

<p>Over 30 years, the difference between 7% nominal and 4% real is enormous. $500 per month at 7% nominal for 30 years = $609,000. $500 per month at 4% real for 30 years = $347,000. The inflation tax consumed $262,000 of your retirement savings — 43% of the total. You did not lose it. It was never there. The nominal return was always an illusion.</p>

<h2>How to Use the Compound Interest Calculator with Inflation</h2>

<p>Use the <a href="/en/tools/compound-interest">compound interest calculator</a> with the <strong>real return rate</strong>, not the nominal rate. If you expect 7% nominal returns and 3% inflation, enter 4% as the interest rate. The calculator will show you the real value of your future savings in today's dollars. This is the number that actually matters for retirement planning.</p>

<p>Alternatively, use the nominal rate but mentally adjust the result. A rough rule of thumb: at 3% inflation, money loses half its purchasing power every 24 years. If you are 30 years from retirement, your future savings will buy about half of what the nominal number suggests. If you are 48 years from retirement, about one quarter. The rule of 72: divide 72 by the inflation rate to get the number of years it takes for prices to double (or purchasing power to halve). At 3% inflation: 72 / 3 = 24 years.</p>

<h2>Why This Matters More Than You Think</h2>

<p>Most retirement calculators show nominal returns. Most people plan based on nominal returns. Most people retire with less purchasing power than they expected. The gap between nominal and real is not a technical detail. It is the difference between "I can afford to retire" and "I need to work five more years." Use the real return rate. Plan in today's dollars. The compound interest calculator is a tool. The inflation adjustment is the wisdom.</p>

<p>Calculate your real returns at <a href="/en/tools/compound-interest">compound interest calculator</a> — use the real rate, not the nominal rate. Your future self will thank you for the honesty.</p>`
  },
  {
    slug: "lorem-ipsum-ux-design-placeholder-best-practices",
    title: "Lorem Ipsum Generator for UX Design Placeholder Text Best Practices — When to Use Dummy Text and When to Use Real Content",
    description: "Lorem ipsum is the universal placeholder text for design mockups. But using it incorrectly creates designs that break when real content is added. Here's when dummy text helps and when it hurts.",
    date: "2026-07-16",
    category: "Text Tools",
    tags: ["lorem ipsum", "UX design", "placeholder text", "mockup", "content design"],
    relatedTools: ["lorem-ipsum", "word-counter", "text-repeater"],
    content: `<p>You are designing a website. The content is not ready yet — the copywriter is still working on it. You need placeholder text to fill the design and show the client how the layout will look. You use a <a href="/en/tools/lorem-ipsum">lorem ipsum generator</a> to generate three paragraphs of dummy text. The design looks great. The client approves it. The copywriter delivers the real content. You replace the lorem ipsum. The design breaks. The real headline is longer than the placeholder. The real paragraph is shorter. The button text wraps to two lines. The spacing is wrong. The design that looked perfect with lorem ipsum looks broken with real content.</p>

<p>This is the most common UX design mistake — and it is caused by using placeholder text incorrectly. Here is when lorem ipsum helps, when it hurts, and how to use it without creating designs that break on real content.</p>

<h2>When Lorem Ipsum Helps</h2>

<p>Lorem ipsum is useful for: <strong>early-stage wireframes</strong> (when the content strategy is not yet defined, dummy text fills the space and lets you focus on layout), <strong>visual design exploration</strong> (testing typography, font sizes, line heights, and color schemes without real content distracting from the visual choices), and <strong>client presentations</strong> (showing the overall layout and structure before the content is finalized).</p>

<p>In these cases, lorem ipsum is a <strong>placeholder for content that does not exist yet</strong>. It is temporary. It will be replaced. The design is expected to change when real content arrives. The lorem ipsum is a stand-in, not a simulation.</p>

<h2>When Lorem Ipsum Hurts</h2>

<p>Lorem ipsum is harmful for: <strong>late-stage design</strong> (when the design is nearly final, real content should be used to verify that the layout works with actual text), <strong>content-heavy designs</strong> (blogs, news sites, e-commerce — where the content is the design, and lorem ipsum cannot simulate the actual content density and structure), and <strong>responsive design testing</strong> (lorem ipsum does not simulate how real content will reflow at different screen sizes).</p>

<p>The problem: lorem ipsum is <strong>too uniform</strong>. Real content has: varying word lengths (some words are short, some are long — lorem ipsum has a consistent distribution), varying sentence lengths (real sentences vary from a few words to dozens — lorem ipsum sentences are artificially consistent), and meaningful line breaks (real content has natural paragraph breaks based on meaning — lorem ipsum breaks are arbitrary). A design that works with lorem ipsum's uniform text will break when real, varied content is inserted. The headlines will be too long. The paragraphs will be too short. The spacing will be optimized for text that does not exist.</p>

<h2>The Best Practice: Use Real Content as Early as Possible</h2>

<p>Use lorem ipsum for the first draft. Replace it with real content as soon as the copywriter delivers the first version. Even a rough draft of real content is better than lorem ipsum for testing the design. The real content reveals the problems that lorem ipsum hides. The <a href="/en/tools/lorem-ipsum">lorem ipsum generator</a> is a starting point, not a finishing tool. Generate the dummy text. Build the layout. Replace with real content. Fix the layout. The lorem ipsum is the scaffold. The real content is the building. The scaffold comes down before anyone moves in.</p>`
  },
  {
    slug: "color-names-html-css-named-colors-guide",
    title: "Color Names Guide Beyond Basic Colors The Complete HTML CSS Named Colors Reference — and Why You Should Know More Than Just Red Green Blue",
    description: "CSS supports 148 named colors — from 'coral' to 'peru' to 'gainsboro.' Most developers know 10. Here's the complete reference and when to use named colors vs hex codes.",
    date: "2026-07-16",
    category: "Developer",
    tags: ["color names", "HTML", "CSS", "named colors", "web design"],
    relatedTools: ["color-names", "color-picker", "color-contrast-checker"],
    content: `<p>You write CSS and need a shade of blue. You type <code>background-color: blue;</code> The result is a harsh, saturated, #0000FF blue that looks like it was designed in 1995. You wanted a softer, more elegant blue. You open a <a href="/en/tools/color-names">color names reference</a> and discover: <code>cornflowerblue</code> (#6495ED — a soft, muted blue), <code>steelblue</code> (#4682B4 — a professional, gray-blue), <code>lightsteelblue</code> (#B0C4DE — a pale, airy blue), and <code>cadetblue</code> (#5F9EA0 — a teal-leaning blue). You did not know any of these existed. You have been writing hex codes for colors that already have names.</p>

<p>CSS supports 148 named colors. Most developers know about 10. Here is the complete reference, grouped by usefulness, and when to use named colors vs hex codes.</p>

<h2>The Most Useful Named Colors You Are Not Using</h2>

<p><strong>Warm neutrals:</strong> <code>cornsilk</code> (#FFF8DC — a warm, off-white that is easier on the eyes than pure white), <code>linen</code> (#FAF0E6 — a slightly warmer off-white), <code>oldlace</code> (#FDF5E6 — a warm, vintage white). These are better than <code>white</code> for backgrounds that will be read for extended periods. Pure white creates glare. Warm off-whites reduce eye strain.</p>

<p><strong>Sophisticated colors:</strong> <code>crimson</code> (#DC143C — a deep, rich red), <code>goldenrod</code> (#DAA520 — a dark gold, not the bright yellow of <code>gold</code>), <code>indigo</code> (#4B0082 — a deep purple-blue), <code>teal</code> (#008080 — a blue-green that works beautifully for accents). These are more sophisticated than the primary colors (<code>red</code>, <code>blue</code>, <code>green</code>) and convey a more professional design sensibility.</p>

<p><strong>Neutral grays:</strong> <code>gainsboro</code> (#DCDCDC — a light gray), <code>silver</code> (#C0C0C0 — a medium gray), <code>darkgray</code> (#A9A9A9 — a darker gray), <code>dimgray</code> (#696969 — a very dark gray), <code>slategray</code> (#708090 — a blue-gray). Grays are the most-used colors in web design after white and black. Knowing the named grays means you can write readable CSS without a color picker.</p>

<h2>When to Use Named Colors vs Hex Codes</h2>

<p><strong>Use named colors for:</strong> quick prototyping (typing <code>tomato</code> is faster than looking up #FF6347), learning and teaching (named colors are easier to remember and discuss), and CSS that you want to be readable at a glance (<code>background: linen;</code> communicates the intent better than <code>background: #FAF0E6;</code>).</p>

<p><strong>Use hex codes for:</strong> production CSS (hex codes are more precise and consistent across teams), design systems (brand colors should be defined as hex or HSL, not named colors), and any color that needs to match a specific brand or design specification. Named colors are a <strong>convenience</strong>. Hex codes are the <strong>standard</strong>.</p>

<p>The <a href="/en/tools/color-names">color names tool</a> is a reference — search for a color by name, see its hex code, and browse the complete list of 148 CSS named colors. It is the tool you open when you know what color you want but not what it is called, or when you know the name but not the hex code. Bookmark it. You will use it more than you expect.</p>`
  },
  {
    slug: "url-slug-generator-vs-url-encoder-clean-vs-encoded",
    title: "URL Slug Generator vs URL Encoder Clean URLs vs Encoded URLs — When to Make URLs Readable and When to Make Them Safe",
    description: "A URL slug generator turns 'My Article Title!' into 'my-article-title'. A URL encoder turns 'hello world' into 'hello%20world'. Both process URLs. Both are essential. But they solve opposite problems.",
    date: "2026-07-16",
    category: "Developer",
    tags: ["URL slug", "URL encoder", "clean URL", "percent encoding", "SEO"],
    relatedTools: ["text-to-slug", "url-encoder", "html-entities"],
    content: `<p>You create a blog post titled "Café Review: The Best Coffee in Montréal." The URL slug should be <code>/cafe-review-best-coffee-montreal</code> — clean, readable, and SEO-friendly. You use a <a href="/en/tools/text-to-slug">URL slug generator</a> to convert the title into a slug. The accents are removed, the spaces become hyphens, and the punctuation is stripped. The result is a URL that humans can read and search engines can index.</p>

<p>Now you need to pass the same title as a query parameter in an API request: <code>?q=Café Review: The Best Coffee in Montréal</code>. The spaces, accents, and punctuation will break the URL. You use a <a href="/en/tools/url-encoder">URL encoder</a> to convert the string to <code>?q=Caf%C3%A9%20Review%3A%20The%20Best%20Coffee%20in%20Montr%C3%A9al</code> — safe for transmission, but unreadable to humans. Both tools process URLs. Both are essential for web development. But they solve <strong>opposite problems</strong>. Here is when to use each.</p>

<h2>URL Slug Generator: Making URLs Readable</h2>

<p>A URL slug generator takes human-readable text and converts it to a URL-safe format optimized for <strong>readability</strong>. The process: lowercase the text, remove or transliterate accents and special characters (é → e, ñ → n), replace spaces and punctuation with hyphens, collapse multiple hyphens into one, and trim leading and trailing hyphens.</p>

<p>The goal is a URL that: a human can read and understand at a glance, a search engine can parse for keywords, and someone can type manually if needed. A good slug is a <strong>summary</strong> of the page content in URL form. <code>/blog/url-slug-generator-vs-url-encoder</code> tells you what the page is about before you click. <code>/blog/post.php?id=8472</code> tells you nothing.</p>

<p>Use the URL slug generator for: blog post URLs, product page URLs, category and tag URLs, and any URL that will be visible to users and indexed by search engines.</p>

<h2>URL Encoder: Making URLs Safe</h2>

<p>A URL encoder takes any string and converts it to a format that is <strong>safe for transmission</strong> in a URL. Characters that have special meaning in URLs (spaces, ampersands, question marks, equals signs) are replaced with percent-encoded equivalents. The goal is not readability. The goal is <strong>correctness</strong> — the encoded string will not break the URL structure or be misinterpreted by the server.</p>

<p>Use the URL encoder for: query parameters in API requests, form data submitted via GET, encoding special characters in URLs, and any context where the data must survive transmission through the URL without being corrupted or misinterpreted.</p>

<h2>When to Use Both</h2>

<p>A common workflow: use the slug generator to create the base URL path (<code>/blog/my-article</code>). Use the URL encoder to encode query parameters appended to that path (<code>?utm_source=twitter&utm_campaign=launch</code>). The path is readable. The parameters are safe. Both tools. One URL. The slug generator handles the <strong>structure</strong>. The URL encoder handles the <strong>data</strong>.</p>

<p>Use <a href="/en/tools/text-to-slug">URL slug generator</a> for readable paths and <a href="/en/tools/url-encoder">URL encoder</a> for safe parameters. Clean URLs and safe URLs. Different goals. Different tools.</p>`
  },
  {
    slug: "global-weather-vs-crypto-price-natural-vs-digital",
    title: "Global Weather vs Crypto Price Tracker Natural Data vs Digital Data — Two Real-Time Trackers That Could Not Be More Different",
    description: "Global weather tracks temperature, humidity, and wind speed — natural phenomena governed by physics. Crypto price tracks Bitcoin and Ethereum — digital assets governed by market psychology. Both are real-time. Both are data.",
    date: "2026-07-16",
    category: "Reference",
    tags: ["global weather", "crypto price", "real-time data", "tracking", "comparison"],
    relatedTools: ["global-weather", "crypto-price", "world-map"],
    content: `<p>You open a <a href="/en/tools/global-weather">global weather</a> tracker. It shows: Tokyo, 28°C, partly cloudy, 65% humidity, wind 12 km/h. The data comes from weather stations, satellites, and meteorological models. It is a measurement of <strong>physical reality</strong> — the temperature of the air, the moisture in the atmosphere, the movement of the wind. The weather exists whether or not anyone is measuring it. The tracker simply reports what is already true.</p>

<p>You open a <a href="/en/tools/crypto-price">crypto price tracker</a>. It shows: Bitcoin $67,342, up 2.3% in the last 24 hours. The data comes from exchange APIs — the price at which the last trade occurred. It is a measurement of <strong>human behavior</strong> — the collective belief about what a digital asset is worth. The price exists only because people agree it exists. The tracker reports what people believe, not what is physically true.</p>

<p>Both tools are real-time data trackers. Both display numbers that change throughout the day. Both are in the Reference category. But they track fundamentally different kinds of reality. Here is the difference.</p>

<h2>Global Weather: Tracking Physical Reality</h2>

<p>Weather data is <strong>objective</strong>. The temperature in Tokyo is 28°C. You can go outside and verify it with a thermometer. The measurement might be slightly off — the weather station might be in a different part of the city — but the underlying phenomenon is real and measurable. The weather exists independently of the measurement. The tracker is a <strong>window</strong> onto physical reality.</p>

<p>Weather data is also <strong>predictable</strong> (within limits). Meteorologists can forecast the weather 3-7 days in advance with reasonable accuracy. The predictions are based on physics — fluid dynamics, thermodynamics, atmospheric science. The forecast is a <strong>model</strong> of a physical system. The model is imperfect but grounded in reality.</p>

<p>Use the global weather tracker for: travel planning, outdoor event planning, understanding climate patterns, and satisfying curiosity about the world.</p>

<h2>Crypto Price Tracker: Tracking Human Belief</h2>

<p>Crypto prices are <strong>intersubjective</strong>. Bitcoin is worth $67,342 because enough people believe it is worth approximately that much and are willing to trade at that price. The price is real — you can buy and sell at that price — but it is real in the way that a language is real. It exists because enough people agree it exists. The tracker is a <strong>mirror</strong> of collective human belief.</p>

<p>Crypto prices are also <strong>unpredictable</strong>. No model can reliably forecast Bitcoin's price 7 days in advance. The price is driven by news, sentiment, regulation, technological changes, and market manipulation — none of which follow physical laws. The price chart is a history of human emotion, not a model of a physical system.</p>

<p>Use the crypto price tracker for: monitoring your investments, tracking market trends, and understanding the volatility of digital assets.</p>

<h2>The Philosophical Difference</h2>

<p>The weather tracker measures a world that exists whether or not we measure it. The crypto tracker measures a world that exists only because we collectively believe in it. Both are useful. Both are real. But they are real in different ways. The weather is real like a mountain. Crypto is real like a marriage. You cannot touch a marriage. But it is real. The same is true of a Bitcoin. The tracker reports the number. The number is real. The reality it measures is a collective human agreement.</p>

<p>Check the weather at <a href="/en/tools/global-weather">global weather</a> and the markets at <a href="/en/tools/crypto-price">crypto price tracker</a> — physical reality and digital belief. Two different kinds of real-time data.</p>`
  },
  {
    slug: "youtube-thumbnail-psychology-faces-bright-colors",
    title: "The Psychology of YouTube Thumbnails Why Faces with Exaggerated Expressions and Bright Colors Get More Clicks — and What the Research Says",
    description: "YouTube thumbnails with faces get 30% more clicks. Faces with exaggerated expressions get even more. Bright yellow and red backgrounds outperform blue and gray. Here's the psychology behind the patterns.",
    date: "2026-07-16",
    category: "Fun & Media",
    tags: ["YouTube thumbnail", "psychology", "click-through rate", "faces", "color"],
    relatedTools: ["youtube-thumbnail", "gif-search", "color-picker"],
    content: `<p>You scroll through YouTube. Hundreds of thumbnails compete for your attention. Which ones do you click? Research from YouTube analytics firms and academic studies reveals consistent patterns: thumbnails with <strong>faces</strong> get 30% more clicks than thumbnails without. Faces with <strong>exaggerated expressions</strong> (surprise, excitement, shock) get even more. <strong>Bright yellow and red</strong> backgrounds outperform blue and gray. <strong>High contrast</strong> thumbnails outperform flat, low-contrast ones. These patterns are not random. They are driven by deep-seated psychological responses that content creators have learned to exploit.</p>

<p>A <a href="/en/tools/youtube-thumbnail">YouTube thumbnail preview</a> tool helps you test how your thumbnail looks at different sizes. But understanding <strong>why</strong> some thumbnails work better than others helps you design the right thumbnail in the first place. Here is the psychology behind the patterns.</p>

<h2>Faces: The Hardwired Attention Magnet</h2>

<p>The human brain has a specialized region — the fusiform face area (FFA) — dedicated to processing faces. Newborns preferentially look at face-like patterns within hours of birth. Faces are the most <strong>attention-grabbing visual stimulus</strong> in the human cognitive repertoire. This is not a learned behavior. It is hardwired.</p>

<p>YouTube thumbnails exploit this: a face in the thumbnail triggers the FFA, drawing the viewer's attention away from the other thumbnails and toward yours. The face does not need to be attractive. It needs to be <strong>expressive</strong>. Exaggerated expressions — eyes wide open, mouth in an "O" shape, eyebrows raised — trigger the brain's emotion recognition system. The viewer's brain processes the expression before the viewer consciously decides to click. The emotional reaction is automatic. The click follows.</p>

<p>The most effective thumbnail expressions: surprise (wide eyes, open mouth), excitement (big smile, raised eyebrows), curiosity (head tilted, squinting slightly), and urgency (intense stare, furrowed brows). Neutral expressions are less effective than exaggerated ones. A face that looks like it is reacting to something interesting makes the viewer want to know what that something is.</p>

<h2>Color: The Contrast Advantage</h2>

<p>YouTube's background is white (light mode) or dark gray (dark mode). Thumbnails with <strong>high contrast</strong> against both backgrounds stand out regardless of the viewer's theme setting. The most effective colors: bright yellow (#FFCC00 range — the most attention-grabbing color in the visible spectrum), bright red (#FF0000 range — triggers arousal and urgency), and bright green (#00FF00 range — stands out against both white and dark backgrounds).</p>

<p>Blue and gray thumbnails blend into the background. They are less visible. They get fewer clicks. This is not because blue is a bad color. It is because blue is <strong>low contrast</strong> against YouTube's interface. The color choice is not about aesthetics. It is about <strong>visibility</strong>. The thumbnail that is most visible gets the most clicks, regardless of whether it is the most beautiful.</p>

<h2>The Thumbnail Size Problem</h2>

<p>Most viewers see thumbnails at 200×113 pixels on mobile — smaller than a postage stamp. The thumbnail that looks great at 1280×720 on your desktop design screen might be illegible at mobile size. The face becomes a blur. The text becomes unreadable. The contrast disappears. Use the <a href="/en/tools/youtube-thumbnail">YouTube thumbnail preview</a> to check your thumbnail at mobile size before publishing. If it is not clear at 200×113, redesign it. The mobile view is the view that matters. Most views come from mobile devices. Design for the size your audience actually sees.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("Free station: 212->done.")