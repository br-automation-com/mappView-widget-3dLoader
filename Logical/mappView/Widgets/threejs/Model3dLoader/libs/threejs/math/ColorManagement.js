/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../constants"],(function(o,r){"use strict";var e,n,t;function a(o){return o<.04045?.0773993808*o:Math.pow(.9478672986*o+.0521327014,2.4)}function i(o){return o<.0031308?12.92*o:1.055*Math.pow(o,.41666)-.055}var c=((t={})[r.SRGBColorSpace]=((e={})[r.LinearSRGBColorSpace]=a,e),t[r.LinearSRGBColorSpace]=((n={})[r.SRGBColorSpace]=i,n),t),l={legacyMode:!0,get workingColorSpace(){return r.LinearSRGBColorSpace},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,r,e){if(this.legacyMode||r===e||!r||!e)return o;if(c[r]&&void 0!==c[r][e]){var n=c[r][e];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,r){return this.convert(o,this.workingColorSpace,r)},toWorkingColorSpace:function(o,r){return this.convert(o,r,this.workingColorSpace)}};o.ColorManagement=l,o.LinearToSRGB=i,o.SRGBToLinear=a,Object.defineProperty(o,"__esModule",{value:!0})}));
