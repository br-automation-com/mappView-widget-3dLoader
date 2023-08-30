/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports"],(function(t){"use strict";var n=function(t,n,r){var o=this,i=!1,e=0,s=0,a=void 0,d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=r,this.itemStart=function(t){s++,!1===i&&void 0!==o.onStart&&o.onStart(t,e,s),i=!0},this.itemEnd=function(t){e++,void 0!==o.onProgress&&o.onProgress(t,e,s),e===s&&(i=!1,void 0!==o.onLoad&&o.onLoad())},this.itemError=function(t){void 0!==o.onError&&o.onError(t)},this.resolveURL=function(t){return a?a(t):t},this.setURLModifier=function(t){return a=t,this},this.addHandler=function(t,n){return d.push(t,n),this},this.removeHandler=function(t){var n=d.indexOf(t);return-1!==n&&d.splice(n,2),this},this.getHandler=function(t){for(var n=0,r=d.length;n<r;n+=2){var o=d[n],i=d[n+1];if(o.global&&(o.lastIndex=0),o.test(t))return i}return null}},r=new n;t.DefaultLoadingManager=r,t.LoadingManager=n,Object.defineProperty(t,"__esModule",{value:!0})}));
