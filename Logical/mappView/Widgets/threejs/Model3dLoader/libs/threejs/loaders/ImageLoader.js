/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./Cache","./Loader","../utils"],(function(e,t,r,i,n){"use strict";var a=function(e){function i(t){return e.call(this,t)||this}return t.inheritsLoose(i,e),i.prototype.load=function(e,t,i,a){void 0!==this.path&&(e=this.path+e),e=this.manager.resolveURL(e);var o=this,s=r.Cache.get(e);if(void 0!==s)return o.manager.itemStart(e),setTimeout((function(){t&&t(s),o.manager.itemEnd(e)}),0),s;var d=n.createElementNS("img");function c(){m(),r.Cache.add(e,this),t&&t(this),o.manager.itemEnd(e)}function u(t){m(),a&&a(t),o.manager.itemError(e),o.manager.itemEnd(e)}function m(){d.removeEventListener("load",c,!1),d.removeEventListener("error",u,!1)}return d.addEventListener("load",c,!1),d.addEventListener("error",u,!1),"data:"!==e.slice(0,5)&&void 0!==this.crossOrigin&&(d.crossOrigin=this.crossOrigin),o.manager.itemStart(e),d.src=e,d},i}(i.Loader);e.ImageLoader=a,Object.defineProperty(e,"__esModule",{value:!0})}));
