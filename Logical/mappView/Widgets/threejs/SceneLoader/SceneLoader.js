define(['brease/core/BaseWidget',
    'brease/events/BreaseEvent',
    'brease/decorators/DragAndDropCapability',
    'widgets/brease/common/DragDropProperties/libs/DraggablePropertiesEvents',
    'widgets/brease/common/DragDropProperties/libs/DroppablePropertiesEvents',
], function (SuperClass, BreaseEvent, dragAndDropCapability) {

    'use strict';

    /**
     * @class widgets.brease.SceneLoader
     * #Description
     * Widget for displaying an SceneLoader
     * @breaseNote 
     * @extends brease.core.BaseWidget
     *
     * @mixins widgets.brease.common.DragDropProperties.libs.DraggablePropertiesEvents
     * @mixins widgets.brease.common.DragDropProperties.libs.DroppablePropertiesEvents
     *
     * @iatMeta category:Category
     * Drawing
     * @iatMeta description:short
     * Grafikobjekt
     * @iatMeta description:de
     * Zeichnet ein Quadrat oder Rechteck
     * @iatMeta description:en
     *  SceneLoader
     */

    /**
     * @cfg {String} tooltip=''
     * @iatStudioExposed
     * @hide
     */

    /**
     * @method showTooltip
     * @hide
     */

    var defaultSettings = {},

        WidgetClass = SuperClass.extend(function SceneLoader() {
            SuperClass.apply(this, arguments);
        }, defaultSettings),

        p = WidgetClass.prototype;

    var self;

    

    p.init = function () {
        self = this;

        this.el.addClass('SceneLoader');

        SuperClass.prototype.init.apply(this, arguments);
    };


    return dragAndDropCapability.decorate(WidgetClass, false);

});
