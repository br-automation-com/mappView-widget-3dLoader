/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./Material","../math/Color"],(function(t,e,i,o){"use strict";var a=function(t){function i(e){var i;return(i=t.call(this)||this).isPointsMaterial=!0,i.type="PointsMaterial",i.color=new o.Color(16777215),i.map=null,i.alphaMap=null,i.size=1,i.sizeAttenuation=!0,i.fog=!0,i.setValues(e),i}return e.inheritsLoose(i,t),i.prototype.copy=function(e){return t.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this},i}(i.Material);t.PointsMaterial=a,Object.defineProperty(t,"__esModule",{value:!0})}));
