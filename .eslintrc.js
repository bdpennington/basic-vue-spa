module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
  ],
  plugins: ['@typescript-eslint'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
  },
  rules: {
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'error',
    'vue/multi-word-component-names': 'off',
    // The following are formatting related, which I'm letting Prettier deal with it
    'max-len': 'off',
    'object-curly-spacing': 'off',
    indent: 'off',
    'quote-props': 'off',
    'comma-dangle': 'off',
  },
  overrides: [
    // Turned off these rules for test files so that the linter output
    // isn't so noisy about tests. Remove "overrides" if you want to re-enable
    {
      files: ['*.test.*', '*.spec.*'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
  ignorePatterns: ['**/*.json', '**/*.md', 'node_modules', 'dist'],
};
