function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "masterBar/" + s : s.substring(0, index) + "/masterBar/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("masterBar");
    this.__widgetId = "masterBar";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.controlView = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        top: 0,
        left: 0,
        id: "controlView"
    });
    $.__views.controlView && $.addTopLevelView($.__views.controlView);
    $.__views.__alloyId0 = Alloy.createWidget("masterButtons", "widget", {
        id: "__alloyId0",
        __parentSymbol: $.__views.controlView
    });
    $.__views.__alloyId0.setParent($.__views.controlView);
    $.__views.masterVolume = Alloy.createWidget("volume", "widget", {
        id: "masterVolume",
        __parentSymbol: $.__views.controlView
    });
    $.__views.masterVolume.setParent($.__views.controlView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;