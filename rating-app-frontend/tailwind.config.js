/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*{html,js}"
  ],
  theme: {
    extend: {
      colors:{
        "custom-orange" :"hsl(25, 97%, 53%)",
        "custom-light-grey" : "hsl(217, 12%, 63%)",
        "custom-dark-blue" : "hsl(213, 19%, 18%)",
        "custom-very-dark-blue" : "hsl(216, 12%, 8%)",
        "custom-container" : "#181e27"
      },
      fontFamily: {
        "custom-family" : '"Overpass", sans-serif'
      },
      screens:{
        "laptop" : {
          "min" : "900px"
        }
      }
    },
  },
  plugins: [],
}

