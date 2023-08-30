/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../../_virtual/_rollupPluginBabelHelpers","../../math/Vector3","../core/Curve"],(function(t,r,e,o){"use strict";var i=function(t){function o(r,o){var i;return void 0===r&&(r=new e.Vector3),void 0===o&&(o=new e.Vector3),(i=t.call(this)||this).isLineCurve3=!0,i.type="LineCurve3",i.v1=r,i.v2=o,i}r.inheritsLoose(o,t);var i=o.prototype;return i.getPoint=function(t,r){void 0===r&&(r=new e.Vector3);var o=r;return 1===t?o.copy(this.v2):(o.copy(this.v2).sub(this.v1),o.multiplyScalar(t).add(this.v1)),o},i.getPointAt=function(t,r){return this.getPoint(t,r)},i.copy=function(r){return t.prototype.copy.call(this,r),this.v1.copy(r.v1),this.v2.copy(r.v2),this},i.toJSON=function(){var r=t.prototype.toJSON.call(this);return r.v1=this.v1.toArray(),r.v2=this.v2.toArray(),r},i.fromJSON=function(r){return t.prototype.fromJSON.call(this,r),this.v1.fromArray(r.v1),this.v2.fromArray(r.v2),this},o}(o.Curve);t.LineCurve3=i,Object.defineProperty(t,"__esModule",{value:!0})}));
