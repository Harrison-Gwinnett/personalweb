import type { Metadata } from 'next'
import History from '@/components/history/History'
import { baseUrl, profileJsonLd, socialImage } from '@/lib/schema'

const title = 'History | Harrison Gwinnett'
const description =
  "Harrison Gwinnett's business history: tradrs.tv, aarvo, TGE Ventures, Digital Asset Institute, Virtual Versions and his Watchlotto exit at 22."

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: '/history' },
  openGraph: {
    type: 'profile',
    locale: 'en_GB',
    siteName: 'Harrison Gwinnett',
    url: `${baseUrl}/history`,
    title,
    description,
    images: [socialImage],
  },
  twitter: {
    card: 'summary',
    site: '@HGGwinnett',
    creator: '@HGGwinnett',
    title,
    description,
    images: [socialImage],
  },
}

const jsonLd = profileJsonLd('/history', title)

export default function HistoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <History />
    </>
  )
}
