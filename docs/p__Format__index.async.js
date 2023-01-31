"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[142],{58946:function(de,U,e){var i=e(93236);U.Z=function(){(0,i.useEffect)(function(){var d=document.querySelector(".ant-pro-layout-content");return d==null||d.classList.add("noPadding"),function(){d==null||d.classList.remove("noPadding")}},[])}},14124:function(de,U,e){e.r(U),e.d(U,{default:function(){return qe}});var i=e(46686),d=e.n(i),q=e(30279),D=e.n(q),b=e(93236),H={lang:"zh",container:"formatSheetContainer",showinfobar:!1,showtoolbar:!1,showstatisticBar:!1,enableAddRow:!1,sheetFormulaBar:!1,allowUpdate:!1,allowEdit:!1,showstatisticBarConfig:{count:!1,view:!1,zoom:!1},showsheetbarConfig:{add:!1,menu:!1,sheet:!0},cellRightClickConfig:{copy:!0,copyAs:!0,paste:!1,insertRow:!1,insertColumn:!1,deleteRow:!1,deleteColumn:!1,deleteCell:!1,hideRow:!1,hideColumn:!1,rowHeight:!1,columnWidth:!1,clear:!1,matrix:!1,sort:!1,filter:!1,chart:!1,image:!1,link:!1,data:!1,cellFormat:!1}},_=e(2773),K={formatSheetContainer:"formatSheetContainer___D7hLZ"},n=e(62086),A=function(y){var J=y.setIsLoadedSheet,s=y.formatSheet,w=(0,b.useRef)(null),u={sheetActivate:function(v){s(v)}};return(0,b.useEffect)(function(){(0,_.zK)().then(function(){var S=D()(D()({},H),{},{hook:u});(0,_.ij)().then(function(v){v&&(S.data=v),window.luckysheet.create(S),J(!0)})}).catch(function(){alert("failed")})},[]),(0,n.jsx)("div",{className:K.formatSheetContainer,id:"formatSheetContainer",ref:w})},L=A,a=e(35290),o=e.n(a),t=e(93275),r=e.n(t),k=e(411),Se=e.n(k),Ee={codeBox:"codeBox____cjD0",code:"code___owvF8",status:"status___vdgrV",info:"info___nhoy_"},Fe=`
export const lang_zh = {
    <% zh %>
}

export const lang_en = {
    <% en %>
}

export const lang_ar = {
    <% ar %>
}

export const lang_ur = {
    <% ur %>
}

export const lang_tr = {
    <% tr %>
}
`,we=/[ٹھپھگھٹژڑپےڈگںچ]/g,Be=/[ةكءهه]/g,be=/[\u4e00-\u9fa5]/g,Ke=/[ÇçĞğıİÖöŞşÜü]/g,xe=/[^a-zA-Z0-9_\-.$*@&;'"?/><,=~:：，。？ ]/,je=function(y){return we.test(y)},Re=function(y){return Ke.test(y)},ke=function(y){return Be.test(y)},Je=function(y){return!xe.test(y)},Ye=function(y){return be.test(y)},Pe=e(23560),Ze=e.n(Pe);function Ae(x){var y,J,s={zh:{},en:{},ar:{},ur:{},tr:{}},w=Fe,u;x!=null&&x.sheetId?u=window.luckysheet.getSheet({index:x.sheetId}).data:u=window.luckysheet.getSheetData();for(var S=u.length-1;S>=0;S--){for(var v=0,p=0;p<u[S].length;p++){var l,M,Q,X;(u[S][p]===null||!u[S][p].v&&!((l=u[S][p])!==null&&l!==void 0&&(M=l.ct)!==null&&M!==void 0&&(Q=M[0])!==null&&Q!==void 0&&(X=Q.s)!==null&&X!==void 0&&X.v))&&v++}v===u[S].length&&u.splice(S,1)}if(!((y=u)!==null&&y!==void 0&&(J=y[0])!==null&&J!==void 0&&J.length))return["",""];for(var g=new Array(u[0].length),E=new Array(u[0].length).fill(0),c={ar:null,ur:null,zh:null,en:null,tr:null},f=new Array(g.length),h=0;h<f.length;h++)f[h]={ar:0,tr:0,ur:0,zh:0,en:0};for(var Y=0;Y<g.length;Y++)g[Y]=[];for(var $=0;$<u.length;$++)for(var R=0;R<u[$].length;R++){var ae,ne,ue,se,le,T=((ae=u[$][R])===null||ae===void 0?void 0:ae.v)||((ne=u[$][R])===null||ne===void 0||(ue=ne.ct)===null||ue===void 0||(se=ue.s)===null||se===void 0||(le=se[0])===null||le===void 0?void 0:le.v);T?(T=T.trim(),g[R].push(T),E[R]++,Re(T)?f[R].tr++:je(T)?f[R].ur++:ke(T)?f[R].ar++:Ye(T)?f[R].zh++:Je(T)&&T!==""&&f[R].en++):g[R].push("")}for(var ve=Math.max.apply(null,E),F=E.length-1;F>=0;F--)E[F]<ve/2&&(g.splice(F,1),f.splice(F,1));for(var W=function(m){var z="en",P=0;Object.entries(f[m]).forEach(function(B){var O=d()(B,2),Z=O[0],re=O[1];re>P&&(P=re,z=Z)}),c[z]=m},G=0;G<f.length;G++)W(G);var N={};Object.keys(c).forEach(function(C){c[C]!==void 0&&(N[C]=g[c[C]])});var j=new Array(ve).fill("\u8BF7\u66FF\u6362"),I="";N.en&&N.en.forEach(function(C,m){var z,P,B=C.replaceAll("-","To").replaceAll("'","").replace(/[^a-zA-Z0-9 ]/g," ").trim().split(" "),O="";if(x.keyMode==="WORD"){for(var Z=0;Z<Math.min(6,B.length);Z++){var re;if(!(!B[Z]||B[Z]===" "||!O.length&&/^[0-9]+.*$/.test(B[Z]))&&!(/^[0-9]+$/.test(B[Z])&&(B[Z].length>5||/[0-9]/.test(O[O.length-1])))){if(["the","if","to","of","on","for","has","have","can","could","in","xxx","xx","x","into","is","n","a"].includes(B[Z].toLowerCase())&&(O.length+((B==null||(re=B[Z+1])===null||re===void 0?void 0:re.length)||0)>21||Z===Math.min(6,B.length)-1)||O.length>21)break;O+=(B[Z].slice(0,1).toUpperCase()+B[Z].slice(1)).trim()}}for(var ie=0,ge=0;ge<j.length;ge++)(ie?j[ge]===O+(ie+1):j[ge]===O)&&ie++;ie&&(O+=ie+1)}else O="m".concat(m+1);j[m]=O||"\u8BF7\u66FF\u6362"+m,I+="".concat(j[m],": `").concat(((z=N.en)===null||z===void 0?void 0:z[m])||"","`,"),s.en[j[m]]=((P=N.en)===null||P===void 0?void 0:P[m])||""}),w=w.replace("<% en %>",I),Object.entries(N).forEach(function(C){var m=d()(C,2),z=m[0],P=m[1];if(z!=="en"){if(!P)return w=w.replace("<% ".concat(z," %>"),"");for(var B="",O=0;O<j.length;O++)B+="".concat(j[O],": `").concat((P==null?void 0:P[O])||"","`,"),s[z][j[O]]=(P==null?void 0:P[O])||""||"";w=w.replace("<% ".concat(z," %>"),B)}});var te={indent_size:2,space_in_empty_paren:!0};w=Ze()(w,te);var ye="";try{ye=JSON.stringify(s,null,2)}catch(C){console.log(C)}return[w,ye]}var Le=e(91629),me=e(60832),pe=e(47110),Ce=e(4352),Me=e(11275),Oe=e(20545),Te=e(82625),ee=e(54422),Ne=e(49256),oe=e(90829),De=e(30094),ce=e(57907);function Ie(x,y){return new Promise(function(J,s){if(y==="JS")try{var w=function(){try{document.body.appendChild(u),setTimeout(function(){window.iframeGlobalErrorHandler("\u6D4B\u8BD5\u8D85\u65F6\uFF0C\u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u4EE3\u7801\u9519\u8BEF")},3e3)}catch(c){s(c)}},u=document.createElement("script"),S=x+`\rtry {
        const enKeys = Object.keys(lang_en);
        const arKeys = Object.keys(lang_ar);
        const zhKeys = Object.keys(lang_zh);
        const trKeys = Object.keys(lang_tr);
        const urKeys = Object.keys(lang_ur);
        if(enKeys.length !== arKeys.length) {
          throw new Error('\u963F\u8BEDKEY\u6570\u91CF\u6709\u8BEF, \u82F1\u8BEDKEY:' + enKeys.length + ',\u963F\u8BEDKEY:'+arKeys.length );
        }
        if(enKeys.length !== zhKeys.length) {
          throw new Error('\u4E2D\u6587KEY\u6570\u91CF\u6709\u8BEF, \u82F1\u8BEDKEY:' + enKeys.length + ',\u4E2D\u6587KEY:'+zhKeys.length );
        }
        if(enKeys.length !== urKeys.length) {
          throw new Error('\u4E4C\u5C14\u90FD\u8BEDKEY\u6570\u91CF\u6709\u8BEF, \u82F1\u8BEDKEY:' + enKeys.length + ',\u4E4C\u5C14\u90FD\u8BEDKEY:'+urKeys.length );
        }
        if(enKeys.length !== trKeys.length) {
          throw new Error('\u571F\u8033\u5176\u8BEDKEY\u6570\u91CF\u6709\u8BEF, \u82F1\u8BEDKEY:' + enKeys.length + ',\u571F\u8033\u5176\u8BEDKEY:'+trKeys.length );
        }
        Object.entries(lang_zh).forEach(([key,value], index)=>{
          if(enKeys[index] !== key) throw new Error('\u4E2D\u6587KEY\u503C\u4E0D\u4E00\u81F4:'+enKeys[index] + '!==' + key);
          if(typeof value !== 'string') throw new Error('\u4E2D\u6587VALUE\u7C7B\u578B\u6709\u8BEF, \u8BF7\u68C0\u67E5\u8BE5KEY\u503C:'+enKeys[index]);
          if (!/^[a-zA-Z]+[a-zA-Z0-9_]*/.test(key)) throw new Error('KEY\u6709\u8BEF, \u53EA\u80FD\u7531\u82F1\u6587/\u6570\u5B57/\u4E0B\u5212\u7EBF\u6784\u6210:' + enKeys[index]);
        })
        Object.entries(lang_ar).forEach(([key,value], index)=>{
          if(enKeys[index] !== key) throw new Error('\u963F\u8BEDKEY\u503C\u4E0D\u4E00\u81F4:'+enKeys[index] + '!==' + key);
          if(typeof value !== 'string') throw new Error('\u963F\u8BEDVALUE\u7C7B\u578B\u6709\u8BEF, \u8BF7\u68C0\u67E5\u8BE5KEY\u503C:'+enKeys[index]);
        })
        Object.entries(lang_ur).forEach(([key,value], index)=>{
          if(enKeys[index] !== key) throw new Error('\u4E4C\u5C14\u90FDKEY\u503C\u4E0D\u4E00\u81F4:'+enKeys[index] + '!==' + key);
          if(typeof value !== 'string') throw new Error('\u4E4C\u5C14\u90FDVALUE\u7C7B\u578B\u6709\u8BEF, \u8BF7\u68C0\u67E5\u8BE5KEY\u503C:'+enKeys[index]);
        })
        Object.entries(lang_tr).forEach(([key,value], index)=>{
          if(enKeys[index] !== key) throw new Error('\u4E4C\u5C14\u90FDKEY\u503C\u4E0D\u4E00\u81F4:'+enKeys[index] + '!==' + key);
          if(typeof value !== 'string') throw new Error('\u4E4C\u5C14\u90FDVALUE\u7C7B\u578B\u6709\u8BEF, \u8BF7\u68C0\u67E5\u8BE5KEY\u503C:'+enKeys[index]);
        })
        window.iframePassedTest();
       } catch(err) {
        window.iframeGlobalErrorHandler(err);
       }
        `;u.innerHTML=S,u.type="module";var v=document.createElement("iframe");v.style.position="absolute",v.style.zIndex="-1",v.style.top="-9999px",v.style.width="1px",v.style.height="1px",v.onload=w,v.onerror=function(E){s(E)},window.iframeGlobalErrorHandler=function(E){s(E)},window.iframePassedTest=function(){J(!0),document.body.removeChild(v)},document.body.appendChild(v)}catch(E){s(E)}else try{var p=JSON.parse(x),l=Object.keys(p.en),M=Object.keys(p.ar),Q=Object.keys(p.zh),X=Object.keys(p.tr),g=Object.keys(p.ur);l.length!==M.length&&s("\u963F\u8BEDKEY\u6570\u91CF\u6709\u8BEF, \u82F1\u8BEDKEY:"+l.length+",\u963F\u8BEDKEY:"+M.length),l.length!==Q.length&&s("\u4E2D\u6587KEY\u6570\u91CF\u6709\u8BEF, \u82F1\u8BEDKEY:"+l.length+",\u4E2D\u6587KEY:"+Q.length),l.length!==g.length&&s("\u4E4C\u5C14\u90FD\u8BEDKEY\u6570\u91CF\u6709\u8BEF, \u82F1\u8BEDKEY:"+l.length+",\u4E4C\u5C14\u90FD\u8BEDKEY:"+g.length),l.length!==X.length&&s("\u571F\u8033\u5176\u8BEDKEY\u6570\u91CF\u6709\u8BEF, \u82F1\u8BEDKEY:"+l.length+",\u571F\u8033\u5176\u8BEDKEY:"+X.length),Object.entries(p.zh).forEach(function(E,c){var f=d()(E,2),h=f[0],Y=f[1];l[c]!==h&&s("\u4E2D\u6587KEY\u503C\u4E0D\u4E00\u81F4:"+l[c]+"!=="+h),typeof Y!="string"&&s("\u4E2D\u6587VALUE\u6709\u8BEF, \u8BF7\u68C0\u67E5\u8BE5KEY\u503C:"+l[c]),/^[a-zA-Z]+[a-zA-Z0-9_]*/.test(h)||s("KEY\u6709\u8BEF, \u53EA\u80FD\u7531\u82F1\u6587/\u6570\u5B57/\u4E0B\u5212\u7EBF\u6784\u6210:"+l[c])}),Object.entries(p.ar).forEach(function(E,c){var f=d()(E,2),h=f[0],Y=f[1];l[c]!==h&&s("\u963F\u8BEDKEY\u503C\u4E0D\u4E00\u81F4:"+l[c]+"!=="+h),typeof Y!="string"&&s("\u963F\u8BEDVALUE\u6709\u8BEF, \u8BF7\u68C0\u67E5\u8BE5KEY\u503C:"+l[c])}),Object.entries(p.ur).forEach(function(E,c){var f=d()(E,2),h=f[0],Y=f[1];l[c]!==h&&s("\u4E4C\u5C14\u90FDKEY\u503C\u4E0D\u4E00\u81F4:"+l[c]+"!=="+h),typeof Y!="string"&&s("\u4E4C\u5C14\u90FDVALUE\u7C7B\u578B\u6709\u8BEF, \u8BF7\u68C0\u67E5\u8BE5KEY\u503C:"+l[c])}),Object.entries(p.tr).forEach(function(E,c){var f=d()(E,2),h=f[0],Y=f[1];l[c]!==h&&s("\u4E4C\u5C14\u90FDKEY\u503C\u4E0D\u4E00\u81F4:"+l[c]+"!=="+h),typeof Y!="string"&&s("\u4E4C\u5C14\u90FDVALUE\u7C7B\u578B\u6709\u8BEF, \u8BF7\u68C0\u67E5\u8BE5KEY\u503C:"+l[c])}),J(!0)}catch{s("Parse\u89E3\u6790JSON\u6587\u4EF6\u62A5\u9519")}})}var ze=e(82567),Ue=e(98625),_e=e(68387),We=e(98543),Ge=e(1781),fe=e(66397),he=e(58024),V,He=(0,b.forwardRef)(function(x,y){var J=x.isLoadedSheet,s=(0,b.useState)(!1),w=d()(s,2),u=w[0],S=w[1],v=(0,b.useState)(!1),p=d()(v,2),l=p[0],M=p[1],Q=(0,b.useState)("JS"),X=d()(Q,2),g=X[0],E=X[1],c=(0,b.useState)("WORD"),f=d()(c,2),h=f[0],Y=f[1];function $(F){V&&V.destroy();var W=[Le.Xy,g==="JS"?(0,pe.eJ)():(0,Ce.AV)(),me.tk.lineWrapping,Me.PX,me.tk.inputHandler.of(function(){return S(!1),!1}),g==="JS"?(0,Oe.ir)((0,pe.d)(new Te.r,{parserOptions:{ecmaVersion:2019,sourceType:"module"},env:{browser:!0,node:!1},rules:{semi:["error","never"]}})):(0,Oe.ir)((0,Ce.ap)())];V=new me.tk({doc:F,extensions:W,parent:document.querySelector("#code")})}function R(F){var W=(0,he.gT)(F||window.luckysheet.getSheet().index,"keyMode")||"WORD",G=(0,he.gT)(F||window.luckysheet.getSheet().index,"formatMode")||"JS";if(Y(W),E(G),!(W!==h||G!==g)){var N=Ae({sheetId:F,keyMode:h}),j=d()(N,2),I=j[0],te=j[1];if(I.length&&!te){ee.Z.error({message:"JSON\u8F6C\u6362\u5931\u8D25",description:"\u8BF7\u68C0\u67E5JS\u683C\u5F0F\u5316\u662F\u5426\u6B63\u5E38\uFF0C\u5E76\u4E0A\u62A5\u5F00\u53D1\u6B64\u6848\u4F8B"}),S(!1),$(I);return}$(g==="JS"?I:te),S(!1)}}function ae(){return ne.apply(this,arguments)}function ne(){return ne=Se()(o()().mark(function F(){var W,G,N,j,I,te;return o()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return M(!0),C.next=3,(0,fe._v)(1500);case 3:if(N=0,j=(W=V.state)===null||W===void 0||(G=W.values)===null||G===void 0?void 0:G.filter(function(m){return m==null?void 0:m.diagnostics}),j==null||j.forEach(function(m){m!=null&&m.selected&&N++}),!N){C.next=9;break}return M(!1),C.abrupt("return",ee.Z.error({message:"\u672A\u901A\u8FC7\u6D4B\u8BD5",description:"\u5B58\u5728\u8BED\u6CD5\u9519\u8BEF\uFF0C\u8BF7\u6838\u67E5"}));case 9:if(I=V.state.toJSON().doc,!(h==="WORD"&&/请替换[0-9]*/g.test(I))){C.next=13;break}return M(!1),C.abrupt("return",ee.Z.error({message:"\u672A\u901A\u8FC7\u6D4B\u8BD5",description:'\u5B58\u5728\u672A\u80FD\u89E3\u6790\u7684KEY\u503C(\u641C\u7D22"\u8BF7\u66FF\u6362"), \u8BF7\u624B\u52A8\u586B\u5199, \u5E76\u4E0A\u62A5\u6B64\u6848\u4F8B'}));case 13:if(te=/(export){1} +((const)|(let)|(var)){1} +(lang_((zh)|(ar)|(tr)|(ur)|(en))){1} *= *{{1}[^}]*}{1}/g,!(g==="JS"&&I.match(te).length!==5)){C.next=17;break}return M(!1),C.abrupt("return",ee.Z.error({message:"\u672A\u901A\u8FC7\u6D4B\u8BD5",description:"JS\u6587\u4EF6\u9700\u8981Export\u76F8\u5E94\u5BF9\u8C61\uFF0C\u8BF7\u8865\u5145\u5173\u952E\u5B57"}));case 17:Ie(I,g).then(function(){S(!0),M(!1),ee.Z.success({message:"\u5DF2\u901A\u8FC7\u6D4B\u8BD5",description:"\u53EF\u4EE5\u6267\u884C\u6682\u5B58\u64CD\u4F5C"})}).catch(function(m){S(!1),M(!1),ee.Z.error({message:"\u672A\u901A\u8FC7\u6D4B\u8BD5",description:m.toString()})});case 18:case"end":return C.stop()}},F)})),ne.apply(this,arguments)}function ue(){(0,fe.JG)(V.state.toJSON().doc)}function se(){g==="JS"?(0,fe.Bl)(V.state.toJSON().doc):(0,fe.SV)(V.state.toJSON().doc)}function le(){var F=r()({time:+new Date,sheetId:window.luckysheet.getSheet().index,sheetName:window.luckysheet.getSheet().name},g==="JS"?"js":"json",V.state.toJSON().doc);(0,_.yH)(F),ee.Z.success({message:"\u6682\u5B58\u6210\u529F, \u53EF\u4EE5\u524D\u5F80\u63A8\u9001\u9762\u677F"})}function T(){E(function(F){return F==="JS"?"JSON":"JS"}),(0,he.W3)(window.luckysheet.getSheet().index,"formatMode",g==="JS"?"JSON":"JS")}function ve(){Y(function(F){return F==="WORD"?"INDEX":"WORD"}),(0,he.W3)(window.luckysheet.getSheet().index,"keyMode",h==="WORD"?"INDEX":"WORD")}return(0,b.useEffect)(function(){J&&R()},[J,g,h]),(0,b.useImperativeHandle)(y,function(){return{formatSheet:R}},[g,h]),(0,n.jsxs)("div",{className:Ee.codeBox,children:[(0,n.jsx)("div",{className:Ee.code,id:"code"}),(0,n.jsx)("div",{className:Ee.status,children:(0,n.jsxs)(Ne.Z,{size:8,children:[(0,n.jsx)(oe.Z,{placement:"bottomRight",title:"\u5207\u6362KEY\u503C\u547D\u540D\u6A21\u5F0F, \u5355\u8BCD\u6A21\u5F0F\u4E66\u5199\u65F6\u8BED\u4E49\u4F1A\u66F4\u6E05\u6670, \u4F46\u5982\u679C\u82F1\u6587\u6587\u6848\u540E\u671F\u6709\u4FEE\u6539, KEY\u503C\u53EF\u80FD\u6709\u53D8\u52A8",children:(0,n.jsx)(De.Z,{checked:h==="WORD",checkedChildren:"Words",unCheckedChildren:"Index",defaultChecked:!0,onChange:ve})}),(0,n.jsx)(oe.Z,{placement:"bottomRight",title:"\u5207\u6362JS/JSON\u683C\u5F0F",children:(0,n.jsx)(De.Z,{checked:g==="JS",checkedChildren:"JS",unCheckedChildren:"JSON",defaultChecked:!0,onChange:T})}),(0,n.jsx)(oe.Z,{placement:"bottomRight",title:"\u4E0B\u8F7D",children:(0,n.jsx)(ce.Z,{icon:(0,n.jsx)(ze.Z,{}),onClick:se})}),(0,n.jsx)(oe.Z,{placement:"bottomRight",title:"\u590D\u5236",children:(0,n.jsx)(ce.Z,{icon:(0,n.jsx)(Ue.Z,{}),onClick:ue})}),u?(0,n.jsx)(n.Fragment,{}):(0,n.jsx)(oe.Z,{placement:"bottomRight",title:"\u6D4B\u8BD5",children:(0,n.jsx)(ce.Z,{icon:l?(0,n.jsx)(_e.Z,{}):(0,n.jsx)(We.Z,{}),type:"primary",onClick:ae,disabled:l})}),(0,n.jsx)(oe.Z,{placement:"bottomRight",title:u?"\u6682\u5B58\u8BE5\u6587\u4EF6":"\u6682\u5B58\u8BE5\u6587\u4EF6(\u9700\u8981\u5148\u901A\u8FC7\u6D4B\u8BD5)",children:(0,n.jsx)(ce.Z,{type:"primary",icon:(0,n.jsx)(Ge.Z,{}),disabled:!u,onClick:le})})]})})]})}),Ve=He,Xe={container:"container___GP_mb"},Qe=e(58946),$e=function(){var y=(0,b.useState)(!1),J=d()(y,2),s=J[0],w=J[1],u=(0,b.useRef)(null);function S(v){var p;(p=u.current)===null||p===void 0||p.formatSheet(v!=null?v:"")}return(0,Qe.Z)(),(0,n.jsxs)("div",{className:Xe.container,children:[(0,n.jsx)(L,{setIsLoadedSheet:w,formatSheet:S}),(0,n.jsx)(Ve,{isLoadedSheet:s,ref:u})]})},qe=$e},66397:function(de,U,e){e.d(U,{Bl:function(){return H},JG:function(){return d},SV:function(){return b},UZ:function(){return _},_v:function(){return q}});var i=e(45480);function d(K){try{var n=document.createElement("textarea");n.value=K,document.body.appendChild(n),n.setAttribute("readonly","readonly"),n.setSelectionRange(0,n.value.length),n.select(),document.execCommand("Copy"),document.body.removeChild(n),i.ZP.success("\u590D\u5236\u6210\u529F")}catch{i.ZP.error("\u590D\u5236\u5931\u8D25")}}function q(K){return new Promise(function(n){setTimeout(function(){n(!0)},K||1e3)})}function D(K,n,A){try{var L=document.createElement("a");L.href=URL.createObjectURL(new Blob([K],{type:"text/".concat(n)})),L.setAttribute("download","lang.".concat(A)),document.body.appendChild(L),L.click(),document.body.removeChild(L),i.ZP.success("\u5DF2\u5F00\u59CB\u4E0B\u8F7D")}catch(a){console.log(a),i.ZP.error("\u8F6C\u6362\u5931\u8D25")}}function b(K){D(K,"json","json")}function H(K){D(K,"javascript","js")}function _(K){return new Promise(function(n,A){try{var L=function(){try{document.body.appendChild(a),setTimeout(function(){window.iframeGetObjectErrorHandler("\u83B7\u53D6\u4EE3\u7801\u8D85\u65F6\uFF0C\u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u4EE3\u7801\u9519\u8BEF")},3e3)}catch(k){A(k)}},a=document.createElement("script"),o=K+`\rtry {
        const res = {
          zh:{},
          en:{},
          ar:{},
          ur:{},
          tr:{},
        }
        const keys = Object.keys(lang_en);
        keys.forEach(key => {
          res['en'][key] = lang_en[key] || '';
          res['zh'][key] = lang_zh[key] || '';
          res['ar'][key] = lang_ar[key] || '';
          res['ur'][key] = lang_ur[key] || '';
          res['tr'][key] = lang_tr[key] || '';
        })
        window.iframeGetObject(res);
       } catch(err) {
        window.iframeGetObjectErrorHandler(err);
       }
        `;a.innerHTML=o,a.type="module";var t=document.createElement("iframe");t.style.position="absolute",t.style.zIndex="-1",t.style.top="-9999px",t.style.width="1px",t.style.height="1px",t.onload=L,t.onerror=function(r){A(r)},window.iframeGetObjectErrorHandler=function(r){A(r)},window.iframeGetObject=function(r){n(r),document.body.removeChild(t)},document.body.appendChild(t)}catch(r){A(r)}})}},2773:function(de,U,e){e.d(U,{Pj:function(){return K},ij:function(){return _},pJ:function(){return A},yH:function(){return L},zK:function(){return b}});var i="sheet",d="SangoTranslator",q=1,D;function b(){return new Promise(function(a,o){var t=window.indexedDB.open(d,q);t.onupgradeneeded=function(r){var k;D=r==null||(k=r.target)===null||k===void 0?void 0:k.result,D.objectStoreNames.contains(i)||D.createObjectStore(i)},t.onsuccess=function(r){var k;D=r==null||(k=r.target)===null||k===void 0?void 0:k.result,a(!0),console.log("DB\u8FDE\u63A5\u6210\u529F")},t.onerror=function(r){o(!1),console.log(r,"DB\u8FDE\u63A5\u5931\u8D25")}})}function H(a){var o=D.transaction(i,"readwrite").objectStore(i).add(a,"main");o.onsuccess=function(){console.log("\u5199\u5165",o.result)},o.onerror=function(t){console.log(t,"\u5199\u5165\u5931\u8D25")}}function _(){return new Promise(function(a){var o=D.transaction(i).objectStore(i).get("main");o.onsuccess=function(t){var r;a(t==null||(r=t.target)===null||r===void 0?void 0:r.result)}})}function K(a){var o=D.transaction(i,"readwrite").objectStore(i).put(a,"main");o.onsuccess=function(){console.log("\u4FEE\u6539\u6210\u529F",o.result)},o.onerror=function(t){console.log(t,"\u4FEE\u6539\u5931\u8D25")}}function n(a){var o=D.transaction(i,"readwrite").objectStore(i).delete(a);o.onsuccess=function(){console.log("\u5220\u9664\u6210\u529F",o.result)},o.onerror=function(t){console.log(t,"\u5220\u9664\u5931\u8D25")}}function A(){return new Promise(function(a){var o=D.transaction(i).objectStore(i).getAll();o.onsuccess=function(t){var r;a(t==null||(r=t.target)===null||r===void 0?void 0:r.result)}})}function L(a){var o=D.transaction(i,"readwrite").objectStore(i).put(a,a.sheetId);o.onsuccess=function(){console.log("\u50A8\u5B58\u6587\u4EF6\u6210\u529F",o.result)},o.onerror=function(t){console.log(t,"\u50A8\u5B58\u6587\u4EF6\u5931\u8D25")}}},58024:function(de,U,e){e.d(U,{W3:function(){return K},gT:function(){return n},sI:function(){return A},tL:function(){return L}});var i=e(94434),d=e.n(i),q=e(93275),D=e.n(q),b=e(30279),H=e.n(b),_={UILang:"TR",prefix:"",keyMode:"WORD",formatMode:"JS"};function K(a,o,t){try{var r=localStorage.getItem(a),k=r?H()(H()({},JSON.parse(r)),{},D()({},o,t)):H()(H()({},_),{},D()({},o,t));localStorage.setItem(a,JSON.stringify(k))}catch{}}function n(a,o){try{var t=localStorage.getItem(a),r=t?JSON.parse(t):_;return r[o]}catch{}}function A(a){try{var o=localStorage.getItem("cloudSheet"),t=o?[a].concat(d()(JSON.parse(o).filter(function(r){return r.sheetId!==a.sheetId}))):[a];console.log(t),localStorage.setItem("cloudSheet",JSON.stringify(t))}catch{}}function L(){try{var a=localStorage.getItem("cloudSheet");console.log(a);var o=a?JSON.parse(a):[];return o}catch{return[]}}}}]);
