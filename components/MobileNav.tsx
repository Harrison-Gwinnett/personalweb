'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef, type CSSProperties } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'

const GS = 'var(--font-geist-sans), system-ui, sans-serif'
const GM = 'var(--font-geist-mono), system-ui, sans-serif'

const NAV_ITEMS = [
  { href: '/', label: 'Home', num: '01' },
  { href: '/about', label: 'About', num: '02' },
  { href: '/history', label: 'History', num: '03' },
]

export default function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion() ?? false
  const toggleRef = useRef<HTMLButtonElement>(null)
  const wasOpen = useRef(false)

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    if (wasOpen.current && !open) toggleRef.current?.focus()
    wasOpen.current = open
  }, [open])

  const barBase: CSSProperties = {
    width: '20px',
    height: '2px',
    backgroundColor: 'currentColor',
    borderRadius: '1px',
    transformOrigin: 'center',
    transition: reduce ? 'none' : 'transform 220ms ease, opacity 160ms ease',
  }

  return (
    <>
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

        <button
          ref={toggleRef}
          type="button"
          className="pressable"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-nav-dialog"
          style={{
            alignItems: 'center',
            color: '#1B1C18',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            height: '44px',
            justifyContent: 'center',
            marginRight: '-10px',
            padding: '12px 10px',
            position: 'relative',
            width: '44px',
            zIndex: 60,
          }}
        >
          <span style={{ ...barBase, transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }} />
          <span style={{ ...barBase, opacity: open ? 0 : 1, transform: open ? 'scaleX(0)' : 'none' }} />
          <span style={{ ...barBase, transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-menu"
            id="mobile-nav-dialog"
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
            <div style={{ alignItems: 'center', display: 'flex', height: '44px', justifyContent: 'space-between', marginTop: '16px', paddingLeft: '24px', paddingRight: '14px' }}>
              <Link href="/" onClick={() => setOpen(false)} className="nav-link" style={{ color: '#1B1C18', fontFamily: GM, fontSize: '14px', fontWeight: 500, lineHeight: '18px' }}>
                Harrison Gwinnett
              </Link>
              {/* Spacer matching toggle so layout mirrors the closed bar; toggle stays above via z-index */}
              <span aria-hidden="true" style={{ height: '44px', width: '44px' }} />
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 24px 60px' }}>
              {NAV_ITEMS.map(({ href, label, num }, i) => (
                <motion.div
                  key={href}
                  initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 1 } : { opacity: 0 }}
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
                    <span style={{ color: '#1B1C18', fontFamily: GS, fontSize: '32px', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: '40px', textWrap: 'balance' }}>
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

            <motion.div
              initial={reduce ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: reduce ? 0 : 0.25 }}
              style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingBottom: '40px', paddingLeft: '24px', paddingRight: '24px' }}
            >
              <span style={{ color: '#8A8C7F', fontFamily: GM, fontSize: '11px', letterSpacing: '0.04em', lineHeight: '14px' }}>
                © 2026 HARRISON · AARVO
              </span>
              <a href="https://x.com/HGGwinnett" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ color: '#1B1C18', fontFamily: GM, fontSize: '11px', letterSpacing: '0.04em', lineHeight: '14px' }}>
                X ↗
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
