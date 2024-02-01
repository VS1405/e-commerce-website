/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        accent: "#179957",
        accentDark : "#184047",
        startingAt : "rgb(16 185 129)",
        discount : "rgb(252 165 165)"
      },
      container :{
        center: true,
        padding : "15px"
      }
    },
  },
  plugins: [],
}