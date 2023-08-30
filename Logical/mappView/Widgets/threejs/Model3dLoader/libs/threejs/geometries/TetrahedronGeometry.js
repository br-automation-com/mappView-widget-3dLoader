/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./PolyhedronGeometry"],(function(e,r,t){"use strict";var o=function(e){function t(r,t){var o;void 0===r&&(r=1),void 0===t&&(t=0);return(o=e.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],r,t)||this).type="TetrahedronGeometry",o.parameters={radius:r,detail:t},o}return r.inheritsLoose(t,e),t.fromJSON=function(e){return new t(e.radius,e.detail)},t}(t.PolyhedronGeometry);e.TetrahedronBufferGeometry=o,e.TetrahedronGeometry=o,Object.defineProperty(e,"__esModule",{value:!0})}));
