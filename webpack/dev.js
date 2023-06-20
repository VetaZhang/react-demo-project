
const path = require('path');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const WebpackBar = require('webpackbar');
const HTMLPlugin = require('html-webpack-plugin');
const merger = require('webpack-merge');
const commonWebpackConfig = require('./common');

// 不显示 DeprecationWarning
process.noDeprecation = true;

// 若使用 SpeedMeasurePlugin，会导致热更新后刷新页面报错
// 报错内容：Cannot set properties of undefined (setting 'runtime')
// const smp = new SpeedMeasurePlugin();

const devWebpackConfig = {
  target: 'web',
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 4000,
  },
  stats: 'normal',
  cache: {
    type: 'filesystem',
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
      {
        test: /\.(css|less|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path]_[name]_[local]_[hash:base64:5]',
              },
            }
          },
          'less-loader'
        ],
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
    new WebpackBar(),
    new ReactRefreshWebpackPlugin(),
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

// module.exports = smp.wrap(merger(commonWebpackConfig, devWebpackConfig));
module.exports = merger(commonWebpackConfig, devWebpackConfig);
