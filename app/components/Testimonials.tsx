// ─── TESTIMONIALS SECTION ──────────────────────────────────────────────────
// Magazine-style layout: one large featured pull-quote at top,
// two smaller testimonials side-by-side below. No equal cards.
//
// !! Replace all three placeholder quotes with real client testimonials !!

export default function Testimonials() {
  return (
    <section className="bg-sand py-14 md:py-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Section overline */}
        <p className="label text-mid mb-5">Client testimonials</p>

        {/* EDIT THIS TEXT: Section heading */}
        <h2 className="font-cormorant font-light text-ink leading-tight mb-16"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          What clients say
        </h2>

        {/* ── FEATURED TESTIMONIAL (large pull-quote) ──────────────────── */}
        <div className="mb-16">
          {/* Large opening quote — amber, decorative */}
          <p className="font-cormorant text-amber font-light leading-none mb-4 select-none"
             style={{ fontSize: '5rem' }}>
            &ldquo;
          </p>

          {/* EDIT THIS TEXT: Replace with real client testimonial — Testimonial 1 (featured, most prominent) */}
          <blockquote className="font-cormorant font-light italic text-ink leading-snug max-w-3xl mb-8"
                      style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
            I'd had a bad back for years and written it off as 'just how I am'. Three months
            with Perry completely changed that. He didn't just fix it — he helped me understand
            why it was happening in the first place.
          </blockquote>

          <div className="flex items-center gap-4">
            <div className="w-10 h-px bg-amber flex-shrink-0" />
            <div>
              {/* EDIT THIS TEXT: Client 1 name */}
              <p className="label text-ink">Mark T.</p>
              {/* EDIT THIS TEXT: Client 1 descriptor — job title and/or location */}
              <p className="label text-mid">Project Manager, Reading</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-sand mb-16" style={{ backgroundColor: '#cfc4b3' }} />

        {/* ── TWO SMALLER TESTIMONIALS — carousel on mobile, grid on desktop ── */}
        <div className="-mx-8 md:mx-0 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide">
          <div className="flex md:grid md:grid-cols-2 w-max md:w-auto md:gap-16">

            {/* ─── TESTIMONIAL 2 ── */}
            <div className="flex-none w-[85vw] md:w-auto snap-start px-8 md:px-0">
              <p className="font-cormorant text-amber font-light leading-none mb-3 select-none"
                 style={{ fontSize: '3rem' }}>
                &ldquo;
              </p>
              {/* EDIT THIS TEXT: Replace with real client testimonial — Testimonial 2 */}
              <blockquote className="font-dm text-mid text-sm md:text-base leading-relaxed font-light italic mb-4 md:mb-6">
                I'm 54 and was convinced my best years of training were behind me. Perry showed
                me that I'd just been training the wrong way. I'm moving better now than I was
                at 40, and I'm not in pain doing it.
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-6 h-px bg-amber flex-shrink-0" />
                <div>
                  {/* EDIT THIS TEXT: Client 2 name */}
                  <p className="label text-ink">Sarah L.</p>
                  {/* EDIT THIS TEXT: Client 2 descriptor */}
                  <p className="label text-mid">Senior Solicitor, Wokingham</p>
                </div>
              </div>
            </div>

            {/* ─── TESTIMONIAL 3 ── */}
            <div className="flex-none w-[85vw] md:w-auto snap-start px-8 md:px-0">
              <p className="font-cormorant text-amber font-light leading-none mb-3 select-none"
                 style={{ fontSize: '3rem' }}>
                &ldquo;
              </p>
              {/* EDIT THIS TEXT: Replace with real client testimonial — Testimonial 3 */}
              <blockquote className="font-dm text-mid text-sm md:text-base leading-relaxed font-light italic mb-4 md:mb-6">
                As a newly qualified PT myself, the mentorship was invaluable. Perry bridged a gap
                that my course couldn't — the gap between knowing the theory and actually coaching
                real people with confidence.
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-6 h-px bg-amber flex-shrink-0" />
                <div>
                  {/* EDIT THIS TEXT: Client 3 name */}
                  <p className="label text-ink">James R.</p>
                  {/* EDIT THIS TEXT: Client 3 descriptor */}
                  <p className="label text-mid">Personal Trainer, Berkshire</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Swipe hint — mobile only */}
        <div className="flex items-center gap-3 mt-5 md:hidden">
          <div className="w-3 h-3 rounded-full bg-amber" />
          <div className="w-3 h-3 rounded-full bg-mid opacity-30" />
          <span className="label text-mid opacity-60 ml-1">swipe for more</span>
        </div>
      </div>
    </section>
  )
}
