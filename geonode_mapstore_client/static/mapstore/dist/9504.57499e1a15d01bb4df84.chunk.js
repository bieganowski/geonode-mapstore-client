(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[9504],{88691:(e,t,r)=>{var n=r(59130);e.exports=function(e,t){var r=[];return n(e,(function(e,n,o){t(e,n,o)&&r.push(e)})),r}},46329:(e,t,r)=>{var n=r(54528);e.exports=function(e,t){return n(t,(function(t){return e[t]}))}},95671:(e,t,r)=>{var n=r(40158),o=r(88691),a=r(83733),i=r(80643);e.exports=function(e,t){return(i(e)?n:o)(e,a(t,3))}},54432:(e,t,r)=>{var n=r(14808),o=r(71445),a=r(37153),i=r(93889),c=r(55651),u=Math.max;e.exports=function(e,t,r,l){e=o(e)?e:c(e),r=r&&!l?i(r):0;var s=e.length;return r<0&&(r=u(s+r,0)),a(e)?r<=s&&e.indexOf(t,r)>-1:!!s&&n(e,t,r)>-1}},2936:(e,t,r)=>{var n=r(79455),o=r(6271)((function(e,t,r){n(e,t,r)}));e.exports=o},23574:(e,t,r)=>{var n=r(30851);e.exports=function(){var e=arguments,t=n(e[0]);return e.length<3?t:t.replace(e[1],e[2])}},55651:(e,t,r)=>{var n=r(46329),o=r(97195);e.exports=function(e){return null==e?[]:n(e,o(e))}},75480:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(67294),o=r.n(n);const a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.style,r=void 0===t?{display:"inline-block"}:t;return o().createElement("div",{style:r,className:"mapstore-inline-loader"})}},94745:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(67294),o=r.n(n),a=r(30294),i=r(7472),c=r(80717),u=r(18093),l=r(19081),s=r.n(l),d=r(75480),f={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},m={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const v=(0,u.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,r=void 0!==t&&t,n=e.loading,u=e.loadingText,l=e.onClose,v=void 0===l?function(){}:l,p=e.title,g=void 0===p?"":p,b=e.clickOutEnabled,h=void 0===b||b,y=e.showClose,O=void 0===y||y,E=e.disabledClose,w=void 0!==E&&E,j=e.showFullscreen,S=void 0!==j&&j,A=e.fullscreenType,x=void 0===A?"full":A,T=e.buttons,P=void 0===T?[]:T,C=e.size,I=void 0===C?"":C,k=e.bodyClassName,D=void 0===k?"":k,N=e.children,z=e.draggable,_=void 0!==z&&z,R=e.fullscreenState,Z=e.onFullscreen,M=e.fade,F=void 0!==M&&M,G=e.fitContent,H=e.modalClassName,U=void 0===H?"":H,B=e.dialogClassName,L=void 0===B?"":B,V=e.enableFooter,W=void 0===V||V,q=f[I]||"",$=S&&"expanded"===R&&m.className[x]||"",X=r?o().createElement("div",{className:"modal-fixed ".concat(U," ")+(_?"ms-draggable":"")},o().createElement(i.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:h?v:function(){},containerClassName:"ms-resizable-modal",draggable:_,modal:!0,className:"modal-dialog modal-content"+q+$+L+(G?" ms-fit-content":"")},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},g),S&&m.className[x]&&o().createElement(a.Glyphicon,{className:"ms-header-btn",onClick:function(){return Z("expanded"===R?"collapsed":"expanded")},glyph:m.glyph[R][x]}),O&&v&&o().createElement(a.Glyphicon,{glyph:"1-close",className:"ms-header-btn",onClick:v,disabled:w}))),o().createElement("div",{role:"body",className:D},N),W&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},n?o().createElement(d.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},n?u:null),o().createElement(c.Z,{buttons:P})))):null;return F?o().createElement(s(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},X):X}))},25108:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(82904),o=r(27418),a=r.n(o);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.kM:var r=t.property||"enabled";return a()({},e,i({},t.control,a()({},e[t.control],i({},r,!(e[t.control]||{})[r]))));case n.At:return!0===t.toggle&&e[t.control]&&e[t.control][t.property]===t.value?a()({},e,i({},t.control,a()({},e[t.control],i({},t.property,void 0)))):a()({},e,i({},t.control,a()({},e[t.control],i({},t.property,t.value))));case n.dc:return a()({},e,i({},t.control,a()({},e[t.control],t.properties)));case n.l:var o=Object.keys(e).filter((function(e){return-1===(t.skip||[]).indexOf(e)})),c=o.reduce((function(t,r){return a()(t,i({},r,a()({},e[r],!0===e[r].enabled?{enabled:!1}:{})))}),{});return a()({},e,c);default:return e}}},67306:(e,t,r)=>{"use strict";r.d(t,{Wy:()=>a,i$:()=>i});var n=r(22222),o=r(24684),a=function(e){return e&&e.dashboard&&e.dashboard.editor&&e.dashboard.editor.available},i=function(e){return e&&e.dashboard&&e.dashboard.editing};(0,n.P1)(o.F,(function(e){return e&&e.dashboard&&e.dashboard.resource}),(function(e){return e&&e.browser&&e.browser.mobile}),(function(e,t,r){return r?!r:t&&t.canEdit||isNaN(e.substr(-4))}))},58422:(e,t,r)=>{"use strict";r.d(t,{UC:()=>v}),r(52259),r(827);var n=r(22222),o=r(88113),a=r(25958),i=r(7877),c=r(85148),u=r(97291);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r(75110),r(31935);var f={},m=(0,n.zB)({catalogServices:(0,n.zB)({services:o.b6,selectedService:o.Cb}),widgetsConfig:(0,n.zB)({widgets:a.zm,layouts:a.p,collapsed:a.lF}),mapInfoConfiguration:i.bI,dimensionData:(0,n.zB)({currentTime:c.WT,offsetTime:c.ns}),timelineData:(0,n.zB)({selectedLayer:u.Li})}),v=function(e){var t=Object.keys(f).reduce((function(t,r){return s(s({},t),{},d({},r,f[r](e)))}),{});return s(s({},m(e)),t)}},87218:(e,t,r)=>{"use strict";r.d(t,{I:()=>n,_:()=>o});var n=function(e){return e.searchconfig&&e.searchconfig.textSearchConfig},o=function(e){return e.searchbookmarkconfig&&e.searchbookmarkconfig.bookmarkSearchConfig}},97291:(e,t,r)=>{"use strict";r.d(t,{YK:()=>h,zb:()=>y,en:()=>O,cX:()=>E,__:()=>A,E2:()=>x,Li:()=>T,fP:()=>P,uy:()=>C,gB:()=>I,Ry:()=>k,m_:()=>D,dJ:()=>N,rV:()=>z,qJ:()=>_,pn:()=>R,F3:()=>Z});var n=r(61545),o=r(22222),a=r(84715),i=r(90183),c=r(55237),u=r(85148),l=r(827),s=r(75110);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||g(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(e,t)||g(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){if(e){if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var h=function(e){return(0,n.get)(e,"timeline.range")},y=function(e){return(0,n.get)(e,"timeline.settings.collapsed")},O=function(e){return(0,n.get)(e,"timeline.settings.autoSelect")},E=function(e){return(0,n.get)(e,"timeline.settings.mapSync")},w=function(e,t){return(e||[]).reduce((function(e,r){return[].concat(v(e),v(function(e,t){var r=p(e.split("/"),3),n=r[0],o=r[1],a=r[2];if(a&&"0"!==a){var i=(0,c.Xu)({start:n,end:o,duration:a},t),u=i.count,l=i.start,s=i.end;return u>50?[{start:n,end:o,duration:a,type:"range",content:"".concat(u," items")}]:(0,c.tr)({start:l,end:s,duration:a}).map((function(e){return{start:new Date(e),end:new Date(e),type:"point"}}))}return isNaN(new Date(n).getTime())?null:[{start:new Date(n),end:new Date(o||n),type:o?"range":"point"}]}(r,t)))}),[]).filter((function(e){return e&&e.start}))},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(e.domain&&e.domain.values)return w(e.domain.values,t);if(e.histogram&&e.histogram.domain&&e.histogram.values){var r=e.histogram.domain.split("/"),n=p(r,3),o=n[0],a=n[1],i=n[2],u=Math.max.apply(Math,v(e.histogram.values)),l=(0,c.jb)({start:o,end:a,duration:i});return e.histogram.values.map((function(e,t){return f(f({},l[t]),{},{type:"range",itemType:"histogram",count:e,className:"histogram-item",content:'<div><div class="histogram-box" style="height: '.concat(100*e/u,'%"></div> <span class="histogram-count">').concat(e,"</span></div>")})}))}return[]},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;return e&&e.values||e&&e.domain&&!(0,c._q)(e.domain)?w(e.values||e.domain.split(","),t):r&&r.histogram?j(r,t):[]},A=(0,a.y)(u.m$,h,(function(e){return(0,n.get)(e,"timeline.rangeData")}),(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return v(Object.keys(e).map((function(n){return S(e[n],t,r[n]).map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return f(f({content:" "},e),{},{group:n})}))})).reduce((function(e,t){return[].concat(v(e),v(t))}),[]))})),x=function(e){return(0,n.get)(e,"timeline.loading")},T=function(e){return(0,n.get)(e,"timeline.selectedLayer")},P=function(e){return(0,s.CA)(e,T(e))},C=function(e){return P(e)&&P(e).name},I=function(e){return P(e)&&P(e).dimensions&&(0,n.head)(P(e).dimensions.filter((function(e){return"time"===e.name})))},k=function(e){return(0,n.get)(I(e),"source.url")},D=(0,o.P1)(u.WT,u.ns,(function(e,t){return{start:e,end:t}})),N=function(e){return(0,u.oP)(e,T(e))},z=u.AF,_=(0,o.P1)(z,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.length>0})),R=function(e){return!y(e)&&_(e)},Z=function(e){return function(t){var r=((0,l.Od)(t)||{}).bbox;if(!r)return{};var o=(0,u.Qw)(e,"time")(t),a=(0,n.get)(o,"source.version"),c=Object.keys(r.bounds).reduce((function(e,t){return f(f({},e),{},m({},t,parseFloat(r.bounds[t])))}),{});if(!c||!E(t))return{};if("1.1"!==a){var s=(0,u.Qw)(e,"space")(t),d=(0,n.get)(s,"domain.CRS");if(!d||!c||!E(t))return{};var v=p((0,i.reprojectBbox)(c,(0,l.uy)(t),d),4),g=v[0],b=v[1],h=v[2],y=v[3];return h<g&&"EPSG:4326"===d&&(h+=360),{bbox:"".concat(g,",").concat(b,",").concat(h,",").concat(y),crs:d}}var O=c.minx,w=c.miny,j=c.maxx,S=c.maxy,A=r.crs;return{bbox:"".concat(O,",").concat(w,",").concat(j,",").concat(S,",").concat(A)}}}},25958:(e,t,r)=>{"use strict";r.d(t,{lF:()=>x,zm:()=>A,p:()=>C});var n=r(61545),o=r(827),a=r(75110),i=r(24684),c=r(57579),u=function(e,t,r){var n,o,a=[],i=[],c=e;for(a.push(c);a.length>0;)if(!r[c=a.shift()])for(r[c]=!0,i.push(c),n=0;n<t.length;n+=1)(o=t[n])[0]!==c||r[o[1]]?o[1]!==c||r[o[0]]||a.push(o[0]):a.push(o[1]);return i},l=function(e){for(var t={},r=[],n=0,o=e.length;n<o;n+=1){var a=e[n],i=a[0],c=a[1],l=null;t[i]?t[c]||(l=c):l=i,l&&r.push(u(l,e,t))}return r},s=r(43143);function d(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||f(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){if(e){if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var v=function(e,t){var r,o,a=(r=c.oU.exec(e),o=2,function(e){if(Array.isArray(e))return e}(r)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(r,o)||f(r,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],u=a[1];return i?(0,n.find)(t,{id:u}):null},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.reduce((function(t,r){var o=(0,n.get)(r,"mapSync")&&(0,n.get)(r,"dependenciesMap")||{},a=Object.keys(o).map((function(t){return v(o[t],e)}))||[];return[].concat(d(t),d(a.filter((function(e){return void 0!==e})).map((function(e){return[r.id,e.id]}))))}),[])},g=r(67306),b=r(22222),h=r(84715);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w=function(e){return(0,n.get)(e,"widgets.dependencies")||{}},j=function(e){return Object.keys(w(e)).map((function(t){return w(e)[t]}))},S=function(e){return(0,n.get)(e,"widgets.builder.editor")},A=((0,b.P1)(S,a.Iz,(function(e){return(0,g.Wy)(e)&&(0,g.i$)(e)}),(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.layer,r=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;return t||!n&&r})),function(e){return(0,n.get)(e,"widgets.containers[".concat(c.VR,"].widgets"))}),x=function(e){return(0,n.get)(e,"widgets.containers[".concat(c.VR,"].collapsed"))},T=((0,b.P1)(A,x,(function(e){return(0,n.get)(e,"widgets.containers[".concat(c.VR,"].maximized"))}),(function(e,t,r){if(e){if(null!=r&&r.widget)return e.filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id;return t===r.widget.id}));if(t)return e.filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.id;return!t[r]}))}return e})),(0,b.P1)(x,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e)})),function(e){return(A(e)||[]).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.widgetType;return"map"===t}))}),P=function(e){return(A(e)||[]).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.widgetType;return"table"===t}))},C=((0,b.P1)(T,P,o.Od,i.F,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3?arguments[3]:void 0;return{availableDependencies:e.map((function(e){var t=e.id;return"widgets[".concat(t,"].map")})).concat((0,n.castArray)(r).map((function(){return"map"}))).concat((0,n.castArray)(t).filter((function(){return-1===o.indexOf("viewer")})).map((function(e){var t=e.id;return"widgets[".concat(t,"]")})))}})),(0,b.P1)(T,P,o.Od,i.F,S,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0,i=a&&"map"!==a.widgetType?a&&a.layer||{}:a&&a.map&&a.map.layers||[];return{availableDependencies:e.map((function(e){var t=e.id;return"widgets[".concat(t,"].map")})).concat((0,n.castArray)(r).map((function(){return r?"map":null}))).filter((function(e){return e})).concat((0,n.castArray)(t).filter((function(){return-1===o.indexOf("viewer")})).filter((function(e){return(0,n.isArray)(i)||i.name===e.layer.name})).filter((function(e){return a&&a.id!==e.id})).map((function(e){var t=e.id;return"widgets[".concat(t,"]")})))}})),(0,b.P1)(A,(function(e){return function(){var e=l(p(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[])),t={base:190,range:340,options:{base:10,range:360,s:.67,v:.67}},r=(0,s.qH)(t.base,t.range,e.length+1,t.options);return e.map((function(e,t){return{color:r[t],widgets:e}}))}(e)})),function(e){return(0,n.get)(e,"widgets.containers[".concat(c.VR,"].layouts"))});(0,h.y)(w,j,(function(e){return j(e).map((function(t){return 0===t.indexOf("map.")?(0,n.get)((0,o.Od)(e),t.slice(4)):t.match(c.oU)?function(e,t){var r=c.oU.exec(e),o=r&&r[2],a=v(e,t);return o?(0,n.get)(a,o):a}(t,A(e)):(0,n.get)(e,t)}))}),(function(e,t,r){return t.reduce((function(t,n,o){return O(O({},t),{},E({},Object.keys(e)[o],r[o]))}),{})})),(0,b.zB)({widgets:A,layouts:C})},43143:(e,t,r)=>{"use strict";r.d(t,{qH:()=>c,qj:()=>u,qq:()=>l});var n,o=r(17621),a=r.n(o),i=r(61545),c=function(e,t,r,o){var a=e;isNaN(parseFloat(e))&&(a=n.hexToHsv(e)[0]);var i=.5/(r-1),c=t/(r-1),u=[];1===r&&(i=.5,c=t/2);for(var l=0;l<r;l++){var s=a+l*c-t/2,d=i*l+.3,f=d;o&&(s=o.h||s,d=o.s||d,f=o.v||f),u.push(n.hsvToHex(s,d,f,l))}return u},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"red";return a()(e).toHexString()},l=function(e,t,r){var n=a()(e);return e&&n.setAlpha((0,i.toNumber)(void 0!==t?t:n.getAlpha())).toRgbString()||r};n={decToHex:function(e){var t="0123456789ABCDEF",r=parseInt(e,10);return r=isNaN(r)?0:r,t.charAt(((r=r>255||r<0?0:r)-r%16)/16)+t.charAt(r%16)},rgbToHex:function(e,t,r){return e instanceof Array?n.rgbToHex(e[0],e[1],e[2]):"#"+n.decToHex(e)+n.decToHex(t)+n.decToHex(r)},realToDec:function(e){return Math.min(255,Math.round(256*e))},rgbToHsv:function(e,t,r){if(e instanceof Array)return n.rgbToHsv(e[0],e[1],e[2]);var o,a,i,c,u,l=e/255,s=t/255,d=r/255;switch(o=Math.min(Math.min(l,s),d),i=(a=Math.max(Math.max(l,s),d))-o,a){case o:c=0;break;case l:c=60*(s-d)/i,s<d&&(c+=360);break;case s:c=60*(d-l)/i+120;break;case d:c=60*(l-s)/i+240}return u=0===a?0:1-o/a,[Math.round(c),u,a]},distributedColorsHEX:function(e){for(var t=360/(e-1),r=[],o=function e(t,r,o){var a=e(t,r,o);return n.rgbToHex(a)},a=0;a<e;a++)r.push(o(t*a,.57,.63));return r},sameToneRangeColors:c,hsvToRgb:function(e,t,r){if(e instanceof Array)return n.hsvToRgb(e[0],e[1],e[2]);var o,a,i,c=Math.floor(e/60%6),u=e/60-c,l=r*(1-t),s=r*(1-u*t),d=r*(1-(1-u)*t);switch(c){case 0:o=r,a=d,i=l;break;case 1:o=s,a=r,i=l;break;case 2:o=l,a=r,i=d;break;case 3:o=l,a=s,i=r;break;case 4:o=d,a=l,i=r;break;case 5:o=r,a=l,i=s}return[n.realToDec(o),n.realToDec(a),n.realToDec(i)]},hsvToHex:function(e,t,r){var o=n.hsvToRgb(e,t,r);return n.rgbToHex(o)},hexToHsv:function(e){var t=e;if(t.length>0){"#"===t[0]&&(t=e.substring(1));var r=n.hexToRgb(t);return n.rgbToHsv(r)}return null},hexToRgb:function(e){var t,r,n,o=e;return"#"===o.charAt(0)&&(o=e.substring(1)),t=o.charAt(0)+o.charAt(1),r=o.charAt(2)+o.charAt(3),n=o.charAt(4)+o.charAt(5),[parseInt(t,16),parseInt(r,16),parseInt(n,16)]},colorToHexStr:u,colorToRgbaStr:l}},84715:(e,t,r)=>{"use strict";r.d(t,{y:()=>c,o:()=>u});var n=r(61545),o=r(22222),a=function(e,t){return e===t},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return function(t,r){return Array.isArray(t)&&Array.isArray(r)?t===r||t.length===r.length&&t.reduce((function(t,n,o){return t&&e(n,r[o])}),!0):(0,n.isObject)(t)&&(0,n.isObject)(r)?t===r||Object.keys(t).length===Object.keys(r).length&&Object.keys(t).reduce((function(n,o){return n&&e(t[o],r[o])}),!0):t===r}},c=(0,o.wN)(o.PW,(function(e,t){return(0,n.isEqualWith)(e,t,i())})),u=function(e){return(0,o.wN)(o.PW,(function(t,r){return(0,n.isEqualWith)(t,r,i(e))}))}},73443:(e,t,r)=>{"use strict";r.d(t,{rs:()=>n,AY:()=>o,SW:()=>a,yB:()=>i,oG:()=>c,XG:()=>u,id:()=>l,gc:()=>s,cE:()=>d,rG:()=>f,Vj:()=>m,Pg:()=>v});var n="GEONODE:SAVING_RESOURCE",o="GEONODE:SAVE_SUCCESS",a="GEONODE:SAVE_ERROR",i="GEONODE:CLEAR_SAVE",c="GEONODE:SAVE_CONTENT",u="GEONODE:UPDATE_RESOURCE_BEFORE_SAVE";function l(){return{type:n}}function s(e){return{type:o,success:e}}function d(e){return{type:a,error:e}}function f(){return{type:i}}function m(e,t,r){return{type:c,id:e,metadata:t,reload:r}}function v(e){return{type:u,id:e}}},14689:(e,t,r)=>{"use strict";r.d(t,{fk:()=>c,Gg:()=>u,_u:()=>l});var n=r(75875),o=r.n(n),a=r(37275),i=r(55035),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,a.u8)("genode_rest_api")||"/mapstore/rest/";return o().post((0,i.zL)("".concat(t,"resources/")),e,{timeout:1e4,params:{full:!0}}).then((function(e){return e.data}))},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(0,a.u8)("genode_rest_api")||"/mapstore/rest/";return o().patch((0,i.zL)("".concat(r,"resources/").concat(e,"/")),t,{params:{full:!0}}).then((function(e){return e.data}))},l=function(e){var t=(0,a.u8)("genode_rest_api")||"/mapstore/rest/";return o().get((0,i.zL)("".concat(t,"resources/").concat(e,"/")),{params:{full:!0}}).then((function(e){return e.data}))}},18576:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>A});var n=r(89255),o=r(827),a=r(75110),i=r(31935),c=r(58422),u=r(87218),l=r(52259),s=r(37275),d=r(66113),f=r(74621),m=r(14689),v=r(73443),p=r(43892),g=r(99380),b=r(55035),h=r(55877),y=r.n(h);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var S={map:function(e,t,r,n){var d,f=(0,o.Od)(e)||{},v=(0,a.l2)(e),p=(0,a.Bt)(e),g=(0,i.Mz)(e),h=(0,u.I)(e),y=(0,u._)(e),O=(0,c.UC)(e),w=(0,l.saveMapConfiguration)(f,v,p,g,h,y,O),S=r.name,A=r.description,x=r.thumbnail,T={name:S,data:w,attributes:[{type:"string",name:"title",value:S,label:"Title"},{type:"string",name:"abstract",value:A,label:"Abstract"}].concat((d=x?[{type:"string",name:"thumbnail",value:x,label:"Thumbnail"}]:[],function(e){if(Array.isArray(e))return j(e)}(d)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(d)||function(e,t){if(e){if("string"==typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(e,t):void 0}}(d)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))};return t?(0,m.Gg)(t,E(E({},T),{},{id:t})):(0,m.fk)(T).then((function(e){return n&&(window.location.href=(0,b.zL)("".concat((0,s.u8)("geonode_url"),"maps/").concat(e.id,"/edit"))),e.data}))},geostory:function(e,t,r,n){var o=(0,d.Kg)(e),a=(0,f.np)(e),i={title:r.name,abstract:r.description,data:JSON.stringify(o),thumbnail_url:r.thumbnail};return t?(0,g.Tw)(t,i):(0,g.NJ)(E({name:r.name+" "+y()(),owner:a.name},i)).then((function(e){return n&&(window.location.href=(0,b.zL)("".concat((0,s.u8)("geonode_url"),"apps/").concat(e.pk,"/edit"))),e.data}))}};const A={gnSaveContent:function(e,t){return e.ofType(v.oG).switchMap((function(e){var r,o=t.getState(),a=(null===(r=o.gnresource)||void 0===r?void 0:r.type)||"map";return n.Observable.defer((function(){return S[a](o,e.id,e.metadata,e.reload)})).switchMap((function(t){return n.Observable.of((0,v.gc)(t),(0,p.QN)({title:e.metadata.name,abstract:e.metadata.description,thumbnail_url:e.metadata.thumbnail}))})).catch((function(e){return n.Observable.of((0,v.cE)(e.data||e.message))})).startWith((0,v.id)())}))},gnUpdateResource:function(e,t){return e.ofType(v.XG).switchMap((function(e){var r,o=(null===(r=t.getState().gnresource)||void 0===r?void 0:r.data)||{};return!e.id||o.pk&&e.id&&o.pk+""==e.id+""?n.Observable.empty():n.Observable.defer((function(){return(0,g.iv)(e.id)})).switchMap((function(e){return n.Observable.of((0,p.DF)(e))})).catch((function(e){return n.Observable.of((0,p.mN)(e.data||e.message))})).startWith((0,p.Q$)())}))}}},36368:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(67294),o=r.n(n),a=r(45697),i=r.n(a),c=r(94745),u=r(14068),l=r(5346),s=r(30294),d=r(93451),f=r(32425);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var p=(0,d.Z)("placeholder")(s.FormControl);function g(e){var t=e.update,r=e.error,a=e.success,i=e.labelId,d=e.resource,v=e.contentId,g=e.saving,b=e.loading,h=e.enabled,y=e.onClose,O=e.onSave,E=e.onInit,w=e.onClear,j=e.thumbnailOptions,S=m((0,n.useState)(),2),A=S[0],x=S[1],T=m((0,n.useState)(),2),P=T[0],C=T[1],I=m((0,n.useState)(""),2),k=I[0],D=I[1],N=m((0,n.useState)(""),2),z=N[0],_=N[1],R=m((0,n.useState)(!1),2),Z=R[0],M=R[1],F=(0,n.useRef)();F.current={contentId:v,resource:d},(0,n.useEffect)((function(){h?E(F.current.contentId):w()}),[h]),(0,n.useEffect)((function(){if(!b){var e=F.current.resource||{};x(e.thumbnail_url),D(e.title),_(e.abstract),C(!1),M(e.title?void 0:"error")}}),[h,b]);var G=b||g;return o().createElement(c.Z,{title:o().createElement(l.Z,{msgId:i}),show:h,fitContent:!0,clickOutEnabled:!1,buttons:G?[]:[{text:o().createElement(l.Z,{msgId:"close"}),onClick:function(){return y()}},{text:o().createElement(l.Z,{msgId:i}),disabled:!!Z,onClick:function(){return O(t?v:void 0,{thumbnail:A,name:k,description:z},!0)}}],onClose:G?null:function(){return y()}},r&&o().createElement(s.Alert,{bsStyle:"danger",style:{margin:0}},o().createElement("div",null,o().createElement(l.Z,{msgId:"map.mapError.errorDefault"}))),a&&o().createElement(s.Alert,{bsStyle:"success",style:{margin:0}},o().createElement("div",null,o().createElement(l.Z,{msgId:"saveDialog.saveSuccessMessage"}))),o().createElement(s.Form,null,o().createElement(s.FormGroup,{validationState:P?"error":void 0},o().createElement(s.ControlLabel,null,o().createElement(l.Z,{msgId:"map.thumbnail"})),o().createElement(u.Z,{thumbnail:A,thumbnailOptions:j,message:o().createElement(l.Z,{msgId:"map.message"}),onUpdate:function(e){x(e),C(!1)},onError:function(e){C(e)}}),P&&o().createElement("div",null,o().createElement("div",null,o().createElement(l.Z,{msgId:"map.error"})),o().createElement("div",null,P.indexOf&&-1!==P.indexOf("FORMAT")&&o().createElement("small",null,o().createElement(l.Z,{msgId:"map.errorFormat"}))),o().createElement("div",null,P.indexOf&&-1!==P.indexOf("SIZE")&&o().createElement("small",null,o().createElement(l.Z,{msgId:"map.errorSize"}))))),o().createElement(s.FormGroup,{validationState:Z},o().createElement(s.ControlLabel,null,o().createElement(l.Z,{msgId:"saveDialog.name"})),o().createElement(p,{placeholder:"saveDialog.namePlaceholder",value:k,onChange:function(e){D(e.target.value),M(e.target.value?void 0:"error")},onBlur:function(e){M(e.target.value?void 0:"error")}})),o().createElement(s.FormGroup,null,o().createElement(s.ControlLabel,null,o().createElement(l.Z,{msgId:"saveDialog.description"})),o().createElement(p,{placeholder:"saveDialog.descriptionPlaceholder",value:z,onChange:function(e){return _(e.target.value)}}))),G&&o().createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(255, 255, 255, 0.8)",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center"}},o().createElement(f.Z,{size:70})))}g.propTypes={update:i().bool,labelId:i().string,contentId:i().oneOfType([i().string,i().number]),resource:i().object,loading:i().bool,enabled:i().bool,onClose:i().func,onSave:i().func,onInit:i().func,onClear:i().func,error:i().oneOfType([i().string,i().object]),success:i().oneOfType([i().string,i().object]),thumbnailOptions:i().object},g.defaultProps={update:!1,resource:{},loading:!1,enabled:!1,onClose:function(){},onSave:function(){},onInit:function(){},onClear:function(){},thumbnailOptions:{width:300,height:250,type:"image/jpeg",quality:.9,contain:!1}};const b=g},62170:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(73443);const o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.rs:return{saving:!0};case n.AY:return{success:t.success,saving:!1};case n.SW:return{error:t.error,saving:!1};case n.yB:return{};default:return e}}},55877:(e,t,r)=>{var n=r(23570),o=r(71171),a=o;a.v1=n,a.v4=o,e.exports=a},71171:(e,t,r)=>{var n=r(85217),o=r(45327);e.exports=function(e,t,r){var a=t&&r||0;"string"==typeof e&&(t="binary"==e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||n)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var c=0;c<16;++c)t[a+c]=i[c];return t||o(i)}}}]);