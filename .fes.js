/* eslint-disable import/no-unresolved */

// .fes.js 只负责管理编译时配置，只能使用plain Object
// import UnocssPlugin from '@unocss/webpack'
import ESLintPlugin from 'eslint-webpack-plugin'
import StylelintPlugin from 'stylelint-webpack-plugin'
import AutoImportPlugin from 'unplugin-auto-import/webpack'
import ElementPlusPlugin from 'unplugin-element-plus/webpack'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import VueComponentsPlugin from 'unplugin-vue-components/webpack'

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
  },
  devServer: {
    port: 8000,
  },
  chainWebpack(config) {
    // Needed for Element Plus 2.x, see: https://github.com/element-plus/element-plus/discussions/5657
    config.module
      .rule('element-plus')
      .test(/\.mjs$/i)
      .resolve.set('byDependency', { esm: { fullySpecified: false } })

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
        resolvers: [ElementPlusResolver()],
      }),
    )
    // Temporary workaround for Element Plus + unplugin-vue-components bug when importing `v-loading`
    // See: https://github.com/element-plus/element-plus/issues/4855
    config.externals({
      'element-plus/es/components/loading-directive/style/css': 'undefined',
    })

    config.plugin('element-plus').use(ElementPlusPlugin())

    // Temp: Disable UnoCSS until @unocss/webpack bug fixed:
    // https://github.com/unocss/unocss/issues/797
    // config.plugin('unocss').use(UnocssPlugin())
  },
}
