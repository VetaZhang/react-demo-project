const { createESLint } = require('eslint-plugin-mylint');
const commonWebpackConfig = require('./webpack/common');

module.exports = [
  ...createESLint({
    projectType: 'browser',
    alias: commonWebpackConfig.resolve.alias,
  }),
  {
    rules: {
      //
    },
  },
  {
    ignores: [
      'webpack/**/*.js',
    ],
  }
];