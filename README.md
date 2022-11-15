# fes-starter

A [fes.js](https://github.com/WeBankFinTech/fes.js) + Vite + TypeScript starter template.

## Technology stack

Basic:

- [pnpm](https://pnpm.io/) for efficient package management
- [TypeScript](https://www.typescriptlang.org/)
- [fes.js](https://github.com/WeBankFinTech/fes.js) based on [Vue 3](https://v3.vuejs.org/) and [Vite](https://vitejs.dev/)
- [JSX](https://v3.vuejs.org/guide/render-function.html#jsx) (optional, to replace Vue's template syntax)
- [SASS](https://sass-lang.com/) with [SCSS](https://sass-lang.com/documentation/syntax#scss) syntax for styling
- [ESLint](https://eslint.org/) with [@daotl/eslint-config-vue](https://github.com/daotl/web-style-configs#using-eslint-config) for linting
- [Prettier](https://prettier.io/) with [@daotl/prettier-config](https://github.com/daotl/web-style-configs#using-prettier-config) for code formatting
- [Stylelint](https://stylelint.io/) for linting CSS and SCSS

`master` branch:

- [Element Plus](https://element-plus.org/): component library
- [Pinia](https://pinia.vuejs.org/): state management
- [UnoCSS](https://github.com/unocss/unocss): atomic CSS library
- [Pure CSS icons with UnoCSS](https://github.com/unocss/unocss/tree/main/packages/preset-icons)

`antd` branch (not maintained):

- [Ant Design Vue](https://www.antdv.com/): component library

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
