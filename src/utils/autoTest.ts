// 检验JS文件是否有效，检验各语言行数和KEY值是否一致(无法校验JS文件语法错误，语法错误由codemirror lint提前完成)
export function autoTest(
  rawStr: string,
  mode: 'JS' | 'JSON',
): Promise<boolean | string> {
  return new Promise((resolve, reject) => {
    if (mode === 'JS') {
      try {
        const script = document.createElement('script');
        const testScriptText =
          rawStr +
          `\rtry {
        const enKeys = Object.keys(lang_en);
        const arKeys = Object.keys(lang_ar);
        const zhKeys = Object.keys(lang_zh);
        const trKeys = Object.keys(lang_tr);
        const urKeys = Object.keys(lang_ur);
        const inKeys = Object.keys(lang_in);
        if(enKeys.length !== arKeys.length) {
          throw new Error('阿语KEY数量有误, 英语KEY:' + enKeys.length + ',阿语KEY:'+arKeys.length );
        }
        if(enKeys.length !== zhKeys.length) {
          throw new Error('中文KEY数量有误, 英语KEY:' + enKeys.length + ',中文KEY:'+zhKeys.length );
        }
        if(enKeys.length !== urKeys.length) {
          throw new Error('乌尔都语KEY数量有误, 英语KEY:' + enKeys.length + ',乌尔都语KEY:'+urKeys.length );
        }
        if(enKeys.length !== trKeys.length) {
          throw new Error('土耳其语KEY数量有误, 英语KEY:' + enKeys.length + ',土耳其语KEY:'+trKeys.length );
        }
        if(enKeys.length !== inKeys.length && inKeys.length) {
          throw new Error('印尼语语KEY数量有误, 英语KEY:' + enKeys.length + ',印尼语语KEY:'+inKeys.length );
        }
        Object.entries(lang_zh).forEach(([key,value], index)=>{
          if(enKeys[index] !== key) throw new Error('中文KEY值不一致:'+enKeys[index] + '!==' + key);
          if(typeof value !== 'string') throw new Error('中文VALUE类型有误, 请检查该KEY值:'+enKeys[index]);
          if (!/^[a-zA-Z]+[a-zA-Z0-9_]*/.test(key)) throw new Error('KEY有误, 只能由英文/数字/下划线构成:' + enKeys[index]);
        })
        Object.entries(lang_ar).forEach(([key,value], index)=>{
          if(enKeys[index] !== key) throw new Error('阿语KEY值不一致:'+enKeys[index] + '!==' + key);
          if(typeof value !== 'string') throw new Error('阿语VALUE类型有误, 请检查该KEY值:'+enKeys[index]);
        })
        Object.entries(lang_ur).forEach(([key,value], index)=>{
          if(enKeys[index] !== key) throw new Error('乌尔都KEY值不一致:'+enKeys[index] + '!==' + key);
          if(typeof value !== 'string') throw new Error('乌尔都VALUE类型有误, 请检查该KEY值:'+enKeys[index]);
        })
        Object.entries(lang_tr).forEach(([key,value], index)=>{
          if(enKeys[index] !== key) throw new Error('乌尔都KEY值不一致:'+enKeys[index] + '!==' + key);
          if(typeof value !== 'string') throw new Error('乌尔都VALUE类型有误, 请检查该KEY值:'+enKeys[index]);
        })
        Object.entries(lang_in).forEach(([key,value], index)=>{
          if(enKeys[index] !== key) throw new Error('印尼语KEY值不一致:'+enKeys[index] + '!==' + key);
          if(typeof value !== 'string') throw new Error('印尼语VALUE类型有误, 请检查该KEY值:'+enKeys[index]);
        })
        window.iframePassedTest();
       } catch(err) {
        window.iframeGlobalErrorHandler(err);
       }
        `;
        script.innerHTML = testScriptText;
        script.type = 'module';
        const iframe = document.createElement('iframe');
        iframe.style.position = 'absolute';
        iframe.style.zIndex = '-1';
        iframe.style.top = '-9999px';
        iframe.style.width = '1px';
        iframe.style.height = '1px';
        function iframeOnLoad() {
          try {
            document.body.appendChild(script);
            setTimeout(() => {
              // 超过3秒视作代码报错，直接reject
              (window as any).iframeGlobalErrorHandler(
                '测试超时，请打开控制台查看代码错误',
              );
            }, 3000);
          } catch (err) {
            reject(err);
          }
        }
        iframe.onload = iframeOnLoad;
        iframe.onerror = (err: string | Event) => {
          reject(err);
        };
        (window as any).iframeGlobalErrorHandler = (err: Error) => {
          reject(err);
        };
        (window as any).iframePassedTest = () => {
          resolve(true);
          document.body.removeChild(iframe);
        };
        document.body.appendChild(iframe);
      } catch (err) {
        reject(err);
      }
    } else {
      try {
        const obj = JSON.parse(rawStr);
        const enKeys = Object.keys(obj.en);
        const arKeys = Object.keys(obj.ar);
        const zhKeys = Object.keys(obj.zh);
        const trKeys = Object.keys(obj.tr);
        const urKeys = Object.keys(obj.ur);
        const inKeys = Object.keys(obj.in);
        if (enKeys.length !== arKeys.length) {
          reject(
            '阿语KEY数量有误, 英语KEY:' +
              enKeys.length +
              ',阿语KEY:' +
              arKeys.length,
          );
        }
        if (enKeys.length !== zhKeys.length) {
          reject(
            '中文KEY数量有误, 英语KEY:' +
              enKeys.length +
              ',中文KEY:' +
              zhKeys.length,
          );
        }
        if (enKeys.length !== urKeys.length) {
          reject(
            '乌尔都语KEY数量有误, 英语KEY:' +
              enKeys.length +
              ',乌尔都语KEY:' +
              urKeys.length,
          );
        }
        if (enKeys.length !== trKeys.length) {
          reject(
            '土耳其语KEY数量有误, 英语KEY:' +
              enKeys.length +
              ',土耳其语KEY:' +
              trKeys.length,
          );
        }
        if (enKeys.length !== inKeys.length && inKeys.length) {
          reject(
            '印尼语KEY数量有误, 英语KEY:' +
              enKeys.length +
              ',印尼语KEY:' +
              inKeys.length,
          );
        }
        Object.entries(obj.zh).forEach(([key, value], index) => {
          if (enKeys[index] !== key)
            reject('中文KEY值不一致:' + enKeys[index] + '!==' + key);
          if (typeof value !== 'string')
            reject('中文VALUE有误, 请检查该KEY值:' + enKeys[index]);
          if (!/^[a-zA-Z]+[a-zA-Z0-9_]*/.test(key))
            reject('KEY有误, 只能由英文/数字/下划线构成:' + enKeys[index]);
        });
        Object.entries(obj.ar).forEach(([key, value], index) => {
          if (enKeys[index] !== key)
            reject('阿语KEY值不一致:' + enKeys[index] + '!==' + key);
          if (typeof value !== 'string')
            reject('阿语VALUE有误, 请检查该KEY值:' + enKeys[index]);
        });
        Object.entries(obj.ur).forEach(([key, value], index) => {
          if (enKeys[index] !== key)
            reject('乌尔都KEY值不一致:' + enKeys[index] + '!==' + key);
          if (typeof value !== 'string')
            reject('乌尔都VALUE类型有误, 请检查该KEY值:' + enKeys[index]);
        });
        Object.entries(obj.tr).forEach(([key, value], index) => {
          if (enKeys[index] !== key)
            reject('乌尔都语KEY值不一致:' + enKeys[index] + '!==' + key);
          if (typeof value !== 'string')
            reject('乌尔都语VALUE类型有误, 请检查该KEY值:' + enKeys[index]);
        });
        Object.entries(obj.in).forEach(([key, value], index) => {
          if (enKeys[index] !== key)
            reject('印尼语KEY值不一致:' + enKeys[index] + '!==' + key);
          if (typeof value !== 'string')
            reject('印尼语VALUE类型有误, 请检查该KEY值:' + enKeys[index]);
        });
        resolve(true);
      } catch (e) {
        reject('Parse解析JSON文件报错');
      }
    }
  });
}
