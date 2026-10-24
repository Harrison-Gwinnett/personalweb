import type { CSSProperties, ReactNode } from 'react'

interface AnimProps {
  children: ReactNode
  delay?: number
  style?: CSSProperties
  className?: string
}

// Keep server-rendered content visible even when JavaScript or animations fail.
export function FadeUp({ children, delay = 0, style, className }: AnimProps) {
  return (
    <div
      style={{ animationDelay: `${delay}s`, ...style }}
      className={`fade-up${className ? ` ${className}` : ''}`}
    >
      {children}
    </div>
  )
}

export function FadeIn({ children, delay = 0, style, className }: AnimProps) {
  return (
    <div
      style={{ animationDelay: `${delay}s`, ...style }}
      className={`fade-in${className ? ` ${className}` : ''}`}
    >
      {children}
    </div>
  )
}
