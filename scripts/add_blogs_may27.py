PATH = "C:/Users/jun/online-tools/src/lib/blog.ts"
with open(PATH, encoding="utf-8") as f:
    ts = f.read()

c1 = """<p>Everyone knows the advice: use strong, unique passwords for every account. Everyone also uses the same three passwords everywhere. The gap between knowing and doing is real — strong passwords feel impossible to remember, and most people give up before they start.</p>

<p>A <a href="/en/tools/password-generator">password generator</a> solves the hard part. Here is how to actually build a password system that works.</p>

<h2>Why Your Brain Is Bad at Passwords</h2>

<p>Humans are terrible at randomness. When people create "random" passwords, they follow predictable patterns: capital first letter, a number at the end, common symbol substitutions (@ for a, 3 for e). Password cracking tools know all of these. They try dictionary words first, then common variations, then brute force.</p>

<p>A computer-generated random password has none of these weaknesses. The <a href="/en/tools/password-generator">password generator</a> uses the Web Crypto API — the same randomness source your browser uses for TLS encryption. Every character is truly random. No patterns to exploit.</p>

<h2>What Makes a Password Actually Strong</h2>

<p>Length beats complexity. A 16-character all-lowercase password is harder to crack than an 8-character password with uppercase, numbers, and symbols. Each additional character multiplies the possible combinations by the character set size. Going from 8 to 16 characters increases the search space by about 200 quadrillion times.</p>

<p>For most accounts, 16 characters with mixed case and numbers is enough. For email and banking, go to 20+ and include symbols. The generator lets you choose length and character types with sliders — no memorizing weird formulas.</p>

<h2>The Only Practical Solution: A Password Manager</h2>

<p>You cannot memorize 50 different 16-character random passwords. No one can. The solution is a password manager. Bitwarden is free and open source. It stores your passwords encrypted, auto-fills them on websites, and syncs across devices.</p>

<p>You memorize one strong master password — use four or five random words (like "correct-horse-battery-staple") — and the manager handles the rest. The generator creates the passwords, the manager stores them, and you only need to remember one.</p>

<p>If you want an extra layer, use the <a href="/en/tools/hash-generator">hash generator</a> to verify important passwords against known safe hashes, or the <a href="/en/tools/uuid-generator">UUID generator</a> for unique identifiers in your security setup.</p>

<p>Generate a <a href="/en/tools/password-generator">strong password</a> and put it in a password manager. That is the entire security strategy. It takes five minutes to set up and saves you from the most common attack vector.</p>"""

c2 = """<p>I almost bought a car last year. The salesperson gave me the monthly payment, and it sounded reasonable. Then I ran the numbers through a <a href="/en/tools/loan-calculator">loan calculator</a>. The total interest over five years was nearly $4,000. The monthly payment had been carefully chosen to sound affordable while hiding the true cost.</p>

<p>Understanding loan math takes five minutes and saves thousands. Here is what you need to know.</p>

<h2>How a Loan Actually Works</h2>

<p>A loan has three numbers: the <strong>principal</strong> (how much you borrow), the <strong>interest rate</strong> (what the lender charges), and the <strong>term</strong> (how long you have to pay it back). These three numbers determine your monthly payment and the total cost.</p>

<p>The sneaky part: early payments mostly go to interest, not principal. On a $20,000 five-year loan at 7%, your first payment of $396 is about $279 of interest and only $117 of principal. You do not start paying more principal than interest until month 32 of 60. This is why making extra payments early saves so much — an extra $50 per month from the start saves about $800 in total interest.</p>

<h2>APR vs Interest Rate: The Number That Matters</h2>

<p>The interest rate is what the lender charges for the money. The APR (Annual Percentage Rate) includes fees. If a lender advertises 5% interest but 5.8% APR, that 0.8% difference is fees baked into the rate. Always compare loans using APR, not the headline interest rate.</p>

<p>Other costs to watch: origination fees (1-5% of the loan amount, sometimes added to the balance), prepayment penalties (some lenders charge you for paying early), and whether the rate is fixed or variable. A variable rate at 5% might look cheaper than a fixed rate at 6% — until rates rise and your payment goes up.</p>

<h2>Use the Calculator Before You Sign</h2>

<p>The <a href="/en/tools/loan-calculator">free loan calculator</a> shows you the full picture. Enter the loan amount, interest rate, and term. It calculates your monthly payment, total interest, and generates an amortization schedule — a table showing exactly how much of each payment goes to interest vs principal over the life of the loan.</p>

<p>For home loans specifically, use the <a href="/en/tools/mortgage-calculator">mortgage calculator</a>, which factors in property tax and home insurance. First-time buyers often look at principal and interest alone and get surprised by the actual monthly cost — property tax and insurance can add 30-40%.</p>

<p>Run the numbers before you sign anything. The five minutes you spend with a <a href="/en/tools/loan-calculator">loan calculator</a> could save you thousands.</p>"""

posts = [
    ("password-generator-security-guide", "How to Actually Fix Your Password Problem (Without Memorizing 50 Random Strings)",
     "Stop reusing passwords. A password generator plus a password manager is the only practical security system — and it takes 5 minutes to set up.",
     "Security", "password generator, strong password generator, random password, password security, password manager guide, online password tool",
     "password-generator,hash-generator,uuid-generator", c1),
    ("loan-calculator-financial-guide", "Before You Sign Anything: How to Use a Loan Calculator to Understand What You Are Actually Paying",
     "That monthly payment looks reasonable until you see the total interest. A loan calculator shows you the real cost — and how to pay less.",
     "Finance", "loan calculator, calculate loan payments, loan amortization, APR vs interest rate, loan interest calculator, personal loan calculator",
     "loan-calculator,mortgage-calculator,compound-interest", c2),
]

new_entries = ""
for slug, title, desc, cat, tags, tools, content in posts:
    new_entries += f"""  {{
    slug: "{slug}",
    title: "{title}",
    description: "{desc}",
    date: "2026-05-27",
    category: "{cat}",
    tags: [{tags}],
    relatedTools: [{tools}],
    content: `
{content.strip()}
`,
  }},
"""

ts = ts[:ts.rfind("];")] + "\n" + new_entries + "\n];\n"

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

print(f"Added 2 posts. {len(ts)} chars")
