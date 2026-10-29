import type { Metadata } from 'next'
import Home from '@/components/home/Home'
import { profileJsonLd, siteTitle } from '@/lib/schema'

// Refresh the server-rendered age daily, including after each birthday.
export const revalidate = 86400

export const metadata: Metadata = {
  title: { absolute: siteTitle },
  alternates: { canonical: '/' },
}

const jsonLd = profileJsonLd('/', siteTitle)

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
