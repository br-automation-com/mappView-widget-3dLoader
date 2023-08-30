/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../../constants","../WebGLCubeRenderTarget"],(function(e,n,t){"use strict";e.WebGLCubeMaps=function(e){var r=new WeakMap;function i(e,t){return t===n.EquirectangularReflectionMapping?e.mapping=n.CubeReflectionMapping:t===n.EquirectangularRefractionMapping&&(e.mapping=n.CubeRefractionMapping),e}function a(e){var n=e.target;n.removeEventListener("dispose",a);var t=r.get(n);void 0!==t&&(r.delete(n),t.dispose())}return{get:function(u){if(u&&u.isTexture&&!1===u.isRenderTargetTexture){var p=u.mapping;if(p===n.EquirectangularReflectionMapping||p===n.EquirectangularRefractionMapping){if(r.has(u))return i(r.get(u).texture,u.mapping);var g=u.image;if(g&&g.height>0){var o=new t.WebGLCubeRenderTarget(g.height/2);return o.fromEquirectangularTexture(e,u),r.set(u,o),u.addEventListener("dispose",a),i(o.texture,u.mapping)}return null}}return u},dispose:function(){r=new WeakMap}}},Object.defineProperty(e,"__esModule",{value:!0})}));
