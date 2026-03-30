'use client'

// ─── PROCESS SECTION ───────────────────────────────────────────────────────
// Three steps. Desktop: 3-col grid. Mobile: horizontal snap-scroll carousel.
// Dot indicator tracks active card as user swipes.

import { useCarouselIndex } from '../hooks/useCarouselIndex'

export default function Process() {
  const { scrollRef, activeIndex } = useCarouselIndex(3)

  return (
    <section id="process" className="bg-cream py-14 md:py-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Section overline */}
        <p className="label text-mid mb-5">The process</p>

        {/* EDIT THIS TEXT: Section heading */}
        <h2 className="font-cormorant font-light text-ink leading-tight mb-12 md:mb-16"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          What working with<br />me looks like
        </h2>

        {/* Top rule */}
        <div className="h-px bg-sand" />

        {/* Steps — horizontal scroll on mobile, 3-col grid on md+ */}
        <div ref={scrollRef} className="-mx-8 md:mx-0 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide">
          <div className="flex md:grid md:grid-cols-3 w-max md:w-auto">

            {/* ─── STEP 01 ──────────────────────────────────────────────── */}
            <div className="relative flex-none w-[85vw] md:w-auto snap-start border-r border-sand md:border-b-0 md:border-r py-10 md:py-12 px-8 md:px-0 md:pr-12 overflow-hidden">
              <p className="absolute -top-4 -left-2 md:-left-2 font-cormorant font-light text-ink opacity-[0.06] select-none pointer-events-none"
                 style={{ fontSize: '9rem', lineHeight: 1 }}>
                01
              </p>
              <h3 className="font-cormorant text-3xl font-medium text-ink mb-4 relative">
                Free Consultation
              </h3>
              <p className="font-dm text-mid text-sm leading-relaxed font-light relative">
                A full hour, at no cost. I want to understand your goals, your history, your
                lifestyle, and what's actually been getting in the way — before we talk about
                anything else.
              </p>
            </div>

            {/* ─── STEP 02 ──────────────────────────────────────────────── */}
            <div className="relative flex-none w-[85vw] md:w-auto snap-start border-r border-sand md:border-b-0 md:border-r py-10 md:py-12 px-8 md:px-12 overflow-hidden">
              <p className="absolute -top-4 -left-2 font-cormorant font-light text-ink opacity-[0.06] select-none pointer-events-none"
                 style={{ fontSize: '9rem', lineHeight: 1 }}>
                02
              </p>
              <h3 className="font-cormorant text-3xl font-medium text-ink mb-4 relative">
                Assessment
              </h3>
              <p className="font-dm text-mid text-sm leading-relaxed font-light relative">
                A 60–90 minute fitness testing and movement assessment session. I look at how
                you move, where you're strong, and where the gaps are — so every decision
                that follows is based on evidence, not guesswork. This is a paid appointment,
                and the foundation everything else is built on.
              </p>
            </div>

            {/* ─── STEP 03 ──────────────────────────────────────────────── */}
            <div className="relative flex-none w-[85vw] md:w-auto snap-start py-10 md:py-12 px-8 md:px-0 md:pl-12 pr-12 md:pr-0 overflow-hidden">
              <p className="absolute -top-4 -left-2 font-cormorant font-light text-ink opacity-[0.06] select-none pointer-events-none"
                 style={{ fontSize: '9rem', lineHeight: 1 }}>
                03
              </p>
              <h3 className="font-cormorant text-3xl font-medium text-ink mb-4 relative">
                Train & Progress
              </h3>
              <p className="font-dm text-mid text-sm leading-relaxed font-light relative">
                Your personalised programme begins — whether that's 1-to-1 sessions, an
                independent plan, or a combination of both. Every six weeks I re-test, review,
                and evolve the plan around your progress.
              </p>
            </div>

          </div>
        </div>

        {/* Swipe hint — mobile only, dots track active card */}
        <div className="flex items-center gap-3 mt-4 md:hidden">
          {[0, 1, 2].map(i => (
            <div key={i} className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === activeIndex ? 'bg-amber opacity-100' : 'bg-mid opacity-30'
            }`} />
          ))}
          {activeIndex === 0 && (
            <span className="label text-mid opacity-60 ml-1">swipe for more</span>
          )}
        </div>

        {/* Bottom rule */}
        <div className="h-px bg-sand mt-0 md:mt-0" />

      </div>
    </section>
  )
}
