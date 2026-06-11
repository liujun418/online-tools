PATH = "C:/Users/jun/online-tools/src/lib/blog.ts"
with open(PATH, encoding="utf-8") as f:
    ts = f.read()

content = """<p>I was following a British recipe. It said 180 degrees Celsius and 200 grams of flour. My oven is Fahrenheit. My scale is ounces. I Googled each conversion individually. Then the recipe said 1.5 liters of stock and I had to convert that too. An <a href="/en/tools/unit-converter">online unit converter</a> would have done all of these in one place.</p>

<p>Unit conversion is not hard math. It is annoying math. The kind you do wrong at 7 AM while preheating the oven. Here is how to convert anything without opening five different Google tabs.</p>

<h2>The Conversion Mistake That Ruined My Cake</h2>

<p>I converted the oven temperature correctly: 180 C equals roughly 356 F. But I set my oven to 350 because that is the closest round number. The cake was underbaked. A 6-degree difference matters more than you think in baking. Counter-intuitive: rounding conversions is fine for weather. It is not fine for baking, chemistry, or medicine. Convert precisely, then make rounding decisions consciously.</p>

<p>The <a href="/en/tools/unit-converter">unit converter</a> covers temperature, weight, length, area, volume, speed, and time. Each category converts between metric and imperial with one input. No typing formulas, no guessing.</p>

<h2>Fluid Ounces Are Not the Same Everywhere</h2>

<p>A US fluid ounce is 29.57 milliliters. A UK fluid ounce is 28.41 milliliters. If you use a UK recipe and measure with US cups, every measurement is slightly off. One ingredient is not a problem. Ten ingredients with cumulative error is a ruined dish. The converter distinguishes between US and UK fluid ounces so you do not have to think about it.</p>

<p>Same issue with gallons. US gallon = 3.785 liters. UK gallon = 4.546 liters. If you are reading a British car review that says 40 miles per gallon, and you think in US gallons, you are getting the fuel economy wrong by 20 percent.</p>

<h2>When Speed Conversions Matter</h2>

<p>You are driving in Canada and the speed limit sign says 100. That is kilometers per hour, not miles per hour. The difference between 100 km/h (62 mph) and 100 mph (161 km/h) is a speeding ticket. The converter handles km/h, mph, meters per second, and knots in one place.</p>

<p>Bookmark the <a href="/en/tools/unit-converter">unit converter</a>. It is faster than Googling each conversion separately, and more accurate than doing mental math that you will second-guess anyway.</p>"""

post = """  {
    slug: "unit-converter-quick-guide",
    title: "How to Convert Any Unit in Under 3 Seconds Without Googling Each One",
    description: "Stop typing conversion queries into Google one at a time. A proper unit converter handles length, weight, temperature, and volume all in one place.",
    date: "2026-06-07",
    category: "Tools",
    tags: ["unit converter", "metric to imperial", "unit conversion", "Celsius to Fahrenheit", "kg to lbs", "converter tool"],
    relatedTools: ["unit-converter","base-converter","roman-numerals"],
    content: `
"""

post += content.strip() + "\n`,\n  },\n"

ts = ts[:ts.rfind("];")] + "\n" + post + "\n];\n"

if "export function getBlogPosts" not in ts:
    ts += """
export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
"""

with open(PATH, "w", encoding="utf-8") as f:
    f.write(ts)
print(f"Done. {len(ts)} chars")
