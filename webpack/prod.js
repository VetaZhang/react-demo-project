const os = require("os");
const webpack = require("webpack");
const path = require("path");
// const glob = require("glob");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const HTMLPlugin = require("html-webpack-plugin");
const merger = require("webpack-merge");
const commonWebpackConfig = require("./common");

// 不显示 DeprecationWarning
process.noDeprecation = true;

const prodWebpackConfig = {
  mode: "production",
  devtool: "nosources-source-map",

  stats: {
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  },

  cache: {
    type: "filesystem",
    cacheDirectory: path.resolve(__dirname, ".cache"),
  },

  entry: {
    bundle: `${path.resolve()}/src/index.jsx`,
  },

  output: {
    path: `${path.resolve()}/dist`,
    filename: "[name].[contenthash:5].js",
    publicPath: "/",
    chunkFilename: "[name].[chunkhash:5].js",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          "babel-loader",
          {
            loader: "thread-loader",
            options: {
              worker: os.cpus().length,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName:
                  "css__module__[path]_[name]_[local]_[hash:base64:5]",
              },
            },
          },
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         [
          //           "@fullhuman/postcss-purgecss",
          //           {
          //             content: [
          //               ...glob.sync(
          //                 `${path.join(__dirname, "src")}/**/*.jsx`,
          //                 {
          //                   nodir: true,
          //                 }
          //               ),
          //             ],
          //           },
          //         ]
          //       ]
          //     }
          //   }
          // },
          "postcss-loader",
          "sass-loader",
        ],
        exclude: /node_modules/,
      },
    ],
  },

  optimization: {
    // 创建一个在所有生成 chunk 之间共享的运行时文件
    runtimeChunk: "single",
    usedExports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        // parallel: true,
        // terserOptions: {
        //   format: {
        //     comments: false,
        //   },
        // },
        // extractComments: false,
      }),
      new CssMinimizerPlugin(),
    ],

    // webpack 会根据一些条件自动拆分 chunks
    // 想要自定义这些规则，可配置 splitChunks
    splitChunks: {
      /**
       * 指定要进行代码分割的 chunk 类型
       * 'async' 默认值，只对异步导入的 chunk 进行分割，也就是 import() 导入
       * 'initial' 只对原始导入的 chunk 进行分割，也就是 import x from 'x' 导入
       * 'all' 以上两者均包括
       */
      chunks: "async",

      // 满足尺寸才发生拆分
      // 例如导入10kb的依赖包小于30kb便不会拆分代码块
      minSize: 30000,

      cacheGroups: {
        // 每个属性就是一个分组
        vendors: {
          chunks: "all",
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          minChunks: 1,
          minSize: 30000,
          priority: 10,
        },
      },
    },
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:5].css",
      chunkFilename: "[name].[chunkhash:5].css",
    }),
    // new PurgeCSSPlugin({
    //   paths: glob.sync(`${path.resolve(__dirname, "../src")}/**/*.jsx`, {
    //     nodir: true,
    //   }),
    //   // defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    //   // safelist: {
    //   //   deep: [/css__module__/],
    //   // }
    // }),
    new HTMLPlugin({
      template: path.resolve(__dirname, "../src/index.html"),
    }),
  ],
};

module.exports = merger(commonWebpackConfig, prodWebpackConfig);
