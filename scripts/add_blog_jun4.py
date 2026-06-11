PATH = "C:/Users/jun/online-tools/src/lib/blog.ts"
with open(PATH, encoding="utf-8") as f:
    ts = f.read()

content = """<p>I did my taxes last month and wondered: how much of my income actually goes to federal tax? Not my tax bracket — the rate matters less than the effective rate. An <a href="/en/tools/income-tax-calculator">income tax calculator</a> answered this in 10 seconds.</p>
<p>Tax brackets are widely misunderstood. Being in the 24 percent bracket does not mean you pay 24 percent on everything. Here is how it actually works.</p>
<h2>Marginal vs Effective Tax Rate</h2>
<p>Your marginal rate is the tax on your highest dollar of income. Your effective rate is what you actually pay as a percentage of total income. If you earn 75000 dollars as a single filer, your marginal rate might be 22 percent but your effective rate is closer to 15 percent after the standard deduction and graduated brackets. The calculator shows both numbers so you understand what you actually pay.</p>
<h2>How the Standard Deduction Changes Everything</h2>
<p>The standard deduction reduces your taxable income before any bracket applies. For 2025 it is 15000 dollars single and 30000 married. If you earn 75000, only 60000 is taxable. The first 11925 of that is taxed at 10 percent. Then the next portion at 12 percent. Only income above 48475 hits the 22 percent bracket. The deduction alone can drop you into a lower bracket.</p>
<p>The <a href="/en/tools/income-tax-calculator">free tax calculator</a> lets you switch between single and married filing status to compare. Enter your gross income and see your estimated federal tax, effective rate, and take-home pay.</p>"""

T = """  {{
    slug: "{}",
    title: "{}",
    description: "{}",
    date: "2026-06-04",
    category: "{}",
    tags: [{}],
    relatedTools: [{}],
    content: `
{}
`,
  }},
"""

post = T.format(
    "income-tax-calculator-guide",
    "How Tax Brackets Actually Work and Why Your Effective Rate Is Lower",
    "You are in the 24 percent bracket but that does not mean you pay 24 percent on everything. Understand marginal vs effective rates and why the standard deduction matters.",
    "Finance",
    '"tax brackets explained", "income tax calculator", "marginal vs effective tax rate", "standard deduction", "federal income tax estimator"',
    '"income-tax-calculator","loan-calculator","percentage-calculator"',
    content.strip()
)

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
