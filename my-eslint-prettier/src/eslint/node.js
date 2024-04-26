const globals = require('globals');
const js = require('@eslint/js');
const typescript = require('typescript-eslint');
const stylisticLint = require('./stylistic');
const importLint = require('./import');

const handleAlias = require('../utils/handleAlias');

const jsLint = js.configs.recommended;
const tsLint = typescript.configs.recommended;

module.exports = function(options = {}) {
  const { alias } = options;
  const aliasSettings = handleAlias(alias);

  return [
    jsLint,
    ...tsLint,
    stylisticLint,
    importLint,
    {
      files: [
        'src/**/*.js',
        'src/**/*.ts',
      ],
      languageOptions: {
        sourceType: 'module',
        // parserOptions: {
        //   ecmaFeatures: {
        //     jsx: true,
        //   },
        // },
        globals: {
          ...globals.es6,
          ...globals.node,
        },
      },
      rules: {
        eqeqeq: 'error',
        semi: 'error',
      },
    },
    {
      // 如果在配置对象中和 files 一起使用 ignores
      // 则只忽略 files 指定的目录和文件中符合 ignores 模式的文件
      // 如果在配置对象中没有任何其他键的情况下使用 ignores
      // 则当作是全局忽略。
      ignores: [
        'dist/**',
        'output/**',
        'build/**',
        'node_modules/**',
        '*.config.js',
      ],
    },
    {
      settings: {
        'import/resolver': {
          alias: aliasSettings,
        }
      }
    }
  ]
}