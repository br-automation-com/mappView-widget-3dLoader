define([
    'brease/core/Class'
], function (SuperClass) {

    'use strict';

    var ModuleClass = SuperClass.extend(function EditorHandles(widget) {
            SuperClass.call(this);
            this.widget = widget;
            this.boxSize = {};
        }, null),

        p = ModuleClass.prototype;

    p.getHandles = function () {

        var self = this;
        return {
            moveHandles: undefined, /* use default*/
            pointHandles: [],
            resizeHandles: [{
                start: function () {
                },
                update: function (newBox) {
                    self.boxSize = newBox;
                },
                finish: function () {
                    return self.boxSize;
                },
                handle: function () {
                    return self.widget.elem;
                }
            }]
        };
    };

    p.getSelectionDecoratables = function () {
        return [this.widget.elem];
    };

    return ModuleClass;

});
