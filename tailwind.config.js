/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        'matrix-rain': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
        'glow': {
          '0%, 100%': {
            textShadow: '0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff',
          },
          '50%': {
            textShadow: '0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff',
          },
        },
      },
    },
  },
  plugins: [],
};