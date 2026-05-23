import type { Metadata } from 'next'
import AboutDesktop from '@/components/about/AboutDesktop'
import AboutMobile from '@/components/about/AboutMobile'

const description =
  "Harrison Gwinnett is the founder of aarvo — software designed to modernise and provide everyone with the tools they need to scale their business from a monetary perspective. He's a serial entrepreneur with a background in digital assets, market making, and fintech."

export const metadata: Metadata = {
  title: 'About',
  description,
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'profile',
    url: 'https://harrisongwinnett.com/about',
    title: 'About — Harrison Gwinnett',
    description,
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is Harrison Gwinnett?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Harrison Gwinnett is a founder and serial entrepreneur with a background in digital assets, market making, and fintech. He is the founder of aarvo, a software platform designed to modernise how businesses understand and scale their finances.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is aarvo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Aarvo is a software platform founded by Harrison Gwinnett, designed to modernise finance and provide everyone with the tools they need to scale their business from a monetary perspective.',
      },
    },
    {
      '@type': 'Question',
      name: 'What companies has Harrison Gwinnett built?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Harrison Gwinnett's first company grew from a small internet business into a global platform with over 180,000 users before being acquired for around $15m. He later co-founded TGE Ventures, scaling to over $6m in revenue within the first 180 days and generating over $35m for clients in year one. Today he is the founder of aarvo.",
      },
    },
    {
      '@type': 'Question',
      name: 'What does Harrison Gwinnett write about?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Harrison Gwinnett writes about building companies, craft, hiring, and software — publishing essays at harrisongwinnett.com.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I follow Harrison Gwinnett?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Harrison Gwinnett is on X (Twitter) at @aarvoceo. His personal website is harrisongwinnett.com.',
      },
    },
  ],
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="desktop-only">
        <AboutDesktop />
      </div>
      <div className="mobile-only">
        <AboutMobile />
      </div>
    </>
  )
}
