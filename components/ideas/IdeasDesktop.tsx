'use client'
import Link from 'next/link'
import NavDesktop from '@/components/NavDesktop'
import { FadeUp, FadeIn } from '@/components/motion/primitives'
import { getArticlesByYear } from '@/lib/articles'

const GS = 'var(--font-geist-sans), system-ui, sans-serif'
const GM = 'var(--font-geist-mono), system-ui, sans-serif'

export default function IdeasDesktop() {
  const byYear = getArticlesByYear()

  return (
    <div style={{ alignItems: 'center', backgroundColor: '#F3F1E9', display: 'flex', flexDirection: 'column', fontSize: '12px', fontSynthesis: 'none', lineHeight: '16px', paddingBottom: '72px', paddingTop: '56px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '768px' }}>

        <FadeIn delay={0} style={{ width: '100%' }}>
          <NavDesktop />
        </FadeIn>

        {/* Hero */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingTop: '104px', width: '100%' }}>
          <FadeUp delay={0.07}>
            <span style={{ color: '#5E6157', fontFamily: GM, fontSize: '13px', fontWeight: 500, letterSpacing: '0.1em', lineHeight: '16px' }}>IDEAS</span>
          </FadeUp>
          <FadeUp delay={0.13}>
            <div style={{ color: '#1B1C18', fontFamily: GS, fontSize: '30px', letterSpacing: '-0.02em', lineHeight: '43px', width: '624px' }}>
              Everything I've written — on craft, clarity, and the slow work of making software good.
            </div>
          </FadeUp>
        </div>

        {/* Archive */}
        <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '84px', paddingTop: '92px', width: '100%' }}>
          <FadeUp delay={0.24} style={{ width: '100%' }}>
            <div style={{ alignItems: 'center', borderBottomColor: '#D7D5C9', borderBottomStyle: 'solid', borderBottomWidth: '1px', display: 'flex', justifyContent: 'space-between', paddingBottom: '18px', width: '100%' }}>
              <span style={{ color: '#5E6157', fontFamily: GM, fontSize: '13px', fontWeight: 500, letterSpacing: '0.1em', lineHeight: '16px' }}>THE ARCHIVE</span>
              <span style={{ color: '#76786C', fontFamily: GM, fontSize: '13px', fontWeight: 500, letterSpacing: '0.04em', lineHeight: '16px' }}>2024 — 2026</span>
            </div>
          </FadeUp>

          {byYear.map(({ year, items }, yi) => (
            <div key={year} style={{ display: 'flex', paddingTop: '34px', width: '100%' }}>
              <FadeUp delay={0.29 + yi * 0.2} style={{ flexShrink: 0, paddingTop: '20px', width: '120px' }}>
                <span style={{ color: '#1B1C18', fontFamily: GM, fontSize: '13px', fontWeight: 600, letterSpacing: '0.06em', lineHeight: '16px' }}>{year}</span>
              </FadeUp>
              <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                {items.map((article, j) => (
                  <FadeUp key={article.slug} delay={0.32 + yi * 0.2 + j * 0.05} style={{ width: '100%' }}>
                    <Link
                      href={`/ideas/${article.slug}`}
                      className="article-row"
                      style={{ alignItems: 'flex-start', borderBottomColor: '#E2E0D5', borderBottomStyle: 'solid', borderBottomWidth: '1px', display: 'flex', gap: '28px', justifyContent: 'space-between', paddingBlock: '20px', width: '100%' }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <span style={{ color: '#1B1C18', fontFamily: GS, fontSize: '19px', fontWeight: 500, letterSpacing: '-0.01em', lineHeight: '24px' }}>{article.title}</span>
                        <span style={{ color: '#6B6E63', fontFamily: GS, fontSize: '15px', lineHeight: '23px', width: '380px' }}>{article.description}</span>
                      </div>
                      <div style={{ alignItems: 'flex-end', display: 'flex', flexDirection: 'column', flexShrink: 0, gap: '6px', paddingTop: '3px', width: '84px' }}>
                        <span style={{ color: '#4F5249', fontFamily: GM, fontSize: '12px', fontWeight: 500, letterSpacing: '0.04em', lineHeight: '16px' }}>{article.dateShort}</span>
                        <span style={{ color: '#76786C', fontFamily: GM, fontSize: '12px', letterSpacing: '0.04em', lineHeight: '16px' }}>{article.readTime}</span>
                      </div>
                    </Link>
                  </FadeUp>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ alignItems: 'center', borderTopColor: '#D7D5C9', borderTopStyle: 'solid', borderTopWidth: '1px', display: 'flex', justifyContent: 'space-between', paddingTop: '30px', width: '100%' }}>
          <span style={{ color: '#76786C', fontFamily: GM, fontSize: '12px', letterSpacing: '0.04em', lineHeight: '16px' }}>© 2026 HARRISON · AARVO</span>
          <div style={{ alignItems: 'center', display: 'flex', gap: '22px' }}>
            <a href="https://x.com" className="footer-link" style={{ color: '#1B1C18', fontFamily: GM, fontSize: '12px', fontWeight: 500, letterSpacing: '0.04em', lineHeight: '16px' }}>X ↗</a>
            <a href="https://github.com" className="footer-link" style={{ color: '#1B1C18', fontFamily: GM, fontSize: '12px', fontWeight: 500, letterSpacing: '0.04em', lineHeight: '16px' }}>GITHUB ↗</a>
            <a href="mailto:harrison@aarvo.com" className="footer-link" style={{ color: '#1B1C18', fontFamily: GM, fontSize: '12px', fontWeight: 500, letterSpacing: '0.04em', lineHeight: '16px' }}>EMAIL ↗</a>
          </div>
        </div>
      </div>
    </div>
  )
}
