const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        cppnWhite: '#D9E0EE',
        cppnGray: {
          1: '#988BA2',
          2: '#C3BAC6',
        },
        cppnBlack: {
          0: '#161320',
          1: '#1A1826',
          2: '#1E1E2E',
          3: '#302D41',
          4: '#575268',
        },
        lavender: '#C9CBFF',
        rosewater: '#F5E0DC',
        mauve: '#DDB6F2',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
