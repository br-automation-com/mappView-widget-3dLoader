/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports"],(function(e){"use strict";e.Cache={enabled:!1,files:{},add:function(e,i){!1!==this.enabled&&(this.files[e]=i)},get:function(e){if(!1!==this.enabled)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},Object.defineProperty(e,"__esModule",{value:!0})}));
