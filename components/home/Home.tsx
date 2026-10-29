import { FadeUp } from '@/components/motion/primitives'
import { SiteFooter, SiteNav } from '@/components/SiteChrome'
import { homeHeadline, homeOverview, homeStory } from '@/components/home/story'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="page home-page">
      <div className="page__inner">
        <a href="#home-content" className="home-skip">Skip to content</a>
        <SiteNav />

        <main id="home-content" className="home-intro" tabIndex={-1}>
          <header className="home-opening">
            <FadeUp delay={0.04}>
              <h1 className="home-title">{homeHeadline}</h1>
            </FadeUp>
            <FadeUp delay={0.12}>
              <p className="story-text home-overview">{homeOverview}</p>
            </FadeUp>
          </header>

          <article className="story">
            {homeStory.map((passage, i) => (
              <div className="story-passage" key={i}>
                {passage.map((body, j) => <p className="story-text" key={j}>{body}</p>)}
              </div>
            ))}
          </article>

          <nav className="home-ending" aria-label="Explore">
            <Link href="/history"><span>Explore my history</span><span aria-hidden="true">↗</span></Link>
          </nav>
        </main>

        <div className="page__spacer" />
        <SiteFooter />
      </div>
    </div>
  )
}
