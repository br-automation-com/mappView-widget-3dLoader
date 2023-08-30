/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports"],(function(n){"use strict";n.CatmullRom=function(n,r,t,u,e){var i=.5*(u-r),c=.5*(e-t),o=n*n;return(2*t-2*u+i+c)*(n*o)+(-3*t+3*u-2*i-c)*o+i*n+t},n.CubicBezier=function(n,r,t,u,e){return function(n,r){var t=1-n;return t*t*t*r}(n,r)+function(n,r){var t=1-n;return 3*t*t*n*r}(n,t)+function(n,r){return 3*(1-n)*n*n*r}(n,u)+function(n,r){return n*n*n*r}(n,e)},n.QuadraticBezier=function(n,r,t,u){return function(n,r){var t=1-n;return t*t*r}(n,r)+function(n,r){return 2*(1-n)*n*r}(n,t)+function(n,r){return n*n*r}(n,u)},Object.defineProperty(n,"__esModule",{value:!0})}));
