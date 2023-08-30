/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports"],(function(t){"use strict";var n=function(){function t(){this.mask=1}var n=t.prototype;return n.set=function(t){this.mask=(1<<t|0)>>>0},n.enable=function(t){this.mask|=1<<t|0},n.enableAll=function(){this.mask=-1},n.toggle=function(t){this.mask^=1<<t|0},n.disable=function(t){this.mask&=~(1<<t|0)},n.disableAll=function(){this.mask=0},n.test=function(t){return 0!=(this.mask&t.mask)},n.isEnabled=function(t){return 0!=(this.mask&(1<<t|0))},t}();t.Layers=n,Object.defineProperty(t,"__esModule",{value:!0})}));
