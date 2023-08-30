/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./Material","../constants"],(function(e,a,i,t){"use strict";var s=function(e){function i(a){var i;return(i=e.call(this)||this).isMeshDepthMaterial=!0,i.type="MeshDepthMaterial",i.depthPacking=t.BasicDepthPacking,i.map=null,i.alphaMap=null,i.displacementMap=null,i.displacementScale=1,i.displacementBias=0,i.wireframe=!1,i.wireframeLinewidth=1,i.setValues(a),i}return a.inheritsLoose(i,e),i.prototype.copy=function(a){return e.prototype.copy.call(this,a),this.depthPacking=a.depthPacking,this.map=a.map,this.alphaMap=a.alphaMap,this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this},i}(i.Material);e.MeshDepthMaterial=s,Object.defineProperty(e,"__esModule",{value:!0})}));
