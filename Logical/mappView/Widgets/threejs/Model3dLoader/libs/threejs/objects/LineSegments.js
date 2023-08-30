/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./Line","../math/Vector3","../core/BufferAttribute"],(function(e,t,n,i,r){"use strict";var o=new i.Vector3,s=new i.Vector3,u=function(e){function n(t,n){var i;return(i=e.call(this,t,n)||this).isLineSegments=!0,i.type="LineSegments",i}return t.inheritsLoose(n,e),n.prototype.computeLineDistances=function(){var e=this.geometry;if(null===e.index){for(var t=e.attributes.position,n=[],i=0,u=t.count;i<u;i+=2)o.fromBufferAttribute(t,i),s.fromBufferAttribute(t,i+1),n[i]=0===i?0:n[i-1],n[i+1]=n[i]+o.distanceTo(s);e.setAttribute("lineDistance",new r.Float32BufferAttribute(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this},n}(n.Line);e.LineSegments=u,Object.defineProperty(e,"__esModule",{value:!0})}));
