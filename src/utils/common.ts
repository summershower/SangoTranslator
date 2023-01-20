import { message } from 'antd';
export function copy(text: string): void {
  try {
    const textarea = document.createElement('textarea'); // js创建一个input输入框
    textarea.value = text; // 将需要复制的文本赋值到创建的input输入框中
    document.body.appendChild(textarea); // 将输入框暂时创建到实例里面
    textarea.setAttribute('readonly', 'readonly'); // 防止移动端弹起键盘
    textarea.setSelectionRange(0, textarea.value.length); // ios保证选区正确
    textarea.select(); // 选中输入框中的内容
    document.execCommand('Copy'); // 执行复制操作
    document.body.removeChild(textarea); // 最后删除实例中临时创建的input输入框，完成复制操作
    message.success('复制成功');
  } catch (e) {
    message.error('复制失败');
  }
}
export function sleep(ms: number): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, ms || 1000);
  });
}
function exportFile(
  rawText: string,
  type: 'javascript' | 'json',
  ext: 'json' | 'js',
) {
  try {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(
      new Blob([rawText], {
        type: `text/${type}`,
      }),
    );
    a.setAttribute('download', `lang.${ext}`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    message.success('已开始下载');
  } catch (e) {
    console.log(e);
    message.error('转换失败');
  }
}
export function exportJSON(rawText: string) {
  exportFile(rawText, 'json', 'json');
}
export function exportJS(rawText: string) {
  exportFile(rawText, 'javascript', 'js');
}
