import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import JsonLd from './components/JsonLd'
import BottomBar from './components/BottomBar'

// ─── FONTS ─────────────────────────────────────────────────────────────────
const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-plex',
  display: 'swap',
})

// ─── SEO METADATA ──────────────────────────────────────────────────────────
// EDIT: Update metadataBase when the live domain is confirmed.
export const metadata: Metadata = {
  metadataBase: new URL('https://perryhowardpt.co.uk'),

  title: {
    default: 'Perry Howard PT | Personal Trainer in Winnersh & Wokingham',
    template: '%s | Perry Howard PT',
  },

  description:
    'Personal training in Winnersh, Wokingham & Reading (RG41) — strength, sports massage, GP referral & online coaching. 20+ years experience. Book a free call today.',

  keywords: [
    'personal trainer Winnersh',
    'personal trainer Wokingham',
    'personal trainer Reading',
    'personal trainer RG41',
    'sports massage Winnersh',
    'sports massage Wokingham',
    'GP referral trainer Wokingham',
    'online personal trainer Berkshire',
    'strength coach Wokingham',
    'fitness trainer Winnersh',
    'PT mentorship Wokingham',
  ],

  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://perryhowardpt.co.uk',
    siteName: 'Perry Howard PT',
    title: 'Perry Howard PT | Personal Trainer in Winnersh & Wokingham',
    description:
      'Expert personal training in Winnersh, Wokingham & Reading. Strength, sports massage, GP referral & online coaching. 20+ years experience.',
    images: [
      {
        url: '/images/Perry.jpeg',
        width: 1200,
        height: 630,
        alt: 'Perry Howard — Personal Trainer in Winnersh, Wokingham',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Perry Howard PT | Personal Trainer in Winnersh & Wokingham',
    description:
      'Expert personal training in Winnersh, Wokingham & Reading. Strength, sports massage, GP referral & online coaching. 20+ years experience.',
    images: ['/images/Perry.jpeg'],
  },

  alternates: {
    canonical: 'https://perryhowardpt.co.uk',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${ibmPlexMono.variable}`}
    >
      <body className="bg-cream text-ink antialiased pb-14 md:pb-0">
        {/* LocalBusiness JSON-LD structured data — injected on every page */}
        <JsonLd />
        {/* Subtle grain overlay — adds warmth and paper texture */}
        <div className="grain-overlay" aria-hidden="true" />
        <Navbar />
        {children}
        {/* Fixed mobile CTA bar — hidden on md+ */}
        <BottomBar />
      </body>
    </html>
  )
}
