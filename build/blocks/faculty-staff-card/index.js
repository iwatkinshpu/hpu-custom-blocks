(()=>{var e,t={816:function(e){var t;t=()=>(()=>{"use strict";var e={507:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(354),o=r.n(n),a=r(314),c=r.n(a)()(o());c.push([e.id,".hpu-post-search-control-results .search-results li.search-result{padding:5px 10px;max-width:280px;text-wrap:nowrap;cursor:pointer}.hpu-post-search-control-results .search-results li.search-result.selected{background-color:#f0f0f0;color:#9ea1a7}.hpu-post-search-control-results .search-results li.search-result:hover:not(.selected){color:#007cba}","",{version:3,sources:["webpack://./src/components/assets/css/PostSearchControls.scss"],names:[],mappings:"AAKE,kEACC,gBAAA,CACA,eAAA,CACA,gBAAA,CACA,cAAA,CAEA,2EACC,wBAAA,CACA,aAAA,CAGD,uFACC,aAAA",sourcesContent:["\n.hpu-post-search-control-results {\n\n\t.search-results {\n\n\t\tli.search-result {\n\t\t\tpadding: 5px 10px;\n\t\t\tmax-width: 280px;\n\t\t\ttext-wrap: nowrap;\n\t\t\tcursor: pointer;\n\n\t\t\t&.selected {\n\t\t\t\tbackground-color: #f0f0f0;\n\t\t\t\tcolor: #9ea1a7;\n\t\t\t}\n\t\n\t\t\t&:hover:not( .selected ) {\n\t\t\t\tcolor: #007cba;\n\t\t\t}\n\t\t}\n\t}\n}"],sourceRoot:""}]);const i=c},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(n)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(c[l]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);n&&c[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},354:e=>{e.exports=function(e){var t=e[1],r=e[3];if(!r)return t;if("function"==typeof btoa){var n=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),a="/*# ".concat(o," */");return[t].concat([a]).join("\n")}return[t].join("\n")}},72:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},c=[],i=0;i<e.length;i++){var l=e[i],s=n.base?l[0]+n.base:l[0],u=a[s]||0,f="".concat(s," ").concat(u);a[s]=u+1;var p=r(f),d={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(d);else{var h=o(d,n);n.byIndex=i,t.splice(i,0,{identifier:f,updater:h,references:1})}c.push(f)}return c}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=r(a[c]);t[i].references--}for(var l=n(e,o),s=0;s<a.length;s++){var u=r(a[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=l}}},659:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nc=void 0;var n={};r.r(n),r.d(n,{CurrentlySelected:()=>a,PostSearchControls:()=>P});const o=window.wp.components;function a(e){var t,r=e.label,n=e.selectedItem,a=e.selectedItems,c=e.onRemove;return a=a||(n?[n]:[]),React.createElement(o.BaseControl,{label:r||"Currently Selected",className:"hpu-component-currently-selected"},a.length?null===(t=a)||void 0===t?void 0:t.map((function(e){return React.createElement(o.Card,{key:null==e?void 0:e.id},React.createElement(o.CardBody,{size:"xSmall"},React.createElement(o.Flex,{justify:"space-between",align:"center"},React.createElement("div",null,null==e?void 0:e.name),React.createElement(o.Button,{variant:"tertiary",size:"small",isDestructive:!0,onClick:function(){c(null==e?void 0:e.id)},"aria-label":"remove ".concat(null==e?void 0:e.name)},"X"))))})):null)}const c=window.wp.element;var i=r(72),l=r.n(i),s=r(825),u=r.n(s),f=r(659),p=r.n(f),d=r(56),h=r.n(d),v=r(540),m=r.n(v),y=r(113),g=r.n(y),b=r(507),w={};function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function A(){A=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var a=t&&t.prototype instanceof y?t:y,c=Object.create(a.prototype),i=new _(n||[]);return o(c,"_invoke",{value:N(e,r,i)}),c}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var p="suspendedStart",d="suspendedYield",h="executing",v="completed",m={};function y(){}function g(){}function b(){}var w={};s(w,c,(function(){return this}));var j=Object.getPrototypeOf,S=j&&j(j(I([])));S&&S!==r&&n.call(S,c)&&(w=S);var E=b.prototype=y.prototype=Object.create(w);function k(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function C(e,t){function r(o,a,c,i){var l=f(e[o],e,a);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==x(u)&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,c,i)}),(function(e){r("throw",e,c,i)})):t.resolve(u).then((function(e){s.value=e,c(s)}),(function(e){return r("throw",e,c,i)}))}i(l.arg)}var a;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}})}function N(t,r,n){var o=p;return function(a,c){if(o===h)throw Error("Generator is already running");if(o===v){if("throw"===a)throw c;return{value:e,done:!0}}for(n.method=a,n.arg=c;;){var i=n.delegate;if(i){var l=P(i,n);if(l){if(l===m)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=h;var s=f(t,r,n);if("normal"===s.type){if(o=n.done?v:d,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function P(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,P(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=f(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var c=a.arg;return c?c.done?(r[t.resultName]=c.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):c:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function I(t){if(t||""===t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(x(t)+" is not iterable")}return g.prototype=b,o(E,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=s(b,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,s(e,l,"GeneratorFunction")),e.prototype=Object.create(E),e},t.awrap=function(e){return{__await:e}},k(C.prototype),s(C.prototype,i,(function(){return this})),t.AsyncIterator=C,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var c=new C(u(e,r,n,o),a);return t.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},k(E),s(E,l,"Generator"),s(E,c,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=I,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return i.type="throw",i.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var c=this.tryEntries[a],i=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var l=n.call(c,"catchLoc"),s=n.call(c,"finallyLoc");if(l&&s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(l){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=e,c.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:I(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}function j(e,t,r,n,o,a,c){try{var i=e[a](c),l=i.value}catch(e){return void r(e)}i.done?t(l):Promise.resolve(l).then(n,o)}function S(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function c(e){j(a,n,o,c,i,"next",e)}function i(e){j(a,n,o,c,i,"throw",e)}c(void 0)}))}}function E(e){return function(e){if(Array.isArray(e))return N(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||C(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,c,i=[],l=!0,s=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(i.push(n.value),i.length!==t);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(s)throw o}}return i}}(e,t)||C(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){if(e){if("string"==typeof e)return N(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?N(e,t):void 0}}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function P(e){var t=void 0!==(null==e?void 0:e.postArray),r=k((0,c.useState)((function(){return null!=e&&e.postArray&&Array.isArray(null==e?void 0:e.postArray)?e.postArray:null!=e&&e.postID?[e.postID]:[]})),2),n=r[0],i=r[1],l=k((0,c.useState)(null),2),s=l[0],u=l[1],f=k((0,c.useState)(!1),2),p=f[0],d=f[1],h=k((0,c.useState)(!1),2),v=h[0],m=h[1],y=k((0,c.useState)(""),2),g=y[0],b=y[1],w=k((0,c.useState)([]),2),x=w[0],j=w[1],C=(0,c.useRef)(null),N=(0,c.useRef)(null),P=function(r){if("function"==typeof(null==e?void 0:e.onChange)){var n=t?r:r[0];e.onChange(n)}},L=(0,c.useCallback)((function(t){if(b(t),m(!0),clearTimeout(N.current),0===t.length)return j([]),void d(!1);d(!0),N.current=setTimeout(S(A().mark((function t(){var r,n,o,a,c,i;return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I();case 3:return r=t.sent,n=g?"?search=".concat(g,"&per_page=20"):"?per_page=20&orderby=date",o=null!=e&&e.wpNonce?"&_wpnonce=".concat(e.wpNonce):"",a=r+n+o,t.next=9,fetch(a);case 9:if(!(c=t.sent).ok){t.next=15;break}return t.next=13,c.json();case 13:i=t.sent,j(i.map((function(e){var t;return{label:(null==e||null===(t=e.title)||void 0===t?void 0:t.rendered)||"Untitled",value:e.id}})));case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),console.warn("Error fetching posts: ",t.t0);case 20:return t.prev=20,d(!1),t.finish(20);case 23:case"end":return t.stop()}}),t,null,[[0,17,20,23]])}))),600)}));(0,c.useEffect)((function(){return function(){return clearTimeout(N.current)}}),[]);var O=function(e){return(null==e?void 0:e.replace(/^\/|\/$/,""))||""},_=function(){var e=S(A().mark((function e(t){var r,n,o,a;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t+"/wp-json/hpu/v1/blogs?id="+blogID,e.next=4,fetch(n);case 4:if(!(o=e.sent).ok){e.next=10;break}return e.next=8,o.json();case 8:a=e.sent,r=(null==a?void 0:a.path)||"/";case 10:e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.warn("Error fetching blog list: ",e.t0),r="/";case 16:return e.abrupt("return",r);case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var t=S(A().mark((function t(){var r,n,o,a,c,i;return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=O(null==e?void 0:e.apiDomain)||window.location.origin,null==e||!e.blogPath){t.next=6;break}r="/"===e.blogPath?"/":"/".concat(O(e.blogPath),"/"),n="".concat(o).concat(r,"wp-json/"),t.next=14;break;case 6:if(null==e||!e.blogID){t.next=13;break}return t.next=9,_(o);case 9:r=t.sent,n="".concat(o).concat(r,"wp-json/"),t.next=14;break;case 13:n=wpApiSettings.root;case 14:return a=O(null==e?void 0:e.apiNameSpace)||"wp/v2",c=null!=e&&e.apiNameSpace?"":"posts",i=(null==e?void 0:e.postType)||c,t.abrupt("return",O("".concat(n).concat(a,"/").concat(i)));case 18:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,c.useEffect)((function(){if(n&&n.length>0){var e=function(){var e=S(A().mark((function e(){var t,r;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I();case 3:return t=e.sent,e.next=6,Promise.all(n.map(function(){var e=S(A().mark((function e(r){var n;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/").concat(r));case 2:if(!(n=e.sent).ok){e.next=9;break}return e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 9:return console.warn("Error fetching post with ID ".concat(r,": "),n.statusText),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:r=e.sent,u(r.filter((function(e){return null!==e}))),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.warn("Error fetching selected post: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}else u(null)}),[n,I]),React.createElement("div",{className:"hpu-component-post-search-control"},React.createElement(o.SearchControl,{ref:C,className:"post-search-control-selector",label:(null==e?void 0:e.searchLabel)||"Search Posts",hideLabelFromVision:!1,value:g,onChange:L,__nextHasNoMarginBottom:!0}),s&&React.createElement(a,{label:(null==e?void 0:e.selectedLabel)||"Selected Posts",className:"post-search-control-currently-selected",selectedItems:s.map((function(e){var t;return{name:null===(t=e.title)||void 0===t?void 0:t.rendered,id:e.id}})),onRemove:function(e){!function(e){var r;r=t?e?n.filter((function(t){return t!==e})):n:[],i(E(r)),P(r)}(e)},style:{borderBottom:"1px solid #eee"}}),v&&g.length?React.createElement(o.Popover,{anchor:C.current,className:"hpu-post-search-control-results",placement:(null==e?void 0:e.placement)||"left-start",onClose:function(){m(!1)}},React.createElement("ul",{className:"search-results","aria-live":"polite"},p&&React.createElement(o.Spinner,null),x.map((function(e){return React.createElement("li",{role:"button",tabIndex:0,className:"search-result".concat(n.includes(e.value)?" selected":""),key:e.value,onClick:function(){!function(e){if(!t||!n.includes(e)){var r=t?[].concat(E(n),[e]):[e];i(r),P(r)}}(e.value),m(t)}},e.label)})),p||x.length?null:React.createElement("li",{className:"search-result no-results"},"No Results Found. Sorry."))):null)}return w.styleTagTransform=g(),w.setAttributes=h(),w.insert=p().bind(null,"head"),w.domAPI=u(),w.insertStyleElement=m(),l()(b.A,w),b.A&&b.A.locals&&b.A.locals,n})(),e.exports=t()},335:(e,t,r)=>{"use strict";const n=window.wp.blocks,o=window.wp.element,a=window.wp.components,c=window.wp.blockEditor;var i=r(816);const l=window.ReactJSXRuntime,s=JSON.parse('{"UU":"hpu/faculty-staff-card"}');(0,n.registerBlockType)(s.UU,{edit:function({attributes:e,setAttributes:t}){var r,n;const{postID:s}=e,[u,f]=(0,o.useState)(null),[p,d]=(0,o.useState)(!1);(0,o.useEffect)((()=>{s?(d(null===u),(async()=>{try{const e=await fetch(`${window.location.origin}/wp-json/hpu/v1/directory/${s}/`);if(e.ok){const t=await e.json();f(t)}}catch(e){console.warn("Error fetching profile: ",e)}finally{d(!1)}})()):f(null)}),[s]);const h=e=>e.replace(/^[^\d]*\+?1?[^\d]*(\d{3})[^\d]*(\d{3})[^\d]*(\d{4})[^\d]*$/,"+1 ($1) $2-$3"),v=`${window.HPUCustomBlocksData.assetPath}images/default-profile-image.jpg`;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.InspectorControls,{children:(0,l.jsx)(i.PostSearchControls,{blogPath:"/",postID:s,apiNameSpace:"hpu/v1/directory",searchLabel:"Select Directory Profile",selectedLabel:"Selected Profile",onChange:e=>{t({postID:e})}})}),(0,l.jsx)("div",{...(0,c.useBlockProps)(),children:u?(0,l.jsxs)("div",{className:"profile-card",children:[(0,l.jsx)("div",{className:"profile-card-image",children:(0,l.jsx)("img",{src:null!==(r=null!==(n=u?.image?.thumbnail)&&void 0!==n?n:u?.image?.url)&&void 0!==r?r:v,alt:u?.title?.rendered+" Profile Photo"})}),(0,l.jsxs)("div",{className:"profile-card-text",children:[(0,l.jsx)("div",{className:"profile-card-title profile-selected",children:(0,l.jsx)("a",{"data-preview-href":u.link,children:u?.title?.full})}),u.job_role&&(0,l.jsx)("div",{className:"profile-card-role",children:u.job_role}),u.email&&(0,l.jsxs)("div",{className:"profile-card-email",children:[(0,l.jsx)("span",{className:"icon"}),(0,l.jsx)("a",{"data-preview-href":`mailto:${u.email}`,children:u.email})]}),u.phone&&(0,l.jsxs)("div",{className:"profile-card-phone",children:[(0,l.jsx)("span",{className:"icon"}),(0,l.jsx)("a",{"data-preview-href":`tel:${h(u.phone)}`,children:h(u.phone)})]})]})]}):(0,l.jsxs)("div",{className:"profile-card profile-not-selected",children:[(0,l.jsx)("div",{className:"profile-card-image",children:p?(0,l.jsx)(a.Spinner,{}):(0,l.jsx)("img",{src:v,alt:"Default Profile Photo"})}),(0,l.jsx)("div",{className:"profile-card-text",children:"Please Select a Directory Profile from the side bar."})]})})]})}})}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e].call(a.exports,a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,r,o,a)=>{if(!r){var c=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],a=e[u][2];for(var i=!0,l=0;l<r.length;l++)(!1&a||c>=a)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(i=!1,a<c&&(c=a));if(i){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={973:0,57:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,c=r[0],i=r[1],l=r[2],s=0;if(c.some((t=>0!==e[t]))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(l)var u=l(n)}for(t&&t(r);s<c.length;s++)a=c[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},r=self.webpackChunkhpu_custom_blocks=self.webpackChunkhpu_custom_blocks||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[57],(()=>n(335)));o=n.O(o)})();