/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./InterleavedBuffer"],(function(e,t,r){"use strict";var n=function(e){function r(t,r,n){var i;return void 0===n&&(n=1),(i=e.call(this,t,r)||this).isInstancedInterleavedBuffer=!0,i.meshPerAttribute=n,i}t.inheritsLoose(r,e);var n=r.prototype;return n.copy=function(t){return e.prototype.copy.call(this,t),this.meshPerAttribute=t.meshPerAttribute,this},n.clone=function(t){var r=e.prototype.clone.call(this,t);return r.meshPerAttribute=this.meshPerAttribute,r},n.toJSON=function(t){var r=e.prototype.toJSON.call(this,t);return r.isInstancedInterleavedBuffer=!0,r.meshPerAttribute=this.meshPerAttribute,r},r}(r.InterleavedBuffer);e.InstancedInterleavedBuffer=n,Object.defineProperty(e,"__esModule",{value:!0})}));
