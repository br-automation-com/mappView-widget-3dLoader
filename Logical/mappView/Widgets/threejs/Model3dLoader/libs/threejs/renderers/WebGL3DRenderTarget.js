/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./WebGLRenderTarget","../textures/Data3DTexture"],(function(e,t,r,n){"use strict";var u=function(e){function r(t,r,u){var a;return(a=e.call(this,t,r)||this).isWebGL3DRenderTarget=!0,a.depth=u,a.texture=new n.Data3DTexture(null,t,r,u),a.texture.isRenderTargetTexture=!0,a}return t.inheritsLoose(r,e),r}(r.WebGLRenderTarget);e.WebGL3DRenderTarget=u,Object.defineProperty(e,"__esModule",{value:!0})}));
