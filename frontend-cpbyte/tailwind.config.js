/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#070B14',
          darker: '#060a12',
          card: '#0d1420',
          accent: '#22d3ee',
        },
      },
      boxShadow: {
        glow: '0 0 20px rgba(6, 182, 212, 0.5)',
        'glow-strong': '0 0 35px rgba(6, 182, 212, 0.6)',
        'glow-inset': 'inset 0 0 20px rgba(6, 182, 212, 0.2)',
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      keyframes: {
        starfieldRotate: {
          '0%': {
            transform: 'rotate(0deg) scale(1.08)',
          },
          '50%': {
            transform: 'rotate(180deg) scale(1.12)',
          },
          '100%': {
            transform: 'rotate(360deg) scale(1.08)',
          },
        },
      },
      animation: {
        starfieldRotate: 'starfieldRotate 160s linear infinite',
      },
    },
  },
  plugins: [],
};
