/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","../extras/core/Path","./LatheGeometry"],(function(e,t,r,a){"use strict";var i=function(e){function a(t,a,i,n){var s;void 0===t&&(t=1),void 0===a&&(a=1),void 0===i&&(i=4),void 0===n&&(n=8);var o=new r.Path;return o.absarc(0,-a/2,t,1.5*Math.PI,0),o.absarc(0,a/2,t,0,.5*Math.PI),(s=e.call(this,o.getPoints(i),n)||this).type="CapsuleGeometry",s.parameters={radius:t,height:a,capSegments:i,radialSegments:n},s}return t.inheritsLoose(a,e),a.fromJSON=function(e){return new a(e.radius,e.length,e.capSegments,e.radialSegments)},a}(a.LatheGeometry);e.CapsuleBufferGeometry=i,e.CapsuleGeometry=i,Object.defineProperty(e,"__esModule",{value:!0})}));
