/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports"],(function(e){"use strict";var t=function(){function e(e,t){void 0===t&&(t=2048),this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}var t=e.prototype;return t.getFrequencyData=function(){return this.analyser.getByteFrequencyData(this.data),this.data},t.getAverageFrequency=function(){for(var e=0,t=this.getFrequencyData(),n=0;n<t.length;n++)e+=t[n];return e/t.length},e}();e.AudioAnalyser=t,Object.defineProperty(e,"__esModule",{value:!0})}));
