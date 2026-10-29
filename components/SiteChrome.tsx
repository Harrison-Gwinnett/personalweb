import NavDesktop from '@/components/NavDesktop'
import { FadeIn } from '@/components/motion/primitives'
import { socialLinks } from '@/lib/social'

export function SiteNav() {
  return (
    <FadeIn delay={0} style={{ width: '100%' }}>
      <NavDesktop />
    </FadeIn>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span className="site-footer__copy">© 2026 Harrison Gwinnett</span>
      <nav className="site-footer__links" aria-label="Social profiles">
        {socialLinks.map(({ label, href }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="footer-link" aria-label={`${label} (opens in a new tab)`}>
            <span className="footer-link__label">{label}</span><span className="footer-link__arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </nav>
    </footer>
  )
}
