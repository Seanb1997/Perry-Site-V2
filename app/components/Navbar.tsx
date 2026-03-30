'use client'

// ─── NAVBAR ────────────────────────────────────────────────────────────────
// Sticky top navigation. Cream background with a thin sand border at the bottom.
// Desktop: logo left, monospace links right.
// Mobile: hamburger dropdown.

import { useState } from 'react'
import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-cream border-b border-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">

        {/* EDIT THIS TEXT: Brand name shown top-left on every page */}
        <Link
          href="/"
          className="font-cormorant text-xl font-medium tracking-wide text-ink hover:text-amber transition-colors"
        >
          Perry Howard{' '}
          <span className="font-plex text-[0.6rem] text-mid tracking-[0.2em] align-middle ml-0.5">PT</span>
        </Link>

        {/* ── DESKTOP NAV ── */}
        <div className="hidden md:flex items-center gap-10">
          {/* EDIT THIS TEXT: Navigation link labels */}
          <a href="/#about"    className="label text-mid hover:text-ink transition-colors">About</a>
          <a href="/#services" className="label text-mid hover:text-ink transition-colors">Services</a>
          <a href="/#process"  className="label text-mid hover:text-ink transition-colors">Process</a>
          <Link href="/about"  className="label text-mid hover:text-ink transition-colors">My Story</Link>
          {/* Demo colour switcher — remove before final launch */}
          <ThemeSwitcher />
          {/* EDIT THIS TEXT: Navbar CTA button */}
          <a
            href="/contact"
            className="label text-ink border border-ink px-5 py-2.5 hover:bg-ink hover:text-cream transition-colors"
          >
            Book Now
          </a>
        </div>

        {/* ── MOBILE HAMBURGER ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-ink"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* ── MOBILE DROPDOWN ── */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-sand px-6 py-6 flex flex-col gap-5">
          {/* EDIT THIS TEXT: Mobile navigation link labels */}
          <a href="/#about"    onClick={() => setMenuOpen(false)} className="label text-mid hover:text-ink">About</a>
          <a href="/#services" onClick={() => setMenuOpen(false)} className="label text-mid hover:text-ink">Services</a>
          <a href="/#process"  onClick={() => setMenuOpen(false)} className="label text-mid hover:text-ink">Process</a>
          <Link href="/about"  onClick={() => setMenuOpen(false)} className="label text-mid hover:text-ink">My Story</Link>
          <a href="/contact"   onClick={() => setMenuOpen(false)} className="label text-ink border border-ink px-5 py-3 text-center hover:bg-ink hover:text-cream transition-colors">Book Now</a>
          {/* Demo colour switcher — remove before final launch */}
          <div className="pt-2 flex items-center gap-3">
            <span className="label text-mid">Colour theme:</span>
            <ThemeSwitcher />
          </div>
        </div>
      )}
    </nav>
  )
}
