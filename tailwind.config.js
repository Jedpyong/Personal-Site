/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        lime: {
          50: '#f7fcd6',
          100: '#e2f7a8',
          200: '#c8f17e',
          300: '#a4d65e',
          400: '#8cd943',
          500: '##84cc16',
          600: '#5db32c',
          700: '#4a9c1f',
          800: '#388814',
          900: '#1f6c0e',
        },
      },
    },
  },
  plugins: [],
};

