"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[68],{71191:function(ee,J,a){var C=a(46686),k=a.n(C),H=a(93236),w=a(2773);J.Z=function(){var X=(0,H.useState)([]),U=k()(X,2),i=U[0],I=U[1];return(0,H.useEffect)(function(){(0,w.zK)().then(function(){(0,w.pJ)().then(function(D){var A=Array.isArray(D)?D.filter(function(S){return(S==null?void 0:S.js)||(S==null?void 0:S.json)}).sort(function(S,c){return c.time-S.time}):[];A.length&&I(A)})})},[]),i}},58946:function(ee,J,a){var C=a(93236);J.Z=function(){(0,C.useEffect)(function(){var k=document.querySelector(".ant-pro-layout-content");return k==null||k.classList.add("noPadding"),function(){k==null||k.classList.remove("noPadding")}},[])}},37334:function(ee,J,a){a.r(J),a.d(J,{default:function(){return qe}});var C=a(46686),k=a.n(C),H=a(78692),w=a(49256),X=a(84875),U=a.n(X),i=a(93236),I=a(85665),D=a(24653),A=a(54412),S=a(46783);const c=e=>{const{componentCls:r,sizePaddingEdgeHorizontal:o,colorSplit:n,lineWidth:t}=e;return{[r]:Object.assign(Object.assign({},(0,S.Wf)(e)),{borderBlockStart:`${t}px solid ${n}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${e.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${t}px solid ${n}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${e.dividerHorizontalGutterMargin}px 0`},"&-horizontal&-with-text":{display:"flex",alignItems:"center",margin:`${e.dividerHorizontalWithTextGutterMargin}px 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${n}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${t}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},"&-horizontal&-with-text-left":{"&::before":{width:"5%"},"&::after":{width:"95%"}},"&-horizontal&-with-text-right":{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${r}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:n,borderStyle:"dashed",borderWidth:`${t}px 0 0`},"&-horizontal&-with-text&-dashed":{"&::before, &::after":{borderStyle:"dashed none none"}},"&-vertical&-dashed":{borderInlineStart:t,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},"&-plain&-with-text":{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},"&-horizontal&-with-text-left&-no-default-orientation-margin-left":{"&::before":{width:0},"&::after":{width:"100%"},[`${r}-inner-text`]:{paddingInlineStart:o}},"&-horizontal&-with-text-right&-no-default-orientation-margin-right":{"&::before":{width:"100%"},"&::after":{width:0},[`${r}-inner-text`]:{paddingInlineEnd:o}}})}};var f=(0,D.Z)("Divider",e=>{const r=(0,A.TS)(e,{dividerVerticalGutterMargin:e.marginXS,dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG});return[c(r)]},{sizePaddingEdgeHorizontal:0}),s=function(e,r){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(o[n[t]]=e[n[t]]);return o},F=e=>{const{getPrefixCls:r,direction:o}=i.useContext(I.E_),{prefixCls:n,type:t="horizontal",orientation:l="center",orientationMargin:d,className:x,children:y,dashed:R,plain:E}=e,z=s(e,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),g=r("divider",n),[M,L]=f(g),P=l.length>0?`-${l}`:l,v=!!y,b=l==="left"&&d!=null,O=l==="right"&&d!=null,m=U()(g,L,`${g}-${t}`,{[`${g}-with-text`]:v,[`${g}-with-text${P}`]:v,[`${g}-dashed`]:!!R,[`${g}-plain`]:!!E,[`${g}-rtl`]:o==="rtl",[`${g}-no-default-orientation-margin-left`]:b,[`${g}-no-default-orientation-margin-right`]:O},x),_=Object.assign(Object.assign({},b&&{marginLeft:d}),O&&{marginRight:d});return M(i.createElement("div",Object.assign({className:m},z,{role:"separator"}),y&&t!=="vertical"&&i.createElement("span",{className:`${g}-inner-text`,style:_},y)))},se=a(54323),me=a(99656),ye=a(90827);function Ce(e){return Object.keys(e).reduce((r,o)=>((o.startsWith("data-")||o.startsWith("aria-")||o==="role")&&!o.startsWith("data-__")&&(r[o]=e[o]),r),{})}const he=i.createContext(null),Se=he.Provider;var xe=he;const ge=i.createContext(null),_e=ge.Provider;var Ee=a(15882),ve=a(24255),Oe=a(30486),te=a(56453),$e=a(83235),je=a(52113),Pe=a(1423),Ie=a(55859),be=function(e){(0,Pe.Z)(o,e);var r=(0,Ie.Z)(o);function o(n){var t;(0,$e.Z)(this,o),t=r.call(this,n),t.handleChange=function(d){var x=t.props,y=x.disabled,R=x.onChange;y||("checked"in t.props||t.setState({checked:d.target.checked}),R&&R({target:(0,te.Z)((0,te.Z)({},t.props),{},{checked:d.target.checked}),stopPropagation:function(){d.stopPropagation()},preventDefault:function(){d.preventDefault()},nativeEvent:d.nativeEvent}))},t.saveInput=function(d){t.input=d};var l="checked"in n?n.checked:n.defaultChecked;return t.state={checked:l},t}return(0,je.Z)(o,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var t,l=this.props,d=l.prefixCls,x=l.className,y=l.style,R=l.name,E=l.id,z=l.type,g=l.disabled,M=l.readOnly,L=l.tabIndex,P=l.onClick,v=l.onFocus,b=l.onBlur,O=l.onKeyDown,m=l.onKeyPress,_=l.onKeyUp,$=l.autoFocus,T=l.value,K=l.required,W=(0,Oe.Z)(l,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),p=Object.keys(W).reduce(function(B,G){return(G.substr(0,5)==="aria-"||G.substr(0,5)==="data-"||G==="role")&&(B[G]=W[G]),B},{}),V=this.state.checked,N=U()(d,x,(t={},(0,ve.Z)(t,"".concat(d,"-checked"),V),(0,ve.Z)(t,"".concat(d,"-disabled"),g),t));return i.createElement("span",{className:N,style:y},i.createElement("input",(0,Ee.Z)({name:R,id:E,type:z,required:K,readOnly:M,disabled:g,tabIndex:L,className:"".concat(d,"-input"),checked:!!V,onClick:P,onFocus:v,onBlur:b,onKeyUp:_,onKeyDown:O,onKeyPress:m,onChange:this.handleChange,autoFocus:$,ref:this.saveInput,value:T},p)),i.createElement("span",{className:"".concat(d,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(t,l){return"checked"in t?(0,te.Z)((0,te.Z)({},l),{},{checked:t.checked}):null}}]),o}(i.Component);be.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};var De=be,Re=a(17821),Be=a(5092),ke=a(54833),we=a(69809);const ze=new we.E4("antRadioEffect",{"0%":{transform:"scale(1)",opacity:.5},"100%":{transform:"scale(1.6)",opacity:0}}),Le=e=>{const{componentCls:r,antCls:o}=e;return{[`${r}-group`]:Object.assign(Object.assign({},(0,S.Wf)(e)),{display:"inline-block",fontSize:0,"&&-rtl":{direction:"rtl"},[`${o}-badge ${o}-badge-count`]:{zIndex:1},[`> ${o}-badge:not(:first-child) > ${o}-button-wrapper`]:{borderInlineStart:"none"}})}},Me=e=>{const{componentCls:r,radioWrapperMarginRight:o,radioCheckedColor:n,radioSize:t,motionDurationSlow:l,motionDurationMid:d,motionEaseInOut:x,motionEaseInOutCirc:y,radioButtonBg:R,colorBorder:E,lineWidth:z,radioDotSize:g,colorBgContainerDisabled:M,colorTextDisabled:L,paddingXS:P,radioDotDisabledColor:v,lineType:b,radioDotDisabledSize:O,wireframe:m,colorWhite:_}=e,$=`${r}-inner`;return{[`${r}-wrapper`]:Object.assign(Object.assign({},(0,S.Wf)(e)),{position:"relative",display:"inline-flex",alignItems:"baseline",marginInlineStart:0,marginInlineEnd:o,cursor:"pointer","&&-rtl":{direction:"rtl"},"&-disabled":{cursor:"not-allowed"},"&::after":{display:"inline-block",width:0,overflow:"hidden",content:'"\\a0"'},[`${r}-checked::after`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,width:"100%",height:"100%",border:`${z}px ${b} ${n}`,borderRadius:"50%",visibility:"hidden",animationName:ze,animationDuration:l,animationTimingFunction:x,animationFillMode:"both",content:'""'},[r]:Object.assign(Object.assign({},(0,S.Wf)(e)),{position:"relative",display:"inline-block",outline:"none",cursor:"pointer",alignSelf:"center"}),[`${r}-wrapper:hover &,
        &:hover ${$}`]:{borderColor:n},[`${r}-input:focus-visible + ${$}`]:Object.assign({},(0,S.oN)(e)),[`${r}:hover::after, ${r}-wrapper:hover &::after`]:{visibility:"visible"},[`${r}-inner`]:{"&::after":{boxSizing:"border-box",position:"absolute",insetBlockStart:"50%",insetInlineStart:"50%",display:"block",width:t,height:t,marginBlockStart:t/-2,marginInlineStart:t/-2,backgroundColor:m?n:_,borderBlockStart:0,borderInlineStart:0,borderRadius:t,transform:"scale(0)",opacity:0,transition:`all ${l} ${y}`,content:'""'},boxSizing:"border-box",position:"relative",insetBlockStart:0,insetInlineStart:0,display:"block",width:t,height:t,backgroundColor:R,borderColor:E,borderStyle:"solid",borderWidth:z,borderRadius:"50%",transition:`all ${d}`},[`${r}-input`]:{position:"absolute",insetBlockStart:0,insetInlineEnd:0,insetBlockEnd:0,insetInlineStart:0,zIndex:1,cursor:"pointer",opacity:0},[`${r}-checked`]:{[$]:{borderColor:n,backgroundColor:m?R:n,"&::after":{transform:`scale(${g/t})`,opacity:1,transition:`all ${l} ${y}`}}},[`${r}-disabled`]:{cursor:"not-allowed",[$]:{backgroundColor:M,borderColor:E,cursor:"not-allowed","&::after":{backgroundColor:v}},"&-input":{cursor:"not-allowed"},[`${r}-disabled + span`]:{color:L,cursor:"not-allowed"},[`&${r}-checked`]:{[$]:{"&::after":{transform:`scale(${O/t})`}}}},[`span${r} + *`]:{paddingInlineStart:P,paddingInlineEnd:P}})}},Te=e=>{const{radioButtonColor:r,controlHeight:o,componentCls:n,lineWidth:t,lineType:l,colorBorder:d,motionDurationSlow:x,motionDurationMid:y,radioButtonPaddingHorizontal:R,fontSize:E,radioButtonBg:z,fontSizeLG:g,controlHeightLG:M,controlHeightSM:L,paddingXS:P,borderRadius:v,borderRadiusSM:b,borderRadiusLG:O,radioCheckedColor:m,radioButtonCheckedBg:_,radioButtonHoverColor:$,radioButtonActiveColor:T,radioSolidCheckedColor:K,colorTextDisabled:W,colorBgContainerDisabled:p,radioDisabledButtonCheckedColor:V,radioDisabledButtonCheckedBg:N}=e;return{[`${n}-button-wrapper`]:{position:"relative",display:"inline-block",height:o,margin:0,paddingInline:R,paddingBlock:0,color:r,fontSize:E,lineHeight:`${o-t*2}px`,background:z,border:`${t}px ${l} ${d}`,borderBlockStartWidth:t+.02,borderInlineStartWidth:0,borderInlineEndWidth:t,cursor:"pointer",transition:[`color ${y}`,`background ${y}`,`border-color ${y}`,`box-shadow ${y}`].join(","),a:{color:r},[`> ${n}-button`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,zIndex:-1,width:"100%",height:"100%"},"&:not(:first-child)":{"&::before":{position:"absolute",insetBlockStart:-t,insetInlineStart:-t,display:"block",boxSizing:"content-box",width:1,height:"100%",paddingBlock:t,paddingInline:0,backgroundColor:d,transition:`background-color ${x}`,content:'""'}},"&:first-child":{borderInlineStart:`${t}px ${l} ${d}`,borderStartStartRadius:v,borderEndStartRadius:v},"&:last-child":{borderStartEndRadius:v,borderEndEndRadius:v},"&:first-child:last-child":{borderRadius:v},[`${n}-group-large &`]:{height:M,fontSize:g,lineHeight:`${M-t*2}px`,"&:first-child":{borderStartStartRadius:O,borderEndStartRadius:O},"&:last-child":{borderStartEndRadius:O,borderEndEndRadius:O}},[`${n}-group-small &`]:{height:L,paddingInline:P-t,paddingBlock:0,lineHeight:`${L-t*2}px`,"&:first-child":{borderStartStartRadius:b,borderEndStartRadius:b},"&:last-child":{borderStartEndRadius:b,borderEndEndRadius:b}},"&:hover":{position:"relative",color:m},"&:has(:focus-visible)":Object.assign({},(0,S.oN)(e)),[`${n}-inner, input[type='checkbox'], input[type='radio']`]:{width:0,height:0,opacity:0,pointerEvents:"none"},"&-checked:not(&-disabled)":{zIndex:1,color:m,background:_,borderColor:m,"&::before":{backgroundColor:m},"&:first-child":{borderColor:m},"&:hover":{color:$,borderColor:$,"&::before":{backgroundColor:$}},"&:active":{color:T,borderColor:T,"&::before":{backgroundColor:T}}},[`${n}-group-solid &-checked:not(&-disabled)`]:{color:K,background:m,borderColor:m,"&:hover":{color:K,background:$,borderColor:$},"&:active":{color:K,background:T,borderColor:T}},"&-disabled":{color:W,backgroundColor:p,borderColor:d,cursor:"not-allowed","&:first-child, &:hover":{color:W,backgroundColor:p,borderColor:d}},"&-disabled&-checked":{color:V,backgroundColor:N,borderColor:d,boxShadow:"none"}}}};var pe=(0,D.Z)("Radio",e=>{const{padding:r,lineWidth:o,controlItemBgActiveDisabled:n,colorTextDisabled:t,colorBgContainer:l,fontSizeLG:d,controlOutline:x,colorPrimaryHover:y,colorPrimaryActive:R,colorText:E,colorPrimary:z,marginXS:g,controlOutlineWidth:M,colorTextLightSolid:L,wireframe:P}=e,v=`0 0 0 ${M}px ${x}`,b=v,O=d,m=4,_=O-m*2,$=P?_:O-(m+o)*2,T=z,K=E,W=y,p=R,V=r-o,N=t,B=g,G=(0,A.TS)(e,{radioFocusShadow:v,radioButtonFocusShadow:b,radioSize:O,radioDotSize:$,radioDotDisabledSize:_,radioCheckedColor:T,radioDotDisabledColor:t,radioSolidCheckedColor:L,radioButtonBg:l,radioButtonCheckedBg:l,radioButtonColor:K,radioButtonHoverColor:W,radioButtonActiveColor:p,radioButtonPaddingHorizontal:V,radioDisabledButtonCheckedBg:n,radioDisabledButtonCheckedColor:N,radioWrapperMarginRight:B});return[Le(G),Me(G),Te(G)]}),Ne=function(e,r){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(o[n[t]]=e[n[t]]);return o};const Ae=(e,r)=>{const o=i.useContext(xe),n=i.useContext(ge),{getPrefixCls:t,direction:l}=i.useContext(I.E_),d=i.useRef(),x=(0,Re.sQ)(r,d),{isFormItemInput:y}=i.useContext(ke.aM),R=K=>{var W,p;(W=e.onChange)===null||W===void 0||W.call(e,K),(p=o==null?void 0:o.onChange)===null||p===void 0||p.call(o,K)},{prefixCls:E,className:z,children:g,style:M,disabled:L}=e,P=Ne(e,["prefixCls","className","children","style","disabled"]),v=t("radio",E),b=((o==null?void 0:o.optionType)||n)==="button"?`${v}-button`:v,[O,m]=pe(v),_=Object.assign({},P),$=i.useContext(Be.Z);_.disabled=L||$,o&&(_.name=o.name,_.onChange=R,_.checked=e.value===o.value,_.disabled=_.disabled||o.disabled);const T=U()(`${b}-wrapper`,{[`${b}-wrapper-checked`]:_.checked,[`${b}-wrapper-disabled`]:_.disabled,[`${b}-wrapper-rtl`]:l==="rtl",[`${b}-wrapper-in-form-item`]:y},z,m);return O(i.createElement("label",{className:T,style:M,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},i.createElement(De,Object.assign({},_,{type:"radio",prefixCls:b,ref:x})),g!==void 0?i.createElement("span",null,g):null))};var ne=i.forwardRef(Ae);const We=i.forwardRef((e,r)=>{const{getPrefixCls:o,direction:n}=i.useContext(I.E_),t=i.useContext(ye.Z),[l,d]=(0,me.Z)(e.defaultValue,{value:e.value}),x=B=>{const G=l,ie=B.target.value;"value"in e||d(ie);const{onChange:le}=e;le&&ie!==G&&le(B)},{prefixCls:y,className:R="",options:E,buttonStyle:z="outline",disabled:g,children:M,size:L,style:P,id:v,onMouseEnter:b,onMouseLeave:O,onFocus:m,onBlur:_}=e,$=o("radio",y),T=`${$}-group`,[K,W]=pe($);let p=M;E&&E.length>0&&(p=E.map(B=>typeof B=="string"||typeof B=="number"?i.createElement(ne,{key:B.toString(),prefixCls:$,disabled:g,value:B,checked:l===B},B):i.createElement(ne,{key:`radio-group-value-options-${B.value}`,prefixCls:$,disabled:B.disabled||g,value:B.value,checked:l===B.value,style:B.style},B.label)));const V=L||t,N=U()(T,`${T}-${z}`,{[`${T}-${V}`]:V,[`${T}-rtl`]:n==="rtl"},R,W);return K(i.createElement("div",Object.assign({},Ce(e),{className:N,style:P,onMouseEnter:b,onMouseLeave:O,onFocus:m,onBlur:_,id:v,ref:r}),i.createElement(Se,{value:{onChange:x,value:l,disabled:e.disabled,name:e.name,optionType:e.optionType}},p)))});var Ue=i.memo(We),Ke=function(e,r){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(o[n[t]]=e[n[t]]);return o};const Fe=(e,r)=>{const{getPrefixCls:o}=i.useContext(I.E_),{prefixCls:n}=e,t=Ke(e,["prefixCls"]),l=o("radio",n);return i.createElement(_e,{value:"button"},i.createElement(ne,Object.assign({prefixCls:l},t,{type:"radio",ref:r})))};var Ze=i.forwardRef(Fe);const oe=ne;oe.Button=Ze,oe.Group=Ue,oe.__ANT_RADIO=!0;var Ge=oe,Q=a(66397),de={langItem:"langItem___SjGJP",key:"key___aCpzl",zh:"zh___z2uKL"},j=a(62086),Je=function(r){var o=r.keyName,n=r.zh,t=r.tr,l=r.en,d=r.UILang,x=r.pageName,y=r.copyMode,R=r.keywords,E=R===void 0?"":R;function z(){var P=/(?<={)[^{}]*(?=})/g,v="{",b=l.match(P);b&&b.forEach(function(O,m){v+=" ".concat(O,": 0"),m<b.length-1&&(v+=","),m===b.length-1&&(v+=" }")}),y==="TEMPLATE"?b?(0,Q.JG)("{{ $t('".concat(x,".").concat(o,"', ").concat(v,") }}")):(0,Q.JG)("{{ $t('".concat(x,".").concat(o,"') }}")):y==="JS"?b?(0,Q.JG)("t('".concat(x,".").concat(o,"', ").concat(v,")")):(0,Q.JG)("t('".concat(x,".").concat(o,"')")):y==="TEMPLATEJS"&&(b?(0,Q.JG)("$t('".concat(x,".").concat(o,"', ").concat(v,")")):(0,Q.JG)("$t('".concat(x,".").concat(o,"')")))}var g=(0,i.useRef)(null),M=(0,i.useRef)(null);function L(P){var v=P.textContent.replace(new RegExp(E,"gi"),"<span style='color: orange'>$&</span>");P.innerHTML=v}return(0,i.useEffect)(function(){L(g.current),L(M.current)},[E]),(0,j.jsxs)("div",{className:de.langItem,onClick:z,children:[(0,j.jsx)("div",{className:de.key,ref:g,children:d==="TR"?t:l}),(0,j.jsx)("div",{className:de.zh,ref:M,children:n})]})},He=Je,re={container:"container___oVx6w",status:"status___CB22L",search:"search___u4RZ4",langs:"langs___MfdSu"},Ve=a(58946),Xe=a(71191),ae=a(58024),Qe=H.Z.Search,Ye=function(){var r=(0,i.useState)(""),o=k()(r,2),n=o[0],t=o[1],l=(0,i.useState)(),d=k()(l,2),x=d[0],y=d[1],R=(0,i.useState)(""),E=k()(R,2),z=E[0],g=E[1],M=(0,i.useState)("TEMPLATE"),L=k()(M,2),P=L[0],v=L[1],b=(0,i.useState)("TR"),O=k()(b,2),m=O[0],_=O[1],$=(0,i.useState)(""),T=k()($,2),K=T[0],W=T[1],p=(0,i.useDeferredValue)(x),V=(0,i.useRef)(null);(0,Ve.Z)();var N=(0,Xe.Z)();function B(){var u=N.find(function(Z){return Z.sheetId===n});u!=null&&u.json?y(JSON.parse(u.json)):u!=null&&u.js&&(0,Q.UZ)(u.js).then(function(Z){console.log(Z,"???"),y(Z)})}function G(u){W(u.target.value.trim()),(0,ae.W3)(n,"prefix",u.target.value.trim())}(0,i.useEffect)(function(){N!=null&&N[0]&&t(N[0].sheetId)},[N]),(0,i.useEffect)(function(){var u;B(),W((0,ae.gT)(n,"prefix")||(N==null||(u=N.find(function(Z){return Z.sheetId===n}))===null||u===void 0?void 0:u.sheetName)||""),_((0,ae.gT)(n,"UILang")||"TR")},[n]);function ie(u){t(u)}function le(u){v(u.target.value),g("")}function et(u){_(u),g(""),(0,ae.W3)(n,"UILang",u)}var tt=[{label:"\u6A21\u677F",value:"TEMPLATE"},{label:"JS",value:"JS"},{label:"\u6A21\u677FJS",value:"TEMPLATEJS"}];function nt(u){g(u.target.value.trim())}return(0,j.jsxs)("div",{className:re.container,children:[(0,j.jsxs)("div",{className:re.status,children:[(0,j.jsxs)(w.Z,{split:(0,j.jsx)(F,{type:"vertical"}),children:[(0,j.jsxs)("div",{children:[(0,j.jsx)("span",{children:"\u9009\u62E9\u5DE5\u4F5C\u8868\uFF1A"}),(0,j.jsx)(se.Z,{defaultValue:n,style:{width:200},onChange:ie,options:N.map(function(u){return{value:u.sheetId,label:u.sheetName}})},n)]}),(0,j.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,j.jsx)("span",{style:{width:"45px"},children:"\u524D\u7F00: "}),(0,j.jsx)(H.Z,{value:K,onChange:G})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("span",{children:"UI\u8BED\u8A00: "}),(0,j.jsx)(se.Z,{value:m,style:{width:60},onChange:et,options:[{value:"TR",label:"TR"},{value:"EN",label:"EN"}]})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("span",{children:"\u6A21\u5F0F\uFF1A"}),(0,j.jsx)(Ge.Group,{buttonStyle:"solid",optionType:"button",options:tt,value:P,onChange:le})]})]}),(0,j.jsx)("div",{className:re.search,children:(0,j.jsx)(Qe,{placeholder:"\u8F93\u5165".concat(m,"/ZH\u8FDB\u884C\u68C0\u7D22"),allowClear:!0,onChange:nt,enterButton:!0,ref:V,style:{width:500}},m+P)})]}),(0,j.jsx)("div",{className:re.langs,children:Object.keys((p==null?void 0:p.en)||{}).filter(function(u){var Z,Y,q,ce,ue,fe;return(p==null||(Z=p.zh)===null||Z===void 0||(Y=Z[u])===null||Y===void 0||(q=Y.toLowerCase())===null||q===void 0?void 0:q.includes(z.toLowerCase()))||(p==null||(ce=p[m.toLowerCase()])===null||ce===void 0||(ue=ce[u])===null||ue===void 0||(fe=ue.toLowerCase())===null||fe===void 0?void 0:fe.includes(z.toLowerCase()))}).map(function(u){var Z,Y,q;return(0,j.jsx)(He,{keyName:u,zh:(p==null||(Z=p.zh)===null||Z===void 0?void 0:Z[u])||"",en:(p==null||(Y=p.en)===null||Y===void 0?void 0:Y[u])||"",tr:(p==null||(q=p.tr)===null||q===void 0?void 0:q[u])||"",UILang:m,copyMode:P,pageName:K||"",keywords:z},u)})})]})},qe=Ye},66397:function(ee,J,a){a.d(J,{Bl:function(){return U},JG:function(){return k},SV:function(){return X},UZ:function(){return i},_v:function(){return H}});var C=a(45480);function k(I){try{var D=document.createElement("textarea");D.value=I,document.body.appendChild(D),D.setAttribute("readonly","readonly"),D.setSelectionRange(0,D.value.length),D.select(),document.execCommand("Copy"),document.body.removeChild(D),C.ZP.success("\u590D\u5236\u6210\u529F")}catch{C.ZP.error("\u590D\u5236\u5931\u8D25")}}function H(I){return new Promise(function(D){setTimeout(function(){D(!0)},I||1e3)})}function w(I,D,A){try{var S=document.createElement("a");S.href=URL.createObjectURL(new Blob([I],{type:"text/".concat(D)})),S.setAttribute("download","lang.".concat(A)),document.body.appendChild(S),S.click(),document.body.removeChild(S),C.ZP.success("\u5DF2\u5F00\u59CB\u4E0B\u8F7D")}catch(c){console.log(c),C.ZP.error("\u8F6C\u6362\u5931\u8D25")}}function X(I){w(I,"json","json")}function U(I){w(I,"javascript","js")}function i(I){return new Promise(function(D,A){try{var S=function(){try{document.body.appendChild(c),setTimeout(function(){window.iframeGetObjectErrorHandler("\u83B7\u53D6\u4EE3\u7801\u8D85\u65F6\uFF0C\u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u4EE3\u7801\u9519\u8BEF")},3e3)}catch(F){A(F)}},c=document.createElement("script"),f=I+`\rtry {
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
        `;c.innerHTML=f,c.type="module";var s=document.createElement("iframe");s.style.position="absolute",s.style.zIndex="-1",s.style.top="-9999px",s.style.width="1px",s.style.height="1px",s.onload=S,s.onerror=function(h){A(h)},window.iframeGetObjectErrorHandler=function(h){A(h)},window.iframeGetObject=function(h){D(h),document.body.removeChild(s)},document.body.appendChild(s)}catch(h){A(h)}})}},2773:function(ee,J,a){a.d(J,{Pj:function(){return I},ij:function(){return i},pJ:function(){return A},yH:function(){return S},zK:function(){return X}});var C="sheet",k="SangoTranslator",H=1,w;function X(){return new Promise(function(c,f){var s=window.indexedDB.open(k,H);s.onupgradeneeded=function(h){var F;w=h==null||(F=h.target)===null||F===void 0?void 0:F.result,w.objectStoreNames.contains(C)||w.createObjectStore(C)},s.onsuccess=function(h){var F;w=h==null||(F=h.target)===null||F===void 0?void 0:F.result,c(!0),console.log("DB\u8FDE\u63A5\u6210\u529F")},s.onerror=function(h){f(!1),console.log(h,"DB\u8FDE\u63A5\u5931\u8D25")}})}function U(c){var f=w.transaction(C,"readwrite").objectStore(C).add(c,"main");f.onsuccess=function(){console.log("\u5199\u5165",f.result)},f.onerror=function(s){console.log(s,"\u5199\u5165\u5931\u8D25")}}function i(){return new Promise(function(c){var f=w.transaction(C).objectStore(C).get("main");f.onsuccess=function(s){var h;c(s==null||(h=s.target)===null||h===void 0?void 0:h.result)}})}function I(c){var f=w.transaction(C,"readwrite").objectStore(C).put(c,"main");f.onsuccess=function(){console.log("\u4FEE\u6539\u6210\u529F",f.result)},f.onerror=function(s){console.log(s,"\u4FEE\u6539\u5931\u8D25")}}function D(c){var f=w.transaction(C,"readwrite").objectStore(C).delete(c);f.onsuccess=function(){console.log("\u5220\u9664\u6210\u529F",f.result)},f.onerror=function(s){console.log(s,"\u5220\u9664\u5931\u8D25")}}function A(){return new Promise(function(c){var f=w.transaction(C).objectStore(C).getAll();f.onsuccess=function(s){var h;c(s==null||(h=s.target)===null||h===void 0?void 0:h.result)}})}function S(c){var f=w.transaction(C,"readwrite").objectStore(C).put(c,c.sheetId);f.onsuccess=function(){console.log("\u50A8\u5B58\u6587\u4EF6\u6210\u529F",f.result)},f.onerror=function(s){console.log(s,"\u50A8\u5B58\u6587\u4EF6\u5931\u8D25")}}},58024:function(ee,J,a){a.d(J,{W3:function(){return I},gT:function(){return D},sI:function(){return A},tL:function(){return S}});var C=a(94434),k=a.n(C),H=a(93275),w=a.n(H),X=a(30279),U=a.n(X),i={UILang:"TR",prefix:"",keyMode:"WORD",formatMode:"JS"};function I(c,f,s){try{var h=localStorage.getItem(c),F=h?U()(U()({},JSON.parse(h)),{},w()({},f,s)):U()(U()({},i),{},w()({},f,s));localStorage.setItem(c,JSON.stringify(F))}catch{}}function D(c,f){try{var s=localStorage.getItem(c),h=s?JSON.parse(s):i;return h[f]}catch{}}function A(c){try{var f=localStorage.getItem("cloudSheet"),s=f?[c].concat(k()(JSON.parse(f).filter(function(h){return h.sheetId!==c.sheetId}))):[c];console.log(s),localStorage.setItem("cloudSheet",JSON.stringify(s))}catch{}}function S(){try{var c=localStorage.getItem("cloudSheet");console.log(c);var f=c?JSON.parse(c):[];return f}catch{return[]}}}}]);
