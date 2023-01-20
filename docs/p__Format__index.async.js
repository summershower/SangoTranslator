"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[142],{7956:function(pe,re,e){e.r(re),e.d(re,{default:function(){return en}});var J=e(46686),x=e.n(J),ie=e(30279),k=e.n(ie),K=e(93236),he={lang:"zh",container:"formatSheetContainer",showinfobar:!1,showtoolbar:!1,showstatisticBar:!1,enableAddRow:!1,sheetFormulaBar:!1,allowUpdate:!1,allowEdit:!1,showstatisticBarConfig:{count:!1,view:!1,zoom:!1},showsheetbarConfig:{add:!1,menu:!1,sheet:!0},cellRightClickConfig:{copy:!0,copyAs:!0,paste:!1,insertRow:!1,insertColumn:!1,deleteRow:!1,deleteColumn:!1,deleteCell:!1,hideRow:!1,hideColumn:!1,rowHeight:!1,columnWidth:!1,clear:!1,matrix:!1,sort:!1,filter:!1,chart:!1,image:!1,link:!1,data:!1,cellFormat:!1}},ae=e(2773),de={formatSheetContainer:"formatSheetContainer___D7hLZ"},u=e(62086),z=function(n){var p=n.setIsLoadedSheet,t=n.formatSheet,E=(0,K.useRef)(null),a={sheetActivate:function(o){t(o)}};return(0,K.useEffect)(function(){(0,ae.zK)().then(function(){var d=k()(k()({},he),{},{hook:a});(0,ae.ij)().then(function(o){o&&(d.data=o),window.luckysheet.create(d),p(!0)})}).catch(function(){alert("failed")})},[]),(0,u.jsx)("div",{className:de.formatSheetContainer,id:"formatSheetContainer",ref:E})},C=z,S=e(35290),F=e.n(S),P=e(411),Fe=e.n(P),fe={codeBox:"codeBox____cjD0",code:"code___owvF8",status:"status___vdgrV",info:"info___nhoy_"},Se=`
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
`,Be=/[ٹھپھگھٹژڑپےڈگںچ]/g,xe=/[ةكءهه]/g,Ke=/[\u4e00-\u9fa5]/g,we=/[ÇçĞğıİÖöŞşÜü]/g,De=/[^a-zA-Z0-9_\-.$*@&;'"?/><,=~:：，。？ ]/,Oe=function(n){return Be.test(n)},je=function(n){return we.test(n)},Ye=function(n){return xe.test(n)},be=function(n){return!De.test(n)},Ze=function(n){return Ke.test(n)},Re=e(23560),Je=e.n(Re);function ke(r){var n,p,t={zh:{},en:{},ar:{},ur:{},tr:{}},E=Se,a;r!=null&&r.sheetId?a=window.luckysheet.getAllSheets().find(function(w){return w.index===(r==null?void 0:r.sheetId)}).data:a=window.luckysheet.getAllSheets().find(function(w){return w.status}).data;for(var d=a.length-1;d>=0;d--){for(var o=0,f=0;f<a[d].length;f++){var s,j,H,I;(a[d][f]===null||!a[d][f].v&&!((s=a[d][f])!==null&&s!==void 0&&(j=s.ct)!==null&&j!==void 0&&(H=j[0])!==null&&H!==void 0&&(I=H.s)!==null&&I!==void 0&&I.v))&&o++}o===a[d].length&&a.splice(d,1)}if(!((n=a)!==null&&n!==void 0&&(p=n[0])!==null&&p!==void 0&&p.length))return["",""];for(var y=new Array(a[0].length),c=new Array(a[0].length).fill(0),l={ar:null,ur:null,zh:null,en:null,tr:null},i=new Array(y.length),v=0;v<i.length;v++)i[v]={ar:0,tr:0,ur:0,zh:0,en:0};for(var Y=0;Y<y.length;Y++)y[Y]=[];for(var G=0;G<a.length;G++)for(var B=0;B<a[G].length;B++){var ee,Q,ne,te,A,h=((ee=a[G][B])===null||ee===void 0?void 0:ee.v)||((Q=a[G][B])===null||Q===void 0||(ne=Q.ct)===null||ne===void 0||(te=ne.s)===null||te===void 0||(A=te[0])===null||A===void 0?void 0:A.v);h?(h=h.trim(),y[B].push(h),c[B]++,je(h)?i[B].tr++:Oe(h)?i[B].ur++:Ye(h)?i[B].ar++:Ze(h)?i[B].zh++:be(h)&&h!==""&&i[B].en++):y[B].push("")}for(var U=Math.max.apply(null,c),b=c.length-1;b>=0;b--)c[b]<U/2&&(y.splice(b,1),i.splice(b,1));for(var V=function(R){var N="en",D=0;Object.entries(i[R]).forEach(function(m){var g=x()(m,2),O=g[0],_=g[1];_>D&&(D=_,N=O)}),l[N]=R},X=0;X<i.length;X++)V(X);var M={};Object.keys(l).forEach(function(w){l[w]!==void 0&&(M[w]=y[l[w]])});var T=new Array(U).fill("\u8BF7\u66FF\u6362"),Z="";M.en&&M.en.forEach(function(w,R){var N,D,m=w.replaceAll("-","To").replaceAll("'","").replace(/[^a-zA-Z0-9 ]/g," ").trim().split(" "),g="";if(r.keyMode==="WORD"){for(var O=0;O<Math.min(6,m.length);O++){var _;if(!(!m[O]||m[O]===" "||!g.length&&/^[0-9]+$/.test(m[O]))&&!(/^[0-9]+$/.test(m[O])&&(m[O].length>5||/[0-9]/.test(g[g.length-1])))){if(["the","if","to","of","on","for","has","have","can","could","in","xxx","xx","x","into","is","n","a"].includes(m[O].toLowerCase())&&(g.length+((m==null||(_=m[O+1])===null||_===void 0?void 0:_.length)||0)>21||O===Math.min(6,m.length)-1)||g.length>21)break;g+=(m[O].slice(0,1).toUpperCase()+m[O].slice(1)).trim()}}for(var oe=0,le=0;le<T.length;le++)(oe?T[le]===g+(oe+1):T[le]===g)&&oe++;oe&&(g+=oe+1)}else g="m".concat(R+1);T[R]=g||"\u8BF7\u66FF\u6362"+R,Z+="".concat(T[R],": `").concat(((N=M.en)===null||N===void 0?void 0:N[R])||"","`,"),t.en[T[R]]=((D=M.en)===null||D===void 0?void 0:D[R])||""}),E=E.replace("<% en %>",Z),Object.entries(M).forEach(function(w){var R=x()(w,2),N=R[0],D=R[1];if(N!=="en"){if(!D)return E=E.replace("<% ".concat(N," %>"),"");for(var m="",g=0;g<T.length;g++)m+="".concat(T[g],": `").concat((D==null?void 0:D[g])||"","`,"),t[N][T[g]]=(D==null?void 0:D[g])||""||"";E=E.replace("<% ".concat(N," %>"),m)}});var L={indent_size:2,space_in_empty_paren:!0};E=Je()(E,L);var Ce="";try{Ce=JSON.stringify(t,null,2)}catch(w){console.log(w)}return[E,Ce]}var ze=e(91629),ce=e(60832),ve=e(47110),ge=e(4352),Ae=e(11275),Ee=e(20545),Le=e(82625),$=e(54422),Ne=e(55784),q=e(64512),ye=e(30094),ue=e(95598);function Te(r,n){return new Promise(function(p,t){if(n==="JS")try{var E=function(){try{document.body.appendChild(a),setTimeout(function(){window.iframeGlobalErrorHandler("\u6D4B\u8BD5\u8D85\u65F6\uFF0C\u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u4EE3\u7801\u9519\u8BEF")},3e3)}catch(l){t(l)}},a=document.createElement("script"),d=r+`\rtry {
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
        `;a.innerHTML=d,a.type="module";var o=document.createElement("iframe");o.style.position="absolute",o.style.zIndex="-1",o.style.top="-9999px",o.style.width="1px",o.style.height="1px",o.onload=E,o.onerror=function(c){t(c)},window.iframeGlobalErrorHandler=function(c){t(c)},window.iframePassedTest=function(){p(!0),document.body.removeChild(o)},document.body.appendChild(o)}catch(c){t(c)}else try{var f=JSON.parse(r),s=Object.keys(f.en),j=Object.keys(f.ar),H=Object.keys(f.zh),I=Object.keys(f.tr),y=Object.keys(f.ur);s.length!==j.length&&t("\u963F\u8BEDKEY\u6570\u91CF\u6709\u8BEF, \u82F1\u8BEDKEY:"+s.length+",\u963F\u8BEDKEY:"+j.length),s.length!==H.length&&t("\u4E2D\u6587KEY\u6570\u91CF\u6709\u8BEF, \u82F1\u8BEDKEY:"+s.length+",\u4E2D\u6587KEY:"+H.length),s.length!==y.length&&t("\u4E4C\u5C14\u90FD\u8BEDKEY\u6570\u91CF\u6709\u8BEF, \u82F1\u8BEDKEY:"+s.length+",\u4E4C\u5C14\u90FD\u8BEDKEY:"+y.length),s.length!==I.length&&t("\u571F\u8033\u5176\u8BEDKEY\u6570\u91CF\u6709\u8BEF, \u82F1\u8BEDKEY:"+s.length+",\u571F\u8033\u5176\u8BEDKEY:"+I.length),Object.entries(f.zh).forEach(function(c,l){var i=x()(c,2),v=i[0],Y=i[1];s[l]!==v&&t("\u4E2D\u6587KEY\u503C\u4E0D\u4E00\u81F4:"+s[l]+"!=="+v),typeof Y!="string"&&t("\u4E2D\u6587VALUE\u6709\u8BEF, \u8BF7\u68C0\u67E5\u8BE5KEY\u503C:"+s[l]),/^[a-zA-Z]+[a-zA-Z0-9_]*/.test(v)||t("KEY\u6709\u8BEF, \u53EA\u80FD\u7531\u82F1\u6587/\u6570\u5B57/\u4E0B\u5212\u7EBF\u6784\u6210:"+s[l])}),Object.entries(f.ar).forEach(function(c,l){var i=x()(c,2),v=i[0],Y=i[1];s[l]!==v&&t("\u963F\u8BEDKEY\u503C\u4E0D\u4E00\u81F4:"+s[l]+"!=="+v),typeof Y!="string"&&t("\u963F\u8BEDVALUE\u6709\u8BEF, \u8BF7\u68C0\u67E5\u8BE5KEY\u503C:"+s[l])}),Object.entries(f.ur).forEach(function(c,l){var i=x()(c,2),v=i[0],Y=i[1];s[l]!==v&&t("\u4E4C\u5C14\u90FDKEY\u503C\u4E0D\u4E00\u81F4:"+s[l]+"!=="+v),typeof Y!="string"&&t("\u4E4C\u5C14\u90FDVALUE\u7C7B\u578B\u6709\u8BEF, \u8BF7\u68C0\u67E5\u8BE5KEY\u503C:"+s[l])}),Object.entries(f.tr).forEach(function(c,l){var i=x()(c,2),v=i[0],Y=i[1];s[l]!==v&&t("\u4E4C\u5C14\u90FDKEY\u503C\u4E0D\u4E00\u81F4:"+s[l]+"!=="+v),typeof Y!="string"&&t("\u4E4C\u5C14\u90FDVALUE\u7C7B\u578B\u6709\u8BEF, \u8BF7\u68C0\u67E5\u8BE5KEY\u503C:"+s[l])}),p(!0)}catch{t("Parse\u89E3\u6790JSON\u6587\u4EF6\u62A5\u9519")}})}var Pe=e(82567),Ie=e(98625),Ue=e(68387),Ve=e(98543),Me=e(1781),se=e(45480);function We(r){try{var n=document.createElement("textarea");n.value=r,document.body.appendChild(n),n.setAttribute("readonly","readonly"),n.setSelectionRange(0,n.value.length),n.select(),document.execCommand("Copy"),document.body.removeChild(n),se.ZP.success("\u590D\u5236\u6210\u529F")}catch{se.ZP.error("\u590D\u5236\u5931\u8D25")}}function He(r){return new Promise(function(n){setTimeout(function(){n(!0)},r||1e3)})}function me(r,n,p){try{var t=document.createElement("a");t.href=URL.createObjectURL(new Blob([r],{type:"text/".concat(n)})),t.setAttribute("download","lang.".concat(p)),document.body.appendChild(t),t.click(),document.body.removeChild(t),se.ZP.success("\u5DF2\u5F00\u59CB\u4E0B\u8F7D")}catch(E){console.log(E),se.ZP.error("\u8F6C\u6362\u5931\u8D25")}}function Ge(r){me(r,"json","json")}function Xe(r){me(r,"javascript","js")}var W,Qe=(0,K.forwardRef)(function(r,n){var p=r.isLoadedSheet,t=(0,K.useState)(!1),E=x()(t,2),a=E[0],d=E[1],o=(0,K.useState)(!1),f=x()(o,2),s=f[0],j=f[1],H=(0,K.useState)("JS"),I=x()(H,2),y=I[0],c=I[1],l=(0,K.useState)("WORD"),i=x()(l,2),v=i[0],Y=i[1];function G(A){W&&W.destroy();var h=[ze.Xy,y==="JS"?(0,ve.eJ)():(0,ge.AV)(),ce.tk.lineWrapping,Ae.PX,ce.tk.inputHandler.of(function(){return d(!1),!1}),y==="JS"?(0,Ee.ir)((0,ve.d)(new Le.r,{parserOptions:{ecmaVersion:2019,sourceType:"module"},env:{browser:!0,node:!1},rules:{semi:["error","never"]}})):(0,Ee.ir)((0,ge.ap)())];W=new ce.tk({doc:A,extensions:h,parent:document.querySelector("#code")})}function B(A){var h=ke({sheetId:A,keyMode:v}),U=x()(h,2),b=U[0],V=U[1];if(b.length&&!V){$.Z.error({message:"JSON\u8F6C\u6362\u5931\u8D25",description:"\u8BF7\u68C0\u67E5JS\u683C\u5F0F\u5316\u662F\u5426\u6B63\u5E38\uFF0C\u5E76\u4E0A\u62A5\u5F00\u53D1\u6B64\u6848\u4F8B"}),d(!1),G(b);return}G(y==="JS"?b:V),d(!1)}function ee(){return Q.apply(this,arguments)}function Q(){return Q=Fe()(F()().mark(function A(){var h,U,b,V,X,M;return F()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return j(!0),Z.next=3,He(1500);case 3:if(b=0,V=(h=W.state)===null||h===void 0||(U=h.values)===null||U===void 0?void 0:U.filter(function(L){return L==null?void 0:L.diagnostics}),V==null||V.forEach(function(L){L!=null&&L.selected&&b++}),!b){Z.next=9;break}return j(!1),Z.abrupt("return",$.Z.error({message:"\u672A\u901A\u8FC7\u6D4B\u8BD5",description:"\u5B58\u5728\u8BED\u6CD5\u9519\u8BEF\uFF0C\u8BF7\u6838\u67E5"}));case 9:if(X=W.state.toJSON().doc,!(v==="WORD"&&/请替换[0-9]*/g.test(X))){Z.next=13;break}return j(!1),Z.abrupt("return",$.Z.error({message:"\u672A\u901A\u8FC7\u6D4B\u8BD5",description:'\u5B58\u5728\u672A\u80FD\u89E3\u6790\u7684KEY\u503C(\u641C\u7D22"\u8BF7\u66FF\u6362"), \u8BF7\u624B\u52A8\u586B\u5199, \u5E76\u4E0A\u62A5\u6B64\u6848\u4F8B'}));case 13:if(M=/(export){1} +((const)|(let)|(var)){1} +(lang_((zh)|(ar)|(tr)|(ur)|(en))){1} *= *{{1}[^}]*}{1}/g,!(y==="JS"&&X.match(M).length!==5)){Z.next=17;break}return j(!1),Z.abrupt("return",$.Z.error({message:"\u672A\u901A\u8FC7\u6D4B\u8BD5",description:"JS\u6587\u4EF6\u9700\u8981Export\u76F8\u5E94\u5BF9\u8C61\uFF0C\u8BF7\u8865\u5145\u5173\u952E\u5B57"}));case 17:Te(X,y).then(function(){d(!0),j(!1),$.Z.success({message:"\u5DF2\u901A\u8FC7\u6D4B\u8BD5",description:"\u53EF\u4EE5\u6267\u884C\u63A8\u9001\u64CD\u4F5C"})}).catch(function(L){d(!1),j(!1),$.Z.error({message:"\u672A\u901A\u8FC7\u6D4B\u8BD5",description:L.toString()})});case 18:case"end":return Z.stop()}},A)})),Q.apply(this,arguments)}function ne(){We(W.state.toJSON().doc)}function te(){y==="JS"?Xe(W.state.toJSON().doc):Ge(W.state.toJSON().doc)}return(0,K.useEffect)(function(){p&&B()},[p,y,v]),(0,K.useImperativeHandle)(n,function(){return{formatSheet:B}},[y,v]),(0,u.jsxs)("div",{className:fe.codeBox,children:[(0,u.jsx)("div",{className:fe.code,id:"code"}),(0,u.jsx)("div",{className:fe.status,children:(0,u.jsxs)(Ne.Z,{size:8,children:[(0,u.jsx)(q.Z,{placement:"bottomRight",title:"\u5207\u6362KEY\u503C\u547D\u540D\u6A21\u5F0F, \u5355\u8BCD\u6A21\u5F0F\u4E66\u5199\u65F6\u8BED\u4E49\u4F1A\u66F4\u6E05\u6670, \u4F46\u5982\u679C\u82F1\u6587\u6587\u6848\u540E\u671F\u6709\u4FEE\u6539, KEY\u503C\u53EF\u80FD\u6709\u53D8\u52A8",children:(0,u.jsx)(ye.Z,{checkedChildren:"Words",unCheckedChildren:"Index",defaultChecked:!0,onChange:function(){return Y(function(h){return h==="WORD"?"INDEX":"WORD"})}})}),(0,u.jsx)(q.Z,{placement:"bottomRight",title:"\u5207\u6362JS/JSON\u683C\u5F0F",children:(0,u.jsx)(ye.Z,{checkedChildren:"JS",unCheckedChildren:"JSON",defaultChecked:!0,onChange:function(){return c(function(h){return h==="JS"?"JSON":"JS"})}})}),(0,u.jsx)(q.Z,{placement:"bottomRight",title:"\u4E0B\u8F7D",children:(0,u.jsx)(ue.Z,{icon:(0,u.jsx)(Pe.Z,{}),onClick:te})}),(0,u.jsx)(q.Z,{placement:"bottomRight",title:"\u590D\u5236",children:(0,u.jsx)(ue.Z,{icon:(0,u.jsx)(Ie.Z,{}),onClick:ne})}),a?(0,u.jsx)(u.Fragment,{}):(0,u.jsx)(q.Z,{placement:"bottomRight",title:"\u6D4B\u8BD5",children:(0,u.jsx)(ue.Z,{icon:s?(0,u.jsx)(Ue.Z,{}):(0,u.jsx)(Ve.Z,{}),type:"primary",onClick:ee,disabled:s})}),(0,u.jsx)(q.Z,{placement:"bottomRight",title:a?"\u63D0\u4EA4\u8BE5\u6587\u4EF6":"\u63D0\u4EA4\u8BE5\u6587\u4EF6(\u9700\u8981\u5148\u901A\u8FC7\u6D4B\u8BD5)",children:(0,u.jsx)(ue.Z,{type:"primary",icon:(0,u.jsx)(Me.Z,{}),disabled:!a})})]})})]})}),$e=Qe,qe={container:"container___GP_mb"},_e=function(){var n=(0,K.useState)(!1),p=x()(n,2),t=p[0],E=p[1],a=(0,K.useRef)(null);function d(o){var f;(f=a.current)===null||f===void 0||f.formatSheet(o!=null?o:"")}return(0,K.useEffect)(function(){var o=document.querySelector(".ant-pro-layout-content");return o==null||o.classList.add("noPadding"),function(){o==null||o.classList.remove("noPadding")}},[]),(0,u.jsxs)("div",{className:qe.container,children:[(0,u.jsx)(C,{setIsLoadedSheet:E,formatSheet:d}),(0,u.jsx)($e,{isLoadedSheet:t,ref:a})]})},en=_e},2773:function(pe,re,e){e.d(re,{Pj:function(){return de},ij:function(){return ae},zK:function(){return K}});var J="sheet",x="SangoTranslator",ie=1,k;function K(){return new Promise(function(z,C){var S=window.indexedDB.open(x,ie);S.onupgradeneeded=function(F){var P;k=F==null||(P=F.target)===null||P===void 0?void 0:P.result,k.objectStoreNames.contains(J)||k.createObjectStore(J)},S.onsuccess=function(F){var P;k=F==null||(P=F.target)===null||P===void 0?void 0:P.result,z(!0),console.log("DB\u8FDE\u63A5\u6210\u529F")},S.onerror=function(F){C(!1),console.log(F,"DB\u8FDE\u63A5\u5931\u8D25")}})}function he(z){var C=k.transaction(J,"readwrite").objectStore(J).add(z,"main");C.onsuccess=function(){console.log("\u5199\u5165",C.result)},C.onerror=function(S){console.log(S,"\u5199\u5165\u5931\u8D25")}}function ae(){return new Promise(function(z){var C=k.transaction(J).objectStore(J).get("main");C.onsuccess=function(S){var F;z(S==null||(F=S.target)===null||F===void 0?void 0:F.result)}})}function de(z){var C=k.transaction(J,"readwrite").objectStore(J).put(z,"main");C.onsuccess=function(){console.log("\u4FEE\u6539\u6210\u529F",C.result)},C.onerror=function(S){console.log(S,"\u4FEE\u6539\u5931\u8D25")}}function u(z){var C=k.transaction(J,"readwrite").objectStore(J).delete(z);C.onsuccess=function(){console.log("\u5220\u9664\u6210\u529F",C.result)},C.onerror=function(S){console.log(S,"\u5220\u9664\u5931\u8D25")}}}}]);
