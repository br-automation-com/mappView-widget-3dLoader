/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports"],(function(n){"use strict";n.WebGLAnimation=function(){var n=null,t=!1,e=null,i=null;function o(t,u){e(t,u),i=n.requestAnimationFrame(o)}return{start:function(){!0!==t&&null!==e&&(i=n.requestAnimationFrame(o),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(n){e=n},setContext:function(t){n=t}}},Object.defineProperty(n,"__esModule",{value:!0})}));
