// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function e(){return r&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString,n=Object.prototype.hasOwnProperty;function o(r,e){return null!=r&&n.call(r,e)}var i="function"==typeof Symbol?Symbol:void 0,a="function"==typeof i?i.toStringTag:"",c=e()?function(r){var e,n,i;if(null==r)return t.call(r);n=r[a],e=o(r,a);try{r[a]=void 0}catch(e){return t.call(r)}return i=t.call(r),e?r[a]=n:delete r[a],i}:function(r){return t.call(r)},u=Array.isArray?Array.isArray:function(r){return"[object Array]"===c(r)};function l(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}var s=/./,f="function"==typeof Object.defineProperty?Object.defineProperty:null,p=Object.defineProperty;function g(r){return"number"==typeof r}function d(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function y(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+d(o):d(o)+r,n&&(r="-"+r)),r}var h=String.prototype.toLowerCase,b=String.prototype.toUpperCase;function w(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!g(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=y(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=y(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===b.call(r.specifier)?b.call(t):h.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function v(r){return"string"==typeof r}var m=Math.abs,j=String.prototype.toLowerCase,_=String.prototype.toUpperCase,E=String.prototype.replace,O=/e\+(\d)$/,S=/e-(\d)$/,x=/^(\d+)$/,k=/^(\d+)e/,T=/\.0$/,A=/\.0*e/,V=/(\..*[^0])0*e/;function F(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!g(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":m(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=E.call(t,V,"$1e"),t=E.call(t,A,"e"),t=E.call(t,T,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=E.call(t,O,"e+0$1"),t=E.call(t,S,"e-0$1"),r.alternate&&(t=E.call(t,x,"$1."),t=E.call(t,k,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===_.call(r.specifier)?_.call(t):j.call(t)}function P(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function C(r,e,t){var n=e-r.length;return n<0?r:r=t?r+P(n):P(n)+r}var I=String.fromCharCode,$=isNaN,R=Array.isArray;function B(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function W(r){var e,t,n,o,i,a,c,u,l;if(!R(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(v(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=B(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(o=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,$(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,$(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=w(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!$(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=$(i)?String(n.arg):I(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=F(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=y(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=C(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var G=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Z(r){var e,t,n,o;for(t=[],o=0,n=G.exec(r);n;)(e=r.slice(o,G.lastIndex-n[0].length)).length&&t.push(e),t.push(L(n)),o=G.lastIndex,n=G.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function U(r){return"string"==typeof r}function M(r){var e,t,n;if(!U(r))throw new TypeError(M("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Z(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return W.apply(null,t)}var N,X=Object.prototype,z=X.toString,D=X.__defineGetter__,q=X.__defineSetter__,H=X.__lookupGetter__,J=X.__lookupSetter__;N=function(){try{return f({},"x",{}),!0}catch(r){return!1}}()?p:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===z.call(r))throw new TypeError(M("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===z.call(t))throw new TypeError(M("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(H.call(r,e)||J.call(r,e)?(n=r.__proto__,r.__proto__=X,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&D&&D.call(r,e,t.get),a&&q&&q.call(r,e,t.set),r};var K=N;function Q(r,e,t){K(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Y(r){return"boolean"==typeof r}var rr=Boolean,er=Boolean.prototype.toString,tr=e();function nr(r){return"object"==typeof r&&(r instanceof rr||(tr?function(r){try{return er.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===c(r)))}function or(r){return Y(r)||nr(r)}function ir(){return new Function("return this;")()}Q(or,"isPrimitive",Y),Q(or,"isObject",nr);var ar="object"==typeof self?self:null,cr="object"==typeof window?window:null,ur="object"==typeof globalThis?globalThis:null,lr=function(r){if(arguments.length){if(!Y(r))throw new TypeError(M("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ir()}if(ur)return ur;if(ar)return ar;if(cr)return cr;throw new Error("unexpected error. Unable to resolve global object.")}(),sr=lr.document&&lr.document.childNodes,fr=Int8Array;function pr(){return/^\s*function\s*([^(]*)/i}var gr=/^\s*function\s*([^(]*)/i;function dr(r){return null!==r&&"object"==typeof r}function yr(r){var e,t,n,o;if(("Object"===(t=c(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=gr.exec(n.toString()))return e[1]}return dr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}Q(pr,"REGEXP",gr),Q(dr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(M("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!u(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(dr));var hr="function"==typeof s||"object"==typeof fr||"function"==typeof sr?function(r){return yr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?yr(r).toLowerCase():e};function br(r){return"function"===hr(r)}var wr,vr=Object,mr=Object.getPrototypeOf;wr=br(Object.getPrototypeOf)?mr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===c(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var jr=wr,_r=Object.prototype;function Er(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!u(r)}(r)&&(e=function(r){return null==r?null:(r=vr(r),jr(r))}(r),!e||!o(r,"constructor")&&o(e,"constructor")&&br(e.constructor)&&"[object Function]"===c(e.constructor)&&o(e,"isPrototypeOf")&&br(e.isPrototypeOf)&&(e===_r||function(r){var e;for(e in r)if(!o(r,e))return!1;return!0}(r)))}function Or(r,e){return Er(e)?o(e,"copy")&&(r.copy=e.copy,!Y(r.copy))?new TypeError(l("1Wj2o,GE","copy",r.copy)):null:new TypeError(l("1Wj2V,FD",e))}return function(r,e,t){var n,i,a,c,s;if(!u(r))throw new TypeError(l("1Wj51,Of",r));if(n={copy:!0},arguments.length>2&&(a=Or(n,t)))throw a;for(i=n.copy?new Array(r.length):r,s=0;s<r.length;s++)null!=(c=r[s])&&o(c,e)&&(i[s]=c[e]);return i}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).pluck=e();
//# sourceMappingURL=browser.js.map
