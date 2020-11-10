const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', 'css', 'less', 'scss'],
    modules: [
      path.resolve('src'),
      'node_modules',
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      utils: path.resolve('./src/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(css|less|scss)$/,
        use: [
          {
            loader: "style-loader",
            options: {
              hmr: false
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path]_[name]_[local]_[hash:base64:5]'
            }
          },
          'less-loader'
        ],
      }
    ]
  },
};
