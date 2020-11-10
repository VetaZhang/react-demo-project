const os = require('os');
const webpack = require('webpack');
const path = require('path');
// const QiniuPlugin = require('qiniu-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merger = require('webpack-merge');
// const childProcess = require('child_process');
const commonWebpackConfig = require('./common');

// 不显示 DeprecationWarning
process.noDeprecation = true;

// const config = {
//   path: `ssr/${childProcess.execSync('git rev-parse HEAD').toString().replace(/\n/, '')}`,
//   cdn: 'http://cdn.com/',
// };

// // 这里配置 Qiniu Plugin
// const qiniuPlugin = new QiniuPlugin({
//   ACCESS_KEY: 'xxx',
//   SECRET_KEY: 'xxx',
//   bucket: 'bucket-name',
//   path: config.path,
//   include: [/(\.js|\.map)$/],
// });

const prodWebpackConfig = {
  mode: "production",
  devtool: 'eval',

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
    // publicPath: `${config.cdn}${config.path}`,
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
    // qiniuPlugin, 
  ],
};

module.exports = merger(commonWebpackConfig, prodWebpackConfig);