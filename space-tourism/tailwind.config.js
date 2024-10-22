/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './pages/**/*.html',
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
        'mobile-home' : "url('/assets/home/background-home-mobile.jpg')",
        'tablet-home' : "url('/assets/home/background-home-tablet.jpg')",
        'desktop-home' : "url('/assets/home/background-home-desktop.jpg')",
        'mobile-destination' : "url('/assets/destination/background-destination-mobile.jpg')",
        'tablet-destination' : "url('/assets/destination/background-destination-tablet.jpg')",
        'desktop-destination' : "url('/assets/destination/background-destination-desktop.jpg')",
        'mobile-crew' : "url('/assets/crew/background-crew-mobile.jpg')",
        'tablet-crew' : "url('/assets/crew/background-crew-tablet.jpg')",
        'desktop-crew' : "url('/assets/crew/background-crew-desktop.jpg')",
        'mobile-technology' : "url('/assets/technology/background-technology-mobile.jpg')",
        'tablet-technology' : "url('/assets/technology/background-technology-tablet.jpg')",
        'desktop-technology' : "url('/assets/technology/background-technology-desktop.jpg')",
      },
      colors: {
        'color1' : '#0B0D17',
        'text-white-blue' : '#D0D6F9',
        'text-black-blue' : '#0B0D17',
        'crew-btn' : '#979797'
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
      },
      gridTemplateColumns: {
        'tech-col' : '60% 40%'
      },
      boxShadow: {
        'shadow' : '5px 5px 10px 70px rgba(255, 255, 255, 0.1)'
      }
    },
  },
  plugins: [],
}

