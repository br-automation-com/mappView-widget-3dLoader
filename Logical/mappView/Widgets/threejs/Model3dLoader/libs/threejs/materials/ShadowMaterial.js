/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./Material","../math/Color"],(function(t,o,e,r){"use strict";var a=function(t){function e(o){var e;return(e=t.call(this)||this).isShadowMaterial=!0,e.type="ShadowMaterial",e.color=new r.Color(0),e.transparent=!0,e.fog=!0,e.setValues(o),e}return o.inheritsLoose(e,t),e.prototype.copy=function(o){return t.prototype.copy.call(this,o),this.color.copy(o.color),this.fog=o.fog,this},e}(e.Material);t.ShadowMaterial=a,Object.defineProperty(t,"__esModule",{value:!0})}));
