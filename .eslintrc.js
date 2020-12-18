module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  globals: {},
  plugins: 'prettier',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'warn',
    'no-cond-assign': [2, 'except-parens'],
    'no-unused-vars': 0,
    'no-empty': ['error', { allowEmptyCatch: true }],
    'prefer-const': ['warn', { destructuring: 'all' }],
    'spaced-comment': 'warn'
  }
};
