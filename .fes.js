// .fes.js 只负责管理编译时配置，只能使用plain Object
import ESLintPlugin from 'eslint-webpack-plugin'
import StylelintPlugin from 'stylelint-webpack-plugin'
import AutoImportPlugin from 'unplugin-auto-import/webpack'
import VueComponentsPlugin from 'unplugin-vue-components/webpack'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import IconsPlugin from 'unplugin-icons/webpack'
import IconsResolver from 'unplugin-icons/resolver'

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
    footer: 'Created by MumbleFE',
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
        fix: true,
      },
    ])
    config.plugin('stylelint').use(StylelintPlugin, [
      {
        extensions: ['css', 'scss', 'vue', 'tsx'],
        fix: true,
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
        resolvers: [ElementPlusResolver()],
      }),
    )
    config.plugin('vue-components').use(
      VueComponentsPlugin({
        dts: './src/types/components.d.ts',
        include: [
          /src\/.+\.vue$/,
          /src\/.+\.vue\?vue/, // .vue
        ],
        resolvers: [ElementPlusResolver(), IconsResolver()],
      }),
    )
    // Temporary workaround for Element Plus + unplugin-vue-components bug when importing `v-loading`
    // See: https://github.com/element-plus/element-plus/issues/4855
    config.externals({
      'element-plus/es/components/loading-directive/style/css': 'undefined',
    })

    config.plugin('icons').use(
      IconsPlugin({
        compiler: 'vue3',
        autoInstall: true, // expiremental
      }),
    )
  },
}
