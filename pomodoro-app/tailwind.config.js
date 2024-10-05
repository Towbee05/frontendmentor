/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './scripts/**/*.js'    
  ],
  theme: {
    extend: {
      screens: {
        tablet: {
          min : '700px',
          max : '900px'
        },
        laptop: {
          min: '900px'
        }
      },
      colors: {
        'custom-red' : '#F87070',
        'custom-blue' : '#70F3F8',
        'custom-purple' : '#D881F8',
        'custom-grey' : '#D7E0FF',
        'custom-blueish-black' : '#1E213F',
        'custom-light-grey' : '#EFF1FA',
        'custom-blueish-black2' : '#161932',
        'custom-gradient1' : '#2E325A',
        'custom-gradient2' : '#0E112A',
      },
      fontFamily: {
        'kumbh' : '"Kumbh Sans", sans-serif',
        'roboto' : '"Roboto Slab", serif',
        'space' : '"Space Mono", monospace'
      },
      boxShadow: {
        'shadow' : '-50px -50px 100px 0px #272C5A'
      },
      transformOrigin: {
        'custom' : '50% 50%'
      }
    },
  },
  plugins: [],
}

