/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coffee: {
          dark: '#3E2723',
          medium: '#5D4037',
          light: '#8D6E63',
        },
        cream: {
          DEFAULT: '#F5F5DC',
          light: '#FDFDF8',
          dark: '#E8E8D0',
        },
        beige: {
          warm: '#D7CCC8',
          light: '#EFEBE9',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
