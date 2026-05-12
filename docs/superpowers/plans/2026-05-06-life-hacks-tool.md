# Life Hacks Tool Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a life hacks content-browsing tool with ~100 tips across 6 categories, featuring "Tip of the Day", category filtering, keyword search, and full SEO/multi-language support.

**Architecture:** Static data file → client component (Tip of the Day + tabs + search + card grid) → server page wrapper with metadata. No API calls needed.

**Tech Stack:** Next.js 16 (Turbopack), React, Tailwind CSS v4, TypeScript

**Spec:** `docs/superpowers/specs/2026-05-06-life-hacks-tool-design.md`

---

## Files Overview

| File | Action | Responsibility |
|------|--------|---------------|
| `src/lib/lifeHacks.ts` | **Create** | Data file: LifeHack interface + 100 tip entries |
| `src/app/tools/life-hacks/LifeHacksClient.tsx` | **Create** | Client component: Tip of the Day, category tabs, search, card grid |
| `src/app/[locale]/tools/life-hacks/page.tsx` | **Create** | Server component: locale validation, metadata, renders LifeHacksClient |
| `src/lib/tools.ts` | **Modify** | Add tool registration entry for "life-hacks" |

---

### Task 1: Create LifeHacks Data File

**Files:**
- Create: `src/lib/lifeHacks.ts`

- [ ] **Step 1: Write the interface and data**

```typescript
export interface LifeHack {
  id: string;
  category: "cleaning" | "kitchen" | "storage" | "laundry" | "home" | "quickfixes";
  emoji: string;
  title: string;
  content: string;
  seoKeywords?: string[];
}

export const lifeHacks: LifeHack[] = [
  // === CLEANING (17) ===
  { id: "cleaning-baking-soda-drain", category: "cleaning", emoji: "🧹", title: "Unclog drains with baking soda & vinegar", content: "Pour ½ cup baking soda down the drain, followed by ½ cup white vinegar. Cover with a plug and let it fizz for 15 minutes. Flush with hot water. This natural combination breaks down grease, soap scum, and hair without harsh chemicals.", seoKeywords: ["how to unclog drain naturally", "baking soda drain cleaner", "vinegar drain unclogger"] },
  { id: "cleaning-microwave-lemon", category: "cleaning", emoji: "🍋", title: "Clean a microwave with lemon", content: "Fill a microwave-safe bowl with 1 cup water and the juice of one lemon (drop the halves in too). Microwave on high for 3 minutes. The steam loosens grime and the lemon eliminates odors. Wipe the interior with a damp cloth — everything comes off easily.", seoKeywords: ["how to clean microwave naturally", "lemon microwave cleaner", "remove microwave odors"] },
  { id: "cleaning-vinegar-shower-head", category: "cleaning", emoji: "", title: "Descale a shower head with vinegar", content: "Fill a plastic bag with white vinegar and tie it around the shower head with a rubber band so the nozzles are submerged. Leave overnight. In the morning, remove the bag and run the shower — mineral deposits dissolve and water pressure improves.", seoKeywords: ["how to descale shower head", "vinegar shower head cleaning", "remove hard water from shower"] },
  { id: "cleaning-cornstarch-window", category: "cleaning", emoji: "✨", title: "Get streak-free windows with cornstarch", content: "Mix 1 tablespoon cornstarch into a spray bottle of warm water. Spray on windows and wipe with a microfiber cloth or newspaper. Cornstarch prevents streaking better than commercial cleaners and leaves no residue.", seoKeywords: ["streak-free window cleaning", "cornstarch window cleaner", "how to clean windows without streaks"] },
  { id: "cleaning-rubber-glove-hair", category: "cleaning", emoji: "", title: "Remove pet hair from furniture with rubber gloves", content: "Put on a damp rubber dishwashing glove and run your hand over upholstered furniture, car seats, or carpets. The rubber creates static that pulls hair away from fabric. Rinse the glove and repeat. Works better than any lint roller.", seoKeywords: ["remove pet hair from couch", "rubber glove pet hair trick", "how to get dog hair off furniture"] },
  { id: "cleaning-salt-rust-stain", category: "cleaning", emoji: "🧂", title: "Remove rust stains with salt and lemon", content: "Sprinkle coarse salt over the rust stain (on fabric, metal, or countertops). Squeeze fresh lemon juice over the salt and let it sit for 2 hours. Scrub gently and rinse. The citric acid breaks down rust while the salt acts as an abrasive.", seoKeywords: ["remove rust stains naturally", "salt and lemon rust remover", "how to get rust out of clothes"] },
  { id: "cleaning-eraser-drywall", category: "cleaning", emoji: "🧽", title: "Clean scuff marks off walls with an eraser", content: "Use a standard white pencil eraser to gently rub scuff marks, crayon marks, or dirt streaks off painted walls and baseboards. Works on semi-gloss and satin finishes. For tougher marks, slightly dampen the eraser first. No chemicals needed.", seoKeywords: ["remove scuff marks from wall", "how to clean painted walls", "eraser wall cleaning trick"] },
  { id: "cleaning-ice-cube-garbage-disposal", category: "cleaning", emoji: "🧊", title: "Sharpen and clean a garbage disposal with ice", content: "Drop 2 cups of ice cubes into the garbage disposal and turn it on. The ice sharpens the blades and scrapes away buildup. Follow with lemon or orange peels for a fresh scent. Do this monthly to keep your disposal running smoothly.", seoKeywords: ["how to clean garbage disposal", "garbage disposal maintenance", "sharpen garbage disposal blades"] },
  { id: "cleaning-toothpaste-faucet", category: "cleaning", emoji: "🪥", title: "Polish chrome faucets with toothpaste", content: "Apply a small amount of non-gel white toothpaste to a soft cloth and rub onto chrome faucets and fixtures. Buff with a clean damp cloth. The mild abrasive in toothpaste removes hard water spots and restores shine without scratching.", seoKeywords: ["clean chrome faucet toothpaste", "remove hard water spots from faucet", "how to polish chrome fixtures"] },
  { id: "cleaning-vodka-fabric-refresh", category: "cleaning", emoji: "🫗", title: "Refresh fabrics with vodka spray", content: "Fill a spray bottle with inexpensive vodka (no water needed) and lightly mist upholstered furniture, curtains, or clothing. As the vodka evaporates, it kills odor-causing bacteria. Works as a natural fabric refresher — no perfume residue left behind.", seoKeywords: ["natural fabric refresher", "vodka fabric spray", "remove odors from upholstery"] },
  { id: "cleaning-dishwasher-deep-clean", category: "cleaning", emoji: "🍽️", title: "Deep clean a dishwasher with vinegar", content: "Place a bowl of white vinegar on the top rack of an empty dishwasher and run a hot cycle. The vinegar dissolves grease, food particles, and mineral deposits inside the machine. Follow with a cycle using baking soda sprinkled on the bottom for extra freshness.", seoKeywords: ["how to clean dishwasher", "dishwasher maintenance", "remove dishwasher odors"] },
  { id: "cleaning-coffee-filter-dust", category: "cleaning", emoji: "☕", title: "Remove dust from baseboards with a coffee filter", content: "Wipe baseboards, ceiling fan blades, and light fixtures with a dry coffee filter. The filter's texture traps dust instead of just moving it around, and it leaves no lint behind. Much more effective than a dry cloth.", seoKeywords: ["remove dust from baseboards", "coffee filter cleaning hack", "dust ceiling fan blades"] },
  { id: "cleaning-wd40-sticker", category: "cleaning", emoji: "🏷️", title: "Remove sticker residue with WD-40", content: "Spray a small amount of WD-40 on stubborn sticker residue, price tags, or adhesive marks. Wait 2 minutes, then wipe clean with a paper towel. WD-40 dissolves the adhesive without damaging most surfaces. Test on painted surfaces first.", seoKeywords: ["remove sticker residue", "WD-40 adhesive remover", "how to get sticker residue off"] },
  { id: "cleaning-toilet-bowl-fizz", category: "cleaning", emoji: "🚽", title: "Clean toilet bowl with baking soda and vinegar", content: "Sprinkle ½ cup baking soda into the toilet bowl. Pour 1 cup white vinegar over it and let it fizz for 15 minutes. Scrub with a toilet brush and flush. This natural combination removes stains, kills bacteria, and eliminates odors.", seoKeywords: ["natural toilet cleaner", "baking soda toilet cleaning", "how to clean toilet without chemicals"] },
  { id: "cleaning-magic-eraser-grout", category: "cleaning", emoji: "🔲", title: "Whiten grout with a magic eraser", content: "Dampen a melamine sponge (Magic Eraser) and scrub stained grout lines. The micro-abrasive surface lifts dirt and discoloration without bleach. For heavily stained grout, make a paste of baking soda and water, apply, let sit 10 minutes, then scrub with the eraser.", seoKeywords: ["how to clean grout", "whiten grout lines", "magic eraser grout cleaning"] },
  { id: "cleaning-newspaper-mirror", category: "cleaning", emoji: "", title: "Clean mirrors and glass with newspaper", content: "Spray glass cleaner on mirrors and windows, then wipe with crumpled newspaper instead of paper towels. Newspaper leaves zero lint or streaks and the ink acts as a mild polishing agent. Use black-and-white pages only — avoid glossy sections.", seoKeywords: ["clean mirror without streaks", "newspaper window cleaning", "how to clean glass without lint"] },
  { id: "cleaning-olive-oil-wood-furniture", category: "cleaning", emoji: "", title: "Polish wood furniture with olive oil and lemon", content: "Mix 2 parts olive oil with 1 part lemon juice. Apply a small amount to a soft cloth and buff onto wood furniture. The oil nourishes the wood while the lemon cleans and adds shine. Use sparingly — a little goes a long way.", seoKeywords: ["natural wood polish", "olive oil furniture polish", "how to polish wood furniture naturally"] },

  // === KITCHEN (17) ===
  { id: "kitchen-onion-cutting-board", category: "kitchen", emoji: "🧅", title: "Remove onion smell from cutting board", content: "Rub the cutting board with half a lemon, then sprinkle with coarse salt and scrub. Rinse with cold water. The citric acid neutralizes sulfur compounds from onions and garlic. For plastic boards, a paste of baking soda and water works equally well.", seoKeywords: ["remove onion smell from cutting board", "cutting board odor removal", "how to clean garlic smell"] },
  { id: "kitchen-ice-cube-blender", category: "kitchen", emoji: "🧊", title: "Clean a blender with ice and soap", content: "Fill the blender halfway with ice cubes, add 1 cup warm water and a squirt of dish soap. Blend on high for 30 seconds. The ice scrubs the blades and pitcher interior without you having to reach in. Rinse thoroughly. Your blender will look brand new.", seoKeywords: ["how to clean blender", "clean blender blades safely", "blender deep cleaning"] },
  { id: "kitchen-bread-stale-cookies", category: "kitchen", emoji: "", title: "Keep cookies soft with a slice of bread", content: "Place a slice of bread in your cookie jar or tin with your cookies. The cookies absorb moisture from the bread, staying soft for days. Replace the bread every 2-3 days. Works with brown sugar too — add a marshmallow to keep it from hardening.", seoKeywords: ["keep cookies soft", "soft cookie storage trick", "how to prevent cookies from going stale"] },
  { id: "kitchen-freezer-baking-soda", category: "kitchen", emoji: "🧊", title: "Eliminate freezer odors with baking soda", content: "Place an open box of baking soda in the back of your freezer. It absorbs odors from stored foods without affecting taste. Replace every 3 months. For existing odors, wipe the interior with a solution of 2 tablespoons baking soda per quart of warm water.", seoKeywords: ["remove freezer odor", "baking soda freezer", "how to clean freezer smell"] },
  { id: "kitchen-silicone-baking-mat", category: "kitchen", emoji: "🫓", title: "Clean silicone baking mats in the dishwasher", content: "Roll up silicone baking mats and place them on the top rack of your dishwasher. The high heat and detergent remove baked-on grease and food residue completely. Air dry flat afterward. If hand-washing, use warm soapy water and avoid abrasive scrubbers.", seoKeywords: ["clean silicone baking mat", "how to clean baking mat", "silicone mat maintenance"] },
  { id: "kitchen-lemon-microwave-deodorize", category: "kitchen", emoji: "", title: "Deodorize a cutting board with lemon and salt", content: "Cut a lemon in half and use it to scrub the cutting board surface, then sprinkle with coarse salt. Let sit for 5 minutes, then rinse. This removes stains, eliminates odors, and naturally sanitizes the surface. Works on both wood and plastic boards.", seoKeywords: ["natural cutting board cleaner", "lemon salt cutting board", "sanitize cutting board naturally"] },
  { id: "kitchen-egg-separation", category: "kitchen", emoji: "🥚", title: "Separate egg yolks with your fingers", content: "Crack the egg into your clean hand over a bowl. Let the whites slip through your slightly spread fingers while the yolk stays in your palm. Much faster and more reliable than shell-to-shell separation, and you won't break the yolk.", seoKeywords: ["how to separate egg yolks", "egg yolk separation trick", "best way to separate eggs"] },
  { id: "kitchen-turmeric-stain", category: "kitchen", emoji: "💛", title: "Remove turmeric stains from countertops", content: "Turmeric stains are notorious. Make a paste of baking soda and water, apply to the stain, and let it sit for 15 minutes. Scrub gently with a soft cloth. For stubborn stains on stone counters, use hydrogen peroxide instead — it lifts the yellow without damaging the surface.", seoKeywords: ["remove turmeric stain", "turmeric stain removal", "how to get turmeric off counter"] },
  { id: "kitchen-avocado-ripening", category: "kitchen", emoji: "🥑", title: "Ripen avocados quickly in a paper bag", content: "Place unripe avocados in a brown paper bag with a banana or apple. These fruits release ethylene gas that speeds up ripening. Check after 12-24 hours. For even faster results, wrap each avocado in aluminum foil and place in a 200°F oven for 10 minutes.", seoKeywords: ["how to ripen avocado fast", "ripen avocado in paper bag", "quick avocado ripening"] },
  { id: "kitchen-herb-freezing", category: "kitchen", emoji: "🌿", title: "Preserve fresh herbs in olive oil ice cubes", content: "Chop fresh herbs (basil, cilantro, parsley) and pack them into an ice cube tray. Cover with olive oil and freeze. Pop out cubes as needed for cooking. The oil preserves flavor and color far better than freezing in water, and you get pre-measured portions.", seoKeywords: ["preserve fresh herbs", "freeze herbs in oil", "how to store fresh herbs long term"] },
  { id: "kitchen-banana-ripening", category: "kitchen", emoji: "🍌", title: "Slow down banana ripening by wrapping stems", content: "Wrap the crown (stem end) of a banana bunch tightly with plastic wrap or aluminum foil. This blocks ethylene gas release from the stems, slowing the ripening process by 3-5 days. Store at room temperature, not in the fridge — cold damages banana cell walls.", seoKeywords: ["keep bananas fresh longer", "slow banana ripening", "banana storage tip"] },
  { id: "kitchen-cast-iron-care", category: "kitchen", emoji: "", title: "Clean cast iron with coarse salt", content: "While the pan is still warm, sprinkle coarse salt and scrub with a paper towel or chainmail scrubber. The salt acts as a gentle abrasive that removes food without damaging the seasoning. Never use soap — it strips the protective oil layer. Rinse, dry immediately, and rub with a thin layer of oil.", seoKeywords: ["how to clean cast iron pan", "cast iron maintenance", "remove food from cast iron"] },
  { id: "kitchen-garlic-peeling", category: "kitchen", emoji: "🧄", title: "Peel garlic cloves in 10 seconds", content: "Place a garlic clove on a cutting board. Lay the flat side of a chef's knife over it and press down firmly with the heel of your hand. The skin loosens instantly and slides right off. For multiple cloves, shake them vigorously in a sealed jar for 20 seconds.", seoKeywords: ["quick garlic peeling", "how to peel garlic fast", "garlic peeling hack"] },
  { id: "kitchen-tomato-ripening", category: "kitchen", emoji: "🍅", title: "Ripen green tomatoes on the counter", content: "Place green tomatoes stem-side down on the counter, out of direct sunlight. They'll ripen in 3-7 days. To speed it up, put them in a paper bag with a ripe banana. Never refrigerate unripe tomatoes — cold temperatures destroy the enzymes needed for ripening.", seoKeywords: ["how to ripen green tomatoes", "ripen tomatoes at home", "green tomato ripening"] },
  { id: "kitchen-coffee-ground-fridge", category: "kitchen", emoji: "☕", title: "Use coffee grounds to absorb fridge odors", content: "Spread dried used coffee grounds on a small plate and place in the back of your refrigerator. Coffee is highly absorbent and neutralizes odors better than baking soda. Replace weekly. Bonus: the faint coffee scent is pleasant and doesn't transfer to food.", seoKeywords: ["remove fridge odor", "coffee grounds odor absorber", "natural fridge deodorizer"] },
  { id: "kitchen-pineapple-core", category: "kitchen", emoji: "🍍", title: "Core a pineapple with a bottle", content: "Cut off the top and bottom of a pineapple. Place an empty glass bottle upside down over the center and push down firmly while rotating the pineapple. The core slides into the bottle and the edible flesh stays in neat rings. Much easier than cutting with a knife.", seoKeywords: ["how to core pineapple easily", "pineapple coring trick", "remove pineapple core"] },
  { id: "kitchen-lettuce-crisping", category: "kitchen", emoji: "🥬", title: "Revive wilted lettuce in ice water", content: "Submerge wilted lettuce, celery, or carrot sticks in a bowl of ice water for 15-30 minutes. The cold water rehydrates the cells through osmosis, making them crisp again. Add a splash of lemon juice for extra freshness. Pat dry before storing.", seoKeywords: ["revive wilted lettuce", "crisp lettuce ice water", "how to make lettuce crispy again"] },

  // === STORAGE & ORGANIZATION (17) ===
  { id: "storage-shower-curtain-rods", category: "storage", emoji: "📦", title: "Organize cables with shower curtain rings", content: "Hang power strips, extension cords, and charging cables from shower curtain rings on a closet rod or peg hooks. Each ring holds one cable, keeping them visible and tangle-free. Label each ring with a clip-on tag for quick identification.", seoKeywords: ["cable organization hack", "organize cords and cables", "cable management solution"] },
  { id: "storage-toilet-paper-rolls-cords", category: "storage", emoji: "🧻", title: "Store cords in toilet paper rolls", content: "Fold charging cables, earbuds, and small cords and tuck them into empty toilet paper rolls. Stand the rolls upright in a shoebox — each cable has its own slot. No more tangled drawer mess. Label the outside of each roll with a marker.", seoKeywords: ["organize cables toilet paper roll", "cord storage hack", "cable organizer DIY"] },
  { id: "storage-command-hooks-baskets", category: "storage", emoji: "🗄️", title: "Use command hooks to hang lightweight baskets", content: "Mount command hooks on closet doors, behind doors, or on walls to hang small wire or fabric baskets. Perfect for organizing mail, keys, sunglasses, or toiletries. Command hooks hold up to 5 lbs and remove cleanly — ideal for renters.", seoKeywords: ["renter-friendly storage", "command hook organization", "small space storage ideas"] },
  { id: "storage-muffin-tin-small-items", category: "storage", emoji: "🧁", title: "Organize small items with a muffin tin", content: "Use a muffin tin in a drawer to organize rubber bands, paper clips, thumbtacks, and other small office supplies. Each cup holds a different item, keeping everything visible and accessible. A dollar-store tin works perfectly.", seoKeywords: ["organize small items", "muffin tin organizer", "drawer organization hack"] },
  { id: "storage-under-bed-storage", category: "storage", emoji: "🛏️", title: "Maximize under-bed storage with rolling bins", content: "Use flat, rolling storage bins under the bed for off-season clothing, extra linens, or shoes. Look for bins with clear tops so you can see contents. Vacuum storage bags compress bulky items like winter coats to save even more space.", seoKeywords: ["under bed storage ideas", "maximize closet space", "small bedroom storage"] },
  { id: "storage-door-shoe-organizer", category: "storage", emoji: "👞", title: "Use a shoe organizer for more than shoes", content: "Hang an over-the-door shoe organizer in the pantry for snacks, in the bathroom for toiletries, in the closet for accessories, or in the craft room for supplies. Each pocket is a visible, accessible storage compartment. Works great in small apartments.", seoKeywords: ["shoe organizer uses", "over door storage ideas", "apartment organization"] },
  { id: "storage-tension-rod-dividers", category: "storage", emoji: "📐", title: "Create dividers with tension rods", content: "Install tension rods inside cabinets or drawers to create vertical dividers. Perfect for separating cutting boards, baking sheets, lids, or cleaning supplies. Tension rods require no drilling and adjust to any width. Ideal for renters.", seoKeywords: ["tension rod storage", "cabinet divider hack", "kitchen organization tips"] },
  { id: "storage-clear-containers", category: "storage", emoji: "🏺", title: "Use clear containers for pantry items", content: "Transfer dry goods (pasta, rice, cereal, snacks) into clear airtight containers with labels. You can see exactly what you have and how much is left. Stackable square containers maximize shelf space. Glass is best for freshness; BPA-free plastic works too.", seoKeywords: ["pantry organization", "clear storage containers", "kitchen pantry ideas"] },
  { id: "storage-s-hooks-hanging", category: "storage", emoji: "🪝", title: "Hang items with S-hooks under shelves", content: "Clip S-hooks onto wire shelving or closet rods to hang mugs, oven mitts, belts, scarves, or tools. Instantly creates vertical storage in any closet or kitchen. Double up hooks for items with multiple loops. Metal or plastic — both work.", seoKeywords: ["S-hook storage", "vertical storage ideas", "closet organization hack"] },
  { id: "storage-drawer-file-fold", category: "storage", emoji: "📁", title: "File-fold clothes in drawers", content: "Instead of stacking clothes, fold each item into a rectangle and stand it upright in the drawer (the KonMari method). You can see every item at a glance, nothing gets buried, and drawers hold 30% more. Works for t-shirts, underwear, socks, and activewear.", seoKeywords: ["file fold clothes", "drawer organization method", "KonMari folding technique"] },
  { id: "storage-label-maker-essential", category: "storage", emoji: "🏷️", title: "Label everything for lasting organization", content: "Use a label maker or masking tape to label containers, bins, shelves, and boxes. Even if you know what's inside now, future-you (and family members) will thank you. Label the front AND top of storage bins — top labels are visible when bins are stacked.", seoKeywords: ["labeling for organization", "storage bin labels", "home organization tips"] },
  { id: "storage-corner-shelf", category: "storage", emoji: "📐", title: "Add a corner shelf for unused space", content: "Install a floating corner shelf in any room to utilize dead space. Perfect for small items: keys by the door, toiletries in the bathroom, spices in the kitchen. Corner shelves are inexpensive and often don't require drilling (tension-mounted options exist).", seoKeywords: ["corner shelf storage", "utilize dead space", "small space shelving"] },
  { id: "storage-rolling-cart-portable", category: "storage", emoji: "🛒", title: "Use a rolling cart as mobile storage", content: "A 3-tier rolling cart works as a mobile pantry, craft station, bathroom storage, or home office. Wheels mean you can move it wherever you need it. IKEA's Råskog cart is a popular choice, but any similar cart works. Add small bins to each shelf for organization.", seoKeywords: ["rolling cart storage", "mobile storage cart", "multi-purpose storage cart"] },
  { id: "storage-magnetic-strip-kitchen", category: "storage", emoji: "🧲", title: "Mount a magnetic strip for metal items", content: "Install a magnetic knife strip on the wall to hold knives, scissors, metal spice tins, or tools. Frees up drawer and counter space while keeping items within reach. Magnetic strips are inexpensive and easy to install with screws or adhesive backing.", seoKeywords: ["magnetic strip storage", "knife wall mount", "kitchen wall storage"] },
  { id: "storage-cereal-box-dividers", category: "storage", emoji: "📦", title: "Make drawer dividers from cereal boxes", content: "Cut the bottoms off cereal or cracker boxes and wrap them in contact paper or fabric. Use them as dividers in drawers for socks, underwear, or office supplies. Free, customizable, and surprisingly sturdy. Cut to any size your drawer needs.", seoKeywords: ["DIY drawer dividers", "cereal box organizer", "free storage solution"] },
  { id: "storage-vacuum-bag-seasonal", category: "storage", emoji: "🧥", title: "Compress seasonal clothing with vacuum bags", content: "Pack winter coats, blankets, and seasonal clothing into vacuum storage bags. Use a vacuum cleaner to remove the air — items compress to a fraction of their size. Store under the bed or on high shelves. Reusable bags work season after season.", seoKeywords: ["vacuum storage bags", "compress clothing storage", "seasonal clothing storage"] },
  { id: "storage-pvc-pipe-garage", category: "storage", emoji: "🔧", title: "Organize long items with PVC pipes", content: "Cut PVC pipes into 3-foot sections and mount them horizontally in the garage to store wrapping paper, pool noodles, fishing rods, or lumber. Each pipe holds one item, keeping long things from falling over. Use pipe straps or zip ties to mount to the wall.", seoKeywords: ["garage organization PVC", "long item storage", "garage storage ideas"] },

  // === LAUNDRY & CLOTHING (17) ===
  { id: "laundry-white-vinegar-softener", category: "laundry", emoji: "👕", title: "Use white vinegar as fabric softener", content: "Add ½ cup white vinegar to the rinse cycle instead of commercial fabric softener. It softens clothes, eliminates odors, and prevents static — without the chemicals or buildup that commercial softeners leave. Your clothes won't smell like vinegar once dry.", seoKeywords: ["natural fabric softener", "vinegar laundry softener", "homemade fabric softener"] },
  { id: "laundry-ice-cube-dryer-wrinkles", category: "laundry", emoji: "🧊", title: "Remove wrinkles with an ice cube in the dryer", content: "Toss 2-3 ice cubes into the dryer with wrinkled clothes and run on high heat for 10 minutes. The ice melts into steam that relaxes the fabric fibers. Pull clothes out while still warm and hang immediately. Works best on cotton and linen.", seoKeywords: ["remove wrinkles dryer ice cube", "steam clothes in dryer", "wrinkle-free laundry hack"] },
  { id: "laundry-dish-soap-stain", category: "laundry", emoji: "🧴", title: "Remove grease stains with dish soap", content: "Apply a drop of clear dish soap (like Dawn) directly to grease or oil stains on clothing. Rub gently and let it sit for 10 minutes before washing as normal. Dish soap is designed to break down grease — it works better than most stain removers on oily stains.", seoKeywords: ["remove grease stain from clothes", "dish soap stain remover", "oil stain removal clothing"] },
  { id: "laundry-tennis-ball-dryer-fluff", category: "laundry", emoji: "", title: "Fluff pillows and jackets with tennis balls", content: "Toss 2-3 clean tennis balls into the dryer with down pillows, comforters, or puffer jackets. The balls bounce around and break up clumps, restoring loft and fluffiness. Use on low heat and check every 15 minutes. Works in a pinch for any bulky item.", seoKeywords: ["fluff pillows in dryer", "tennis ball dryer hack", "restore pillow loft"] },
  { id: "laundry-shaving-cream-stain", category: "laundry", emoji: "🪒", title: "Remove makeup stains with shaving cream", content: "Apply a small amount of white shaving cream (not gel) to foundation, lipstick, or eyeliner stains on clothing. Gently rub with a soft cloth, then rinse with cold water. The emollients in shaving cream break down the oils in makeup. Launder as usual afterward.", seoKeywords: ["remove makeup stain from clothes", "shaving cream stain remover", "lipstick stain removal"] },
  { id: "laundry-baking-soda-odor", category: "laundry", emoji: "🧁", title: "Eliminate laundry odor with baking soda", content: "Add ½ cup baking soda to your washing machine along with your regular detergent. It neutralizes odors at the source (sweat, smoke, mustiness) rather than masking them with fragrance. Works especially well for workout clothes and towels.", seoKeywords: ["remove smell from laundry", "baking soda laundry", "eliminate clothing odors"] },
  { id: "laundry-hair-dryer-quick-dry", category: "laundry", emoji: "💨", title: "Quick-dry a single garment with a hair dryer", content: "Lay the damp garment flat, place a dry towel on top, and use a hair dryer on medium heat to speed up drying. Flip periodically and move the dryer around. Works for shirts, socks, or underwear when you need something dry in a hurry. Keep the dryer 6 inches away to avoid damage.", seoKeywords: ["quick dry clothes hair dryer", "fast dry laundry", "emergency clothing dry"] },
  { id: "laundry-salt-wine-stain", category: "laundry", emoji: "🍷", title: "Remove red wine stains with salt", content: "Immediately blot (don't rub) the stain with a clean cloth. Cover generously with salt and let it sit for 30 minutes — the salt absorbs the wine. Brush off the salt and rinse with cold water. Launder as usual. The key is acting fast; the longer you wait, the harder it is to remove.", seoKeywords: ["remove red wine stain", "salt wine stain removal", "wine stain on clothes"] },
  { id: "laundry-velcro-sweater-pill", category: "laundry", emoji: "🧶", title: "Remove sweater pills with a velcro strip", content: "Use the hook side of a Velcro strip (or a dedicated fabric shaver) to gently swipe across pilled sweaters. The hooks catch and pull off the fuzzy pills without damaging the fabric. Works on cashmere, wool, and cotton blends. Replace the strip when it loses grip.", seoKeywords: ["remove sweater pills", "defuzz sweater", "sweater maintenance tip"] },
  { id: "laundry-lemon-white-clothes", category: "laundry", emoji: "🍋", title: "Whiten clothes with lemon juice", content: "Boil sliced lemons in a large pot of water. Remove from heat and add white clothes, letting them soak for 1 hour. The citric acid naturally brightens whites without bleach. For the washing machine, add ½ cup lemon juice to the wash cycle along with detergent.", seoKeywords: ["whiten clothes naturally", "lemon juice laundry whitener", "natural bleach alternative"] },
  { id: "laundry-dryer-sheet-static", category: "laundry", emoji: "⚡", title: "Prevent static cling with dryer sheets", content: "Toss a dryer sheet into every load. For items already static-charged, run a damp dryer sheet over them or lightly spray with water. To eliminate static entirely, add ¼ cup white vinegar to the rinse cycle — it softens fabric and prevents static buildup.", seoKeywords: ["prevent static cling", "remove static from clothes", "natural static remover"] },
  { id: "laundry-hydrogen-peroxide-blood", category: "laundry", emoji: "🩸", title: "Remove blood stains with hydrogen peroxide", content: "Apply 3% hydrogen peroxide directly to fresh blood stains. It will bubble as it breaks down the proteins. Blot with a clean cloth and rinse with cold water. Repeat if needed. Always use cold water — hot water sets blood stains permanently.", seoKeywords: ["remove blood stain from clothes", "hydrogen peroxide stain remover", "blood stain removal"] },
  { id: "laundry-zipper-lubricant", category: "laundry", emoji: "🔗", title: "Fix a stuck zipper with graphite or soap", content: "Rub the tip of a graphite pencil along the teeth of a stuck zipper, or rub a bar of soap over the teeth. Work the zipper up and down gently. The lubricant helps the slider move freely. For metal zippers, a small amount of petroleum jelly also works.", seoKeywords: ["fix stuck zipper", "zipper repair hack", "lubricate zipper"] },
  { id: "laundry-baby-shampoo-wool", category: "laundry", emoji: "🐑", title: "Hand-wash wool with baby shampoo", content: "Fill a basin with cool water and a capful of baby shampoo. Submerge wool items and gently squeeze (never wring or rub). Soak for 10 minutes, then rinse in cool water. Roll in a towel to remove excess water and lay flat to dry. Baby shampoo is gentle enough for delicate wool fibers.", seoKeywords: ["how to wash wool", "hand wash sweater", "wool care tips"] },
  { id: "laundry-cornstarch-grease-pre-treat", category: "laundry", emoji: "🌽", title: "Pre-treat grease stains with cornstarch", content: "Before washing, sprinkle cornstarch generously on fresh grease or oil stains. Let it sit for 30 minutes to absorb the oil, then brush off. The cornstarch pulls the grease out of the fabric, making the remaining stain much easier to wash out. Follow with dish soap for stubborn stains.", seoKeywords: ["cornstarch grease stain", "pre-treat oil stain", "remove cooking oil from clothes"] },
  { id: "laundry-dry-erase-marker-tag", category: "laundry", emoji: "🖊️", title: "Remove dry-erase marker from clothes", content: "Spray rubbing alcohol or hairspray on dry-erase marker stains and blot with a clean cloth. The alcohol dissolves the ink. For white fabrics, a paste of baking soda and water also works. Test on an inconspicuous area first to ensure no color damage.", seoKeywords: ["remove marker from clothes", "dry erase stain removal", "ink stain laundry"] },
  { id: "laundry-ironing-board-aluminum", category: "laundry", emoji: "", title: "Iron faster with aluminum foil under the cover", content: "Place a layer of aluminum foil (shiny side up) between your ironing board and its cover. The foil reflects heat back through the fabric, effectively ironing both sides at once. This cuts ironing time in half and is especially useful for dress shirts and linens.", seoKeywords: ["ironing hack aluminum foil", "faster ironing", "ironing board upgrade"] },

  // === HOME MAINTENANCE (16) ===
  { id: "home-pencil-hinge-squeak", category: "home", emoji: "✏️", title: "Stop door hinge squeaks with a pencil", content: "Rub the graphite tip of a pencil along the hinge pin and inside the hinge joints. The graphite acts as a dry lubricant that eliminates squeaking without attracting dust like oil-based lubricants. Works on door hinges, cabinet hinges, and window tracks.", seoKeywords: ["fix squeaky door hinge", "pencil hinge lubricant", "stop hinge squeaking"] },
  { id: "home-wd40-rust-tools", category: "home", emoji: "🔧", title: "Prevent rust on garden tools with WD-40", content: "After cleaning garden tools, spray a light coat of WD-40 on metal surfaces. Wipe off excess with a rag. The protective coating prevents rust during storage. Store tools in a dry place. Reapply every few months or after heavy use in wet conditions.", seoKeywords: ["prevent tool rust", "WD-40 garden tools", "tool maintenance"] },
  { id: "home-plunger-clog", category: "home", emoji: "🚿", title: "Unclog a shower drain with a plunger", content: "Cover the overflow drain with a wet cloth to create a proper seal. Fill the shower with enough water to cover the plunger cup. Place the plunger over the drain and pump vigorously 10-15 times. The pressure often dislodges hair and soap buildup. Follow with hot water.", seoKeywords: ["unclog shower drain", "plunger drain clog", "shower drain maintenance"] },
  { id: "home-vinegar-hard-water", category: "home", emoji: "", title: "Remove hard water deposits with vinegar", content: "Soak a cloth or paper towel in white vinegar and wrap it around faucets, shower heads, or glass surfaces with mineral buildup. Leave for 30 minutes to an hour, then wipe clean. For heavy deposits, use straight vinegar in a spray bottle and let it sit longer.", seoKeywords: ["remove hard water deposits", "vinegar mineral stain removal", "hard water stain cleaner"] },
  { id: "home-baking-soda-carpet-deodorize", category: "home", emoji: "🏠", title: "Deodorize carpets with baking soda", content: "Sprinkle baking soda generously over carpets and rugs. Let it sit for at least 30 minutes (overnight is best) to absorb odors. Vacuum thoroughly. For added freshness, mix a few drops of essential oil into the baking soda before sprinkling. Safe for pets and children.", seoKeywords: ["deodorize carpet naturally", "baking soda carpet freshener", "remove carpet odor"] },
  { id: "home-olive-oil-squeaky-floor", category: "home", emoji: "🪵", title: "Stop hardwood floor squeaks with talcum powder", content: "Sprinkle talcum powder or graphite powder into the cracks between floorboards where squeaking occurs. Work it in with a brush and sweep up excess. The powder lubricates the rubbing wood surfaces. For deeper squeaks, this is a temporary fix — permanent repair requires accessing from below.", seoKeywords: ["fix squeaky floor", "stop floor squeaking", "hardwood floor repair"] },
  { id: "home-rubber-band-screw", category: "home", emoji: "🔩", title: "Strip a screw with a rubber band", content: "Place a wide rubber band over the stripped screw head, then press your screwdriver firmly into the rubber band and turn. The rubber fills the gaps and provides grip. This works for Phillips and flat-head screws that have been stripped. Use a rubber band with good elasticity for best results.", seoKeywords: ["remove stripped screw", "rubber band screw trick", "fix stripped screw"] },
  { id: "home-dryer-vent-fire", category: "home", emoji: "🔥", title: "Prevent dryer fires by cleaning the vent", content: "Disconnect the dryer vent hose and vacuum out lint buildup. Clean the lint trap before every load. Run the dryer on an air-only (no heat) cycle monthly to clear internal lint. A clogged dryer vent is a leading cause of house fires — clean it at least once a year.", seoKeywords: ["clean dryer vent", "prevent dryer fire", "dryer maintenance"] },
  { id: "home-candle-soot-wall", category: "home", emoji: "🕯️", title: "Remove candle soot from walls with a dry sponge", content: "Use a dry cleaning sponge (available at hardware stores) to gently dab — not rub — soot marks on walls and ceilings. Rubbing pushes soot deeper into the paint. The sponge lifts soot particles without damaging paint. Replace the sponge surface as it gets dirty.", seoKeywords: ["remove candle soot from wall", "clean soot marks", "wall soot removal"] },
  { id: "home-silicone-caulk-mold", category: "home", emoji: "🛁", title: "Prevent bathroom mold with silicone caulk", content: "Apply a thin bead of 100% silicone caulk (with mold inhibitor) along the edges of your bathtub, shower, and sink. Smooth with a wet finger. Silicone is waterproof and mold-resistant. Re-caulk every 2-3 years when you see gaps or discoloration. Proper ventilation also prevents mold.", seoKeywords: ["prevent bathroom mold", "silicone caulk bathroom", "mold prevention tips"] },
  { id: "home-thermostat-savings", category: "home", emoji: "🌡️", title: "Save on heating bills by lowering the thermostat", content: "Lower your thermostat by 7-10°F for 8 hours per day (while sleeping or at work) to save up to 10% annually on heating. A programmable thermostat does this automatically. In winter, aim for 68°F when home and 60-62°F when away. Each degree lower saves about 3% on your bill.", seoKeywords: ["save on heating bill", "thermostat energy saving", "lower heating costs"] },
  { id: "home-faucet-washer-leak", category: "home", emoji: "💧", title: "Fix a dripping faucet by replacing the washer", content: "Turn off the water supply, remove the faucet handle, and replace the rubber washer inside. Washers cost about $1 at any hardware store. A dripping faucet wastes 3,000 gallons per year. If replacing the washer doesn't work, the valve seat may need replacing too.", seoKeywords: ["fix dripping faucet", "replace faucet washer", "stop faucet drip"] },
  { id: "home-vinegar-window-track", category: "home", emoji: "🪟", title: "Clean sticky window tracks with vinegar", content: "Spray white vinegar into window tracks and let it sit for 10 minutes. Use a toothbrush to scrub away dirt and debris. Wipe clean with a damp cloth. For heavy buildup, sprinkle baking soda in the track first, spray with vinegar, let it fizz, then scrub.", seoKeywords: ["clean window tracks", "sticky window track", "window maintenance"] },
  { id: "home-toilet-tank-clean", category: "home", emoji: "🚽", title: "Keep toilet tank clean with a vinegar soak", content: "Pour 1 cup white vinegar into the toilet tank and let it sit for several hours or overnight. This dissolves mineral deposits and prevents buildup that can affect flushing. Flush a few times to clear. Do this every 3-6 months. Never mix vinegar with bleach.", seoKeywords: ["clean toilet tank", "toilet maintenance", "remove toilet tank buildup"] },
  { id: "home-furnace-filter", category: "home", emoji: "🌀", title: "Replace furnace filters every 3 months", content: "Check your furnace filter monthly and replace every 1-3 months depending on use. A clogged filter makes your system work harder, increasing energy bills by up to 15%. Note the airflow direction arrow on the filter — it should point toward the furnace. Buy the correct size (printed on the old filter's frame).", seoKeywords: ["furnace filter replacement", "HVAC maintenance", "change furnace filter"] },
  { id: "home-dishwasher-spray-arm", category: "home", emoji: "🍽️", title: "Clean dishwasher spray arms monthly", content: "Remove the lower spray arm (usually twists off) and soak it in warm soapy water. Use a toothpick to clear any clogged holes. Reattach and run an empty hot cycle. Clean spray arms ensure proper water distribution and better cleaning results. Do this monthly for best performance.", seoKeywords: ["clean dishwasher spray arm", "dishwasher maintenance", "improve dishwasher cleaning"] },

  // === QUICK FIXES (16) ===
  { id: "quickfix-squeaky-shoe", category: "quickfixes", emoji: "👟", title: "Stop squeaky shoes with baby powder", content: "Sprinkle baby powder or talcum powder inside shoes where the insole rubs against the sole. The powder reduces friction that causes squeaking. For leather shoes, a small amount of leather conditioner on the tongue also helps. Works on both sneakers and dress shoes.", seoKeywords: ["stop shoes squeaking", "squeaky shoe fix", "silent shoes"] },
  { id: "quickfix-key-jingle", category: "quickfixes", emoji: "", title: "Stop key jingling with rubber bands", content: "Thread a small rubber band between keys on your keyring to act as a buffer. The rubber dampens the metal-on-metal sound when keys move. Alternatively, use a key organizer (like KeySmart) that holds keys flat. Both solutions eliminate the jingle completely.", seoKeywords: ["stop key jingling", "quiet keyring", "key organization"] },
  { id: "quickfix-wood-scratch-iodine", category: "quickfixes", emoji: "🪵", title: "Hide wood scratches with iodine or walnut", content: "For light scratches on wood furniture, rub the meat of a walnut over the scratch — the natural oils darken the exposed wood. For deeper scratches, dab a small amount of iodine (matching the wood tone) with a cotton swab. Let dry and buff gently.", seoKeywords: ["hide wood scratches", "fix scratched furniture", "wood scratch repair"] },
  { id: "quickfix-glasses-anti-fog", category: "quickfixes", emoji: "👓", title: "Prevent glasses from fogging with dish soap", content: "Put a tiny drop of clear dish soap on each lens and rub gently with your fingers. Rinse lightly and air dry — don't wipe off. The soap leaves an invisible film that prevents condensation from forming. Reapply every few days. Works on safety goggles and ski masks too.", seoKeywords: ["prevent glasses fogging", "anti-fog glasses", "stop glasses fogging up"] },
  { id: "quickfix-carpet-burn-hole", category: "quickfixes", emoji: "🔥", title: "Fix carpet burns from furniture with an ice cube", content: "Place an ice cube on the carpet indentation and let it melt completely. The water causes carpet fibers to swell back to their original height. Blot dry with a towel and fluff with a fork or your fingers. Works on most synthetic and wool carpets.", seoKeywords: ["remove carpet furniture marks", "fix carpet indentation", "carpet burn repair"] },
  { id: "quickfix-wine-glass-ring", category: "quickfixes", emoji: "🪵", title: "Remove water ring stains from wood", content: "For white water rings, place a clean cloth over the stain and iron on low heat for a few seconds — the heat draws the moisture out. For darker rings, mix equal parts baking soda and non-gel toothpaste, apply, rub gently with a soft cloth, and wipe clean.", seoKeywords: ["remove water ring from wood table", "water stain removal wood", "fix ring on furniture"] },
  { id: "quickfix-scuff-leather-shoes", category: "quickfixes", emoji: "👞", title: "Remove scuff marks from leather shoes with petroleum jelly", content: "Apply a small amount of petroleum jelly (Vaseline) to a soft cloth and rub into scuff marks on leather shoes. Buff with a clean cloth. The jelly fills the scuffed area and restores the leather's appearance. Follow with a leather conditioner for lasting protection.", seoKeywords: ["remove scuff from leather shoes", "leather shoe repair", "fix scuffed shoes"] },
  { id: "quickfix-battery-corrosion", category: "quickfixes", emoji: "🔋", title: "Clean battery corrosion with vinegar", content: "Remove batteries and dip a cotton swab in white vinegar. Dab the swab onto the corroded battery contacts until the white/green buildup dissolves. Dry thoroughly with a clean cloth before inserting new batteries. The acid in vinegar neutralizes the alkaline corrosion.", seoKeywords: ["clean battery corrosion", "remove battery acid", "battery terminal cleaning"] },
  { id: "quickfix-sticky-drawer", category: "quickfixes", emoji: "🗄️", title: "Fix sticky drawers with a candle", content: "Rub a plain white candle along the drawer runners and sides where friction occurs. The wax creates a smooth surface that lets the drawer glide. Reapply every few months. For metal runners, a small amount of silicone spray works even better.", seoKeywords: ["fix sticky drawer", "drawer won't slide", "lubricate drawer"] },
  { id: "quickfix-picture-frame-level", category: "quickfixes", emoji: "🖼️", title: "Hang pictures level with painter's tape", content: "Place a strip of painter's tape on the wall where you want the picture. Mark the nail position on the tape, then hang the picture by aligning its hanger with the mark. Remove the tape afterward — no pencil marks on your wall. For multiple pictures, use the tape method for each one.", seoKeywords: ["hang pictures straight", "level picture hanging", "picture frame alignment"] },
  { id: "quickfix-rust-tool-handle", category: "quickfixes", emoji: "🪓", title: "Remove rust from tool handles with aluminum foil", content: "Crumple aluminum foil into a ball and scrub rust off metal tool handles, grates, or small surfaces. The foil is abrasive enough to remove rust but softer than steel, so it won't scratch the surface. Dip the foil in water or cola for extra cleaning power.", seoKeywords: ["remove rust with aluminum foil", "rust removal hack", "clean rusty tools"] },
  { id: "quickfix-wooden-spoon-burn", category: "quickfixes", emoji: "🥄", title: "Remove burnt food from wooden spoons", content: "Simmer the wooden spoon in a pot of water with 2 tablespoons of baking soda for 10 minutes. The baking soda loosens burnt-on food. Scrub with a stiff brush and rinse. For stubborn stains, a paste of baking soda and vinegar works even better. Never soak wooden utensils.", seoKeywords: ["clean burnt wooden spoon", "wooden utensil care", "clean wooden cookware"] },
  { id: "quickfix-gum-shoe-hair", category: "quickfixes", emoji: "🍬", title: "Remove chewing gum with ice", content: "Hold an ice cube against the gum for 2-3 minutes until it hardens completely. The gum becomes brittle and can be peeled or scraped off easily. Works on shoes, hair, fabric, and carpet. For gum in hair, peanut oil also works — it dissolves the gum's stickiness.", seoKeywords: ["remove gum from shoe", "remove gum from hair", "gum removal ice cube"] },
  { id: "quickfix-marker-whiteboard", category: "quickfixes", emoji: "🖊️", title: "Remove permanent marker from whiteboards", content: "Draw over the permanent marker with a dry-erase marker. The solvents in the dry-erase ink dissolve the permanent ink. Wipe both away with a cloth or eraser. Works on glass, whiteboards, and most non-porous surfaces. Test on painted surfaces first.", seoKeywords: ["remove permanent marker whiteboard", "dry erase marker hack", "permanent marker removal"] },
  { id: "quickfix-candle-wax-carpet", category: "quickfixes", emoji: "🕯️", title: "Remove candle wax from carpet with heat", content: "Place a paper towel or brown paper bag over the wax. Set an iron to low heat (no steam) and press over the paper for 10-15 seconds. The wax melts and absorbs into the paper. Repeat with fresh paper until all wax is removed. Vacuum any remaining residue.", seoKeywords: ["remove candle wax from carpet", "candle wax removal", "clean wax stain"] },
  { id: "quickfix-tape-residue-hand", category: "quickfixes", emoji: "🤲", title: "Remove adhesive residue with cooking oil", content: "Rub a small amount of cooking oil (olive, vegetable, or baby oil) onto sticky residue on skin, glass, or plastic. Let it sit for 2 minutes, then wipe clean with a paper towel. The oil breaks down the adhesive. Follow with soap and water. Works on price tag residue, tape marks, and sticker remnants.", seoKeywords: ["remove sticky residue", "adhesive removal oil", "remove tape residue"] },
];

export const categories = [
  { id: "cleaning" as const, label: "Cleaning", emoji: "🧹", count: 17 },
  { id: "kitchen" as const, label: "Kitchen", emoji: "🍳", count: 17 },
  { id: "storage" as const, label: "Storage & Organization", emoji: "📦", count: 17 },
  { id: "laundry" as const, label: "Laundry & Clothing", emoji: "", count: 17 },
  { id: "home" as const, label: "Home Maintenance", emoji: "🏠", count: 16 },
  { id: "quickfixes" as const, label: "Quick Fixes", emoji: "💡", count: 16 },
];
```

- [ ] **Step 2: Verify file compiles**

Run: `cd C:\Users\jun\online-tools && npx tsc --noEmit src/lib/lifeHacks.ts 2>&1`
Expected: No errors (file is pure TypeScript, no JSX)

- [ ] **Step 3: Commit**

```bash
cd C:\Users\jun\online-tools
git add src/lib/lifeHacks.ts
git commit -m "feat: add life hacks data with 100 tips across 6 categories"
```

---

### Task 2: Create Server Page Component

**Files:**
- Create: `src/app/[locale]/tools/life-hacks/page.tsx`

- [ ] **Step 1: Write the server page component**

```typescript
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import LifeHacksClient from "@/app/tools/life-hacks/LifeHacksClient";
import { tools } from "@/lib/tools";
import { isValidLocale, getDictionary, Locale } from "@/lib/i18n";

const SITE_URL = "https://www.toolboxonline.club";
const SITE_NAME = "ToolBoxOnline";
const OG_IMAGE = `${SITE_URL}/og-default.png`;
const TOOL_ID = "life-hacks";
const LOCALE_OG: Record<string, string> = { en: "en_US", es: "es_ES", ar: "ar_SA" };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  const tool = tools.find((t) => t.id === TOOL_ID);
  if (!tool) return {};

  const name = (tool as any).nameTranslations?.[locale] || tool.name;
  const desc = (tool as any).descriptionTranslations?.[locale] || tool.description;
  const seoTitle = (tool as any).seoTitleTranslations?.[locale] || tool.seoTitle || tool.name;
  const seoDesc = (tool as any).seoDescriptionTranslations?.[locale] || tool.seoDescription || tool.description;

  return {
    title: `${seoTitle} | ${SITE_NAME}`,
    description: seoDesc,
    keywords: tool.seoKeywords?.join(", ") ?? "",
    authors: [{ name: SITE_NAME }],
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${SITE_URL}/tools/${tool.id}`,
      languages: {
        en: `${SITE_URL}/en/tools/${tool.id}`,
        es: `${SITE_URL}/es/tools/${tool.id}`,
        ar: `${SITE_URL}/ar/tools/${tool.id}`,
      },
    },
    openGraph: {
      type: "website",
      locale: LOCALE_OG[locale] || "en_US",
      url: `${SITE_URL}/${locale}/tools/${tool.id}`,
      siteName: SITE_NAME,
      title: `${seoTitle} | ${SITE_NAME}`,
      description: seoDesc,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${seoTitle} | ${SITE_NAME}`,
      description: seoDesc,
    },
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const tool = tools.find((t) => t.id === TOOL_ID);
  if (!tool) notFound();

  const dict = await getDictionary(locale);

  return <LifeHacksClient locale={locale as Locale} dict={dict} />;
}
```

- [ ] **Step 2: Verify the file exists in the correct location**

```bash
ls "C:\Users\jun\online-tools\src\app\[locale]\tools\life-hacks\page.tsx"
```
Expected: File path confirmed

- [ ] **Step 3: Commit**

```bash
cd C:\Users\jun\online-tools
git add "src/app/[locale]/tools/life-hacks/page.tsx"
git commit -m "feat: add life hacks server page with metadata and locale support"
```

---

### Task 3: Create Client Component

**Files:**
- Create: `src/app/tools/life-hacks/LifeHacksClient.tsx`

- [ ] **Step 1: Write the client component**

```typescript
"use client";

import { useState, useMemo, useCallback } from "react";
import { lifeHacks, categories, type LifeHack } from "@/lib/lifeHacks";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Life Hacks — 100 Practical Tips for Everyday Problems",
  description:
    "Browse 100 practical life hacks organized by category. From cleaning tricks to kitchen shortcuts, find quick solutions for everyday problems.",
  keywords: [
    "life hacks",
    "practical tips",
    "home tips",
    "cleaning tricks",
    "kitchen hacks",
    "everyday tips",
  ],
  toolId: "life-hacks",
};

export default function LifeHacksClient({
  locale = "en",
  dict,
}: {
  locale?: string;
  dict?: Record<string, unknown>;
} = {}) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [tipOfDay, setTipOfDay] = useState<LifeHack>(() => {
    return lifeHacks[Math.floor(Math.random() * lifeHacks.length)];
  });
  const [expandedTips, setExpandedTips] = useState<Set<string>>(new Set());

  const filteredTips = useMemo(() => {
    let tips = lifeHacks;
    if (activeCategory !== "all") {
      tips = tips.filter((t) => t.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      tips = tips.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.content.toLowerCase().includes(q)
      );
    }
    return tips;
  }, [activeCategory, searchQuery]);

  const shuffleTipOfDay = useCallback(() => {
    let newTip: LifeHack;
    do {
      newTip = lifeHacks[Math.floor(Math.random() * lifeHacks.length)];
    } while (newTip.id === tipOfDay.id && lifeHacks.length > 1);
    setTipOfDay(newTip);
  }, [tipOfDay]);

  const toggleExpand = useCallback((id: string) => {
    setExpandedTips((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: lifeHacks.length };
    categories.forEach((cat) => {
      counts[cat.id] = lifeHacks.filter((t) => t.category === cat.id).length;
    });
    return counts;
  }, []);

  return (
    <ToolLayout {...metadata} locale={locale as any} dict={dict}>
      <div className="space-y-8">
        {/* Tip of the Day */}
        <section className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 p-6 dark:from-amber-950/30 dark:to-orange-950/30">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">{tipOfDay.emoji}</span>
            <h2 className="text-lg font-semibold text-amber-800 dark:text-amber-200">
              Tip of the Day
            </h2>
          </div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
            {tipOfDay.title}
          </h3>
          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {tipOfDay.content}
          </p>
          <button
            onClick={shuffleTipOfDay}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-amber-600 hover:shadow-md active:scale-95"
          >
            <span></span> New Tip
          </button>
        </section>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button
            onClick={() => setActiveCategory("all")}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
              activeCategory === "all"
                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            }`}
          >
            All ({categoryCounts.all})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
              }`}
            >
              {cat.emoji} {cat.label} ({categoryCounts[cat.id]})
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search tips..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 pl-11 text-zinc-900 placeholder-zinc-400 shadow-sm transition-all focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-500"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
            🔍
          </span>
        </div>

        {/* Result count */}
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {searchQuery || activeCategory !== "all"
            ? `Showing ${filteredTips.length} of ${lifeHacks.length} tips`
            : `${lifeHacks.length} tips`}
        </p>

        {/* Tip Cards Grid */}
        {filteredTips.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {filteredTips.map((tip) => (
              <div
                key={tip.id}
                className="group rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 dark:border-zinc-700 dark:bg-zinc-800/80"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{tip.emoji}</span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-zinc-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
                      {tip.title}
                    </h3>
                    <p
                      className={`mt-1 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed ${
                        expandedTips.has(tip.id) ? "" : "line-clamp-2"
                      }`}
                    >
                      {tip.content}
                    </p>
                    {!expandedTips.has(tip.id) && tip.content.length > 120 && (
                      <button
                        onClick={() => toggleExpand(tip.id)}
                        className="mt-1 text-xs font-medium text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
                      >
                        Read more →
                      </button>
                    )}
                    {expandedTips.has(tip.id) && (
                      <button
                        onClick={() => toggleExpand(tip.id)}
                        className="mt-1 text-xs font-medium text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
                      >
                        Show less ←
                      </button>
                    )}
                    <span className="mt-2 inline-block rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400">
                      {categories.find((c) => c.id === tip.category)?.emoji}{" "}
                      {categories.find((c) => c.id === tip.category)?.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-12 text-center dark:border-zinc-700 dark:bg-zinc-800/50">
            <span className="text-4xl mb-3 block"></span>
            <p className="text-zinc-600 dark:text-zinc-300 font-medium">
              No tips match your search.
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Try different keywords or clear your filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-4 text-sm font-medium text-amber-600 hover:text-amber-700 dark:text-amber-400"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
```

- [ ] **Step 2: Verify file location**

```bash
ls "C:\Users\jun\online-tools\src\app\tools\life-hacks\LifeHacksClient.tsx"
```
Expected: File path confirmed

- [ ] **Step 3: Commit**

```bash
cd C:\Users\jun\online-tools
git add "src/app/tools/life-hacks/LifeHacksClient.tsx"
git commit -m "feat: add life hacks client component with tip of the day, category tabs, search, and card grid"
```

---

### Task 4: Register Tool in tools.ts

**Files:**
- Modify: `src/lib/tools.ts` (add entry at end of array, before closing `]`)

- [ ] **Step 1: Add the tool entry**

Add this entry as the last item in the `tools` array (before the closing `]`):

```typescript
  {
    id: "life-hacks",
    name: "Life Hacks — 100 Practical Tips",
    description:
      "Browse 100 practical life hacks organized by category. From cleaning tricks to kitchen shortcuts, find quick solutions for everyday problems.",
    category: "text",
    icon: "💡",
    path: "/tools/life-hacks",
    seoTitle: "Free Life Hacks Online — 100 Practical Tips for Everyday Problems 2026",
    seoDescription: "Browse 100 practical life hacks organized by category: cleaning, kitchen, storage, laundry, home maintenance, and quick fixes. Free online tips and tricks for everyday problems.",
    seoKeywords: [
      "life hacks", "practical tips", "home tips", "cleaning hacks",
      "kitchen tips", "cleaning tricks", "household tips",
      "life hacks online", "home improvement tips", "everyday tips",
      "free life hacks", "best life hacks 2026", "practical household hacks",
      "how to clean naturally", "kitchen shortcuts", "laundry tips",
      "organization hacks", "quick fixes", "home maintenance tips"
    ],
    howToUse: [
      "Browse tips organized by category using the tab navigation.",
      "Use the search bar to find tips for a specific problem or topic.",
      "Check the Tip of the Day for a random helpful hack.",
      "Click 'Read more' on any card to see the full tip details.",
    ],
    faq: [
      { question: "How many life hacks are included?", answer: "This tool features 100 practical life hacks organized into 6 categories: Cleaning, Kitchen, Storage & Organization, Laundry & Clothing, Home Maintenance, and Quick Fixes." },
      { question: "Are these tips safe to use?", answer: "All tips use common household items and safe methods. We recommend testing on a small area first when using any cleaning solution on delicate surfaces." },
      { question: "Can I search for specific tips?", answer: "Yes. Use the search bar to find tips by keyword. The search looks through both titles and content for matching terms." },
      { question: "How often is the Tip of the Day updated?", answer: "The Tip of the Day changes randomly each time you load the page. Click the 'New Tip' button to see a different random tip instantly." },
      { question: "Are these tips suitable for renters?", answer: "Most tips are renter-friendly and use items you already have at home. Tips requiring permanent modifications are clearly noted." }
    ],
  },
```

- [ ] **Step 2: Verify the entry compiles**

```bash
cd C:\Users\jun\online-tools && npx tsc --noEmit src/lib/tools.ts 2>&1
```
Expected: No type errors

- [ ] **Step 3: Commit**

```bash
cd C:\Users\jun\online-tools
git add src/lib/tools.ts
git commit -m "feat: register life-hacks tool in central tool registry"
```

---

### Task 5: Build & Manual Verification

**Files:** No changes — verification step.

- [ ] **Step 1: Run the dev server**

```bash
cd C:\Users\jun\online-tools && npm run dev 2>&1
```
Expected: Dev server starts without errors. Watch for any compilation errors.

- [ ] **Step 2: Open the life hacks page**

Navigate to `http://localhost:3000/en/tools/life-hacks` in browser.

Verify:
- Tip of the Day section renders with random tip
- "New Tip" button shuffles to a different tip
- Category tabs filter tips correctly
- "All" tab shows all 100 tips
- Each category tab shows correct count
- Search input filters tips by title and content in real-time
- Empty state shows when search returns no results
- "Clear all filters" button resets search and category
- Tip cards show emoji, title, content preview, "Read more" button
- Category badge appears on each card
- 2-column grid on desktop, 1-column on mobile
- Hover effects on cards work
- Ad units render at top and bottom
- ToolLayout renders with breadcrumbs and related tools
- SEO metadata is correct (view page source → check title, description, OG tags)

- [ ] **Step 3: Check the homepage**

Navigate to `http://localhost:3000/en/`.

Verify:
- "Life Hacks" appears in the Text Tools section
- Tool card renders correctly with icon, name, description
- Search filters include life hacks

- [ ] **Step 4: Check mobile responsiveness**

Resize browser to mobile width (375px).

Verify:
- Tip cards stack to 1 column
- Category tabs scroll horizontally
- Search input is full width
- Tip of the Day section is readable

- [ ] **Step 5: Commit any final fixes**

```bash
cd C:\Users\jun\online-tools
git add -A
git commit -m "fix: polish life hacks UI and responsiveness"
```

---

## Spec Coverage Check

| Spec Section | Task | Status |
|-------------|------|--------|
| 100 tips, 6 categories | Task 1 | ✅ |
| LifeHack interface + data model | Task 1 | ✅ |
| Server page with metadata | Task 2 | ✅ |
| Client component with 4 sections | Task 3 | ✅ |
| Tip of the Day (random + shuffle) | Task 3 | ✅ |
| Category tabs with counts | Task 3 | ✅ |
| Search with real-time filtering | Task 3 | ✅ |
| Tip cards grid (responsive) | Task 3 | ✅ |
| Empty state / no results | Task 3 | ✅ |
| Tool registration in tools.ts | Task 4 | ✅ |
| SEO metadata (OG, Twitter, canonical) | Task 2 | ✅ |
| Multi-language support pattern | Task 2, 4 | ✅ (tool registration supports it; tip content stays English at launch) |
| Error handling (invalid locale) | Task 2 | ✅ |
| AdSense ad units | Task 3 (via ToolLayout) | ✅ |
| ToolLayout wrapper | Task 3 | ✅ |
| Content guidelines (Western context) | Task 1 | ✅ |

## Placeholder Scan

No TBD, TODO, or incomplete sections found. All code is complete.

## Type Consistency Check

- `LifeHack` interface: defined in Task 1, used in Task 3 — consistent
- `categories` array: defined in Task 1, used in Task 3 — consistent
- `activeCategory` type: `string`, matches `LifeHack.category` — consistent
- `tipOfDay` type: `LifeHack` — consistent
- `filteredTips` type: `LifeHack[]` — consistent
- All props passed to `ToolLayout` match existing usage pattern — consistent
- Server component `params` type matches Next.js 16 async pattern — consistent
- `Locale` import matches existing imports from `@/lib/i18n` — consistent
