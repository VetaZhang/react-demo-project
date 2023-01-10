// const purgecss = require('@fullhuman/postcss-purgecss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer,
    // purgecss({
    //   content: ['./src/**/*.jsx'],
    //   // css: ['./src/**/*.css']
    //   defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    // })
  ]
}