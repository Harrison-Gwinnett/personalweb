export interface Article {
  slug: string
  title: string
  description: string
  date: string
  dateShort: string
  readTime: string
  category: string
  year: string
  nextSlug: string | null
  nextTitle: string | null
}

export const articles: Article[] = [
  {
    slug: 'the-cost-of-almost-right',
    title: 'The cost of almost-right',
    description: "On the compounding tax of the details you tell yourself you'll fix later.",
    date: 'MAY 12, 2026',
    dateShort: 'MAY 12',
    readTime: '3 MIN',
    category: 'CRAFT',
    year: '2026',
    nextSlug: 'taste-is-just-attention-repeated',
    nextTitle: 'TASTE IS JUST ATTENTION',
  },
  {
    slug: 'taste-is-just-attention-repeated',
    title: 'Taste is just attention, repeated',
    description: 'The people we call tasteful are usually the ones who refuse to stop noticing.',
    date: 'MAR 04, 2026',
    dateShort: 'MAR 04',
    readTime: '5 MIN',
    category: 'CRAFT',
    year: '2026',
    nextSlug: 'why-i-write-these-at-all',
    nextTitle: 'WHY I WRITE THESE AT ALL',
  },
  {
    slug: 'why-i-write-these-at-all',
    title: 'Why I write these at all',
    description: 'Notes are how I find out what I actually think. Publishing is just the forcing function.',
    date: 'FEB 02, 2026',
    dateShort: 'FEB 02',
    readTime: '4 MIN',
    category: 'CRAFT',
    year: '2026',
    nextSlug: 'what-i-look-for-in-the-first-ten-hires',
    nextTitle: 'WHAT I LOOK FOR IN THE FIRST TEN HIRES',
  },
  {
    slug: 'what-i-look-for-in-the-first-ten-hires',
    title: 'What I look for in the first ten hires',
    description: 'The early team is the product. A few traits matter far more than any résumé.',
    date: 'NOV 18, 2025',
    dateShort: 'NOV 18',
    readTime: '6 MIN',
    category: 'PEOPLE',
    year: '2025',
    nextSlug: 'speed-is-a-feature-you-design-for',
    nextTitle: 'SPEED IS A FEATURE YOU DESIGN FOR',
  },
  {
    slug: 'speed-is-a-feature-you-design-for',
    title: 'Speed is a feature you design for',
    description: "Fast software isn't an optimization pass. It's a decision you make on day one.",
    date: 'AUG 02, 2025',
    dateShort: 'AUG 02',
    readTime: '4 MIN',
    category: 'CRAFT',
    year: '2025',
    nextSlug: 'notes-on-keeping-software-small',
    nextTitle: 'NOTES ON KEEPING SOFTWARE SMALL',
  },
  {
    slug: 'notes-on-keeping-software-small',
    title: 'Notes on keeping software small',
    description: 'Every feature you ship is one you maintain forever. Subtraction is underrated.',
    date: 'APR 21, 2025',
    dateShort: 'APR 21',
    readTime: '2 MIN',
    category: 'CRAFT',
    year: '2025',
    nextSlug: 'the-first-version-should-embarrass-you',
    nextTitle: 'THE FIRST VERSION SHOULD EMBARRASS YOU',
  },
  {
    slug: 'the-first-version-should-embarrass-you',
    title: 'The first version should embarrass you',
    description: "If you're proud of v1, you waited too long to ship it. Ship the embarrassing thing, then listen.",
    date: 'DEC 09, 2024',
    dateShort: 'DEC 09',
    readTime: '3 MIN',
    category: 'BUILDING',
    year: '2024',
    nextSlug: 'on-working-with-people-better-than-you',
    nextTitle: 'ON WORKING WITH PEOPLE BETTER THAN YOU',
  },
  {
    slug: 'on-working-with-people-better-than-you',
    title: 'On working with people better than you',
    description: 'The fastest way to grow is to be the least talented person in a room that still wants you there.',
    date: 'SEP 27, 2024',
    dateShort: 'SEP 27',
    readTime: '5 MIN',
    category: 'PEOPLE',
    year: '2024',
    nextSlug: null,
    nextTitle: null,
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getArticlesByYear(): { year: string; items: Article[] }[] {
  const map: Record<string, Article[]> = {}
  for (const a of articles) {
    if (!map[a.year]) map[a.year] = []
    map[a.year].push(a)
  }
  return Object.keys(map)
    .sort((a, b) => Number(b) - Number(a))
    .map((year) => ({ year, items: map[year] }))
}
