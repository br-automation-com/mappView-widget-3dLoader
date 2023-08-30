/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports"],(function(e){"use strict";e.WebGLObjects=function(e,n,t,r){var s=new WeakMap;function a(e){var n=e.target;n.removeEventListener("dispose",a),t.remove(n.instanceMatrix),null!==n.instanceColor&&t.remove(n.instanceColor)}return{update:function(e){var i=r.render.frame,o=e.geometry,u=n.get(e,o);return s.get(u)!==i&&(n.update(u),s.set(u,i)),e.isInstancedMesh&&(!1===e.hasEventListener("dispose",a)&&e.addEventListener("dispose",a),t.update(e.instanceMatrix,34962),null!==e.instanceColor&&t.update(e.instanceColor,34962)),u},dispose:function(){s=new WeakMap}}},Object.defineProperty(e,"__esModule",{value:!0})}));
