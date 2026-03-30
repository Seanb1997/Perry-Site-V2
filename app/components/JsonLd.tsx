// ─── LOCAL BUSINESS JSON-LD SCHEMA ─────────────────────────────────────────
// Structured data for Google local search and map pack.
// Update address/phone/url if any details change.
// Rendered in layout.tsx so it appears on every page.

export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://perryhowardpt.co.uk/#business',
    name: 'Perry Howard PT',
    description:
      'Expert personal training, sports massage, and GP referral fitness services in Winnersh, Wokingham, and Reading. 20+ years experience.',
    url: 'https://perryhowardpt.co.uk',
    telephone: '+447846329663',
    email: 'advancedfitnesstraining@hotmail.co.uk',
    image: 'https://perryhowardpt.co.uk/images/Perry.png',
    priceRange: '££',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Grovelands Ave',
      addressLocality: 'Winnersh',
      addressRegion: 'Berkshire',
      postalCode: 'RG41 5LB',
      addressCountry: 'GB',
    },
    hasMap: 'https://maps.google.com/?q=place_id:ChIJJ91yFEyFdkgRY2uUw6A_c2M',
    containedInPlace: {
      '@type': 'LocalBusiness',
      name: 'Elite Edge Fitness',
      url: 'https://eliteedgefitness.co.uk/',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Grovelands Ave',
        addressLocality: 'Winnersh',
        addressRegion: 'Berkshire',
        postalCode: 'RG41 5LB',
        addressCountry: 'GB',
      },
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.4279,
      longitude: -0.9372,
    },
    areaServed: [
      { '@type': 'City', name: 'Winnersh' },
      { '@type': 'City', name: 'Wokingham' },
      { '@type': 'City', name: 'Reading' },
      { '@type': 'AdministrativeArea', name: 'Berkshire' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Personal Training & Fitness Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: '1-to-1 Personal Training', serviceType: 'Personal Training' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Online Training Packages', serviceType: 'Online Personal Training' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Sports Massage', serviceType: 'Sports Massage Therapy' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Postural Assessment & Corrective Exercise', serviceType: 'Postural Assessment' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'GP Referral Training', serviceType: 'GP Referral Exercise' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'PT Mentorship & CPD Workshops', serviceType: 'Personal Trainer Mentorship' },
        },
      ],
    },
    sameAs: ['https://www.instagram.com/perryhowardpt/'],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
