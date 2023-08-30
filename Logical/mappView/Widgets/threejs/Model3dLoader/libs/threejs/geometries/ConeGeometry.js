/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./CylinderGeometry"],(function(e,t,r){"use strict";var n=function(e){function r(t,r,n,i,o,a,d){var h;return void 0===t&&(t=1),void 0===r&&(r=1),void 0===n&&(n=8),void 0===i&&(i=1),void 0===o&&(o=!1),void 0===a&&(a=0),void 0===d&&(d=2*Math.PI),(h=e.call(this,0,t,r,n,i,o,a,d)||this).type="ConeGeometry",h.parameters={radius:t,height:r,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:a,thetaLength:d},h}return t.inheritsLoose(r,e),r.fromJSON=function(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)},r}(r.CylinderGeometry);e.ConeBufferGeometry=n,e.ConeGeometry=n,Object.defineProperty(e,"__esModule",{value:!0})}));
