/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
      },
      listStyleType: {
        square: 'square',  // Adds 'square' as a valid option for listStyleType
      },
    },
  },
  plugins: [],
}