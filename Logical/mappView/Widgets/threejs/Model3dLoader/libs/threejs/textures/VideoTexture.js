/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","../constants","./Texture"],(function(e,t,i,r){"use strict";var a=function(e){function r(r,a,n,s,o,u,l,c,d){var p;(p=e.call(this,r,a,n,s,o,u,l,c,d)||this).isVideoTexture=!0,p.minFilter=void 0!==u?u:i.LinearFilter,p.magFilter=void 0!==o?o:i.LinearFilter,p.generateMipmaps=!1;var h=t.assertThisInitialized(p);return"requestVideoFrameCallback"in r&&r.requestVideoFrameCallback((function e(){h.needsUpdate=!0,r.requestVideoFrameCallback(e)})),p}t.inheritsLoose(r,e);var a=r.prototype;return a.clone=function(){return new this.constructor(this.image).copy(this)},a.update=function(){var e=this.image;!1==="requestVideoFrameCallback"in e&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)},r}(r.Texture);e.VideoTexture=a,Object.defineProperty(e,"__esModule",{value:!0})}));
