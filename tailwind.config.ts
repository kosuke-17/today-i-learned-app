import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-main': 'var(--primary-main)',
        'primary-dark': 'var(--primary-dark)',
        'secondary-main': 'var(--secondary-main)',
        'secondary-light': 'var(--secondary-light)',
        'secondary-dark': 'var(--secondary-dark)',
        error: 'var(--error)',
      },
      flex: {
        '2': '2 2 0%',
        '5': '5 5 0%',
        '8': '8 8 0%',
      },
      animation: {
        'fade-in-left': 'fade-in-left 0.6s ease-out both',
      },
      keyframes: {
        'fade-in-left': {
          from: {
            transform: 'translateX(-10px)',
            opacity: '0',
          },
          to: {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
