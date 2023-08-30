/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports"],(function(e){"use strict";var i=function(){function e(){}var i=e.prototype;return i.addEventListener=function(e,i){void 0===this._listeners&&(this._listeners={});var t=this._listeners;void 0===t[e]&&(t[e]=[]),-1===t[e].indexOf(i)&&t[e].push(i)},i.hasEventListener=function(e,i){if(void 0===this._listeners)return!1;var t=this._listeners;return void 0!==t[e]&&-1!==t[e].indexOf(i)},i.removeEventListener=function(e,i){if(void 0!==this._listeners){var t=this._listeners[e];if(void 0!==t){var s=t.indexOf(i);-1!==s&&t.splice(s,1)}}},i.dispatchEvent=function(e){if(void 0!==this._listeners){var i=this._listeners[e.type];if(void 0!==i){e.target=this;for(var t=i.slice(0),s=0,n=t.length;s<n;s++)t[s].call(this,e);e.target=null}}},e}();e.EventDispatcher=i,Object.defineProperty(e,"__esModule",{value:!0})}));
