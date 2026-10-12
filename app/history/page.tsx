import type { Metadata } from 'next'
import History from '@/components/history/History'
import { profileJsonLd } from '@/lib/schema'

const description =
  'Experience and founding history of Harrison Gwinnett: Watchlotto, Virtual Versions, TGE Ventures, Digital Asset Institute, aarvo and tradrs.tv.'

export const metadata: Metadata = {
  title: 'History',
  description,
  alternates: { canonical: '/history' },
  openGraph: {
    type: 'profile',
    url: 'https://harrisongwinnett.com/history',
    title: 'History - Harrison Gwinnett',
    description,
  },
}

const jsonLd = profileJsonLd('/history', 'History - Harrison Gwinnett')

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
