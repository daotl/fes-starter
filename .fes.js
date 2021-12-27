// .fes.js 只负责管理编译时配置，只能使用plain Object
import ESLintPlugin from 'eslint-webpack-plugin'
import StylelintPlugin from 'stylelint-webpack-plugin'
import AutoImportPlugin from 'unplugin-auto-import/webpack'

export default {
  publicPath: './',
  alias: {
    '~': '/src',
  },
  access: {
    roles: {
      admin: ['*'],
      manager: ['/'],
    },
  },
  layout: {
    title: 'Fes.js',
    footer: 'Created by MumbleFe',
    multiTabs: false,
    menus: [
      {
        name: 'index',
      },
    ],
  },
  devServer: {
    port: 8000,
  },
  enums: {
    status: [
      ['0', '无效的'],
      ['1', '有效的'],
    ],
  },
  chainWebpack(config) {
    config.plugin('eslint').use(ESLintPlugin, [
      {
        files: 'src/**/*.{js,ts,tsx,vue}',
      },
    ])
    config.plugin('stylelint').use(StylelintPlugin, [
      {
        extensions: ['css', 'scss', 'vue', 'tsx'],
      },
    ])
    config.plugin('auto-import').use(
      AutoImportPlugin({
        dts: './src/types/auto-imports.d.ts',
        include: [
          /src\/.+\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /src\/.+\.vue$/,
          /src\/.+\.vue\?vue/, // .vue
          /src\/.+\.md$/, // .md
        ],
        // global imports to register
        imports: [
          // presets
          'vue',
          'vue-router',
        ],
      }),
    )
  },
}
