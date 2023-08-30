/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./Light","../math/Color","../core/Object3D"],(function(e,t,o,r,i){"use strict";var n=function(e){function o(t,o,n){var p;return(p=e.call(this,t,n)||this).isHemisphereLight=!0,p.type="HemisphereLight",p.position.copy(i.Object3D.DefaultUp),p.updateMatrix(),p.groundColor=new r.Color(o),p}return t.inheritsLoose(o,e),o.prototype.copy=function(t,o){return e.prototype.copy.call(this,t,o),this.groundColor.copy(t.groundColor),this},o}(o.Light);e.HemisphereLight=n,Object.defineProperty(e,"__esModule",{value:!0})}));
