'use client'
import NavDesktop from '@/components/NavDesktop'
import { FadeUp, FadeIn } from '@/components/motion/primitives'
import { aboutBio } from '@/lib/about'
import { socialLinks } from '@/lib/social'

const GS = 'var(--font-geist-sans), system-ui, sans-serif'
const GM = 'var(--font-geist-mono), system-ui, sans-serif'


export default function AboutDesktop() {
  return (
    <div style={{ alignItems: 'center', backgroundColor: '#F3F1E9', display: 'flex', flexDirection: 'column', fontSize: '12px', fontSynthesis: 'none', lineHeight: '16px', minHeight: '100dvh', paddingBottom: '72px', paddingTop: '56px' }}>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', width: '768px' }}>

        <FadeIn delay={0} style={{ width: '100%' }}>
          <NavDesktop />
        </FadeIn>

        {/* Hero */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', paddingTop: '104px', width: '100%' }}>
          <FadeUp delay={0.07}>
            <span style={{ color: '#5E6157', fontFamily: GM, fontSize: '13px', fontWeight: 500, letterSpacing: '0.1em', lineHeight: '16px' }}>ABOUT</span>
          </FadeUp>
          <FadeUp delay={0.13}>
            <div style={{ color: '#1B1C18', fontFamily: GS, fontSize: '30px', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: '43px', textWrap: 'balance', width: '648px' }}>
              I'm Harrison Gwinnett.
            </div>
          </FadeUp>
        </div>

        {/* Bio */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingTop: '52px', width: '100%' }}>
          {aboutBio.map((p, i) => (
            <FadeUp key={i} delay={0.22 + i * 0.07}>
              <div style={{ color: '#41443B', fontFamily: GS, fontSize: '18px', letterSpacing: '-0.005em', lineHeight: '31px', width: '600px' }}>{p}</div>
            </FadeUp>
          ))}
        </div>

        <div style={{ flex: 1, minHeight: '80px' }} />

        {/* Footer */}
        <div style={{ alignItems: 'center', borderTopColor: '#D7D5C9', borderTopStyle: 'solid', borderTopWidth: '1px', display: 'flex', justifyContent: 'space-between', paddingTop: '30px', width: '100%' }}>
          <span style={{ color: '#76786C', fontFamily: GM, fontSize: '12px', letterSpacing: '0.04em', lineHeight: '16px' }}>© 2026 HARRISON · AARVO</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'flex-end' }}>
            {socialLinks.map(({ label, href }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="footer-link" style={{ color: '#1B1C18', fontFamily: GM, fontSize: '12px', fontWeight: 500, letterSpacing: '0.04em', lineHeight: '16px' }}>{label}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
