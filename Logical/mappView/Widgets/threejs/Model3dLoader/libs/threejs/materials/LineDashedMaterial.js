/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./LineBasicMaterial"],(function(e,i,a){"use strict";var t=function(e){function a(i){var a;return(a=e.call(this)||this).isLineDashedMaterial=!0,a.type="LineDashedMaterial",a.scale=1,a.dashSize=3,a.gapSize=1,a.setValues(i),a}return i.inheritsLoose(a,e),a.prototype.copy=function(i){return e.prototype.copy.call(this,i),this.scale=i.scale,this.dashSize=i.dashSize,this.gapSize=i.gapSize,this},a}(a.LineBasicMaterial);e.LineDashedMaterial=t,Object.defineProperty(e,"__esModule",{value:!0})}));
