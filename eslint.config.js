import config from '@daotl/eslint-config'
import unocss from '@unocss/eslint-plugin'

export default [
  {
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
  },
  ...config(),
  unocss.configs.flat,
]
