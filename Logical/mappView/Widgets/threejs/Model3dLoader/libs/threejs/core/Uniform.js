/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports"],(function(e){"use strict";var n=function(){function e(e){"string"==typeof e&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}return e.prototype.clone=function(){return new e(void 0===this.value.clone?this.value:this.value.clone())},e}();e.Uniform=n,Object.defineProperty(e,"__esModule",{value:!0})}));
