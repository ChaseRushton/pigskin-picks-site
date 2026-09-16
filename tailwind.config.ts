import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'media',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: { DEFAULT: '#ffffff', dark: '#1c1c1e' },
          text: { DEFAULT: '#1a1a1a', dark: '#f5f5f7' },
          muted: { DEFAULT: '#666666', dark: '#98989d' },
          accent: { DEFAULT: '#0A84FF', dark: '#0A84FF' },
          card: { DEFAULT: '#f5f5f7', dark: '#2c2c2e' },
          border: { DEFAULT: '#e5e5e5', dark: '#38383a' },
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Text"',
          '"Helvetica Neue"',
          'sans-serif',
        ],
      },
    },
  },
  // Typography plugin renders the ported legal-page prose (Task 8) with
  // sensible heading/paragraph/list spacing without hand-rolling those
  // rules — no other page in this plan uses `prose` classes.
  plugins: [require('@tailwindcss/typography')],
};

export default config;
