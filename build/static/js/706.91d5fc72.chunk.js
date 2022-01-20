(self.webpackChunk_activeviam_activeui=self.webpackChunk_activeviam_activeui||[]).push([[706],{32864:(e,a,t)=>{"use strict";e.exports=t(16539)},87048:(e,a,t)=>{"use strict";var r=t(95754);e.exports=function(e,a){for(var t=0;t<e.length;t++)e[t].i=t;r.mergeArray(a.text,e,"tx"),r.mergeArray(a.hovertext,e,"htx");var o=a.marker;if(o){r.mergeArray(o.opacity,e,"mo",!0),r.mergeArray(o.color,e,"mc");var i=o.line;i&&(r.mergeArray(i.color,e,"mlc"),r.mergeArrayCastPositive(i.width,e,"mlw"))}}},7795:(e,a,t)=>{"use strict";var r=t(39393),o=t(64913),i=t(91083).hasColorscale,s=t(39174),n=t(87048),l=t(8306);e.exports=function(e,a){var t,c,u,d,p=r.getFromId(e,a.xaxis||"x"),m=r.getFromId(e,a.yaxis||"y"),y={msUTC:!(!a.base&&0!==a.base)};"h"===a.orientation?(t=p.makeCalcdata(a,"x",y),u=m.makeCalcdata(a,"y"),c=o(a,m,"y",u),d=!!a.yperiodalignment):(t=m.makeCalcdata(a,"y",y),u=p.makeCalcdata(a,"x"),c=o(a,p,"x",u),d=!!a.xperiodalignment);for(var h=Math.min(c.length,t.length),b=new Array(h),v=0;v<h;v++)b[v]={p:c[v],s:t[v]},d&&(b[v].orig_p=u[v]),a.ids&&(b[v].id=String(a.ids[v]));return i(a,"marker")&&s(e,a,{vals:a.marker.color,containerStr:"marker",cLetter:"c"}),i(a,"marker.line")&&s(e,a,{vals:a.marker.line.color,containerStr:"marker.line",cLetter:"c"}),n(b,a),l(b,a),b}},31089:e=>{"use strict";e.exports=function(e,a,t){return e.x="xVal"in a?a.xVal:a.x,e.y="yVal"in a?a.yVal:a.y,a.xa&&(e.xaxis=a.xa),a.ya&&(e.yaxis=a.ya),"h"===t.orientation?(e.label=e.y,e.value=e.x):(e.label=e.x,e.value=e.y),e}},16539:(e,a,t)=>{"use strict";e.exports={attributes:t(94623),layoutAttributes:t(22342),supplyDefaults:t(90285).supplyDefaults,crossTraceDefaults:t(90285).crossTraceDefaults,supplyLayoutDefaults:t(45799),calc:t(7795),crossTraceCalc:t(50332).crossTraceCalc,colorbar:t(49463),arraysToCalcdata:t(87048),plot:t(7361).plot,style:t(79438).style,styleOnSelect:t(79438).styleOnSelect,hoverPoints:t(3424).hoverPoints,eventData:t(31089),selectPoints:t(57008),moduleType:"trace",name:"bar",basePlotModule:t(51594),categories:["bar-like","cartesian","svg","bar","oriented","errorBarsOK","showLegend","zoomScale"],animatable:!0,meta:{description:["The data visualized by the span of the bars is set in `y`","if `orientation` is set th *v* (the default)","and the labels are set in `x`.","By setting `orientation` to *h*, the roles are interchanged."].join(" ")}}},22342:e=>{"use strict";e.exports={barmode:{valType:"enumerated",values:["stack","group","overlay","relative"],dflt:"group",role:"info",editType:"calc",description:["Determines how bars at the same location coordinate","are displayed on the graph.","With *stack*, the bars are stacked on top of one another","With *relative*, the bars are stacked on top of one another,","with negative values below the axis, positive values above","With *group*, the bars are plotted next to one another","centered around the shared location.","With *overlay*, the bars are plotted over one another,","you might need to an *opacity* to see multiple bars."].join(" ")},barnorm:{valType:"enumerated",values:["","fraction","percent"],dflt:"",role:"info",editType:"calc",description:["Sets the normalization for bar traces on the graph.","With *fraction*, the value of each bar is divided by the sum of all","values at that location coordinate.","*percent* is the same but multiplied by 100 to show percentages."].join(" ")},bargap:{valType:"number",min:0,max:1,role:"style",editType:"calc",description:["Sets the gap (in plot fraction) between bars of","adjacent location coordinates."].join(" ")},bargroupgap:{valType:"number",min:0,max:1,dflt:0,role:"style",editType:"calc",description:["Sets the gap (in plot fraction) between bars of","the same location coordinate."].join(" ")}}},45799:(e,a,t)=>{"use strict";var r=t(97966),o=t(39393),i=t(95754),s=t(22342);e.exports=function(e,a,t){function n(t,r){return i.coerce(e,a,s,t,r)}for(var l=!1,c=!1,u=!1,d={},p=n("barmode"),m=0;m<t.length;m++){var y=t[m];if(r.traceIs(y,"bar")&&y.visible){if(l=!0,"group"===p){var h=y.xaxis+y.yaxis;d[h]&&(u=!0),d[h]=!0}if(y.visible&&"histogram"===y.type)"category"!==o.getFromId({_fullLayout:a},y["v"===y.orientation?"xaxis":"yaxis"]).type&&(c=!0)}}l?("overlay"!==p&&n("barnorm"),n("bargap",c&&!u?0:.2),n("bargroupgap")):delete a.barmode}},99706:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>h});var r=t(99046),o=t(21127),i=t.n(o),s=t(88517),n=t(58527),l=t.n(n),c=t(6335),u=t.n(c),d=t(32864),p=t.n(d),m=t(54870),y=t(83541);u().register(p());const h=(0,s.dC)((0,s.i)((0,s.H9)((0,o.memo)((e=>{const{cube:a,data:t,metaData:n,widgetState:c,onLoaded:u}=e,d=(0,o.useMemo)((()=>(0,r.TS)(null==c?void 0:c.mapping)),[null==c?void 0:c.mapping]);(0,s.ge)({isEmpty:d,onLoaded:u});const p=(0,o.useMemo)((()=>function({cube:e,data:a,metaData:t,widgetState:r}){return e&&a&&t?(0,m.du)({cube:e,data:a,metaData:t,widgetState:r}):[]}({cube:a,data:t,metaData:n,widgetState:c})),[a,t,n,c]),h=(0,o.useMemo)((()=>(e=>e?(0,y.IM)({xaxis:{gridcolor:"transparent"}},(0,s.S5)(e.subplots),(0,s.lH)(e.subplots),(0,s.Gx)(e,"yaxis")):{})(n)),[n]);return a&&t&&n&&!d?i().createElement(s.XN,l()({},e,{traces:p,layout:h,cube:a,data:t,metaData:n})):i().createElement(s.MQ,null)})))))}}]);