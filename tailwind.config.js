module.exports = {
  purge: {
    mode: 'layers',
    content: ['./public/**/*.html', './public/**/*.js'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
