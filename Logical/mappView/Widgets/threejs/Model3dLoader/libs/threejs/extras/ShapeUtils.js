/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","./Earcut"],(function(e,n){"use strict";var r=function(){function e(){}return e.area=function(e){for(var n=e.length,r=0,t=n-1,u=0;u<n;t=u++)r+=e[t].x*e[u].y-e[u].x*e[t].y;return.5*r},e.isClockWise=function(n){return e.area(n)<0},e.triangulateShape=function(e,r){var a=[],o=[],i=[];t(e),u(a,e);var c=e.length;r.forEach(t);for(var f=0;f<r.length;f++)o.push(c),c+=r[f].length,u(a,r[f]);for(var l=n.Earcut.triangulate(a,o),h=0;h<l.length;h+=3)i.push(l.slice(h,h+3));return i},e}();function t(e){var n=e.length;n>2&&e[n-1].equals(e[0])&&e.pop()}function u(e,n){for(var r=0;r<n.length;r++)e.push(n[r].x),e.push(n[r].y)}e.ShapeUtils=r,Object.defineProperty(e,"__esModule",{value:!0})}));
