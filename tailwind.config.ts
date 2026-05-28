import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B3A3A',
          dark: '#6B1C23',
          light: '#A64D4D',
        },
        velvet: '#8B3A3A',
      },
    },
  },
}

export default config
