/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports"],(function(r){"use strict";function e(r){var e={};for(var i in r)for(var n in e[i]={},r[i]){var o=r[i][n];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?e[i][n]=o.clone():Array.isArray(o)?e[i][n]=o.slice():e[i][n]=o}return e}function i(r){for(var i={},n=0;n<r.length;n++){var o=e(r[n]);for(var t in o)i[t]=o[t]}return i}var n={clone:e,merge:i};r.UniformsUtils=n,r.cloneUniforms=e,r.mergeUniforms=i,Object.defineProperty(r,"__esModule",{value:!0})}));
