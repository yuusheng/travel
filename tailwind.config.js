const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lighter: '',
        light: '',
        theme: '#3f3fff',
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
      tdPadding: { main: 'padding: 1.5rem 1rem' },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme, addComponents }) {
      addBase({
        h1: { fontSize: theme('fontSize.2xl') },
        h2: { fontSize: theme('fontSize.xl') },
        h3: { fontSize: theme('fontSize.lg') },
        // td: { padding: theme('tdPadding.main') },
      }),
        addComponents({
          td: {
            padding: '0.7rem 1.2rem',
          },
          th: {
            padding: '0.8rem 1.2rem',
          },
          tr: {
            'border-bottom-width': '1px',
          },
        })
    }),
  ],
}
