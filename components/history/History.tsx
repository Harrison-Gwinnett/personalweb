import { FadeUp } from '@/components/motion/primitives'
import { SiteFooter, SiteNav } from '@/components/SiteChrome'
import HighlightedText from '@/components/history/HighlightedText'
import HistoryIndex from '@/components/history/HistoryIndex'
import { historyRoles, type HistoryRole } from '@/lib/history'

const roles = historyRoles.filter((role) => !role.parentId)
const firstYear = Math.min(...historyRoles.map((role) => Number(role.startDate.slice(0, 4))))

function RoleLogo({ role }: { role: HistoryRole }) {
  if (role.logoSrc) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={role.logoSrc} alt="" width={40} height={40} className="role__logo" />
  }
  return <div aria-hidden="true" className="role__logo role__logo--label">{role.logoLabel}</div>
}

function RoleBlock({ role, subBrands }: { role: HistoryRole; subBrands: HistoryRole[] }) {
  const href = role.archiveUrl ?? role.url
  const introduction = [role.summary, role.closing].filter(Boolean).join(' ')
  return (
    <article id={`history-${role.id}`} className="role" aria-labelledby={`${role.id}-title`} tabIndex={-1}>
      <div className="role__date-row">
        <p className="role__meta">{role.dateLabel}</p>
        {role.id === 'tradrs' && <p className="role__status">Primary focus</p>}
      </div>
      <header className="role__header">
        <div className="role__head">
          <h2 id={`${role.id}-title`} className="role__title">
            {href ? (
              <a href={href} target="_blank" rel="noopener noreferrer" className="role__link">
                <span>{role.company}</span><span className="role__external" aria-hidden="true">↗</span>
              </a>
            ) : role.company}
          </h2>
          <p className="role__position">
            {role.title}{role.employmentType && <> · {role.employmentType}</>}
          </p>
          {role.location && <p className="role__meta">{role.location}</p>}
        </div>
        <RoleLogo role={role} />
      </header>

      <div className="role__body">
        {introduction && <p><HighlightedText>{introduction}</HighlightedText></p>}

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

        {subBrands.map((brand) => (
          <section key={brand.id} className="role__chapter" aria-labelledby={`${brand.id}-title`}>
            <p className="role__chapter-label">{role.company}&rsquo; education brand</p>
            <div className="role__chapter-head">
              <RoleLogo role={brand} />
              <div>
                <h3 id={`${brand.id}-title`} className="role__chapter-title">{brand.company}</h3>
                <div className="role__chapter-meta">
                  <span>{brand.title}</span>
                  <p className="role__meta">{brand.dateLabel}</p>
                </div>
              </div>
            </div>
            {brand.summary && <p className="role__chapter-description">{brand.summary}</p>}
          </section>
        ))}

      </div>
    </article>
  )
}

export default function History() {
  return (
    <div className="page history-page">
      <div className="page__inner">
        <a href="#history-content" className="history-skip">Skip to history</a>
        <SiteNav />

        <main id="history-content" tabIndex={-1}>
          <div className="history-head">
            <FadeUp delay={0.04} className="history-head__meta">
              <span className="history-eyebrow">History</span>
              <span className="history-range">{firstYear}–Present</span>
            </FadeUp>
            <FadeUp delay={0.1} className="history-head__content">
              <h1 className="history-title"><span>Companies I&apos;ve</span>{' '}<span>built and led.</span></h1>
              <p className="history-lede">A chronological record of founding roles, exits, and ventures.</p>
            </FadeUp>
          </div>

          <div className="history-layout">
            <HistoryIndex items={roles.map((role) => ({ id: role.id, company: role.company, year: role.startDate.slice(0, 4) }))} />
            <div className="history-entries">
              {roles.map((role) => (
                <RoleBlock
                  key={role.id}
                  role={role}
                  subBrands={historyRoles.filter((brand) => brand.parentId === role.id)}
                />
              ))}
            </div>
          </div>
        </main>

        <div className="page__spacer" />
        <SiteFooter />
      </div>
    </div>
  )
}
