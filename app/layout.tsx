import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { baseUrl, siteTitle, siteDescription as description, socialImage } from '@/lib/schema'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteTitle,
    template: '%s | Harrison Gwinnett',
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
    type: 'profile',
    locale: 'en_GB',
    url: baseUrl,
    siteName: 'Harrison Gwinnett',
    title: siteTitle,
    description,
    images: [socialImage],
  },
  twitter: {
    card: 'summary',
    site: '@HGGwinnett',
    creator: '@HGGwinnett',
    title: siteTitle,
    description,
    images: [socialImage],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
