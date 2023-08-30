/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./Texture","../constants"],(function(e,t,i,n){"use strict";var r=function(e){function i(t,i,r,u,s,o,a,l,c,f){var p;return t=void 0!==t?t:[],i=void 0!==i?i:n.CubeReflectionMapping,(p=e.call(this,t,i,r,u,s,o,a,l,c,f)||this).isCubeTexture=!0,p.flipY=!1,p}return t.inheritsLoose(i,e),t.createClass(i,[{key:"images",get:function(){return this.image},set:function(e){this.image=e}}]),i}(i.Texture);e.CubeTexture=r,Object.defineProperty(e,"__esModule",{value:!0})}));
