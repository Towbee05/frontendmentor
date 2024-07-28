/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors:{
        "custom-light-pink" : "hsl(275, 100%, 97%)", 
        "custom-greyish-purple" : "hsl(292, 16%, 49%)", 
        "custom-dark-purple" : "hsl(292, 42%, 14%)"
      },
      backgroundImage: {
        "custom-mobile-background" : "url('/assets/images/background-pattern-mobile.svg')",
        "custom-desktop-background" : "url('/assets/images/background-pattern-desktop.svg')",
      },
      fontSize:{
        "custom-body-mobile" : ["14px", "150%"],
        "custom-body-desktop" : ["14px", "150%"]
      },
      screens: {
        "desktop" : {
          "min" : "450px"
        }
      },
      fontFamily: {
        "custom-family" : '"Work Sans", sans-serif'
      }
    },
  },
  plugins: [],
}
