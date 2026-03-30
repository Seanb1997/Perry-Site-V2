'use client'

// ─── useCarouselIndex ────────────────────────────────────────────────────────
// Tracks the active card index of a snap-scroll carousel.
// Attach scrollRef to the overflow-x-auto container.
// activeIndex updates as the user swipes.

import { useRef, useState, useEffect, RefObject } from 'react'

export function useCarouselIndex(numCards: number): {
  scrollRef: RefObject<HTMLDivElement | null>
  activeIndex: number
} {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const handleScroll = () => {
      const firstCard = el.querySelector('.snap-start') as HTMLElement | null
      if (!firstCard) return
      const cardWidth = firstCard.offsetWidth
      if (cardWidth === 0) return
      const index = Math.round(el.scrollLeft / cardWidth)
      setActiveIndex(Math.min(index, numCards - 1))
    }

    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [numCards])

  return { scrollRef, activeIndex }
}
