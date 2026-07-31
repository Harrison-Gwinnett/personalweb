'use client'
import NavDesktop from '@/components/NavDesktop'
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
        width={40}
        height={40}
        style={{
          backgroundColor: '#1B1C18',
          borderRadius: '6px',
          display: 'block',
          flexShrink: 0,
          height: '40px',
          objectFit: 'cover',
          outline: '1px solid oklch(0 0 0 / 0.1)',
          outlineOffset: '-1px',
          width: '40px',
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
        fontSize: '14px',
        fontWeight: 600,
        height: '40px',
        justifyContent: 'center',
        letterSpacing: '0.02em',
        width: '40px',
      }}
    >
      {role.logoLabel}
    </div>
  )
}

function RoleBlock({ role, delay }: { role: HistoryRole; delay: number }) {
  return (
    <FadeUp delay={delay} style={{ borderTopColor: '#D7D5C9', borderTopStyle: 'solid', borderTopWidth: '1px', display: 'flex', gap: '20px', paddingBottom: '36px', paddingTop: '36px', width: '100%' }}>
      <RoleLogo role={role} />
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: '14px', minWidth: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ color: '#1B1C18', fontFamily: GS, fontSize: '22px', fontWeight: 500, letterSpacing: '-0.015em', lineHeight: '28px', textWrap: 'balance' }}>
            {role.title}
          </div>
          <div style={{ color: '#1B1C18', fontFamily: GS, fontSize: '16px', letterSpacing: '-0.005em', lineHeight: '24px' }}>
            {role.company} · {role.employmentType}
          </div>
          <div style={{ color: '#76786C', fontFamily: GM, fontSize: '12px', letterSpacing: '0.04em', lineHeight: '16px' }}>
            {role.dateLabel}
          </div>
          {role.location && (
            <div style={{ color: '#76786C', fontFamily: GM, fontSize: '12px', letterSpacing: '0.04em', lineHeight: '16px' }}>
              {role.location}
            </div>
          )}
        </div>

        {role.summary && (
          <p style={{ color: '#41443B', fontFamily: GS, fontSize: '15px', letterSpacing: '-0.003em', lineHeight: '25px', margin: 0, maxWidth: '660px' }}>
            {role.summary}
          </p>
        )}

        {role.paragraphs?.map((p) => (
          <p key={p.slice(0, 24)} style={{ color: '#41443B', fontFamily: GS, fontSize: '15px', letterSpacing: '-0.003em', lineHeight: '25px', margin: 0, maxWidth: '660px' }}>
            {p}
          </p>
        ))}

        {role.bullets && role.bullets.length > 0 && (
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '7px', listStyle: 'none', margin: 0, maxWidth: '660px', padding: 0 }}>
            {role.bullets.map((item) => (
              <li key={item} style={{ color: '#41443B', display: 'flex', fontFamily: GS, fontSize: '15px', gap: '10px', letterSpacing: '-0.003em', lineHeight: '25px' }}>
                <span aria-hidden="true" style={{ color: '#8A8C7F', flexShrink: 0 }}>→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {role.closing && (
          <p style={{ color: '#5E6157', fontFamily: GS, fontSize: '14px', fontStyle: 'italic', letterSpacing: '-0.003em', lineHeight: '23px', margin: 0, maxWidth: '660px' }}>
            {role.closing}
          </p>
        )}
      </div>
    </FadeUp>
  )
}

export default function HistoryDesktop() {
  return (
    <div style={{ alignItems: 'center', backgroundColor: '#F3F1E9', display: 'flex', flexDirection: 'column', fontSize: '12px', fontSynthesis: 'none', lineHeight: '16px', minHeight: '100dvh', paddingBottom: '72px', paddingTop: '56px' }}>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', width: '768px' }}>
        <FadeIn delay={0} style={{ width: '100%' }}>
          <NavDesktop />
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', paddingBottom: '48px', paddingTop: '104px', width: '100%' }}>
          <FadeUp delay={0.07}>
            <span style={{ color: '#5E6157', fontFamily: GM, fontSize: '13px', fontWeight: 500, letterSpacing: '0.1em', lineHeight: '16px' }}>HISTORY</span>
          </FadeUp>
          <FadeUp delay={0.13}>
            <div style={{ color: '#1B1C18', fontFamily: GS, fontSize: '30px', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: '43px', maxWidth: '648px', textWrap: 'balance' }}>
              Companies I&apos;ve built and led.
            </div>
          </FadeUp>
          <FadeUp delay={0.18}>
            <p style={{ color: '#41443B', fontFamily: GS, fontSize: '16px', letterSpacing: '-0.003em', lineHeight: '27px', margin: 0, maxWidth: '660px' }}>
              A chronological record of founding roles, exits, and ventures.
            </p>
          </FadeUp>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          {historyRoles.map((role, i) => (
            <RoleBlock key={role.id} role={role} delay={0.22 + i * 0.06} />
          ))}
        </div>

        <div style={{ flex: 1, minHeight: '80px' }} />

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
