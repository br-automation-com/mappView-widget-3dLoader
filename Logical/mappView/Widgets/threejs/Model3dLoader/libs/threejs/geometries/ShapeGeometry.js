/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","../core/BufferGeometry","../core/BufferAttribute","../extras/core/Shape","../extras/ShapeUtils","../math/Vector2"],(function(e,r,t,a,s,o,u){"use strict";var n=function(e){function t(r,t){var n;void 0===r&&(r=new s.Shape([new u.Vector2(0,.5),new u.Vector2(-.5,-.5),new u.Vector2(.5,-.5)])),void 0===t&&(t=12),(n=e.call(this)||this).type="ShapeGeometry",n.parameters={shapes:r,curveSegments:t};var i=[],h=[],p=[],l=[],f=0,v=0;if(!1===Array.isArray(r))y(r);else for(var c=0;c<r.length;c++)y(r[c]),n.addGroup(f,v,c),f+=v,v=0;function y(e){var r=h.length/3,a=e.extractPoints(t),s=a.shape,u=a.holes;!1===o.ShapeUtils.isClockWise(s)&&(s=s.reverse());for(var n=0,f=u.length;n<f;n++){var c=u[n];!0===o.ShapeUtils.isClockWise(c)&&(u[n]=c.reverse())}for(var y=o.ShapeUtils.triangulateShape(s,u),S=0,g=u.length;S<g;S++){var m=u[S];s=s.concat(m)}for(var A=0,d=s.length;A<d;A++){var b=s[A];h.push(b.x,b.y,0),p.push(0,0,1),l.push(b.x,b.y)}for(var w=0,B=y.length;w<B;w++){var x=y[w],G=x[0]+r,O=x[1]+r,U=x[2]+r;i.push(G,O,U),v+=3}}return n.setIndex(i),n.setAttribute("position",new a.Float32BufferAttribute(h,3)),n.setAttribute("normal",new a.Float32BufferAttribute(p,3)),n.setAttribute("uv",new a.Float32BufferAttribute(l,2)),n}return r.inheritsLoose(t,e),t.prototype.toJSON=function(){var r=e.prototype.toJSON.call(this);return function(e,r){if(r.shapes=[],Array.isArray(e))for(var t=0,a=e.length;t<a;t++){var s=e[t];r.shapes.push(s.uuid)}else r.shapes.push(e.uuid);return r}(this.parameters.shapes,r)},t.fromJSON=function(e,r){for(var a=[],s=0,o=e.shapes.length;s<o;s++){var u=r[e.shapes[s]];a.push(u)}return new t(a,e.curveSegments)},t}(t.BufferGeometry);e.ShapeBufferGeometry=n,e.ShapeGeometry=n,Object.defineProperty(e,"__esModule",{value:!0})}));