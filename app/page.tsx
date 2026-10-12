import type { Metadata } from 'next'
import Home from '@/components/home/Home'
import { profileJsonLd } from '@/lib/schema'

export const metadata: Metadata = {
  title: { absolute: 'Harrison Gwinnett: Founder of aarvo and tradrs.tv' },
  alternates: { canonical: '/' },
}

const jsonLd = profileJsonLd('/', 'Harrison Gwinnett')

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home />
    </>
  )
}
