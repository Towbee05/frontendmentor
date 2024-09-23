/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    extend: {
      screens : {
        tablet : {
          min : "750px",
          max: "1200px"
        }, 
        laptop : {
          min : "1200px"
        }
      },
      backgroundImage : {
        'mobile' : "url('/assets/home/background-home-mobile.jpg')",
        'tablet' : "url('/assets/home/background-home-tablet.jpg')",
        'desktop' : "url('/assets/home/background-home-desktop.jpg')"
      },
      colors: {
        'color1' : '#0B0D17',
        'text-white-blue' : '#D0D6F9',
        'text-black-blue' : '#0B0D17',
      },
      fontFamily : {
        'family1' : '"Barlow Condensed", sans-serif',
        "family2" : '"Bellefair", serif'
      },
      height : {
        'custom-height' : 'calc(100vh - 96px)', 
        'custom-height-2' : 'calc(100vh - 136px)' 
      },
      padding: {
        30 : '120px'
      },
      width: {
        'custom-width' : 'calc(100% - 128px)',
        'custom-width-2' : 'calc(100% + 12px)'
      }
    },
  },
  plugins: [],
}

