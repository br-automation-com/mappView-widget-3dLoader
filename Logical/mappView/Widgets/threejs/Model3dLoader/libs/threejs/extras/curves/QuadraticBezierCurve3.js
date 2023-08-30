/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../../_virtual/_rollupPluginBabelHelpers","../core/Curve","../core/Interpolations","../../math/Vector3"],(function(r,t,e,i,o){"use strict";var v=function(r){function e(t,e,i){var v;return void 0===t&&(t=new o.Vector3),void 0===e&&(e=new o.Vector3),void 0===i&&(i=new o.Vector3),(v=r.call(this)||this).isQuadraticBezierCurve3=!0,v.type="QuadraticBezierCurve3",v.v0=t,v.v1=e,v.v2=i,v}t.inheritsLoose(e,r);var v=e.prototype;return v.getPoint=function(r,t){void 0===t&&(t=new o.Vector3);var e=t,v=this.v0,a=this.v1,c=this.v2;return e.set(i.QuadraticBezier(r,v.x,a.x,c.x),i.QuadraticBezier(r,v.y,a.y,c.y),i.QuadraticBezier(r,v.z,a.z,c.z)),e},v.copy=function(t){return r.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this},v.toJSON=function(){var t=r.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},v.fromJSON=function(t){return r.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this},e}(e.Curve);r.QuadraticBezierCurve3=v,Object.defineProperty(r,"__esModule",{value:!0})}));