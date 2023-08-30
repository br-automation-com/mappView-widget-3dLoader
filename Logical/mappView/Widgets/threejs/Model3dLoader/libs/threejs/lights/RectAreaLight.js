/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./Light"],(function(t,i,e){"use strict";var h=function(t){function e(i,e,h,r){var o;return void 0===h&&(h=10),void 0===r&&(r=10),(o=t.call(this,i,e)||this).isRectAreaLight=!0,o.type="RectAreaLight",o.width=h,o.height=r,o}i.inheritsLoose(e,t);var h=e.prototype;return h.copy=function(i){return t.prototype.copy.call(this,i),this.width=i.width,this.height=i.height,this},h.toJSON=function(i){var e=t.prototype.toJSON.call(this,i);return e.object.width=this.width,e.object.height=this.height,e},i.createClass(e,[{key:"power",get:function(){return this.intensity*this.width*this.height*Math.PI},set:function(t){this.intensity=t/(this.width*this.height*Math.PI)}}]),e}(e.Light);t.RectAreaLight=h,Object.defineProperty(t,"__esModule",{value:!0})}));
