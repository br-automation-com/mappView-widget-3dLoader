/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../../_virtual/_rollupPluginBabelHelpers","../../constants","../KeyframeTrack","../../math/interpolants/QuaternionLinearInterpolant"],(function(e,t,n,r,o){"use strict";var a=function(e){function n(){return e.apply(this,arguments)||this}return t.inheritsLoose(n,e),n.prototype.InterpolantFactoryMethodLinear=function(e){return new o.QuaternionLinearInterpolant(this.times,this.values,this.getValueSize(),e)},n}(r.KeyframeTrack);a.prototype.ValueTypeName="quaternion",a.prototype.DefaultInterpolation=n.InterpolateLinear,a.prototype.InterpolantFactoryMethodSmooth=void 0,e.QuaternionKeyframeTrack=a,Object.defineProperty(e,"__esModule",{value:!0})}));
