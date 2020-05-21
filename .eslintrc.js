module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: 'babel-eslint',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {},
  rules: {
    indent: ['error', 2, {
      MemberExpression: 0,
    }],
    'arrow-parens': ['error', 'as-needed'],
    'no-param-reassign': ['error', {
      props: false,
    }],
    'max-len': ['error', { code: 140 }],
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
    'class-methods-use-this': [0],
    'no-else-return': ['error', { allowElseIf: true }],
  },
  overrides: [
    {
      files: ['test/**'],
      env: {
        mocha: true,
      },
      extends: [
        'plugin:mocha/recommended',
      ],
      plugins: [
        'mocha',
      ],
      rules: {
        'prefer-arrow-callback': [0],
        'func-names': [0],
        'no-unused-expressions': [0],
      },
    },
  ],
};
