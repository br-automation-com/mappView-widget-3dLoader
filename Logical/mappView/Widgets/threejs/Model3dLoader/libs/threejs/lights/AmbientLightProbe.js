/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","../math/Color","./LightProbe"],(function(e,t,i,r){"use strict";var o=function(e){function r(t,r){var o;void 0===r&&(r=1),(o=e.call(this,void 0,r)||this).isAmbientLightProbe=!0;var n=(new i.Color).set(t);return o.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI)),o}return t.inheritsLoose(r,e),r}(r.LightProbe);e.AmbientLightProbe=o,Object.defineProperty(e,"__esModule",{value:!0})}));
