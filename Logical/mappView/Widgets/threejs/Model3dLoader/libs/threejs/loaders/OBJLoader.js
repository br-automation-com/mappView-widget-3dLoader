/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","../core/BufferGeometry","./FileLoader","../objects/Group","../core/BufferAttribute","../materials/LineBasicMaterial","../objects/LineSegments","./Loader","../materials/Material","../objects/Mesh","../materials/MeshPhongMaterial","../objects/Points","../materials/PointsMaterial","../math/Vector3","../math/Color"],(function(e,t,r,i,s,a,o,n,l,h,c,u,m,d,p,f){"use strict";var v=/^[og]\s*(.+)?/,g=/^mtllib /,b=/^usemtl /,y=/^usemap /,j=/\s+/,x=new p.Vector3,w=new p.Vector3,V=new p.Vector3,L=new p.Vector3,M=new p.Vector3,F=new f.Color;function A(){var e={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&!1===this.object.fromDeclaration)return this.object.name=e,void(this.object.fromDeclaration=!1!==t);var r=this.object&&"function"==typeof this.object.currentMaterial?this.object.currentMaterial():void 0;if(this.object&&"function"==typeof this.object._finalize&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:!1!==t,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(e,t){var r=this._finalize(!1);r&&(r.inherited||r.groupCount<=0)&&this.materials.splice(r.index,1);var i={index:this.materials.length,name:e||"",mtllib:Array.isArray(t)&&t.length>0?t[t.length-1]:"",smooth:void 0!==r?r.smooth:this.smooth,groupStart:void 0!==r?r.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(e){var t={index:"number"==typeof e?e:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return t.clone=this.clone.bind(t),t}};return this.materials.push(i),i},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(e){var t=this.currentMaterial();if(t&&-1===t.groupEnd&&(t.groupEnd=this.geometry.vertices.length/3,t.groupCount=t.groupEnd-t.groupStart,t.inherited=!1),e&&this.materials.length>1)for(var r=this.materials.length-1;r>=0;r--)this.materials[r].groupCount<=0&&this.materials.splice(r,1);return e&&0===this.materials.length&&this.materials.push({name:"",smooth:this.smooth}),t}},r&&r.name&&"function"==typeof r.clone){var i=r.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&"function"==typeof this.object._finalize&&this.object._finalize(!0)},parseVertexIndex:function(e,t){var r=parseInt(e,10);return 3*(r>=0?r-1:r+t/3)},parseNormalIndex:function(e,t){var r=parseInt(e,10);return 3*(r>=0?r-1:r+t/3)},parseUVIndex:function(e,t){var r=parseInt(e,10);return 2*(r>=0?r-1:r+t/2)},addVertex:function(e,t,r){var i=this.vertices,s=this.object.geometry.vertices;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[r+0],i[r+1],i[r+2])},addVertexPoint:function(e){var t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){var t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,r){var i=this.normals,s=this.object.geometry.normals;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[r+0],i[r+1],i[r+2])},addFaceNormal:function(e,t,r){var i=this.vertices,s=this.object.geometry.normals;x.fromArray(i,e),w.fromArray(i,t),V.fromArray(i,r),M.subVectors(V,w),L.subVectors(x,w),M.cross(L),M.normalize(),s.push(M.x,M.y,M.z),s.push(M.x,M.y,M.z),s.push(M.x,M.y,M.z)},addColor:function(e,t,r){var i=this.colors,s=this.object.geometry.colors;void 0!==i[e]&&s.push(i[e+0],i[e+1],i[e+2]),void 0!==i[t]&&s.push(i[t+0],i[t+1],i[t+2]),void 0!==i[r]&&s.push(i[r+0],i[r+1],i[r+2])},addUV:function(e,t,r){var i=this.uvs,s=this.object.geometry.uvs;s.push(i[e+0],i[e+1]),s.push(i[t+0],i[t+1]),s.push(i[r+0],i[r+1])},addDefaultUV:function(){var e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){var t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,r,i,s,a,o,n,l){var h=this.vertices.length,c=this.parseVertexIndex(e,h),u=this.parseVertexIndex(t,h),m=this.parseVertexIndex(r,h);if(this.addVertex(c,u,m),this.addColor(c,u,m),void 0!==o&&""!==o){var d=this.normals.length;c=this.parseNormalIndex(o,d),u=this.parseNormalIndex(n,d),m=this.parseNormalIndex(l,d),this.addNormal(c,u,m)}else this.addFaceNormal(c,u,m);if(void 0!==i&&""!==i){var p=this.uvs.length;c=this.parseUVIndex(i,p),u=this.parseUVIndex(s,p),m=this.parseUVIndex(a,p),this.addUV(c,u,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";for(var t=this.vertices.length,r=0,i=e.length;r<i;r++){var s=this.parseVertexIndex(e[r],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";for(var r=this.vertices.length,i=this.uvs.length,s=0,a=e.length;s<a;s++)this.addVertexLine(this.parseVertexIndex(e[s],r));for(var o=0,n=t.length;o<n;o++)this.addUVLine(this.parseUVIndex(t[o],i))}};return e.startObject("",!1),e}var I=function(e){function l(t){var r;return(r=e.call(this,t)||this).materials=null,r}t.inheritsLoose(l,e);var p=l.prototype;return p.load=function(e,t,r,s){var a=this,o=new i.FileLoader(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,(function(r){try{t(a.parse(r))}catch(t){s?s(t):console.error(t),a.manager.itemError(e)}}),r,s)},p.setMaterials=function(e){return this.materials=e,this},p.parse=function(e){var t=new A;-1!==e.indexOf("\r\n")&&(e=e.replace(/\r\n/g,"\n")),-1!==e.indexOf("\\\n")&&(e=e.replace(/\\\n/g,""));for(var i=e.split("\n"),l=[],p=0,f=i.length;p<f;p++){var x=i[p].trimStart();if(0!==x.length){var w=x.charAt(0);if("#"!==w)if("v"===w){var V=x.split(j);switch(V[0]){case"v":t.vertices.push(parseFloat(V[1]),parseFloat(V[2]),parseFloat(V[3])),V.length>=7?(F.setRGB(parseFloat(V[4]),parseFloat(V[5]),parseFloat(V[6])).convertSRGBToLinear(),t.colors.push(F.r,F.g,F.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(V[1]),parseFloat(V[2]),parseFloat(V[3]));break;case"vt":t.uvs.push(parseFloat(V[1]),parseFloat(V[2]))}}else if("f"===w){for(var L=x.slice(1).trim().split(j),M=[],I=0,B=L.length;I<B;I++){var P=L[I];if(P.length>0){var z=P.split("/");M.push(z)}}for(var C=M[0],U=1,G=M.length-1;U<G;U++){var _=M[U],E=M[U+1];t.addFace(C[0],_[0],E[0],C[1],_[1],E[1],C[2],_[2],E[2])}}else if("l"===w){var O=x.substring(1).trim().split(" "),S=[],N=[];if(-1===x.indexOf("/"))S=O;else for(var R=0,D=O.length;R<D;R++){var H=O[R].split("/");""!==H[0]&&S.push(H[0]),""!==H[1]&&N.push(H[1])}t.addLineGeometry(S,N)}else if("p"===w){var T=x.slice(1).trim().split(" ");t.addPointGeometry(T)}else if(null!==(l=v.exec(x))){var J=(" "+l[0].slice(1).trim()).slice(1);t.startObject(J)}else if(b.test(x))t.object.startMaterial(x.substring(7).trim(),t.materialLibraries);else if(g.test(x))t.materialLibraries.push(x.substring(7).trim());else if(y.test(x))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if("s"===w){if((l=x.split(" ")).length>1){var k=l[1].trim().toLowerCase();t.object.smooth="0"!==k&&"off"!==k}else t.object.smooth=!0;var q=t.object.currentMaterial();q&&(q.smooth=t.object.smooth)}else{if("\0"===x)continue;console.warn('THREE.OBJLoader: Unexpected line: "'+x+'"')}}}t.finalize();var W=new s.Group;if(W.materialLibraries=[].concat(t.materialLibraries),!0===!(1===t.objects.length&&0===t.objects[0].geometry.vertices.length))for(var K=0,Q=t.objects.length;K<Q;K++){var X=t.objects[K],Y=X.geometry,Z=X.materials,$="Line"===Y.type,ee="Points"===Y.type,te=!1;if(0!==Y.vertices.length){var re=new r.BufferGeometry;re.setAttribute("position",new a.Float32BufferAttribute(Y.vertices,3)),Y.normals.length>0&&re.setAttribute("normal",new a.Float32BufferAttribute(Y.normals,3)),Y.colors.length>0&&(te=!0,re.setAttribute("color",new a.Float32BufferAttribute(Y.colors,3))),!0===Y.hasUVIndices&&re.setAttribute("uv",new a.Float32BufferAttribute(Y.uvs,2));for(var ie=[],se=0,ae=Z.length;se<ae;se++){var oe=Z[se],ne=oe.name+"_"+oe.smooth+"_"+te,le=t.materials[ne];if(null!==this.materials)if(le=this.materials.create(oe.name),!$||!le||le instanceof o.LineBasicMaterial){if(ee&&le&&!(le instanceof d.PointsMaterial)){var he=new d.PointsMaterial({size:10,sizeAttenuation:!1});h.Material.prototype.copy.call(he,le),he.color.copy(le.color),he.map=le.map,le=he}}else{var ce=new o.LineBasicMaterial;h.Material.prototype.copy.call(ce,le),ce.color.copy(le.color),le=ce}void 0===le&&((le=$?new o.LineBasicMaterial:ee?new d.PointsMaterial({size:1,sizeAttenuation:!1}):new u.MeshPhongMaterial).name=oe.name,le.flatShading=!oe.smooth,le.vertexColors=te,t.materials[ne]=le),ie.push(le)}var ue=void 0;if(ie.length>1){for(var me=0,de=Z.length;me<de;me++){var pe=Z[me];re.addGroup(pe.groupStart,pe.groupCount,me)}ue=$?new n.LineSegments(re,ie):ee?new m.Points(re,ie):new c.Mesh(re,ie)}else ue=$?new n.LineSegments(re,ie[0]):ee?new m.Points(re,ie[0]):new c.Mesh(re,ie[0]);ue.name=X.name,W.add(ue)}}else if(t.vertices.length>0){var fe=new d.PointsMaterial({size:1,sizeAttenuation:!1}),ve=new r.BufferGeometry;ve.setAttribute("position",new a.Float32BufferAttribute(t.vertices,3)),t.colors.length>0&&void 0!==t.colors[0]&&(ve.setAttribute("color",new a.Float32BufferAttribute(t.colors,3)),fe.vertexColors=!0);var ge=new m.Points(ve,fe);W.add(ge)}return W},l}(l.Loader);e.OBJLoader=I,Object.defineProperty(e,"__esModule",{value:!0})}));