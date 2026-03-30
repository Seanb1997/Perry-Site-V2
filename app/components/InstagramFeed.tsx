// ─── INSTAGRAM SECTION ──────────────────────────────────────────────────────
// Clean CTA linking to Perry's Instagram profile.
// Replaced unreliable Instagram embed iframes with a direct profile link.

import { FaInstagram } from 'react-icons/fa'

export default function InstagramFeed() {
  return (
    <section className="bg-cream py-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Section overline */}
        <p className="label text-mid mb-5">On Instagram</p>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

          {/* Left: heading + handle */}
          <div>
            <h2 className="font-cormorant font-light text-ink leading-tight mb-4"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Follow the journey
            </h2>
            <p className="font-dm text-mid text-sm font-light leading-relaxed max-w-md">
              Training insights, client stories, and behind-the-scenes from the gym floor.
              Twenty years of experience — condensed into content that actually helps.
            </p>
          </div>

          {/* Right: CTA */}
          <div className="flex-shrink-0">
            <a
              href="https://www.instagram.com/perryhowardpt/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 label text-cream bg-ink px-8 py-4 hover:opacity-80 transition-opacity"
            >
              <FaInstagram className="text-lg" />
              @perryhowardpt
            </a>
          </div>

        </div>

        {/* Amber rule */}
        <div className="h-px bg-sand mt-16" />

      </div>
    </section>
  )
}
