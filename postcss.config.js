const path = require("path");
const glob = require("glob");
const purgecss = require("@fullhuman/postcss-purgecss");
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [
    autoprefixer,
    // purgecss({
    //   // content: glob.sync(`${path.resolve(__dirname, 'src')}/**/*`, { nodir: true }),
    //   content: [
    //     './src/**/*.jsx',
    //     './src/**/*.tsx'
    //   ],
    //   // css: [
    //   //   'src/**/*.css',
    //   //   'src/**/*.scss'
    //   // ],
    //   defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    //   // defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    // }),
  ],
};
