/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        "rubiks" : '"Rubik", sans-serif'
      },
      colors: {
        'custom-soft-blue' : 'hsl(231, 69%, 60%)',
        'custom-soft-red' : 'hsl(0, 94%, 66%)',
        'custom-greyish-blue' : 'hsl(229, 8%, 60%)',
        'custom-dark-blue' : 'hsl(229, 31%, 21%)'
      },
      fontSize: {
        "12px" : ['12px', '40px'],
        '14px' : ['14px', '28px'],
        '15px' : ['15px', '25px'],
        '15px2.0' : ['15px', '32px'],
        '15px2.0' : ['15px', '30px'],
        '16px' : ['16px', '36px'],
        '18px' : ['18px', '32px'],
        '24px' : ['24px', '52px'],
        '24px2.0' : ['24px', '28px'],
        '30px' : ['30px', '40px'],
        '32px' : ['32px', '52px'],
        '48px' : ['48px', '52px']
      },
      padding: {
        '10px' : '10px'
      },
      screens: {
        tablet: {
          min : '800px',
          max : '1200px'
        },
        laptop: {
          min : '1200px'
        }
      }
    },
  },
  plugins: [],
}

