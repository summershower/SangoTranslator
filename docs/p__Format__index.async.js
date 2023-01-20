"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[142],{16357:function(de,V,n){n.r(V),n.d(V,{default:function(){return He}});var m=n(46686),P=n.n(m),q=n(30279),w=n.n(q),x=n(93236),oe={lang:"zh",container:"formatSheetContainer",showinfobar:!1,showtoolbar:!1,showstatisticBar:!1,enableAddRow:!1,sheetFormulaBar:!1,allowUpdate:!1,allowEdit:!1,showstatisticBarConfig:{count:!1,view:!1,zoom:!1},showsheetbarConfig:{add:!1,menu:!1,sheet:!0},cellRightClickConfig:{copy:!0,copyAs:!0,paste:!1,insertRow:!1,insertColumn:!1,deleteRow:!1,deleteColumn:!1,deleteCell:!1,hideRow:!1,hideColumn:!1,rowHeight:!1,columnWidth:!1,clear:!1,matrix:!1,sort:!1,filter:!1,chart:!1,image:!1,link:!1,data:!1,cellFormat:!1}},X=n(2773),l=n(62086),ae=function(e){var f=e.setIsLoadedSheet,r=e.formatSheet,u=(0,x.useRef)(null),p={sheetActivate:function(o){r(o)}};return(0,x.useEffect)(function(){(0,X.zK)().then(function(){var t=w()(w()({},oe),{},{hook:p});(0,X.ij)().then(function(o){o&&(t.data=o),window.luckysheet.create(t),f(!0)})}).catch(function(){alert("failed")})},[]),(0,l.jsx)("div",{style:{flex:"1",height:"100%"},id:"formatSheetContainer",ref:u})},j=ae,i=n(35290),c=n.n(i),h=n(411),b=n.n(h),_={codeBox:"codeBox____cjD0",code:"code___owvF8",status:"status___vdgrV",info:"info___nhoy_"},fe=`
// zh
export const lang_zh = {
    <% zh %>
}

// en
export const lang_en = {
    <% en %>
}

// ar
export const lang_ar = {
    <% ar %>
}

// ur
export const lang_ur = {
    <% ur %>
}

// tr
export const lang_tr = {
    <% tr %>
}
`,ce=/[ٹھپھگھٹژڑپےڈگںچ]/g,ve=/[ةكءهه]/g,he=/[\u4e00-\u9fa5]/g,ge=/[ÇçĞğıİÖöŞşÜü]/g,ye=/[^a-zA-Z0-9_\-.$*@&;'"?/><,=~:：，。？ ]/,Ee=function(e){return ce.test(e)},me=function(e){return ge.test(e)},pe=function(e){return ve.test(e)},Ce=function(e){return!ye.test(e)},Ke=function(e){return he.test(e)},we=n(23560),xe=n.n(we);function je(d){var e,f,r;d?r=window.luckysheet.getAllSheets().find(function(K){return K.index===d}).data:r=window.luckysheet.getAllSheets().find(function(K){return K.status}).data;for(var u=r.length-1;u>=0;u--){for(var p=0,t=0;t<r[u].length;t++){var o,C,N,R;(r[u][t]===null||!r[u][t].v&&!((o=r[u][t])!==null&&o!==void 0&&(C=o.ct)!==null&&C!==void 0&&(N=C[0])!==null&&N!==void 0&&(R=N.s)!==null&&R!==void 0&&R.v))&&p++}p===r[u].length&&r.splice(u,1)}if(!((e=r)!==null&&e!==void 0&&(f=e[0])!==null&&f!==void 0&&f.length))return"";for(var z=new Array(r[0].length),L=new Array(r[0].length).fill(0),H={ar:null,ur:null,zh:null,en:null,tr:null},y=new Array(z.length),J=0;J<y.length;J++)y[J]={ar:0,tr:0,ur:0,zh:0,en:0};for(var O=0;O<z.length;O++)z[O]=[];for(var F=0;F<r.length;F++)for(var v=0;v<r[F].length;v++){var A,G,Q,B,E,S=((A=r[F][v])===null||A===void 0?void 0:A.v)||((G=r[F][v])===null||G===void 0||(Q=G.ct)===null||Q===void 0||(B=Q.s)===null||B===void 0||(E=B[0])===null||E===void 0?void 0:E.v);S?(S=S.trim(),z[v].push(S),L[v]++,me(S)?y[v].tr++:Ee(S)?y[v].ur++:pe(S)?y[v].ar++:Ke(S)?y[v].zh++:Ce(S)&&S!==""&&y[v].en++):z[v].push("")}for(var ue=Math.max.apply(null,L),M=L.length-1;M>=0;M--)L[M]<ue/2&&(z.splice(M,1),y.splice(M,1));for(var Ae=function(Y){var D="en",a=0;Object.entries(y[Y]).forEach(function(g){var s=P()(g,2),W=s[0],Z=s[1];Z>a&&(a=Z,D=W)}),H[D]=Y},re=0;re<y.length;re++)Ae(re);var U={};Object.keys(H).forEach(function(K){H[K]!==void 0&&(U[K]=z[H[K]])});var I=new Array(ue).fill("\u8BF7\u66FF\u6362"),T=fe,ie="";U.en&&U.en.forEach(function(K,Y){for(var D,a=K.replaceAll("-","To").replaceAll("'","").replace(/[^a-zA-Z0-9 ]/g," ").trim().split(" "),g="",s=0;s<Math.min(6,a.length);s++){var W;if(!(!a[s]||a[s]===" "||!g.length&&/^[0-9]+$/.test(a[s]))&&!(/^[0-9]+$/.test(a[s])&&(a[s].length>5||/[0-9]/.test(g[g.length-1])))){if(["the","if","to","of","on","for","has","have","can","could","in","xxx","xx","x","into"].includes(a[s].toLowerCase())&&(g.length+((a==null||(W=a[s+1])===null||W===void 0?void 0:W.length)||0)>21||s===Math.min(8,a.length)-1)||g.length>21)break;g+=(a[s].slice(0,1).toUpperCase()+a[s].slice(1)).trim()}}for(var Z=0,$=0;$<I.length;$++)(Z?I[$]===g+(Z+1):I[$]===g)&&Z++;Z&&(g+=Z+1),I[Y]=g||"\u8BF7\u66FF\u6362",ie+="".concat(I[Y],": `").concat(((D=U.en)===null||D===void 0?void 0:D[Y])||"","`,")}),T=T.replace("<% en %>",ie),Object.entries(U).forEach(function(K){var Y=P()(K,2),D=Y[0],a=Y[1];if(D!=="en"){if(!a)return T=T.replace("<% ".concat(D," %>"),"");for(var g="",s=0;s<I.length;s++)g+="".concat(I[s],": `").concat((a==null?void 0:a[s])||"","`,");T=T.replace("<% ".concat(D," %>"),g)}});var Ge={indent_size:2,space_in_empty_paren:!0};return T=xe()(T,Ge),T}var ee=n(60832),Fe=n(91629),se=n(21562),Be=n(11275),Se=n(20545),De=n(82625),ne=n(54422),be=n(55784),te=n(95598);function ze(d){return new Promise(function(e,f){try{var r=function(){try{document.body.appendChild(u)}catch(C){f(C)}},u=document.createElement("script"),p=d+`\rtry {
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
          throw new Error('\u4E4C\u5C14\u90FD\u8BEDKEY\u6570\u91CF\u6709\u8BEF, \u82F1\u8BEDKEY:' + enKeys.length, ',\u963F\u4E4C\u5C14\u90FD\u8BEDKEY:'+urKeys.length );
        }
        if(enKeys.length !== trKeys.length) {
          throw new Error('\u571F\u8033\u5176\u8BEDKEY\u6570\u91CF\u6709\u8BEF, \u82F1\u8BEDKEY:' + enKeys.length + ',\u571F\u8033\u5176\u8BEDKEY:'+trKeys.length );
        }
        Object.entries(lang_zh).forEach(([key,value], index)=>{
          if(enKeys[index] !== key) throw new Error('\u4E2D\u6587KEY\u503C\u4E0D\u4E00\u81F4:'+enKeys[index] + '!==' + key);
          if(typeof value !== 'string') throw new Error('\u4E2D\u6587KEY\u7C7B\u578B\u6709\u8BEF:'+enKeys[index]);
        })
        Object.entries(lang_ar).forEach(([key,value], index)=>{
          if(enKeys[index] !== key) throw new Error('\u963F\u8BEDKEY\u503C\u4E0D\u4E00\u81F4:'+enKeys[index] + '!==' + key);
          if(typeof value !== 'string') throw new Error('\u963F\u8BEDKEY\u7C7B\u578B\u6709\u8BEF:'+enKeys[index]);
        })
        Object.entries(lang_ur).forEach(([key,value], index)=>{
          if(enKeys[index] !== key) throw new Error('\u4E4C\u5C14\u90FDKEY\u503C\u4E0D\u4E00\u81F4:'+enKeys[index] + '!==' + key);
          if(typeof value !== 'string') throw new Error('\u4E4C\u5C14\u90FDKEY\u7C7B\u578B\u6709\u8BEF:'+enKeys[index]);
        })
        Object.entries(lang_tr).forEach(([key,value], index)=>{
          if(enKeys[index] !== key) throw new Error('\u4E4C\u5C14\u90FDKEY\u503C\u4E0D\u4E00\u81F4:'+enKeys[index] + '!==' + key);
          if(typeof value !== 'string') throw new Error('\u4E4C\u5C14\u90FDKEY\u7C7B\u578B\u6709\u8BEF:'+enKeys[index]);
        })
        window.iframePassedTest();
       } catch(err) {
        window.iframeGlobalErrorHandler(err);
       }
        `;u.innerHTML=p,u.type="module";var t=document.createElement("iframe");t.style.position="absolute",t.style.zIndex="-1",t.style.top="-9999px",t.style.width="1px",t.style.height="1px",t.onload=r,t.onerror=function(o){f(o)},window.iframeGlobalErrorHandler=function(o){f(o)},window.iframePassedTest=function(){e(!0),document.body.removeChild(t)},document.body.appendChild(t)}catch(o){f(o)}})}var Oe=n(98625),Te=n(68387),Ye=n(98543),Re=n(1781),le=n(45480);function Ze(d){try{var e=document.createElement("textarea");e.value=d,document.body.appendChild(e),e.setAttribute("readonly","readonly"),e.setSelectionRange(0,e.value.length),e.select(),document.execCommand("Copy"),document.body.removeChild(e),le.ZP.success("\u590D\u5236\u6210\u529F")}catch{le.ZP.error("\u590D\u5236\u5931\u8D25")}}function Pe(d){return new Promise(function(e){setTimeout(function(){e(!0)},d||1e3)})}var k,Ne=(0,x.forwardRef)(function(d,e){var f=d.isLoadedSheet,r=(0,x.useState)(!1),u=P()(r,2),p=u[0],t=u[1],o=(0,x.useState)(!1),C=P()(o,2),N=C[0],R=C[1];function z(O){k&&k.destroy(),k=new ee.tk({doc:O,extensions:[Fe.Xy,(0,se.eJ)(),ee.tk.lineWrapping,Be.PX,ee.tk.inputHandler.of(function(){return t(!1),!1}),(0,Se.ir)((0,se.d)(new De.r,{parserOptions:{ecmaVersion:2019,sourceType:"module"},env:{browser:!0,node:!1},rules:{semi:["error","never"]}}))],parent:document.querySelector("#code")})}function L(O){var F=je(O);z(F),t(!1)}function H(){return y.apply(this,arguments)}function y(){return y=b()(c()().mark(function O(){var F,v,A,G;return c()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return R(!0),B.next=3,Pe(1500);case 3:if(v=0,A=(F=k.state)===null||F===void 0?void 0:F.values.filter(function(E){return E==null?void 0:E.diagnostics}),A.forEach(function(E){E!=null&&E.selected&&v++}),!v){B.next=9;break}return R(!1),B.abrupt("return",ne.Z.error({message:"\u672A\u901A\u8FC7\u6D4B\u8BD5",description:"\u5B58\u5728\u8BED\u6CD5\u9519\u8BEF\uFF0C\u8BF7\u6838\u67E5"}));case 9:G=k.state.toJSON().doc,ze(G).then(function(){t(!0),R(!1),ne.Z.success({message:"\u5DF2\u901A\u8FC7\u6D4B\u8BD5",description:"\u53EF\u4EE5\u6267\u884C\u63A8\u9001\u64CD\u4F5C"})}).catch(function(E){t(!1),R(!1),ne.Z.error({message:"\u672A\u901A\u8FC7\u6D4B\u8BD5",description:E.toString()})});case 11:case"end":return B.stop()}},O)})),y.apply(this,arguments)}function J(){Ze(k.state.toJSON().doc)}return(0,x.useEffect)(function(){f&&L()},[f]),(0,x.useImperativeHandle)(e,function(){return{formatSheet:L}},[]),(0,l.jsxs)("div",{className:_.codeBox,children:[(0,l.jsx)("div",{className:_.code,id:"code"}),(0,l.jsx)("div",{className:_.status,children:(0,l.jsxs)(be.Z,{size:8,children:[(0,l.jsx)(te.Z,{icon:(0,l.jsx)(Oe.Z,{}),onClick:J,children:"\u590D\u5236"}),p?(0,l.jsx)(l.Fragment,{}):(0,l.jsx)(te.Z,{icon:N?(0,l.jsx)(Te.Z,{}):(0,l.jsx)(Ye.Z,{}),onClick:H,disabled:N,children:N?"\u6D4B\u8BD5\u4E2D":"\u6D4B\u8BD5"}),(0,l.jsx)(te.Z,{type:"primary",icon:(0,l.jsx)(Re.Z,{}),disabled:!p,children:"\u63D0\u4EA4"})]})})]})}),Le=Ne,Ie={container:"container___GP_mb"},ke=function(){var e=(0,x.useState)(!1),f=P()(e,2),r=f[0],u=f[1],p=(0,x.useRef)(null);function t(o){var C;(C=p.current)===null||C===void 0||C.formatSheet(o!=null?o:"")}return(0,l.jsxs)("div",{className:Ie.container,children:[(0,l.jsx)(j,{setIsLoadedSheet:u,formatSheet:t}),(0,l.jsx)(Le,{isLoadedSheet:r,ref:p})]})},He=ke},2773:function(de,V,n){n.d(V,{Pj:function(){return l},ij:function(){return X},zK:function(){return x}});var m="sheet",P="SangoTranslator",q=1,w;function x(){return new Promise(function(j,i){var c=window.indexedDB.open(P,q);c.onupgradeneeded=function(h){var b;w=h==null||(b=h.target)===null||b===void 0?void 0:b.result,w.objectStoreNames.contains(m)||w.createObjectStore(m)},c.onsuccess=function(h){var b;w=h==null||(b=h.target)===null||b===void 0?void 0:b.result,j(!0),console.log("DB\u8FDE\u63A5\u6210\u529F")},c.onerror=function(h){i(!1),console.log(h,"DB\u8FDE\u63A5\u5931\u8D25")}})}function oe(j){var i=w.transaction(m,"readwrite").objectStore(m).add(j,"main");i.onsuccess=function(){console.log("\u5199\u5165",i.result)},i.onerror=function(c){console.log(c,"\u5199\u5165\u5931\u8D25")}}function X(){return new Promise(function(j){var i=w.transaction(m).objectStore(m).get("main");i.onsuccess=function(c){var h;j(c==null||(h=c.target)===null||h===void 0?void 0:h.result)}})}function l(j){var i=w.transaction(m,"readwrite").objectStore(m).put(j,"main");i.onsuccess=function(){console.log("\u4FEE\u6539\u6210\u529F",i.result)},i.onerror=function(c){console.log(c,"\u4FEE\u6539\u5931\u8D25")}}function ae(j){var i=w.transaction(m,"readwrite").objectStore(m).delete(j);i.onsuccess=function(){console.log("\u5220\u9664\u6210\u529F",i.result)},i.onerror=function(c){console.log(c,"\u5220\u9664\u5931\u8D25")}}}}]);
