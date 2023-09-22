"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var v=o(function(V,s){
function q(){return{copy:!0}}s.exports=q
});var f=o(function(k,c){
var d=require('@stdlib/assert-is-plain-object/dist'),g=require('@stdlib/assert-has-own-property/dist'),w=require('@stdlib/assert-is-boolean/dist').isPrimitive,l=require('@stdlib/error-tools-fmtprodmsg/dist');function h(r,e){return d(e)?g(e,"copy")&&(r.copy=e.copy,!w(r.copy))?new TypeError(l('1Wj2o',"copy",r.copy)):null:new TypeError(l('1Wj2V',e));}c.exports=h
});var y=o(function(B,p){
var b=require('@stdlib/assert-is-array/dist'),O=require('@stdlib/assert-has-own-property/dist'),x=require('@stdlib/error-tools-fmtprodmsg/dist'),E=v(),P=f();function T(r,e,m){var u,a,n,i,t;if(!b(r))throw new TypeError(x('1Wj51',r));if(u=E(),arguments.length>2&&(n=P(u,m),n))throw n;for(u.copy?a=new Array(r.length):a=r,t=0;t<r.length;t++)i=r[t],i!=null&&O(i,e)&&(a[t]=i[e]);return a}p.exports=T
});var j=y();module.exports=j;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
