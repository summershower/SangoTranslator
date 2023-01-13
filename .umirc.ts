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
      name: '表格',
      path: '/sheet',
      component: './Sheet',
      icon: 'TableOutlined',
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
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'pnpm',
  alias: {
    img: 'src/assets/images',
    comp: 'src/components',
    pages: 'src/pages',
  }, // 路径别名
  clickToComponent: { editor: 'vscode' }, // 点击Alt+Click跳转到源码位置
  favicons: ['https://cdn.meiqijiacheng.com/h5-deploy/favicon.ico'], // 网站图标
});
