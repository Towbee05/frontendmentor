/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        "custom-soft-blue": "hsl(215, 51%, 70%)",
        "custom-cyan": "hsl(178, 100%, 50%)",
        "custom-dark-blue-1": "hsl(217, 54%, 11%)",
        "custom-dark-blue-2": "hsl(216, 50%, 16%)",
        "custom-dark-blue-3": "hsl(215, 32%, 27%)"
      },

      fontFamily: {
        "custom-outfit" : '"Outfit", sans-serif'
      },
      screens: {
        "big" : {
          min : "750px"
        }
      },
      backgroundImage: {
        "custom-view" : "url('/images/icon-view.svg')"
      }
    },
  },
  plugins: [],
}

