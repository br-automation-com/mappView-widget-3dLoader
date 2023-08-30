/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","../audio/AudioContext","./FileLoader","./Loader"],(function(e,t,r,o,i){"use strict";var a=function(e){function i(t){return e.call(this,t)||this}return t.inheritsLoose(i,e),i.prototype.load=function(e,t,i,a){var n=this,s=new o.FileLoader(this.manager);s.setResponseType("arraybuffer"),s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,(function(o){try{var i=o.slice(0);r.AudioContext.getContext().decodeAudioData(i,(function(e){t(e)}))}catch(t){a?a(t):console.error(t),n.manager.itemError(e)}}),i,a)},i}(i.Loader);e.AudioLoader=a,Object.defineProperty(e,"__esModule",{value:!0})}));
