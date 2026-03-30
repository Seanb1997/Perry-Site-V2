// ─── FOOTER ────────────────────────────────────────────────────────────────
// Dark ink background. Thin amber rule at top. Brand left, Instagram right.

import { FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-ink py-16 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Amber accent line */}
        <div className="w-10 h-px bg-amber mb-12" />

        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">

          {/* Left: brand + tagline */}
          <div>
            {/* EDIT THIS TEXT: Footer brand name */}
            <p className="font-cormorant text-2xl font-medium text-cream mb-2">
              Perry Howard{' '}
              <span className="font-plex text-[0.6rem] text-mid tracking-[0.2em] align-middle ml-0.5">PT</span>
            </p>
            {/* EDIT THIS TEXT: Footer tagline */}
            <p className="font-dm text-mid text-sm leading-relaxed font-light max-w-xs">
              Personal training for people who want to move better, get stronger, and feel
              confident well into their 70s — based in Winnersh, Wokingham (RG41) and Reading.
            </p>
          </div>

          {/* Right: contact details */}
          <div className="flex flex-col gap-4">
            {/* Location */}
            <a
              href="https://eliteedgefitness.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-mid hover:text-cream transition-colors group"
            >
              <FaMapMarkerAlt className="text-sm mt-0.5 flex-shrink-0 group-hover:text-amber transition-colors" />
              <span className="font-plex text-xs tracking-widest leading-relaxed">
                Elite Edge Fitness<br />
                Grovelands Ave, Winnersh<br />
                Wokingham RG41 5LB
              </span>
            </a>
            <a
              href="mailto:advancedfitnesstraining@hotmail.co.uk"
              className="flex items-center gap-3 text-mid hover:text-cream transition-colors group"
            >
              <FaEnvelope className="text-sm group-hover:text-amber transition-colors" />
              <span className="font-plex text-xs tracking-widest break-all">advancedfitnesstraining@hotmail.co.uk</span>
            </a>
            <a
              href="https://www.instagram.com/perryhowardpt/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-mid hover:text-cream transition-colors group"
            >
              <FaInstagram className="text-lg group-hover:text-amber transition-colors" />
              <span className="font-plex text-xs tracking-widest">@perryhowardpt</span>
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t pt-6" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          {/* EDIT THIS TEXT: Copyright line */}
          <p className="font-plex text-xs tracking-widest" style={{ color: 'rgba(138,132,120,0.5)' }}>
            © 2026 Perry Howard PT. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
