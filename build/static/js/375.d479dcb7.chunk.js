(self.webpackChunk_activeviam_activeui=self.webpackChunk_activeviam_activeui||[]).push([[375],{92375:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>A});var a=n(7655),i=n(21127),l=n(54788),o=n(99046),s=n(97647),r=n(3440),u=n.n(r),c=n(87622),d=n.n(c),y=n(9439),p=n.n(y),m=n(87277),v=n(19323),g=n(10978),x=n.n(g),f=n(32586),h=n.n(f),C=n(72189),b=n.n(C),E=n(15729),k=n(94423),N=n.n(k),w=n(81573);function T(e){return e.substring(5,e.length-1).split(",")}var O={name:"h3v94q-QueryContextEntryTileCaption",styles:"display:flex;;label:QueryContextEntryTileCaption;"},Z={name:"1hmgl6r-QueryContextEntryTileCaption",styles:"flex-grow:1;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;;label:QueryContextEntryTileCaption;"},U={name:"whkwzk-QueryContextEntryTileCaption",styles:"text-align:right;flex-grow:1;flex-shrink:1;margin-left:10px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;min-width:35px;;label:QueryContextEntryTileCaption;"};const Q=e=>{let t;const[n,l]=(0,i.useState)(null);if((0,i.useEffect)((()=>{"BOOL"!==e.type&&"ENUM"!==e.type&&l(e.value)}),[e.type,e.value]),"BOOL"===e.type)t=(0,a.tZ)(x(),{checked:Boolean(e.value),disabled:e.isDisabled,onChange:()=>{var t;return null===(t=e.onValueChanged)||void 0===t?void 0:t.call(e,!e.value)}});else if(e.isDisabled)t=e.value;else if(e.type.startsWith("ENUM")){const n=T(e.type);t=(0,a.tZ)(b(),{value:e.value,size:"small",style:{width:80},onChange:e.onValueChanged,disabled:e.isDisabled},n.map((e=>(0,a.tZ)(b().Option,{key:e,value:e},e))))}else t=(0,a.tZ)(h(),{style:{width:80},value:null!=n?n:"",onChange:e=>l(e.target.value),onBlur:t=>{const n=t.target.value;var a;isNaN(Number(n))&&"ALL"!==e.type||(null===(a=e.onValueChanged)||void 0===a||a.call(e,n))},size:"small",disabled:e.isDisabled});return(0,a.tZ)("div",{css:O,key:e.name},(0,a.tZ)("div",{css:Z},e.name),(0,a.tZ)("div",{css:U},t))};var q={name:"1etlk4r-QueryContextEntryEditionPopup",styles:"height:35px;display:flex;justify-content:flex-end;margin-top:8px;;label:QueryContextEntryEditionPopup;"},I={name:"hpxvrh-QueryContextEntryEditionPopup",styles:"&.ant-btn{margin-right:8px;};label:QueryContextEntryEditionPopup;"};const K=e=>{var t;const{formatMessage:n}=(0,l.useIntl)(),{onOk:o,onCancel:s,templatedName:r}=e,[u,c]=(0,i.useState)(""),[d,y]=(0,i.useState)(""),p=(e=>{const t=e.indexOf("$"),n=e.lastIndexOf("$");return e.substring(t,n+1)})(r),m=r.replace(p,u);return(0,a.tZ)("div",{style:{width:400,display:"flex",flexDirection:"column"}},(0,a.tZ)("div",{style:{flexGrow:1}},(0,a.tZ)(h(),{style:{marginTop:8},placeholder:p,value:u,onChange:e=>c(e.target.value)}),(0,a.tZ)(h(),{style:{marginTop:8},placeholder:"value",value:d,onChange:e=>y(e.target.value)})),(0,a.tZ)("div",{css:q},(0,a.tZ)(N(),{css:I,onClick:s},n({id:"aui.cancel"})),(0,a.tZ)(N(),{onClick:()=>{o(m,d)},disabled:0===u.length||0===d.length||(null===(t=e.queryContext)||void 0===t?void 0:t.some((({key:e})=>e===m))),type:"primary"},n({id:"aui.ok"}))))},R=["drillthrough.hiddencolumns","subcube"],S=["mdx.kpi","mdx.member","mdx.formatters","mdx.set","mdx.measureAlias","mdx.defaultmembers","user-authentication"],_=["dashboard","page","widget"],D=(e,{sectionName:t,pageKey:n,leafKey:a})=>{const i="dashboard"===t?e:"page"===t?(0,w.fx)(e,n):(0,w.LI)(e,n,a);if(!i)throw new Error(`Impossible to edit the ${t}'s query context, as its corresponding state was not found.`);return i},V=(e,t,n)=>{e.queryContext||(e.queryContext=[]),e.queryContext.splice(n,0,t)},L=(e,t)=>{if(!e.queryContext)return;const{queryContext:n}=e;n.splice(t,1),0===n.length&&delete e.queryContext},A=(0,o.r3)((e=>{const{dashboardState:t,pageKey:n,leafKey:r,onDashboardChange:c}=(0,v.F)(e)?e:{},{dataModel:y,widgetState:g,onWidgetChange:x}=e,{formatMessage:f}=(0,l.useIntl)(),h=(0,o.cQ)(g,t,n),[C,b]=(0,i.useState)(null),k=(0,i.useMemo)((()=>d()(y.contextValues,"name")),[y.contextValues]),N=(0,i.useCallback)((e=>{if(k[e])return k[e].type;const t=p()(k,(({name:t})=>e.startsWith(t.replace(/\$.*\$$/,""))));return t?k[t].type:"ALL"}),[k]),w=(0,i.useMemo)((()=>{const e=y.contextValues.filter((({name:e})=>!R.some((t=>e.startsWith(t))))),t=u()(e,(({category:e})=>e||"misc"));return Object.keys(t).map((e=>({caption:e,isFolder:!0,isActionable:!1,type:e,children:t[e].map((t=>{const n={type:"QUERY_CONTEXT_ENTRY",key:t.name};return{caption:t.name,type:e,isActionable:!0,isDisabled:_.every((e=>{var n;return null===(n=h[e])||void 0===n?void 0:n.some((({key:e})=>e===t.name))})),dragItem:n}}))})))}),[y.contextValues,h]),O=(0,i.useMemo)((()=>{const i={};return i.default={caption:f({id:"aui.drawer.queryContextEditor.defaultSection"}),tiles:e.cube.contextValues.filter((({name:e})=>S.every((t=>!e.startsWith(t)))&&R.every((t=>!e.startsWith(t))))).map((({name:e,value:t},n)=>{const i={key:e,value:t,originSection:"default",originPosition:n,type:"QUERY_CONTEXT_ENTRY"};return{caption:(0,a.tZ)(Q,{name:e,value:t,isDisabled:!0,type:N(e)}),dragItem:i,isEditable:!1,isDisabled:_.some((t=>{var n;return null===(n=h[t])||void 0===n?void 0:n.some((({key:t})=>t===e))})),isRemovable:!1}}))},_.forEach((e=>{const l=h[e];i[e]={caption:f({id:`aui.drawer.queryContextEditor.${e}Section`}),tiles:l?l.map((({key:i,value:l},o)=>{const s={key:i,value:l,originSection:e,originPosition:o,type:"QUERY_CONTEXT_ENTRY"},u=_.slice(_.indexOf(e)+1).some((e=>{var t;return null===(t=h[e])||void 0===t?void 0:t.some((e=>i===e.key))}));return{caption:(0,a.tZ)(Q,{name:i,value:l,type:N(i),isDisabled:u,onValueChanged:a=>{if(c&&t&&n&&r){const i=(0,E.Uy)(t,(t=>{D(t,{leafKey:r,pageKey:n,sectionName:e}).queryContext[o].value=a}));c(i)}else{const e=(0,E.Uy)(g,(e=>{e.queryContext[o].value=a}));x(e)}}}),isEditable:!1,isRemovable:!0,isDisabled:u,dragItem:s}})):[]}})),C&&i[C.sectionName].tiles.splice(C.tileIndex,0,{caption:C.key,dragItem:null}),i}),[C,N,e.cube.contextValues,h,t,f,r,c,x,n,g]),Z=(0,i.useCallback)(((e,a)=>{if(c&&t&&n&&r){const i=(0,E.Uy)(t,(t=>{const i=D(t,{leafKey:r,pageKey:n,sectionName:e});L(i,a)}));c(i)}else{const e=(0,E.Uy)(g,(e=>{L(e,a)}));x(e)}}),[t,r,c,n,g,x]),U=(0,i.useCallback)(((a,i,l)=>{var o;const s=null!=l?l:(null===(o=h[a])||void 0===o?void 0:o.length)||0;if(-1!==i.indexOf("$"))b({tileIndex:s,sectionName:a,key:i});else{const l={key:i,value:((e,t)=>{if(!e)return"";const n=t.find((({name:t})=>t===e.name));if(e.type.startsWith("ENUM"))return T(e.type)[0];switch(e.type){case"BOOL":return void 0===n||Boolean(n.value);case"LONG":case"INTEGER":case"DOUBLE":return void 0!==n?Number(n.value):0;case"RANGE":case"ALL":default:return(null==n?void 0:n.value)||""}})(k[i],e.cube.contextValues)};if(c&&t&&n&&r){const e=(0,E.Uy)(t,(e=>{const t=D(e,{leafKey:r,pageKey:n,sectionName:a});V(t,l,s)}));c(e)}else{const e=(0,E.Uy)(g,(e=>{V(e,l,s)}));x(e)}}}),[k,t,r,c,x,n,h,g,e.cube.contextValues]),q=(0,i.useCallback)((e=>{var t;e.isActionable&&!(null===(t=h.widget)||void 0===t?void 0:t.some((({key:t})=>t===e.caption)))&&U("widget",e.caption)}),[U,h]),I=(0,i.useCallback)(((e,a)=>{if(C){const i={key:e,value:a};if(c&&t&&n&&r){const e=(0,E.Uy)(t,(e=>{const t=D(e,{leafKey:r,pageKey:n,sectionName:C.sectionName});V(t,i,C.tileIndex)}));c(e)}else{const e=(0,E.Uy)(g,(e=>{V(e,i,C.tileIndex)}));x(e)}b(null)}}),[t,r,c,x,n,C,g]),A=(0,i.useCallback)(((e,a,i)=>{if(c&&t&&n&&r){const l=(0,E.Uy)(t,(t=>{if("default"!==a.originSection){const e=D(t,{leafKey:r,pageKey:n,sectionName:a.originSection});L(e,a.originPosition)}const l=D(t,{leafKey:r,pageKey:n,sectionName:e});V(l,{key:a.key,value:a.value},i)}));c(l)}}),[t,r,c,n]),M=(0,i.useCallback)(((e,t,n)=>{U(e,t.key,n)}),[U]);return(0,a.tZ)(o.A3,null,(0,a.tZ)(s.mp,{value:w,isSearchVisible:!0,searchPlaceholder:f({id:"aui.drawer.queryContextEditor.searchContextEntries"}),onClick:q}),(0,a.tZ)(m.e,{sections:O,dragItemTypes:["QUERY_CONTEXT_ENTRY"],canDrop:(e,t)=>{var n;return!("QUERY_CONTEXT_ENTRY"!==t.type||"default"===e||t.originSection&&t.originSection===e||(null===(n=h[e])||void 0===n?void 0:n.some((({key:e})=>e===t.key))))},placeholder:f({id:"aui.drawer.queryContextEditor.noQueryContextEntries"}),onTileRemoved:Z,onTileMoved:A,onTileAdded:M,popoverPosition:C,popover:C&&(0,a.tZ)(K,{onOk:I,templatedName:C.key,onCancel:()=>b(null),queryContext:h[C.sectionName]}),popoverInnerHeight:110}))}))}}]);