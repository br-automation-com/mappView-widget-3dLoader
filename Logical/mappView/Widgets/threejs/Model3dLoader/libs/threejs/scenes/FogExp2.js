/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../math/Color"],(function(t,o){"use strict";var e=function(){function t(t,e){void 0===e&&(e=25e-5),this.isFogExp2=!0,this.name="",this.color=new o.Color(t),this.density=e}var e=t.prototype;return e.clone=function(){return new t(this.color,this.density)},e.toJSON=function(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}},t}();t.FogExp2=e,Object.defineProperty(t,"__esModule",{value:!0})}));
