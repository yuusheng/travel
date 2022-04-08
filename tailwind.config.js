const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lighter: '',
        light: '',
        theme: '#3f3fff',
        xl: '#4145AA',
        xxl: '#3B3F9B',
        secondary: '#9F9FFF',
        bg: '#E7E7FF',
        're-theme': '#EAA031',
        contract: '#f5c242',
        body: '#17171f',
        'selected-text': '#a3a3ff',
        'second-text': '#ccc',
        nav: '#404053',
      },
      backgroundImage: {
        main: "url('/src/assets/img/main.jpeg')",
      },
      fontFamily: {
        popins: ['Poppins', 'sans-serif'],
        dancing: ['Dancing Script'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme('fontSize.2xl') },
        h2: { fontSize: theme('fontSize.xl') },
        h3: { fontSize: theme('fontSize.lg') },
      })
    }),
  ],
}
