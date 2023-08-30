/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers"],(function(t,e){"use strict";var i=function(){function t(t,e,i,s,n){this.isGLBufferAttribute=!0,this.buffer=t,this.type=e,this.itemSize=i,this.elementSize=s,this.count=n,this.version=0}var i=t.prototype;return i.setBuffer=function(t){return this.buffer=t,this},i.setType=function(t,e){return this.type=t,this.elementSize=e,this},i.setItemSize=function(t){return this.itemSize=t,this},i.setCount=function(t){return this.count=t,this},e.createClass(t,[{key:"needsUpdate",set:function(t){!0===t&&this.version++}}]),t}();t.GLBufferAttribute=i,Object.defineProperty(t,"__esModule",{value:!0})}));
