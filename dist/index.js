"use strict";var f=function(u,r){return function(){try{return r||u((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var o=f(function(q,c){
var i=require('@stdlib/assert-is-number/dist').isPrimitive,n=require('@stdlib/stats-incr-pcorr/dist'),a=require('@stdlib/math-base-special-abs/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function g(u,r){var e,t;if(arguments.length){if(!i(u))throw new TypeError(s('1H549',u));if(!i(r))throw new TypeError(s('1H54A',r));e=n(u,r)}else e=n();return t=0,m;function m(l,v){return arguments.length===0?t===0?null:a(e()):(t+=1,a(e(l,v)))}}c.exports=g
});var b=o();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
