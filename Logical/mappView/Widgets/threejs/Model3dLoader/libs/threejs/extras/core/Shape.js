/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../../_virtual/_rollupPluginBabelHelpers","./Path","../../math/MathUtils"],(function(t,e,o,s){"use strict";var h=function(t){function h(e){var o;return(o=t.call(this,e)||this).uuid=s.generateUUID(),o.type="Shape",o.holes=[],o}e.inheritsLoose(h,t);var r=h.prototype;return r.getPointsHoles=function(t){for(var e=[],o=0,s=this.holes.length;o<s;o++)e[o]=this.holes[o].getPoints(t);return e},r.extractPoints=function(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}},r.copy=function(e){t.prototype.copy.call(this,e),this.holes=[];for(var o=0,s=e.holes.length;o<s;o++){var h=e.holes[o];this.holes.push(h.clone())}return this},r.toJSON=function(){var e=t.prototype.toJSON.call(this);e.uuid=this.uuid,e.holes=[];for(var o=0,s=this.holes.length;o<s;o++){var h=this.holes[o];e.holes.push(h.toJSON())}return e},r.fromJSON=function(e){t.prototype.fromJSON.call(this,e),this.uuid=e.uuid,this.holes=[];for(var s=0,h=e.holes.length;s<h;s++){var r=e.holes[s];this.holes.push((new o.Path).fromJSON(r))}return this},h}(o.Path);t.Shape=h,Object.defineProperty(t,"__esModule",{value:!0})}));
