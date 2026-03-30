// ─── HERO SECTION ──────────────────────────────────────────────────────────
// Split layout: text left, Perry's portrait right (desktop).
// Mobile: portrait fills the section as a background with dark overlay.
//
// PHOTO: /public/images/Perry.jpeg

export default function Hero() {
  return (
    <section className="bg-ink flex flex-col lg:flex-row min-h-screen relative overflow-hidden">

      {/* ── MOBILE: Full-bleed background photo with dark overlay ─────────── */}
      <div
        className="absolute inset-0 bg-cover bg-top lg:hidden"
        style={{ backgroundImage: "url('/images/Perry.jpeg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-ink/75 lg:hidden" aria-hidden="true" />

      {/* ── LEFT: TEXT CONTENT ─────────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-14 sm:py-20 lg:py-32 min-h-screen lg:min-h-0">

        {/* EDIT THIS TEXT: Hero overline / category label */}
        <p className="label text-amber mb-6 lg:mb-10">
          Mobility · Strength · Longevity
        </p>

        {/* EDIT THIS TEXT: Main hero headline */}
        <h1 className="font-cormorant font-light text-cream leading-none mb-8"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}>
          Move<br />
          better.<br />
          <em className="text-amber">Feel</em><br />
          better.
        </h1>

        {/* Thin amber rule */}
        <div className="w-14 h-px bg-amber mb-8" />

        {/* EDIT THIS TEXT: Hero subheadline */}
        <p className="font-dm text-sand font-light text-base md:text-lg leading-relaxed max-w-sm mb-8 lg:mb-12">
          Personal training in Winnersh, Wokingham &amp; Reading (RG41).<br />
          Train with the coach who trains the coaches — 20+ years experience as a personal trainer, fitness lecturer and external verifier for fitness training providers.
        </p>

        {/* EDIT THIS TEXT: Hero CTA button */}
        <a
          href="/contact"
          className="label text-ink bg-amber px-8 py-4 hover:opacity-90 transition-opacity self-start"
        >
          Book a free call
        </a>

        {/* Trust line beneath CTA */}
        <p className="font-dm text-mid text-xs font-light mt-4 opacity-70">
          20+ years experience as a personal trainer, fitness lecturer and external verifier
        </p>

        {/* Decorative large number — barely visible watermark */}
        <div className="absolute bottom-8 left-8 md:left-16 lg:left-20 select-none pointer-events-none hidden sm:block">
          <p className="font-cormorant font-light text-cream opacity-[0.05]"
             style={{ fontSize: 'clamp(6rem, 12vw, 10rem)', lineHeight: 1 }}>
            20
          </p>
          <p className="label text-mid opacity-60 -mt-3">years in the industry</p>
        </div>

      </div>

      {/* Vertical divider — desktop only */}
      <div className="hidden lg:block w-px flex-shrink-0 self-stretch bg-amber/30" />

      {/* ── RIGHT: PERRY'S PORTRAIT — desktop only ───────────────────────── */}
      <div
        className="hidden lg:block relative lg:h-auto lg:w-[44%] flex-shrink-0 bg-ink bg-cover bg-top"
        style={{ backgroundImage: "url('/images/Perry.jpeg')" }}
      >
        {/* Amber corner frames */}
        <div className="absolute top-0 right-0 w-px h-20 bg-amber" />
        <div className="absolute top-0 right-0 w-20 h-px bg-amber" />
        <div className="absolute bottom-0 right-0 w-px h-20 bg-amber" />
        <div className="absolute bottom-0 right-0 w-20 h-px bg-amber" />

        {/* Bottom vignette */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink/50 to-transparent" />
      </div>

    </section>
  )
}
