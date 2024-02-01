// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).pluck=e()}(this,(function(){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function e(){return r&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;function o(r,e){return null!=r&&n.call(r,e)}var i="function"==typeof Symbol?Symbol:void 0,a="function"==typeof i?i.toStringTag:"";var c=e()?function(r){var e,n,i;if(null==r)return t.call(r);n=r[a],e=o(r,a);try{r[a]=void 0}catch(e){return t.call(r)}return i=t.call(r),e?r[a]=n:delete r[a],i}:function(r){return t.call(r)};var u=Array.isArray?Array.isArray:function(r){return"[object Array]"===c(r)};function l(r){return"number"==typeof r}function s(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function f(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+s(o):s(o)+r,n&&(r="-"+r)),r}var p=String.prototype.toLowerCase,g=String.prototype.toUpperCase;function d(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!l(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=f(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=f(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===g.call(r.specifier)?g.call(t):p.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function y(r){return"string"==typeof r}var b=Math.abs,h=String.prototype.toLowerCase,v=String.prototype.toUpperCase,w=String.prototype.replace,m=/e\+(\d)$/,j=/e-(\d)$/,_=/^(\d+)$/,E=/^(\d+)e/,O=/\.0$/,S=/\.0*e/,x=/(\..*[^0])0*e/;function k(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!l(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":b(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=w.call(t,x,"$1e"),t=w.call(t,S,"e"),t=w.call(t,O,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=w.call(t,m,"e+0$1"),t=w.call(t,j,"e-0$1"),r.alternate&&(t=w.call(t,_,"$1."),t=w.call(t,E,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===v.call(r.specifier)?v.call(t):h.call(t)}function T(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var n=e-r.length;return n<0?r:r=t?r+T(n):T(n)+r}var V=String.fromCharCode,F=isNaN,P=Array.isArray;function $(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function C(r){var e,t,n,o,i,a,c,u,l;if(!P(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(y(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=$(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(o=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,F(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,F(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=d(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!F(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=F(i)?String(n.arg):V(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=k(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=f(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function B(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function R(r){var e,t,n,o;for(t=[],o=0,n=I.exec(r);n;)(e=r.slice(o,I.lastIndex-n[0].length)).length&&t.push(e),t.push(B(n)),o=I.lastIndex,n=I.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function L(r){return"string"==typeof r}function G(r){var e,t,n;if(!L(r))throw new TypeError(G("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=R(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return C.apply(null,t)}var Z=/./,W="function"==typeof Object.defineProperty?Object.defineProperty:null;var M,N=Object.defineProperty,U=Object.prototype,X=U.toString,z=U.__defineGetter__,q=U.__defineSetter__,D=U.__lookupGetter__,H=U.__lookupSetter__;M=function(){try{return W({},"x",{}),!0}catch(r){return!1}}()?N:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===X.call(r))throw new TypeError(G("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===X.call(t))throw new TypeError(G("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(D.call(r,e)||H.call(r,e)?(n=r.__proto__,r.__proto__=U,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&z&&z.call(r,e,t.get),a&&q&&q.call(r,e,t.set),r};var J=M;function K(r,e,t){J(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Q(r){return"boolean"==typeof r}var Y=Boolean,rr=Boolean.prototype.toString;var er=e();function tr(r){return"object"==typeof r&&(r instanceof Y||(er?function(r){try{return rr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===c(r)))}function nr(r){return Q(r)||tr(r)}function or(){return new Function("return this;")()}K(nr,"isPrimitive",Q),K(nr,"isObject",tr);var ir="object"==typeof self?self:null,ar="object"==typeof window?window:null,cr="object"==typeof global?global:null,ur="object"==typeof globalThis?globalThis:null;var lr=function(r){if(arguments.length){if(!Q(r))throw new TypeError(G("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return or()}if(ur)return ur;if(ir)return ir;if(ar)return ar;if(cr)return cr;throw new Error("unexpected error. Unable to resolve global object.")}(),sr=lr.document&&lr.document.childNodes,fr=Int8Array;function pr(){return/^\s*function\s*([^(]*)/i}var gr=/^\s*function\s*([^(]*)/i;function dr(r){return null!==r&&"object"==typeof r}function yr(r){var e,t,n,o;if(("Object"===(t=c(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=gr.exec(n.toString()))return e[1]}return dr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}K(pr,"REGEXP",gr),K(dr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(G("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!u(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(dr));var br="function"==typeof Z||"object"==typeof fr||"function"==typeof sr?function(r){return yr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?yr(r).toLowerCase():e};function hr(r){return"function"===br(r)}var vr,wr=Object,mr=Object.getPrototypeOf;vr=hr(Object.getPrototypeOf)?mr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===c(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var jr=vr;var _r=Object.prototype;function Er(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!u(r)}(r)&&(e=function(r){return null==r?null:(r=wr(r),jr(r))}(r),!e||!o(r,"constructor")&&o(e,"constructor")&&hr(e.constructor)&&"[object Function]"===c(e.constructor)&&o(e,"isPrototypeOf")&&hr(e.isPrototypeOf)&&(e===_r||function(r){var e;for(e in r)if(!o(r,e))return!1;return!0}(r)))}function Or(r,e){return Er(e)?o(e,"copy")&&(r.copy=e.copy,!Q(r.copy))?new TypeError(G("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy)):null:new TypeError(G("invalid argument. Options argument must be an object. Value: `%s`.",e))}return function(r,e,t){var n,i,a,c,l;if(!u(r))throw new TypeError(G("invalid argument. First argument must be an array. Value: `%s`.",r));if(n={copy:!0},arguments.length>2&&(a=Or(n,t)))throw a;for(i=n.copy?new Array(r.length):r,l=0;l<r.length;l++)null!=(c=r[l])&&o(c,e)&&(i[l]=c[e]);return i}}));
//# sourceMappingURL=index.js.map
