// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-pcorr@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function n(n,i){var m,o;if(arguments.length){if(!r(n))throw new TypeError(e("1H549",n));if(!r(i))throw new TypeError(e("1H54A",i));m=t(n,i)}else m=t();return o=0,function(r,t){if(0===arguments.length)return 0===o?null:s(m());return o+=1,s(m(r,t))}}export{n as default};
//# sourceMappingURL=index.mjs.map
