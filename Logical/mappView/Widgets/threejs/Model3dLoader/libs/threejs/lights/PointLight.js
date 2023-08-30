/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./Light","./PointLightShadow"],(function(t,i,e,n){"use strict";var o=function(t){function e(i,e,o,s){var h;return void 0===o&&(o=0),void 0===s&&(s=1),(h=t.call(this,i,e)||this).isPointLight=!0,h.type="PointLight",h.distance=o,h.decay=s,h.shadow=new n.PointLightShadow,h}i.inheritsLoose(e,t);var o=e.prototype;return o.dispose=function(){this.shadow.dispose()},o.copy=function(i,e){return t.prototype.copy.call(this,i,e),this.distance=i.distance,this.decay=i.decay,this.shadow=i.shadow.clone(),this},i.createClass(e,[{key:"power",get:function(){return 4*this.intensity*Math.PI},set:function(t){this.intensity=t/(4*Math.PI)}}]),e}(e.Light);t.PointLight=o,Object.defineProperty(t,"__esModule",{value:!0})}));
