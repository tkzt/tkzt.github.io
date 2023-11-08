module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'space-before-function-paren': 'off',
    'max-len': 'off',
    'comma-dangle': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src/'],
        ],
      },
    },
  },
};
