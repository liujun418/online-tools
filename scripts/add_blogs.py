"""Add 6 blogs to free station (355→361) — August 12, 2026"""
import os, sys

BLOG_FILE = r"C:\Users\jun\online-tools\src\lib\blog.ts"

with open(BLOG_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n];\n\nexport function getBlogPosts(): BlogPost[]'

new_blogs = r"""
  {
    slug: "discount-calculator-online-shopping-bogo-deals",
    title: "Discount Calculator for Online Shopping How to Compare 30% Off vs Buy One Get One Deals",
    description: "You see 30% OFF on one item and BUY ONE GET ONE on the other. Which is the better deal? The answer is not always obvious. A discount calculator reveals the real price. Here's the shopping comparison workflow.",
    date: "2026-08-12",
    category: "Calculator",
    tags: ["discount calculator", "buy one get one", "sale price", "online shopping", "deal"],
    relatedTools: ["discount-calculator", "percentage-calculator", "tip-calculator"],
    content: `<p>You are shopping online. Two deals catch your eye. One item is <strong>30% off</strong>. A second item is <strong>buy one get one</strong>. Both sound good. But which saves you more money? The answer depends on the prices. A <a href="/en/tools/discount-calculator">discount calculator</a> reveals the real cost. Here is the shopping comparison workflow.</p>

<h2>How to Compare Deals with a Discount Calculator</h2>

<p><strong>Calculate the 30% off deal.</strong> Take the full price. Multiply by 30% to find the discount. Subtract it from the price. A $50 jacket becomes $35. The <a href="/en/tools/discount-calculator">discount calculator</a> does this instantly. Enter the price and the percent. It shows the sale price and the amount you save. <strong>Calculate the buy one get one deal.</strong> Buy one get one usually means you pay the higher price and get the lower-price item free. If both items are $50, you pay $50 for two — effectively $25 each, or <strong>50% off</strong>. If one item is $80 and the other is $30, you pay $80 for both. That is roughly 27% off the total. The <a href="/en/tools/discount-calculator">discount calculator</a> helps you compare the two scenarios side by side. <strong>Watch the wording.</strong> "Buy one get one 50% off" is not the same as "buy one get one free." The wording changes the math completely. The <a href="/en/tools/percentage-calculator">percentage calculator</a> helps you verify the true discount percentage in any wording. <strong>Factor in the tip-style extras.</strong> Shipping, taxes, and minimum-order requirements change the final cost. The <a href="/en/tools/tip-calculator">tip calculator</a> handles split-payment scenarios when you shop with friends. The <a href="/en/tools/discount-calculator">discount calculator</a> is the deal-breaker tool. The shopper is the decision maker. The combination reveals the real price before you click buy.</p>`
  },
  {
    slug: "random-name-generator-game-dev-character-naming",
    title: "Random Name Generator for Game Developers How to Name NPCs, Characters, and Locations",
    description: "You've built your game world. Every NPC needs a name — tavern keeper, blacksmith, quest giver. Naming 50 characters by hand takes hours. A random name generator produces names in seconds. Here's the character naming workflow.",
    date: "2026-08-12",
    category: "Fun & Media",
    tags: ["random name generator", "game development", "NPC", "character names", "world building"],
    relatedTools: ["random-name-generator", "random-number-generator", "lorem-ipsum"],
    content: `<p>You are building a game. Your world has a harbor town with 40 NPCs. The blacksmith needs a name. The tavern keeper needs a name. The quest giver, the guard, the fishmonger — each one needs a name that fits the world. Naming them by hand takes hours. A <a href="/en/tools/random-name-generator">random name generator</a> produces names in seconds. Here is the character naming workflow.</p>

<h2>How to Name Your Game Characters</h2>

<p><strong>Generate a pool of candidates.</strong> Open the <a href="/en/tools/random-name-generator">random name generator</a>. Generate twenty names. The tool mixes syllables and sounds to produce fantasy, modern, or generic names. You are not committing to any of them yet. You are building a pool. <strong>Match names to roles.</strong> A blacksmith sounds different from a court mage. Generate separate pools for each culture in your world. Elven names, dwarf names, and human names should feel distinct. The <a href="/en/tools/random-name-generator">random name generator</a> helps you keep each culture consistent. <strong>Add meaning.</strong> A good name hints at the character. Combine a generated name with a descriptor: "Roran the Iron-Fisted" or "Mira the Quiet." The generator gives you the raw material. You add the story. <strong>Name locations too.</strong> The same workflow names towns, taverns, and dungeons. Generate a list, filter the weak ones, and keep the strong. The <a href="/en/tools/lorem-ipsum">lorem ipsum generator</a> creates placeholder descriptions for your characters and locations. The <a href="/en/tools/random-number-generator">random number generator</a> handles stats and dice rolls. The <a href="/en/tools/random-name-generator">random name generator</a> is the naming engine. The developer is the storyteller. The combination populates your world in minutes.</p>`
  },
  {
    slug: "random-quote-generator-writing-prompts",
    title: "Random Quote Generator for Writers How to Use Daily Quotes as Writing Prompts",
    description: "You want to write but the blank page stares back. You need a starting point. A random quote can spark the first line. Here's the writing prompt workflow.",
    date: "2026-08-12",
    category: "Fun & Media",
    tags: ["random quote", "writing prompts", "inspiration", "writer", "creative writing"],
    relatedTools: ["random-quote", "quotes", "book-of-answers"],
    content: `<p>You sit down to write. The page is blank. Your mind is blank too. You need a starting point — anything to break the silence. A single quote can do it. A <a href="/en/tools/random-quote">random quote generator</a> serves you a line from a thinker, a writer, or an unknown voice. You take that line and make it yours. Here is the writing prompt workflow.</p>

<h2>How to Use Quotes as Writing Prompts</h2>

<p><strong>Generate a quote.</strong> Open the <a href="/en/tools/random-quote">random quote generator</a>. It shows you a quote you have never seen. Do not judge it. Take it as a starting point. <strong>Find your angle.</strong> Read the quote three times. What does it assume? What does it contradict? Who said it, and what were they pushing against? Agree with it, argue with it, or take it literally. The <a href="/en/tools/random-quote">random quote generator</a> gives you the seed. You grow the story. <strong>Write the first 200 words.</strong> The quote becomes your first sentence or your epigraph. Write without stopping. Do not edit yet. The goal is momentum. A good prompt removes the "what do I write about" question so you can focus on the writing itself. <strong>Expand the collection.</strong> The <a href="/en/tools/quotes">quotes directory</a> lets you search quotes by topic — you can deepen a prompt you love. The <a href="/en/tools/book-of-answers">book of answers</a> offers a different kind of nudge when a quote feels too heavy. The <a href="/en/tools/random-quote">random quote generator</a> is the prompt engine. The writer is the interpreter. The combination turns a blank page into a draft in minutes.</p>`
  },
  {
    slug: "tip-calculator-vs-percentage-calculator-bills-vs-percentages",
    title: "Tip Calculator vs Percentage Calculator Splitting Restaurant Bills vs Everyday Percentages",
    description: "You're at dinner with four friends. You need to split the bill and add 18% tip. Later you need 15% off a jacket. A tip calculator handles the meal. A percentage calculator handles the shopping. Here's when each tool wins.",
    date: "2026-08-12",
    category: "Calculator",
    tags: ["tip calculator", "percentage calculator", "split bill", "restaurant tip", "comparison"],
    relatedTools: ["tip-calculator", "percentage-calculator", "discount-calculator"],
    content: `<p>Dinner is over. The check is $84.60. Your friend used a coupon, another skipped dessert, and the group wants to add an 18% tip before splitting five ways. You reach for a <a href="/en/tools/tip-calculator">tip calculator</a>. You enter the bill, the tip percent, and the number of people. The tool shows the tip amount, the total, and each person's share. The math is done in seconds. The tip calculator is a <strong>bill-focused</strong> tool. It is built for the restaurant table: bill, tip, split.</p>

<p>The next day you are shopping. A jacket costs $80 with <strong>15% off</strong>. You want to know the sale price. You reach for a <a href="/en/tools/percentage-calculator">percentage calculator</a>. You enter 80 and 15. The tool shows the discount and the final price. The percentage calculator is a <strong>general-purpose</strong> tool. It handles any percentage problem: discounts, interest, growth, grade scores, tax. It works wherever "percent of" appears.</p>

<p>Both tools do math. Both handle percentages. But the workflows differ. The <a href="/en/tools/tip-calculator">tip calculator</a> is for the <strong>restaurant workflow</strong> — it combines the tip and the split into one step, so you do not chain two calculations. The <a href="/en/tools/percentage-calculator">percentage calculator</a> is for the <strong>everyday workflow</strong> — one percentage, any context, including the tip percentage itself. For shopping deals, the <a href="/en/tools/discount-calculator">discount calculator</a> adds sale-price logic on top. The <a href="/en/tools/tip-calculator">tip calculator</a> handles the meal. The <a href="/en/tools/percentage-calculator">percentage calculator</a> handles everything else. Two tools for two workflows — both essential.</p>`
  },
  {
    slug: "coin-flip-vs-book-of-answers-decisions",
    title: "Coin Flip vs Book of Answers Binary Decisions vs Guided Randomness",
    description: "You can't decide between two options. A coin flip gives a binary answer. A book of answers gives a nudge. Both use randomness. But one resolves. One inspires. Here's when each fits.",
    date: "2026-08-12",
    category: "Fun & Media",
    tags: ["coin flip", "book of answers", "decision making", "random", "comparison"],
    relatedTools: ["coin-flip", "book-of-answers", "dice-roller"],
    content: `<p>You are choosing between two apartments. Both are good. You have analyzed rent, commute, and light for a week. You are stuck. A friend says "flip a coin." You use a <a href="/en/tools/coin-flip">coin flip</a>. The coin lands on one option. The instant it lands, you feel either relief or disappointment — and that feeling tells you what you actually wanted. The coin flip is a <strong>binary</strong> tool. It forces a yes-or-no answer and reveals your gut reaction.</p>

<p>Now you face a different kind of decision. You are not choosing between two options. You are low on ideas. You need a nudge, not a verdict. You open a <a href="/en/tools/book-of-answers">book of answers</a>. The tool gives you a phrase: "Trust the long game." It is not a literal instruction. It is a lens. You interpret it through your situation, and the interpretation sparks a direction. The book of answers is a <strong>guided</strong> tool. It feeds your thinking instead of ending it.</p>

<p>Both tools use randomness. Both break decision paralysis. But they work differently. The <a href="/en/tools/coin-flip">coin flip</a> is for <strong>binary choices</strong> — two options, one verdict, and a gut-check that follows. The <a href="/en/tools/book-of-answers">book of answers</a> is for <strong>open questions</strong> — when you need a fresh angle, not a final answer. The <a href="/en/tools/dice-roller">dice roller</a> extends the binary case to multiple options when you have three or more choices. The <a href="/en/tools/coin-flip">coin flip</a> is the tiebreaker. The <a href="/en/tools/book-of-answers">book of answers</a> is the muse. Different tools for different kinds of stuck.</p>`
  },
  {
    slug: "global-weather-science-forecasting",
    title: "The Science of Weather Forecasting How Meteorologists Predict 7-Day Forecasts",
    description: "The app says 70% chance of rain tomorrow. Where does that number come from? It's not a guess. Meteorologists use supercomputers, satellite data, and probability models. Here's how a 7-day forecast is actually made.",
    date: "2026-08-12",
    category: "Reference",
    tags: ["global weather", "forecasting", "meteorology", "7-day forecast", "science"],
    relatedTools: ["global-weather", "world-map", "nasa-apod"],
    content: `<p>Your phone says there is a <strong>70% chance of rain</strong> tomorrow. That number feels specific. Where does it come from? It is not a guess. It is the output of a system that collects millions of measurements, runs them through supercomputers, and translates the results into probability. A <a href="/en/tools/global-weather">global weather checker</a> shows you the forecast. Here is the science behind that forecast.</p>

<h2>How a 7-Day Forecast Is Made</h2>

<p><strong>Step 1: Collect the data.</strong> Thousands of weather stations measure temperature, pressure, humidity, and wind. Satellites photograph clouds from space. Weather balloons rise through the atmosphere twice a day, radioing conditions back. Ocean buoys measure sea-surface temperature. Every measurement feeds the model. <strong>Step 2: Run the model.</strong> The atmosphere is a fluid, and its behavior follows the laws of physics. Meteorologists divide the atmosphere into a grid — each cell the size of a small city. Supercomputers solve billions of equations to simulate how air, heat, and moisture move between cells. The result is a picture of the atmosphere days ahead. <strong>Step 3: Add the probability.</strong> The forecast is not a single outcome. The model is run many times with slightly different starting conditions — an approach called ensemble forecasting. If 70 of 100 runs predict rain, the forecast says <strong>70% chance of rain</strong>. That is why meteorologists speak in probability. <strong>Step 4: Trust the trend.</strong> Forecasts get more accurate as the event approaches. The 7-day outlook gives the trend; the 48-hour outlook is the reliable number. The <a href="/en/tools/world-map">world map</a> helps you visualize conditions across regions. The <a href="/en/tools/nasa-apod">NASA picture of the day</a> shows the satellite view that makes forecasting possible. The <a href="/en/tools/global-weather">global weather checker</a> is the front door to this system. The supercomputer is the engine. The result is the forecast you check before you step outside.</p>`
  },
];

export function getBlogPosts(): BlogPost[]"""

content = content.replace(old, new_blogs)

with open(BLOG_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("Free station: 355->361 done.")
