/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","../core/Object3D","../math/Color"],(function(t,o,i,e){"use strict";var n=function(t){function i(o,i){var n;return void 0===i&&(i=1),(n=t.call(this)||this).isLight=!0,n.type="Light",n.color=new e.Color(o),n.intensity=i,n}o.inheritsLoose(i,t);var n=i.prototype;return n.dispose=function(){},n.copy=function(o,i){return t.prototype.copy.call(this,o,i),this.color.copy(o.color),this.intensity=o.intensity,this},n.toJSON=function(o){var i=t.prototype.toJSON.call(this,o);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,void 0!==this.groundColor&&(i.object.groundColor=this.groundColor.getHex()),void 0!==this.distance&&(i.object.distance=this.distance),void 0!==this.angle&&(i.object.angle=this.angle),void 0!==this.decay&&(i.object.decay=this.decay),void 0!==this.penumbra&&(i.object.penumbra=this.penumbra),void 0!==this.shadow&&(i.object.shadow=this.shadow.toJSON()),i},i}(i.Object3D);t.Light=n,Object.defineProperty(t,"__esModule",{value:!0})}));
