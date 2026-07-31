'use client'
import MobileNav from '@/components/MobileNav'
import { FadeUp, FadeIn } from '@/components/motion/primitives'
import { aboutBio } from '@/lib/about'
import { socialLinks } from '@/lib/social'

const GS = 'var(--font-geist-sans), system-ui, sans-serif'
const GM = 'var(--font-geist-mono), system-ui, sans-serif'


export default function AboutMobile() {
  return (
    <div style={{ backgroundColor: '#F3F1E9', display: 'flex', flexDirection: 'column', fontSize: '12px', fontSynthesis: 'none', lineHeight: '16px', minHeight: '100dvh', width: '100%' }}>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', paddingBottom: '44px', paddingLeft: '24px', paddingRight: '24px', paddingTop: '16px', width: '100%' }}>

        <FadeIn delay={0} style={{ width: '100%' }}>
          <MobileNav />
        </FadeIn>

        {/* Hero */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '54px', width: '100%' }}>
          <FadeUp delay={0.07}>
            <span style={{ color: '#5E6157', fontFamily: GM, fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', lineHeight: '16px' }}>ABOUT</span>
          </FadeUp>
          <FadeUp delay={0.13}>
            <div style={{ color: '#1B1C18', fontFamily: GS, fontSize: '24px', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: '33px', textWrap: 'balance', width: '100%' }}>
              I'm Harrison Gwinnett.
            </div>
          </FadeUp>
        </div>

        {/* Bio */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '19px', paddingTop: '40px', width: '100%' }}>
          {aboutBio.map((p, i) => (
            <FadeUp key={i} delay={0.22 + i * 0.07}>
              <div style={{ color: '#41443B', fontFamily: GS, fontSize: '16px', letterSpacing: '-0.005em', lineHeight: '26px', width: '100%' }}>{p}</div>
            </FadeUp>
          ))}
        </div>

        <div style={{ flex: 1, minHeight: '60px' }} />

        {/* Footer */}
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
