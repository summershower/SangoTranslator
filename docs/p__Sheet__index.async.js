"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[447],{24601:function(m,u,l){l.r(u),l.d(u,{default:function(){return h}});var r=l(30279),d=l.n(r),s=l(93236),n=l(2773),c={lang:"zh",container:"sheetContainer",column:6,showinfobar:!1,data:[{name:"Sheet1",row:72,column:6,defaultRowHeight:24,defaultColWidth:240}],showtoolbarConfig:{undoRedo:!0,paintFormat:!0,currencyFormat:!1,percentageFormat:!1,numberDecrease:!1,numberIncrease:!1,moreFormats:!1,font:!0,fontSize:!0,bold:!0,italic:!0,strikethrough:!0,underline:!0,textColor:!0,fillColor:!0,border:!0,mergeCell:!0,horizontalAlignMode:!0,verticalAlignMode:!0,textWrapMode:!0,textRotateMode:!1,image:!1,link:!1,chart:!1,postil:!0,pivotTable:!1,function:!1,frozenMode:!0,sortAndFilter:!1,conditionalFormat:!1,dataVerification:!1,splitColumn:!1,screenshot:!1,findAndReplace:!0,protection:!0,print:!1},cellRightClickConfig:{copy:!0,copyAs:!0,paste:!0,insertRow:!0,insertColumn:!0,deleteRow:!0,deleteColumn:!0,deleteCell:!0,hideRow:!1,hideColumn:!1,rowHeight:!1,columnWidth:!1,clear:!0,matrix:!1,sort:!1,filter:!1,chart:!1,image:!1,link:!1,data:!1,cellFormat:!1},showstatisticBarConfig:{count:!0,view:!1,zoom:!0},hook:{updated:function(){(0,n.Pj)(window.luckysheet.getAllSheets())},sheetActivate:function(){setTimeout(function(){(0,n.Pj)(window.luckysheet.getAllSheets())},0)}}},g=l(62086),f=function(){var a=(0,s.useRef)(null);function t(){(0,n.zK)().then(function(){var e=d()({},c);console.log(e),(0,n.ij)().then(function(o){o&&(e.data=o),window.luckysheet.create(e)})}).catch(function(){window.luckysheet.create(c)})}return(0,s.useEffect)(function(){var e=document.querySelector(".ant-pro-layout-content");return e==null||e.classList.add("noPadding"),t(),function(){e==null||e.classList.remove("noPadding")}},[]),(0,g.jsx)("div",{style:{width:"100%",height:"100vh"},id:"sheetContainer",ref:a})},h=f},2773:function(m,u,l){l.d(u,{Pj:function(){return h},ij:function(){return f},zK:function(){return c}});var r="sheet",d="SangoTranslator",s=1,n;function c(){return new Promise(function(a,t){var e=window.indexedDB.open(d,s);e.onupgradeneeded=function(o){var i;n=o==null||(i=o.target)===null||i===void 0?void 0:i.result,n.objectStoreNames.contains(r)||n.createObjectStore(r)},e.onsuccess=function(o){var i;n=o==null||(i=o.target)===null||i===void 0?void 0:i.result,a(!0),console.log("DB\u8FDE\u63A5\u6210\u529F")},e.onerror=function(o){t(!1),console.log(o,"DB\u8FDE\u63A5\u5931\u8D25")}})}function g(a){var t=n.transaction(r,"readwrite").objectStore(r).add(a,"main");t.onsuccess=function(){console.log("\u5199\u5165",t.result)},t.onerror=function(e){console.log(e,"\u5199\u5165\u5931\u8D25")}}function f(){return new Promise(function(a){var t=n.transaction(r).objectStore(r).get("main");t.onsuccess=function(e){var o;a(e==null||(o=e.target)===null||o===void 0?void 0:o.result)}})}function h(a){var t=n.transaction(r,"readwrite").objectStore(r).put(a,"main");t.onsuccess=function(){console.log("\u4FEE\u6539\u6210\u529F",t.result)},t.onerror=function(e){console.log(e,"\u4FEE\u6539\u5931\u8D25")}}function v(a){var t=n.transaction(r,"readwrite").objectStore(r).delete(a);t.onsuccess=function(){console.log("\u5220\u9664\u6210\u529F",t.result)},t.onerror=function(e){console.log(e,"\u5220\u9664\u5931\u8D25")}}}}]);