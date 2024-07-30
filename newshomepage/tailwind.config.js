/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {
      screens:{
        "desktop" : {
          "min" :"900px"
        }
      },

      colors: {
        "custom-soft-orange" : "#e9ab53",
        "custom-soft-red" : "#f15e50",
        "custom-off-white" : "#fffdfa",
        "custom-greyish-blue" : "#c5c6ce",
        "custom-dark-greyish-blue" : "#5d5f79",
        "custom-very-dark-blue" : "#00001a",
      },

      fontFamily: {
        "custom-inter" : '"Inter", sans-serif'
      },

      fontSize: {
        "15" : ["15px", "26px"]
      },
      gridTemplateColumns:{
        "grid-custom" : "repeat(2, auto-fit)"
      }
    },
  },
  plugins: [],
}

