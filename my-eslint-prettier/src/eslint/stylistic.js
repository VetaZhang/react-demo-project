const stylistic = require('@stylistic/eslint-plugin');

module.exports = {
  plugins: {
    '@stylistic': stylistic
  },

  // rules: https://eslint.style/rules/default/array-bracket-newline
  rules: {
    'indent': ['error', 2],
    '@stylistic/indent': ['error', 2],
    '@stylistic/semi': 'error'
  }
};