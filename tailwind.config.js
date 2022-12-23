/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        // Accents
        accentTeal: '#4FC9B6',
        accentPink: '#EB8189',
        accentYellow: '#BCAF18',

        // Dark Mode {Default}
        dmText: '#EBEBEB',
        dmTextDim: '#CBCBCB',
        dmBg: '#080A18',

        // Light Mode
        lmText: '#0F153A',
        lmTextDim: '#1E2030',
        lmBg: '#FFFBD3',
      }
    },
  },
  plugins: [],
}
