'use client'
import { motion, useReducedMotion } from 'motion/react'
import type { CSSProperties, ReactNode } from 'react'

// Expo-out easing: snappy entry, long graceful tail
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

interface AnimProps {
  children: ReactNode
  delay?: number
  style?: CSSProperties
  className?: string
}

/**
 * FadeUp: fade in with upward slide.
 * In reduced-motion mode: instant render (no opacity fade, no movement).
 */
export function FadeUp({ children, delay = 0, style, className }: AnimProps) {
  const reduce = useReducedMotion() ?? false

  if (reduce) {
    return (
      <div style={style} className={className}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: EASE, delay }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * FadeIn: opacity only (no y movement).
 * Used for nav and elements that shouldn't drift in from below.
 * In reduced-motion mode: instant render.
 */
export function FadeIn({ children, delay = 0, style, className }: AnimProps) {
  const reduce = useReducedMotion() ?? false

  if (reduce) {
    return (
      <div style={style} className={className}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut', delay }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  )
}
