/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","./LoadingManager"],(function(t,e){"use strict";var i=function(){function t(t){this.manager=void 0!==t?t:e.DefaultLoadingManager,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}var i=t.prototype;return i.load=function(){},i.loadAsync=function(t,e){var i=this;return new Promise((function(n,r){i.load(t,n,e,r)}))},i.parse=function(){},i.setCrossOrigin=function(t){return this.crossOrigin=t,this},i.setWithCredentials=function(t){return this.withCredentials=t,this},i.setPath=function(t){return this.path=t,this},i.setResourcePath=function(t){return this.resourcePath=t,this},i.setRequestHeader=function(t){return this.requestHeader=t,this},t}();t.Loader=i,Object.defineProperty(t,"__esModule",{value:!0})}));
