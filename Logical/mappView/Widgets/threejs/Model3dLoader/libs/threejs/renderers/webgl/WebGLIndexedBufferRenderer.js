/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports"],(function(e){"use strict";e.WebGLIndexedBufferRenderer=function(e,n,t,r){var s,d,i,a=r.isWebGL2;this.setMode=function(e){s=e},this.setIndex=function(e){d=e.type,i=e.bytesPerElement},this.render=function(n,r){e.drawElements(s,r,d,n*i),t.update(r,s,1)},this.renderInstances=function(r,o,u){if(0!==u){var f,c;if(a)f=e,c="drawElementsInstanced";else if(c="drawElementsInstancedANGLE",null===(f=n.get("ANGLE_instanced_arrays")))return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");f[c](s,o,d,r*i,u),t.update(o,s,u)}}},Object.defineProperty(e,"__esModule",{value:!0})}));
