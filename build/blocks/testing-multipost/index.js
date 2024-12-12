/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@hpu-wp/components/build/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@hpu-wp/components/build/index.js ***!
  \********************************************************/
/***/ (function(module) {

/*! For license information please see index.js.LICENSE.txt */
!function(t,e){ true?module.exports=e():0}(this,(()=>(()=>{"use strict";var t={507:(t,e,r)=>{r.d(e,{A:()=>c});var n=r(354),o=r.n(n),a=r(314),i=r.n(a)()(o());i.push([t.id,".hpu-post-search-control{margin:0 10px 20px}.hpu-post-search-control--results .search-results li.search-result{padding:5px 10px;max-width:280px;text-wrap:nowrap;cursor:pointer}.hpu-post-search-control--results .search-results li.search-result.selected{background-color:#f0f0f0;color:#9ea1a7}.hpu-post-search-control--results .search-results li.search-result:hover:not(.selected){color:#007cba}","",{version:3,sources:["webpack://./src/components/assets/css/PostSearchControls.scss"],names:[],mappings:"AACA,yBACC,kBAAA,CAOC,mEACC,gBAAA,CACA,eAAA,CACA,gBAAA,CACA,cAAA,CAEA,4EACC,wBAAA,CACA,aAAA,CAGD,wFACC,aAAA",sourcesContent:["\n.hpu-post-search-control {\n\tmargin: 0 10px 20px;\n}\n\n.hpu-post-search-control--results {\n\n\t.search-results {\n\n\t\tli.search-result {\n\t\t\tpadding: 5px 10px;\n\t\t\tmax-width: 280px;\n\t\t\ttext-wrap: nowrap;\n\t\t\tcursor: pointer;\n\n\t\t\t&.selected {\n\t\t\t\tbackground-color: #f0f0f0;\n\t\t\t\tcolor: #9ea1a7;\n\t\t\t}\n\t\n\t\t\t&:hover:not( .selected ) {\n\t\t\t\tcolor: #007cba;\n\t\t\t}\n\t\t}\n\t}\n}"],sourceRoot:""}]);const c=i},185:(t,e,r)=>{r.d(e,{A:()=>c});var n=r(354),o=r.n(n),a=r(314),i=r.n(a)()(o());i.push([t.id,".hpu-select-blog-control{margin:0 10px 15px}.hpu-select-blog-control .hpu-select-blog-control--select ul{height:auto;max-height:450px}","",{version:3,sources:["webpack://./src/components/assets/css/SelectBlogControls.scss"],names:[],mappings:"AACA,yBACI,kBAAA,CAII,6DACI,WAAA,CACA,gBAAA",sourcesContent:["\n.hpu-select-blog-control {\n    margin: 0 10px 15px;\n\n    .hpu-select-blog-control--select {\n\n        ul {\n            height: auto;\n            max-height: 450px;\n        }\n    }\n}"],sourceRoot:""}]);const c=i},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(n)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var l=0;l<t.length;l++){var s=[].concat(t[l]);n&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),r&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=r):s[2]=r),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},354:t=>{t.exports=function(t){var e=t[1],r=t[3];if(!r)return e;if("function"==typeof btoa){var n=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:t=>{var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var a={},i=[],c=0;c<t.length;c++){var u=t[c],l=n.base?u[0]+n.base:u[0],s=a[l]||0,f="".concat(l," ").concat(s);a[l]=s+1;var p=r(f),h={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var v=o(h,n);n.byIndex=c,e.splice(c,0,{identifier:f,updater:v,references:1})}i.push(f)}return i}function o(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,o){var a=n(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=r(a[i]);e[c].references--}for(var u=n(t,o),l=0;l<a.length;l++){var s=r(a[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=u}}},659:t=>{var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={id:n,exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.nc=void 0;var n={};r.r(n),r.d(n,{CurrentlySelected:()=>_,PostSearchControls:()=>D,SelectBlogControls:()=>k});const o=window.wp.element,a=window.wp.components;var i=r(72),c=r.n(i),u=r(825),l=r.n(u),s=r(659),f=r.n(s),p=r(56),h=r.n(p),v=r(540),d=r.n(v),y=r(113),m=r.n(y),g=r(185),b={};function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function x(t){return function(t){if(Array.isArray(t))return j(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||C(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(){A=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof m?e:m,i=Object.create(a.prototype),c=new N(n||[]);return o(i,"_invoke",{value:k(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var p="suspendedStart",h="suspendedYield",v="executing",d="completed",y={};function m(){}function g(){}function b(){}var x={};l(x,i,(function(){return this}));var E=Object.getPrototypeOf,S=E&&E(E(T([])));S&&S!==r&&n.call(S,i)&&(x=S);var L=b.prototype=m.prototype=Object.create(x);function C(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==w(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(s).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function k(e,r,n){var o=p;return function(a,i){if(o===v)throw Error("Generator is already running");if(o===d){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=_(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var l=f(e,r,n);if("normal"===l.type){if(o=n.done?d:h,l.arg===y)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=d,n.method="throw",n.arg=l.arg)}}}function _(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=f(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,y;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(w(e)+" is not iterable")}return g.prototype=b,o(L,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=l(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},C(j.prototype),l(j.prototype,c,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new j(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},C(L),l(L,u,"Generator"),l(L,i,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function E(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function S(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){E(a,n,o,i,c,"next",t)}function c(t){E(a,n,o,i,c,"throw",t)}i(void 0)}))}}function L(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],u=!0,l=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return c}}(t,e)||C(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(t,e){if(t){if("string"==typeof t)return j(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(t,e):void 0}}function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function k(t){var e,r=L((0,o.useState)(null!=t&&t.blogID?"".concat(t.blogID):"1"),2),n=r[0],i=r[1],c=L((0,o.useState)(""),2),u=c[0],l=c[1],s=L((0,o.useState)([]),2),f=s[0],p=s[1],h=L((0,o.useState)([]),2),v=h[0],d=h[1],y=(null==t?void 0:t.onChange)||function(){};(0,o.useEffect)((function(){y(n)}),[n]),(0,o.useEffect)((function(){g()}),[u,n]),(0,o.useEffect)((function(){E()}),[f,n]);var m=function(){var e=S(A().mark((function e(){var r,o,a,i;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return",[]);case 2:return r=null,o=(null==t?void 0:t.apiDomain)||window.location.origin,e.prev=4,a="".concat(o,"/wp-json/hpu/v1/blogs/").concat(n),e.next=8,fetch(a);case 8:if(!(i=e.sent).ok){e.next=13;break}return e.next=12,i.json();case 12:r=e.sent;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),console.warn("Error fetching single blog: ",e.t0);case 18:return e.prev=18,e.abrupt("return",r);case 21:case"end":return e.stop()}}),e,null,[[4,15,18,21]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=S(A().mark((function e(){var r,o,a,i,c;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],o="",a=(null==t?void 0:t.apiDomain)||window.location.origin,u&&(o+="&search="+u),n&&(o+="&exclude="+n),e.prev=5,i="".concat(a,"/wp-json/hpu/v1/blogs?per_page=20").concat(o),e.next=9,fetch(i);case 9:if(!(c=e.sent).ok){e.next=14;break}return e.next=13,c.json();case 13:r=e.sent;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(5),console.warn("Error fetching blog list: ",e.t0);case 19:return e.prev=19,p(r),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[5,16,19,22]])})));return function(){return e.apply(this,arguments)}}(),b=function(t){var e=(null==t?void 0:t.id)||null;if(!e)return null;var r=w(null==t?void 0:t.name)||"Untitled",n=w(null==t?void 0:t.path)||"";return{value:e,label:"".concat(r," - ").concat(n)}},w=function(t){return(new DOMParser).parseFromString(t,"text/html").documentElement.textContent},E=function(){var t=S(A().mark((function t(){var e,r,n;return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],t.next=3,m();case 3:(r=t.sent)&&null!=r&&r.id&&e.push(b(r)),n=f.map((function(t){return b(t)})),e=[].concat(x(e),x(n)),d(e);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return React.createElement("div",{className:"hpu-select-blog-control"},React.createElement(a.ComboboxControl,{className:"hpu-select-blog-control--select",label:"Select Blog",value:n||(null===(e=v[0])||void 0===e?void 0:e.value)||"1",onChange:function(t){i(t)},onFilterValueChange:function(t){l(t)},options:v,__nextHasNoMarginBottom:!0}))}function _(t){var e,r=t.label,n=t.selectedItem,o=t.selectedItems,i=t.onRemove;return o=o||(n?[n]:[]),React.createElement(a.BaseControl,{label:r||"Currently Selected",className:"hpu-component-currently-selected",__nextHasNoMarginBottom:!0},o.length?null===(e=o)||void 0===e?void 0:e.map((function(t){return React.createElement(a.Card,{key:null==t?void 0:t.id},React.createElement(a.CardBody,{size:"xSmall"},React.createElement(a.Flex,{justify:"space-between",align:"center"},React.createElement("div",null,null==t?void 0:t.name),React.createElement(a.Button,{variant:"tertiary",size:"small",isDestructive:!0,onClick:function(){i(null==t?void 0:t.id)},"aria-label":"remove ".concat(null==t?void 0:t.name)},"X"))))})):null)}b.styleTagTransform=m(),b.setAttributes=h(),b.insert=f().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=d(),c()(g.A,b),g.A&&g.A.locals&&g.A.locals;var O=r(507),I={};function N(t){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(t)}function T(){T=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof m?e:m,i=Object.create(a.prototype),c=new O(n||[]);return o(i,"_invoke",{value:C(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var p="suspendedStart",h="suspendedYield",v="executing",d="completed",y={};function m(){}function g(){}function b(){}var w={};l(w,i,(function(){return this}));var x=Object.getPrototypeOf,A=x&&x(x(I([])));A&&A!==r&&n.call(A,i)&&(w=A);var E=b.prototype=m.prototype=Object.create(w);function S(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==N(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(s).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function C(e,r,n){var o=p;return function(a,i){if(o===v)throw Error("Generator is already running");if(o===d){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=j(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var l=f(e,r,n);if("normal"===l.type){if(o=n.done?d:h,l.arg===y)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=d,n.method="throw",n.arg=l.arg)}}}function j(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=f(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,y;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function I(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(N(e)+" is not iterable")}return g.prototype=b,o(E,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=l(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},S(L.prototype),l(L.prototype,c,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new L(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},S(E),l(E,u,"Generator"),l(E,i,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=I,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:I(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function P(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function R(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){P(a,n,o,i,c,"next",t)}function c(t){P(a,n,o,i,c,"throw",t)}i(void 0)}))}}function F(t){return function(t){if(Array.isArray(t))return M(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||G(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],u=!0,l=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return c}}(t,e)||G(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(t,e){if(t){if("string"==typeof t)return M(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?M(t,e):void 0}}function M(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function D(t){var e=B((0,o.useState)((function(){return null!=t&&t.postArray&&Array.isArray(null==t?void 0:t.postArray)?t.postArray:null!=t&&t.postID?[t.postID]:[]})),2),r=e[0],n=e[1],i=B((0,o.useState)(null),2),c=i[0],u=i[1],l=B((0,o.useState)(!1),2),s=l[0],f=l[1],p=B((0,o.useState)(!1),2),h=p[0],v=p[1],d=B((0,o.useState)(!1),2),y=(d[0],d[1],B((0,o.useState)(""),2)),m=y[0],g=y[1],b=B((0,o.useState)([]),2),w=b[0],x=b[1],A=(0,o.useRef)(null),E=(0,o.useRef)(null),S=void 0!==(null==t?void 0:t.postArray),L=(null==t?void 0:t.blogPath)||null,C=(null==t?void 0:t.blogID)||null,j=(null==t?void 0:t.apiDomain)||window.location.origin,k=(null==t?void 0:t.apiNameSpace)||"wp/v2",O=(null==t?void 0:t.postType)||(null!=t&&t.apiNameSpace?"":"posts"),I=(null==t?void 0:t.wpNonce)||null,N=(null==t?void 0:t.onChange)||function(){};(0,o.useEffect)((function(){null!=t&&t.postArray&&Array.isArray(t.postArray)&&n(t.postArray)}),[t.postArray]),(0,o.useEffect)((function(){v(!1)}),[L,C,j,k,O,I]);var P=function(t){var e=S?t:t[0];N(e)},G=(0,o.useCallback)((function(t){if(g(t),v(!0),clearTimeout(E.current),0===t.length)return x([]),void f(!1);f(!0),E.current=setTimeout(R(T().mark((function t(){var e,r,n,o,a,i;return T().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,U();case 3:return e=t.sent,r=m?"?search=".concat(m,"&per_page=20"):"?per_page=20&orderby=date",n=I?"&_wpnonce=".concat(I):"",o=e+r+n,t.next=9,fetch(o);case 9:if(!(a=t.sent).ok){t.next=15;break}return t.next=13,a.json();case 13:i=t.sent,x(i.map((function(t){var e;return{label:(null==t||null===(e=t.title)||void 0===e?void 0:e.rendered)||"Untitled",value:t.id}})));case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),console.warn("Error fetching posts: ",t.t0);case 20:return t.prev=20,f(!1),t.finish(20);case 23:case"end":return t.stop()}}),t,null,[[0,17,20,23]])}))),600)}));(0,o.useEffect)((function(){return function(){return clearTimeout(E.current)}}),[]);var M=function(t){return(null==t?void 0:t.replace(/^\/|\/$/,""))||""},D=function(){var t=R(T().mark((function t(){var e,r,n,o;return T().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(C){t.next=2;break}return t.abrupt("return","/");case 2:return t.prev=2,r="".concat(j,"/wp-json/hpu/v1/blogs/").concat(C,"/"),t.next=6,fetch(r);case 6:if(!(n=t.sent).ok){t.next=12;break}return t.next=10,n.json();case 10:o=t.sent,e=(null==o?void 0:o.path)||"/";case 12:t.next=18;break;case 14:t.prev=14,t.t0=t.catch(2),console.warn("Error fetching blog list: ",t.t0),e="/";case 18:return t.abrupt("return",e);case 19:case"end":return t.stop()}}),t,null,[[2,14]])})));return function(){return t.apply(this,arguments)}}(),U=function(){var t=R(T().mark((function t(){var e,r,n,o,a,i;return T().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=M(j),!L){t.next=6;break}e="/"===L?"/":"/".concat(M(L),"/"),r="".concat(n).concat(e,"wp-json/"),t.next=14;break;case 6:if(!C){t.next=13;break}return t.next=9,D(j);case 9:e=t.sent,r="".concat(n).concat(e,"wp-json/"),t.next=14;break;case 13:r=wpApiSettings.root;case 14:return o=M(k),a=M(O),i=M("".concat(r).concat(o,"/").concat(a)),t.abrupt("return",i);case 18:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,o.useEffect)((function(){!function(){if(r&&0!==r.length){var t=function(){var t=R(T().mark((function t(){var e,n;return T().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,U();case 3:return e=t.sent,t.next=6,Promise.all(r.map(function(){var t=R(T().mark((function t(r){var n;return T().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(e,"/").concat(r));case 2:if(!(n=t.sent).ok){t.next=9;break}return t.next=6,n.json();case 6:return t.abrupt("return",t.sent);case 9:return console.warn("Error fetching post with ID ".concat(r,": "),n.statusText),t.abrupt("return",null);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 6:n=t.sent,u(n.filter((function(t){return null!==t}))),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.warn("Error fetching selected post: ",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();t()}else u(null)}()}),[r]),React.createElement("div",{className:"hpu-post-search-control"},React.createElement(a.SearchControl,{ref:A,className:"hpu-post-search-control--search-input",label:(null==t?void 0:t.searchLabel)||"Search Posts",hideLabelFromVision:!1,value:m,onChange:G,__nextHasNoMarginBottom:!0}),c&&React.createElement(_,{label:(null==t?void 0:t.selectedLabel)||"Selected Posts",className:"hpu-post-search-control--currently-selected",selectedItems:c.map((function(t){var e;return{name:null===(e=t.title)||void 0===e?void 0:e.rendered,id:t.id}})),onRemove:function(t){!function(t){var e;e=S?t?r.filter((function(e){return e!==t})):r:[],n(F(e)),P(e)}(t)}}),h&&m.length?React.createElement(a.Popover,{anchor:A.current,className:"hpu-post-search-control--results",placement:(null==t?void 0:t.placement)||"left-start",onClose:function(){v(!1)}},React.createElement("ul",{className:"search-results","aria-live":"polite"},s&&React.createElement(a.Spinner,null),w.map((function(t){return React.createElement("li",{role:"button",tabIndex:0,className:"search-result".concat(r.includes(t.value)?" selected":""),key:t.value,onClick:function(){!function(t){if(!S||!r.includes(t)){var e=S?[].concat(F(r),[t]):[t];n(e),P(e)}}(t.value),v(S)}},t.label)})),s||w.length?null:React.createElement("li",{className:"search-result no-results"},"No Results Found. Sorry."))):null)}return I.styleTagTransform=m(),I.setAttributes=h(),I.insert=f().bind(null,"head"),I.domAPI=l(),I.insertStyleElement=d(),c()(O.A,I),O.A&&O.A.locals&&O.A.locals,n})()));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/blocks/testing-multipost/edit.js":
/*!**********************************************!*\
  !*** ./src/blocks/testing-multipost/edit.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hpu_wp_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hpu-wp/components */ "./node_modules/@hpu-wp/components/build/index.js");
/* harmony import */ var _hpu_wp_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_hpu_wp_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/testing-multipost/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function Edit({
  attributes,
  setAttributes
}) {
  const {
    postArray = [],
    postType = 'posts',
    blogID = 1
  } = attributes;
  const handlePostTypeChange = value => {
    if (value !== postType) {
      setAttributes({
        postType: value,
        postArray: []
      }); // Reset postArray when postType changes
    }
  };
  const handleBlogIDChange = value => {
    const intValue = parseInt(value);
    if (intValue !== blogID) {
      setAttributes({
        blogID: intValue,
        postArray: []
      }); // Reset postArray when blogID changes
    }
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (postType !== attributes.postType || blogID !== attributes.blogID) {
      setAttributes({
        postArray: []
      });
    }
  }, [postType, blogID]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_hpu_wp_components__WEBPACK_IMPORTED_MODULE_3__.SelectBlogControls, {
        blogID: blogID,
        onChange: handleBlogIDChange
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "hpu-multipost-testing-select-wrapper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
          label: "Select Post Type",
          value: postType || 'posts',
          onChange: handlePostTypeChange,
          options: [{
            value: 'posts',
            label: 'Posts'
          }, {
            value: 'pages',
            label: 'Pages'
          }, {
            value: 'menu-items',
            label: 'Menu Items'
          }],
          __nextHasNoMarginBottom: true
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_hpu_wp_components__WEBPACK_IMPORTED_MODULE_3__.PostSearchControls, {
        postArray: postArray,
        postType: postType,
        blogID: blogID,
        wpNonce: window?.wpApiSettings?.nonce,
        onChange: value => {
          setAttributes({
            postArray: value
          });
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        children: "Testing MultiPost PostSearchControls component"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("pre", {
        children: ["postArray: ", JSON.stringify(postArray)]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("pre", {
        children: ["attributes: ", JSON.stringify(attributes)]
      })]
    })]
  });
}

/***/ }),

/***/ "./src/blocks/testing-multipost/index.js":
/*!***********************************************!*\
  !*** ./src/blocks/testing-multipost/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/testing-multipost/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/testing-multipost/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/testing-multipost/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blocks/testing-multipost/editor.scss":
/*!**************************************************!*\
  !*** ./src/blocks/testing-multipost/editor.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/testing-multipost/style.scss":
/*!*************************************************!*\
  !*** ./src/blocks/testing-multipost/style.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "./src/blocks/testing-multipost/block.json":
/*!*************************************************!*\
  !*** ./src/blocks/testing-multipost/block.json ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"hpu/testing-multipost","version":"0.1.0","title":"Testing MultiPost","category":"theme","icon":"smiley","description":"Testing stuff...","example":{},"supports":{"html":false},"textdomain":"testing-multipost","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js","attributes":{"postArray":{"type":"array","default":[]},"postType":{"type":"string","default":"posts"},"blogID":{"type":"number","default":1}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/testing-multipost/index": 0,
/******/ 			"blocks/testing-multipost/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhpu_custom_blocks"] = self["webpackChunkhpu_custom_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/testing-multipost/style-index"], () => (__webpack_require__("./src/blocks/testing-multipost/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map