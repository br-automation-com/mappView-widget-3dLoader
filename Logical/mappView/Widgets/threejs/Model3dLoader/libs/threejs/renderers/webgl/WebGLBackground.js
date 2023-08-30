/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../../constants","../../geometries/BoxGeometry","../../geometries/PlaneGeometry","../../materials/ShaderMaterial","../../math/Color","../../objects/Mesh","../shaders/ShaderLib","../shaders/UniformsUtils"],(function(e,r,t,a,n,i,o,l,u){"use strict";e.WebGLBackground=function(e,s,d,m,f,c){var p,h,g=new i.Color(0),b=!0===f?0:1,v=null,S=0,M=null;function C(e,r){d.buffers.color.setClear(e.r,e.g,e.b,r,c)}return{getClearColor:function(){return g},setClearColor:function(e,r){void 0===r&&(r=1),g.set(e),C(g,b=r)},getClearAlpha:function(){return b},setClearAlpha:function(e){C(g,b=e)},render:function(i,d){var f=!1,c=!0===d.isScene?d.background:null;c&&c.isTexture&&(c=s.get(c));var x=e.xr,y=x.getSession&&x.getSession();y&&"additive"===y.environmentBlendMode&&(c=null),null===c?C(g,b):c&&c.isColor&&(C(c,1),f=!0),(e.autoClear||f)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),c&&(c.isCubeTexture||c.mapping===r.CubeUVReflectionMapping)?(void 0===h&&((h=new o.Mesh(new t.BoxGeometry(1,1,1),new n.ShaderMaterial({name:"BackgroundCubeMaterial",uniforms:u.cloneUniforms(l.ShaderLib.cube.uniforms),vertexShader:l.ShaderLib.cube.vertexShader,fragmentShader:l.ShaderLib.cube.fragmentShader,side:r.BackSide,depthTest:!1,depthWrite:!1,fog:!1}))).geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(e,r,t){this.matrixWorld.copyPosition(t.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),m.update(h)),h.material.uniforms.envMap.value=c,h.material.uniforms.flipEnvMap.value=c.isCubeTexture&&!1===c.isRenderTargetTexture?-1:1,v===c&&S===c.version&&M===e.toneMapping||(h.material.needsUpdate=!0,v=c,S=c.version,M=e.toneMapping),h.layers.enableAll(),i.unshift(h,h.geometry,h.material,0,0,null)):c&&c.isTexture&&(void 0===p&&((p=new o.Mesh(new a.PlaneGeometry(2,2),new n.ShaderMaterial({name:"BackgroundMaterial",uniforms:u.cloneUniforms(l.ShaderLib.background.uniforms),vertexShader:l.ShaderLib.background.vertexShader,fragmentShader:l.ShaderLib.background.fragmentShader,side:r.FrontSide,depthTest:!1,depthWrite:!1,fog:!1}))).geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),m.update(p)),p.material.uniforms.t2D.value=c,!0===c.matrixAutoUpdate&&c.updateMatrix(),p.material.uniforms.uvTransform.value.copy(c.matrix),v===c&&S===c.version&&M===e.toneMapping||(p.material.needsUpdate=!0,v=c,S=c.version,M=e.toneMapping),p.layers.enableAll(),i.unshift(p,p.geometry,p.material,0,0,null))}}},Object.defineProperty(e,"__esModule",{value:!0})}));