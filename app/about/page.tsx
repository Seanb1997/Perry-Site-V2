// ─── ABOUT PAGE ────────────────────────────────────────────────────────────
// Perry's story, credentials, and a CTA.
// SECTIONS: 1. Hero banner → 2. Story → 3. Credentials → 4. CTA → 5. Footer

import type { Metadata } from 'next'
import Footer from '../components/Footer'

// EDIT THIS TEXT: About page browser tab title
export const metadata: Metadata = {
  title: 'About Perry Howard | Personal Trainer Winnersh & Wokingham',
  description:
    'The trainer who trains the trainers. Perry Howard PT — Winnersh, Wokingham (RG41). 20+ years, L4 Sports Massage, GP Referral qualified.',
  alternates: {
    canonical: 'https://perryhowardpt.co.uk/about',
  },
}

export default function AboutPage() {
  return (
    <>

      {/* ── 1. HERO BANNER ───────────────────────────────────────────── */}
      {/*
          PHOTO: Uses /public/images/Perry.jpeg — the same portrait as the homepage.
          Mobile: full-bleed background with dark overlay.
          Desktop (lg+): split layout — text left, portrait panel right.
      */}
      <section className="bg-ink overflow-hidden relative">

        {/* Mobile: full-bleed background photo with dark overlay */}
        <div
          className="absolute inset-0 bg-cover bg-top lg:hidden"
          style={{ backgroundImage: "url('/images/Perry.jpeg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ink/75 lg:hidden" aria-hidden="true" />

        <div className="flex flex-col lg:flex-row min-h-[65vh]">

          {/* Left: text */}
          <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 lg:py-28 min-h-[65vh] lg:min-h-0">
            <p className="label text-amber mb-6">About Perry</p>
            {/* EDIT THIS TEXT: About page hero heading */}
            <h1 className="font-cormorant font-light text-cream leading-tight mb-6"
                style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
              Meet Perry<br />Howard
            </h1>
            {/* EDIT THIS TEXT: About page hero subheading */}
            <p className="font-dm text-mid font-light text-base md:text-lg leading-relaxed max-w-xs">
              20 years in the industry. I assess the people who assess other PTs.
              And I believe longevity beats everything.
            </p>
          </div>

          {/* Vertical divider — desktop only */}
          <div className="hidden lg:block w-px flex-shrink-0 self-stretch bg-amber/30" />

          {/* Right: Perry's portrait — desktop only */}
          <div
            className="hidden lg:block relative lg:h-auto lg:w-[44%] flex-shrink-0 bg-ink bg-cover bg-top"
            style={{ backgroundImage: "url('/images/Perry.jpeg')" }}
          >
            {/* Bottom vignette */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/40 to-transparent" />
            {/* Amber corner accent */}
            <div className="absolute top-0 right-0 w-px h-16 bg-amber opacity-60" />
            <div className="absolute top-0 right-0 w-16 h-px bg-amber opacity-60" />
          </div>

        </div>
      </section>

      {/* ── 2. PERRY'S STORY ─────────────────────────────────────────── */}
      <section className="bg-cream py-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Label column — sticks while scrolling past the text on desktop */}
            <div className="lg:col-span-3">
              <p className="label text-mid lg:sticky lg:top-24">The story</p>
            </div>

            {/* Story text column */}
            <div className="lg:col-span-8">

              {/* EDIT THIS TEXT: Story paragraph 1 — Perry's background */}
              <p className="font-dm text-ink text-lg leading-relaxed font-light mb-8">
                I've spent 20 years in the fitness industry — long enough to have
                seen every fad arrive, make promises, and quietly disappear. What I've kept
                throughout is a stubborn belief that the fundamentals matter more than the trends:
                how your body moves, why it hurts where it hurts, and what it needs to keep going
                for decades, not just months.
              </p>

              {/* EDIT THIS TEXT: Story paragraph 2 — Perry's philosophy */}
              <p className="font-dm text-ink text-lg leading-relaxed font-light mb-8">
                My approach is built around one principle: move better to feel better. Longevity
                over aesthetics. Function over form. Most of the clients I work with aren't
                trying to look like athletes — they want to get out of bed without wincing, play
                with their kids without their back seizing up, and still be training confidently
                in their 70s. That's the goal I design everything around.
              </p>

              {/* EDIT THIS TEXT: Story paragraph 3 — Perry's unique position */}
              <p className="font-dm text-ink text-lg leading-relaxed font-light">
                I'm also an ActiveIQ External Quality Assurer — meaning I assess the people who
                train other PTs and write the courses that qualify them. I lecture, develop
                curricula, and mentor newly qualified trainers across the industry. When I say
                I'm the coach who trains the coaches, it's not marketing. It's my day job.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* ── 3. CREDENTIALS ───────────────────────────────────────────── */}
      <section className="bg-sand py-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">

          <p className="label text-mid mb-5">Credentials</p>
          <h2 className="font-cormorant font-light text-ink leading-tight mb-16"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Experience &amp; qualifications
          </h2>

          <div className="border-t border-sand" style={{ borderColor: '#cfc4b3' }}>

            {/* EDIT THIS TEXT: Credential 1 — title and description */}
            <div className="py-8 border-b grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
                 style={{ borderColor: '#cfc4b3' }}>
              <div className="md:col-span-4">
                <p className="font-cormorant text-xl font-medium text-ink leading-snug">
                  ActiveIQ External Quality Assurer
                </p>
              </div>
              <div className="md:col-span-8">
                <p className="font-dm text-mid text-sm leading-relaxed font-light">
                  I assess PTs and course providers against national standards — the highest
                  level of quality assurance in UK fitness education.
                </p>
              </div>
            </div>

            {/* EDIT THIS TEXT: Credential 2 — title and description */}
            <div className="py-8 border-b grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
                 style={{ borderColor: '#cfc4b3' }}>
              <div className="md:col-span-4">
                <p className="font-cormorant text-xl font-medium text-ink leading-snug">
                  PT Lecturer &amp; Course Writer
                </p>
              </div>
              <div className="md:col-span-8">
                <p className="font-dm text-mid text-sm leading-relaxed font-light">
                  I design and deliver the programmes that shape the next generation of
                  fitness professionals.
                </p>
              </div>
            </div>

            {/* EDIT THIS TEXT: Credential 3 — title and description */}
            <div className="py-8 border-b grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
                 style={{ borderColor: '#cfc4b3' }}>
              <div className="md:col-span-4">
                <p className="font-cormorant text-xl font-medium text-ink leading-snug">
                  20 Years in the Fitness Industry
                </p>
              </div>
              <div className="md:col-span-8">
                <p className="font-dm text-mid text-sm leading-relaxed font-light">
                  Two decades of hands-on client work — I specialise in corrective exercise,
                  movement screening, and longevity-focused programming.
                </p>
              </div>
            </div>

            {/* EDIT THIS TEXT: Credential 4 — title and description */}
            <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
              <div className="md:col-span-4">
                <p className="font-cormorant text-xl font-medium text-ink leading-snug">
                  L4 Sports Massage Therapist
                </p>
              </div>
              <div className="md:col-span-8">
                <p className="font-dm text-mid text-sm leading-relaxed font-light">
                  The highest professional qualification in sports massage therapy in the UK — I work
                  with clients to manage pain, support recovery, and keep the body moving without restriction.
                </p>
              </div>
            </div>

            {/*
                EDIT THIS TEXT: Add more credentials using this format:

                <div className="py-8 border-b grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
                     style={{ borderColor: '#cfc4b3' }}>
                  <div className="md:col-span-4">
                    <p className="font-cormorant text-xl font-medium text-ink">Credential Title</p>
                  </div>
                  <div className="md:col-span-8">
                    <p className="font-dm text-mid text-sm leading-relaxed font-light">Description here.</p>
                  </div>
                </div>
            */}

          </div>
        </div>
      </section>

      {/* ── 4. CTA ───────────────────────────────────────────────────── */}
      <section className="bg-amber py-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">

          <div>
            {/* EDIT THIS TEXT: About page CTA heading */}
            <h2 className="font-cormorant font-light text-ink leading-tight"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Ready to get started?
            </h2>
          </div>

          <div className="flex flex-col gap-6 max-w-xs">
            {/* EDIT THIS TEXT: About page CTA subtext */}
            <p className="font-dm text-ink opacity-70 text-base leading-relaxed font-light">
              Start with a free call — I'll ask about your lifestyle, goals, and how I can
              help. No commitment, no hard sell.
            </p>
            {/* EDIT THIS TEXT: About page CTA button */}
            <a
              href="/contact"
              className="label text-cream bg-ink px-8 py-4 hover:opacity-90 transition-opacity self-start"
            >
              Book a free call
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}
