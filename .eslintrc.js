/** @type {import('eslint').Linter.BaseConfig} */
const eslintConfig = {
  extends: ['next', 'next/core-web-vitals', 'prettier'],
  plugins: ['eslint-plugin-import-helpers'],
  rules: {
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^~/styles/',
          '/^react/',
          '/^next/',
          'module',
          '/^~/types/',
          '/^~/utils/',
          '/^~/libs/',
          '/^~/services/',
          '/^~/hooks/',
          '/^~/components/',
          '/^~/',
          ['parent', 'sibling', 'index']
        ],
        alphabetize: { order: 'asc', ignoreCase: true }
      }
    ]
  }
}

module.exports = eslintConfig
