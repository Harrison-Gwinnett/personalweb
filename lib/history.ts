export interface HistoryRole {
  id: string
  title: string
  company: string
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
    id: 'aarvo',
    title: 'Founder',
    company: 'aarvo',
    employmentType: 'Full-time',
    dateLabel: 'Oct 2025 – Present',
    startDate: '2025-10',
    endDate: null,
    location: null,
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
    employmentType: 'Full-time',
    dateLabel: 'Jun 2025 – Sep 2025 · 4 mos',
    startDate: '2025-06',
    endDate: '2025-09',
    location: 'Zug, Switzerland',
    logoLabel: 'D',
    logoSrc: '/history/digital-asset-institute.jpg',
    summary:
      'TGE Ventures re-purposed its mission to support the mainstream adoption of Digital Assets through the launch of its new sub brand, Digital Asset Institute. An educational product around the hands-on learnings of launching crypto-currencies and blockchain products targeted at the teams of Consulting Firms, Banks, Asset Managers, Fund Managers, Law Firms and Educational Institutions.',
  },
  {
    id: 'tge-ventures',
    title: 'Co-Founder & CMO',
    company: 'TGE Ventures',
    employmentType: 'Full-time',
    dateLabel: 'Jun 2023 – Sep 2025 · 2 yrs 4 mos',
    startDate: '2023-06',
    endDate: '2025-09',
    location: 'Zug, Switzerland',
    logoLabel: 'T',
    logoSrc: '/history/tge-ventures.jpg',
    summary: 'A Blockchain focused incubation firm, advising and investing in blockchain companies.',
    bullets: [
      'Invested & acquired early stage blockchain companies.',
      'Externally valuated at a $33M valuation during an acquisition.',
      'Scaled to $6m in top-line revenue in the first 180 days from founding.',
      'Generated $35m for clients in Y1.',
      'Personally led all marketing activities as CMO which was our largest revenue stream.',
    ],
    closing: 'Stepped down due to business pivot.',
  },
  {
    id: 'virtual-versions',
    title: 'Founder & CEO',
    company: 'Virtual Versions',
    employmentType: 'Full-time',
    dateLabel: 'Jan 2021 – Jan 2024 · 3 yrs 1 mo',
    startDate: '2021-01',
    endDate: '2024-01',
    location: 'Greater London, England, United Kingdom',
    logoLabel: 'V',
    logoSrc: '/history/virtual-versions.jpg',
    summary:
      'A Web3-native social identity platform aiming to reshape online reputation, ownership, and social interaction through decentralisation.',
    bullets: [
      'Raised $3M+ in capital across private and strategic rounds.',
      'Built a full-stack Web3 ecosystem for identity, verification, and engagement.',
      'Grew our community from 0 to over 1 million members.',
      'Facilitated over $470 million in transaction volume in 6 months.',
    ],
  },
  {
    id: 'watchlotto',
    title: 'Founder (Exited)',
    company: 'Watchlotto limited',
    employmentType: 'Full-time',
    dateLabel: 'Jun 2016 – Oct 2020 · 4 yrs 5 mos',
    startDate: '2016-06',
    endDate: '2020-10',
    location: 'Greater London, England, United Kingdom',
    logoLabel: 'W',
    logoSrc: '/history/watchlotto.jpg',
    summary:
      'Watchlotto was founded in 2016 with the vision of giving people the opportunity to win luxury watches using a game of skill concept.',
    bullets: [
      'Achieving an exit valuation of £11.25m, Circa $15M. (Approved by an FCA Authorised Firm)',
      'Business featured on FIFA 2020 (In Game) attracting 18,000+ individuals daily.',
      'From 0 to over 185,000 regular visitors a month in 4 years.',
      'Hand delivered prizes personally to over 6 countries.',
      'Customers gained from 85 different countries.',
      'Donated to multiple charitable causes.',
    ],
    closing: 'Exited in October 2020 at age 22.',
  },
]
