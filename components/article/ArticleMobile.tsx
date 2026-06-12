'use client'
import Link from 'next/link'
import MobileNav from '@/components/MobileNav'
import { FadeUp, FadeIn } from '@/components/motion/primitives'
import type { Article } from '@/lib/articles'

const GS = 'var(--font-geist-sans), system-ui, sans-serif'
const GM = 'var(--font-geist-mono), system-ui, sans-serif'

function ArticleBody() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', paddingTop: '34px', width: '100%' }}>
      {[
        'Every product accumulates a quiet debt. Not the technical kind that shows up in a backlog, but something softer and harder to name: the things that are almost right. The button sitting two pixels low. The empty state nobody bothered to write. The error message that technically tells the truth and helps no one.',
        'Individually, none of these is worth stopping for — and that is exactly what makes them dangerous. Each one is small enough to wave past, there are thousands of them, and together they are the whole difference between software that feels cheap and software that feels considered.',
      ].map((p, i) => (
        <div key={i} style={{ color: '#33352E', fontFamily: GS, fontSize: '16px', letterSpacing: '-0.005em', lineHeight: '26px', width: '100%' }}>
          {p}
        </div>
      ))}

      {/* Section heading */}
      <div style={{ display: 'inline-block', paddingTop: '14px', width: '100%' }}>
        <span style={{ color: '#1B1C18', fontFamily: GS, fontSize: '20px', fontWeight: 600, letterSpacing: '-0.015em', lineHeight: '27px' }}>Almost-right compounds</span>
      </div>

      <div style={{ color: '#33352E', fontFamily: GS, fontSize: '16px', letterSpacing: '-0.005em', lineHeight: '26px', width: '100%' }}>
        The cost was never the fix. The cost is that almost-right quietly teaches everyone around it that almost-right is acceptable. The next person sees the two-pixel gap and matches it. The one after that rounds down a little further. Standards don't collapse in a meeting — they erode one reasonable compromise at a time.
      </div>

      {/* Pull quote */}
      <div style={{ borderLeftColor: '#1F5A3D', borderLeftStyle: 'solid', borderLeftWidth: '2px', display: 'flex', flexDirection: 'column', paddingBottom: '10px', paddingLeft: '22px', paddingTop: '10px', width: '100%' }}>
        <span style={{ color: '#1B1C18', fontFamily: GS, fontSize: '21px', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: '31px' }}>
          You don't decide your standards once. You decide them again every time you choose not to fix something.
        </span>
      </div>

      <div style={{ paddingTop: '12px', width: '100%' }}>
        <div style={{ color: '#33352E', fontFamily: GS, fontSize: '16px', letterSpacing: '-0.005em', lineHeight: '26px' }}>
          The teams that make things people love are not smarter about the big decisions. They are simply unwilling to live with the small wrong ones. They treat "good enough for now" as a loan with interest, and they pay it down while it is still cheap.
        </div>
      </div>

      <div style={{ color: '#33352E', fontFamily: GS, fontSize: '16px', letterSpacing: '-0.005em', lineHeight: '26px', width: '100%' }}>
        So the discipline is unglamorous: notice the almost-right thing, and fix it before it quietly becomes the baseline. Not all of it, and not at once — but enough, and often enough, that the people around you learn what the bar actually is by watching where you refuse to drop it.
      </div>
    </div>
  )
}

export default function ArticleMobile({ article }: { article: Article }) {
  return (
    <div style={{ backgroundColor: '#F3F1E9', display: 'flex', flexDirection: 'column', fontSize: '12px', fontSynthesis: 'none', lineHeight: '16px', width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '44px', paddingLeft: '24px', paddingRight: '24px', paddingTop: '16px', width: '100%' }}>

        <FadeIn delay={0} style={{ width: '100%' }}>
          <MobileNav />
        </FadeIn>

        {/* Article content */}
        <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '36px', width: '100%' }}>
          <FadeUp delay={0.07} style={{ display: 'flex', flexDirection: 'column', paddingTop: '46px', width: '100%' }}>
            <Link href="/ideas" className="nav-link" style={{ color: '#1F5A3D', fontFamily: GM, fontSize: '12px', fontWeight: 500, letterSpacing: '0.04em', lineHeight: '16px' }}>
              ← ALL IDEAS
            </Link>
            <div style={{ display: 'inline-block', paddingTop: '38px' }}>
              <span style={{ color: '#5E6157', fontFamily: GM, fontSize: '12px', letterSpacing: '0.07em', lineHeight: '16px' }}>
                {article.date} · {article.readTime} · {article.category}
              </span>
            </div>
            <div style={{ display: 'inline-block', paddingTop: '15px' }}>
              <h1 style={{ color: '#1B1C18', fontFamily: GS, fontSize: '32px', fontWeight: 600, letterSpacing: '-0.025em', lineHeight: '39px', margin: 0 }}>
                {article.title}
              </h1>
            </div>
            <div style={{ paddingTop: '15px', width: '100%' }}>
              <p style={{ color: '#6B6E63', fontFamily: GS, fontSize: '18px', letterSpacing: '-0.01em', lineHeight: '27px', margin: 0 }}>
                {article.description}
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.18} style={{ width: '100%' }}>
            <ArticleBody />
          </FadeUp>

          {/* Post-article nav */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '13px', paddingTop: '42px', width: '100%' }}>
            <div style={{ backgroundColor: '#D7D5C9', flexShrink: 0, height: '1px', width: '100%' }} />
            {article.nextSlug && (
              <div style={{ display: 'inline-block', paddingTop: '9px' }}>
                <Link href={`/ideas/${article.nextSlug}`} className="nav-link" style={{ color: '#1F5A3D', fontFamily: GM, fontSize: '12px', fontWeight: 500, letterSpacing: '0.04em', lineHeight: '16px' }}>
                  NEXT — {article.nextTitle} →
                </Link>
              </div>
            )}
            <span style={{ color: '#76786C', fontFamily: GM, fontSize: '12px', letterSpacing: '0.06em', lineHeight: '16px' }}>WRITTEN BY HARRISON · AARVO</span>
          </div>
        </div>

        {/* Footer */}
        <div style={{ borderTopColor: '#D7D5C9', borderTopStyle: 'solid', borderTopWidth: '1px', display: 'flex', flexDirection: 'column', gap: '15px', paddingTop: '24px', width: '100%' }}>
          <a href="https://x.com/HGGwinnett" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ color: '#1B1C18', fontFamily: GM, fontSize: '12px', fontWeight: 500, letterSpacing: '0.04em', lineHeight: '16px' }}>X ↗</a>
          <span style={{ color: '#76786C', fontFamily: GM, fontSize: '12px', letterSpacing: '0.04em', lineHeight: '16px' }}>© 2026 HARRISON · AARVO</span>
        </div>
      </div>
    </div>
  )
}
