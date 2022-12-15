/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '820px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1025px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }

        'navlg': '940px',
      },
      colors:{
        primarycolor: '#003D30',
        secondarycolor: '#AD343E',
        colorflipped:'#B83434',
      
        fontprimary: '#E0E0CE',
        fontsecondary: '#C7C7A8',
        fontbody: '#D7D7C1',
        fontaccent: '#AD343E',
        navhover: '#D7D7C1',
    
        buttoncolor: '#AD343E',
        buttonhover: '#DC4F4F',
        buttonfont: '#E5E7EB',
      }
    },
  },
  plugins: [],
}