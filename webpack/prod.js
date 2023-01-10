const os = require('os');
const webpack = require('webpack');
const path = require('path');
// const glob = require('glob');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const merger = require('webpack-merge');
const commonWebpackConfig = require('./common');

// 不显示 DeprecationWarning
process.noDeprecation = true;

const prodWebpackConfig = {
  mode: "production",
  devtool: 'nosources-source-map',

  stats:{
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  },
  
  cache: {
    type: 'filesystem',
  },

  entry: {
    bundle: `${path.resolve()}/src/index.jsx`,
  },

  output: {
    path: `${path.resolve()}/dist`,
    filename: '[name].js',
    publicPath: '/',
    chunkFilename: '[name].[chunkhash:5].js',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(css|less|scss)$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path]_[name]_[local]_[hash:base64:5]',
              },
            }
          },
          'less-loader',
          'postcss-loader'
        ],
      }
    ]
  },

  optimization: {
    runtimeChunk: 'single',
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
      new CssMinimizerPlugin(),
    ],
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
    new MiniCssExtractPlugin(),
    // new PurgeCSSPlugin({
    //   paths: glob.sync(`${path.resolve(__dirname, 'src')}/**/*`),
    // }),
    new HTMLPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    }),
  ],
};

module.exports = merger(commonWebpackConfig, prodWebpackConfig);