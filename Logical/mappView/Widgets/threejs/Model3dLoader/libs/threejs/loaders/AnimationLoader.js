/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","../animation/AnimationClip","./FileLoader","./Loader"],(function(e,r,t,i,a){"use strict";var n=function(e){function a(r){return e.call(this,r)||this}r.inheritsLoose(a,e);var n=a.prototype;return n.load=function(e,r,t,a){var n=this,o=new i.FileLoader(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,(function(t){try{r(n.parse(JSON.parse(t)))}catch(r){a?a(r):console.error(r),n.manager.itemError(e)}}),t,a)},n.parse=function(e){for(var r=[],i=0;i<e.length;i++){var a=t.AnimationClip.parse(e[i]);r.push(a)}return r},a}(a.Loader);e.AnimationLoader=n,Object.defineProperty(e,"__esModule",{value:!0})}));
