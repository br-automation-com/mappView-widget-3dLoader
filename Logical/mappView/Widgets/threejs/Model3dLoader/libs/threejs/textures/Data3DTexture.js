/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./Texture","../constants"],(function(e,t,i,r){"use strict";var a=function(e){function i(t,i,a,n){var l;return void 0===t&&(t=null),void 0===i&&(i=1),void 0===a&&(a=1),void 0===n&&(n=1),(l=e.call(this,null)||this).isData3DTexture=!0,l.image={data:t,width:i,height:a,depth:n},l.magFilter=r.NearestFilter,l.minFilter=r.NearestFilter,l.wrapR=r.ClampToEdgeWrapping,l.generateMipmaps=!1,l.flipY=!1,l.unpackAlignment=1,l}return t.inheritsLoose(i,e),i}(i.Texture);e.Data3DTexture=a,Object.defineProperty(e,"__esModule",{value:!0})}));
