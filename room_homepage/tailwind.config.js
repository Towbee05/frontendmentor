/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      screens: {
        laptop: {
          min: "1100px"
        }
      },
      colors: {
        "custom-dark-gray": "hsl(0, 0%, 63%)",
        "very-dark-gray": "hsl(0, 0%, 27%)"
      },
      backgroundImage:{
        "background-1" : 'url("/assets/images/mobile-image-hero-1.jpg")',
        "background-2" : 'url("/assets/images/desktop-image-hero-1.jpg")',
        "background-3" : 'url("/assets/images/mobile-image-hero-2.jpg")',
        "background-4" : 'url("/assets/images/desktop-image-hero-2.jpg")',
        "background-5" : 'url("/assets/images/mobile-image-hero-3.jpg")',
        "background-6" : 'url("/assets/images/desktop-image-hero-3.jpg")',
      },
      fontFamily: {
        "custom-league" : '"League Spartan", sans-serif'
      },
      fontSize: {
        "15px" : ["15px", "16px"],
        "40px" : ["40px", "37px"],
        "48px" : ["48px", "44px"]
      },
      letterSpacing: {
        "001" : "-1.67px",
        "002" : "-0.33px",
        "003" : "12.5px",
        "004" : "5.83px",
      },
      gridTemplateColumns: {
        "grid-1" : "60% 40%",
        "grid-2" : "30% 38% 32%"
      },
      transitionDuration: {
        400 : "400ms"
      }
    },
  },
  plugins: [],
}

