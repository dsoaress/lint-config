'use strict'

module.exports = {
  extends: ['plugin:sonarjs/recommended', 'plugin:prettier/recommended'],
  plugins: ['sonarjs', 'prettier', 'simple-import-sort'],
  rules: {
    'prettier/prettier': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-unused-vars': 'error'
  }
}
