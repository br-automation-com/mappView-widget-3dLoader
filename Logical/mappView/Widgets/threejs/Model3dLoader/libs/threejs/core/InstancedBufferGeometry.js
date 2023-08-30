/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./BufferGeometry"],(function(t,e,n){"use strict";var r=function(t){function n(){var e;return(e=t.call(this)||this).isInstancedBufferGeometry=!0,e.type="InstancedBufferGeometry",e.instanceCount=1/0,e}e.inheritsLoose(n,t);var r=n.prototype;return r.copy=function(e){return t.prototype.copy.call(this,e),this.instanceCount=e.instanceCount,this},r.clone=function(){return(new this.constructor).copy(this)},r.toJSON=function(){var e=t.prototype.toJSON.call(this,this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e},n}(n.BufferGeometry);t.InstancedBufferGeometry=r,Object.defineProperty(t,"__esModule",{value:!0})}));
