/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./Light","./DirectionalLightShadow","../core/Object3D"],(function(t,e,i,o,r){"use strict";var n=function(t){function i(e,i){var n;return(n=t.call(this,e,i)||this).isDirectionalLight=!0,n.type="DirectionalLight",n.position.copy(r.Object3D.DefaultUp),n.updateMatrix(),n.target=new r.Object3D,n.shadow=new o.DirectionalLightShadow,n}e.inheritsLoose(i,t);var n=i.prototype;return n.dispose=function(){this.shadow.dispose()},n.copy=function(e){return t.prototype.copy.call(this,e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this},i}(i.Light);t.DirectionalLight=n,Object.defineProperty(t,"__esModule",{value:!0})}));
