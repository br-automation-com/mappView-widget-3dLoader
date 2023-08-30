/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","../objects/Mesh","../materials/MeshBasicMaterial","../geometries/SphereGeometry"],(function(e,t,i,r,o){"use strict";var s=function(e){function i(t,i,s){var a,l=new o.SphereGeometry(i,4,2),h=new r.MeshBasicMaterial({wireframe:!0,fog:!1,toneMapped:!1});return(a=e.call(this,l,h)||this).light=t,a.light.updateMatrixWorld(),a.color=s,a.type="PointLightHelper",a.matrix=a.light.matrixWorld,a.matrixAutoUpdate=!1,a.update(),a}t.inheritsLoose(i,e);var s=i.prototype;return s.dispose=function(){this.geometry.dispose(),this.material.dispose()},s.update=function(){void 0!==this.color?this.material.color.set(this.color):this.material.color.copy(this.light.color)},i}(i.Mesh);e.PointLightHelper=s,Object.defineProperty(e,"__esModule",{value:!0})}));
