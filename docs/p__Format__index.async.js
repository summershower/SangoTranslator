"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[142],{12979:function(ae,P,n){n.r(P),n.d(P,{default:function(){return be}});var g=n(46686),O=n.n(g),Y=n(30279),x=n.n(Y),S=n(93236),_={lang:"zh",container:"formatSheetContainer",showinfobar:!1,showtoolbar:!1,showstatisticBar:!1,enableAddRow:!1,sheetFormulaBar:!1,allowUpdate:!1,allowEdit:!1,showstatisticBarConfig:{count:!1,view:!1,zoom:!1},showsheetbarConfig:{add:!1,menu:!1,sheet:!0},cellRightClickConfig:{copy:!0,copyAs:!0,paste:!1,insertRow:!1,insertColumn:!1,deleteRow:!1,deleteColumn:!1,deleteCell:!1,hideRow:!1,hideColumn:!1,rowHeight:!1,columnWidth:!1,clear:!1,matrix:!1,sort:!1,filter:!1,chart:!1,image:!1,link:!1,data:!1,cellFormat:!1}},K=n(2773),l=n(62086),ee=function(e){var s=e.setIsLoadedSheet,m=e.formatSheet,f=(0,S.useRef)(null),c={sheetActivate:function(v){m(v)}};return(0,S.useEffect)(function(){(0,K.zK)().then(function(){var r=x()(x()({},_),{},{hook:c});(0,K.ij)().then(function(v){v&&(r.data=v),window.luckysheet.create(r),s(!0)})}).catch(function(){alert("failed")})},[]),(0,l.jsx)("div",{style:{flex:"1",height:"100%"},id:"formatSheetContainer",ref:f})},E=ee,a={codeBox:"codeBox____cjD0",code:"code___owvF8",status:"status___vdgrV",info:"info___nhoy_"},i=`
// zh
export const lang_zh = {
    <% zh %>
};

// en
export const lang_en = {
    <% en %>
};

// ar
export const lang_ar = {
    <% ar %>
};

// ur
export const lang_ur = {
    <% ur %>
};

// tr
export const lang_tr = {
    <% tr %>
};
`,u=/[ٹھپھگھٹژڑپےڈگںچ]/g,z=/[ةكءهه]/g,re=/[\u4e00-\u9fa5]/g,se=/[ÇçĞğıİÖöŞşÜü]/g,le=/[^a-zA-Z0-9_\-.$*@&;'"?/><,=~:：，。？ ]/,ie=function(e){return u.test(e)},ue=function(e){return se.test(e)},de=function(e){return z.test(e)},fe=function(e){return!le.test(e)},ce=function(e){return re.test(e)},ve=n(23560),he=n.n(ve);function ge(h){var e;h?e=window.luckysheet.getAllSheets().find(function(p){return p.index===h}).data:e=window.luckysheet.getAllSheets().find(function(p){return p.status}).data;for(var s=e.length-1;s>=0;s--){for(var m=0,f=0;f<e[s].length;f++){var c,r,v,R;(e[s][f]===null||!e[s][f].v&&!((c=e[s][f])!==null&&c!==void 0&&(r=c.ct)!==null&&r!==void 0&&(v=r[0])!==null&&v!==void 0&&(R=v.s)!==null&&R!==void 0&&R.v))&&m++}m===e[s].length&&e.splice(s,1)}for(var F=new Array(e[0].length),M=new Array(e[0].length).fill(0),U={ar:null,ur:null,zh:null,en:null,tr:null},j=new Array(F.length),J=0;J<j.length;J++)j[J]={ar:0,tr:0,ur:0,zh:0,en:0};for(var X=0;X<F.length;X++)F[X]=[];for(var k=0;k<e.length;k++)for(var y=0;y<e[k].length;y++){var G,V,A,Q,$,w=((G=e[k][y])===null||G===void 0?void 0:G.v)||((V=e[k][y])===null||V===void 0||(A=V.ct)===null||A===void 0||(Q=A.s)===null||Q===void 0||($=Q[0])===null||$===void 0?void 0:$.v);w?(w=w.trim(),F[y].push(w),M[y]++,ue(w)?j[y].tr++:ie(w)?j[y].ur++:de(w)?j[y].ar++:ce(w)?j[y].zh++:fe(w)&&w!==""&&j[y].en++):F[y].push("")}for(var te=Math.max.apply(null,M),T=M.length-1;T>=0;T--)M[T]<te/2&&(F.splice(T,1),j.splice(T,1));for(var Re=function(D){var C="en",t=0;Object.entries(j[D]).forEach(function(d){var o=O()(d,2),L=o[0],b=o[1];b>t&&(t=b,C=L)}),U[C]=D},q=0;q<j.length;q++)Re(q);var Z={};Object.keys(U).forEach(function(p){U[p]!==void 0&&(Z[p]=F[U[p]])});var N=new Array(te).fill("\u8BF7\u66FF\u6362"),B=i,oe="";Z.en&&Z.en.forEach(function(p,D){for(var C,t=p.replace("-","To").replace(/[^a-zA-Z0-9 ]/g," ").trim().split(" "),d="",o=0;o<Math.min(6,t.length);o++){var L;if(!(!t[o]||t[o]===" "||!d.length&&/^[0-9]+$/.test(t[o]))&&!(/^[0-9]+$/.test(t[o])&&(t[o].length>5||/[0-9]/.test(d[d.length-1])))){if(["the","if","to","of","on","for","has","have","can","could","in","xxx","xx","x","into"].includes(t[o].toLowerCase())&&(d.length+((t==null||(L=t[o+1])===null||L===void 0?void 0:L.length)||0)>21||o===Math.min(8,t.length)-1)||d.length>21)break;d+=(t[o].slice(0,1).toUpperCase()+t[o].slice(1)).trim()}}for(var b=0,W=0;W<N.length;W++)(b?N[W]===d+(b+1):N[W]===d)&&b++;b&&(d+=b+1),N[D]=d||"\u8BF7\u66FF\u6362",oe+="".concat(N[D],": `").concat(((C=Z.en)===null||C===void 0?void 0:C[D])||"","`,")}),B=B.replace("<% en %>",oe),Object.entries(Z).forEach(function(p){var D=O()(p,2),C=D[0],t=D[1];if(C!=="en"){if(!t)return B=B.replace("<% ".concat(C," %>"),"");for(var d="",o=0;o<N.length;o++)d+="".concat(N[o],": `").concat((t==null?void 0:t[o])||"","`,");B=B.replace("<% ".concat(C," %>"),d)}});var Fe={indent_size:2,space_in_empty_paren:!0};return B=he()(B,Fe),B}var ne=n(60832),me=n(95101),ye=n(21562),pe=n(11275),xe=n(55784),H=n(95598);function Ee(h){return new Promise(function(e,s){var m=document.createElement("script"),f=h+`
       try {
        const key = [];
        Object.entries(lang_en).forEach(([key,value], index)=>{
            key.push(key);
        })
        Object.entries(lang_zh).forEach(([key,value], index)=>{
            if(key[index] !== key) throw new Error('\u963F\u8BEDKEY\u503C\u4E0D\u4E00\u81F4');
        })
        Object.entries(lang_ar).forEach(([key,value], index)=>{
            if(key[index] !== key) throw new Error('\u963F\u8BEDKEY\u503C\u4E0D\u4E00\u81F4')
        })
        Object.entries(lang_ur).forEach(([key,value], index)=>{
            if(key[index] !== key) throw new Error('\u963F\u8BEDKEY\u503C\u4E0D\u4E00\u81F4');
        })
        Object.entries(lang_tr).forEach(([key,value], index)=>{
            if(key[index] !== key) throw new Error('\u571F\u8033\u5176KEY\u503C\u4E0D\u4E00\u81F4');
        })
        
       } catch(err) {
        throw new Error(err);
       }
        `;m.innerHTML=f,m.type="module";var c=document.createElement("iframe");console.log(213),c.onerror=function(r){console.log("\u62A5\u9519\u4E86"),s(r)},c.onload=function(){console.log("\u52A0\u8F7Ded");try{document.body.appendChild(m),e(!0)}catch(r){console.log(r)}},document.body.appendChild(c)})}var je=n(98543),we=n(98625),Ce=n(1781),I,Se=(0,S.forwardRef)(function(h,e){var s=h.isLoadedSheet;function m(r){I&&I.destroy(),I=new ne.tk({doc:r,extensions:[me.Xy,(0,ye.eJ)(),ne.tk.lineWrapping,pe.PX],parent:document.querySelector("#code")})}function f(r){var v=ge(r);m(v)}function c(){var r=I.state.toJSON().doc;Ee(r)}return(0,S.useEffect)(function(){s&&f()},[s]),(0,S.useImperativeHandle)(e,function(){return{formatSheet:f}},[]),(0,l.jsxs)("div",{className:a.codeBox,children:[(0,l.jsx)("div",{className:a.code,id:"code"}),(0,l.jsx)("div",{className:a.status,children:(0,l.jsxs)(xe.Z,{size:8,children:[(0,l.jsx)(H.Z,{icon:(0,l.jsx)(je.Z,{}),onClick:c,children:"\u6D4B\u8BD5"}),(0,l.jsx)(H.Z,{icon:(0,l.jsx)(we.Z,{}),children:"\u590D\u5236"}),(0,l.jsx)(H.Z,{type:"primary",icon:(0,l.jsx)(Ce.Z,{}),children:"\u63D0\u4EA4"})]})})]})}),ze=Se,Be={container:"container___GP_mb"},De=function(){var e=(0,S.useState)(!1),s=O()(e,2),m=s[0],f=s[1],c=(0,S.useRef)(null);function r(v){var R;(R=c.current)===null||R===void 0||R.formatSheet(v!=null?v:"")}return(0,l.jsxs)("div",{className:Be.container,children:[(0,l.jsx)(E,{setIsLoadedSheet:f,formatSheet:r}),(0,l.jsx)(ze,{isLoadedSheet:m,ref:c})]})},be=De},2773:function(ae,P,n){n.d(P,{Pj:function(){return l},ij:function(){return K},zK:function(){return S}});var g="sheet",O="SangoTranslator",Y=1,x;function S(){return new Promise(function(E,a){var i=window.indexedDB.open(O,Y);i.onupgradeneeded=function(u){var z;x=u==null||(z=u.target)===null||z===void 0?void 0:z.result,x.objectStoreNames.contains(g)||x.createObjectStore(g)},i.onsuccess=function(u){var z;x=u==null||(z=u.target)===null||z===void 0?void 0:z.result,E(!0),console.log("DB\u8FDE\u63A5\u6210\u529F")},i.onerror=function(u){a(!1),console.log(u,"DB\u8FDE\u63A5\u5931\u8D25")}})}function _(E){var a=x.transaction(g,"readwrite").objectStore(g).add(E,"main");a.onsuccess=function(){console.log("\u5199\u5165",a.result)},a.onerror=function(i){console.log(i,"\u5199\u5165\u5931\u8D25")}}function K(){return new Promise(function(E){var a=x.transaction(g).objectStore(g).get("main");a.onsuccess=function(i){var u;E(i==null||(u=i.target)===null||u===void 0?void 0:u.result)}})}function l(E){var a=x.transaction(g,"readwrite").objectStore(g).put(E,"main");a.onsuccess=function(){console.log("\u4FEE\u6539\u6210\u529F",a.result)},a.onerror=function(i){console.log(i,"\u4FEE\u6539\u5931\u8D25")}}function ee(E){var a=x.transaction(g,"readwrite").objectStore(g).delete(E);a.onsuccess=function(){console.log("\u5220\u9664\u6210\u529F",a.result)},a.onerror=function(i){console.log(i,"\u5220\u9664\u5931\u8D25")}}}}]);
