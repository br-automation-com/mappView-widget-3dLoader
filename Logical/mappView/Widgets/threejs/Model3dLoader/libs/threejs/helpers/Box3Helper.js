/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","../objects/LineSegments","../materials/LineBasicMaterial","../core/BufferAttribute","../core/BufferGeometry"],(function(e,t,r,i,o,n){"use strict";var a=function(e){function r(t,r){var a;void 0===r&&(r=16776960);var s=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),l=new n.BufferGeometry;return l.setIndex(new o.BufferAttribute(s,1)),l.setAttribute("position",new o.Float32BufferAttribute([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],3)),(a=e.call(this,l,new i.LineBasicMaterial({color:r,toneMapped:!1}))||this).box=t,a.type="Box3Helper",a.geometry.computeBoundingSphere(),a}return t.inheritsLoose(r,e),r.prototype.updateMatrixWorld=function(t){var r=this.box;r.isEmpty()||(r.getCenter(this.position),r.getSize(this.scale),this.scale.multiplyScalar(.5),e.prototype.updateMatrixWorld.call(this,t))},r}(r.LineSegments);e.Box3Helper=a,Object.defineProperty(e,"__esModule",{value:!0})}));
