/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors:{
        "custom-strong-cyan" : "#26c0ab",
        "custom-very-dark-cyan" : "#00494d",
        "custom-dark-greyish-cyan" : "#5e7a7d",
        "custom-greyish-cyan" : "#7f9c9f",
        "custom-light-greyish-cyan" : "#c5e4e7",
        "custom-very-light-greyish-cyan" : "#f4fafa",
        "custom-danger" : "#E17052"
      },
      backgroundImage: {
        "custom-dollar" : 'url("/assets/images/icon-dollar.svg")',
        "custom-person" : 'url("/assets/images/icon-person.svg")',
      },
      backgroundPosition:{
        "image-position" : "left 16px center"
      },
      screens:{
        "xs" : {
          "min" : "800px"
        }
      }
    },
  },
  plugins: [],
}

