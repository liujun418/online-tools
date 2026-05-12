---
name: life-hacks-tool-design
status: draft
---

# Life Hacks Tool — Design Spec

## Overview

A content-browsing tool that presents ~100 curated life hacks organized by category, with a "Tip of the Day" random highlight, category filtering, and keyword search. Targets English-speaking users in Western markets with tips appropriate for Western living contexts (renting, standard appliances, US/metric units).

## Categories (6)

| Category | ID | Icon | Count |
|----------|-----|------|-------|
| Cleaning | cleaning |  | 17 |
| Kitchen | kitchen | 🍳 | 17 |
| Storage & Organization | storage |  | 17 |
| Laundry & Clothing | laundry | 👕 | 17 |
| Home Maintenance | home | 🏠 | 16 |
| Quick Fixes | quickfixes |  | 16 |

Total: ~100 tips. All content in English initially. Multi-language support follows the existing translation pattern (nameTranslations, descriptionTranslations in tools.ts).

## Data Model

New file: `src/lib/lifeHacks.ts`

```typescript
export interface LifeHack {
  id: string;           // e.g. "cleaning-baking-soda-drain"
  category: string;     // matches one of the 6 category IDs
  emoji: string;        // e.g. "🧹"
  title: string;        // e.g. "Unclog drains with baking soda & vinegar"
  content: string;      // 2-3 sentence explanation, ~50-80 words
  seoKeywords?: string[]; // long-tail keywords for this tip
}

export const lifeHacks: LifeHack[] = [
  { id: "...", category: "cleaning", emoji: "🧹", title: "...", content: "...", seoKeywords: ["..."] },
  // ~50 entries
];
```

## Architecture

### File Structure

```
src/
  lib/
    lifeHacks.ts           # data file (~50 tips)
  components/
    LifeHacksClient.tsx    # main client component
  app/
    tools/
      life-hacks/
        LifeHacksClient.tsx → symlink or copy? (follow existing pattern)
    [locale]/
      tools/
        life-hacks/
          page.tsx         # server component, metadata, locale
```

### Server Component: `src/app/[locale]/tools/life-hacks/page.tsx`

Follows the existing pattern (book-of-answers, quotes):
- Validates locale
- Loads dictionary via `getDictionary()`
- Passes `locale` + `dict` to client component
- `generateMetadata()` uses the tool entry from `tools.ts`

### Client Component: `src/app/tools/life-hacks/LifeHacksClient.tsx`

Main interactive component, wrapped in `ToolLayout`. Renders:

1. **Tip of the Day** — random tip card with refresh button
2. **Category Tabs** — horizontal scrollable tabs
3. **Search Input** — text input filtering tips in real-time
4. **Tip Cards Grid** — 2-column responsive grid of tip cards

All filtering (category + search) is client-side since ~50 tips is small.

## Components Detail

### Tip of the Day
- Picks a random tip on mount using `useState` + `Math.random()`
- Card layout: emoji (large) + title + content (2-3 lines truncated with "read more" expand)
- "New Tip" button to shuffle
- Animation: fade-in on tip change

### Category Tabs
- Horizontal scrollable row of pill buttons
- "All" tab shows everything
- Active tab highlighted with accent color
- Icons from category definitions

### Search
- Input with search icon
- Filters by matching title + content (case-insensitive)
- Shows result count ("Showing 12 of 50 tips")
- Debounced at 200ms

### Tip Cards
- Card component with: emoji, title, content (expandable)
- Hover effect: subtle shadow + scale
- Grid: 1 col mobile, 2 cols desktop
- Category label as small badge on each card

## Data Flow

```
page.tsx (server)
  └─ LifeHacksClient.tsx (client)
       ├─ lifeHacks[] (static import from src/lib/lifeHacks.ts)
       ├─ TipOfDay (random selection from lifeHacks[])
       ├─ CategoryFilter (client-side filter on lifeHacks[])
       └─ SearchFilter (client-side filter on lifeHacks[])
```

No API calls needed. All data is static and imported at build time.

## SEO

- Tool registered in `tools.ts` with `seoTitle`, `seoDescription`, `seoKeywords`
- `generateMetadata()` generates OG/Twitter tags + canonical + hreflang alternates
- All tip content is rendered server-side → crawlable by Google
- Structured data via existing `StructuredData` component (FAQ schema from tool entry)
- Keywords in `seoKeywords` per tip are embedded in content naturally

## Multi-Language Support

Follows existing pattern:
- English content first
- Translations added via `nameTranslations`, `descriptionTranslations`, `howToUseTranslations`, `faqTranslations` in `tools.ts`
- Tip content itself: keep English initially, add translations later when expanding to es/ar
- No need to translate individual tips at launch — SEO benefit from English is sufficient

## Error Handling

- Invalid locale → `notFound()`
- No search results → "No tips match your search. Try different keywords."
- Empty state handled gracefully (shouldn't happen with static data)

## Testing

- Manual testing: category filtering, search, tip-of-day shuffle
- Visual: mobile responsive (1 col), desktop (2 col grid)
- AdSense: ad units at top and bottom of page (existing AdUnit component)
- Cross-browser: Chrome, Firefox, Safari

## Content Guidelines

Each tip:
- **Title**: action-oriented, specific problem (e.g. "Remove red wine stains with salt")
- **Content**: 2-3 sentences, practical steps, no fluff
- **Units**: US/imperial with metric in parentheses when relevant
- **Products**: reference items available at Walmart/Target/Amazon, not Chinese-specific products
- **Context**: Western living (renter-friendly, standard appliances, HOA considerations)
