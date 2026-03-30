// ─── SERVICES SECTION ──────────────────────────────────────────────────────
// Dark ink background. Two-column layout: heading left, service list right.
// Seven services with pricing cues where applicable.

export default function Services() {
  return (
    <section id="services" className="bg-ink py-14 md:py-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row lg:gap-24">

          {/* ── LEFT: Section heading ── */}
          <div className="lg:w-80 flex-shrink-0 mb-10 lg:mb-0">
            <p className="label text-amber mb-4 md:mb-6">Services</p>
            <h2 className="font-cormorant font-light text-cream leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              How I work<br />with you
            </h2>
            <div className="w-10 h-px bg-amber mt-5 mb-5 md:mt-8 md:mb-8" />
            <p className="font-dm text-mid text-sm leading-relaxed font-light">
              Every service starts with a free consultation — a conversation about your goals,
              your history, and what you actually need. No pressure, no obligation.
            </p>
          </div>

          {/* ── RIGHT: Service list ── */}
          <div className="flex-1">

            {/* Top rule */}
            <div className="h-px bg-white opacity-10" />

            {/* ─── SERVICE 1 — 1-to-1 PT ────────────────────────────── */}
            <div className="py-5 md:py-8 border-b border-white border-opacity-10">
              <div className="flex items-start gap-6">
                <span className="font-plex text-xs text-amber opacity-50 mt-0.5 flex-shrink-0 w-6">01</span>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-2">
                    <h3 className="font-cormorant text-xl md:text-2xl font-medium text-cream">
                      1-to-1 Personal Training
                    </h3>
                  </div>
                  <p className="font-dm text-mid text-sm leading-relaxed font-light mb-4">
                    Strength, performance, and long-term health — built around how your body
                    actually moves, not a generic programme handed to everyone who walks through
                    the door. Weekly sessions with a full re-test every six weeks.
                  </p>
                  <a href="/contact" className="label text-amber hover:opacity-70 transition-opacity">
                    Find out more →
                  </a>
                </div>
              </div>
            </div>

            {/* ─── SERVICE 2 — Independent 6-Week Plan ──────────────── */}
            <div className="py-5 md:py-8 border-b border-white border-opacity-10">
              <div className="flex items-start gap-6">
                <span className="font-plex text-xs text-amber opacity-50 mt-0.5 flex-shrink-0 w-6">02</span>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-2">
                    <h3 className="font-cormorant text-xl md:text-2xl font-medium text-cream">
                      Independent 6-Week Plans
                    </h3>
                  </div>
                  <p className="font-dm text-mid text-sm leading-relaxed font-light mb-4">
                    A fully structured six-week training block — designed for you to complete
                    independently, in your own time and space. Expert programming without the
                    ongoing commitment of 1-to-1 sessions, with a review and re-test at week six.
                  </p>
                  <a href="/contact" className="label text-amber hover:opacity-70 transition-opacity">
                    Find out more →
                  </a>
                </div>
              </div>
            </div>

            {/* ─── SERVICE 3 — Postural Assessment ─────────────────── */}
            <div className="py-5 md:py-8 border-b border-white border-opacity-10">
              <div className="flex items-start gap-6">
                <span className="font-plex text-xs text-amber opacity-50 mt-0.5 flex-shrink-0 w-6">03</span>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-2">
                    <h3 className="font-cormorant text-xl md:text-2xl font-medium text-cream">
                      Postural Assessment
                    </h3>
                  </div>
                  <p className="font-dm text-mid text-sm leading-relaxed font-light mb-4">
                    A thorough assessment of how your body moves, where imbalances exist, and
                    what's causing pain or restriction. You'll leave with a clear, corrective
                    exercise plan — no fluff, no guesswork.
                  </p>
                  <a href="/contact" className="label text-amber hover:opacity-70 transition-opacity">
                    Find out more →
                  </a>
                </div>
              </div>
            </div>

            {/* ─── SERVICE 4 — Sports Massage ───────────────────────── */}
            <div className="py-5 md:py-8 border-b border-white border-opacity-10">
              <div className="flex items-start gap-6">
                <span className="font-plex text-xs text-amber opacity-50 mt-0.5 flex-shrink-0 w-6">04</span>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-2">
                    <h3 className="font-cormorant text-xl md:text-2xl font-medium text-cream">
                      Sports Massage
                    </h3>
                  </div>
                  <p className="font-dm text-mid text-sm leading-relaxed font-light mb-4">
                    Whether you're managing a specific injury, recovering between sessions,
                    or carrying chronic tension — I'm qualified to Level 4 in sports massage
                    therapy and go well beyond a standard treatment.
                  </p>
                  <a href="/contact" className="label text-amber hover:opacity-70 transition-opacity">
                    Find out more →
                  </a>
                </div>
              </div>
            </div>

            {/* ─── SERVICE 5 — PT Mentorship ────────────────────────── */}
            <div className="py-5 md:py-8 border-b border-white border-opacity-10">
              <div className="flex items-start gap-6">
                <span className="font-plex text-xs text-amber opacity-50 mt-0.5 flex-shrink-0 w-6">05</span>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-2">
                    <h3 className="font-cormorant text-xl md:text-2xl font-medium text-cream">
                      PT Mentorship
                    </h3>
                  </div>
                  <p className="font-dm text-mid text-sm leading-relaxed font-light mb-4">
                    Professional guidance for new and aspiring trainers. Bridge the gap between
                    qualifying and coaching with confidence — from someone who coaches and
                    assesses other PTs for a living. Support also available for those completing
                    their PT qualification.
                  </p>
                  <a href="/contact" className="label text-amber hover:opacity-70 transition-opacity">
                    Find out more →
                  </a>
                </div>
              </div>
            </div>

            {/* ─── SERVICE 6 — CPD Workshops ────────────────────────── */}
            <div className="py-5 md:py-8">
              <div className="flex items-start gap-6">
                <span className="font-plex text-xs text-amber opacity-50 mt-0.5 flex-shrink-0 w-6">06</span>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-2">
                    <h3 className="font-cormorant text-xl md:text-2xl font-medium text-cream">
                      CPD Workshops for Trainers
                    </h3>
                  </div>
                  <p className="font-dm text-mid text-sm leading-relaxed font-light mb-4">
                    Continuing professional development workshops for qualified PTs who want
                    to sharpen their assessment skills and deepen their coaching knowledge.
                    Better-informed trainers get better results for their clients — and build
                    better reputations for themselves.
                  </p>
                  <a href="/contact" className="label text-amber hover:opacity-70 transition-opacity">
                    Find out more →
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
