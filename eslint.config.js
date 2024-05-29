const config = require('@daotl/eslint-config')
const unocss = require('@unocss/eslint-plugin')

module.exports = config.default({
  ignores: [
    'cypress',
    '!.fes.js',
    '!.stylelintrc.js',
    'docker',
    'k8s',
    'src/.fes',
    'src/.fes-production',
    '*/sw.js',
    'scripts',
  ],
}, unocss.configs.flat)
