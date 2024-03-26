import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%',
        '5': '5 5 0%',
      },
    },
  },
  plugins: [],
}
export default config
