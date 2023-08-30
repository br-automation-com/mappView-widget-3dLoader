/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../../_virtual/_rollupPluginBabelHelpers","../Interpolant","../Quaternion"],(function(e,t,n,r){"use strict";var i=function(e){function n(t,n,r,i){return e.call(this,t,n,r,i)||this}return t.inheritsLoose(n,e),n.prototype.interpolate_=function(e,t,n,i){for(var l=this.resultBuffer,o=this.sampleValues,u=this.valueSize,a=(n-t)/(i-t),s=e*u,p=s+u;s!==p;s+=4)r.Quaternion.slerpFlat(l,0,o,s-u,o,s,a);return l},n}(n.Interpolant);e.QuaternionLinearInterpolant=i,Object.defineProperty(e,"__esModule",{value:!0})}));
