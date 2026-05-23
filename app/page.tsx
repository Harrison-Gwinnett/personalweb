import type { Metadata } from 'next'
import HomeDesktop from '@/components/home/HomeDesktop'
import HomeMobile from '@/components/home/HomeMobile'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    '@id': 'https://harrisongwinnett.com/#person',
    name: 'Harrison Gwinnett',
    url: 'https://harrisongwinnett.com',
    jobTitle: 'Founder',
    worksFor: {
      '@type': 'Organization',
      name: 'aarvo',
      url: 'https://aarvo.com',
    },
    description:
      'Founder of aarvo. Building software to modernise how every business understands their finances.',
    knowsAbout: [
      'Entrepreneurship',
      'Startups',
      'Finance',
      'Fintech',
      'Digital Assets',
      'Crypto',
      'Software',
    ],
    sameAs: [
      'https://www.linkedin.com/in/harrisongwinnett/',
      'https://x.com/aarvoceo',
      'https://www.crunchbase.com/person/harrison-gwinnett',
      'https://www.tge.ventures/',
      'https://www.forbes.com/sites/trevorclawson/2023/04/22/from-watches-to-avatars-building-a-web3-company-from-the-ground-up/',
    ],
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="desktop-only">
        <HomeDesktop />
      </div>
      <div className="mobile-only">
        <HomeMobile />
      </div>
    </>
  )
}
