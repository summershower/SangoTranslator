"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[68],{16453:function(te,J,a){var x=a(30577),B=a.n(x),H=a(93236),R=a(8311);J.Z=function(){var X=(0,H.useState)([]),U=B()(X,2),i=U[0],P=U[1];return(0,H.useEffect)(function(){(0,R.zK)().then(function(){(0,R.pJ)().then(function(I){var A=Array.isArray(I)?I.filter(function(_){return(_==null?void 0:_.js)||(_==null?void 0:_.json)}).sort(function(_,u){return u.time-_.time}):[];A.length&&P(A)})})},[]),i}},5317:function(te,J,a){var x=a(93236);J.Z=function(){(0,x.useEffect)(function(){var B=document.querySelector(".ant-pro-layout-content");return B==null||B.classList.add("noPadding"),function(){B==null||B.classList.remove("noPadding")}},[])}},81037:function(te,J,a){a.r(J),a.d(J,{default:function(){return qe}});var x=a(30577),B=a.n(x),H=a(78692),R=a(49256),X=a(84875),U=a.n(X),i=a(93236),P=a(85665),I=a(24653),A=a(54412),_=a(46783);const u=e=>{const{componentCls:r,sizePaddingEdgeHorizontal:o,colorSplit:n,lineWidth:t}=e;return{[r]:Object.assign(Object.assign({},(0,_.Wf)(e)),{borderBlockStart:`${t}px solid ${n}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${e.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${t}px solid ${n}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${e.dividerHorizontalGutterMargin}px 0`},"&-horizontal&-with-text":{display:"flex",alignItems:"center",margin:`${e.dividerHorizontalWithTextGutterMargin}px 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${n}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${t}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},"&-horizontal&-with-text-left":{"&::before":{width:"5%"},"&::after":{width:"95%"}},"&-horizontal&-with-text-right":{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${r}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:n,borderStyle:"dashed",borderWidth:`${t}px 0 0`},"&-horizontal&-with-text&-dashed":{"&::before, &::after":{borderStyle:"dashed none none"}},"&-vertical&-dashed":{borderInlineStart:t,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},"&-plain&-with-text":{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},"&-horizontal&-with-text-left&-no-default-orientation-margin-left":{"&::before":{width:0},"&::after":{width:"100%"},[`${r}-inner-text`]:{paddingInlineStart:o}},"&-horizontal&-with-text-right&-no-default-orientation-margin-right":{"&::before":{width:"100%"},"&::after":{width:0},[`${r}-inner-text`]:{paddingInlineEnd:o}}})}};var f=(0,I.Z)("Divider",e=>{const r=(0,A.TS)(e,{dividerVerticalGutterMargin:e.marginXS,dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG});return[u(r)]},{sizePaddingEdgeHorizontal:0}),s=function(e,r){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(o[n[t]]=e[n[t]]);return o},F=e=>{const{getPrefixCls:r,direction:o}=i.useContext(P.E_),{prefixCls:n,type:t="horizontal",orientation:l="center",orientationMargin:d,className:k,children:b,dashed:j,plain:E}=e,w=s(e,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),p=r("divider",n),[M,z]=f(p),L=l.length>0?`-${l}`:l,C=!!b,v=l==="left"&&d!=null,m=l==="right"&&d!=null,y=U()(p,z,`${p}-${t}`,{[`${p}-with-text`]:C,[`${p}-with-text${L}`]:C,[`${p}-dashed`]:!!j,[`${p}-plain`]:!!E,[`${p}-rtl`]:o==="rtl",[`${p}-no-default-orientation-margin-left`]:v,[`${p}-no-default-orientation-margin-right`]:m},k),S=Object.assign(Object.assign({},v&&{marginLeft:d}),m&&{marginRight:d});return M(i.createElement("div",Object.assign({className:y},w,{role:"separator"}),b&&t!=="vertical"&&i.createElement("span",{className:`${p}-inner-text`,style:S},b)))},de=a(54323),me=a(99656),ye=a(90827);function Ce(e){return Object.keys(e).reduce((r,o)=>((o.startsWith("data-")||o.startsWith("aria-")||o==="role")&&!o.startsWith("data-__")&&(r[o]=e[o]),r),{})}const he=i.createContext(null),Se=he.Provider;var xe=he;const ge=i.createContext(null),_e=ge.Provider;var Ee=a(15882),ve=a(24255),Oe=a(30486),ne=a(56453),$e=a(83235),je=a(52113),Pe=a(1423),Ie=a(55859),be=function(e){(0,Pe.Z)(o,e);var r=(0,Ie.Z)(o);function o(n){var t;(0,$e.Z)(this,o),t=r.call(this,n),t.handleChange=function(d){var k=t.props,b=k.disabled,j=k.onChange;b||("checked"in t.props||t.setState({checked:d.target.checked}),j&&j({target:(0,ne.Z)((0,ne.Z)({},t.props),{},{checked:d.target.checked}),stopPropagation:function(){d.stopPropagation()},preventDefault:function(){d.preventDefault()},nativeEvent:d.nativeEvent}))},t.saveInput=function(d){t.input=d};var l="checked"in n?n.checked:n.defaultChecked;return t.state={checked:l},t}return(0,je.Z)(o,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var t,l=this.props,d=l.prefixCls,k=l.className,b=l.style,j=l.name,E=l.id,w=l.type,p=l.disabled,M=l.readOnly,z=l.tabIndex,L=l.onClick,C=l.onFocus,v=l.onBlur,m=l.onKeyDown,y=l.onKeyPress,S=l.onKeyUp,O=l.autoFocus,T=l.value,K=l.required,W=(0,Oe.Z)(l,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),g=Object.keys(W).reduce(function(D,Z){return(Z.substr(0,5)==="aria-"||Z.substr(0,5)==="data-"||Z==="role")&&(D[Z]=W[Z]),D},{}),V=this.state.checked,N=U()(d,k,(t={},(0,ve.Z)(t,"".concat(d,"-checked"),V),(0,ve.Z)(t,"".concat(d,"-disabled"),p),t));return i.createElement("span",{className:N,style:b},i.createElement("input",(0,Ee.Z)({name:j,id:E,type:w,required:K,readOnly:M,disabled:p,tabIndex:z,className:"".concat(d,"-input"),checked:!!V,onClick:L,onFocus:C,onBlur:v,onKeyUp:S,onKeyDown:m,onKeyPress:y,onChange:this.handleChange,autoFocus:O,ref:this.saveInput,value:T},g)),i.createElement("span",{className:"".concat(d,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(t,l){return"checked"in t?(0,ne.Z)((0,ne.Z)({},l),{},{checked:t.checked}):null}}]),o}(i.Component);be.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};var De=be,Be=a(17821),Re=a(5092),ke=a(54833),we=a(69809);const Le=new we.E4("antRadioEffect",{"0%":{transform:"scale(1)",opacity:.5},"100%":{transform:"scale(1.6)",opacity:0}}),ze=e=>{const{componentCls:r,antCls:o}=e;return{[`${r}-group`]:Object.assign(Object.assign({},(0,_.Wf)(e)),{display:"inline-block",fontSize:0,"&&-rtl":{direction:"rtl"},[`${o}-badge ${o}-badge-count`]:{zIndex:1},[`> ${o}-badge:not(:first-child) > ${o}-button-wrapper`]:{borderInlineStart:"none"}})}},Me=e=>{const{componentCls:r,radioWrapperMarginRight:o,radioCheckedColor:n,radioSize:t,motionDurationSlow:l,motionDurationMid:d,motionEaseInOut:k,motionEaseInOutCirc:b,radioButtonBg:j,colorBorder:E,lineWidth:w,radioDotSize:p,colorBgContainerDisabled:M,colorTextDisabled:z,paddingXS:L,radioDotDisabledColor:C,lineType:v,radioDotDisabledSize:m,wireframe:y,colorWhite:S}=e,O=`${r}-inner`;return{[`${r}-wrapper`]:Object.assign(Object.assign({},(0,_.Wf)(e)),{position:"relative",display:"inline-flex",alignItems:"baseline",marginInlineStart:0,marginInlineEnd:o,cursor:"pointer","&&-rtl":{direction:"rtl"},"&-disabled":{cursor:"not-allowed"},"&::after":{display:"inline-block",width:0,overflow:"hidden",content:'"\\a0"'},[`${r}-checked::after`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,width:"100%",height:"100%",border:`${w}px ${v} ${n}`,borderRadius:"50%",visibility:"hidden",animationName:Le,animationDuration:l,animationTimingFunction:k,animationFillMode:"both",content:'""'},[r]:Object.assign(Object.assign({},(0,_.Wf)(e)),{position:"relative",display:"inline-block",outline:"none",cursor:"pointer",alignSelf:"center"}),[`${r}-wrapper:hover &,
        &:hover ${O}`]:{borderColor:n},[`${r}-input:focus-visible + ${O}`]:Object.assign({},(0,_.oN)(e)),[`${r}:hover::after, ${r}-wrapper:hover &::after`]:{visibility:"visible"},[`${r}-inner`]:{"&::after":{boxSizing:"border-box",position:"absolute",insetBlockStart:"50%",insetInlineStart:"50%",display:"block",width:t,height:t,marginBlockStart:t/-2,marginInlineStart:t/-2,backgroundColor:y?n:S,borderBlockStart:0,borderInlineStart:0,borderRadius:t,transform:"scale(0)",opacity:0,transition:`all ${l} ${b}`,content:'""'},boxSizing:"border-box",position:"relative",insetBlockStart:0,insetInlineStart:0,display:"block",width:t,height:t,backgroundColor:j,borderColor:E,borderStyle:"solid",borderWidth:w,borderRadius:"50%",transition:`all ${d}`},[`${r}-input`]:{position:"absolute",insetBlockStart:0,insetInlineEnd:0,insetBlockEnd:0,insetInlineStart:0,zIndex:1,cursor:"pointer",opacity:0},[`${r}-checked`]:{[O]:{borderColor:n,backgroundColor:y?j:n,"&::after":{transform:`scale(${p/t})`,opacity:1,transition:`all ${l} ${b}`}}},[`${r}-disabled`]:{cursor:"not-allowed",[O]:{backgroundColor:M,borderColor:E,cursor:"not-allowed","&::after":{backgroundColor:C}},"&-input":{cursor:"not-allowed"},[`${r}-disabled + span`]:{color:z,cursor:"not-allowed"},[`&${r}-checked`]:{[O]:{"&::after":{transform:`scale(${m/t})`}}}},[`span${r} + *`]:{paddingInlineStart:L,paddingInlineEnd:L}})}},Te=e=>{const{radioButtonColor:r,controlHeight:o,componentCls:n,lineWidth:t,lineType:l,colorBorder:d,motionDurationSlow:k,motionDurationMid:b,radioButtonPaddingHorizontal:j,fontSize:E,radioButtonBg:w,fontSizeLG:p,controlHeightLG:M,controlHeightSM:z,paddingXS:L,borderRadius:C,borderRadiusSM:v,borderRadiusLG:m,radioCheckedColor:y,radioButtonCheckedBg:S,radioButtonHoverColor:O,radioButtonActiveColor:T,radioSolidCheckedColor:K,colorTextDisabled:W,colorBgContainerDisabled:g,radioDisabledButtonCheckedColor:V,radioDisabledButtonCheckedBg:N}=e;return{[`${n}-button-wrapper`]:{position:"relative",display:"inline-block",height:o,margin:0,paddingInline:j,paddingBlock:0,color:r,fontSize:E,lineHeight:`${o-t*2}px`,background:w,border:`${t}px ${l} ${d}`,borderBlockStartWidth:t+.02,borderInlineStartWidth:0,borderInlineEndWidth:t,cursor:"pointer",transition:[`color ${b}`,`background ${b}`,`border-color ${b}`,`box-shadow ${b}`].join(","),a:{color:r},[`> ${n}-button`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,zIndex:-1,width:"100%",height:"100%"},"&:not(:first-child)":{"&::before":{position:"absolute",insetBlockStart:-t,insetInlineStart:-t,display:"block",boxSizing:"content-box",width:1,height:"100%",paddingBlock:t,paddingInline:0,backgroundColor:d,transition:`background-color ${k}`,content:'""'}},"&:first-child":{borderInlineStart:`${t}px ${l} ${d}`,borderStartStartRadius:C,borderEndStartRadius:C},"&:last-child":{borderStartEndRadius:C,borderEndEndRadius:C},"&:first-child:last-child":{borderRadius:C},[`${n}-group-large &`]:{height:M,fontSize:p,lineHeight:`${M-t*2}px`,"&:first-child":{borderStartStartRadius:m,borderEndStartRadius:m},"&:last-child":{borderStartEndRadius:m,borderEndEndRadius:m}},[`${n}-group-small &`]:{height:z,paddingInline:L-t,paddingBlock:0,lineHeight:`${z-t*2}px`,"&:first-child":{borderStartStartRadius:v,borderEndStartRadius:v},"&:last-child":{borderStartEndRadius:v,borderEndEndRadius:v}},"&:hover":{position:"relative",color:y},"&:has(:focus-visible)":Object.assign({},(0,_.oN)(e)),[`${n}-inner, input[type='checkbox'], input[type='radio']`]:{width:0,height:0,opacity:0,pointerEvents:"none"},"&-checked:not(&-disabled)":{zIndex:1,color:y,background:S,borderColor:y,"&::before":{backgroundColor:y},"&:first-child":{borderColor:y},"&:hover":{color:O,borderColor:O,"&::before":{backgroundColor:O}},"&:active":{color:T,borderColor:T,"&::before":{backgroundColor:T}}},[`${n}-group-solid &-checked:not(&-disabled)`]:{color:K,background:y,borderColor:y,"&:hover":{color:K,background:O,borderColor:O},"&:active":{color:K,background:T,borderColor:T}},"&-disabled":{color:W,backgroundColor:g,borderColor:d,cursor:"not-allowed","&:first-child, &:hover":{color:W,backgroundColor:g,borderColor:d}},"&-disabled&-checked":{color:V,backgroundColor:N,borderColor:d,boxShadow:"none"}}}};var pe=(0,I.Z)("Radio",e=>{const{padding:r,lineWidth:o,controlItemBgActiveDisabled:n,colorTextDisabled:t,colorBgContainer:l,fontSizeLG:d,controlOutline:k,colorPrimaryHover:b,colorPrimaryActive:j,colorText:E,colorPrimary:w,marginXS:p,controlOutlineWidth:M,colorTextLightSolid:z,wireframe:L}=e,C=`0 0 0 ${M}px ${k}`,v=C,m=d,y=4,S=m-y*2,O=L?S:m-(y+o)*2,T=w,K=E,W=b,g=j,V=r-o,N=t,D=p,Z=(0,A.TS)(e,{radioFocusShadow:C,radioButtonFocusShadow:v,radioSize:m,radioDotSize:O,radioDotDisabledSize:S,radioCheckedColor:T,radioDotDisabledColor:t,radioSolidCheckedColor:z,radioButtonBg:l,radioButtonCheckedBg:l,radioButtonColor:K,radioButtonHoverColor:W,radioButtonActiveColor:g,radioButtonPaddingHorizontal:V,radioDisabledButtonCheckedBg:n,radioDisabledButtonCheckedColor:N,radioWrapperMarginRight:D});return[ze(Z),Me(Z),Te(Z)]}),Ne=function(e,r){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(o[n[t]]=e[n[t]]);return o};const Ae=(e,r)=>{const o=i.useContext(xe),n=i.useContext(ge),{getPrefixCls:t,direction:l}=i.useContext(P.E_),d=i.useRef(),k=(0,Be.sQ)(r,d),{isFormItemInput:b}=i.useContext(ke.aM),j=K=>{var W,g;(W=e.onChange)===null||W===void 0||W.call(e,K),(g=o==null?void 0:o.onChange)===null||g===void 0||g.call(o,K)},{prefixCls:E,className:w,children:p,style:M,disabled:z}=e,L=Ne(e,["prefixCls","className","children","style","disabled"]),C=t("radio",E),v=((o==null?void 0:o.optionType)||n)==="button"?`${C}-button`:C,[m,y]=pe(C),S=Object.assign({},L),O=i.useContext(Re.Z);S.disabled=z||O,o&&(S.name=o.name,S.onChange=j,S.checked=e.value===o.value,S.disabled=S.disabled||o.disabled);const T=U()(`${v}-wrapper`,{[`${v}-wrapper-checked`]:S.checked,[`${v}-wrapper-disabled`]:S.disabled,[`${v}-wrapper-rtl`]:l==="rtl",[`${v}-wrapper-in-form-item`]:b},w,y);return m(i.createElement("label",{className:T,style:M,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},i.createElement(De,Object.assign({},S,{type:"radio",prefixCls:v,ref:k})),p!==void 0?i.createElement("span",null,p):null))};var oe=i.forwardRef(Ae);const We=i.forwardRef((e,r)=>{const{getPrefixCls:o,direction:n}=i.useContext(P.E_),t=i.useContext(ye.Z),[l,d]=(0,me.Z)(e.defaultValue,{value:e.value}),k=D=>{const Z=l,le=D.target.value;"value"in e||d(le);const{onChange:se}=e;se&&le!==Z&&se(D)},{prefixCls:b,className:j="",options:E,buttonStyle:w="outline",disabled:p,children:M,size:z,style:L,id:C,onMouseEnter:v,onMouseLeave:m,onFocus:y,onBlur:S}=e,O=o("radio",b),T=`${O}-group`,[K,W]=pe(O);let g=M;E&&E.length>0&&(g=E.map(D=>typeof D=="string"||typeof D=="number"?i.createElement(oe,{key:D.toString(),prefixCls:O,disabled:p,value:D,checked:l===D},D):i.createElement(oe,{key:`radio-group-value-options-${D.value}`,prefixCls:O,disabled:D.disabled||p,value:D.value,checked:l===D.value,style:D.style},D.label)));const V=z||t,N=U()(T,`${T}-${w}`,{[`${T}-${V}`]:V,[`${T}-rtl`]:n==="rtl"},j,W);return K(i.createElement("div",Object.assign({},Ce(e),{className:N,style:L,onMouseEnter:v,onMouseLeave:m,onFocus:y,onBlur:S,id:C,ref:r}),i.createElement(Se,{value:{onChange:k,value:l,disabled:e.disabled,name:e.name,optionType:e.optionType}},g)))});var Ue=i.memo(We),Ke=function(e,r){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(o[n[t]]=e[n[t]]);return o};const Fe=(e,r)=>{const{getPrefixCls:o}=i.useContext(P.E_),{prefixCls:n}=e,t=Ke(e,["prefixCls"]),l=o("radio",n);return i.createElement(_e,{value:"button"},i.createElement(oe,Object.assign({prefixCls:l},t,{type:"radio",ref:r})))};var Ze=i.forwardRef(Fe);const re=oe;re.Button=Ze,re.Group=Ue,re.__ANT_RADIO=!0;var Ge=re,Q=a(92943),ce={langItem:"langItem___SjGJP",key:"key___aCpzl",zh:"zh___z2uKL"},$=a(62086),Je=function(r){var o=r.keyName,n=r.zh,t=r.tr,l=r.en,d=r.ind,k=r.UILang,b=r.pageName,j=r.copyMode,E=r.keywords,w=E===void 0?"":E;function p(){var C=/(?<={)[^{}]*(?=})/g,v="{",m=l.match(C);m&&m.forEach(function(y,S){v+=" ".concat(y,": 0"),S<m.length-1&&(v+=","),S===m.length-1&&(v+=" }")}),j==="TEMPLATE"?m?(0,Q.JG)("{{ $t('".concat(b,".").concat(o,"', ").concat(v,") }}")):(0,Q.JG)("{{ $t('".concat(b,".").concat(o,"') }}")):j==="JS"?m?(0,Q.JG)("t('".concat(b,".").concat(o,"', ").concat(v,")")):(0,Q.JG)("t('".concat(b,".").concat(o,"')")):j==="TEMPLATEJS"&&(m?(0,Q.JG)("$t('".concat(b,".").concat(o,"', ").concat(v,")")):(0,Q.JG)("$t('".concat(b,".").concat(o,"')")))}var M=(0,i.useRef)(null),z=(0,i.useRef)(null);function L(C){var v=C.textContent.replace(new RegExp(w,"gi"),"<span style='color: orange'>$&</span>");C.innerHTML=v}return(0,i.useEffect)(function(){L(M.current),L(z.current)},[w]),(0,$.jsxs)("div",{className:ce.langItem,onClick:p,children:[(0,$.jsx)("div",{className:ce.key,ref:M,children:k==="TR"?t:k==="EN"?l:d}),(0,$.jsx)("div",{className:ce.zh,ref:z,children:n})]})},He=Je,ae={container:"container___oVx6w",status:"status___CB22L",search:"search___u4RZ4",langs:"langs___MfdSu"},Ve=a(5317),Xe=a(16453),ie=a(93103),Qe=H.Z.Search,Ye=function(){var r=(0,i.useState)(""),o=B()(r,2),n=o[0],t=o[1],l=(0,i.useState)(),d=B()(l,2),k=d[0],b=d[1],j=(0,i.useState)(""),E=B()(j,2),w=E[0],p=E[1],M=(0,i.useState)("TEMPLATE"),z=B()(M,2),L=z[0],C=z[1],v=(0,i.useState)("TR"),m=B()(v,2),y=m[0],S=m[1],O=(0,i.useState)(""),T=B()(O,2),K=T[0],W=T[1],g=(0,i.useDeferredValue)(k),V=(0,i.useRef)(null);(0,Ve.Z)();var N=(0,Xe.Z)();function D(){var c=N.find(function(G){return G.sheetId===n});c!=null&&c.json?b(JSON.parse(c.json)):c!=null&&c.js&&(0,Q.UZ)(c.js).then(function(G){b(G)})}function Z(c){W(c.target.value.trim()),(0,ie.W3)(n,"prefix",c.target.value.trim())}(0,i.useEffect)(function(){N!=null&&N[0]&&t(N[0].sheetId)},[N]),(0,i.useEffect)(function(){var c;D(),W((0,ie.gT)(n,"prefix")||(N==null||(c=N.find(function(G){return G.sheetId===n}))===null||c===void 0?void 0:c.sheetName)||""),S((0,ie.gT)(n,"UILang")||"TR")},[n]);function le(c){t(c)}function se(c){C(c.target.value)}function et(c){S(c),(0,ie.W3)(n,"UILang",c)}var tt=[{label:"\u6A21\u677F",value:"TEMPLATE"},{label:"JS",value:"JS"},{label:"\u6A21\u677FJS",value:"TEMPLATEJS"}];function nt(c){p(c.target.value.trim())}return(0,$.jsxs)("div",{className:ae.container,children:[(0,$.jsxs)("div",{className:ae.status,children:[(0,$.jsxs)(R.Z,{split:(0,$.jsx)(F,{type:"vertical"}),children:[(0,$.jsxs)("div",{children:[(0,$.jsx)("span",{children:"\u6682\u5B58\u533A\u6587\u4EF6\uFF1A"}),(0,$.jsx)(de.Z,{defaultValue:n,style:{width:200},onChange:le,options:N.map(function(c){return{value:c.sheetId,label:c.sheetName}})},n)]}),(0,$.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,$.jsx)("span",{style:{width:"45px"},children:"\u524D\u7F00: "}),(0,$.jsx)(H.Z,{value:K,onChange:Z})]}),(0,$.jsxs)("div",{children:[(0,$.jsx)("span",{children:"UI\u8BED\u8A00: "}),(0,$.jsx)(de.Z,{value:y,style:{width:60},onChange:et,options:[{value:"TR",label:"TR"},{value:"EN",label:"EN"},{value:"IN",label:"IN"}]})]}),(0,$.jsxs)("div",{children:[(0,$.jsx)("span",{children:"\u6A21\u5F0F\uFF1A"}),(0,$.jsx)(Ge.Group,{buttonStyle:"solid",optionType:"button",options:tt,value:L,onChange:se})]})]}),(0,$.jsx)("div",{className:ae.search,children:(0,$.jsx)(Qe,{placeholder:"\u8F93\u5165".concat(y,"/ZH\u8FDB\u884C\u68C0\u7D22"),allowClear:!0,onChange:nt,enterButton:!0,ref:V,style:{width:500}},y+L)})]}),(0,$.jsx)("div",{className:ae.langs,children:Object.keys((g==null?void 0:g.en)||{}).filter(function(c){var G,Y,q,ee,ue,fe;return(g==null||(G=g.zh)===null||G===void 0||(Y=G[c])===null||Y===void 0||(q=Y.toLowerCase())===null||q===void 0?void 0:q.includes(w.toLowerCase()))||(g==null||(ee=g[y.toLowerCase()])===null||ee===void 0||(ue=ee[c])===null||ue===void 0||(fe=ue.toLowerCase())===null||fe===void 0?void 0:fe.includes(w.toLowerCase()))}).map(function(c){var G,Y,q,ee;return(0,$.jsx)(He,{keyName:c,zh:(g==null||(G=g.zh)===null||G===void 0?void 0:G[c])||"",en:(g==null||(Y=g.en)===null||Y===void 0?void 0:Y[c])||"",tr:(g==null||(q=g.tr)===null||q===void 0?void 0:q[c])||"",ind:(g==null||(ee=g.in)===null||ee===void 0?void 0:ee[c])||"",UILang:y,copyMode:L,pageName:K||"",keywords:w},c)})})]})},qe=Ye},92943:function(te,J,a){a.d(J,{Bl:function(){return U},JG:function(){return B},SV:function(){return X},UZ:function(){return i},_v:function(){return H}});var x=a(45480);function B(P){try{var I=document.createElement("textarea");I.value=P,document.body.appendChild(I),I.setAttribute("readonly","readonly"),I.setSelectionRange(0,I.value.length),I.select(),document.execCommand("Copy"),document.body.removeChild(I),x.ZP.success("\u590D\u5236\u6210\u529F")}catch{x.ZP.error("\u590D\u5236\u5931\u8D25")}}function H(P){return new Promise(function(I){setTimeout(function(){I(!0)},P||1e3)})}function R(P,I,A){try{var _=document.createElement("a");_.href=URL.createObjectURL(new Blob([P],{type:"text/".concat(I)})),_.setAttribute("download","lang.".concat(A)),document.body.appendChild(_),_.click(),document.body.removeChild(_),x.ZP.success("\u5DF2\u5F00\u59CB\u4E0B\u8F7D")}catch(u){console.log(u),x.ZP.error("\u8F6C\u6362\u5931\u8D25")}}function X(P){R(P,"json","json")}function U(P){R(P,"javascript","js")}function i(P){return new Promise(function(I,A){try{var _=function(){try{document.body.appendChild(u),setTimeout(function(){window.iframeGetObjectErrorHandler("\u83B7\u53D6\u4EE3\u7801\u8D85\u65F6\uFF0C\u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u4EE3\u7801\u9519\u8BEF")},3e3)}catch(F){A(F)}},u=document.createElement("script"),f=P+`\rtry {
        const res = {
          zh:{},
          en:{},
          ar:{},
          ur:{},
          tr:{},
          in:{},
        }
        const keys = Object.keys(lang_en);
        keys.forEach(key => {
          res['en'][key] = lang_en[key] || '';
          res['zh'][key] = lang_zh[key] || '';
          res['ar'][key] = lang_ar[key] || '';
          res['ur'][key] = lang_ur[key] || '';
          res['tr'][key] = lang_tr[key] || '';
          res['in'][key] = lang_in[key] || '';
        })
        window.iframeGetObject(res);
       } catch(err) {
        window.iframeGetObjectErrorHandler(err);
       }
        `;u.innerHTML=f,u.type="module";var s=document.createElement("iframe");s.style.position="absolute",s.style.zIndex="-1",s.style.top="-9999px",s.style.width="1px",s.style.height="1px",s.onload=_,s.onerror=function(h){A(h)},window.iframeGetObjectErrorHandler=function(h){A(h)},window.iframeGetObject=function(h){I(h),document.body.removeChild(s)},document.body.appendChild(s)}catch(h){A(h)}})}},8311:function(te,J,a){a.d(J,{Pj:function(){return P},ij:function(){return i},pJ:function(){return A},yH:function(){return _},zK:function(){return X}});var x="sheet",B="SangoTranslator",H=1,R;function X(){return new Promise(function(u,f){var s=window.indexedDB.open(B,H);s.onupgradeneeded=function(h){var F;R=h==null||(F=h.target)===null||F===void 0?void 0:F.result,R.objectStoreNames.contains(x)||R.createObjectStore(x)},s.onsuccess=function(h){var F;R=h==null||(F=h.target)===null||F===void 0?void 0:F.result,u(!0),console.log("DB\u8FDE\u63A5\u6210\u529F")},s.onerror=function(h){f(!1),console.log(h,"DB\u8FDE\u63A5\u5931\u8D25")}})}function U(u){var f=R.transaction(x,"readwrite").objectStore(x).add(u,"main");f.onsuccess=function(){console.log("\u5199\u5165",f.result)},f.onerror=function(s){console.log(s,"\u5199\u5165\u5931\u8D25")}}function i(){return new Promise(function(u){var f=R.transaction(x).objectStore(x).get("main");f.onsuccess=function(s){var h;u(s==null||(h=s.target)===null||h===void 0?void 0:h.result)}})}function P(u){var f=R.transaction(x,"readwrite").objectStore(x).put(u,"main");f.onsuccess=function(){console.log("\u4FEE\u6539\u6210\u529F",f.result)},f.onerror=function(s){console.log(s,"\u4FEE\u6539\u5931\u8D25")}}function I(u){var f=R.transaction(x,"readwrite").objectStore(x).delete(u);f.onsuccess=function(){console.log("\u5220\u9664\u6210\u529F",f.result)},f.onerror=function(s){console.log(s,"\u5220\u9664\u5931\u8D25")}}function A(){return new Promise(function(u){var f=R.transaction(x).objectStore(x).getAll();f.onsuccess=function(s){var h;u(s==null||(h=s.target)===null||h===void 0?void 0:h.result)}})}function _(u){var f=R.transaction(x,"readwrite").objectStore(x).put(u,u.sheetId);f.onsuccess=function(){console.log("\u50A8\u5B58\u6587\u4EF6\u6210\u529F",f.result)},f.onerror=function(s){console.log(s,"\u50A8\u5B58\u6587\u4EF6\u5931\u8D25")}}},93103:function(te,J,a){a.d(J,{W3:function(){return P},gT:function(){return I},sI:function(){return A},tL:function(){return _}});var x=a(90967),B=a.n(x),H=a(24047),R=a.n(H),X=a(86378),U=a.n(X),i={UILang:"TR",prefix:"",keyMode:"WORD",formatMode:"JS"};function P(u,f,s){try{var h=localStorage.getItem(u),F=h?U()(U()({},JSON.parse(h)),{},R()({},f,s)):U()(U()({},i),{},R()({},f,s));localStorage.setItem(u,JSON.stringify(F))}catch{}}function I(u,f){try{var s=localStorage.getItem(u),h=s?JSON.parse(s):i;return h[f]}catch{}}function A(u){try{var f=localStorage.getItem("cloudSheet"),s=f?[u].concat(B()(JSON.parse(f).filter(function(h){return h.sheetId!==u.sheetId}))):[u];localStorage.setItem("cloudSheet",JSON.stringify(s))}catch{}}function _(){try{var u=localStorage.getItem("cloudSheet"),f=u?JSON.parse(u):[];return f}catch{return[]}}}}]);
