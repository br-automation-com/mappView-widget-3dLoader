/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./LightShadow","../math/MathUtils","../cameras/PerspectiveCamera"],(function(t,e,a,i,r){"use strict";var o=function(t){function a(){var e;return(e=t.call(this,new r.PerspectiveCamera(50,1,.5,500))||this).isSpotLightShadow=!0,e.focus=1,e}e.inheritsLoose(a,t);var o=a.prototype;return o.updateMatrices=function(e){var a=this.camera,r=2*i.RAD2DEG*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height,s=e.distance||a.far;r===a.fov&&o===a.aspect&&s===a.far||(a.fov=r,a.aspect=o,a.far=s,a.updateProjectionMatrix()),t.prototype.updateMatrices.call(this,e)},o.copy=function(e){return t.prototype.copy.call(this,e),this.focus=e.focus,this},a}(a.LightShadow);t.SpotLightShadow=o,Object.defineProperty(t,"__esModule",{value:!0})}));
