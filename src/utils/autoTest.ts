// 检验JS文件是否有效，检验各语言行数和KEY值是否一致
export function autoTest(rawStr: string): Promise<boolean | string> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    const testScriptText =
      rawStr +
      `
       try {
        const key = [];
        Object.entries(lang_en).forEach(([key,value], index)=>{
            key.push(key);
        })
        Object.entries(lang_zh).forEach(([key,value], index)=>{
            if(key[index] !== key) throw new Error('阿语KEY值不一致');
        })
        Object.entries(lang_ar).forEach(([key,value], index)=>{
            if(key[index] !== key) throw new Error('阿语KEY值不一致')
        })
        Object.entries(lang_ur).forEach(([key,value], index)=>{
            if(key[index] !== key) throw new Error('阿语KEY值不一致');
        })
        Object.entries(lang_tr).forEach(([key,value], index)=>{
            if(key[index] !== key) throw new Error('土耳其KEY值不一致');
        })
        
       } catch(err) {
        throw new Error(err);
       }
        `;
    script.innerHTML = testScriptText;
    script.type = 'module';
    const iframe = document.createElement('iframe');
    console.log(213);
    iframe.onerror = (err) => {
      console.log('报错了');
      reject(err);
    };
    iframe.onload = () => {
      console.log('加载ed');
      try {
        document.body.appendChild(script);
        resolve(true);
      } catch (e) {
        console.log(e);
      }
    };
    document.body.appendChild(iframe);
  });
}
