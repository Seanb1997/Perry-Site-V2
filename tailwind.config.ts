import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── PRIMARY PALETTE ────────────────────────────────────────────
        // Driven by CSS variables — swap themes by toggling html.theme-b
        // Variables store space-separated RGB channels so Tailwind opacity
        // modifiers (bg-ink/75 etc.) continue to work.
        // See globals.css for the two palette definitions.
        ink:   'rgb(var(--color-ink) / <alpha-value>)',
        cream: 'rgb(var(--color-cream) / <alpha-value>)',
        amber: 'rgb(var(--color-amber) / <alpha-value>)',
        sand:  'rgb(var(--color-sand) / <alpha-value>)',
        mid:   'rgb(var(--color-mid) / <alpha-value>)',
      },
      fontFamily: {
        // ── TYPEFACES ──────────────────────────────────────────────────
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        dm:        ['var(--font-dm)', 'system-ui', 'sans-serif'],
        plex:      ['var(--font-plex)', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
