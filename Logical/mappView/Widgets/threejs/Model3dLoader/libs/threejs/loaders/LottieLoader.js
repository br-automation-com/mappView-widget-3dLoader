/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./FileLoader","./Loader","../textures/CanvasTexture","../constants"],(function(e,t,n,a,i,r){"use strict";var o=function(e){function a(){return e.apply(this,arguments)||this}t.inheritsLoose(a,e);var o=a.prototype;return o.setQuality=function(e){this._quality=e},o.load=function(e,t,a,o){var s=this._quality||1,d=new i.CanvasTexture;d.minFilter=r.NearestFilter;var l=new n.FileLoader(this.manager);return l.setPath(this.path),l.setWithCredentials(this.withCredentials),l.load(e,(function(e){var n=JSON.parse(e),a=document.createElement("div");a.style.width=n.w+"px",a.style.height=n.h+"px",document.body.appendChild(a);var i=bodymovin.loadAnimation({container:a,animType:"canvas",loop:!0,autoplay:!0,animationData:n,rendererSettings:{dpr:s}});d.animation=i,d.image=i.container,i.addEventListener("enterFrame",(function(){d.needsUpdate=!0})),a.style.display="none",void 0!==t&&t(d)}),a,o),d},a}(a.Loader);e.LottieLoader=o,Object.defineProperty(e,"__esModule",{value:!0})}));
