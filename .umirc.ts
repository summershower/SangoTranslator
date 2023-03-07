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
      name: '开发',
      path: '/dev',
      component: './DevAssistance',
      icon: 'CodeSandboxOutlined',
    },
    // {
    //   name: '历史',
    //   path: '/history',
    //   component: './History',
    //   icon: 'FieldTimeOutlined',
    // },
    // {
    //   name: '权限',
    //   path: '/permissions',
    //   component: './Permissions',
    //   icon: 'UsergroupAddOutlined',
    // },
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
  clickToComponent: { editor: 'vscode' }, // 点击Alt+Click跳转到源码位置
  favicons: ['https://cdn.meiqijiacheng.com/h5-deploy/favicon.ico'], // 网站图标
  links: [
    // 引入luckysheet样式文件
    {
      href: '/css/pluginsCss.css',
      rel: 'stylesheet',
    },
    {
      href: '/css/plugins.css',
      rel: 'stylesheet',
    },
    {
      href: '/css/luckysheet.css',
      rel: 'stylesheet',
    },
    {
      href: '/css/iconfont.css',
      rel: 'stylesheet',
    },
    //
    // 引入diff2html样式文件
    {
      href: '/css/diff2html.min.css',
      rel: 'stylesheet',
    },
  ],
  headScripts: [
    // 引入luckysheet文件，页面渲染后回立即创建表格，需要阻塞加载
    {
      src: '/js/plugin.js',
    },
    {
      src: '/js/luckysheet.umd.js',
    },
    // 引入diff2html文件
    {
      src: '/js/diff2html-ui.min.js',
    },
  ],
  // 部署Git Page相关配置
  // base: process.env.NODE_ENV === 'production' ? '/SangoTranslator/' : '/',
  // publicPath: process.env.NODE_ENV === 'production' ? '/SangoTranslator/' : '/',
  // outputPath: 'docs',
  // Terser压缩默认打包es2015目标产物, lint模块需要使用更新的语法
  jsMinifierOptions: {
    target: ['es2019'],
  },
  // 解决Git page刷新404的问题
  // copy: [
  //   {
  //     from: '404.html',
  //     to: 'docs/',
  //   },
  // ],
});
