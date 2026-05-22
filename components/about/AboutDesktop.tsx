'use client'
import NavDesktop from '@/components/NavDesktop'
import { FadeUp, FadeIn } from '@/components/motion/primitives'

const GS = 'var(--font-geist-sans), system-ui, sans-serif'
const GM = 'var(--font-geist-mono), system-ui, sans-serif'

const bio = [
  "I grew up taking things apart to see how they worked, and never quite stopped. Somewhere between a half-finished engineering degree and a string of small products nobody asked for, I learned that I'm happiest at the seam where design, code, and the person on the other end all meet.",
  "These days that seam is aarvo. We build tools for teams who refuse to ship things they're not proud of — software that's fast because someone decided it should be, clear because someone sweated the wording, and quietly opinionated about the right way to do the job.",
  "Before aarvo I spent years inside fast-moving companies, usually as the person who'd notice the thing everyone else had learned to live with. It turns out that noticing — and then actually fixing it — is most of the job. The rest is taste, patience, and a tolerance for doing the boring last ten percent twice.",
  "When I'm not working I'm reading more than I finish, running slower than I'd admit, and writing the notes that end up here. If something I've made or written is useful to you, that's the whole point — reach out anytime.",
]

const principles = [
  { num: '01', heading: 'Subtraction beats addition', body: 'The best feature is usually the one you decide not to build. Less surface, less to maintain, less standing between the person and the point.' },
  { num: '02', heading: 'Speed is respect', body: 'Every second you save someone is a small kindness, paid out thousands of times a day. Fast is a feeling, and you design for it on purpose.' },
  { num: '03', heading: 'Taste is repetition', body: "It's just attention paid for longer than is reasonable. You can't fake it, but you can absolutely practice it until it's yours." },
  { num: '04', heading: 'Finish the boring part', body: "I'd rather ship the unglamorous last ten percent twice than the exciting ninety percent once. The end is where things become real." },
]

export default function AboutDesktop() {
  return (
    <div style={{ alignItems: 'center', backgroundColor: '#F3F1E9', display: 'flex', flexDirection: 'column', fontSize: '12px', fontSynthesis: 'none', lineHeight: '16px', paddingBottom: '72px', paddingTop: '56px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '768px' }}>

        <FadeIn delay={0} style={{ width: '100%' }}>
          <NavDesktop />
        </FadeIn>

        {/* Hero */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', paddingTop: '104px', width: '100%' }}>
          <FadeUp delay={0.07}>
            <span style={{ color: '#5E6157', fontFamily: GM, fontSize: '13px', fontWeight: 500, letterSpacing: '0.1em', lineHeight: '16px' }}>ABOUT</span>
          </FadeUp>
          <FadeUp delay={0.13}>
            <div style={{ color: '#1B1C18', fontFamily: GS, fontSize: '30px', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: '43px', width: '648px' }}>
              I build aarvo — and I care, maybe a little too much, about how software feels in the hand.
            </div>
          </FadeUp>
        </div>

        {/* Bio */}
        <FadeUp delay={0.22} style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingTop: '52px', width: '100%' }}>
          {bio.map((p, i) => (
            <div key={i} style={{ color: '#41443B', fontFamily: GS, fontSize: '18px', letterSpacing: '-0.005em', lineHeight: '31px', width: '600px' }}>{p}</div>
          ))}
        </FadeUp>

        {/* HOW I THINK */}
        <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '84px', paddingTop: '90px', width: '100%' }}>
          <FadeUp delay={0.30} style={{ width: '100%' }}>
            <div style={{ alignItems: 'center', borderBottomColor: '#D7D5C9', borderBottomStyle: 'solid', borderBottomWidth: '1px', display: 'flex', paddingBottom: '18px', width: '100%' }}>
              <span style={{ color: '#5E6157', fontFamily: GM, fontSize: '13px', fontWeight: 500, letterSpacing: '0.1em', lineHeight: '16px' }}>HOW I THINK</span>
            </div>
          </FadeUp>
          {principles.map(({ num, heading, body }, i) => (
            <FadeUp key={num} delay={0.34 + i * 0.06} style={{ width: '100%' }}>
              <div style={{ alignItems: 'flex-start', borderBottomColor: '#E2E0D5', borderBottomStyle: 'solid', borderBottomWidth: '1px', display: 'flex', paddingBlock: '26px', width: '100%' }}>
                <div style={{ flexShrink: 0, paddingTop: '5px', width: '120px' }}>
                  <span style={{ color: '#1F5A3D', fontFamily: GM, fontSize: '13px', fontWeight: 500, letterSpacing: '0.04em', lineHeight: '16px' }}>{num}</span>
                </div>
                <div style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: '8px' }}>
                  <span style={{ color: '#1B1C18', fontFamily: GS, fontSize: '22px', letterSpacing: '-0.01em', lineHeight: '28px' }}>{heading}</span>
                  <span style={{ color: '#6B6E63', fontFamily: GS, fontSize: '16px', lineHeight: '25px', width: '470px' }}>{body}</span>
                </div>
              </div>
            </FadeUp>
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
