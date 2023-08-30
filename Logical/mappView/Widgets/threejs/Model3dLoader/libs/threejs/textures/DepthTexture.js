/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./Texture","../constants"],(function(e,t,r,i){"use strict";var n=function(e){function r(t,r,n,o,a,l,p,h,s,u){var m;if((u=void 0!==u?u:i.DepthFormat)!==i.DepthFormat&&u!==i.DepthStencilFormat)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");return void 0===n&&u===i.DepthFormat&&(n=i.UnsignedIntType),void 0===n&&u===i.DepthStencilFormat&&(n=i.UnsignedInt248Type),(m=e.call(this,null,o,a,l,p,h,u,n,s)||this).isDepthTexture=!0,m.image={width:t,height:r},m.magFilter=void 0!==p?p:i.NearestFilter,m.minFilter=void 0!==h?h:i.NearestFilter,m.flipY=!1,m.generateMipmaps=!1,m}return t.inheritsLoose(r,e),r}(r.Texture);e.DepthTexture=n,Object.defineProperty(e,"__esModule",{value:!0})}));
