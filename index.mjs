// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.1-esm/index.mjs";function n(r,n){return e(n)?s(n,"copy")&&(r.copy=n.copy,!o(r.copy))?new TypeError(t("1Wj2o,GE","copy",r.copy)):null:new TypeError(t("1Wj2V,FD",n))}function i(e,o,i){var p,d,m,l,j;if(!r(e))throw new TypeError(t("1Wj51,Of",e));if(p={copy:!0},arguments.length>2&&(m=n(p,i)))throw m;for(d=p.copy?new Array(e.length):e,j=0;j<e.length;j++)null!=(l=e[j])&&s(l,o)&&(d[j]=l[o]);return d}export{i as default};
//# sourceMappingURL=index.mjs.map