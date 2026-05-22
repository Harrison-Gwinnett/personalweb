import Link from 'next/link'
import MobileNav from '@/components/MobileNav'

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
    <div
      style={{
        backgroundColor: '#F3F1E9',
        display: 'flex',
        flexDirection: 'column',
        fontSize: '12px',
        fontSynthesis: 'none',
        lineHeight: '16px',
        width: '100%',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '44px', paddingLeft: '24px', paddingRight: '24px', paddingTop: '16px', width: '100%' }}>
        <MobileNav />

        {/* Hero */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '54px', width: '100%' }}>
          <div style={{ color: '#1B1C18', fontFamily: GS, fontSize: '24px', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: '33px', width: '100%' }}>
            I care about the unglamorous distance between a product that merely works and one that feels inevitable.
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
            <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
              <span style={{ color: '#41443B', fontFamily: GS, fontSize: '16px', letterSpacing: '-0.005em', lineHeight: '26px' }}>
                I'm Harrison, founder of
              </span>
              <a
                href="https://aarvo.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  alignItems: 'center',
                  backgroundColor: '#ECEAE1',
                  borderColor: '#CCCAB8',
                  borderRadius: '6px',
                  borderStyle: 'solid',
                  borderWidth: '1px',
                  display: 'inline-flex',
                  flexShrink: 0,
                  gap: '5px',
                  paddingBottom: '3px',
                  paddingLeft: '4px',
                  paddingRight: '8px',
                  paddingTop: '3px',
                }}
              >
                <div style={{ alignItems: 'center', backgroundColor: '#1F5A3D', borderRadius: '3px', display: 'flex', flexShrink: 0, height: '16px', justifyContent: 'center', width: '16px' }}>
                  <span style={{ color: '#F3F1E9', fontFamily: GM, fontSize: '9px', fontWeight: 700, lineHeight: '100%' }}>a</span>
                </div>
                <span style={{ color: '#1B1C18', fontFamily: GS, fontSize: '12px', fontWeight: 600, letterSpacing: '-0.01em', lineHeight: '100%' }}>aarvo.com</span>
                <span style={{ color: '#8A8C7F', fontSize: '11px', lineHeight: '100%' }}>↗</span>
              </a>
            </div>
            <div style={{ color: '#41443B', fontFamily: GS, fontSize: '16px', letterSpacing: '-0.005em', lineHeight: '26px' }}>
              I spend my days helping fast-moving teams ship software people actually love — and I write here about craft, clarity, and the narrow gap between good and great.
            </div>
          </div>
        </div>

        {/* Writing index */}
        <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '46px', paddingTop: '62px', width: '100%' }}>
          <div style={{ alignItems: 'center', borderBottomColor: '#D7D5C9', borderBottomStyle: 'solid', borderBottomWidth: '1px', display: 'flex', justifyContent: 'space-between', paddingBottom: '15px', width: '100%' }}>
            <span style={{ color: '#5E6157', fontFamily: GM, fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', lineHeight: '16px' }}>SELECTED WRITING</span>
            <Link href="/ideas" style={{ color: '#1F5A3D', fontFamily: GM, fontSize: '12px', fontWeight: 500, letterSpacing: '0.04em', lineHeight: '16px' }}>ALL IDEAS →</Link>
          </div>

          {/* 2026 */}
          <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '26px', width: '100%' }}>
            <span style={{ color: '#1B1C18', fontFamily: GM, fontSize: '12px', fontWeight: 600, letterSpacing: '0.06em', lineHeight: '16px', paddingBottom: '6px' }}>2026</span>
            {writing2026.map((a) => <ArticleRow key={a.slug} {...a} />)}
          </div>

          {/* 2025 */}
          <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '26px', width: '100%' }}>
            <span style={{ color: '#1B1C18', fontFamily: GM, fontSize: '12px', fontWeight: 600, letterSpacing: '0.06em', lineHeight: '16px', paddingBottom: '6px' }}>2025</span>
            {writing2025.map((a) => <ArticleRow key={a.slug} {...a} />)}
          </div>
        </div>

        {/* Footer */}
        <div style={{ borderTopColor: '#D7D5C9', borderTopStyle: 'solid', borderTopWidth: '1px', display: 'flex', flexDirection: 'column', gap: '15px', paddingTop: '24px', width: '100%' }}>
          <div style={{ alignItems: 'center', display: 'flex', gap: '18px' }}>
            <a href="https://x.com" style={{ color: '#1B1C18', fontFamily: GM, fontSize: '12px', fontWeight: 500, letterSpacing: '0.04em', lineHeight: '16px' }}>X ↗</a>
            <a href="https://github.com" style={{ color: '#1B1C18', fontFamily: GM, fontSize: '12px', fontWeight: 500, letterSpacing: '0.04em', lineHeight: '16px' }}>GITHUB ↗</a>
            <a href="mailto:harrison@aarvo.com" style={{ color: '#1B1C18', fontFamily: GM, fontSize: '12px', fontWeight: 500, letterSpacing: '0.04em', lineHeight: '16px' }}>EMAIL ↗</a>
          </div>
          <span style={{ color: '#76786C', fontFamily: GM, fontSize: '12px', letterSpacing: '0.04em', lineHeight: '16px' }}>© 2026 HARRISON · AARVO</span>
        </div>
      </div>
    </div>
  )
}
