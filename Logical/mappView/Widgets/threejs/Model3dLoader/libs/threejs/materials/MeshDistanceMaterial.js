/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./Material","../math/Vector3"],(function(e,a,t,i){"use strict";var s=function(e){function t(a){var t;return(t=e.call(this)||this).isMeshDistanceMaterial=!0,t.type="MeshDistanceMaterial",t.referencePosition=new i.Vector3,t.nearDistance=1,t.farDistance=1e3,t.map=null,t.alphaMap=null,t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.setValues(a),t}return a.inheritsLoose(t,e),t.prototype.copy=function(a){return e.prototype.copy.call(this,a),this.referencePosition.copy(a.referencePosition),this.nearDistance=a.nearDistance,this.farDistance=a.farDistance,this.map=a.map,this.alphaMap=a.alphaMap,this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this},t}(t.Material);e.MeshDistanceMaterial=s,Object.defineProperty(e,"__esModule",{value:!0})}));
