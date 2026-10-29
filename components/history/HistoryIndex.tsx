'use client'

import { useEffect, useRef, useState } from 'react'
import { getHistoryPosition } from '@/lib/history-timeline'

interface HistoryIndexItem {
  id: string
  company: string
  year: string
}

export default function HistoryIndex({ items }: { items: HistoryIndexItem[] }) {
  const navRef = useRef<HTMLElement>(null)
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return
    const track = nav.querySelector<HTMLElement>('.history-index__track')
    const sections = items.map((item) => document.getElementById(`history-${item.id}`))
    const nodes = Array.from(nav.querySelectorAll<HTMLElement>('.history-index__node'))
    if (!track || !sections.length || sections.some((section) => !section) || nodes.length !== items.length) return

    let frame = 0
    let disposed = false
    const update = () => {
      frame = 0
      if (!nav.offsetWidth) return
      const scrollTop = window.scrollY
      const starts = sections.map((section) => section!.getBoundingClientRect().top + scrollTop)
      const { index, progress } = getHistoryPosition(starts, scrollTop, window.innerHeight, document.documentElement.scrollHeight)
      const trackTop = track.getBoundingClientRect().top
      const centers = nodes.map((node) => {
        const bounds = node.getBoundingClientRect()
        return bounds.top + bounds.height / 2 - trackTop
      })
      const first = centers[0]
      const length = Math.max(1, centers[centers.length - 1] - first)
      const marker = centers[index] + ((centers[index + 1] ?? centers[index]) - centers[index]) * progress

      track.style.setProperty('--history-track-start', `${first}px`)
      track.style.setProperty('--history-track-length', `${length}px`)
      track.style.setProperty('--history-marker-y', `${marker}px`)
      track.style.setProperty('--history-progress', String((marker - first) / length))
      track.dataset.tracking = 'true'
      setActiveId((current) => current === items[index].id ? current : items[index].id)
    }
    const schedule = () => {
      if (!disposed && !frame) frame = window.requestAnimationFrame(update)
    }
    const observer = new ResizeObserver(schedule)
    const entries = document.querySelector('.history-entries')
    if (entries) observer.observe(entries)
    observer.observe(track)
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    document.fonts.ready.then(schedule)
    schedule()

    return () => {
      disposed = true
      window.cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [items])

  return (
    <nav ref={navRef} className="history-index" aria-label="History chapters">
      <p className="history-index__label">On this page</p>
      <div className="history-index__track">
        <span className="history-index__rail" aria-hidden="true" />
        <span className="history-index__fill" aria-hidden="true" />
        <span className="history-index__marker" aria-hidden="true" />
        <ol className="history-index__list">
          {items.map((item) => (
            <li key={item.id}>
              <a href={`#history-${item.id}`} className="history-index__link" aria-current={activeId === item.id ? 'location' : undefined}>
                <span className="history-index__node" aria-hidden="true" />
                <span className="history-index__year">{item.year}</span>
                <span className="history-index__name">{item.company}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
