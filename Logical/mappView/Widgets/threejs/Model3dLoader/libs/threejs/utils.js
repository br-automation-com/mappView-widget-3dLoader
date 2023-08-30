/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports"],(function(r){"use strict";var t={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:Uint8ClampedArray,Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array};r.arrayNeedsUint32=function(r){for(var t=r.length-1;t>=0;--t)if(r[t]>65535)return!0;return!1},r.createElementNS=function(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)},r.getTypedArray=function(r,n){return new t[r](n)},Object.defineProperty(r,"__esModule",{value:!0})}));
