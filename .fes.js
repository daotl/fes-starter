// .fes.js 只负责管理编译时配置，只能使用plain Object

export default {
  publicPath: './',
  // TODO: `alias` doesn't support TS for now
  // alias: {
  //   '~': 'src',
  // },
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
}
