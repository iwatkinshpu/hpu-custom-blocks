(()=>{var t,e={925:(t,e,r)=>{"use strict";const n=window.wp.blocks,o=(window.wp.element,window.wp.blockEditor);var a=r(248);const i=window.ReactJSXRuntime,c=JSON.parse('{"UU":"hpu/testing-multipost"}');(0,n.registerBlockType)(c.UU,{edit:function({attributes:t,setAttributes:e}){const{postArray:r=[]}=t;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.InspectorControls,{children:(0,i.jsx)(a.PostSearchControls,{postArray:r,onChange:t=>{e({postArray:t})}})}),(0,i.jsxs)("div",{...(0,o.useBlockProps)(),children:["Testing MultiPost PostSearchControls component",Array.isArray(r)&&r?.map(((t,e)=>(0,i.jsx)("p",{children:t},e)))]})]})}})},248:function(t){var e;e=()=>(()=>{"use strict";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{CurrentlySelected:()=>o,PostSearchControls:()=>h});const r=window.wp.element,n=window.wp.components;function o(t){var e,r=t.label,o=t.selectedItem,a=t.selectedItems,i=t.onRemove;return a=a||(o?[o]:[]),React.createElement(n.BaseControl,{label:r||"Currently Selected"},null===(e=a)||void 0===e?void 0:e.map((function(t){return React.createElement(n.Card,{key:null==t?void 0:t.id},React.createElement(n.CardBody,{size:"xSmall"},React.createElement(n.Flex,{justify:"space-between",align:"center"},React.createElement("div",null,null==t?void 0:t.name),React.createElement(n.Button,{variant:"tertiary",size:"small",isDestructive:!0,onClick:function(){i(t)},"aria-label":"remove ".concat(null==t?void 0:t.name)},"X"))))})))}var a=["isLoading","queriedPosts","handleChange","setIsPopoverOpen"];function i(){i=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var a=e&&e.prototype instanceof b?e:b,i=Object.create(a.prototype),c=new N(n||[]);return o(i,"_invoke",{value:L(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var v="suspendedStart",d="suspendedYield",y="executing",m="completed",g={};function b(){}function w(){}function x(){}var S={};f(S,c,(function(){return this}));var E=Object.getPrototypeOf,k=E&&E(E(I([])));k&&k!==r&&n.call(k,c)&&(S=k);var O=x.prototype=b.prototype=Object.create(S);function j(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function r(o,a,i,c){var l=h(t[o],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==u(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(l.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function L(e,r,n){var o=v;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var l=_(c,n);if(l){if(l===g)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=h(e,r,n);if("normal"===u.type){if(o=n.done?m:d,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=m,n.method="throw",n.arg=u.arg)}}}function _(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=h(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function I(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(u(e)+" is not iterable")}return w.prototype=x,o(O,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:w,configurable:!0}),w.displayName=f(x,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,s,"GeneratorFunction")),t.prototype=Object.create(O),t},e.awrap=function(t){return{__await:t}},j(P.prototype),f(P.prototype,l,(function(){return this})),e.AsyncIterator=P,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new P(p(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(O),f(O,s,"Generator"),f(O,c,(function(){return this})),f(O,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=I,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(R),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),R(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;R(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:I(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function c(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function l(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){c(a,n,o,i,l,"next",t)}function l(t){c(a,n,o,i,l,"throw",t)}i(void 0)}))}}function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var p=function(t){var e=t.isLoading,r=t.queriedPosts,o=t.handleChange,i=t.setIsPopoverOpen,c=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(e.includes(n))continue;r[n]=t[n]}return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,a);return React.createElement(n.Popover,c,React.createElement("ul",{className:"search-results","aria-live":"polite",style:{width:"280px",padding:"0 10px"}},e&&React.createElement(n.Spinner,null),r.map((function(t){return React.createElement("li",{role:"button",tabIndex:0,className:"is-nowrap",key:t.value,onClick:function(){o(t.value),i(!1)}},t.label)})),!e&&0===r.length&&React.createElement("li",{className:"no-results"},"No Results Found. Sorry.")))};function h(t){var e,a=s((0,r.useState)(t.postID||null),2),c=a[0],f=a[1],h=s((0,r.useState)(t.postArray||[]),2),v=(h[0],h[1]),d=s((0,r.useState)(null),2),y=d[0],m=d[1],g=s((0,r.useState)([]),2),b=g[0],w=g[1],x=s((0,r.useState)(!1),2),S=x[0],E=x[1],k=s((0,r.useState)(!1),2),O=k[0],j=k[1],P=s((0,r.useState)(!1),2),L=P[0],_=P[1],C=(0,r.useRef)(null),R=(0,r.useRef)(""),N=null==t?void 0:t.postArray,I=function(t){return(null==t?void 0:t.replace(/^\/|\/$/,""))||""},A=function(){var t=l(i().mark((function t(e){var r,n,o,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e+"/wp-json/hpu/v1/blogs?id="+blogID,t.next=4,fetch(n);case 4:if(!(o=t.sent).ok){t.next=10;break}return t.next=8,o.json();case 8:a=t.sent,r=(null==a?void 0:a.path)||"/";case 10:t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),console.warn("Error fetching blog list: ",t.t0),r="/";case 16:return t.abrupt("return",r);case 17:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}(),T=(0,r.useCallback)(l(i().mark((function e(){var r,n,o,a,c,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=I(null==t?void 0:t.apiDomain)||window.location.origin,null==t||!t.blogPath){e.next=7;break}r="/"===t.blogPath?"/":"/".concat(I(t.blogPath),"/"),n="".concat(o,"/wp-json").concat(r),console.log("generating blog path from blogPath: ",r),e.next=17;break;case 7:if(null==t||!t.blogID){e.next=15;break}return e.next=10,A(o);case 10:r=e.sent,n="".concat(o,"/wp-json").concat(r),console.log("generating blog path from blogID: ",r),e.next=17;break;case 15:n=wpApiSettings.root,console.log("generated apiRoot from wpApiSettings.root: ",n);case 17:return a=I(null==t?void 0:t.apiNameSpace)||"wp/v2",c=null!=t&&t.apiNameSpace?"":"posts",l=(null==t?void 0:t.postType)||c,e.abrupt("return",I("".concat(n).concat(a,"/").concat(l)));case 21:case"end":return e.stop()}}),e)}))),[t.apiDomain,t.blogPath,t.blogID,t.apiNameSpace,t.postType]);return(0,r.useEffect)((function(){if(!L)return w([]),void E(!1);E(!0);var t=function(){var t=l(i().mark((function t(){var e,r,n,o,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T();case 3:return e=t.sent,r=R.current?"?search=".concat(R.current,"&per_page=20"):"?per_page=20&orderby=date",n=e+r,t.next=8,fetch(n);case 8:if(!(o=t.sent).ok){t.next=14;break}return t.next=12,o.json();case 12:a=t.sent,w(a.map((function(t){var e;return{label:(null==t||null===(e=t.title)||void 0===e?void 0:e.rendered)||"Untitled",value:t.id}})));case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),console.log("Error fetching posts: ",t.t0);case 19:return t.prev=19,E(!1),t.finish(19);case 22:case"end":return t.stop()}}),t,null,[[0,16,19,22]])})));return function(){return t.apply(this,arguments)}}(),e=setTimeout(t,200);return function(){return clearTimeout(e)}}),[L,T]),(0,r.useEffect)((function(){if(c){var t=function(){var t=l(i().mark((function t(){var e,r,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T();case 3:return e=t.sent,t.next=6,fetch("".concat(e,"/").concat(c));case 6:if(!(r=t.sent).ok){t.next=12;break}return t.next=10,r.json();case 10:n=t.sent,m(n);case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.log("Error fetching selected post: ",t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(){return t.apply(this,arguments)}}();t()}else m(null)}),[c,T]),React.createElement("div",{className:"post-search-control"},y&&React.createElement(o,{label:"Selected Profile",selectedItem:{name:null===(e=y.title)||void 0===e?void 0:e.rendered,id:y.id},onRemove:function(e){var r;r=null,"function"==typeof t.onChange&&(N&&"array"!=typeof r&&(r=[r]),t.onChange(r)),function(t){N&&"array"==typeof t?v(t):N||"array"==typeof t?console.warn("received unexpected value type when setting new value: ",u(t)):f(t)}(r)}}),React.createElement(n.SearchControl,{ref:C,className:"post-search-control-selector",label:t.searchLabel||"Search Posts",hideLabelFromVision:!1,value:R.current,onChange:function(t){R.current=t,_(t),j(!0)},__nextHasNoMarginBottom:!0}),O&&React.createElement(p,{anchor:C.current,className:"post-search-control-results",onClose:function(){return j(!1)},position:"bottom center",isLoading:S,queriedPosts:b}))}return e})(),t.exports=e()}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={exports:{}};return e[t].call(a.exports,a,a.exports,n),a.exports}n.m=e,t=[],n.O=(e,r,o,a)=>{if(!r){var i=1/0;for(s=0;s<t.length;s++){r=t[s][0],o=t[s][1],a=t[s][2];for(var c=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((t=>n.O[t](r[l])))?r.splice(l--,1):(c=!1,a<i&&(i=a));if(c){t.splice(s--,1);var u=o();void 0!==u&&(e=u)}}return e}a=a||0;for(var s=t.length;s>0&&t[s-1][2]>a;s--)t[s]=t[s-1];t[s]=[r,o,a]},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={55:0,111:0};n.O.j=e=>0===t[e];var e=(e,r)=>{var o,a,i=r[0],c=r[1],l=r[2],u=0;if(i.some((e=>0!==t[e]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(l)var s=l(n)}for(e&&e(r);u<i.length;u++)a=i[u],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(s)},r=self.webpackChunkhpu_custom_blocks=self.webpackChunkhpu_custom_blocks||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var o=n.O(void 0,[111],(()=>n(925)));o=n.O(o)})();