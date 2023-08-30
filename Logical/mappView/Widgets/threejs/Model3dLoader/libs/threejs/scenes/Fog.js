/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../math/Color"],(function(t,o){"use strict";var e=function(){function t(t,e,r){void 0===e&&(e=1),void 0===r&&(r=1e3),this.isFog=!0,this.name="",this.color=new o.Color(t),this.near=e,this.far=r}var e=t.prototype;return e.clone=function(){return new t(this.color,this.near,this.far)},e.toJSON=function(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}},t}();t.Fog=e,Object.defineProperty(t,"__esModule",{value:!0})}));
