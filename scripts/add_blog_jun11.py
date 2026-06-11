PATH = "C:/Users/jun/online-tools/src/lib/blog.ts"
with open(PATH, encoding="utf-8") as f:
    ts = f.read()

content = """<p>I almost bought a car last year. The dealer gave me a monthly payment of $389 for 60 months. I multiplied: $389 times 60 equals $23,340. The car was listed at $20,000. Somewhere, $3,340 had disappeared into interest and fees. A <a href="/en/tools/loan-calculator">loan calculator</a> showed me exactly where it went.</p>

<p>Dealers and lenders present monthly payments because they sound affordable. They rarely volunteer the total cost. Here is how to understand what you are actually paying.</p>

<h2>The Number the Dealer Hopes You Skip</h2>

<p>I asked for the APR. The salesperson changed the subject to monthly payment again. That is when I knew the APR was high. A <a href="/en/tools/loan-calculator">loan calculator</a> tells you the total interest over the life of the loan. On the $20,000 car at 6.5% for 60 months, the total interest is $3,475. That is 17% of the car's price, just in interest.</p>

<p>Counter-intuitive: a slightly lower monthly payment over a longer term costs MORE total interest. $20,000 at 6.5% for 60 months costs $3,475 in interest. The same loan at 72 months costs $4,215. The monthly payment drops by $60, but you pay $740 more in total interest. Longer terms are almost never better for the buyer.</p>

<h2>The Amortization Curve That Changed How I Think About Debt</h2>

<p>The <a href="/en/tools/loan-calculator">amortization schedule</a> showed me something I did not expect: in month 1, $279 of my $396 payment goes to interest. Only $117 goes to the car. By month 32, the split finally tips — more goes to principal than interest. This means making extra payments early in the loan saves dramatically more than extra payments later.</p>

<p>An extra $50 per month from the start saves about $800 in total interest. The same $50 per month starting in year 3 saves about $200. The timing of extra payments matters enormously because of how the interest front-loads.</p>

<p>The <a href="/en/tools/loan-calculator">free loan calculator</a> shows the full picture: monthly payment, total interest, and the amortization table. For home loans, use the <a href="/en/tools/mortgage-calculator">mortgage calculator</a> which adds property tax and insurance.</p>"""

post = """  {
    slug: "loan-calculator-dealership-guide",
    title: "What to Do When the Dealer's Numbers Don't Match Your Loan Calculator",
    description: "The monthly payment sounds fine until you multiply it by 60 and realize you are paying thousands in hidden interest. Here is how to spot it before you sign.",
    date: "2026-06-11",
    category: "Finance",
    tags: ["loan calculator", "car loan interest", "amortization", "APR vs monthly payment", "total loan cost", "dealer financing"],
    relatedTools: ["loan-calculator","mortgage-calculator","compound-interest"],
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
