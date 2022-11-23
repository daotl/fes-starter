module.exports = {
  root: true,
  extends: '@daotl/vue/typescript',
  rules: {
    'no-undef': 'off', // Turned off for `unplugin-auto-import`
    'eslint-comments/no-unlimited-disable': 'off',
  },
  overrides: [
    {
      files: '*.{ts,tsx,vue}',
      excludedFiles: ['*.mdx', '**/*.md/*.ts'],
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
    {
      files: 'index.vue',
      excludedFiles: ['*.mdx', '**/*.md/*.ts'],
      rules: {
        // Support `index.vue` with only a `<config>` tag
        'vue/valid-template-root': 'off',
      },
    },
  ],
}
