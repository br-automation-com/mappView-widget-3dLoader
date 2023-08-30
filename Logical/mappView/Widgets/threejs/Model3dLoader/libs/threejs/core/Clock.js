/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports"],(function(t){"use strict";var e=function(){function t(t){void 0===t&&(t=!0),this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}var e=t.prototype;return e.start=function(){this.startTime=i(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0},e.stop=function(){this.getElapsedTime(),this.running=!1,this.autoStart=!1},e.getElapsedTime=function(){return this.getDelta(),this.elapsedTime},e.getDelta=function(){var t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){var e=i();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t},t}();function i(){return("undefined"==typeof performance?Date:performance).now()}t.Clock=e,Object.defineProperty(t,"__esModule",{value:!0})}));
