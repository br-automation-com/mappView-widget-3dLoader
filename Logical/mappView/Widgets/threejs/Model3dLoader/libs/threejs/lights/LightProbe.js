/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","../math/SphericalHarmonics3","./Light"],(function(t,i,r,o){"use strict";var e=function(t){function o(i,o){var e;return void 0===i&&(i=new r.SphericalHarmonics3),void 0===o&&(o=1),(e=t.call(this,void 0,o)||this).isLightProbe=!0,e.sh=i,e}i.inheritsLoose(o,t);var e=o.prototype;return e.copy=function(i){return t.prototype.copy.call(this,i),this.sh.copy(i.sh),this},e.fromJSON=function(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this},e.toJSON=function(i){var r=t.prototype.toJSON.call(this,i);return r.object.sh=this.sh.toArray(),r},o}(o.Light);t.LightProbe=e,Object.defineProperty(t,"__esModule",{value:!0})}));
