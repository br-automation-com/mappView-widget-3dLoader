/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
define(["exports","../_virtual/_rollupPluginBabelHelpers","../core/Object3D"],(function(e,t,n){"use strict";var o=function(e){function n(){var n;return(n=e.call(this)||this).isScene=!0,n.type="Scene",n.background=null,n.environment=null,n.fog=null,n.overrideMaterial=null,n.autoUpdate=!0,"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:t.assertThisInitialized(n)})),n}t.inheritsLoose(n,e);var o=n.prototype;return o.copy=function(t,n){return e.prototype.copy.call(this,t,n),null!==t.background&&(this.background=t.background.clone()),null!==t.environment&&(this.environment=t.environment.clone()),null!==t.fog&&(this.fog=t.fog.clone()),null!==t.overrideMaterial&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this},o.toJSON=function(t){var n=e.prototype.toJSON.call(this,t);return null!==this.fog&&(n.object.fog=this.fog.toJSON()),n},n}(n.Object3D);e.Scene=o,Object.defineProperty(e,"__esModule",{value:!0})}));
