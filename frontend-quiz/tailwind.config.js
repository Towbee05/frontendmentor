/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        "custom-black" : "#313E51",
        "custom-grey-navy" : "#626C7F",
        "custom-purple" : "#A729F5",
        "custom-light-grey" : "#F4F6FA",
        "custom-green" : "#2FD887",
        "custom-blue" : "#306AFF",
        "custom-CSS" : "#E0FDEF",
        "custom-JavaScript" : "#EBF0FF",
        "custom-grey" : "#EDF1F9",
        "custom-red" : "#EE5454",
        "custom-HTML" : "#FFF1E9",
        "cusom-light-bluish" : "#ABC1E1",
        "custom-Accessibility" : "#F6E7FF",
        "custom-navy" : "#3B4D66"
      },

      screens:{
        "mobile" : {
          "min": "0px",
          "max" : "600px"
        },
        "tablet" : {
          "min" : "600px",
          "max" : "1200px"
        },
        "laptop" : {
          "min" : "1200px"
        }
      },
      backgroundImage : {
        "mobile-light" : "url('/assets/images/pattern-background-mobile-light.svg')",
        "mobile-dark" : "url('/assets/images/pattern-background-mobile-dark.svg')",
        "tablet-light" : "url('/assets/images/pattern-background-tablet-light.svg')",
        "tablet-dark" : "url('/assets/images/pattern-background-tablet-dark.svg')",
        "desktop-light" : "url('/assets/images/pattern-background-desktop-light.svg')",
        "desktop-dark" : "url('/assets/images/pattern-background-desktop-dark.svg')",
      }
    },
  },
  plugins: [],
}

