/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","../extras/core/Curve","../math/Vector3","../math/Vector4","./NURBSUtils"],(function(t,e,n,o,r,s){"use strict";var i=function(t){function n(e,n,o,s,i){var a;(a=t.call(this)||this).degree=e,a.knots=n,a.controlPoints=[],a.startKnot=s||0,a.endKnot=i||a.knots.length-1;for(var c=0;c<o.length;++c){var h=o[c];a.controlPoints[c]=new r.Vector4(h.x,h.y,h.z,h.w)}return a}e.inheritsLoose(n,t);var i=n.prototype;return i.getPoint=function(t,e){void 0===e&&(e=new o.Vector3);var n=e,r=this.knots[this.startKnot]+t*(this.knots[this.endKnot]-this.knots[this.startKnot]),i=s.calcBSplinePoint(this.degree,this.knots,this.controlPoints,r);return 1!==i.w&&i.divideScalar(i.w),n.set(i.x,i.y,i.z)},i.getTangent=function(t,e){void 0===e&&(e=new o.Vector3);var n=e,r=this.knots[0]+t*(this.knots[this.knots.length-1]-this.knots[0]),i=s.calcNURBSDerivatives(this.degree,this.knots,this.controlPoints,r,1);return n.copy(i[1]).normalize(),n},n}(n.Curve);t.NURBSCurve=i,Object.defineProperty(t,"__esModule",{value:!0})}));
