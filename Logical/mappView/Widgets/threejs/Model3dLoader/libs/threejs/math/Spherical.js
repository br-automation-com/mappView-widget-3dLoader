/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","./MathUtils"],(function(t,i){"use strict";var s=function(){function t(t,i,s){return void 0===t&&(t=1),void 0===i&&(i=0),void 0===s&&(s=0),this.radius=t,this.phi=i,this.theta=s,this}var s=t.prototype;return s.set=function(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this},s.copy=function(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this},s.makeSafe=function(){var t=1e-6;return this.phi=Math.max(t,Math.min(Math.PI-t,this.phi)),this},s.setFromVector3=function(t){return this.setFromCartesianCoords(t.x,t.y,t.z)},s.setFromCartesianCoords=function(t,s,h){return this.radius=Math.sqrt(t*t+s*s+h*h),0===this.radius?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,h),this.phi=Math.acos(i.clamp(s/this.radius,-1,1))),this},s.clone=function(){return(new this.constructor).copy(this)},t}();t.Spherical=s,Object.defineProperty(t,"__esModule",{value:!0})}));
