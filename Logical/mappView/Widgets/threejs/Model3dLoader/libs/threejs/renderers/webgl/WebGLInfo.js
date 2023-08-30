/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports"],(function(e){"use strict";e.WebGLInfo=function(e){var n={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:n,programs:null,autoReset:!0,reset:function(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0},update:function(e,s,r){switch(n.calls++,s){case 4:n.triangles+=r*(e/3);break;case 1:n.lines+=r*(e/2);break;case 3:n.lines+=r*(e-1);break;case 2:n.lines+=r*e;break;case 0:n.points+=r*e;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s)}}}},Object.defineProperty(e,"__esModule",{value:!0})}));
