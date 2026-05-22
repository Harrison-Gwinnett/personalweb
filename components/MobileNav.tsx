'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const GS = 'var(--font-geist-sans), system-ui, sans-serif'
const GM = 'var(--font-geist-mono), system-ui, sans-serif'

export default function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {/* Nav bar */}
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
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '18px',
          }}
        >
          Harrison Gwinnett
        </Link>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          style={{ display: 'flex', alignItems: 'center', padding: '4px' }}
        >
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
            <rect y="0" width="20" height="2" fill="#1B1C18" />
            <rect y="6" width="20" height="2" fill="#1B1C18" />
            <rect y="12" width="20" height="2" fill="#1B1C18" />
          </svg>
        </button>
      </div>

      {/* Full-screen overlay */}
      {open && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#F3F1E9',
            zIndex: 50,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Overlay nav bar */}
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '24px 24px 0',
            }}
          >
            <Link
              href="/"
              onClick={() => setOpen(false)}
              style={{
                color: '#1B1C18',
                fontFamily: GM,
                fontSize: '14px',
                fontWeight: 500,
                lineHeight: '18px',
              }}
            >
              Harrison Gwinnett
            </Link>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              style={{ display: 'flex', alignItems: 'center', padding: '4px' }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <line
                  x1="1"
                  y1="1"
                  x2="15"
                  y2="15"
                  stroke="#1B1C18"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="15"
                  y1="1"
                  x2="1"
                  y2="15"
                  stroke="#1B1C18"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '0 24px 60px',
            }}
          >
            {[
              { href: '/', label: 'Home', num: '01' },
              { href: '/about', label: 'About', num: '02' },
              { href: '/ideas', label: 'Ideas', num: '03' },
            ].map(({ href, label, num }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                style={{
                  alignItems: 'center',
                  borderTopColor: '#D6D3C8',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingBlock: '28px',
                }}
              >
                <span
                  style={{
                    color: '#1B1C18',
                    fontFamily: GS,
                    fontSize: '32px',
                    fontWeight: 300,
                    letterSpacing: '-0.02em',
                    lineHeight: '40px',
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    color: '#8A8C7F',
                    fontFamily: GM,
                    fontSize: '11px',
                    letterSpacing: '0.04em',
                    lineHeight: '14px',
                  }}
                >
                  {num}
                </span>
              </Link>
            ))}
            <div
              style={{
                borderBottomColor: '#D6D3C8',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1px',
              }}
            />
          </div>

          {/* Footer */}
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              paddingBottom: '40px',
              paddingLeft: '24px',
              paddingRight: '24px',
            }}
          >
            <span
              style={{
                color: '#8A8C7F',
                fontFamily: GM,
                fontSize: '11px',
                letterSpacing: '0.04em',
                lineHeight: '14px',
              }}
            >
              © 2026 HARRISON · AARVO
            </span>
            <div style={{ display: 'flex', gap: '20px' }}>
              {[
                { label: 'X ↗', href: 'https://x.com' },
                { label: 'GITHUB ↗', href: 'https://github.com' },
                { label: 'EMAIL ↗', href: 'mailto:harrison@aarvo.com' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    color: '#1B1C18',
                    fontFamily: GM,
                    fontSize: '11px',
                    letterSpacing: '0.04em',
                    lineHeight: '14px',
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
