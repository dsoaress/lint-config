'use strict';

module.exports = {
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier', 'simple-import-sort'],
  rules: {
    'prettier/prettier': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-unused-vars': 'warn'
  }
}
