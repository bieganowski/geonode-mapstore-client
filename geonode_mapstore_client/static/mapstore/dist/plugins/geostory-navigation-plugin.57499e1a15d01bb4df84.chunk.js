(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[8710],{7472:(e,t,n)=>{"use strict";n.d(t,{Z:()=>j});var r=n(27418),o=n.n(r),a=n(45697),i=n.n(a),l=n(67294),s=n.n(l),c=n(85294),u=n.n(c),d=n(72986),f=n.n(d),p=n(5346);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?w(e):t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(l,e);var t,n,r,a,i=(r=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(a){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function l(){var e;v(this,l);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return C(w(e=i.call.apply(i,[this].concat(n))),"renderLoading",(function(){return e.props.maskLoading?s().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},s().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},s().createElement(p.Z,{msgId:"loading"}),s().createElement(f(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),C(w(e),"renderRole",(function(t){return s().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),C(w(e),"hasRole",(function(t){return s().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),C(w(e),"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return t=l,(n=[{key:"render",value:function(){var e=this,t=s().createElement("div",{id:this.props.id,style:h({zIndex:3},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},s().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),s().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?s().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):s().createElement("span",null)),n=this.props.draggable?s().createElement(u(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,r=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?s().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:r,className:"fade in modal "+this.props.containerClassName,role:"dialog"},n):n}}])&&y(t.prototype,n),l}(s().Component);C(P,"propTypes",{id:i().string.isRequired,style:i().object,backgroundStyle:i().object,className:i().string,maskLoading:i().bool,containerClassName:i().string,headerClassName:i().string,bodyClassName:i().string,footerClassName:i().string,onClickOut:i().func,modal:i().bool,start:i().object,draggable:i().bool,bounds:i().oneOfType([i().string,i().object])}),C(P,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const j=P},75480:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(67294),o=n.n(r);const a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.style,n=void 0===t?{display:"inline-block"}:t;return o().createElement("div",{style:n,className:"mapstore-inline-loader"})}},94745:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(67294),o=n.n(r),a=n(30294),i=n(7472),l=n(80717),s=n(18093),c=n(19081),u=n.n(c),d=n(75480),f={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},p={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const m=(0,s.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,n=void 0!==t&&t,r=e.loading,s=e.loadingText,c=e.onClose,m=void 0===c?function(){}:c,g=e.title,h=void 0===g?"":g,v=e.clickOutEnabled,y=void 0===v||v,b=e.showClose,O=void 0===b||b,w=e.disabledClose,E=void 0!==w&&w,C=e.showFullscreen,P=void 0!==C&&C,j=e.fullscreenType,N=void 0===j?"full":j,S=e.buttons,k=void 0===S?[]:S,x=e.size,I=void 0===x?"":x,R=e.bodyClassName,z=void 0===R?"":R,D=e.children,T=e.draggable,_=void 0!==T&&T,Z=e.fullscreenState,M=e.onFullscreen,A=e.fade,B=void 0!==A&&A,U=e.fitContent,L=e.modalClassName,F=void 0===L?"":L,H=e.dialogClassName,G=void 0===H?"":H,q=e.enableFooter,K=void 0===q||q,V=f[I]||"",Y=P&&"expanded"===Z&&p.className[N]||"",$=n?o().createElement("div",{className:"modal-fixed ".concat(F," ")+(_?"ms-draggable":"")},o().createElement(i.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:y?m:function(){},containerClassName:"ms-resizable-modal",draggable:_,modal:!0,className:"modal-dialog modal-content"+V+Y+G+(U?" ms-fit-content":"")},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},h),P&&p.className[N]&&o().createElement(a.Glyphicon,{className:"ms-header-btn",onClick:function(){return M("expanded"===Z?"collapsed":"expanded")},glyph:p.glyph[Z][N]}),O&&m&&o().createElement(a.Glyphicon,{glyph:"1-close",className:"ms-header-btn",onClick:m,disabled:E}))),o().createElement("div",{role:"body",className:z},D),K&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},r?o().createElement(d.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},r?s:null),o().createElement(l.Z,{buttons:k})))):null;return B?o().createElement(u(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},$):$}))},26538:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Q});var r=n(67294),o=n.n(r),a=n(33664),i=n(22222),l=n(22843),s=n(92579),c=n(66113),u=n(24684),d=n(66190),f=n(80717),p=n(30294),m=n(67460),g=n.n(m),h=n(45338),v=n(80628),y=n(38560);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var j=function(e){var t=e.tabindex,n=e.text,r=e.selected,a=e.style;return o().createElement(y.Z,{tabindex:t,className:"".concat(r?"active":"btn-tray"," btn-xs btn-default"),style:a},n)};const N=(0,v.Z)((function(e){var t=e.currentPage,n=e.items,a=e.scrollTo,i=void 0===a?function(){}:a,l=e.width,s=e.height,c=e.deltaSwipeSize,u=void 0===c?200:c,d=e.transition,f=void 0===d?300:d,m=e.updateTimeDebounceTime,v=void 0===m?500:m,O=e.getItemStyle,P=void 0===O?function(){return{}}:O,N=function(e){var t=e.direction,n=void 0===t?"horizontal":t,o=e.deltaScroll,a=e.width,i=e.height,l=e.transition,s=C((0,r.useState)(0),2),c=s[0],u=s[1],d=C((0,r.useState)(0),2),f=d[0],p=d[1],m=(0,r.useRef)({x:0,y:0}),g=C((0,r.useState)(!1),2),v=g[0],y=g[1],b=C((0,r.useState)("start"),2),O=b[0],P=b[1],j=C((0,r.useState)(),2),N=j[0],S=j[1],k=(0,r.useRef)(),x=(0,r.useRef)({});function I(e,t){S("move:start");var r=k.current,o=r.parentNode,a=r.getBoundingClientRect(),i=o.getBoundingClientRect();if("horizontal"===n){var s=e+a.width;e<0&&s>i.width?(u(e),m.current.x=e,P("center")):e>=0?(u(0),m.current.x=0,P("start")):s<=i.width&&(u(i.width-a.width),m.current.x=i.width-a.width,P("end"))}if("vertical"===n){var c=t+a.height;t<0&&c>i.height?(p(t),m.current.y=t,P("center")):t>=0?(p(0),m.current.y=0,P("start")):c<=i.height&&(p(i.height-a.height),m.current.y=i.height-a.height,P("end"))}setTimeout((function(){S("move:end")}),l)}function R(){var e=k.current,t=e.parentNode,r=e.getBoundingClientRect(),o=t.getBoundingClientRect();return!("horizontal"===n&&o.width>=r.width||"vertical"===n&&o.height>=r.height)}(0,r.useEffect)((function(){function e(e){var t=R();return y(R()),t?I(m.current.x-(e.deltaY>0?o:-o),m.current.y-(e.deltaY>0?o:-o)):null}var t=R();y(t);var n=k.current.parentNode;return t&&I(m.current.x,m.current.y),t&&n&&n.addEventListener&&n.addEventListener("wheel",e),function(){t&&n&&n.removeEventListener&&n.removeEventListener("wheel",e)}}),[a,i]);var z=(0,h.QS)({onSwiping:function(e){e.event.stopPropagation();var t=R();return y(R()),t?I(c-e.deltaX*e.velocity,f-e.deltaY*e.velocity):null},trackTouch:!0,trackMouse:!0});function D(e,t){x.current=w(w({},x.current),{},E({},e,t))}function T(e){var t=x.current[e];if(t){var r=k.current,o=(r&&r.parentNode).getBoundingClientRect(),a=t.getBoundingClientRect();if("horizontal"===n){var i=o.width,l=o.left,s=a.width,c=a.left,u=l+i,d=c+s;return l<=c&&u>=c||l<=d&&u>=d}}return!1}return{status:N,canSwipe:v,isStartControlActive:v&&("end"===O||"center"===O),isEndControlActive:v&&("start"===O||"center"===O),positionLabel:O,coordinates:{x:c,y:f},containerPropsHandlers:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).style,t=void 0===e?{}:e;return w(w({},z),{},{style:w({position:"relative",overflow:"hidden",width:"100%",height:"100%"},t)})},contentPropsHandlers:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).style,t=void 0===e?{}:e;return{ref:k,style:w(w(w(w({position:"absolute",display:"flex"},l&&{transition:"transform ".concat(l,"ms ease 0s")}),{},{flexDirection:"horizontal"===n?"row":"column"},v&&"horizontal"===n&&{transform:"translateX(".concat(c,"px)")}),v&&"vertical"===n&&{transform:"translateY(".concat(f,"px)")}),t)}},itemPropsHandlers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.onClick;return w({key:t,ref:function(e){return e&&D(t,e)}},n?{onClick:n,tabindex:T(t)?0:-1,onKeyDown:function(e){"Enter"===e.key&&n()}}:{tabindex:-1})},updateCoordinates:I,moveItemInViewById:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).margin,r=void 0===t?0:t,o=x.current[e];if(o){var a=k.current,i=(a&&a.parentNode).getBoundingClientRect(),l=o.getBoundingClientRect();if("horizontal"===n){var s=i.width,c=i.left,u=l.width,d=l.left;c<=d&&c+s>=d+u||I(-(d-a.getBoundingClientRect().left)+r,void 0)}}},moveToDeltaSize:function(e){I(c+e,f+e)}}}({direction:"horizontal",width:l,height:s,transition:f,deltaScroll:u}),S=N.isStartControlActive,k=N.isEndControlActive,x=N.containerPropsHandlers,I=N.contentPropsHandlers,R=N.itemPropsHandlers,z=N.moveToDeltaSize,D=N.moveItemInViewById,T=t&&t.columns&&t.sectionId&&t.columns[t.sectionId]||t&&t.sectionId,_=(0,r.useRef)(null);return(0,r.useEffect)((function(){return _.current=g()((function(e){D(e,{margin:32})}),v),function(){_.current&&(_.current.cancel(),_.current=null)}}),[]),(0,r.useEffect)((function(){_.current&&(_.current.cancel(),_.current(T))}),[T]),o().createElement("div",b({},x(),{className:"ms-horizontal-menu"}),o().createElement("div",I(),n.map((function(e){var n=e.title,r=e.id,a=R({id:r,onClick:function(){t&&t.sectionId!==r&&i(r)}});return o().createElement("div",b({},a,{className:"ms-menu-item"}),o().createElement(j,{tabindex:"-1",id:r,text:n||"title",selected:r===T,style:P(r===T)}))}))),S&&o().createElement(y.Z,{className:"square-button-md no-border",style:{position:"absolute"},onClick:function(){return z(u)}},o().createElement(p.Glyphicon,{glyph:"chevron-left"})),k&&o().createElement(y.Z,{className:"square-button-md no-border",style:{position:"absolute",right:0},onClick:function(){return z(-u)}},o().createElement(p.Glyphicon,{glyph:"chevron-right"})))}));var S=n(45697),k=n.n(S),x=n(50966),I=n(5346),R=n(94745);function z(e){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Z(e,t){return(Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e,t){return!t||"object"!==z(t)&&"function"!=typeof t?A(e):t}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(l,e);var t,n,r,a,i=(r=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(a){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return M(this,e)});function l(){var e;T(this,l);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return U(A(e=i.call.apply(i,[this].concat(n))),"checkUnsavedChanges",(function(){e.props.renderUnsavedMapChangesDialog?e.props.onCheckMapChanges(e.goHome):(e.props.onCloseUnsavedDialog(),e.goHome())})),U(A(e),"goHome",(function(){e.context.router.history.push("/")})),e}return t=l,(n=[{key:"render",value:function(){var e=this.props,t=e.tooltipPosition,n=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["tooltipPosition"]),r=o().createElement(p.Tooltip,{id:"toolbar-home-button"},o().createElement(I.Z,{msgId:"gohome"}));return o().createElement(o().Fragment,null,o().createElement(x.Z,{overlay:r,placement:t},o().createElement(y.Z,D({id:"home-button",className:"square-button",bsStyle:"primary",onClick:this.checkUnsavedChanges,tooltip:r},n),this.props.icon)),o().createElement(R.Z,{ref:"unsavedMapModal",show:this.props.displayUnsavedDialog||!1,onClose:this.props.onCloseUnsavedDialog,title:o().createElement(I.Z,{msgId:"resources.maps.unsavedMapConfirmTitle"}),buttons:[{bsStyle:"primary",text:o().createElement(I.Z,{msgId:"resources.maps.unsavedMapConfirmButtonText"}),onClick:this.goHome},{text:o().createElement(I.Z,{msgId:"resources.maps.unsavedMapCancelButtonText"}),onClick:this.props.onCloseUnsavedDialog}],fitContent:!0},o().createElement("div",{className:"ms-detail-body"},o().createElement(I.Z,{msgId:"resources.maps.unsavedMapConfirmMessage"}))))}}])&&_(t.prototype,n),l}(o().Component);U(L,"propTypes",{icon:k().node,onCheckMapChanges:k().func,onCloseUnsavedDialog:k().func,displayUnsavedDialog:k().bool,renderUnsavedMapChangesDialog:k().bool,tooltipPosition:k().string}),U(L,"contextTypes",{router:k().object,messages:k().object}),U(L,"defaultProps",{icon:o().createElement(p.Glyphicon,{glyph:"home"}),onCheckMapChanges:function(){},onCloseUnsavedDialog:function(){},renderUnsavedMapChangesDialog:!0,tooltipPosition:"left"});const F=L;var H=n(11847),G=n(33716),q=n.n(G);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){Y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const $=function(e){var t,n=e.settings,r=e.scrollTo,a=void 0===r?function(){}:r,i=e.navigableItems,l=void 0===i?[]:i,s=e.currentPage,c=void 0===s?{}:s,u=e.totalItems,d=void 0===u?1:u,p=e.currentPosition,m=void 0===p?0:p,g=e.router,h=e.buttons,v=void 0===h?[]:h,y=null==n||null===(t=n.theme)||void 0===t?void 0:t.general,b=q()(y)&&y||{},O=b.fontFamily,w=b.borderColor,E=b.color,C=b.backgroundColor,P=n||{},j=P.isTitleEnabled,S=P.isLogoEnabled,k=P.isNavbarEnabled,x=v.length>0,I=g&&g.pathname&&g.search&&"true"===(0,H.vl)(g.search).showHome&&g.pathname.includes("/geostory/shared"),R=k&&(null==l?void 0:l.length)>0,z=j||S||R||x||I;return o().createElement("div",{className:"ms-geostory-navigation-bar",style:V(V({color:E,backgroundColor:C},w&&{borderBottom:"1px solid ".concat(w)}),{},{fontFamily:O})},o().createElement("div",{className:"progress-bar",key:"progress-bar",style:{backgroundColor:w}},o().createElement("div",{className:"progress-percent",style:{width:"".concat((m+1)/d*100,"%"),backgroundColor:E}})),z&&o().createElement("div",{className:"ms-geostory-navigation-tools"},o().createElement("div",{className:"ms-geostory-navigation-toolbar"},o().createElement(f.Z,{buttons:v}),I&&o().createElement(F,{bsStyle:"default",className:"square-button-md no-border",tooltipPosition:"right",renderUnsavedMapChangesDialog:!1})),o().createElement("div",{className:"ms-geostory-navigation-elements"},R?o().createElement("div",{className:"ms-geostory-navigation-navigable-items"},o().createElement(N,{items:l,currentPage:c,scrollTo:a,getItemStyle:function(e){return e?{color:C,backgroundColor:E}:{outlineColor:E,borderColor:E}}})):null,o().createElement("div",{className:"ms-geostory-navigation-metadata"},j&&o().createElement("div",{className:"ms-geostory-navigation-title",style:{fontSize:n.storyTitleFontSize||"14px"}},n.storyTitle),S&&o().createElement("div",{className:"ms-geostory-navigation-logo"},o().createElement("img",{src:n.thumbnail&&(n.thumbnail.data||n.thumbnail.url)||"",height:32}))))))},Q=(0,l.rx)("GeoStoryNavigation",{component:(0,a.connect)((0,i.zB)({mode:c.eK,settings:c.TQ,currentPage:c.PR,currentPosition:c.u5,totalItems:c.CK,navigableItems:(0,c.w)({includeAlways:!1}),pathname:u.F,search:u.y}))((function(e){var t=e.mode,n=void 0===t?s.nl.VIEW:t,r=e.currentPage,a=e.currentPosition,i=e.totalItems,l=e.settings,c=e.navigableItems,u=void 0===c?[]:c,d=e.pathname,f=e.search,p=e.items,m=(void 0===p?[]:p).filter((function(e){return e.tool})).map((function(e){return{Element:e.tool}}));return n===s.nl.VIEW?o().createElement("div",{key:"geostory-navigation",className:"ms-geostory-navigation",style:{width:"100%",position:"relative"}},o().createElement($,{settings:l,currentPage:r,currentPosition:a,totalItems:i,scrollTo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{behavior:"smooth"};(0,s.M1)(e,t)},navigableItems:u,router:{pathname:d,search:f},buttons:m})):null})),reducers:{geostory:d.Z}})},11847:(e,t,n)=>{"use strict";n.d(t,{vl:()=>a,K2:()=>i,Nw:()=>l}),n(8575);var r=n(61545),o=n(64210),a=function(e){return o.parse(e)},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:/^(http(s{0,1}):\/\/)+?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,n=new RegExp(t);return n.test(e)},l=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/^(http(s{0,1}):\/\/)+?[\w.\-{}]+(?:\.[\w\.-]+)+[\w\-\._~\/\;\.\%\:\&\=\?{}]+$/,o=new RegExp(n),a=o.test(e);if(!a)return!1;if(a&&!t)return!0;if(a&&t){var i=/\{(.*?)\}/.test(e);return 0===t.filter((function(e){return(0,r.find)(i,e)})).length}return!1}}}]);