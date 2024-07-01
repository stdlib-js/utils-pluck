// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).pluck=e()}(this,(function(){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function e(){return r&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;function o(r,e){return null!=r&&n.call(r,e)}var i="function"==typeof Symbol?Symbol:void 0,a="function"==typeof i?i.toStringTag:"";var c=e()?function(r){var e,n,i;if(null==r)return t.call(r);n=r[a],e=o(r,a);try{r[a]=void 0}catch(e){return t.call(r)}return i=t.call(r),e?r[a]=n:delete r[a],i}:function(r){return t.call(r)};var u=Array.isArray?Array.isArray:function(r){return"[object Array]"===c(r)};function l(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}var s=/./,f="function"==typeof Object.defineProperty?Object.defineProperty:null;var p=Object.defineProperty;function g(r){return"number"==typeof r}function d(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function y(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+d(o):d(o)+r,n&&(r="-"+r)),r}var b=String.prototype.toLowerCase,h=String.prototype.toUpperCase;function v(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!g(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=y(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=y(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===h.call(r.specifier)?h.call(t):b.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var w=Math.abs,m=String.prototype.toLowerCase,j=String.prototype.toUpperCase,_=String.prototype.replace,E=/e\+(\d)$/,S=/e-(\d)$/,x=/^(\d+)$/,O=/^(\d+)e/,k=/\.0$/,T=/\.0*e/,A=/(\..*[^0])0*e/;function V(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!g(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":w(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=_.call(t,A,"$1e"),t=_.call(t,T,"e"),t=_.call(t,k,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=_.call(t,E,"e+0$1"),t=_.call(t,S,"e-0$1"),r.alternate&&(t=_.call(t,x,"$1."),t=_.call(t,O,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===j.call(r.specifier)?j.call(t):m.call(t)}function F(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var P=String.fromCharCode,C=isNaN,I=Array.isArray;function $(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function R(r){var e,t,n,o,i,a,c,u,l,s,f,p,g;if(!I(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(n=r[u],"string"==typeof n)a+=n;else{if(e=void 0!==n.precision,!(n=$(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(o=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,C(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,C(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=v(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!C(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=C(i)?String(n.arg):P(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=V(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=y(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,f=n.width,p=n.padRight,g=void 0,(g=f-s.length)<0?s:s=p?s+F(g):F(g)+s)),a+=n.arg||"",c+=1}return a}var B=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function W(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function L(r){var e,t,n,o;for(t=[],o=0,n=B.exec(r);n;)(e=r.slice(o,B.lastIndex-n[0].length)).length&&t.push(e),t.push(W(n)),o=B.lastIndex,n=B.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function G(r){var e,t;if("string"!=typeof r)throw new TypeError(G("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[L(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return R.apply(null,e)}var Z,U=Object.prototype,M=U.toString,N=U.__defineGetter__,X=U.__defineSetter__,z=U.__lookupGetter__,q=U.__lookupSetter__;Z=function(){try{return f({},"x",{}),!0}catch(r){return!1}}()?p:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===M.call(r))throw new TypeError(G("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===M.call(t))throw new TypeError(G("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(z.call(r,e)||q.call(r,e)?(n=r.__proto__,r.__proto__=U,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&N&&N.call(r,e,t.get),a&&X&&X.call(r,e,t.set),r};var D=Z;function H(r,e,t){D(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function J(r){return"boolean"==typeof r}var K=Boolean,Q=Boolean.prototype.toString;var Y=e();function rr(r){return"object"==typeof r&&(r instanceof K||(Y?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===c(r)))}function er(r){return J(r)||rr(r)}H(er,"isPrimitive",J),H(er,"isObject",rr);var tr="object"==typeof self?self:null,nr="object"==typeof window?window:null,or="object"==typeof global?global:null,ir="object"==typeof globalThis?globalThis:null;var ar=function(r){if(arguments.length){if(!J(r))throw new TypeError(G("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(ir)return ir;if(tr)return tr;if(nr)return nr;if(or)return or;throw new Error("unexpected error. Unable to resolve global object.")}(),cr=ar.document&&ar.document.childNodes,ur=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var sr=/^\s*function\s*([^(]*)/i;function fr(r){return null!==r&&"object"==typeof r}function pr(r){var e,t,n,o;if(("Object"===(t=c(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=sr.exec(n.toString()))return e[1]}return fr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}H(lr,"REGEXP",sr),H(fr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(G("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!u(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(fr));var gr="function"==typeof s||"object"==typeof ur||"function"==typeof cr?function(r){return pr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?pr(r).toLowerCase():e};function dr(r){return"function"===gr(r)}var yr,br=Object,hr=Object.getPrototypeOf;yr=dr(Object.getPrototypeOf)?hr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===c(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var vr=yr;var wr=Object.prototype;function mr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!u(r)}(r)&&(e=function(r){return null==r?null:(r=br(r),vr(r))}(r),!e||!o(r,"constructor")&&o(e,"constructor")&&dr(e.constructor)&&"[object Function]"===c(e.constructor)&&o(e,"isPrototypeOf")&&dr(e.isPrototypeOf)&&(e===wr||function(r){var e;for(e in r)if(!o(r,e))return!1;return!0}(r)))}return function(r,e,t){var n,i,a,c,s;if(!u(r))throw new TypeError(l("1Wj51",r));if(n={copy:!0},arguments.length>2&&(a=function(r,e){return mr(e)?o(e,"copy")&&(r.copy=e.copy,!J(r.copy))?new TypeError(l("1Wj2o","copy",r.copy)):null:new TypeError(l("1Wj2V",e))}(n,t)))throw a;for(i=n.copy?new Array(r.length):r,s=0;s<r.length;s++)null!=(c=r[s])&&o(c,e)&&(i[s]=c[e]);return i}}));
//# sourceMappingURL=index.js.map
