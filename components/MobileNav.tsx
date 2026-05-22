'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, type CSSProperties } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'

const GS = 'var(--font-geist-sans), system-ui, sans-serif'
const GM = 'var(--font-geist-mono), system-ui, sans-serif'

const NAV_ITEMS = [
  { href: '/', label: 'Home', num: '01' },
  { href: '/about', label: 'About', num: '02' },
  { href: '/ideas', label: 'Ideas', num: '03' },
]

export default function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion() ?? false

  // Close on route change
  useEffect(() => { setOpen(false) }, [pathname])

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // ── Hamburger bar styles ──────────────────────────────────────
  const barBase: CSSProperties = {
    width: '20px',
    height: '2px',
    backgroundColor: '#1B1C18',
    borderRadius: '1px',
    transformOrigin: 'center',
    transition: reduce ? 'none' : 'transform 220ms ease, opacity 160ms ease',
  }

  return (
    <>
      {/* ── Nav bar ─────────────────────────────────────────────── */}
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Link href="/" className="nav-link" style={{ color: '#1B1C18', fontFamily: GM, fontSize: '14px', fontWeight: 500, lineHeight: '18px' }}>
          Harrison Gwinnett
        </Link>

        {/* Hamburger → X morph button */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={open}
          style={{ display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px', cursor: 'pointer' }}
        >
          <span
            style={{
              ...barBase,
              transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
            }}
          />
          <span
            style={{
              ...barBase,
              opacity: open ? 0 : 1,
              transform: open ? 'scaleX(0)' : 'none',
            }}
          />
          <span
            style={{
              ...barBase,
              transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </div>

      {/* ── Full-screen overlay ──────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: '#F3F1E9',
              zIndex: 50,
              display: 'flex',
              flexDirection: 'column',
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Overlay nav bar */}
            <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', padding: '24px 24px 0' }}>
              <Link href="/" onClick={() => setOpen(false)} style={{ color: '#1B1C18', fontFamily: GM, fontSize: '14px', fontWeight: 500, lineHeight: '18px' }}>
                Harrison Gwinnett
              </Link>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                style={{ display: 'flex', alignItems: 'center', padding: '4px' }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <line x1="1" y1="1" x2="15" y2="15" stroke="#1B1C18" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="15" y1="1" x2="1" y2="15" stroke="#1B1C18" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Staggered nav links */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 24px 60px' }}>
              {NAV_ITEMS.map(({ href, label, num }, i) => (
                <motion.div
                  key={href}
                  initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1], delay: reduce ? 0 : 0.07 + i * 0.06 }}
                >
                  <Link
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
                    <span style={{ color: '#1B1C18', fontFamily: GS, fontSize: '32px', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: '40px' }}>
                      {label}
                    </span>
                    <span style={{ color: '#8A8C7F', fontFamily: GM, fontSize: '11px', letterSpacing: '0.04em', lineHeight: '14px' }}>
                      {num}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <div style={{ borderBottomColor: '#D6D3C8', borderBottomStyle: 'solid', borderBottomWidth: '1px' }} />
            </div>

            {/* Footer */}
            <motion.div
              initial={reduce ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: reduce ? 0 : 0.25 }}
              style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingBottom: '40px', paddingLeft: '24px', paddingRight: '24px' }}
            >
              <span style={{ color: '#8A8C7F', fontFamily: GM, fontSize: '11px', letterSpacing: '0.04em', lineHeight: '14px' }}>
                © 2026 HARRISON · AARVO
              </span>
              <div style={{ display: 'flex', gap: '20px' }}>
                {[
                  { label: 'X ↗', href: 'https://x.com' },
                  { label: 'GITHUB ↗', href: 'https://github.com' },
                  { label: 'EMAIL ↗', href: 'mailto:harrison@aarvo.com' },
                ].map(({ label, href }) => (
                  <a key={label} href={href} className="footer-link" style={{ color: '#1B1C18', fontFamily: GM, fontSize: '11px', letterSpacing: '0.04em', lineHeight: '14px' }}>
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
