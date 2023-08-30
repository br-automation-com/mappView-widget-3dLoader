/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./BufferAttribute"],(function(t,e,r){"use strict";var i=function(t){function r(e,r,i,u){var n;return void 0===u&&(u=1),"number"==typeof i&&(u=i,i=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),(n=t.call(this,e,r,i)||this).isInstancedBufferAttribute=!0,n.meshPerAttribute=u,n}e.inheritsLoose(r,t);var i=r.prototype;return i.copy=function(e){return t.prototype.copy.call(this,e),this.meshPerAttribute=e.meshPerAttribute,this},i.toJSON=function(){var e=t.prototype.toJSON.call(this);return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e},r}(r.BufferAttribute);t.InstancedBufferAttribute=i,Object.defineProperty(t,"__esModule",{value:!0})}));
