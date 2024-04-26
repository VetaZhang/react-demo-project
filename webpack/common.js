const path = require('path');
const webpack = require("webpack");

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
  plugins: [
    new webpack.ProvidePlugin({
      // dayjs: 'dayjs',
      // utils: path.resolve(__dirname, 'src/utils.js')
      /*
      如果使用了TS，记得配置下类型：
      // globals.d.ts文件 处理全局类型
      import dayjs from 'dayjs';
      declare global {
        const dayjs: typeof dayjs;
      }

      // tsconfig.json文件 也配置一下
      { 
        "compilerOptions": { 
          // 编译选项... 
        }, 
        "include": [
          ...
          "globals.d.ts" // 确保 TypeScript 包括这个文件
        ] 
      } */
    }),
  ]
};
