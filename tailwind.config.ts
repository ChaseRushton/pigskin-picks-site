import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'media',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // "Pigskin" palette: turf green + leather brown + end-zone red in
        // light mode, literal to the product rather than a generic
        // tech-blue accent. Dark mode uses a warm near-black ("stadium
        // lights at night") instead of dark green — an all-dark-turf dark
        // mode read as muddy/low-contrast in practice — with the red accent
        // brightened so it pops against black instead of competing with a
        // similarly-dark green. Deliberately avoids green+gold (Packers)
        // or other single-team color pairings.
        brand: {
          bg: { DEFAULT: '#F2F3EC', dark: '#141210' },
          text: { DEFAULT: '#14201A', dark: '#F2EFE6' },
          muted: { DEFAULT: '#5B6B5F', dark: '#A69C8E' },
          accent: { DEFAULT: '#8B4A2B', dark: '#D6553E' },
          card: { DEFAULT: '#E7E9DC', dark: '#1F1B16' },
          border: { DEFAULT: '#D9DCC9', dark: '#332C24' },
          flag: { DEFAULT: '#A8402F', dark: '#D6553E' },
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
    },
  },
  // Typography plugin renders the ported legal-page prose (Task 8) with
  // sensible heading/paragraph/list spacing without hand-rolling those
  // rules — no other page in this plan uses `prose` classes.
  plugins: [require('@tailwindcss/typography')],
};

export default config;
