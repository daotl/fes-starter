/* eslint-disable no-duplicate-imports */
// declare interface Window {
//   // extend the window
// }

// with vite-plugin-md, markdowns can be treat as Vue components
declare module '*.md' {
  import type { ComponentOptions } from 'vue'

  const component: ComponentOptions
  export default component
}

declare module '*.vue' {
  import Vue from 'vue'

  export default Vue
}
