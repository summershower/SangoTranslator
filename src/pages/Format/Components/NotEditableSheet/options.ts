export default {
  lang: 'zh',
  container: 'formatSheetContainer',
  showinfobar: false,
  showtoolbar: false,
  showstatisticBar: false,
  enableAddRow: false,
  sheetFormulaBar: false,
  allowUpdate: false,
  allowEdit: false,
  showstatisticBarConfig: {
    count: false, // 计数栏
    view: false, // 打印视图
    zoom: false, // 缩放
  },
  showsheetbarConfig: {
    add: false, //新增sheet
    menu: false, //sheet管理菜单
    sheet: true, //sheet页显示
  },
  cellRightClickConfig: {
    copy: true, // 复制
    copyAs: true, // 复制为
    paste: false, // 粘贴
    insertRow: false, // 插入行
    insertColumn: false, // 插入列
    deleteRow: false, // 删除选中行
    deleteColumn: false, // 删除选中列
    deleteCell: false, // 删除单元格
    hideRow: false, // 隐藏选中行和显示选中行
    hideColumn: false, // 隐藏选中列和显示选中列
    rowHeight: false, // 行高
    columnWidth: false, // 列宽
    clear: false, // 清除内容
    matrix: false, // 矩阵操作选区
    sort: false, // 排序选区
    filter: false, // 筛选选区
    chart: false, // 图表生成
    image: false, // 插入图片
    link: false, // 插入链接
    data: false, // 数据验证
    cellFormat: false, // 设置单元格格式
  },
};
