/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","./WebGLLights"],(function(e,t){"use strict";function n(e,n){var s=new t.WebGLLights(e,n),i=[],u=[];return{init:function(){i.length=0,u.length=0},state:{lightsArray:i,shadowsArray:u,lights:s},setupLights:function(e){s.setup(i,e)},setupLightsView:function(e){s.setupView(i,e)},pushLight:function(e){i.push(e)},pushShadow:function(e){u.push(e)}}}e.WebGLRenderStates=function(e,t){var s=new WeakMap;return{get:function(i,u){var h;return void 0===u&&(u=0),!1===s.has(i)?(h=new n(e,t),s.set(i,[h])):u>=s.get(i).length?(h=new n(e,t),s.get(i).push(h)):h=s.get(i)[u],h},dispose:function(){s=new WeakMap}}},Object.defineProperty(e,"__esModule",{value:!0})}));
