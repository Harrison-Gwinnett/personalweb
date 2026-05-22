import Link from 'next/link'
import NavDesktop from '@/components/NavDesktop'

const GS = 'var(--font-geist-sans), system-ui, sans-serif'
const GM = 'var(--font-geist-mono), system-ui, sans-serif'

const writing2026 = [
  { slug: 'the-cost-of-almost-right', title: 'The cost of almost-right', dateShort: 'MAY 12', readTime: '3 MIN' },
  { slug: 'taste-is-just-attention-repeated', title: 'Taste is just attention, repeated', dateShort: 'MAR 04', readTime: '5 MIN' },
]

const writing2025 = [
  { slug: 'what-i-look-for-in-the-first-ten-hires', title: 'What I look for in the first ten hires', dateShort: 'NOV 18', readTime: '6 MIN' },
  { slug: 'speed-is-a-feature-you-design-for', title: 'Speed is a feature you design for', dateShort: 'AUG 02', readTime: '4 MIN' },
  { slug: 'notes-on-keeping-software-small', title: 'Notes on keeping software small', dateShort: 'APR 21', readTime: '2 MIN' },
]

function ArticleRow({ slug, title, dateShort, readTime }: { slug: string; title: string; dateShort: string; readTime: string }) {
  return (
    <Link
      href={`/ideas/${slug}`}
      style={{
        alignItems: 'flex-start',
        borderBottomColor: '#E2E0D5',
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
        display: 'flex',
        gap: '28px',
        justifyContent: 'space-between',
        paddingBlock: '20px',
        width: '100%',
      }}
    >
      <span style={{ color: '#1B1C18', fontFamily: GS, fontSize: '19px', fontWeight: 500, letterSpacing: '-0.01em', lineHeight: '24px' }}>
        {title}
      </span>
      <div style={{ alignItems: 'flex-end', display: 'flex', flexDirection: 'column', flexShrink: 0, gap: '6px', paddingTop: '3px', width: '84px' }}>
        <span style={{ color: '#4F5249', fontFamily: GM, fontSize: '12px', fontWeight: 500, letterSpacing: '0.04em', lineHeight: '16px' }}>{dateShort}</span>
        <span style={{ color: '#76786C', fontFamily: GM, fontSize: '12px', letterSpacing: '0.04em', lineHeight: '16px' }}>{readTime}</span>
      </div>
    </Link>
  )
}

export default function HomeDesktop() {
  return (
    <div
      style={{
        alignItems: 'center',
        backgroundColor: '#F3F1E9',
        display: 'flex',
        flexDirection: 'column',
        fontSize: '12px',
        fontSynthesis: 'none',
        lineHeight: '16px',
        paddingBottom: '72px',
        paddingTop: '56px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', width: '768px' }}>
        <NavDesktop />

        {/* Hero */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', paddingTop: '104px', width: '100%' }}>
          <div style={{ color: '#1B1C18', fontFamily: GS, fontSize: '31px', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: '44px', width: '660px' }}>
            I care about the unglamorous distance between a product that merely works and one that feels inevitable.
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '600px' }}>
            <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{ color: '#41443B', fontFamily: GS, fontSize: '18px', letterSpacing: '-0.005em', lineHeight: '28px' }}>
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
                  borderRadius: '7px',
                  borderStyle: 'solid',
                  borderWidth: '1px',
                  display: 'inline-flex',
                  flexShrink: 0,
                  gap: '5px',
                  paddingBottom: '3px',
                  paddingLeft: '4px',
                  paddingRight: '9px',
                  paddingTop: '3px',
                }}
              >
                <div style={{ alignItems: 'center', backgroundColor: '#1F5A3D', borderRadius: '4px', display: 'flex', flexShrink: 0, height: '17px', justifyContent: 'center', width: '17px' }}>
                  <span style={{ color: '#F3F1E9', fontFamily: GM, fontSize: '10px', fontWeight: 700, lineHeight: '100%' }}>a</span>
                </div>
                <span style={{ color: '#1B1C18', fontFamily: GS, fontSize: '13px', fontWeight: 600, letterSpacing: '-0.01em', lineHeight: '100%' }}>aarvo.com</span>
                <span style={{ color: '#8A8C7F', fontSize: '11px', lineHeight: '100%' }}>↗</span>
              </a>
            </div>
            <div style={{ color: '#41443B', fontFamily: GS, fontSize: '18px', letterSpacing: '-0.005em', lineHeight: '31px' }}>
              I spend my days helping fast-moving teams ship software people actually love — and I write here about craft, clarity, and the narrow gap between good and great.
            </div>
          </div>
        </div>

        {/* Writing index */}
        <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '84px', paddingTop: '92px', width: '100%' }}>
          <div style={{ alignItems: 'center', borderBottomColor: '#D7D5C9', borderBottomStyle: 'solid', borderBottomWidth: '1px', display: 'flex', justifyContent: 'space-between', paddingBottom: '18px', width: '100%' }}>
            <span style={{ color: '#5E6157', fontFamily: GM, fontSize: '13px', fontWeight: 500, letterSpacing: '0.1em', lineHeight: '16px' }}>SELECTED WRITING</span>
            <Link href="/ideas" style={{ color: '#1F5A3D', fontFamily: GM, fontSize: '13px', fontWeight: 500, letterSpacing: '0.04em', lineHeight: '16px' }}>ALL IDEAS →</Link>
          </div>

          {/* 2026 */}
          <div style={{ display: 'flex', paddingTop: '34px', width: '100%' }}>
            <div style={{ flexShrink: 0, paddingTop: '20px', width: '120px' }}>
              <span style={{ color: '#1B1C18', fontFamily: GM, fontSize: '13px', fontWeight: 600, letterSpacing: '0.06em', lineHeight: '16px' }}>2026</span>
            </div>
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
              {writing2026.map((a) => <ArticleRow key={a.slug} {...a} />)}
            </div>
          </div>

          {/* 2025 */}
          <div style={{ display: 'flex', paddingTop: '34px', width: '100%' }}>
            <div style={{ flexShrink: 0, paddingTop: '20px', width: '120px' }}>
              <span style={{ color: '#1B1C18', fontFamily: GM, fontSize: '13px', fontWeight: 600, letterSpacing: '0.06em', lineHeight: '16px' }}>2025</span>
            </div>
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
              {writing2025.map((a) => <ArticleRow key={a.slug} {...a} />)}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ alignItems: 'center', borderTopColor: '#D7D5C9', borderTopStyle: 'solid', borderTopWidth: '1px', display: 'flex', justifyContent: 'space-between', paddingTop: '30px', width: '100%' }}>
          <span style={{ color: '#76786C', fontFamily: GM, fontSize: '12px', letterSpacing: '0.04em', lineHeight: '16px' }}>© 2026 HARRISON · AARVO</span>
          <div style={{ alignItems: 'center', display: 'flex', gap: '22px' }}>
            <a href="https://x.com" style={{ color: '#1B1C18', fontFamily: GM, fontSize: '12px', fontWeight: 500, letterSpacing: '0.04em', lineHeight: '16px' }}>X ↗</a>
            <a href="https://github.com" style={{ color: '#1B1C18', fontFamily: GM, fontSize: '12px', fontWeight: 500, letterSpacing: '0.04em', lineHeight: '16px' }}>GITHUB ↗</a>
            <a href="mailto:harrison@aarvo.com" style={{ color: '#1B1C18', fontFamily: GM, fontSize: '12px', fontWeight: 500, letterSpacing: '0.04em', lineHeight: '16px' }}>EMAIL ↗</a>
          </div>
        </div>
      </div>
    </div>
  )
}
