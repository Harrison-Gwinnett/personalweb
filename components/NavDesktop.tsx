'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const GM = 'var(--font-geist-mono), system-ui, sans-serif'

export default function NavDesktop() {
  const pathname = usePathname()

  const active = (path: string) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path)

  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <Link
        href="/"
        style={{
          color: '#1B1C18',
          fontFamily: GM,
          fontSize: '16px',
          fontWeight: 500,
          lineHeight: '20px',
        }}
      >
        Harrison Gwinnett
      </Link>
      <div style={{ alignItems: 'center', display: 'flex', gap: '30px' }}>
        {[
          { href: '/', label: 'HOME' },
          { href: '/about', label: 'ABOUT' },
          { href: '/ideas', label: 'IDEAS' },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            style={{
              color: active(href) ? '#1B1C18' : '#6B6E63',
              fontFamily: GM,
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.04em',
              lineHeight: '16px',
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}
