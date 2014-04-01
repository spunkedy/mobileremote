function Controller() {
    function focused() {
        Alloy.Globals.onkyo.roku();
        $.masterBar.masterVolume.setVolume();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "roku";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId16 = Ti.UI.createWindow({
        backgroundColor: "#CBCBCB",
        navBarHidden: true,
        fullscreen: true,
        title: "Roku",
        id: "__alloyId16"
    });
    $.__views.masterBar = Alloy.createWidget("masterBar", "widget", {
        id: "masterBar",
        __parentSymbol: $.__views.__alloyId16
    });
    $.__views.masterBar.setParent($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        text: "roku",
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    $.__views.roku = Ti.UI.createTab({
        window: $.__views.__alloyId16,
        title: "Roku",
        icon: "images/tabgroup/roku.png",
        id: "roku"
    });
    $.__views.roku && $.addTopLevelView($.__views.roku);
    focused ? $.__views.roku.addEventListener("focus", focused) : __defers["$.__views.roku!focus!focused"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.roku!focus!focused"] && $.__views.roku.addEventListener("focus", focused);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;