// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '用户名' };
}

export const layout = () => {
  return {
    logo: 'https://cdn.meiqijiacheng.com/web/icon-f55c6fa7f.png',
    siderWidth: 200,
    menu: {
      locale: false,
    },
    onCollapse: () => {},
  };
};
