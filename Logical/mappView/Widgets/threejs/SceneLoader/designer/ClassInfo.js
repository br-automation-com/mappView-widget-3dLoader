define(["brease/core/designer/BaseWidget/ClassInfo"], function (s, e) {
    "use strict";
    var classInfo = {
    meta: { 
        className: "widgets.threejs.SceneLoader", 
        parents: ["*"], 
        children: [], 
        inheritance: [
            "widgets.threejs.SceneLoader", 
            "brease.core.BaseWidget"
        ], 
        actions: { 
            "Focus": { 
                "method": "focus" 
            }, 
            "setEditable": { 
                "method": "setEditable", 
                "parameter": { 
                    "editable": { 
                        "name": "editable", 
                        "index": 0, 
                        "type": "Boolean" 
                    }, 
                    "metaData": { 
                        "name": "metaData", 
                        "index": 1, 
                        "type": "Object" 
                    } 
                } 
            }, 
            "SetEnable": { 
                "method": "setEnable",
                "parameter": { 
                    "value": { 
                        "name": "value", 
                        "index": 0, 
                        "type": "Boolean" 
                    } 
                } 
            }, 
            "setParentCoWiId": { 
                "method": "setParentCoWiId", 
                "parameter": { 
                    "value": { 
                        "name": "value", 
                        "index": 0, 
                        "type": "String" 
                    } 
                } 
            }, 
            "SetStyle": { 
                "method": "setStyle", 
                "parameter": { 
                    "value": { 
                        "name": "value", 
                        "index": 0, 
                        "type": "StyleReference" 
                    } 
                } 
            }, 
            "setTabIndex": { 
                "method": "setTabIndex", 
                "parameter": { 
                    "value": { 
                        "name": "value", 
                        "index": 0, 
                        "type": "Number" 
                    } 
                } 
            }, 
            "SetVisible": { 
                "method": "setVisible", 
                "parameter": { 
                    "value": { 
                        "name": "value", 
                        "index": 0, 
                        "type": "Boolean" 
                    } 
                } 
            }
        }, 
        properties: {} 
    } 
};
if (s.classExtension) {
    classInfo.classExtension = s.classExtension; 
} 
if (e) {
    classInfo.classExtension = e; 
} 
return classInfo; 
});
