/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./ImageLoader","../textures/Texture","./Loader"],(function(e,t,r,i,n){"use strict";var o=function(e){function n(t){return e.call(this,t)||this}return t.inheritsLoose(n,e),n.prototype.load=function(e,t,n,o){var a=new i.Texture,s=new r.ImageLoader(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,(function(e){a.image=e,a.needsUpdate=!0,void 0!==t&&t(a)}),n,o),a},n}(n.Loader);e.TextureLoader=o,Object.defineProperty(e,"__esModule",{value:!0})}));
