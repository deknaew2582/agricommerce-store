import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Agricultural theme colors
        'agricultural-green': {
          50: '#f0f9e8',
          100: '#ddf2c7',
          200: '#c2e894',
          300: '#9fd957',
          400: '#7fc626',
          500: '#4A7C23', // Main agricultural green
          600: '#2D5016', // Dark agricultural green
          700: '#1A3009',
          800: '#0f1f05',
          900: '#080f02',
        },
        'dirt-brown': {
          50: '#faf7f2',
          100: '#f5ede0',
          200: '#ebd8c0',
          300: '#ddbf96',
          400: '#cda16a',
          500: '#A0522D', // Light dirt brown
          600: '#8B4513', // Main dirt brown
          700: '#654321', // Dark dirt brown
          800: '#4a2f18',
          900: '#2f1e0f',
        },
        'harvest-gold': {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#DAA520', // Main harvest gold
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        'earth-beige': '#F5E6D3',
        'leaf-green': '#228B22',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config