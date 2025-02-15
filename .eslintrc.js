module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['react-app', 'plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['eslint-plugin-simple-import-sort'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'prefer-const': ['error', { destructuring: 'all' }],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    curly: ['error', 'multi-line', 'consistent'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, varsIgnorePattern: 'jsx|^_', argsIgnorePattern: '^_' },
    ],
  },
};
