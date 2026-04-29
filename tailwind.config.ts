import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1a1a0e',
        'dark-2': '#242416',
        'dark-3': '#2e2e1c',
        cream: '#f7f2ea',
        'cream-2': '#ede6d9',
        gold: '#b8935a',
        'gold-light': '#cca76a',
        'gold-dark': '#9a7a48',
        muted: '#8a8570',
        'text-light': '#d4ccbb',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-cormorant)', 'Garamond', 'serif'],
        body: ['var(--font-lato)', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(26,26,14,0.65) 0%, rgba(26,26,14,0.4) 50%, rgba(26,26,14,0.8) 100%)',
      },
    },
  },
  plugins: [],
}
export default config
