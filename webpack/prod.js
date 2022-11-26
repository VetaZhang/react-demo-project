const os = require('os');
const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const merger = require('webpack-merge');
const commonWebpackConfig = require('./common');

// 不显示 DeprecationWarning
process.noDeprecation = true;

const prodWebpackConfig = {
  mode: "production",
  devtool: 'source-map',

  stats:{
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  },

  entry: {
    bundle: `${path.resolve()}/src/index.jsx`,
  },

  output: {
    path: `${path.resolve()}/dist`,
    filename: '[name].js',
    publicPath: '/',
    chunkFilename: '[name].[chunkhash:5].js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },

  optimization: {
    splitChunks: {
      chunks() {
        return false;
      },
    },
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new UglifyJsPlugin({
      sourceMap: true,
      parallel: os.cpus().length,
      uglifyOptions: {
        minimize: true,
        unused: true,
        ecma: 5,
        ie8: false,
        warnings: false,
      },
    }),
    new HTMLPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    }),
  ],
};

module.exports = merger(commonWebpackConfig, prodWebpackConfig);