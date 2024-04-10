/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto Condensed"', 'sans-serif'],
        poppins: ["Poppins", 'sans-serif'],
        inria: ["Inria Sans", 'sans-serif'],
        istok: ["Istok Web", 'sans-serif'],
        saira: ["Saira Condensed", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

