import MobileNav from '@/components/MobileNav'

const GS = 'var(--font-geist-sans), system-ui, sans-serif'
const GM = 'var(--font-geist-mono), system-ui, sans-serif'

const principles = [
  {
    num: '01',
    heading: 'Subtraction beats addition',
    body: 'The best feature is usually the one you decide not to build. Less surface, less to maintain, less standing between the person and the point.',
  },
  {
    num: '02',
    heading: 'Speed is respect',
    body: 'Every second you save someone is a small kindness, paid out thousands of times a day. Fast is a feeling, and you design for it on purpose.',
  },
  {
    num: '03',
    heading: 'Taste is repetition',
    body: "It's just attention paid for longer than is reasonable. You can't fake it, but you can absolutely practice it until it's yours.",
  },
  {
    num: '04',
    heading: 'Finish the boring part',
    body: "I'd rather ship the unglamorous last ten percent twice than the exciting ninety percent once. The end is where things become real.",
  },
]

export default function AboutMobile() {
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
          <span style={{ color: '#5E6157', fontFamily: GM, fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', lineHeight: '16px' }}>ABOUT</span>
          <div style={{ color: '#1B1C18', fontFamily: GS, fontSize: '24px', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: '33px', width: '100%' }}>
            I build aarvo — and I care, maybe a little too much, about how software feels in the hand.
          </div>
        </div>

        {/* Bio */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '19px', paddingTop: '40px', width: '100%' }}>
          {[
            "I grew up taking things apart to see how they worked, and never quite stopped. Somewhere between a half-finished engineering degree and a string of small products nobody asked for, I learned that I'm happiest at the seam where design, code, and the person on the other end all meet.",
            "These days that seam is aarvo. We build tools for teams who refuse to ship things they're not proud of — software that's fast because someone decided it should be, clear because someone sweated the wording, and quietly opinionated about the right way to do the job.",
            "Before aarvo I spent years inside fast-moving companies, usually as the person who'd notice the thing everyone else had learned to live with. It turns out that noticing — and then actually fixing it — is most of the job. The rest is taste, patience, and a tolerance for doing the boring last ten percent twice.",
            "When I'm not working I'm reading more than I finish, running slower than I'd admit, and writing the notes that end up here. If something I've made or written is useful to you, that's the whole point — reach out anytime.",
          ].map((p, i) => (
            <div key={i} style={{ color: '#41443B', fontFamily: GS, fontSize: '16px', letterSpacing: '-0.005em', lineHeight: '26px', width: '100%' }}>
              {p}
            </div>
          ))}
        </div>

        {/* HOW I THINK */}
        <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '38px', paddingTop: '52px', width: '100%' }}>
          <div style={{ alignItems: 'center', borderBottomColor: '#D7D5C9', borderBottomStyle: 'solid', borderBottomWidth: '1px', display: 'flex', paddingBottom: '14px', width: '100%' }}>
            <span style={{ color: '#5E6157', fontFamily: GM, fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', lineHeight: '16px' }}>HOW I THINK</span>
          </div>
          {principles.map(({ num, heading, body }) => (
            <div
              key={num}
              style={{
                borderBottomColor: '#E2E0D5',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                paddingBlock: '20px',
                width: '100%',
              }}
            >
              <div style={{ alignItems: 'baseline', display: 'flex', gap: '10px' }}>
                <span style={{ color: '#1F5A3D', fontFamily: GM, fontSize: '12px', fontWeight: 500, letterSpacing: '0.04em', lineHeight: '16px' }}>{num}</span>
                <span style={{ color: '#1B1C18', fontFamily: GS, fontSize: '18px', fontWeight: 500, letterSpacing: '-0.01em', lineHeight: '22px' }}>{heading}</span>
              </div>
              <div style={{ color: '#6B6E63', fontFamily: GS, fontSize: '15px', lineHeight: '23px', width: '100%' }}>{body}</div>
            </div>
          ))}
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
