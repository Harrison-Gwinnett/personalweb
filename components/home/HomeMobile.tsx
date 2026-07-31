'use client'
import Link from 'next/link'
import AarvoChip from '@/components/AarvoChip'
import MobileNav from '@/components/MobileNav'
import { FadeUp, FadeIn } from '@/components/motion/primitives'
import { socialLinks } from '@/lib/social'

const GS = 'var(--font-geist-sans), system-ui, sans-serif'
const GM = 'var(--font-geist-mono), system-ui, sans-serif'

const writing2026 = [
  { slug: 'the-cost-of-almost-right', title: 'The cost of almost-right', meta: 'MAY 12 · 3 MIN' },
  { slug: 'taste-is-just-attention-repeated', title: 'Taste is just attention, repeated', meta: 'MAR 04 · 5 MIN' },
]

const writing2025 = [
  { slug: 'what-i-look-for-in-the-first-ten-hires', title: 'What I look for in the first ten hires', meta: 'NOV 18 · 6 MIN' },
  { slug: 'speed-is-a-feature-you-design-for', title: 'Speed is a feature you design for', meta: 'AUG 02 · 4 MIN' },
  { slug: 'notes-on-keeping-software-small', title: 'Notes on keeping software small', meta: 'APR 21 · 2 MIN' },
]

function ArticleRow({ slug, title, meta }: { slug: string; title: string; meta: string }) {
  return (
    <Link
      href={`/ideas/${slug}`}
      className="article-row"
      style={{
        borderBottomColor: '#E2E0D5',
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
        display: 'flex',
        flexDirection: 'column',
        gap: '7px',
        paddingBlock: '16px',
        width: '100%',
      }}
    >
      <span style={{ color: '#1B1C18', fontFamily: GS, fontSize: '17px', fontWeight: 500, letterSpacing: '-0.01em', lineHeight: '22px' }}>
        {title}
      </span>
      <span style={{ color: '#5E6157', fontFamily: GM, fontSize: '12px', letterSpacing: '0.06em', lineHeight: '16px', paddingTop: '3px' }}>
        {meta}
      </span>
    </Link>
  )
}

export default function HomeMobile() {
  return (
    <div style={{ backgroundColor: '#F3F1E9', display: 'flex', flexDirection: 'column', fontSize: '12px', fontSynthesis: 'none', lineHeight: '16px', minHeight: '100dvh', width: '100%' }}>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', paddingBottom: '44px', paddingLeft: '24px', paddingRight: '24px', paddingTop: '16px', width: '100%' }}>

        <FadeIn delay={0} style={{ width: '100%' }}>
          <MobileNav />
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '54px', width: '100%' }}>
          <FadeUp delay={0.07}>
            <div style={{ color: '#1B1C18', fontFamily: GS, fontSize: '24px', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: '33px', textWrap: 'balance', width: '100%' }}>
              Obsessed with finance, markets and money.
            </div>
          </FadeUp>

          <FadeUp delay={0.15} style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%' }}>
            <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
              <span style={{ color: '#41443B', fontFamily: GS, fontSize: '16px', letterSpacing: '-0.005em', lineHeight: '26px' }}>
                I&apos;m Harrison, founder of
              </span>
              <AarvoChip size="mobile" />
            </div>

            <div style={{ color: '#41443B', fontFamily: GS, fontSize: '16px', letterSpacing: '-0.005em', lineHeight: '26px' }}>
              Every business I&apos;ve built had the same problem: never knowing where to spend less, how to earn more, or what to do next which is what inspired me to build{' '}
              <span style={{ display: 'inline-flex', marginInline: '2px', verticalAlign: 'middle' }}>
                <AarvoChip size="mobile" />
              </span>
              .
            </div>

            <div style={{ color: '#41443B', fontFamily: GS, fontSize: '16px', letterSpacing: '-0.005em', lineHeight: '26px' }}>
              Businesses are built to profit. It&apos;s surprising how few actually know their numbers, and how far ahead you&apos;d be if you did.
            </div>
          </FadeUp>
        </div>

        {false && (
        <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '46px', paddingTop: '62px', width: '100%' }}>
          <FadeUp delay={0.24} style={{ width: '100%' }}>
            <div style={{ alignItems: 'center', borderBottomColor: '#D7D5C9', borderBottomStyle: 'solid', borderBottomWidth: '1px', display: 'flex', justifyContent: 'space-between', paddingBottom: '15px', width: '100%' }}>
              <span style={{ color: '#5E6157', fontFamily: GM, fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', lineHeight: '16px' }}>SELECTED WRITING</span>
              <Link href="/ideas" className="nav-link" style={{ color: '#1F5A3D', fontFamily: GM, fontSize: '12px', fontWeight: 500, letterSpacing: '0.04em', lineHeight: '16px' }}>ALL IDEAS →</Link>
            </div>
          </FadeUp>

          <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '26px', width: '100%' }}>
            <FadeUp delay={0.29} style={{ paddingBottom: '6px' }}>
              <span style={{ color: '#1B1C18', fontFamily: GM, fontSize: '12px', fontWeight: 600, letterSpacing: '0.06em', lineHeight: '16px' }}>2026</span>
            </FadeUp>
            {writing2026.map((a, i) => (
              <FadeUp key={a.slug} delay={0.32 + i * 0.05} style={{ width: '100%' }}>
                <ArticleRow {...a} />
              </FadeUp>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '26px', width: '100%' }}>
            <FadeUp delay={0.42} style={{ paddingBottom: '6px' }}>
              <span style={{ color: '#1B1C18', fontFamily: GM, fontSize: '12px', fontWeight: 600, letterSpacing: '0.06em', lineHeight: '16px' }}>2025</span>
            </FadeUp>
            {writing2025.map((a, i) => (
              <FadeUp key={a.slug} delay={0.45 + i * 0.05} style={{ width: '100%' }}>
                <ArticleRow {...a} />
              </FadeUp>
            ))}
          </div>
        </div>
        )}

        <div style={{ flex: 1 }} />

        <div style={{ borderTopColor: '#D7D5C9', borderTopStyle: 'solid', borderTopWidth: '1px', display: 'flex', flexDirection: 'column', gap: '15px', paddingTop: '24px', width: '100%' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px' }}>
            {socialLinks.map(({ label, href }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="footer-link" style={{ color: '#1B1C18', fontFamily: GM, fontSize: '12px', fontWeight: 500, letterSpacing: '0.04em', lineHeight: '16px' }}>{label}</a>
            ))}
          </div>
          <span style={{ color: '#76786C', fontFamily: GM, fontSize: '12px', letterSpacing: '0.04em', lineHeight: '16px' }}>© 2026 HARRISON · AARVO</span>
        </div>
      </div>
    </div>
  )
}
