/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./Material","../math/Color"],(function(i,e,t,o){"use strict";var n=function(i){function t(e){var t;return(t=i.call(this)||this).isLineBasicMaterial=!0,t.type="LineBasicMaterial",t.color=new o.Color(16777215),t.linewidth=1,t.linecap="round",t.linejoin="round",t.fog=!0,t.setValues(e),t}return e.inheritsLoose(t,i),t.prototype.copy=function(e){return i.prototype.copy.call(this,e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this},t}(t.Material);i.LineBasicMaterial=n,Object.defineProperty(i,"__esModule",{value:!0})}));
