/* eslint-disable import/no-unresolved */

// .fes.js 只负责管理编译时配置，只能使用plain Object
// import Unocss from '@unocss/vite'
// import ESLintPlugin from 'eslint-webpack-plugin'
// import StylelintPlugin from 'stylelint-webpack-plugin'
import AutoImport from 'unplugin-auto-import/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

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
  viteOption: {
    server: {
      // Uncomment when running in a container
      // host: '0.0.0.0',
      port: 8000,
    },
    plugins: [
      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          'vue-i18n',
          'vue/macros',
          '@vueuse/head',
          '@vueuse/core',
        ],
        // auto import Element Plus functions
        resolvers: [ElementPlusResolver()],
        dts: 'src/types/auto-imports.d.ts',
      }),

      // https://github.com/antfu/unplugin-vue-components
      Components({
        // allow auto load markdown components under `./src/components/`
        extensions: ['vue', 'md'],
        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass',
          }),
        ],
        dts: 'src/types/components.d.ts',
      }),

      // https://github.com/element-plus/unplugin-element-plus/
      ElementPlus(),

      // https://github.com/unocss/unocss
      // see unocss.config.ts for config
      // Unocss(),
    ],
  },
  // chainWebpack(config) {
  // config.plugin('eslint').use(ESLintPlugin, [
  //   {
  //     files: 'src/**/*.{js,ts,tsx,vue}',
  //     fix: true,
  //   },
  // ])
  // config.plugin('stylelint').use(StylelintPlugin, [
  //   {
  //     extensions: ['css', 'scss', 'vue', 'tsx'],
  //     fix: true,
  //   },
  // ])

  // Temporary workaround for Element Plus + unplugin-vue-components bug when importing `v-loading`
  // See: https://github.com/element-plus/element-plus/issues/4855
  // config.externals({
  //   'element-plus/es/components/loading-directive/style/css': 'undefined',
  // })
  // },
}
