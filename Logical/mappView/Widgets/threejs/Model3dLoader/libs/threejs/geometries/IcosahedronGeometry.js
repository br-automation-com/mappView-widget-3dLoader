/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./PolyhedronGeometry"],(function(e,r,o){"use strict";var t=function(e){function o(r,o){var t;void 0===r&&(r=1),void 0===o&&(o=0);var n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];return(t=e.call(this,i,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],r,o)||this).type="IcosahedronGeometry",t.parameters={radius:r,detail:o},t}return r.inheritsLoose(o,e),o.fromJSON=function(e){return new o(e.radius,e.detail)},o}(o.PolyhedronGeometry);e.IcosahedronBufferGeometry=t,e.IcosahedronGeometry=t,Object.defineProperty(e,"__esModule",{value:!0})}));
