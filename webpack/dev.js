
const path = require('path');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const merger = require('webpack-merge');
const commonWebpackConfig = require('./common');

const devWebpackConfig = {
  target: 'web',
  mode: 'development',
  devtool: 'eval',
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 4000,
  },
  stats:{
    modules: true,
    children: true,
    chunks: true,
    chunkModules: true
  },
  entry: {
    bundle: [
      `${path.resolve()}/src/index.jsx`,
    ],
  },
  output: {
    path: path.resolve(),
    filename: '[name].js',
    publicPath: '/',
    chunkFilename: '[name].[chunkhash:5].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [require.resolve('react-refresh/babel')],
            },
          },
        ],
        exclude: /node_modules/
      }, 
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
    new ReactRefreshWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new HTMLPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    })
  ],
};

module.exports = merger(commonWebpackConfig, devWebpackConfig);

