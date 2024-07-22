/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors:{
        "custom-body" : "#08070B",
        "custom-heading" : "#817D92",
        "custom-letters" : "#E6E5EA",
        "custom-neon-green" : "#A4FFAF",
        "custom-yellow" : "#F8CD65",
        "custom-grey" : "#979797",
        "custom-dark-grey" : "#24232C",
        "custom-strength" : "#18171F",
        "custom-weak" : "#F64A4A",
        "custom-orange" : "#FB7C58",
      },
      screens:{
        "xxs": { 
          "min" : "375px",
        },
      },
      fontSize:{
        "custom-tablet" : ["18px", "24px"],
        "custom-tablet-heading" : ["32px", "42px"]
      }
    },
  },
  plugins: [],
}

