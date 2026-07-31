'use client'
import MobileNav from '@/components/MobileNav'
import { FadeUp, FadeIn } from '@/components/motion/primitives'
import { historyRoles, type HistoryRole } from '@/lib/history'
import { socialLinks } from '@/lib/social'

const GS = 'var(--font-geist-sans), system-ui, sans-serif'
const GM = 'var(--font-geist-mono), system-ui, sans-serif'

function RoleLogo({ role }: { role: HistoryRole }) {
  if (role.logoSrc) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={role.logoSrc}
        alt=""
        width={36}
        height={36}
        style={{
          backgroundColor: '#1B1C18',
          borderRadius: '6px',
          display: 'block',
          flexShrink: 0,
          height: '36px',
          objectFit: 'cover',
          outline: '1px solid oklch(0 0 0 / 0.1)',
          outlineOffset: '-1px',
          width: '36px',
        }}
      />
    )
  }

  return (
    <div
      aria-hidden="true"
      style={{
        alignItems: 'center',
        backgroundColor: '#1B1C18',
        borderRadius: '6px',
        color: '#F3F1E9',
        display: 'flex',
        flexShrink: 0,
        fontFamily: GM,
        fontSize: '13px',
        fontWeight: 600,
        height: '36px',
        justifyContent: 'center',
        letterSpacing: '0.02em',
        width: '36px',
      }}
    >
      {role.logoLabel}
    </div>
  )
}

function RoleBlock({ role, delay }: { role: HistoryRole; delay: number }) {
  return (
    <FadeUp delay={delay} style={{ borderTopColor: '#D7D5C9', borderTopStyle: 'solid', borderTopWidth: '1px', display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '28px', width: '100%' }}>
      <div style={{ display: 'flex', gap: '14px' }}>
        <RoleLogo role={role} />
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: '5px', minWidth: 0 }}>
          <div style={{ color: '#1B1C18', fontFamily: GS, fontSize: '20px', fontWeight: 500, letterSpacing: '-0.015em', lineHeight: '26px', textWrap: 'balance' }}>
            {role.title}
          </div>
          <div style={{ color: '#1B1C18', fontFamily: GS, fontSize: '15px', letterSpacing: '-0.005em', lineHeight: '22px' }}>
            {role.company} · {role.employmentType}
          </div>
          <div style={{ color: '#76786C', fontFamily: GM, fontSize: '11px', letterSpacing: '0.04em', lineHeight: '15px' }}>
            {role.dateLabel}
          </div>
          {role.location && (
            <div style={{ color: '#76786C', fontFamily: GM, fontSize: '11px', letterSpacing: '0.04em', lineHeight: '15px' }}>
              {role.location}
            </div>
          )}
        </div>
      </div>

      {role.summary && (
        <p style={{ color: '#41443B', fontFamily: GS, fontSize: '15px', letterSpacing: '-0.005em', lineHeight: '25px', margin: 0 }}>
          {role.summary}
        </p>
      )}

      {role.paragraphs?.map((p) => (
        <p key={p.slice(0, 24)} style={{ color: '#41443B', fontFamily: GS, fontSize: '15px', letterSpacing: '-0.005em', lineHeight: '25px', margin: 0 }}>
          {p}
        </p>
      ))}

      {role.bullets && role.bullets.length > 0 && (
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', listStyle: 'none', margin: 0, padding: 0 }}>
          {role.bullets.map((item) => (
            <li key={item} style={{ color: '#41443B', display: 'flex', fontFamily: GS, fontSize: '15px', gap: '10px', letterSpacing: '-0.005em', lineHeight: '25px' }}>
              <span aria-hidden="true" style={{ color: '#8A8C7F', flexShrink: 0 }}>→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {role.closing && (
        <p style={{ color: '#5E6157', fontFamily: GS, fontSize: '14px', fontStyle: 'italic', letterSpacing: '-0.005em', lineHeight: '22px', margin: 0 }}>
          {role.closing}
        </p>
      )}

      {role.link && (
        <a
          href={role.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
          style={{
            alignItems: 'center',
            alignSelf: 'flex-start',
            backgroundColor: '#ECEAE1',
            borderColor: '#CCCAB8',
            borderRadius: '8px',
            borderStyle: 'solid',
            borderWidth: '1px',
            color: '#1B1C18',
            display: 'inline-flex',
            fontFamily: GS,
            gap: '12px',
            padding: '10px 14px',
          }}
        >
          <span style={{ color: '#1F5A3D', fontFamily: GM, fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em' }}>↗</span>
          <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{ fontSize: '14px', fontWeight: 600, lineHeight: '18px' }}>{role.link.label}</span>
            {role.link.sublabel && (
              <span style={{ color: '#76786C', fontSize: '12px', lineHeight: '16px' }}>{role.link.sublabel}</span>
            )}
          </span>
        </a>
      )}
    </FadeUp>
  )
}

export default function HistoryMobile() {
  return (
    <div style={{ backgroundColor: '#F3F1E9', display: 'flex', flexDirection: 'column', fontSize: '12px', fontSynthesis: 'none', lineHeight: '16px', minHeight: '100dvh', width: '100%' }}>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', paddingBottom: '44px', paddingLeft: '24px', paddingRight: '24px', paddingTop: '16px', width: '100%' }}>
        <FadeIn delay={0} style={{ width: '100%' }}>
          <MobileNav />
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingBottom: '36px', paddingTop: '54px', width: '100%' }}>
          <FadeUp delay={0.07}>
            <span style={{ color: '#5E6157', fontFamily: GM, fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', lineHeight: '16px' }}>HISTORY</span>
          </FadeUp>
          <FadeUp delay={0.13}>
            <div style={{ color: '#1B1C18', fontFamily: GS, fontSize: '24px', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: '33px', textWrap: 'balance', width: '100%' }}>
              Companies I&apos;ve built and led.
            </div>
          </FadeUp>
          <FadeUp delay={0.18}>
            <p style={{ color: '#41443B', fontFamily: GS, fontSize: '16px', letterSpacing: '-0.005em', lineHeight: '26px', margin: 0 }}>
              A chronological record of founding roles, exits, and ventures — from Watchlotto through aarvo.
            </p>
          </FadeUp>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
          {historyRoles.map((role, i) => (
            <RoleBlock key={role.id} role={role} delay={0.22 + i * 0.05} />
          ))}
        </div>

        <div style={{ flex: 1, minHeight: '60px' }} />

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
