/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./FileLoader","./Loader","../libs/opentype.module"],(function(e,t,n,o,r){"use strict";var a=function(e){function o(t){var n;return(n=e.call(this,t)||this).reversed=!1,n}t.inheritsLoose(o,e);var a=o.prototype;return a.load=function(e,t,o,r){var a=this,i=new n.FileLoader(this.manager);i.setPath(this.path),i.setResponseType("arraybuffer"),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials),i.load(e,(function(n){try{t(a.parse(n))}catch(t){r?r(t):console.error(t),a.manager.itemError(e)}}),o,r)},a.parse=function(e){function t(e){var t,n=[];e.forEach((function(e){"m"===e.type.toLowerCase()?(t=[e],n.push(t)):"z"!==e.type.toLowerCase()&&t.push(e)}));var o=[];return n.forEach((function(e){var t={type:"m",x:e[e.length-1].x,y:e[e.length-1].y};o.push(t);for(var n=e.length-1;n>0;n--){var r=e[n],a={type:r.type};void 0!==r.x2&&void 0!==r.y2?(a.x1=r.x2,a.y1=r.y2,a.x2=r.x1,a.y2=r.y1):void 0!==r.x1&&void 0!==r.y1&&(a.x1=r.x1,a.y1=r.y1),a.x=e[n-1].x,a.y=e[n-1].y,o.push(a)}})),o}return void 0===r.default?(console.warn("THREE.TTFLoader: The loader requires opentype.js. Make sure it's included before using the loader."),null):function(e,n){for(var o=Math.round,r={},a=1e5/(72*(e.unitsPerEm||2048)),i=e.encoding.cmap.glyphIndexMap,s=Object.keys(i),d=0;d<s.length;d++){var l=s[d],u=e.glyphs.glyphs[i[l]];void 0!==l&&function(){var e={ha:o(u.advanceWidth*a),x_min:o(u.xMin*a),x_max:o(u.xMax*a),o:""};n&&(u.path.commands=t(u.path.commands)),u.path.commands.forEach((function(t){"c"===t.type.toLowerCase()&&(t.type="b"),e.o+=t.type.toLowerCase()+" ",void 0!==t.x&&void 0!==t.y&&(e.o+=o(t.x*a)+" "+o(t.y*a)+" "),void 0!==t.x1&&void 0!==t.y1&&(e.o+=o(t.x1*a)+" "+o(t.y1*a)+" "),void 0!==t.x2&&void 0!==t.y2&&(e.o+=o(t.x2*a)+" "+o(t.y2*a)+" ")})),r[String.fromCodePoint(u.unicode)]=e}()}return{glyphs:r,familyName:e.getEnglishName("fullName"),ascender:o(e.ascender*a),descender:o(e.descender*a),underlinePosition:e.tables.post.underlinePosition,underlineThickness:e.tables.post.underlineThickness,boundingBox:{xMin:e.tables.head.xMin,xMax:e.tables.head.xMax,yMin:e.tables.head.yMin,yMax:e.tables.head.yMax},resolution:1e3,original_font_information:e.tables.name}}(r.default.parse(e),this.reversed)},o}(o.Loader);e.TTFLoader=a,Object.defineProperty(e,"__esModule",{value:!0})}));