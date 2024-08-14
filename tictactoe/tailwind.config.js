/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./js/**/*.{html,js}",
    "./js/**/*app.js",
    "./index.html"
  ],
  theme: {
    extend: {
      colors : {
        "custom-dark-navy" : "#1A2A33",
        "custom-light-blue" : "#31C3BD",
        "custom-light-blue-hover" : "#65E9E4",
        "custom-light-yellow" : "#F2B137",
        "custom-light-yellow-hover" : "#FFC860",
        "custom-semidark-navy" : "#1F3641",
        "custom-silver" : "#A8BFC9",
        "custom-silver-hover" : "#DBE8ED"
      },
      fontFamily: {
        "outfit" : '"Outfit", sans-serif'
      },
      boxShadow: {
        "shadow" : "0px 8px 0px #10212A",
        "yellow-btn-shadow" : "0px 8px 0px #CC8B13",
        "blue-btn-shadow" : "0 8px 0 #118C87",
        "silver-btn-shadow" : "0 8px 0 #6B8997",
      },
      letterSpacing: {
        "sm" : "0.88px",
        "md" : "1.25px",
        "lg" : "1.5px",
        "xl" : "2.5px"
      },
      borderRadius: {
        "10" : "10px"
      },
      maxWidth:{
        "mobile": "400px"
      },
      screens: {
        "tablet" : {
          "min" : "700px",
          "max" : "1000px",
        },
        "laptop" : {
          "min" : "1000px"
        }
      }
    },
  },
  plugins: [],
}

