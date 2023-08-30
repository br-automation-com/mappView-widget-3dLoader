/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../../_virtual/_rollupPluginBabelHelpers","../Interpolant"],(function(e,t,r){"use strict";var n=function(e){function r(t,r,n,i){return e.call(this,t,r,n,i)||this}return t.inheritsLoose(r,e),r.prototype.interpolate_=function(e,t,r,n){for(var i=this.resultBuffer,l=this.sampleValues,o=this.valueSize,u=e*o,s=u-o,a=(r-t)/(n-t),p=1-a,f=0;f!==o;++f)i[f]=l[s+f]*p+l[u+f]*a;return i},r}(r.Interpolant);e.LinearInterpolant=n,Object.defineProperty(e,"__esModule",{value:!0})}));
