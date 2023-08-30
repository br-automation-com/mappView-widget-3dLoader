/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./ImageLoader","../textures/CubeTexture","./Loader"],(function(e,r,t,n,o){"use strict";var i=function(e){function o(r){return e.call(this,r)||this}return r.inheritsLoose(o,e),o.prototype.load=function(e,r,o,i){var a=new n.CubeTexture,u=new t.ImageLoader(this.manager);u.setCrossOrigin(this.crossOrigin),u.setPath(this.path);var s=0;function d(t){u.load(e[t],(function(e){a.images[t]=e,6===++s&&(a.needsUpdate=!0,r&&r(a))}),void 0,i)}for(var l=0;l<e.length;++l)d(l);return a},o}(o.Loader);e.CubeTextureLoader=i,Object.defineProperty(e,"__esModule",{value:!0})}));
