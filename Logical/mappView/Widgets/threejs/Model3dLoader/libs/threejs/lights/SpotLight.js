/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./Light","./SpotLightShadow","../core/Object3D"],(function(t,e,i,o,n){"use strict";var s=function(t){function i(e,i,s,a,r,h){var c;return void 0===s&&(s=0),void 0===a&&(a=Math.PI/3),void 0===r&&(r=0),void 0===h&&(h=1),(c=t.call(this,e,i)||this).isSpotLight=!0,c.type="SpotLight",c.position.copy(n.Object3D.DefaultUp),c.updateMatrix(),c.target=new n.Object3D,c.distance=s,c.angle=a,c.penumbra=r,c.decay=h,c.shadow=new o.SpotLightShadow,c}e.inheritsLoose(i,t);var s=i.prototype;return s.dispose=function(){this.shadow.dispose()},s.copy=function(e,i){return t.prototype.copy.call(this,e,i),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this},e.createClass(i,[{key:"power",get:function(){return this.intensity*Math.PI},set:function(t){this.intensity=t/Math.PI}}]),i}(i.Light);t.SpotLight=s,Object.defineProperty(t,"__esModule",{value:!0})}));
