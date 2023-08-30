/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports"],(function(e){"use strict";e.WebGLBufferRenderer=function(e,r,n,t){var s,a=t.isWebGL2;this.setMode=function(e){s=e},this.render=function(r,t){e.drawArrays(s,r,t),n.update(t,s,1)},this.renderInstances=function(t,d,i){if(0!==i){var o,u;if(a)o=e,u="drawArraysInstanced";else if(u="drawArraysInstancedANGLE",null===(o=r.get("ANGLE_instanced_arrays")))return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");o[u](s,t,d,i),n.update(d,s,i)}}},Object.defineProperty(e,"__esModule",{value:!0})}));
