import { notFound } from 'next/navigation'
import { getArticleBySlug, articles } from '@/lib/articles'
import ArticleDesktop from '@/components/article/ArticleDesktop'
import ArticleMobile from '@/components/article/ArticleMobile'

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  return {
    title: `${article.title} — Harrison Gwinnett`,
    description: article.description,
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  return (
    <>
      <div className="desktop-only">
        <ArticleDesktop article={article} />
      </div>
      <div className="mobile-only">
        <ArticleMobile article={article} />
      </div>
    </>
  )
}
