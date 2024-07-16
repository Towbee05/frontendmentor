/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors:{
        "custom-tomato" : "#ff6257",
        "custom-slate-grey": "#242742",
        "custom-charcoal-grey": "#36384e",
        "custom-grey": "#9294a0",
      },
      fontFamily:{
        "custom-family" : '"Roboto", sans-serif'
      },
      fontSize:{
        "custom-h1": ["40px", "100%"],
        "custom-normal" : ["16px", "150%"]
      },
      listStyleImage:{
        checkmark : "url(/assets/images/icon-list.svg)"
      },
      screens:{
        "xs" : {
          "min":"800px"
        }
      },
      boxShadow:{
        "custom-shadow" : "#ff6257 0px 8px 24px;"
      }
    },
  },
  plugins: [],
}

