/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'coffee': "url('/src/assets/images/bg_landing.webp')"
      },
      lineHeight: {
        '5xl': "3rem"
      }
    },
  },
  plugins: [],
}

