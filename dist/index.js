"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var l=s(function(V,v){
function q(){return{copy:!0}}v.exports=q
});var p=s(function(k,f){
var d=require('@stdlib/assert-is-plain-object/dist'),g=require('@stdlib/assert-has-own-property/dist'),w=require('@stdlib/assert-is-boolean/dist').isPrimitive,c=require('@stdlib/error-tools-fmtprodmsg/dist');function h(e,r){return d(r)?g(r,"copy")&&(e.copy=r.copy,!w(e.copy))?new TypeError(c('1Wj2o',"copy",e.copy)):null:new TypeError(c('1Wj2V',r));}f.exports=h
});var m=s(function(B,y){
var b=require('@stdlib/assert-is-array/dist'),O=require('@stdlib/assert-has-own-property/dist'),x=require('@stdlib/error-tools-fmtprodmsg/dist'),E=l(),P=p();function T(e,r,u){var n,a,o,i,t;if(!b(e))throw new TypeError(x('1Wj51',e));if(n=E(),arguments.length>2&&(o=P(n,u),o))throw o;for(n.copy?a=new Array(e.length):a=e,t=0;t<e.length;t++)i=e[t],i!=null&&O(i,r)&&(a[t]=i[r]);return a}y.exports=T
});var j=m();module.exports=j;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
