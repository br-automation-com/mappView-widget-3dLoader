/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","../objects/LineSegments","../materials/LineBasicMaterial","../core/BufferAttribute","../core/BufferGeometry","../math/Color"],(function(e,t,r,o,i,s,a){"use strict";var n=function(e){function r(t){var r;void 0===t&&(t=1);var a=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=new s.BufferGeometry;n.setAttribute("position",new i.Float32BufferAttribute(a,3)),n.setAttribute("color",new i.Float32BufferAttribute([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3));var u=new o.LineBasicMaterial({vertexColors:!0,toneMapped:!1});return(r=e.call(this,n,u)||this).type="AxesHelper",r}t.inheritsLoose(r,e);var n=r.prototype;return n.setColors=function(e,t,r){var o=new a.Color,i=this.geometry.attributes.color.array;return o.set(e),o.toArray(i,0),o.toArray(i,3),o.set(t),o.toArray(i,6),o.toArray(i,9),o.set(r),o.toArray(i,12),o.toArray(i,15),this.geometry.attributes.color.needsUpdate=!0,this},n.dispose=function(){this.geometry.dispose(),this.material.dispose()},r}(r.LineSegments);e.AxesHelper=n,Object.defineProperty(e,"__esModule",{value:!0})}));
