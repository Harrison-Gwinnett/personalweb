'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavDesktop() {
  const pathname = usePathname()

  const active = (path: string) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path)

  return (
    <header className="site-header">
      <Link href="/" className="site-name">
        Harrison Gwinnett
      </Link>
      <nav className="site-nav" aria-label="Primary">
        {[
          { href: '/', label: 'Home' },
          { href: '/history', label: 'History' },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="site-nav__link"
            aria-current={active(href) ? 'page' : undefined}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
