import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        forest:  '#18392B',
        gold:    '#C8A96B',
        ivory:   '#F7F4EE',
        charcoal:'#1D1D1D',
        muted:   '#6B7280',
        'forest-light': '#2A5240',
        'gold-light':   '#E2C99A',
        'gold-dark':    '#A8893B',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans:  ['var(--font-dm-sans)',   'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up':   'fadeUp 0.7s ease forwards',
        'fade-in':   'fadeIn 0.5s ease forwards',
        'ken-burns': 'kenBurns 20s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp:    { from: { opacity: '0', transform: 'translateY(28px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:    { from: { opacity: '0' }, to: { opacity: '1' } },
        kenBurns:  { from: { transform: 'scale(1)' }, to: { transform: 'scale(1.08)' } },
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}

export default config
