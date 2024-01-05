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
                    self.widget.el.css('top', parseInt(newBox.top, 10))
                        .css('left', parseInt(newBox.left, 10))
                        .css('width', parseInt(newBox.width, 10))
                        .css('height', parseInt(newBox.height, 10));
                    self.widget._setWidth(newBox.width);
                    self.widget._setHeight(newBox.height);
                    self.widget.onWindowResize();
                    self.widget.render();
                },
                finish: function () {
                    return self.boxSize;
                },
                handle: function () {
                    self.widget.onWindowResize();
                    self.widget.render();
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
