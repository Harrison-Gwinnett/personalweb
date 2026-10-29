import { historyRoles } from '@/lib/history'
import { birthDate, profileUpdated } from '@/lib/profile'

export const baseUrl = 'https://harrisongwinnett.com'
export const personId = `${baseUrl}/#person`
export const siteTitle = 'Harrison Gwinnett | Founder of tradrs.tv'
export const siteDescription =
  'Harrison Gwinnett is the founder of tradrs.tv and develops aarvo alongside it. He exited Watchlotto at 22 and co-founded TGE Ventures.'
export const socialImage = {
  url: `${baseUrl}/harrison-gwinnett.jpg`,
  width: 692,
  height: 692,
  alt: 'Harrison Gwinnett',
}

const orgId = (id: string) => `${baseUrl}/#org-${id}`

const tgeArchiveUrl = historyRoles.find((role) => role.id === 'tge-ventures')?.archiveUrl
const tgeArchive = tgeArchiveUrl ? {
  '@type': 'CollectionPage',
  '@id': new URL('/#page', tgeArchiveUrl).href,
  url: tgeArchiveUrl,
  about: [{ '@id': orgId('tge-ventures') }, { '@id': personId }],
} : undefined

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
  founder: { '@id': personId },
  description: role.summary ?? role.paragraphs?.[0],
  ...(role.location ? { location: { '@type': 'Place', name: role.location } } : {}),
  ...(role.id === 'tge-ventures' ? {
    brand: { '@id': orgId('digital-asset-institute') },
    ...(tgeArchive ? { subjectOf: tgeArchive } : {}),
  } : {}),
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
  birthDate,
  url: baseUrl,
  image: {
    '@type': 'ImageObject',
    '@id': `${baseUrl}/#headshot`,
    url: socialImage.url,
    width: socialImage.width,
    height: socialImage.height,
    caption: socialImage.alt,
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
  ],
  subjectOf: [
    {
      '@type': 'WebPage',
      headline: 'From Watches To Avatars: Building A Web3 Company From The Ground Up',
      url: 'https://www.forbes.com/sites/trevorclawson/2023/04/22/from-watches-to-avatars-building-a-web3-company-from-the-ground-up/',
      datePublished: '2023-04-22',
      publisher: { '@type': 'Organization', name: 'Forbes', url: 'https://www.forbes.com' },
    },
    {
      '@type': 'WebPage',
      headline: 'What building and exiting a multi-million pound business taught me about entrepreneurship (and life)',
      url: 'https://startupsmagazine.co.uk/article-what-building-and-exiting-multi-million-pound-business-taught-me-about-entrepreneurship-and',
      datePublished: '2023-03-28',
      genre: 'First-person contribution',
      author: { '@id': personId },
      about: [{ '@id': personId }, { '@id': orgId('watchlotto') }],
      publisher: { '@type': 'Organization', name: 'Startups Magazine', url: 'https://startupsmagazine.co.uk' },
    },
    ...(tgeArchive ? [tgeArchive] : []),
  ],
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
        dateModified: profileUpdated,
        mainEntity: { '@id': personId },
      },
      person,
      ...organizations,
    ],
  }
}
