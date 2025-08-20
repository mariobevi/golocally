import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: '#233a25',
          navy: '#1a2a67',
          burgundy: '#492b2f',
          red: '#db3a2f',
          sky: '#6295ff',
          lime: '#cdfd4f',
        },
      },
      fontFamily: {
        // Primary brand font
        sans: ['Montserrat', 'system-ui', 'ui-sans-serif', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial'],
      },
      boxShadow: {
        glow: '0 0 0 6px rgba(205,253,79,0.25)',
      },
      borderRadius: { '2xl': '1rem' },
    },
  },
  plugins: [],
} satisfies Config;
