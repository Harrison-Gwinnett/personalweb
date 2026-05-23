import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

const baseUrl = 'https://harrisongwinnett.com'
const description = 'Founder of aarvo. Building software to modernise how every business understands their finances.'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Harrison Gwinnett',
    template: '%s — Harrison Gwinnett',
  },
  description,
  authors: [{ name: 'Harrison Gwinnett', url: baseUrl }],
  creator: 'Harrison Gwinnett',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: baseUrl,
    siteName: 'Harrison Gwinnett',
    title: 'Harrison Gwinnett',
    description,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aarvoceo',
    creator: '@aarvoceo',
    title: 'Harrison Gwinnett',
    description,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
