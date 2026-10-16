import { historyRoles } from '@/lib/history'

export const baseUrl = 'https://harrisongwinnett.com'
export const personId = `${baseUrl}/#person`
export const siteDescription =
  'Harrison Gwinnett started in the City of London at 16, sold Watchlotto at 22, co-founded TGE Ventures and now builds aarvo and tradrs.tv.'

// Bump when the profile content changes; Google wants human edits here, not build time.
const lastUpdated = '2026-10-12'

const orgId = (id: string) => `${baseUrl}/#org-${id}`

// One Organization per company, each pointing back to the same Person as founder.
const organizations = historyRoles.map((role) => ({
  '@type': 'Organization',
  '@id': orgId(role.id),
  name: role.company,
  ...(role.url ? { url: role.url } : {}),
  ...(role.id === 'watchlotto'
    ? {
        sameAs: ['https://www.wikidata.org/wiki/Q141708604'],
        ...(role.archiveUrl
          ? {
              subjectOf: {
                '@type': 'CollectionPage',
                '@id': `${role.archiveUrl}#page`,
                url: role.archiveUrl,
                about: { '@id': orgId(role.id) },
              },
            }
          : {}),
      }
    : role.archiveUrl ? { sameAs: [role.archiveUrl] } : {}),
  foundingDate: role.startDate,
  founder: { '@id': personId },
  description: role.summary ?? role.paragraphs?.[0],
  ...(role.location ? { location: { '@type': 'Place', name: role.location } } : {}),
  ...(role.parentId ? { parentOrganization: { '@id': orgId(role.parentId) } } : {}),
}))

// Role pattern: dated link between the Person and each company.
const roleNode = (role: (typeof historyRoles)[number], prop: 'worksFor' | 'alumniOf') => ({
  '@type': 'OrganizationRole',
  roleName: role.title,
  startDate: role.startDate,
  ...(role.endDate ? { endDate: role.endDate } : {}),
  [prop]: { '@id': orgId(role.id) },
})

const person = {
  '@type': 'Person',
  '@id': personId,
  name: 'Harrison Gwinnett',
  givenName: 'Harrison',
  familyName: 'Gwinnett',
  url: baseUrl,
  image: {
    '@type': 'ImageObject',
    '@id': `${baseUrl}/#headshot`,
    url: `${baseUrl}/harrison-gwinnett.jpg`,
    width: 692,
    height: 692,
    caption: 'Harrison Gwinnett',
  },
  description: siteDescription,
  jobTitle: 'Founder',
  worksFor: historyRoles.filter((r) => !r.endDate).map((r) => roleNode(r, 'worksFor')),
  alumniOf: historyRoles.filter((r) => r.endDate).map((r) => roleNode(r, 'alumniOf')),
  knowsAbout: [
    'Entrepreneurship',
    'Startups',
    'Finance',
    'Financial markets',
    'Fintech',
    'Accounting software',
    'Digital assets',
    'Cryptocurrency',
    'Blockchain',
    'Token launches',
  ],
  sameAs: [
    'https://www.wikidata.org/wiki/Q140185272',
    'https://www.linkedin.com/in/harrisongwinnett/',
    'https://x.com/HGGwinnett',
    'https://www.instagram.com/hggwinnett',
    'https://www.crunchbase.com/person/harrison-gwinnett',
    'https://cursor.com/@hggwinnett',
  ],
  subjectOf: {
    '@type': 'NewsArticle',
    headline: 'From Watches To Avatars: Building A Web3 Company From The Ground Up',
    url: 'https://www.forbes.com/sites/trevorclawson/2023/04/22/from-watches-to-avatars-building-a-web3-company-from-the-ground-up/',
    datePublished: '2023-04-22',
    publisher: { '@type': 'Organization', name: 'Forbes', url: 'https://www.forbes.com' },
  },
}

const website = {
  '@type': 'WebSite',
  '@id': `${baseUrl}/#website`,
  url: baseUrl,
  name: 'Harrison Gwinnett',
  publisher: { '@id': personId },
}

export function profileJsonLd(path: string, name: string) {
  const url = `${baseUrl}${path}`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      website,
      {
        '@type': 'ProfilePage',
        '@id': `${url}#profilepage`,
        url,
        name,
        isPartOf: { '@id': `${baseUrl}/#website` },
        dateModified: lastUpdated,
        mainEntity: { '@id': personId },
      },
      person,
      ...organizations,
    ],
  }
}
