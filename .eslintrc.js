module.exports = {
  root: true,
  extends: ['@daotl/eslint-config-vue/typescript'],
  parserOptions: {
    project: 'tsconfig.json',
  },
  rules: {
    'vue/multi-word-component-names': 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
