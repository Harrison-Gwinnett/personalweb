export interface HistoryRole {
  id: string
  title: string
  company: string
  url?: string // official company site
  archiveUrl?: string // my own archive page about it, when the official domain isn't mine
  parentId?: string
  employmentType: string
  dateLabel: string
  startDate: string
  endDate: string | null
  location: string | null
  logoLabel: string
  logoSrc?: string
  summary?: string
  paragraphs?: string[]
  bullets?: string[]
  closing?: string
}

export const historyRoles: HistoryRole[] = [
  {
    id: 'tradrs',
    title: 'Founder',
    company: 'tradrs.tv',
    url: 'https://tradrs.tv',
    employmentType: 'Full-time',
    dateLabel: 'Jan 2026 – Present',
    startDate: '2026-01',
    endDate: null,
    location: 'United Kingdom, London',
    logoLabel: 't',
    logoSrc: '/history/tradrs-tv.png',
    summary:
      'A finance streaming platform built for how the modern world trades, with a combined community reach of over 6 million traders across crypto, FX, CFDs, prediction markets and more.',
  },
  {
    id: 'aarvo',
    title: 'Founder',
    company: 'aarvo',
    url: 'https://aarvo.com',
    employmentType: 'Developing alongside tradrs.tv',
    dateLabel: 'Oct 2025 – Present',
    startDate: '2025-10',
    endDate: null,
    location: 'United Kingdom, London',
    logoLabel: 'a',
    logoSrc: '/aarvo-icon.svg',
    paragraphs: [
      'Aarvo is a two-way accounting platform built for business owners to gain real financial intelligence and for accounting firms to work smarter, streamline their workflow, and unlock new revenue.',
      "Accountants are juggling 5+ tools just to stay half organised, and founders like me go years without truly understanding what's profitable, what's not, or where the real financial health sits.",
      "That's why aarvo exists.",
      "It makes your life (and your accountant's life) easier by simplifying the boring stuff… but more importantly, it helps businesses actually understand their numbers… what's healthy, what's not, what's profitable, what's wasting money and with intelligence tells you how to grow it.",
    ],
  },
  {
    id: 'digital-asset-institute',
    title: 'Co-Founder',
    company: 'Digital Asset Institute',
    parentId: 'tge-ventures',
    employmentType: '',
    dateLabel: 'Jun 2025 – Sep 2025 · 4 mos',
    startDate: '2025-06',
    endDate: '2025-09',
    location: 'Switzerland, Zug',
    logoLabel: 'D',
    logoSrc: '/history/digital-asset-institute.jpg',
    summary:
      'In 2025, TGE Ventures evolved its focus into professional digital-asset education through Digital Asset Institute, serving teams across consulting, banking, asset management and law.',
  },
  {
    id: 'tge-ventures',
    title: 'Co-Founder & CMO',
    company: 'TGE Ventures',
    url: 'https://tge.ventures',
    archiveUrl: 'https://tgeventures.co',
    employmentType: 'Full-time',
    dateLabel: 'Jun 2023 – Sep 2025 · 2 yrs 4 mos',
    startDate: '2023-06',
    endDate: '2025-09',
    location: 'Switzerland, Zug',
    logoLabel: 'T',
    logoSrc: '/history/tge-ventures.jpg',
    summary: 'A Blockchain focused incubation firm, advising and investing in blockchain companies.',
    bullets: [
      'Independently valued at $33M as part of the share-swap acquisition.',
      'Scaled to $6m in top-line revenue in the first 180 days from founding.',
      'Generated $35m for clients in Y1.',
      'Personally led all marketing activities as CMO which was our largest revenue stream.',
    ],
    closing: 'Stepped away from all day-to-day roles in September 2025. Remain a shareholder in TGE Ventures and Digital Asset Institute.',
  },
  {
    id: 'virtual-versions',
    title: 'Founder & CEO',
    company: 'Virtual Versions',
    employmentType: 'Full-time',
    dateLabel: 'Jan 2021 – Jan 2024 · 3 yrs 1 mo',
    startDate: '2021-01',
    endDate: '2024-01',
    location: 'United Kingdom, London',
    logoLabel: 'V',
    logoSrc: '/history/virtual-versions.jpg',
    summary:
      'A Web3-native social identity platform aiming to reshape online reputation, ownership, and social interaction through decentralisation.',
    bullets: [
      'Raised approximately $3M in funding.',
      'Built a full-stack Web3 ecosystem for identity, verification, and engagement.',
      'Grew our community to over 1 million registered members across private betas and the platform.',
    ],
    closing: 'Operations ceased in early 2024 after our external market maker’s actions severely damaged the token’s market.',
  },
  {
    id: 'watchlotto',
    title: 'Founder (Exited)',
    company: 'Watchlotto limited',
    url: 'https://watchlotto.com',
    archiveUrl: 'https://watchlotto.co/',
    employmentType: 'Full-time',
    dateLabel: 'Jun 2016 – Nov 2020 · 4 yrs 6 mos',
    startDate: '2016-06',
    endDate: '2020-11',
    location: 'United Kingdom, London',
    logoLabel: 'W',
    logoSrc: '/history/watchlotto.jpg',
    summary:
      'Watchlotto was founded in 2016 with the vision of giving people the opportunity to win luxury watches using a game of skill concept. I incorporated the company a few months after turning 18.',
    bullets: [
      'Achieved an exit valuation of £11.25m.',
      'Business featured on FIFA 20 (In Game) attracting 18,000+ individuals daily.',
      'From 0 to over 185,000 regular visitors a month in 4 years.',
      'Hand delivered prizes personally to over 6 countries.',
      'Customers gained from 85 different countries.',
      'Donated to multiple charitable causes.',
    ],
    closing: 'Business acquired on 19 November 2020. Stepped down as director at age 22.',
  },
]
