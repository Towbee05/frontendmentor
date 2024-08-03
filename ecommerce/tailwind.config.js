/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Primary 
        "custom-orange" : "hsl(26, 100%, 55%)",
        "custom-pale-orange" : "hsl(25, 100%, 94%)", 

        // Secondary
        "custom-very-dark-blue" : "hsl(220, 13%, 13%)",
        "custom-dark-greyish-blue" : "hsl(219, 9%, 45%)",
        "custom-greyish-blue" : "hsl(220, 14%, 75%)",
        "custom-light-greyish-blue" : "hsl(223, 64%, 98%)",
        "custom-black" : "rgba(0,0,0,0.5)"
      },
      fontSize: {
        "custom-heading" : ["28px", "32px"],
        "custom-paragraph" : ["15px", "25px"],
        "custom-desktop-heading" : ["44px", "48px"],
      },
      fontFamily: {
        "custom-family" : '"Kumbh Sans", sans-serif'
      }, 
      screens: {
        "mobile" : {
          "min" : "0px",
          "max" : "700px"
        },
        "desktop" : "700px"
      },
      gridTemplateColumns:{
        "custom-grid" : "40% 60%"
      }
    },
  },
  plugins: [],
}

