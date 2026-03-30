// ─── CALL TO ACTION SECTION ────────────────────────────────────────────────
// Amber background — warm, not corporate blue. Horizontal editorial layout:
// heading left, subtext + button right on desktop. Stacks on mobile.
// Edit the heading, subtext, and button text below.

export default function CTA() {
  return (
    <section className="bg-amber py-14 md:py-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">

          {/* Left: heading */}
          <div>
            <p className="label text-ink opacity-50 mb-6">Ready to begin</p>
            {/* EDIT THIS TEXT: CTA section heading */}
            <h2 className="font-cormorant font-light text-ink leading-tight"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              One conversation.<br />No obligation.
            </h2>
          </div>

          {/* Right: subtext + button */}
          <div className="flex flex-col gap-6 lg:items-end lg:text-right max-w-sm lg:max-w-xs">
            {/* EDIT THIS TEXT: CTA subtext */}
            <p className="font-dm text-ink opacity-70 text-base leading-relaxed font-light">
              Start with a free conversation — I'll ask about your lifestyle, activity levels,
              and goals. No commitment, no hard sell. If it feels like a good fit, I'll walk
              you through the next steps. Fill in the short form and I'll be in touch within
              24 hours.
            </p>
            {/* EDIT THIS TEXT: CTA button */}
            <a
              href="/contact"
              className="label text-cream bg-ink px-8 py-4 hover:opacity-90 transition-opacity self-start lg:self-auto"
            >
              Book your free call
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
