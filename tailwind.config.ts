import type { Config } from 'tailwindcss';

// OldCo.in — antique heritage theme for the world of old coins: parchment
// paper, deep coffee-maroon ink, aged bronze. The ornament kit reads like a
// well-kept collector's album.
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#26120b',
          900: '#301a10',
          800: '#422415',
          700: '#57301c'
        },
        ivory: {
          50: '#f8f3e7',
          100: '#f1e8d4',
          200: '#e5d6b8'
        },
        gold: {
          300: '#d9a978',
          400: '#c68d52',
          500: '#b0713a',
          600: '#92552a'
        }
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        deva: ['var(--font-deva)', 'serif']
      },
      maxWidth: {
        prose2: '42rem'
      }
    }
  },
  plugins: []
};

export default config;
