/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    colors: {
      primary: {
        light: "#8E5E43",
        DEFAULT: "#6A4029",
        dark: "#512E1F",
      },
      secondary: {
        light: "#FFD655",
        DEFAULT: "#FFBA33",
        dark: "#E6A22A",
      },
      tertiary: {
        light: "#162240",
        DEFAULT: "#0B132A",
        dark: "#080F1D",
      },
      black: "#000000",
      white: "#FFFFFF",
    },
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

