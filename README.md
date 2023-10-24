# fes-starter

A [fes.js](https://github.com/WeBankFinTech/fes.js) + Vite + TypeScript starter template.

Checkout the [`single-page` branch](https://github.com/daotl/fes-starter/tree/single-page) for single page apps like dashboards (no Vue Router)

## Technology stack

- ⚡️ [Vue 3](https://v3.vuejs.org/), [fes.js](https://github.com/WeBankFinTech/fes.js), [Vite 3](https://vitejs.dev/) - born with fastness
- 📦 [pnpm](https://pnpm.io/) for efficient package management
- 🦾 [TypeScript](https://www.typescriptlang.org/)
- ⭐ [JSX/TSX](https://v3.vuejs.org/guide/render-function.html#jsx) (optional, to replace Vue's template syntax)
- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)
- 🤙🏻 [Reactivity Transform](https://vuejs.org/guide/extras/reactivity-transform.html) enabled
- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly
- 📦 [Components auto importing](./src/components)
- 🔎 [Jump to component code](https://github.com/webfansplz/vite-plugin-vue-inspector)
- 🍍 [Pinia](https://pinia.vuejs.org/) - state management
- 🖌️ [SASS](https://sass-lang.com/) with [SCSS](https://sass-lang.com/documentation/syntax#scss) syntax for styling
- 🧰 [Element Plus](https://element-plus.org/) - component library
- 🎨 [UnoCSS](https://github.com/unocss/unocss) - the instant on-demand atomic CSS engine
- 😃 [Pure CSS icons with UnoCSS](https://github.com/unocss/unocss/tree/main/packages/preset-icons) - Use icons from any icon sets with classes
- 🛠️ [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs
- 💪 [Lefthook](https://github.com/evilmartians/lefthook) for linting codes on commit
- ✔️ [ESLint](https://eslint.org/) with [@daotl/eslint-config-vue](https://github.com/daotl/web-style-configs#using-eslint-config) for linting
- ✔️ [Prettier](https://prettier.io/) with [@daotl/prettier-config](https://github.com/daotl/web-style-configs#using-prettier-config) for code formatting
- ✔️ [Stylelint](https://stylelint.io/) for linting CSS and SCSS

## Project setup

```shell
npm install -g @fesjs/create-fes-app
pnpm install
```

### Compiles and hot-reloads for development

```shell
npm run dev
```

### Compiles and minifies for production

```shell
npm run prod
```

### Lint & fix

```shell
npm run lint
npm run lint:fix
```

See [Fes.js CLI docs](https://winixt.gitee.io/fesjs/zh/reference/cli/) and [package.json](./package.json) for more.

## Guides & References

### Must-read

Read the following must-read to understand the technology stack of this template.

- [Fes.js Docs](https://winixt.gitee.io/fesjs/zh/guide/)
- [\<script setup> RFC](https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md)
- [What is Vue 3 Reactivity?](https://v3.vuejs.org/guide/reactivity.html#what-is-reactivity)
- [Vue 3 Reactivity API](https://v3.vuejs.org/api/reactivity-api.html)
- [Vue 3 Composition API](https://v3.vuejs.org/api/composition-api.html)
- [Vue 3 TypeScript Support](https://v3.vuejs.org/guide/typescript-support.html#annotating-props)
- [Using Vue 3 with JSX and TypeScript](https://bypaulshen.com/posts/vue-3-jsx-typescript)
- [Vue Style Guide](https://v3.vuejs.org/style-guide/)

### Recommended

- [Explaining The New script setup Type in Vue 3 – Major Takeaways from the RFC](https://learnvue.co/2021/05/explaining-the-new-script-setup-type-in-vue-3-major-takeaways-from-the-rfc/)
- [New script setup (without ref sugar)](https://github.com/vuejs/rfcs/pull/227)
- [探索 Vue 3 中的 JSX](https://juejin.cn/post/6965057432544346143)
