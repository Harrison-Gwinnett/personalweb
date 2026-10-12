import { FadeUp } from '@/components/motion/primitives'
import { SiteFooter, SiteNav } from '@/components/SiteChrome'
import { homeHeadline, homeStory } from '@/components/home/story'

export default function Home() {
  return (
    <div className="page home-page">
      <div className="page__inner">
        <SiteNav />

        <main className="home-intro">
          <FadeUp delay={0.07} className="story-row">
            <h1 className="home-title">{homeHeadline}</h1>
          </FadeUp>

          <article className="story">
            {homeStory.map((body, i) => (
              <FadeUp key={i} delay={0.13 + Math.min(i, 4) * 0.06} className="story-row">
                <p className="story-text">{body}</p>
              </FadeUp>
            ))}
          </article>
        </main>

        <div className="page__spacer" />
        <SiteFooter />
      </div>
    </div>
  )
}
