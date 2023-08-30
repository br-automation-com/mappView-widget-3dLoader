/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","../math/Color","../math/Vector3","./LightProbe"],(function(e,t,r,o,i){"use strict";var s=function(e){function i(t,i,s){var l;void 0===s&&(s=1),(l=e.call(this,void 0,s)||this).isHemisphereLightProbe=!0;var n=(new r.Color).set(t),a=(new r.Color).set(i),c=new o.Vector3(n.r,n.g,n.b),h=new o.Vector3(a.r,a.g,a.b),u=Math.sqrt(Math.PI),p=u*Math.sqrt(.75);return l.sh.coefficients[0].copy(c).add(h).multiplyScalar(u),l.sh.coefficients[1].copy(c).sub(h).multiplyScalar(p),l}return t.inheritsLoose(i,e),i}(i.LightProbe);e.HemisphereLightProbe=s,Object.defineProperty(e,"__esModule",{value:!0})}));
