/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../../constants","../../math/MathUtils","../../extras/ImageUtils","../../utils"],(function(e,r,t,i,a){"use strict";e.WebGLTextures=function(e,n,u,f,o,l,d){var s,g,h,m=o.isWebGL2,p=o.maxTextures,b=o.maxCubemapSize,x=o.maxTextureSize,T=o.maxSamples,_=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,w=/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap,v=new WeakMap,F=!1;try{F="undefined"!=typeof OffscreenCanvas&&null!==new OffscreenCanvas(1,1).getContext("2d")}catch(e){}function R(e,r){return F?new OffscreenCanvas(e,r):a.createElementNS("canvas")}function D(e,r,i,a){var n=1;if((e.width>a||e.height>a)&&(n=a/Math.max(e.width,e.height)),n<1||!0===r){if("undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap){var u=r?t.floorPowerOfTwo:Math.floor,f=u(n*e.width),o=u(n*e.height);void 0===h&&(h=R(f,o));var l=i?R(f,o):h;return l.width=f,l.height=o,l.getContext("2d").drawImage(e,0,0,f,o),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+e.width+"x"+e.height+") to ("+f+"x"+o+")."),l}return"data"in e&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+e.width+"x"+e.height+")."),e}return e}function E(e){return t.isPowerOfTwo(e.width)&&t.isPowerOfTwo(e.height)}function y(e,t){return e.generateMipmaps&&t&&e.minFilter!==r.NearestFilter&&e.minFilter!==r.LinearFilter}function L(r){e.generateMipmap(r)}function S(t,i,a,u,f){if(void 0===f&&(f=!1),!1===m)return i;if(null!==t){if(void 0!==e[t])return e[t];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+t+"'")}var o=i;return 6403===i&&(5126===a&&(o=33326),5131===a&&(o=33325),5121===a&&(o=33321)),33319===i&&(5126===a&&(o=33328),5131===a&&(o=33327),5121===a&&(o=33323)),6408===i&&(5126===a&&(o=34836),5131===a&&(o=34842),5121===a&&(o=u===r.sRGBEncoding&&!1===f?35907:32856),32819===a&&(o=32854),32820===a&&(o=32855)),33325!==o&&33326!==o&&33327!==o&&33328!==o&&34842!==o&&34836!==o||n.get("EXT_color_buffer_float"),o}function M(e,t,i){return!0===y(e,i)||e.isFramebufferTexture&&e.minFilter!==r.NearestFilter&&e.minFilter!==r.LinearFilter?Math.log2(Math.max(t.width,t.height))+1:void 0!==e.mipmaps&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function G(e){return e===r.NearestFilter||e===r.NearestMipmapNearestFilter||e===r.NearestMipmapLinearFilter?9728:9729}function I(e){var r=e.target;r.removeEventListener("dispose",I),function(e){var r=f.get(e);if(void 0===r.__webglInit)return;var t=e.source,i=v.get(t);if(i){var a=i[r.__cacheKey];a.usedTimes--,0===a.usedTimes&&C(e),0===Object.keys(i).length&&v.delete(t)}f.remove(e)}(r),r.isVideoTexture&&c.delete(r)}function W(r){var t=r.target;t.removeEventListener("dispose",W),function(r){var t=r.texture,i=f.get(r),a=f.get(t);void 0!==a.__webglTexture&&(e.deleteTexture(a.__webglTexture),d.memory.textures--);r.depthTexture&&r.depthTexture.dispose();if(r.isWebGLCubeRenderTarget)for(var n=0;n<6;n++)e.deleteFramebuffer(i.__webglFramebuffer[n]),i.__webglDepthbuffer&&e.deleteRenderbuffer(i.__webglDepthbuffer[n]);else{if(e.deleteFramebuffer(i.__webglFramebuffer),i.__webglDepthbuffer&&e.deleteRenderbuffer(i.__webglDepthbuffer),i.__webglMultisampledFramebuffer&&e.deleteFramebuffer(i.__webglMultisampledFramebuffer),i.__webglColorRenderbuffer)for(var u=0;u<i.__webglColorRenderbuffer.length;u++)i.__webglColorRenderbuffer[u]&&e.deleteRenderbuffer(i.__webglColorRenderbuffer[u]);i.__webglDepthRenderbuffer&&e.deleteRenderbuffer(i.__webglDepthRenderbuffer)}if(r.isWebGLMultipleRenderTargets)for(var o=0,l=t.length;o<l;o++){var s=f.get(t[o]);s.__webglTexture&&(e.deleteTexture(s.__webglTexture),d.memory.textures--),f.remove(t[o])}f.remove(t),f.remove(r)}(t)}function C(r){var t=f.get(r);e.deleteTexture(t.__webglTexture);var i=r.source;delete v.get(i)[t.__cacheKey],d.memory.textures--}var B=0;function A(e,r){var t=f.get(e);if(e.isVideoTexture&&function(e){var r=d.render.frame;c.get(e)!==r&&(c.set(e,r),e.update())}(e),!1===e.isRenderTargetTexture&&e.version>0&&t.__version!==e.version){var i=e.image;if(null===i)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(!1!==i.complete)return void V(t,e,r);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}u.activeTexture(33984+r),u.bindTexture(3553,t.__webglTexture)}var U=((s={})[r.RepeatWrapping]=10497,s[r.ClampToEdgeWrapping]=33071,s[r.MirroredRepeatWrapping]=33648,s),H=((g={})[r.NearestFilter]=9728,g[r.NearestMipmapNearestFilter]=9984,g[r.NearestMipmapLinearFilter]=9986,g[r.LinearFilter]=9729,g[r.LinearMipmapNearestFilter]=9985,g[r.LinearMipmapLinearFilter]=9987,g);function P(t,i,a){if(a?(e.texParameteri(t,10242,U[i.wrapS]),e.texParameteri(t,10243,U[i.wrapT]),32879!==t&&35866!==t||e.texParameteri(t,32882,U[i.wrapR]),e.texParameteri(t,10240,H[i.magFilter]),e.texParameteri(t,10241,H[i.minFilter])):(e.texParameteri(t,10242,33071),e.texParameteri(t,10243,33071),32879!==t&&35866!==t||e.texParameteri(t,32882,33071),i.wrapS===r.ClampToEdgeWrapping&&i.wrapT===r.ClampToEdgeWrapping||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(t,10240,G(i.magFilter)),e.texParameteri(t,10241,G(i.minFilter)),i.minFilter!==r.NearestFilter&&i.minFilter!==r.LinearFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),!0===n.has("EXT_texture_filter_anisotropic")){var u=n.get("EXT_texture_filter_anisotropic");if(i.type===r.FloatType&&!1===n.has("OES_texture_float_linear"))return;if(!1===m&&i.type===r.HalfFloatType&&!1===n.has("OES_texture_half_float_linear"))return;(i.anisotropy>1||f.get(i).__currentAnisotropy)&&(e.texParameterf(t,u.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(i.anisotropy,o.getMaxAnisotropy())),f.get(i).__currentAnisotropy=i.anisotropy)}}function N(r,t){var i=!1;void 0===r.__webglInit&&(r.__webglInit=!0,t.addEventListener("dispose",I));var a=t.source,n=v.get(a);void 0===n&&(n={},v.set(a,n));var u=function(e){var r=[];return r.push(e.wrapS),r.push(e.wrapT),r.push(e.magFilter),r.push(e.minFilter),r.push(e.anisotropy),r.push(e.internalFormat),r.push(e.format),r.push(e.type),r.push(e.generateMipmaps),r.push(e.premultiplyAlpha),r.push(e.flipY),r.push(e.unpackAlignment),r.push(e.encoding),r.join()}(t);if(u!==r.__cacheKey){void 0===n[u]&&(n[u]={texture:e.createTexture(),usedTimes:0},d.memory.textures++,i=!0),n[u].usedTimes++;var f=n[r.__cacheKey];void 0!==f&&(n[r.__cacheKey].usedTimes--,0===f.usedTimes&&C(t)),r.__cacheKey=u,r.__webglTexture=n[u].texture}return i}function V(t,i,a){var n=3553;i.isDataArrayTexture&&(n=35866),i.isData3DTexture&&(n=32879);var f=N(t,i),o=i.source;if(u.activeTexture(33984+a),u.bindTexture(n,t.__webglTexture),o.version!==o.__currentVersion||!0===f){e.pixelStorei(37440,i.flipY),e.pixelStorei(37441,i.premultiplyAlpha),e.pixelStorei(3317,i.unpackAlignment),e.pixelStorei(37443,0);var d,s=function(e){return!m&&(e.wrapS!==r.ClampToEdgeWrapping||e.wrapT!==r.ClampToEdgeWrapping||e.minFilter!==r.NearestFilter&&e.minFilter!==r.LinearFilter)}(i)&&!1===E(i.image),g=D(i.image,s,!1,x),h=E(g=j(i,g))||m,p=l.convert(i.format,i.encoding),b=l.convert(i.type),T=S(i.internalFormat,p,b,i.encoding,i.isVideoTexture);P(n,i,h);var _=i.mipmaps,w=m&&!0!==i.isVideoTexture,c=void 0===o.__currentVersion||!0===f,v=M(i,g,h);if(i.isDepthTexture)T=6402,m?T=i.type===r.FloatType?36012:i.type===r.UnsignedIntType?33190:i.type===r.UnsignedInt248Type?35056:33189:i.type===r.FloatType&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),i.format===r.DepthFormat&&6402===T&&i.type!==r.UnsignedShortType&&i.type!==r.UnsignedIntType&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),i.type=r.UnsignedIntType,b=l.convert(i.type)),i.format===r.DepthStencilFormat&&6402===T&&(T=34041,i.type!==r.UnsignedInt248Type&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),i.type=r.UnsignedInt248Type,b=l.convert(i.type))),c&&(w?u.texStorage2D(3553,1,T,g.width,g.height):u.texImage2D(3553,0,T,g.width,g.height,0,p,b,null));else if(i.isDataTexture)if(_.length>0&&h){w&&c&&u.texStorage2D(3553,v,T,_[0].width,_[0].height);for(var F=0,R=_.length;F<R;F++)d=_[F],w?u.texSubImage2D(3553,F,0,0,d.width,d.height,p,b,d.data):u.texImage2D(3553,F,T,d.width,d.height,0,p,b,d.data);i.generateMipmaps=!1}else w?(c&&u.texStorage2D(3553,v,T,g.width,g.height),u.texSubImage2D(3553,0,0,0,g.width,g.height,p,b,g.data)):u.texImage2D(3553,0,T,g.width,g.height,0,p,b,g.data);else if(i.isCompressedTexture){w&&c&&u.texStorage2D(3553,v,T,_[0].width,_[0].height);for(var G=0,I=_.length;G<I;G++)d=_[G],i.format!==r.RGBAFormat?null!==p?w?u.compressedTexSubImage2D(3553,G,0,0,d.width,d.height,p,d.data):u.compressedTexImage2D(3553,G,T,d.width,d.height,0,d.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):w?u.texSubImage2D(3553,G,0,0,d.width,d.height,p,b,d.data):u.texImage2D(3553,G,T,d.width,d.height,0,p,b,d.data)}else if(i.isDataArrayTexture)w?(c&&u.texStorage3D(35866,v,T,g.width,g.height,g.depth),u.texSubImage3D(35866,0,0,0,0,g.width,g.height,g.depth,p,b,g.data)):u.texImage3D(35866,0,T,g.width,g.height,g.depth,0,p,b,g.data);else if(i.isData3DTexture)w?(c&&u.texStorage3D(32879,v,T,g.width,g.height,g.depth),u.texSubImage3D(32879,0,0,0,0,g.width,g.height,g.depth,p,b,g.data)):u.texImage3D(32879,0,T,g.width,g.height,g.depth,0,p,b,g.data);else if(i.isFramebufferTexture){if(c)if(w)u.texStorage2D(3553,v,T,g.width,g.height);else for(var W=g.width,C=g.height,B=0;B<v;B++)u.texImage2D(3553,B,T,W,C,0,p,b,null),W>>=1,C>>=1}else if(_.length>0&&h){w&&c&&u.texStorage2D(3553,v,T,_[0].width,_[0].height);for(var A=0,U=_.length;A<U;A++)d=_[A],w?u.texSubImage2D(3553,A,0,0,p,b,d):u.texImage2D(3553,A,T,p,b,d);i.generateMipmaps=!1}else w?(c&&u.texStorage2D(3553,v,T,g.width,g.height),u.texSubImage2D(3553,0,0,0,p,b,g)):u.texImage2D(3553,0,T,p,b,g);y(i,h)&&L(n),o.__currentVersion=o.version,i.onUpdate&&i.onUpdate(i)}t.__version=i.version}function O(r,t,i,a,n){var o=l.convert(i.format,i.encoding),d=l.convert(i.type),s=S(i.internalFormat,o,d,i.encoding);f.get(t).__hasExternalTextures||(32879===n||35866===n?u.texImage3D(n,0,s,t.width,t.height,t.depth,0,o,d,null):u.texImage2D(n,0,s,t.width,t.height,0,o,d,null)),u.bindFramebuffer(36160,r),Y(t)?_.framebufferTexture2DMultisampleEXT(36160,a,n,f.get(i).__webglTexture,0,K(t)):e.framebufferTexture2D(36160,a,n,f.get(i).__webglTexture,0),u.bindFramebuffer(36160,null)}function X(t,i,a){if(e.bindRenderbuffer(36161,t),i.depthBuffer&&!i.stencilBuffer){var n=33189;if(a||Y(i)){var u=i.depthTexture;u&&u.isDepthTexture&&(u.type===r.FloatType?n=36012:u.type===r.UnsignedIntType&&(n=33190));var f=K(i);Y(i)?_.renderbufferStorageMultisampleEXT(36161,f,n,i.width,i.height):e.renderbufferStorageMultisample(36161,f,n,i.width,i.height)}else e.renderbufferStorage(36161,n,i.width,i.height);e.framebufferRenderbuffer(36160,36096,36161,t)}else if(i.depthBuffer&&i.stencilBuffer){var o=K(i);a&&!1===Y(i)?e.renderbufferStorageMultisample(36161,o,35056,i.width,i.height):Y(i)?_.renderbufferStorageMultisampleEXT(36161,o,35056,i.width,i.height):e.renderbufferStorage(36161,34041,i.width,i.height),e.framebufferRenderbuffer(36160,33306,36161,t)}else for(var d=!0===i.isWebGLMultipleRenderTargets?i.texture:[i.texture],s=0;s<d.length;s++){var g=d[s],h=l.convert(g.format,g.encoding),m=l.convert(g.type),p=S(g.internalFormat,h,m,g.encoding),b=K(i);a&&!1===Y(i)?e.renderbufferStorageMultisample(36161,b,p,i.width,i.height):Y(i)?_.renderbufferStorageMultisampleEXT(36161,b,p,i.width,i.height):e.renderbufferStorage(36161,p,i.width,i.height)}e.bindRenderbuffer(36161,null)}function k(t){var i=f.get(t),a=!0===t.isWebGLCubeRenderTarget;if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)throw new Error("target.depthTexture not supported in Cube render targets");!function(t,i){if(i&&i.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(u.bindFramebuffer(36160,t),!i.depthTexture||!i.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");f.get(i.depthTexture).__webglTexture&&i.depthTexture.image.width===i.width&&i.depthTexture.image.height===i.height||(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),A(i.depthTexture,0);var a=f.get(i.depthTexture).__webglTexture,n=K(i);if(i.depthTexture.format===r.DepthFormat)Y(i)?_.framebufferTexture2DMultisampleEXT(36160,36096,3553,a,0,n):e.framebufferTexture2D(36160,36096,3553,a,0);else{if(i.depthTexture.format!==r.DepthStencilFormat)throw new Error("Unknown depthTexture format");Y(i)?_.framebufferTexture2DMultisampleEXT(36160,33306,3553,a,0,n):e.framebufferTexture2D(36160,33306,3553,a,0)}}(i.__webglFramebuffer,t)}else if(a){i.__webglDepthbuffer=[];for(var n=0;n<6;n++)u.bindFramebuffer(36160,i.__webglFramebuffer[n]),i.__webglDepthbuffer[n]=e.createRenderbuffer(),X(i.__webglDepthbuffer[n],t,!1)}else u.bindFramebuffer(36160,i.__webglFramebuffer),i.__webglDepthbuffer=e.createRenderbuffer(),X(i.__webglDepthbuffer,t,!1);u.bindFramebuffer(36160,null)}function K(e){return Math.min(T,e.samples)}function Y(e){var r=f.get(e);return m&&e.samples>0&&!0===n.has("WEBGL_multisampled_render_to_texture")&&!1!==r.__useRenderToTexture}function j(e,t){var a=e.encoding,u=e.format,f=e.type;return!0===e.isCompressedTexture||!0===e.isVideoTexture||e.format===r._SRGBAFormat||a!==r.LinearEncoding&&(a===r.sRGBEncoding?!1===m?!0===n.has("EXT_sRGB")&&u===r.RGBAFormat?(e.format=r._SRGBAFormat,e.minFilter=r.LinearFilter,e.generateMipmaps=!1):t=i.ImageUtils.sRGBToLinear(t):u===r.RGBAFormat&&f===r.UnsignedByteType||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",a)),t}this.allocateTextureUnit=function(){var e=B;return e>=p&&console.warn("THREE.WebGLTextures: Trying to use "+e+" texture units while this GPU supports only "+p),B+=1,e},this.resetTextureUnits=function(){B=0},this.setTexture2D=A,this.setTexture2DArray=function(e,r){var t=f.get(e);e.version>0&&t.__version!==e.version?V(t,e,r):(u.activeTexture(33984+r),u.bindTexture(35866,t.__webglTexture))},this.setTexture3D=function(e,r){var t=f.get(e);e.version>0&&t.__version!==e.version?V(t,e,r):(u.activeTexture(33984+r),u.bindTexture(32879,t.__webglTexture))},this.setTextureCube=function(t,i){var a=f.get(t);t.version>0&&a.__version!==t.version?function(t,i,a){if(6!==i.image.length)return;var n=N(t,i),f=i.source;if(u.activeTexture(33984+a),u.bindTexture(34067,t.__webglTexture),f.version!==f.__currentVersion||!0===n){e.pixelStorei(37440,i.flipY),e.pixelStorei(37441,i.premultiplyAlpha),e.pixelStorei(3317,i.unpackAlignment),e.pixelStorei(37443,0);for(var o=i.isCompressedTexture||i.image[0].isCompressedTexture,d=i.image[0]&&i.image[0].isDataTexture,s=[],g=0;g<6;g++)s[g]=o||d?d?i.image[g].image:i.image[g]:D(i.image[g],!1,!0,b),s[g]=j(i,s[g]);var h,p=s[0],x=E(p)||m,T=l.convert(i.format,i.encoding),_=l.convert(i.type),w=S(i.internalFormat,T,_,i.encoding),c=m&&!0!==i.isVideoTexture,v=void 0===f.__currentVersion||!0===n,F=M(i,p,x);if(P(34067,i,x),o){c&&v&&u.texStorage2D(34067,F,w,p.width,p.height);for(var R=0;R<6;R++){h=s[R].mipmaps;for(var G=0;G<h.length;G++){var I=h[G];i.format!==r.RGBAFormat?null!==T?c?u.compressedTexSubImage2D(34069+R,G,0,0,I.width,I.height,T,I.data):u.compressedTexImage2D(34069+R,G,w,I.width,I.height,0,I.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):c?u.texSubImage2D(34069+R,G,0,0,I.width,I.height,T,_,I.data):u.texImage2D(34069+R,G,w,I.width,I.height,0,T,_,I.data)}}}else{h=i.mipmaps,c&&v&&(h.length>0&&F++,u.texStorage2D(34067,F,w,s[0].width,s[0].height));for(var W=0;W<6;W++)if(d){c?u.texSubImage2D(34069+W,0,0,0,s[W].width,s[W].height,T,_,s[W].data):u.texImage2D(34069+W,0,w,s[W].width,s[W].height,0,T,_,s[W].data);for(var C=0;C<h.length;C++){var B=h[C].image[W].image;c?u.texSubImage2D(34069+W,C+1,0,0,B.width,B.height,T,_,B.data):u.texImage2D(34069+W,C+1,w,B.width,B.height,0,T,_,B.data)}}else{c?u.texSubImage2D(34069+W,0,0,0,T,_,s[W]):u.texImage2D(34069+W,0,w,T,_,s[W]);for(var A=0;A<h.length;A++){var U=h[A];c?u.texSubImage2D(34069+W,A+1,0,0,T,_,U.image[W]):u.texImage2D(34069+W,A+1,w,T,_,U.image[W])}}}y(i,x)&&L(34067),f.__currentVersion=f.version,i.onUpdate&&i.onUpdate(i)}t.__version=i.version}(a,t,i):(u.activeTexture(33984+i),u.bindTexture(34067,a.__webglTexture))},this.rebindTextures=function(e,r,t){var i=f.get(e);void 0!==r&&O(i.__webglFramebuffer,e,e.texture,36064,3553),void 0!==t&&k(e)},this.setupRenderTarget=function(r){var t=r.texture,i=f.get(r),a=f.get(t);r.addEventListener("dispose",W),!0!==r.isWebGLMultipleRenderTargets&&(void 0===a.__webglTexture&&(a.__webglTexture=e.createTexture()),a.__version=t.version,d.memory.textures++);var n=!0===r.isWebGLCubeRenderTarget,s=!0===r.isWebGLMultipleRenderTargets,g=E(r)||m;if(n){i.__webglFramebuffer=[];for(var h=0;h<6;h++)i.__webglFramebuffer[h]=e.createFramebuffer()}else{if(i.__webglFramebuffer=e.createFramebuffer(),s)if(o.drawBuffers)for(var p=r.texture,b=0,x=p.length;b<x;b++){var T=f.get(p[b]);void 0===T.__webglTexture&&(T.__webglTexture=e.createTexture(),d.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(m&&r.samples>0&&!1===Y(r)){var _=s?t:[t];i.__webglMultisampledFramebuffer=e.createFramebuffer(),i.__webglColorRenderbuffer=[],u.bindFramebuffer(36160,i.__webglMultisampledFramebuffer);for(var w=0;w<_.length;w++){var c=_[w];i.__webglColorRenderbuffer[w]=e.createRenderbuffer(),e.bindRenderbuffer(36161,i.__webglColorRenderbuffer[w]);var v=l.convert(c.format,c.encoding),F=l.convert(c.type),R=S(c.internalFormat,v,F,c.encoding),D=K(r);e.renderbufferStorageMultisample(36161,D,R,r.width,r.height),e.framebufferRenderbuffer(36160,36064+w,36161,i.__webglColorRenderbuffer[w])}e.bindRenderbuffer(36161,null),r.depthBuffer&&(i.__webglDepthRenderbuffer=e.createRenderbuffer(),X(i.__webglDepthRenderbuffer,r,!0)),u.bindFramebuffer(36160,null)}}if(n){u.bindTexture(34067,a.__webglTexture),P(34067,t,g);for(var M=0;M<6;M++)O(i.__webglFramebuffer[M],r,t,36064,34069+M);y(t,g)&&L(34067),u.unbindTexture()}else if(s){for(var G=r.texture,I=0,C=G.length;I<C;I++){var B=G[I],A=f.get(B);u.bindTexture(3553,A.__webglTexture),P(3553,B,g),O(i.__webglFramebuffer,r,B,36064+I,3553),y(B,g)&&L(3553)}u.unbindTexture()}else{var U=3553;(r.isWebGL3DRenderTarget||r.isWebGLArrayRenderTarget)&&(m?U=r.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),u.bindTexture(U,a.__webglTexture),P(U,t,g),O(i.__webglFramebuffer,r,t,36064,U),y(t,g)&&L(U),u.unbindTexture()}r.depthBuffer&&k(r)},this.updateRenderTargetMipmap=function(e){for(var r=E(e)||m,t=!0===e.isWebGLMultipleRenderTargets?e.texture:[e.texture],i=0,a=t.length;i<a;i++){var n=t[i];if(y(n,r)){var o=e.isWebGLCubeRenderTarget?34067:3553,l=f.get(n).__webglTexture;u.bindTexture(o,l),L(o),u.unbindTexture()}}},this.updateMultisampleRenderTarget=function(r){if(m&&r.samples>0&&!1===Y(r)){var t=r.isWebGLMultipleRenderTargets?r.texture:[r.texture],i=r.width,a=r.height,n=16384,o=[],l=r.stencilBuffer?33306:36096,d=f.get(r),s=!0===r.isWebGLMultipleRenderTargets;if(s)for(var g=0;g<t.length;g++)u.bindFramebuffer(36160,d.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(36160,36064+g,36161,null),u.bindFramebuffer(36160,d.__webglFramebuffer),e.framebufferTexture2D(36009,36064+g,3553,null,0);u.bindFramebuffer(36008,d.__webglMultisampledFramebuffer),u.bindFramebuffer(36009,d.__webglFramebuffer);for(var h=0;h<t.length;h++){o.push(36064+h),r.depthBuffer&&o.push(l);var p=void 0!==d.__ignoreDepthValues&&d.__ignoreDepthValues;if(!1===p&&(r.depthBuffer&&(n|=256),r.stencilBuffer&&(n|=1024)),s&&e.framebufferRenderbuffer(36008,36064,36161,d.__webglColorRenderbuffer[h]),!0===p&&(e.invalidateFramebuffer(36008,[l]),e.invalidateFramebuffer(36009,[l])),s){var b=f.get(t[h]).__webglTexture;e.framebufferTexture2D(36009,36064,3553,b,0)}e.blitFramebuffer(0,0,i,a,0,0,i,a,n,9728),w&&e.invalidateFramebuffer(36008,o)}if(u.bindFramebuffer(36008,null),u.bindFramebuffer(36009,null),s)for(var x=0;x<t.length;x++){u.bindFramebuffer(36160,d.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(36160,36064+x,36161,d.__webglColorRenderbuffer[x]);var T=f.get(t[x]).__webglTexture;u.bindFramebuffer(36160,d.__webglFramebuffer),e.framebufferTexture2D(36009,36064+x,3553,T,0)}u.bindFramebuffer(36009,d.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=k,this.setupFrameBufferTexture=O,this.useMultisampledRTT=Y},Object.defineProperty(e,"__esModule",{value:!0})}));