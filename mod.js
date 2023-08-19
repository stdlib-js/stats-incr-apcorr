// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty,e=Object.prototype,n=e.toString,o=e.__defineGetter__,u=e.__defineSetter__,a=e.__lookupGetter__,i=e.__lookupSetter__;var l=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,l){var c,f,p,b;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((f="value"in l)&&(a.call(t,r)||i.call(t,r)?(c=t.__proto__,t.__proto__=e,delete t[r],t[r]=l.value,t.__proto__=c):t[r]=l.value),p="get"in l,b="set"in l,f&&(p||b))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,r,l.get),b&&u&&u.call(t,r,l.set),t};function c(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function f(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return p&&"symbol"==typeof Symbol.toStringTag}var y=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;var v="function"==typeof Symbol?Symbol.toStringTag:"";var _=b()?function(t){var r,e,n,o,u;if(null==t)return y.call(t);e=t[v],u=v,r=null!=(o=t)&&m.call(o,u);try{t[v]=void 0}catch(r){return y.call(t)}return n=y.call(t),r?t[v]=e:delete t[v],n}:function(t){return y.call(t)},s=Number,g=s.prototype.toString;var h=b();function d(t){return"object"==typeof t&&(t instanceof s||(h?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Number]"===_(t)))}function w(t){return f(t)||d(t)}function j(t){return t!=t}c(w,"isPrimitive",f),c(w,"isObject",d);var S=Math.sqrt;function O(t,r){var e,n,o,u,a,i,l,c,p,b,y,m;if(e=0,n=0,y=0,m=0,arguments.length){if(!f(t))throw new TypeError("invalid argument. First argument must be a number primitive. Value: `"+t+"`.");if(!f(r))throw new TypeError("invalid argument. Second argument must be a number primitive. Value: `"+r+"`.");return l=t,c=r,_}return l=0,c=0,v;function v(t,r){var a;return 0===arguments.length?0===m?null:1===m?j(e)||j(n)?NaN:0:y/(m-1)/(p*b):(e+=(i=t-l)*(t-(l+=i/(m+=1))),n+=(u=r-(c+=(o=r-c)/m))*o,y+=i*u,m<2?j(e)||j(n)?NaN:0:(p=S(e/(a=m-1)),b=S(n/a),y/a/(p*b)))}function _(t,r){return 0===arguments.length?0===m?null:y/m/(p*b):(n+=(a=r-c)*a,y+=(i=t-l)*a,p=S((e+=i*i)/(m+=1)),b=S(n/m),y/m/(p*b))}}function T(t){return Math.abs(t)}function E(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}function N(t,r){var e,n;if(arguments.length){if(!f(t))throw new TypeError(E("1H549,Hq",t));if(!f(r))throw new TypeError(E("1H54A,Hr",r));e=O(t,r)}else e=O();return n=0,o;function o(t,r){return 0===arguments.length?0===n?null:T(e()):(n+=1,T(e(t,r)))}}export{N as default};
//# sourceMappingURL=mod.js.map