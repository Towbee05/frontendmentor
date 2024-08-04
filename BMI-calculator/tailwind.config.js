/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {
       colors: {
        "custom-blue" : "#345FF6",
        "custom-gunmetal" : "#253347",
        "custom-electric-blue" : "#5E6E85",
        "color-1" : "#22C1C1",
        "color-2" : "#F21E84",
        "color-3" : "#F69134",
        "color-4" : "#9747FF",
        "color-5" : "#E7F5FE",
        "color-6" : "#F24E1E",
        "color-7" : "#FFC700",
      },
      backgroundColor: {
        "gradient-color" : "linear-graient(to left, #D6E6FE, #D6FCFE)"
      },
      screens: {
        "tablet" : {
          "min" : "700px",
          "max" : "1150px",
        },
        "laptop" : {
          "min" : "1150px"
        }
      },
      gridTemplateColumns:{
        "custom-grid" : "70% 30%"
      }
    },
  },
  plugins: [],
}

