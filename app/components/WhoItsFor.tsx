// ─── WHO IT'S FOR SECTION ──────────────────────────────────────────────────
// Six client archetypes.
// Desktop: 2 rows × 3 cols grid. Mobile: horizontal snap-scroll carousel.

export default function WhoItsFor() {
  return (
    <section id="about" className="bg-cream py-14 md:py-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Section overline */}
        <p className="label text-mid mb-5">Who it's for</p>

        {/* Section heading */}
        <h2 className="font-cormorant font-light text-ink leading-tight mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          Is this for you?
        </h2>

        {/* Subheading */}
        <p className="font-dm text-mid text-sm leading-relaxed font-light max-w-xl mb-8 md:mb-16">
          I work with a wide range of people — from athletes to office workers, new mums to
          those managing medical conditions. If any of the below sounds familiar, get in touch.
        </p>

        {/* Top divider */}
        <div className="h-px bg-sand" />

        {/* Mobile: horizontal snap-scroll carousel. Desktop: 3-col grid */}
        <div className="-mx-8 md:mx-0 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide">
          <div className="flex md:grid md:grid-cols-3 w-max md:w-auto">

            {/* ─── I. Time-Poor Professional ─────────────────────────────── */}
            <div className="flex-none w-[85vw] md:w-auto snap-start py-8 md:py-12 px-8 md:px-0 md:pr-12 md:border-r md:border-b border-sand">
              <p className="font-cormorant text-3xl md:text-5xl font-light italic text-amber leading-none mb-3 md:mb-6 select-none">I.</p>
              <h3 className="font-cormorant text-xl md:text-2xl font-medium text-ink mb-3 md:mb-4 leading-snug">
                The Time-Poor<br />Professional
              </h3>
              <p className="font-dm text-mid text-sm leading-relaxed font-light">
                Desk-bound most of the day, your body is starting to remind you of that. You want
                to feel strong, not just manage the aches — and actually stick to something that fits
                around a demanding schedule.
              </p>
            </div>

            {/* ─── II. Sports Performer ──────────────────────────────────── */}
            <div className="flex-none w-[85vw] md:w-auto snap-start py-8 md:py-12 px-8 md:px-12 md:border-r md:border-b border-sand">
              <p className="font-cormorant text-3xl md:text-5xl font-light italic text-amber leading-none mb-3 md:mb-6 select-none">II.</p>
              <h3 className="font-cormorant text-xl md:text-2xl font-medium text-ink mb-3 md:mb-4 leading-snug">
                The Sports<br />Performer
              </h3>
              <p className="font-dm text-mid text-sm leading-relaxed font-light">
                You want to move faster, lift heavier, or outlast the competition. Whether you're
                training for a sport, chasing a personal best, or just want to be noticeably
                stronger — I'll build a programme around what you're actually trying to do.
              </p>
            </div>

            {/* ─── III. Post-Injury / Comeback ──────────────────────────── */}
            <div className="flex-none w-[85vw] md:w-auto snap-start py-8 md:py-12 px-8 md:pl-12 md:pr-0 md:border-b border-sand">
              <p className="font-cormorant text-3xl md:text-5xl font-light italic text-amber leading-none mb-3 md:mb-6 select-none">III.</p>
              <h3 className="font-cormorant text-xl md:text-2xl font-medium text-ink mb-3 md:mb-4 leading-snug">
                The Comeback<br />Story
              </h3>
              <p className="font-dm text-mid text-sm leading-relaxed font-light">
                You've tried pushing through before and paid for it — the same knee, the same
                shoulder, the same setback. You need a smarter approach, not just more effort.
                Post-injury recovery is one of my specialisms.
              </p>
            </div>

            {/* ─── IV. Weight Loss ───────────────────────────────────────── */}
            <div className="flex-none w-[85vw] md:w-auto snap-start py-8 md:py-12 px-8 md:px-0 md:pr-12 md:border-r border-sand">
              <p className="font-cormorant text-3xl md:text-5xl font-light italic text-amber leading-none mb-3 md:mb-6 select-none">IV.</p>
              <h3 className="font-cormorant text-xl md:text-2xl font-medium text-ink mb-3 md:mb-4 leading-snug">
                The Weight-Loss<br />Client
              </h3>
              <p className="font-dm text-mid text-sm leading-relaxed font-light">
                You've tried diets, classes, and apps — and you're done guessing. I'll combine
                structured training with practical nutrition guidance to help you lose weight
                properly — not just for now, but by building habits and fitness that hold.
              </p>
            </div>

            {/* ─── V. Medical / GP Referral ──────────────────────────────── */}
            <div className="flex-none w-[85vw] md:w-auto snap-start py-8 md:py-12 px-8 md:px-12 md:border-r border-sand">
              <p className="font-cormorant text-3xl md:text-5xl font-light italic text-amber leading-none mb-3 md:mb-6 select-none">V.</p>
              <h3 className="font-cormorant text-xl md:text-2xl font-medium text-ink mb-3 md:mb-4 leading-snug">
                The Medical<br />Referral Client
              </h3>
              <p className="font-dm text-mid text-sm leading-relaxed font-light">
                Managing a health condition, recovering from surgery, or referred by your GP?
                I hold a GP Referral qualification and work in close partnership with medical
                professionals — so you can train with confidence, whatever your condition.
              </p>
            </div>

            {/* ─── VI. Long-Game Thinker ─────────────────────────────────── */}
            <div className="flex-none w-[85vw] md:w-auto snap-start py-8 md:py-12 px-8 md:pl-12 md:pr-0">
              <p className="font-cormorant text-3xl md:text-5xl font-light italic text-amber leading-none mb-3 md:mb-6 select-none">VI.</p>
              <h3 className="font-cormorant text-xl md:text-2xl font-medium text-ink mb-3 md:mb-4 leading-snug">
                The Long-Game<br />Thinker
              </h3>
              <p className="font-dm text-mid text-sm leading-relaxed font-light">
                You're not chasing a transformation photo. You want to keep up with your kids,
                perform in your sport, and still feel capable in 20 years. You want someone
                who'll take that seriously — and build a programme that reflects it.
              </p>
            </div>

          </div>
        </div>

        {/* Swipe hint — mobile only */}
        <div className="flex items-center gap-3 mt-4 md:hidden">
          <div className="w-3 h-3 rounded-full bg-amber" />
          <div className="w-3 h-3 rounded-full bg-mid opacity-30" />
          <div className="w-3 h-3 rounded-full bg-mid opacity-30" />
          <span className="label text-mid opacity-60 ml-1">swipe for more</span>
        </div>

        {/* Bottom divider */}
        <div className="h-px bg-sand mt-0 md:mt-0" />

      </div>
    </section>
  )
}
