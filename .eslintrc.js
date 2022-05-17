module.exports = {
  root: true,
  extends: '@daotl/vue/typescript',
  overrides: [
    {
      files: '*.{ts,tsx,vue}',
      excludedFiles: ['*.mdx', '**/*.md/*.ts'],
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
  ],
  rules: {
    'no-undef': 'off', // Turned off for `unplugin-auto-import`
    'eslint-comments/no-unlimited-disable': 'off',
  },
}
