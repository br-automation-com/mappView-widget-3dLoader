/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports"],(function(e){"use strict";var t=function(){function e(){}return e.decodeText=function(e){if("undefined"!=typeof TextDecoder)return(new TextDecoder).decode(e);for(var t="",r=0,n=e.length;r<n;r++)t+=String.fromCharCode(e[r]);try{return decodeURIComponent(escape(t))}catch(e){return t}},e.extractUrlBase=function(e){var t=e.lastIndexOf("/");return-1===t?"./":e.slice(0,t+1)},e.resolveURL=function(e,t){return"string"!=typeof e||""===e?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)},e}();e.LoaderUtils=t,Object.defineProperty(e,"__esModule",{value:!0})}));
