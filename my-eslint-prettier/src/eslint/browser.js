const globals = require('globals');
const js = require('@eslint/js');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const typescript = require('typescript-eslint');
const stylisticLint = require('./stylistic');
const importLint = require('./import');

const handleAlias = require('../utils/handleAlias');

const jsLint = js.configs.recommended;
const reactLint = {
  plugins: {
    'react': react,
  },
  rules: react.configs.recommended.rules
};
const reactHookLint = {
  plugins: {
    'react-hooks': reactHooks
  },
  rules: reactHooks.configs.recommended.rules
};

const tsLint = typescript.configs.recommended;

module.exports = function (options) {
  const { alias } = options;
  const aliasSettings = handleAlias(alias);

  return [
    jsLint,
    reactLint,
    reactHookLint,
    ...tsLint,
    stylisticLint,
    importLint,
    {
      files: [
        'src/**/*.js',
        'src/**/*.jsx',
        'src/**/*.ts',
        'src/**/*.tsx',
      ],
      languageOptions: {
        sourceType: 'module',
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
        globals: {
          ...globals.browser,
          ...globals.es6,
        },
      },
      plugins: {
        'react': react,
        'react-hooks': reactHooks
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
  ];
}