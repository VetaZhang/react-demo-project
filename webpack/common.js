const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', 'css', 'less', 'scss'],
    modules: [
      path.resolve('src'),
      'node_modules',
    ],
    alias: {
      pages: path.resolve('./src/pages'),
      containers: path.resolve('./src/containers'),
      components: path.resolve('./src/components'),
      actions: path.resolve('./src/redux/actions'),
      reducers: path.resolve('./src/redux/reducers'),
      utils: path.resolve('./src/utils'),
    },
  },
  module: {
    rules: [
      
    ]
  },
};
