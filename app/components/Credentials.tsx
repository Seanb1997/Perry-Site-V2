// ─── CREDENTIALS SECTION ───────────────────────────────────────────────────
// Dark ink background — sits between Process (cream) and Testimonials (sand).
// Split layout: editorial authority statement left, six qualifications right.
// Each qualification has an amber number, name, and one-line descriptor.

const qualifications = [
  {
    name: 'L3 Personal Trainer',
    detail: 'The professional foundation — accredited programme design and coaching.',
  },
  {
    name: 'Pre & Post Natal Trainer',
    detail: 'Specialist support for women through pregnancy and postnatal recovery.',
  },
  {
    name: 'GP Referral Trainer & Consultant',
    detail: 'Qualified to work alongside medical professionals for clinical referrals.',
  },
  {
    name: 'L4 Sports Massage Therapist',
    detail: 'The highest professional qualification in sports massage therapy in the UK.',
  },
  {
    name: 'Sports Conditioning',
    detail: 'Performance-focused methodology for athletes and sport-specific training.',
  },
  {
    name: 'Postural Assessment & Corrective Exercise',
    detail: 'Identifying and resolving movement dysfunction at its root cause.',
  },
]

export default function Credentials() {
  return (
    <section className="bg-ink py-14 md:py-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row lg:gap-24">

          {/* ── LEFT: Authority statement ── */}
          <div className="lg:w-80 flex-shrink-0 mb-16 lg:mb-0">
            <p className="label text-amber mb-6">Qualifications</p>
            <h2 className="font-cormorant font-light text-cream leading-tight mb-8"
                style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
              Six qualifications.<br />
              Twenty years of<br />
              getting it right.
            </h2>
            <div className="w-10 h-px bg-amber mb-8" />
            <p className="font-dm text-mid text-sm leading-relaxed font-light">
              Qualifications matter. But what separates a good trainer from a great one is
              what happens between earning the certificate and standing in front of a real client. Every qualification
              I hold is one I use — every week, with real clients.
            </p>
          </div>

          {/* ── RIGHT: Qualification list ── */}
          <div className="flex-1">

            {/* Top rule */}
            <div className="h-px bg-white opacity-10" />

            {qualifications.map((qual, index) => (
              <div
                key={qual.name}
                className={`py-7 flex items-start gap-6 ${
                  index < qualifications.length - 1
                    ? 'border-b border-white border-opacity-10'
                    : ''
                }`}
              >
                {/* Amber number */}
                <span className="font-plex text-xs text-amber opacity-50 mt-0.5 flex-shrink-0 w-6">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div>
                  {/* Qualification name */}
                  <h3 className="font-cormorant text-xl font-medium text-cream mb-1">
                    {qual.name}
                  </h3>
                  {/* One-line descriptor */}
                  <p className="font-dm text-mid text-sm leading-relaxed font-light">
                    {qual.detail}
                  </p>
                </div>
              </div>
            ))}

            {/* Bottom rule + CTA */}
            <div className="h-px bg-white opacity-10 mt-0" />
            <div className="pt-8">
              <a href="/contact" className="label text-amber hover:opacity-70 transition-opacity">
                Want to talk through how these apply to your goals? Book a free call →
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
