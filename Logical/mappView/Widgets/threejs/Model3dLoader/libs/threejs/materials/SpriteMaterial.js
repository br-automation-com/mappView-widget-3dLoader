/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./Material","../math/Color"],(function(t,e,a,i){"use strict";var o=function(t){function a(e){var a;return(a=t.call(this)||this).isSpriteMaterial=!0,a.type="SpriteMaterial",a.color=new i.Color(16777215),a.map=null,a.alphaMap=null,a.rotation=0,a.sizeAttenuation=!0,a.transparent=!0,a.fog=!0,a.setValues(e),a}return e.inheritsLoose(a,t),a.prototype.copy=function(e){return t.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this},a}(a.Material);t.SpriteMaterial=o,Object.defineProperty(t,"__esModule",{value:!0})}));
