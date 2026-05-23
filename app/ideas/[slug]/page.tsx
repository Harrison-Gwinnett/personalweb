import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getArticleBySlug, articles } from '@/lib/articles'
import ArticleDesktop from '@/components/article/ArticleDesktop'
import ArticleMobile from '@/components/article/ArticleMobile'

const baseUrl = 'https://harrisongwinnett.com'

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/ideas/${slug}` },
    openGraph: {
      type: 'article',
      url: `${baseUrl}/ideas/${slug}`,
      title: article.title,
      description: article.description,
      publishedTime: article.dateISO,
      authors: [`${baseUrl}/about`],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.dateISO,
    author: {
      '@type': 'Person',
      '@id': `${baseUrl}/#person`,
      name: 'Harrison Gwinnett',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Person',
      name: 'Harrison Gwinnett',
      url: baseUrl,
    },
    url: `${baseUrl}/ideas/${slug}`,
    mainEntityOfPage: `${baseUrl}/ideas/${slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="desktop-only">
        <ArticleDesktop article={article} />
      </div>
      <div className="mobile-only">
        <ArticleMobile article={article} />
      </div>
    </>
  )
}
