const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', 'css', 'scss'],
    modules: [
      path.resolve('src'),
      'node_modules',
    ],
    alias: {
      containers: path.resolve('./src/containers'),
      components: path.resolve('./src/components'),
      utils: path.resolve('./src/utils'),
      hookRedux: path.resolve('./src/hookRedux'),
      reduxConfig: path.resolve('./src/redux'),
    },
  },
  module: {
    rules: [
      
    ]
  },
};
