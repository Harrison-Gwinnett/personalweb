import NavDesktop from '@/components/NavDesktop'
import MobileNav from '@/components/MobileNav'
import { FadeIn } from '@/components/motion/primitives'
import { socialLinks } from '@/lib/social'

// Nav differs in behaviour (menu overlay on mobile), so both render and CSS picks one.
// Page content is rendered once.
export function SiteNav() {
  return (
    <FadeIn delay={0} style={{ width: '100%' }}>
      <div className="desktop-only"><NavDesktop /></div>
      <div className="mobile-only"><MobileNav /></div>
    </FadeIn>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span className="site-footer__copy">© 2026 HARRISON GWINNETT</span>
      <div className="site-footer__links">
        {socialLinks.map(({ label, href }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="footer-link">{label}</a>
        ))}
      </div>
    </footer>
  )
}
