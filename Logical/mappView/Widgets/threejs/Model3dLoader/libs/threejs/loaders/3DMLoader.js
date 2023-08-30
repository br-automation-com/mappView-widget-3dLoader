/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","./BufferGeometryLoader","./FileLoader","./Loader","../core/Object3D","../materials/SpriteMaterial","../materials/PointsMaterial","../materials/MeshStandardMaterial","../materials/LineBasicMaterial","../objects/Mesh","../math/Color","../objects/Points","../objects/Line","../math/Matrix4","../lights/DirectionalLight","../lights/PointLight","../lights/SpotLight","../lights/RectAreaLight","../math/Vector3","../objects/Sprite","../textures/CanvasTexture","../constants","./TextureLoader"],(function(e,t,r,a,o,n,i,s,c,l,u,p,d,h,g,y,f,m,b,v,w,T,x,P){"use strict";var k=new WeakMap,S=function(e){function o(t){var r;return(r=e.call(this,t)||this).libraryPath="",r.libraryPending=null,r.libraryBinary=null,r.libraryConfig={},r.url="",r.workerLimit=4,r.workerPool=[],r.workerNextTaskID=1,r.workerSourceURL="",r.workerConfig={},r.materials=[],r.warnings=[],r}t.inheritsLoose(o,e);var S=o.prototype;return S.setLibraryPath=function(e){return this.libraryPath=e,this},S.setWorkerLimit=function(e){return this.workerLimit=e,this},S.load=function(e,t,r,o){var n=this,i=new a.FileLoader(this.manager);i.setPath(this.path),i.setResponseType("arraybuffer"),i.setRequestHeader(this.requestHeader),this.url=e,i.load(e,(function(r){if(k.has(r))return k.get(r).promise.then(t).catch(o);n.decodeObjects(r,e).then((function(e){e.userData.warnings=n.warnings,t(e)})).catch((function(e){return o(e)}))}),r,o)},S.debug=function(){console.log("Task load: ",this.workerPool.map((function(e){return e._taskLoad})))},S.decodeObjects=function(e,t){var r,a,o=this,n=e.byteLength,i=this._getWorker(n).then((function(t){return r=t,a=o.workerNextTaskID++,new Promise((function(t,o){r._callbacks[a]={resolve:t,reject:o},r.postMessage({type:"decode",id:a,buffer:e},[e])}))})).then((function(e){return o._createGeometry(e.data)})).catch((function(e){throw e}));return i.catch((function(){return!0})).then((function(){r&&a&&o._releaseTask(r,a)})),k.set(e,{url:t,promise:i}),i},S.parse=function(e,t,r){var a=this;this.decodeObjects(e,"").then((function(e){e.userData.warnings=a.warnings,t(e)})).catch((function(e){return r(e)}))},S._compareMaterials=function(e){var t={};t.name=e.name,t.color={},t.color.r=e.color.r,t.color.g=e.color.g,t.color.b=e.color.b,t.type=e.type;for(var r=0;r<this.materials.length;r++){var a=this.materials[r],o={};if(o.name=a.name,o.color={},o.color.r=a.color.r,o.color.g=a.color.g,o.color.b=a.color.b,o.type=a.type,JSON.stringify(t)===JSON.stringify(o))return a}return this.materials.push(e),e},S._createMaterial=function(e){if(void 0===e)return new c.MeshStandardMaterial({color:new p.Color(1,1,1),metalness:.8,name:"default",side:2});var t=e.diffuseColor,r=new p.Color(t.r/255,t.g/255,t.b/255);0===t.r&&0===t.g&&0===t.b&&(r.r=1,r.g=1,r.b=1);for(var a=new c.MeshStandardMaterial({color:r,name:e.name,side:2,transparent:e.transparency>0,opacity:1-e.transparency}),o=new P.TextureLoader,n=0;n<e.textures.length;n++){var i=e.textures[n];if(null!==i.image){var s=o.load(i.image);switch(i.type){case"Diffuse":a.map=s;break;case"Bump":a.bumpMap=s;break;case"Transparency":a.alphaMap=s,a.transparent=!0;break;case"Emap":a.envMap=s}s.wrapS=0===i.wrapU?x.RepeatWrapping:x.ClampToEdgeWrapping,s.wrapT=0===i.wrapV?x.RepeatWrapping:x.ClampToEdgeWrapping,s.repeat.set(i.repeat[0],i.repeat[1])}}return a},S._createGeometry=function(e){var t=new n.Object3D,r=[],a=[],o=[];t.userData.layers=e.layers,t.userData.groups=e.groups,t.userData.settings=e.settings,t.userData.objectType="File3dm",t.userData.materials=null,t.name=this.url;for(var i=e.objects,s=e.materials,c=0;c<i.length;c++){var l=i[c],u=l.attributes;switch(l.objectType){case"InstanceDefinition":a.push(l);break;case"InstanceReference":o.push(l);break;default:var p=void 0;if(u.materialIndex>=0){var d=s[u.materialIndex],h=this._createMaterial(d);h=this._compareMaterials(h),p=this._createObject(l,h)}else{var y=this._createMaterial();p=this._createObject(l,y)}if(void 0===p)continue;var f=e.layers[u.layerIndex];p.visible=!f||e.layers[u.layerIndex].visible,u.isInstanceDefinitionObject?r.push(p):t.add(p)}}for(var m=0;m<a.length;m++){var b=a[m];i=[];for(var v=0;v<b.attributes.objectIds.length;v++)for(var w=b.attributes.objectIds[v],T=0;T<r.length;T++){w===r[T].userData.attributes.id&&i.push(r[T])}for(var x=0;x<o.length;x++){var P=o[x];if(P.geometry.parentIdefId===b.attributes.id){var k=new n.Object3D,S=P.geometry.xform.array,_=new g.Matrix4;_.set(S[0],S[1],S[2],S[3],S[4],S[5],S[6],S[7],S[8],S[9],S[10],S[11],S[12],S[13],S[14],S[15]),k.applyMatrix4(_);for(var M=0;M<i.length;M++)k.add(i[M].clone(!0));t.add(k)}}}return t.userData.materials=this.materials,t},S._createObject=function(e,t){var a,o,n,c,g=new r.BufferGeometryLoader,P=e.attributes;switch(e.objectType){case"Point":case"PointSet":(a=g.parse(e.geometry)).attributes.hasOwnProperty("color")?o=new s.PointsMaterial({vertexColors:!0,sizeAttenuation:!1,size:2}):(n=P.drawColor,c=new p.Color(n.r/255,n.g/255,n.b/255),o=new s.PointsMaterial({color:c,sizeAttenuation:!1,size:2})),o=this._compareMaterials(o);var k=new d.Points(a,o);return k.userData.attributes=P,k.userData.objectType=e.objectType,P.name&&(k.name=P.name),k;case"Mesh":case"Extrusion":case"SubD":case"Brep":if(null===e.geometry)return;(a=g.parse(e.geometry)).attributes.hasOwnProperty("color")&&(t.vertexColors=!0),null===t&&(t=this._createMaterial(),t=this._compareMaterials(t));var S=new u.Mesh(a,t);return S.castShadow=P.castsShadows,S.receiveShadow=P.receivesShadows,S.userData.attributes=P,S.userData.objectType=e.objectType,P.name&&(S.name=P.name),S;case"Curve":a=g.parse(e.geometry),n=P.drawColor,c=new p.Color(n.r/255,n.g/255,n.b/255),o=new l.LineBasicMaterial({color:c}),o=this._compareMaterials(o);var _=new h.Line(a,o);return _.userData.attributes=P,_.userData.objectType=e.objectType,P.name&&(_.name=P.name),_;case"TextDot":a=e.geometry;var M=document.createElement("canvas").getContext("2d"),j=a.fontHeight+"px "+a.fontFace;M.font=j;var L=M.measureText(a.text).width+10,R=a.fontHeight+10,C=window.devicePixelRatio;M.canvas.width=L*C,M.canvas.height=R*C,M.canvas.style.width=L+"px",M.canvas.style.height=R+"px",M.setTransform(C,0,0,C,0,0),M.font=j,M.textBaseline="middle",M.textAlign="center",c=P.drawColor,M.fillStyle="rgba("+c.r+","+c.g+","+c.b+","+c.a+")",M.fillRect(0,0,L,R),M.fillStyle="white",M.fillText(a.text,L/2,R/2);var B=new T.CanvasTexture(M.canvas);B.minFilter=x.LinearFilter,B.wrapS=x.ClampToEdgeWrapping,B.wrapT=x.ClampToEdgeWrapping,o=new i.SpriteMaterial({map:B,depthTest:!1});var D=new w.Sprite(o);return D.position.set(a.point[0],a.point[1],a.point[2]),D.scale.set(L/10,R/10,1),D.userData.attributes=P,D.userData.objectType=e.objectType,P.name&&(D.name=P.name),D;case"Light":var O;switch((a=e.geometry).lightStyle.name){case"LightStyle_WorldPoint":(O=new f.PointLight).castShadow=P.castsShadows,O.position.set(a.location[0],a.location[1],a.location[2]),O.shadow.normalBias=.1;break;case"LightStyle_WorldSpot":(O=new m.SpotLight).castShadow=P.castsShadows,O.position.set(a.location[0],a.location[1],a.location[2]),O.target.position.set(a.direction[0],a.direction[1],a.direction[2]),O.angle=a.spotAngleRadians,O.shadow.normalBias=.1;break;case"LightStyle_WorldRectangular":O=new b.RectAreaLight;var A=Math.abs(a.width[2]),E=Math.abs(a.length[0]);O.position.set(a.location[0]-E/2,a.location[1],a.location[2]-A/2),O.height=E,O.width=A,O.lookAt(new v.Vector3(a.direction[0],a.direction[1],a.direction[2]));break;case"LightStyle_WorldDirectional":(O=new y.DirectionalLight).castShadow=P.castsShadows,O.position.set(a.location[0],a.location[1],a.location[2]),O.target.position.set(a.direction[0],a.direction[1],a.direction[2]),O.shadow.normalBias=.1}return O&&(O.intensity=a.intensity,n=a.diffuse,c=new p.Color(n.r/255,n.g/255,n.b/255),O.color=c,O.userData.attributes=P,O.userData.objectType=e.objectType),O}},S._initLibrary=function(){var e=this;if(!this.libraryPending){var t=new a.FileLoader(this.manager);t.setPath(this.libraryPath);var r=new Promise((function(e,r){t.load("rhino3dm.js",e,void 0,r)})),o=new a.FileLoader(this.manager);o.setPath(this.libraryPath),o.setResponseType("arraybuffer");var n=new Promise((function(e,t){o.load("rhino3dm.wasm",e,void 0,t)}));this.libraryPending=Promise.all([r,n]).then((function(t){var r=t[0],a=t[1];e.libraryConfig.wasmBinary=a;var o=_.toString(),n=["/* rhino3dm.js */",r,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join("\n");e.workerSourceURL=URL.createObjectURL(new Blob([n]))}))}return this.libraryPending},S._getWorker=function(e){var t=this;return this._initLibrary().then((function(){if(t.workerPool.length<t.workerLimit){var r=new Worker(t.workerSourceURL);r._callbacks={},r._taskCosts={},r._taskLoad=0,r.postMessage({type:"init",libraryConfig:t.libraryConfig}),r.onmessage=function(e){var a=e.data;switch(a.type){case"warning":t.warnings.push(a.data),console.warn(a.data);break;case"decode":r._callbacks[a.id].resolve(a);break;case"error":r._callbacks[a.id].reject(a);break;default:console.error('THREE.Rhino3dmLoader: Unexpected message, "'+a.type+'"')}},t.workerPool.push(r)}else t.workerPool.sort((function(e,t){return e._taskLoad>t._taskLoad?-1:1}));var a=t.workerPool[t.workerPool.length-1];return a._taskLoad+=e,a}))},S._releaseTask=function(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]},S.dispose=function(){for(var e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this},o}(o.Loader);function _(){var e,t,r;function a(e,a){var i,s,c,l,u,p=e.geometry(),d=e.attributes(),h=p.objectType;switch(h){case t.ObjectType.Curve:var g=n(p,100);s={},l={},(c={}).itemSize=3,c.type="Float32Array",c.array=[];for(var y=0;y<g.length;y++)c.array.push(g[y][0]),c.array.push(g[y][1]),c.array.push(g[y][2]);s.position=c,l.attributes=s,i={data:l};break;case t.ObjectType.Point:var f=p.location,m={};s={},l={},(c={}).itemSize=3,c.type="Float32Array",c.array=[f[0],f[1],f[2]];var b=d.drawColor(a);m.itemSize=3,m.type="Float32Array",m.array=[b.r/255,b.g/255,b.b/255],s.position=c,s.color=m,l.attributes=s,i={data:l};break;case t.ObjectType.PointSet:case t.ObjectType.Mesh:i=p.toThreejsJSON();break;case t.ObjectType.Brep:var v=p.faces();u=new t.Mesh;for(var w=0;w<v.count;w++){var T=v.get(w),x=T.getMesh(t.MeshType.Any);x&&(u.append(x),x.delete()),T.delete()}u.faces().count>0&&(u.compact(),i=u.toThreejsJSON(),v.delete()),u.delete();break;case t.ObjectType.Extrusion:(u=p.getMesh(t.MeshType.Any))&&(i=u.toThreejsJSON(),u.delete());break;case t.ObjectType.TextDot:i=o(p);break;case t.ObjectType.Light:"LightStyle_WorldLinear"===(i=o(p)).lightStyle.name&&self.postMessage({type:"warning",id:r,data:{message:"THREE.3DMLoader: No conversion exists for "+h.constructor.name+" "+i.lightStyle.name,type:"no conversion",guid:d.id}});break;case t.ObjectType.InstanceReference:(i=o(p)).xform=o(p.xform),i.xform.array=p.xform.toFloatArray(!0);break;case t.ObjectType.SubD:p.subdivide(3),(u=t.Mesh.createFromSubDControlNet(p))&&(i=u.toThreejsJSON(),u.delete());break;default:self.postMessage({type:"warning",id:r,data:{message:"THREE.3DMLoader: Conversion not implemented for "+h.constructor.name,type:"not implemented",guid:d.id}})}if(i)return(s=o(d)).geometry=o(p),d.groupCount>0&&(s.groupIds=d.getGroupList()),d.userStringCount>0&&(s.userStrings=d.getUserStrings()),p.userStringCount>0&&(s.geometry.userStrings=p.getUserStrings()),s.drawColor=d.drawColor(a),{geometry:i,attributes:s,objectType:h=(h=h.constructor.name).substring(11,h.length)};self.postMessage({type:"warning",id:r,data:{message:"THREE.3DMLoader: "+h.constructor.name+" has no associated mesh geometry.",type:"missing mesh",guid:d.id}})}function o(e){var t={};for(var r in e){var a=e[r];"function"!=typeof a&&("object"==typeof a&&null!==a&&a.hasOwnProperty("constructor")?t[r]={name:a.constructor.name,value:a.value}:t[r]=a)}return t}function n(e,r){var a=r,o=[],i=[];if(e instanceof t.LineCurve)return[e.pointAtStart,e.pointAtEnd];if(e instanceof t.PolylineCurve){a=e.pointCount;for(var s=0;s<a;s++)o.push(e.point(s));return o}if(e instanceof t.PolyCurve){for(var c=e.segmentCount,l=0;l<c;l++){var u=e.segmentCurve(l),p=n(u,a);o=o.concat(p),u.delete()}return o}if(e instanceof t.ArcCurve&&(a=(a=Math.floor(e.angleDegrees/5))<2?2:a),e instanceof t.NurbsCurve&&1===e.degree){for(var d=e.tryGetPolyline(),h=0;h<d.count;h++)o.push(d.get(h));return d.delete(),o}for(var g=e.domain,y=a-1,f=0;f<a;f++){var m=g[0]+f/y*(g[1]-g[0]);if(m!==g[0]&&m!==g[1]){var b=e.tangentAt(m),v=e.tangentAt(i.slice(-1)[0]),w=b[0]*b[0]+b[1]*b[1]+b[2]*b[2],T=v[0]*v[0]+v[1]*v[1]+v[2]*v[2],x=Math.sqrt(w*T),P=void 0;if(0===x)P=Math.PI/2;else{var k=(b.x*v.x+b.y*v.y+b.z*v.z)/x;P=Math.acos(Math.max(-1,Math.min(1,k)))}P<.1||i.push(m)}else i.push(m)}return o=i.map((function(t){return e.pointAt(t)})),o}onmessage=function(n){var i=n.data;switch(i.type){case"init":var s,c=i.libraryConfig.wasmBinary;e=new Promise((function(e){s={wasmBinary:c,onRuntimeInitialized:e},rhino3dm(s)})).then((function(){t=s}));break;case"decode":r=i.id;var l=i.buffer;e.then((function(){try{var e=function(e,t){for(var n=new Uint8Array(t),i=e.File3dm.fromByteArray(n),s=[],c=[],l=[],u=[],p=[],d=[],h=[],g=i.objects(),y=g.count,f=0;f<y;f++){var m=g.get(f),b=a(m,i);m.delete(),b&&s.push(b)}for(var v=0;v<i.instanceDefinitions().count();v++){var w=i.instanceDefinitions().get(v),T=o(w);T.objectIds=w.getObjectIds(),s.push({geometry:null,attributes:T,objectType:"InstanceDefinition"})}for(var x=[e.TextureType.Diffuse,e.TextureType.Bump,e.TextureType.Transparency,e.TextureType.Opacity,e.TextureType.Emap],P=[e.TextureType.PBR_BaseColor,e.TextureType.PBR_Subsurface,e.TextureType.PBR_SubsurfaceScattering,e.TextureType.PBR_SubsurfaceScatteringRadius,e.TextureType.PBR_Metallic,e.TextureType.PBR_Specular,e.TextureType.PBR_SpecularTint,e.TextureType.PBR_Roughness,e.TextureType.PBR_Anisotropic,e.TextureType.PBR_Anisotropic_Rotation,e.TextureType.PBR_Sheen,e.TextureType.PBR_SheenTint,e.TextureType.PBR_Clearcoat,e.TextureType.PBR_ClearcoatBump,e.TextureType.PBR_ClearcoatRoughness,e.TextureType.PBR_OpacityIor,e.TextureType.PBR_OpacityRoughness,e.TextureType.PBR_Emission,e.TextureType.PBR_AmbientOcclusion,e.TextureType.PBR_Displacement],k=0;k<i.materials().count();k++){for(var S=i.materials().get(k),_=S.physicallyBased(),M=o(S),j=[],L=0;L<x.length;L++){var R=S.getTexture(x[L]);if(R){var C=x[L].constructor.name,B={type:C=C.substring(12,C.length)},D=i.getEmbeddedFileAsBase64(R.fileName);B.wrapU=R.wrapU,B.wrapV=R.wrapV,B.wrapW=R.wrapW;var O=R.uvwTransform.toFloatArray(!0);B.repeat=[O[0],O[5]],D?B.image="data:image/png;base64,"+D:(self.postMessage({type:"warning",id:r,data:{message:"THREE.3DMLoader: Image for "+C+" texture not embedded in file.",type:"missing resource"}}),B.image=null),j.push(B),R.delete()}}if(M.textures=j,_.supported){for(var A=0;A<P.length;A++){var E=S.getTexture(P[A]);if(E){var I=i.getEmbeddedFileAsBase64(E.fileName),W=P[A].constructor.name,F={type:W=W.substring(12,W.length),image:"data:image/png;base64,"+I};j.push(F),E.delete()}}var N=o(S.physicallyBased());M=Object.assign(N,M)}c.push(M),S.delete(),_.delete()}for(var U=0;U<i.layers().count();U++){var z=i.layers().get(U),H=o(z);l.push(H),z.delete()}for(var V=0;V<i.views().count();V++){var G=i.views().get(V),J=o(G);u.push(J),G.delete()}for(var q=0;q<i.namedViews().count();q++){var K=i.namedViews().get(q),Q=o(K);p.push(Q),K.delete()}for(var X=0;X<i.groups().count();X++){var Y=i.groups().get(X),Z=o(Y);d.push(Z),Y.delete()}for(var $=o(i.settings()),ee=i.strings().count(),te=0;te<ee;te++)h.push(i.strings().get(te));return i.delete(),{objects:s,materials:c,layers:l,views:u,namedViews:p,groups:d,strings:h,settings:$}}(t,l);self.postMessage({type:"decode",id:i.id,data:e})}catch(e){self.postMessage({type:"error",id:i.id,error:e})}}))}}}e.Rhino3dmLoader=S,Object.defineProperty(e,"__esModule",{value:!0})}));