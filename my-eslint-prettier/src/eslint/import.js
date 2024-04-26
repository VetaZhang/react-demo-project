const importPlugin = require('eslint-plugin-import');

module.exports = {
  languageOptions: {
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  plugins: {
    import: importPlugin
  },
  settings: {
    'import/parsers': {
      espree: ['.js', '.cjs', '.mjs', '.jsx'],
    },
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  rules: {
    ...importPlugin.configs.recommended.rules,

    'import/newline-after-import': ['error', { 'count': 1 }],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'pathGroups': [
          {
            'pattern': '@pages/**',
            'group': 'internal',
            'position': 'after'
          },{
            'pattern': '@containers/**',
            'group': 'internal',
            'position': 'after'
          },
          {
            'pattern': '@components/**',
            'group': 'internal',
            'position': 'after'
          },
          {
            'pattern': '@hooks/**',
            'group': 'internal',
            'position': 'after'
          },
          {
            'pattern': '@utils/**',
            'group': 'internal',
            'position': 'after'
          },
          {
            'pattern': './*.+(css|scss|sass|less)',
            'group': 'index',
            'position': 'after'
          }
        ],
      },
    ]
  },
};