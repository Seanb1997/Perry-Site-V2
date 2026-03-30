'use client'

// ─── MOBILE BOTTOM BAR ──────────────────────────────────────────────────────
// Fixed call-to-action bar — visible on mobile only (hidden on md+).
// Left: call Perry. Right: book a free call (amber CTA).

import { FaEnvelope } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

export default function BottomBar() {
  const pathname = usePathname()

  // Hide on contact page — user is already there
  if (pathname === '/contact') return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex h-14 border-t border-white/10">

        {/* Left: email */}
        <a
          href="mailto:advancedfitnesstraining@hotmail.co.uk"
          className="flex flex-1 items-center justify-center gap-2 bg-ink border-r border-white/10 hover:bg-white/5 transition-colors"
        >
          <FaEnvelope className="text-amber text-xs" />
          <span className="label text-cream" style={{ fontSize: '0.62rem' }}>Email Perry</span>
        </a>

        {/* Right: book — amber */}
        <a
          href="/contact"
          className="flex flex-1 items-center justify-center bg-amber hover:opacity-90 transition-opacity"
        >
          <span className="label text-ink" style={{ fontSize: '0.62rem' }}>Get in Touch</span>
        </a>

      </div>
    </div>
  )
}
