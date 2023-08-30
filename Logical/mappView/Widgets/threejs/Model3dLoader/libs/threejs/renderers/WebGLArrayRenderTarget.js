/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./WebGLRenderTarget","../textures/DataArrayTexture"],(function(e,r,t,a){"use strict";var n=function(e){function t(r,t,n){var u;return(u=e.call(this,r,t)||this).isWebGLArrayRenderTarget=!0,u.depth=n,u.texture=new a.DataArrayTexture(null,r,t,n),u.texture.isRenderTargetTexture=!0,u}return r.inheritsLoose(t,e),t}(t.WebGLRenderTarget);e.WebGLArrayRenderTarget=n,Object.defineProperty(e,"__esModule",{value:!0})}));
