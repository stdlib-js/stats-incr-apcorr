"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=f(function(q,c){
var i=require('@stdlib/assert-is-number/dist').isPrimitive,n=require('@stdlib/stats-incr-pcorr/dist'),a=require('@stdlib/math-base-special-abs/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function g(e,r){var u,t;if(arguments.length){if(!i(e))throw new TypeError(s('1H549',e));if(!i(r))throw new TypeError(s('1H54A',r));u=n(e,r)}else u=n();return t=0,m;function m(l,v){return arguments.length===0?t===0?null:a(u()):(t+=1,a(u(l,v)))}}c.exports=g
});var b=o();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
