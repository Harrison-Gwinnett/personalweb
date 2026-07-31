import type { Metadata } from 'next'
import HistoryDesktop from '@/components/history/HistoryDesktop'
import HistoryMobile from '@/components/history/HistoryMobile'
import { historyRoles } from '@/lib/history'

const description =
  'Experience and founding history of Harrison Gwinnett: Watchlotto, Virtual Versions, TGE Ventures, Digital Asset Institute, and aarvo.'

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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  name: 'History - Harrison Gwinnett',
  url: 'https://harrisongwinnett.com/history',
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
    hasOccupation: historyRoles.map((role) => {
      const occupation: Record<string, unknown> = {
        '@type': 'Occupation',
        name: role.title,
        startDate: role.startDate,
        description: role.summary ?? role.paragraphs?.[0],
        hiringOrganization: {
          '@type': 'Organization',
          name: role.company,
          ...(role.id === 'aarvo' ? { url: 'https://aarvo.com' } : {}),
        },
      }
      if (role.endDate) occupation.endDate = role.endDate
      if (role.location) {
        occupation.occupationLocation = {
          '@type': 'Place',
          name: role.location,
        }
      }
      if (role.bullets?.length) {
        occupation.responsibilities = role.bullets.join(' ')
      }
      return occupation
    }),
  },
}

export default function HistoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="desktop-only">
        <HistoryDesktop />
      </div>
      <div className="mobile-only">
        <HistoryMobile />
      </div>
    </>
  )
}
