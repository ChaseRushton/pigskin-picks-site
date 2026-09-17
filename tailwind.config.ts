import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'media',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // "Pigskin" palette: turf green + leather brown + end-zone red,
        // literal to the product rather than a generic tech-blue accent.
        // Deliberately avoids green+gold (Packers) or other single-team
        // color pairings — no NFL team affiliation is implied. Light mode
        // reads as chalk/turf-at-noon; dark mode as turf-at-dusk, with the
        // accent shifting from brown to red for contrast against the dark
        // green base.
        brand: {
          bg: { DEFAULT: '#F2F3EC', dark: '#14251C' },
          text: { DEFAULT: '#14201A', dark: '#F2EFE6' },
          muted: { DEFAULT: '#5B6B5F', dark: '#9FAE9F' },
          accent: { DEFAULT: '#8B4A2B', dark: '#C1503B' },
          card: { DEFAULT: '#E7E9DC', dark: '#1E3A2C' },
          border: { DEFAULT: '#D9DCC9', dark: '#2C4536' },
          flag: { DEFAULT: '#A8402F', dark: '#C1503B' },
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
