function Controller() {
    function focused() {
        Alloy.Globals.onkyo.playstation();
        $.masterBar.masterVolume.setVolume();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "ps4";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId14 = Ti.UI.createWindow({
        backgroundColor: "#CBCBCB",
        navBarHidden: true,
        fullscreen: true,
        title: "PS4",
        id: "__alloyId14"
    });
    $.__views.masterBar = Alloy.createWidget("masterBar", "widget", {
        id: "masterBar",
        __parentSymbol: $.__views.__alloyId14
    });
    $.__views.masterBar.setParent($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        text: "Ps4",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.ps4 = Ti.UI.createTab({
        window: $.__views.__alloyId14,
        title: "PS4",
        icon: "images/tabgroup/playstation.png",
        id: "ps4"
    });
    $.__views.ps4 && $.addTopLevelView($.__views.ps4);
    focused ? $.__views.ps4.addEventListener("focus", focused) : __defers["$.__views.ps4!focus!focused"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.ps4!focus!focused"] && $.__views.ps4.addEventListener("focus", focused);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;