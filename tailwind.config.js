const colors = require('tailwindcss/colors')
 
module.exports = {
  purge: [], // './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      blue : colors.blue,
      cyan : colors.cyan,
      green : colors.emerald,
      amber : colors.amber,
      pink : colors.pink,
      lightBlue : colors.lightBlue,
      purple : colors.purple,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    fontFamily: {
      "sans" : ['Noto Sans JP', 'Arial', 'sans-serif'],
      "serif" : ['Georgia', 'serif'],
      "monospace" : ['Courier New', 'monospace']
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    extend: {
      colors: {
        primary : "#7914b5",
        secondary : "#601a8a",
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
