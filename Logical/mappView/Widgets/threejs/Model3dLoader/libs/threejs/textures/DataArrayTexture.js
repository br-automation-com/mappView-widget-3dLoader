/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./Texture","../constants"],(function(e,t,r,i){"use strict";var a=function(e){function r(t,r,a,n){var l;return void 0===t&&(t=null),void 0===r&&(r=1),void 0===a&&(a=1),void 0===n&&(n=1),(l=e.call(this,null)||this).isDataArrayTexture=!0,l.image={data:t,width:r,height:a,depth:n},l.magFilter=i.NearestFilter,l.minFilter=i.NearestFilter,l.wrapR=i.ClampToEdgeWrapping,l.generateMipmaps=!1,l.flipY=!1,l.unpackAlignment=1,l}return t.inheritsLoose(r,e),r}(r.Texture);e.DataArrayTexture=a,Object.defineProperty(e,"__esModule",{value:!0})}));
