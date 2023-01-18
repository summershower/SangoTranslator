import { defineConfig } from '@umijs/max';
// 构建时配置
export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'Sango翻译平台',
  },
  routes: [
    {
      path: '/',
      redirect: '/sheet',
    },
    {
      name: '文案',
      path: '/sheet',
      component: './Sheet',
      icon: 'TableOutlined',
    },
    {
      name: '格式化',
      path: '/format',
      component: './Format',
      icon: 'CodeOutlined',
    },
    {
      name: '推送',
      path: '/push',
      component: './Push',
      icon: 'CloudUploadOutlined',
    },
    {
      name: '历史',
      path: '/history',
      component: './History',
      icon: 'HistoryOutlined',
    },
    {
      name: '权限',
      path: '/permissions',
      component: './Permissions',
      icon: 'UsergroupAddOutlined',
    },
    // {
    //   name: '首页',
    //   path: '/home',
    //   component: './Home',
    // },
    // {
    //   name: '权限演示',
    //   path: '/access',
    //   component: './Access',
    // },
    // {
    //   name: ' CRUD 示例',
    //   path: '/table',
    //   component: './Table',
    // },
  ],
  npmClient: 'pnpm',
  alias: {
    img: '/src/assets/images',
    comp: '/src/components',
    pages: '/src/pages',
    utils: '/src/utils',
  }, // 路径别名
  clickToComponent: { editor: 'vscode' }, // 点击Alt+Click跳转到源码位置
  favicons: ['https://cdn.meiqijiacheng.com/h5-deploy/favicon.ico'], // 网站图标
  links: [
    {
      href: 'https://cdn.jsdelivr.net/npm/luckysheet@latest/dist/plugins/css/pluginsCss.css',
      rel: 'stylesheet',
    },
    {
      href: 'https://cdn.jsdelivr.net/npm/luckysheet@latest/dist/plugins/plugins.css',
      rel: 'stylesheet',
    },
    {
      href: 'https://cdn.jsdelivr.net/npm/luckysheet@latest/dist/css/luckysheet.css',
      rel: 'stylesheet',
    },
    {
      href: 'https://cdn.jsdelivr.net/npm/luckysheet@latest/dist/assets/iconfont/iconfont.css',
      rel: 'stylesheet',
    },
  ], // 引入luckysheet样式文件
  headScripts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/luckysheet@latest/dist/plugins/js/plugin.js',
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/luckysheet@latest/dist/luckysheet.umd.js',
    },
  ], // 引入luckysheet JS文件，页面渲染后回立即创建表格，需要阻塞加载
});
