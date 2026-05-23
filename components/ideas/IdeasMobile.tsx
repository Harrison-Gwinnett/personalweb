'use client'
import Link from 'next/link'
import MobileNav from '@/components/MobileNav'
import { FadeUp, FadeIn } from '@/components/motion/primitives'
import { getArticlesByYear } from '@/lib/articles'

const GS = 'var(--font-geist-sans), system-ui, sans-serif'
const GM = 'var(--font-geist-mono), system-ui, sans-serif'

export default function IdeasMobile() {
  const byYear = getArticlesByYear()

  return (
    <div style={{ backgroundColor: '#F3F1E9', display: 'flex', flexDirection: 'column', fontSize: '12px', fontSynthesis: 'none', lineHeight: '16px', width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '44px', paddingLeft: '24px', paddingRight: '24px', paddingTop: '16px', width: '100%' }}>

        <FadeIn delay={0} style={{ width: '100%' }}>
          <MobileNav />
        </FadeIn>

        {/* Hero */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '54px', width: '100%' }}>
          <FadeUp delay={0.07}>
            <span style={{ color: '#5E6157', fontFamily: GM, fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', lineHeight: '16px' }}>IDEAS</span>
          </FadeUp>
          <FadeUp delay={0.13}>
            <div style={{ color: '#1B1C18', fontFamily: GS, fontSize: '24px', letterSpacing: '-0.02em', lineHeight: '33px', width: '100%' }}>
              Everything I've written — on craft, clarity, and the slow work of making software good.
            </div>
          </FadeUp>
        </div>

        {/* Archive */}
        <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '46px', paddingTop: '62px', width: '100%' }}>
          <FadeUp delay={0.24} style={{ width: '100%' }}>
            <div style={{ alignItems: 'center', borderBottomColor: '#D7D5C9', borderBottomStyle: 'solid', borderBottomWidth: '1px', display: 'flex', justifyContent: 'space-between', paddingBottom: '15px', width: '100%' }}>
              <span style={{ color: '#5E6157', fontFamily: GM, fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', lineHeight: '16px' }}>THE ARCHIVE</span>
              <span style={{ color: '#76786C', fontFamily: GM, fontSize: '12px', fontWeight: 500, letterSpacing: '0.04em', lineHeight: '16px' }}>2024 — 2026</span>
            </div>
          </FadeUp>

          {byYear.map(({ year, items }, yi) => (
            <div key={year} style={{ display: 'flex', flexDirection: 'column', paddingTop: '26px', width: '100%' }}>
              <FadeUp delay={0.29 + yi * 0.2} style={{ paddingBottom: '6px' }}>
                <span style={{ color: '#1B1C18', fontFamily: GM, fontSize: '12px', fontWeight: 600, letterSpacing: '0.06em', lineHeight: '16px' }}>{year}</span>
              </FadeUp>
              <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                {items.map((article, j) => (
                  <FadeUp key={article.slug} delay={0.32 + yi * 0.2 + j * 0.05} style={{ width: '100%' }}>
                    <Link
                      href={`/ideas/${article.slug}`}
                      className="article-row"
                      style={{ borderBottomColor: '#E2E0D5', borderBottomStyle: 'solid', borderBottomWidth: '1px', display: 'flex', flexDirection: 'column', gap: '7px', paddingBlock: '16px', width: '100%' }}
                    >
                      <span style={{ color: '#1B1C18', fontFamily: GS, fontSize: '17px', fontWeight: 500, letterSpacing: '-0.01em', lineHeight: '22px' }}>{article.title}</span>
                      <span style={{ color: '#6B6E63', fontFamily: GS, fontSize: '14px', lineHeight: '21px' }}>{article.description}</span>
                      <span style={{ color: '#5E6157', fontFamily: GM, fontSize: '12px', letterSpacing: '0.06em', lineHeight: '16px', paddingTop: '3px' }}>
                        {article.dateShort} · {article.readTime}
                      </span>
                    </Link>
                  </FadeUp>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ borderTopColor: '#D7D5C9', borderTopStyle: 'solid', borderTopWidth: '1px', display: 'flex', flexDirection: 'column', gap: '15px', paddingTop: '24px', width: '100%' }}>
          <a href="https://x.com/aarvoceo" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ color: '#1B1C18', fontFamily: GM, fontSize: '12px', fontWeight: 500, letterSpacing: '0.04em', lineHeight: '16px' }}>X ↗</a>
          <span style={{ color: '#76786C', fontFamily: GM, fontSize: '12px', letterSpacing: '0.04em', lineHeight: '16px' }}>© 2026 HARRISON · AARVO</span>
        </div>
      </div>
    </div>
  )
}
