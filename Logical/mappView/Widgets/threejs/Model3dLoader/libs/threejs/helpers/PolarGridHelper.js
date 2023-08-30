/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","../objects/LineSegments","../materials/LineBasicMaterial","../core/BufferAttribute","../core/BufferGeometry","../math/Color"],(function(e,r,t,o,i,a,s){"use strict";var n=function(e){function t(r,t,n,u,l,h){var v;void 0===r&&(r=10),void 0===t&&(t=16),void 0===n&&(n=8),void 0===u&&(u=64),void 0===l&&(l=4473924),void 0===h&&(h=8947848),l=new s.Color(l),h=new s.Color(h);for(var f=[],p=[],c=0;c<=t;c++){var M=c/t*(2*Math.PI),b=Math.sin(M)*r,d=Math.cos(M)*r;f.push(0,0,0),f.push(b,0,d);var B=1&c?l:h;p.push(B.r,B.g,B.b),p.push(B.r,B.g,B.b)}for(var g=0;g<=n;g++)for(var P=1&g?l:h,m=r-r/n*g,w=0;w<u;w++){var A=w/u*(2*Math.PI),L=Math.sin(A)*m,y=Math.cos(A)*m;f.push(L,0,y),p.push(P.r,P.g,P.b),A=(w+1)/u*(2*Math.PI),L=Math.sin(A)*m,y=Math.cos(A)*m,f.push(L,0,y),p.push(P.r,P.g,P.b)}var C=new a.BufferGeometry;C.setAttribute("position",new i.Float32BufferAttribute(f,3)),C.setAttribute("color",new i.Float32BufferAttribute(p,3));var G=new o.LineBasicMaterial({vertexColors:!0,toneMapped:!1});return(v=e.call(this,C,G)||this).type="PolarGridHelper",v}return r.inheritsLoose(t,e),t}(t.LineSegments);e.PolarGridHelper=n,Object.defineProperty(e,"__esModule",{value:!0})}));