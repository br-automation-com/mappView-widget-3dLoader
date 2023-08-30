/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports"],(function(t){"use strict";var i=function(){function t(t,i,r){return void 0===t&&(t=1),void 0===i&&(i=0),void 0===r&&(r=0),this.radius=t,this.theta=i,this.y=r,this}var i=t.prototype;return i.set=function(t,i,r){return this.radius=t,this.theta=i,this.y=r,this},i.copy=function(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this},i.setFromVector3=function(t){return this.setFromCartesianCoords(t.x,t.y,t.z)},i.setFromCartesianCoords=function(t,i,r){return this.radius=Math.sqrt(t*t+r*r),this.theta=Math.atan2(t,r),this.y=i,this},i.clone=function(){return(new this.constructor).copy(this)},t}();t.Cylindrical=i,Object.defineProperty(t,"__esModule",{value:!0})}));
