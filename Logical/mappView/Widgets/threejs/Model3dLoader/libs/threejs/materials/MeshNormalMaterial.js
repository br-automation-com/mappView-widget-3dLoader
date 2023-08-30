/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","../constants","./Material","../math/Vector2"],(function(e,a,t,i,l){"use strict";var r=function(e){function i(a){var i;return(i=e.call(this)||this).isMeshNormalMaterial=!0,i.type="MeshNormalMaterial",i.bumpMap=null,i.bumpScale=1,i.normalMap=null,i.normalMapType=t.TangentSpaceNormalMap,i.normalScale=new l.Vector2(1,1),i.displacementMap=null,i.displacementScale=1,i.displacementBias=0,i.wireframe=!1,i.wireframeLinewidth=1,i.flatShading=!1,i.setValues(a),i}return a.inheritsLoose(i,e),i.prototype.copy=function(a){return e.prototype.copy.call(this,a),this.bumpMap=a.bumpMap,this.bumpScale=a.bumpScale,this.normalMap=a.normalMap,this.normalMapType=a.normalMapType,this.normalScale.copy(a.normalScale),this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.flatShading=a.flatShading,this},i}(i.Material);e.MeshNormalMaterial=r,Object.defineProperty(e,"__esModule",{value:!0})}));
