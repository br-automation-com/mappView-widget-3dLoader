/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","../objects/LineSegments","../materials/LineBasicMaterial","../core/BufferAttribute","../core/BufferGeometry","../math/Color"],(function(e,r,t,o,i,a,n){"use strict";var u=function(e){function t(r,t,u,l){var s;void 0===r&&(r=10),void 0===t&&(t=10),void 0===u&&(u=4473924),void 0===l&&(l=8947848),u=new n.Color(u),l=new n.Color(l);for(var f=t/2,v=r/t,c=r/2,p=[],d=[],A=0,b=0,y=-c;A<=t;A++,y+=v){p.push(-c,0,y,c,0,y),p.push(y,0,-c,y,0,c);var B=A===f?u:l;B.toArray(d,b),b+=3,B.toArray(d,b),b+=3,B.toArray(d,b),b+=3,B.toArray(d,b),b+=3}var h=new a.BufferGeometry;h.setAttribute("position",new i.Float32BufferAttribute(p,3)),h.setAttribute("color",new i.Float32BufferAttribute(d,3));var m=new o.LineBasicMaterial({vertexColors:!0,toneMapped:!1});return(s=e.call(this,h,m)||this).type="GridHelper",s}return r.inheritsLoose(t,e),t}(t.LineSegments);e.GridHelper=u,Object.defineProperty(e,"__esModule",{value:!0})}));
