/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./PolyhedronGeometry"],(function(e,r,o){"use strict";var t=function(e){function o(r,o){var t;void 0===r&&(r=1),void 0===o&&(o=0);var n=(1+Math.sqrt(5))/2,i=1/n,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i];return(t=e.call(this,a,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],r,o)||this).type="DodecahedronGeometry",t.parameters={radius:r,detail:o},t}return r.inheritsLoose(o,e),o.fromJSON=function(e){return new o(e.radius,e.detail)},o}(o.PolyhedronGeometry);e.DodecahedronBufferGeometry=t,e.DodecahedronGeometry=t,Object.defineProperty(e,"__esModule",{value:!0})}));
