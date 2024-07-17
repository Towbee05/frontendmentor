/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors:{
        "custom-blue" : "#5847eb",
        "custom-light-red-work" : "#ff8c66",
        "custom-soft-blue-play" : "#56c2e6",
        "custom-light-red-study" : "#ff5c7c",
        "custom-lime-green-exercise" : "#4acf81",
        "custom-violet-social" : "#7536d3",
        "custom-soft-orange-selfCare" : "#f1c65b",
        "custom-very-dark-blue" : "#0f1424",
        "custom-dark-blue" : "#1c1f4a",
        "custom-desaturated-blue" : "#6f76c8",
        "custom-pale-blue" : "#bdc1ff"
      },
      fontSize:{
        "custom-1" : ["32px", "18px"],
        "custom-2" : ["15px", "18px"],
        "custom-large-1" : ["56px", "66px"],
        "custom-large-2" : ["40px", "47px"],
      },
      backgroundImage:{
        "custom-work":"url('/assets/images/icon-work.svg')",
        "custom-play":"url('/assets/images/icon-play.svg')",
        "custom-exercise":"url('/assets/images/icon-exercise.svg')",
        "custom-social":"url('/assets/images/icon-social.svg')",
        "custom-self-care":"url('/assets/images/icon-self-care.svg')",
        "custom-study":"url('/assets/images/icon-study.svg')"
      },
      backgroundPosition:{
        "image-position" : "right 16px top -16px"
      },
      screens:{
        "xs" : {
          min : "900px"
        }
      }
    },
  },
  plugins: [],
}

