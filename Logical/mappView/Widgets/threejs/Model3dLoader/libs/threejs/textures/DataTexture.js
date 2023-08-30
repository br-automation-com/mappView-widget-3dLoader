/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./Texture","../constants"],(function(e,t,i,r){"use strict";var n=function(e){function i(t,i,n,a,l,u,o,s,d,v,c,p){var f;return void 0===t&&(t=null),void 0===i&&(i=1),void 0===n&&(n=1),void 0===d&&(d=r.NearestFilter),void 0===v&&(v=r.NearestFilter),(f=e.call(this,null,u,o,s,d,v,a,l,c,p)||this).isDataTexture=!0,f.image={data:t,width:i,height:n},f.generateMipmaps=!1,f.flipY=!1,f.unpackAlignment=1,f}return t.inheritsLoose(i,e),i}(i.Texture);e.DataTexture=n,Object.defineProperty(e,"__esModule",{value:!0})}));
