(self.webpackChunk_activeviam_activeui=self.webpackChunk_activeviam_activeui||[]).push([[357],{32864:(e,t,a)=>{"use strict";e.exports=a(16539)},87048:(e,t,a)=>{"use strict";var r=a(95754);e.exports=function(e,t){for(var a=0;a<e.length;a++)e[a].i=a;r.mergeArray(t.text,e,"tx"),r.mergeArray(t.hovertext,e,"htx");var o=t.marker;if(o){r.mergeArray(o.opacity,e,"mo",!0),r.mergeArray(o.color,e,"mc");var i=o.line;i&&(r.mergeArray(i.color,e,"mlc"),r.mergeArrayCastPositive(i.width,e,"mlw"))}}},7795:(e,t,a)=>{"use strict";var r=a(39393),o=a(64913),i=a(91083).hasColorscale,s=a(39174),n=a(87048),l=a(8306);e.exports=function(e,t){var a,c,u,d,p=r.getFromId(e,t.xaxis||"x"),m=r.getFromId(e,t.yaxis||"y"),y={msUTC:!(!t.base&&0!==t.base)};"h"===t.orientation?(a=p.makeCalcdata(t,"x",y),u=m.makeCalcdata(t,"y"),c=o(t,m,"y",u),d=!!t.yperiodalignment):(a=m.makeCalcdata(t,"y",y),u=p.makeCalcdata(t,"x"),c=o(t,p,"x",u),d=!!t.xperiodalignment);for(var h=Math.min(c.length,a.length),b=new Array(h),v=0;v<h;v++)b[v]={p:c[v],s:a[v]},d&&(b[v].orig_p=u[v]),t.ids&&(b[v].id=String(t.ids[v]));return i(t,"marker")&&s(e,t,{vals:t.marker.color,containerStr:"marker",cLetter:"c"}),i(t,"marker.line")&&s(e,t,{vals:t.marker.line.color,containerStr:"marker.line",cLetter:"c"}),n(b,t),l(b,t),b}},31089:e=>{"use strict";e.exports=function(e,t,a){return e.x="xVal"in t?t.xVal:t.x,e.y="yVal"in t?t.yVal:t.y,t.xa&&(e.xaxis=t.xa),t.ya&&(e.yaxis=t.ya),"h"===a.orientation?(e.label=e.y,e.value=e.x):(e.label=e.x,e.value=e.y),e}},16539:(e,t,a)=>{"use strict";e.exports={attributes:a(94623),layoutAttributes:a(22342),supplyDefaults:a(90285).supplyDefaults,crossTraceDefaults:a(90285).crossTraceDefaults,supplyLayoutDefaults:a(45799),calc:a(7795),crossTraceCalc:a(50332).crossTraceCalc,colorbar:a(49463),arraysToCalcdata:a(87048),plot:a(7361).plot,style:a(79438).style,styleOnSelect:a(79438).styleOnSelect,hoverPoints:a(3424).hoverPoints,eventData:a(31089),selectPoints:a(57008),moduleType:"trace",name:"bar",basePlotModule:a(51594),categories:["bar-like","cartesian","svg","bar","oriented","errorBarsOK","showLegend","zoomScale"],animatable:!0,meta:{description:["The data visualized by the span of the bars is set in `y`","if `orientation` is set th *v* (the default)","and the labels are set in `x`.","By setting `orientation` to *h*, the roles are interchanged."].join(" ")}}},22342:e=>{"use strict";e.exports={barmode:{valType:"enumerated",values:["stack","group","overlay","relative"],dflt:"group",role:"info",editType:"calc",description:["Determines how bars at the same location coordinate","are displayed on the graph.","With *stack*, the bars are stacked on top of one another","With *relative*, the bars are stacked on top of one another,","with negative values below the axis, positive values above","With *group*, the bars are plotted next to one another","centered around the shared location.","With *overlay*, the bars are plotted over one another,","you might need to an *opacity* to see multiple bars."].join(" ")},barnorm:{valType:"enumerated",values:["","fraction","percent"],dflt:"",role:"info",editType:"calc",description:["Sets the normalization for bar traces on the graph.","With *fraction*, the value of each bar is divided by the sum of all","values at that location coordinate.","*percent* is the same but multiplied by 100 to show percentages."].join(" ")},bargap:{valType:"number",min:0,max:1,role:"style",editType:"calc",description:["Sets the gap (in plot fraction) between bars of","adjacent location coordinates."].join(" ")},bargroupgap:{valType:"number",min:0,max:1,dflt:0,role:"style",editType:"calc",description:["Sets the gap (in plot fraction) between bars of","the same location coordinate."].join(" ")}}},45799:(e,t,a)=>{"use strict";var r=a(97966),o=a(39393),i=a(95754),s=a(22342);e.exports=function(e,t,a){function n(a,r){return i.coerce(e,t,s,a,r)}for(var l=!1,c=!1,u=!1,d={},p=n("barmode"),m=0;m<a.length;m++){var y=a[m];if(r.traceIs(y,"bar")&&y.visible){if(l=!0,"group"===p){var h=y.xaxis+y.yaxis;d[h]&&(u=!0),d[h]=!0}if(y.visible&&"histogram"===y.type)"category"!==o.getFromId({_fullLayout:t},y["v"===y.orientation?"xaxis":"yaxis"]).type&&(c=!0)}}l?("overlay"!==p&&n("barnorm"),n("bargap",c&&!u?0:.2),n("bargroupgap")):delete t.barmode}},3357:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>v});var r=a(99046),o=a(88517),i=a(21127),s=a.n(i),n=a(58527),l=a.n(n),c=a(6335),u=a.n(c),d=a(32864),p=a.n(d),m=a(35676),y=a.n(m),h=a(86915),b=a(83541);u().register(p());const v=(0,o.dC)((0,o.i)((0,o.H9)((0,i.memo)((e=>{const{cube:t,data:a,metaData:n,widgetState:c,onLoaded:u}=e,d=(0,i.useMemo)((()=>(0,r.TS)(null==c?void 0:c.mapping)),[null==c?void 0:c.mapping]);(0,o.ge)({isEmpty:d,onLoaded:u});const p=(0,i.useMemo)((()=>function({cube:e,data:t,metaData:a,widgetState:r}){if(!e||!t||!a)return[];const i=(0,h.Hz)({cube:e,data:t,metaData:a,widgetState:r}),s=a.subplots.vertical.keys.length>0;if(a.subplots.horizontal.keys.length>0||s){const e=(0,o.bO)(i),t=(0,o.m1)(i,e);return t.forEach((e=>{const t=(0,o.ss)(e,!0);(0,o.o_)(t,e,!0)})),y()(t)}const n=(0,o.ss)(i,!0);return(0,o.o_)(n,i,!0),i}({cube:t,data:a,metaData:n,widgetState:c})),[t,a,n,c]),m=(0,i.useMemo)((()=>(e=>e?(0,b.IM)({yaxis:{tickformat:"%"},xaxis:{gridcolor:"transparent"},barmode:"relative"},(0,o.S5)(e.subplots),(0,o.lH)(e.subplots,{x:{gridcolor:"transparent"},y:{tickformat:"%"}}),(0,o.Gx)(e,"xaxis")):{})(n)),[n]);return t&&a&&n&&!d?s().createElement(o.XN,l()({},e,{traces:p,layout:m,cube:t,data:a,metaData:n})):s().createElement(o.MQ,null)})))))}}]);