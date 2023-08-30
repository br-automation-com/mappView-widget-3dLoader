/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../../_virtual/_rollupPluginBabelHelpers","../core/Curve","../core/Interpolations","../../math/Vector2"],(function(r,t,e,i,o){"use strict";var v=function(r){function e(t,e,i){var v;return void 0===t&&(t=new o.Vector2),void 0===e&&(e=new o.Vector2),void 0===i&&(i=new o.Vector2),(v=r.call(this)||this).isQuadraticBezierCurve=!0,v.type="QuadraticBezierCurve",v.v0=t,v.v1=e,v.v2=i,v}t.inheritsLoose(e,r);var v=e.prototype;return v.getPoint=function(r,t){void 0===t&&(t=new o.Vector2);var e=t,v=this.v0,n=this.v1,a=this.v2;return e.set(i.QuadraticBezier(r,v.x,n.x,a.x),i.QuadraticBezier(r,v.y,n.y,a.y)),e},v.copy=function(t){return r.prototype.copy.call(this,t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this},v.toJSON=function(){var t=r.prototype.toJSON.call(this);return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t},v.fromJSON=function(t){return r.prototype.fromJSON.call(this,t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this},e}(e.Curve);r.QuadraticBezierCurve=v,Object.defineProperty(r,"__esModule",{value:!0})}));
