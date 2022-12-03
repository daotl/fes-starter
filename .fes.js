/* eslint-disable import/no-unresolved */
import path from 'node:path'

import Unocss from '@unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import Inspect from 'vite-plugin-inspect'
import Preview from 'vite-plugin-vue-component-preview'
import Inspector from 'vite-plugin-vue-inspector'

// .fes.js 只负责管理编译时配置，只能使用plain Object
export default {
  publicPath: './',
  alias: {
    '~': '/src',
  },
  viteVuePlugin: {
    reactivityTransform: path.resolve(__dirname, 'src'),
  },
  viteOption: {
    resolve: {
      // Fix issue when component libraries in the workspace are using different versions of deps like Vue
      // See: https://github.com/vuejs/core/issues/4344#issuecomment-1023220225
      dedupe: ['vue', 'vue-i18n', 'vue-router', 'element-plus'],
    },
    server: {
      // Uncomment when running in a container
      // host: '0.0.0.0',
      port: 8000,
    },
    plugins: [
      Preview(),

      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          'vue-i18n',
          // This will cause error when importing component libraries:
          // `Uncaught SyntaxError: The requested module '/.cache/deps/vue_macros.js?v=5b94560e' does not provide an export named '$$' (at index.532b0e7b.js:1:10)`
          // 'vue/macros',
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
      Unocss(),

      // https://github.com/antfu/vite-plugin-inspect
      // Visit http://localhost:3333/__inspect/ to see the inspector
      Inspect(),

      // https://github.com/webfansplz/vite-plugin-vue-inspector
      Inspector({
        enabled: true,
        toggleComboKey: 'control-i',
      }),
    ],
  },
}
