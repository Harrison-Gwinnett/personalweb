import { FadeUp } from '@/components/motion/primitives'
import { SiteFooter, SiteNav } from '@/components/SiteChrome'
import HighlightedText from '@/components/history/HighlightedText'
import { historyRoles, type HistoryRole } from '@/lib/history'

function RoleLogo({ role }: { role: HistoryRole }) {
  if (role.logoSrc) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={role.logoSrc} alt="" width={40} height={40} className="role__logo" />
  }
  return <div aria-hidden="true" className="role__logo role__logo--label">{role.logoLabel}</div>
}

function RoleBlock({ role, delay }: { role: HistoryRole; delay: number }) {
  const href = role.archiveUrl ?? role.url
  return (
    <FadeUp delay={delay} className="role">
      <RoleLogo role={role} />
      <div className="role__head">
        <h2 className="role__title">{role.title}</h2>
        <div className="role__company">
          {href ? (
            <a href={href} target="_blank" rel="noopener" className="history-company-link">{role.company}</a>
          ) : role.company} · {role.employmentType}
        </div>
        <div className="role__meta">{role.dateLabel}</div>
        {role.location && <div className="role__meta">{role.location}</div>}
      </div>

      <div className="role__body">
        {role.summary && <p><HighlightedText>{role.summary}</HighlightedText></p>}

        {role.paragraphs?.map((p) => (
          <p key={p.slice(0, 24)}><HighlightedText>{p}</HighlightedText></p>
        ))}

        {role.bullets && role.bullets.length > 0 && (
          <ul className="role__bullets">
            {role.bullets.map((item) => (
              <li key={item}>
                <span aria-hidden="true">→</span>
                <span><HighlightedText>{item}</HighlightedText></span>
              </li>
            ))}
          </ul>
        )}

        {role.closing && <p className="role__closing"><HighlightedText>{role.closing}</HighlightedText></p>}
      </div>
    </FadeUp>
  )
}

export default function History() {
  return (
    <div className="page">
      <div className="page__inner">
        <SiteNav />

        <main>
          <div className="history-head">
            <FadeUp delay={0.07}>
              <span className="history-eyebrow">HISTORY</span>
            </FadeUp>
            <FadeUp delay={0.13}>
              <h1 className="history-title">Companies I&apos;ve built and led.</h1>
            </FadeUp>
            <FadeUp delay={0.18}>
              <p className="history-lede">A chronological record of founding roles, exits, and ventures.</p>
            </FadeUp>
          </div>

          {historyRoles.map((role, i) => (
            <RoleBlock key={role.id} role={role} delay={0.22 + i * 0.06} />
          ))}
        </main>

        <div className="page__spacer" />
        <SiteFooter />
      </div>
    </div>
  )
}
