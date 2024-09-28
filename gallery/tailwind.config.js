/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './scripts/**/*.{html,js}'
  ],
  theme: {
    extend: {
      screens: {
        'mobile' : {
          min : '0px',
          max : '600px'
        },
        'tablet' : {
          min : '600px',
          max : '1000px'
        },
        'laptop' : {
          min : '1000px'
        }
      },
      fontFamily: {
        'libre' : '"Libre Baskerville", serif'
      },
      colors: {
        'grey' : '#7D7D7D',
        'year-grey' : '#F3F3F3'
      },
      height : {
        'custom-height' : 'calc(100vh - 170px)'
      },
      gridTemplateColumns: {
        'custom-column' : '75% 25%',
        'custom-column2' : '70% 30%'
      },
      gridTemplateRows: {
        'custom-row' : 'repeat(4, auto)'
      }
    },
  },
  plugins: [],
}

