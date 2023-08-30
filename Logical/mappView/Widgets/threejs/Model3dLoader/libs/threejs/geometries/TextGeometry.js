/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./ExtrudeGeometry"],(function(e,i,t){"use strict";var r=function(e){function t(t,r){var l;void 0===r&&(r={});var s=r.font;if(void 0===s)l=e.call(this)||this;else{var o=s.generateShapes(t,r.size);r.depth=void 0!==r.height?r.height:50,void 0===r.bevelThickness&&(r.bevelThickness=10),void 0===r.bevelSize&&(r.bevelSize=8),void 0===r.bevelEnabled&&(r.bevelEnabled=!1),l=e.call(this,o,r)||this}return l.type="TextGeometry",i.assertThisInitialized(l)}return i.inheritsLoose(t,e),t}(t.ExtrudeGeometry);e.TextGeometry=r,Object.defineProperty(e,"__esModule",{value:!0})}));
