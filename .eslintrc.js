module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  extends: 'prettier',
  // required to lint *.vue files
  plugins: ['html'],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      // TODO: Need to figure out how to get imports to not throw eslint errors
      node: {
        paths: ['pages', 'components'],
      },
    },
  },
  // add your custom rules here
  rules: {
    'space-before-function-paren': 0,
    // don't require .vue extension when importing
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'never',
      },
    ],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
  env: {
    browser: true,
  },
};
