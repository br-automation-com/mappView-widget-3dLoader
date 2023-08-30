/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./PolyhedronGeometry"],(function(e,r,t){"use strict";var o=function(e){function t(r,t){var o;void 0===r&&(r=1),void 0===t&&(t=0);return(o=e.call(this,[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],r,t)||this).type="OctahedronGeometry",o.parameters={radius:r,detail:t},o}return r.inheritsLoose(t,e),t.fromJSON=function(e){return new t(e.radius,e.detail)},t}(t.PolyhedronGeometry);e.OctahedronBufferGeometry=o,e.OctahedronGeometry=o,Object.defineProperty(e,"__esModule",{value:!0})}));
