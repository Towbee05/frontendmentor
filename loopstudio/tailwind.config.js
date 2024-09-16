/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      colors : {
        "custom-dark-grey": "hsl(0, 0%, 55%)",
        "custom-very-dark-gray" : "hsl(0, 0%, 41%)"
      },
      fontFamily: {
        "custom-josefyn" : '"Josefin Sans", sans-serif',
        "custom-alata" : '"Alata", sans-serif'
      },
      backgroundImage: {
        "custom-hero-mobile" : "url('/assets/images/mobile/image-hero.jpg')",
        "custom-hero-desktop" : "url('/assets/images/desktop/image-hero.jpg')"
      },
      fontSize: {
        "14px" : ["14px", "14px"],
        "15px" : ["15px", "25px"],
        "24px" : ["24px", "25px"],
        "24px2.0" : ["24px", "24px"],
        "32px" : ["32px", "32px"],
        "40px" : ['40px', '38px'],
        "42px" : ['42px', '42px'],
      },
      screens: {
        desktop : {
          min: "1000px"
        }
      }
    },
  },
  plugins: [],
}

