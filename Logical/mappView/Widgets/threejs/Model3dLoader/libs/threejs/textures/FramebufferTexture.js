/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./Texture","../constants"],(function(e,t,r,i){"use strict";var n=function(e){function r(t,r,n){var u;return(u=e.call(this,{width:t,height:r})||this).isFramebufferTexture=!0,u.format=n,u.magFilter=i.NearestFilter,u.minFilter=i.NearestFilter,u.generateMipmaps=!1,u.needsUpdate=!0,u}return t.inheritsLoose(r,e),r}(r.Texture);e.FramebufferTexture=n,Object.defineProperty(e,"__esModule",{value:!0})}));
