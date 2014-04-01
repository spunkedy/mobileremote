function Controller() {
    function focused() {
        Alloy.Globals.onkyo.computer();
        $.masterBar.masterVolume.setVolume();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "computer";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId1 = Ti.UI.createWindow({
        backgroundColor: "#CBCBCB",
        navBarHidden: true,
        fullscreen: true,
        title: "Computer",
        id: "__alloyId1"
    });
    $.__views.masterBar = Alloy.createWidget("masterBar", "widget", {
        id: "masterBar",
        __parentSymbol: $.__views.__alloyId1
    });
    $.__views.masterBar.setParent($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        text: "computer",
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    $.__views.computer = Ti.UI.createTab({
        window: $.__views.__alloyId1,
        title: "Computer",
        icon: "images/tabgroup/computer.png",
        id: "computer"
    });
    $.__views.computer && $.addTopLevelView($.__views.computer);
    focused ? $.__views.computer.addEventListener("focus", focused) : __defers["$.__views.computer!focus!focused"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.computer!focus!focused"] && $.__views.computer.addEventListener("focus", focused);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;