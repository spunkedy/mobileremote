function Controller() {
    function focused() {
        Alloy.Globals.onkyo.airplay();
        $.masterBar.masterVolume.setVolume();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "airplay";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.airplayWindow = Ti.UI.createWindow({
        backgroundColor: "#CBCBCB",
        navBarHidden: true,
        fullscreen: true,
        modal: false,
        title: "Airplay",
        id: "airplayWindow"
    });
    $.__views.masterBar = Alloy.createWidget("masterBar", "widget", {
        id: "masterBar",
        __parentSymbol: $.__views.airplayWindow
    });
    $.__views.masterBar.setParent($.__views.airplayWindow);
    $.__views.airplay = Ti.UI.createTab({
        window: $.__views.airplayWindow,
        title: "Airplay",
        icon: "images/tabgroup/airplay.png",
        id: "airplay"
    });
    $.__views.airplay && $.addTopLevelView($.__views.airplay);
    focused ? $.__views.airplay.addEventListener("focus", focused) : __defers["$.__views.airplay!focus!focused"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.airplay!focus!focused"] && $.__views.airplay.addEventListener("focus", focused);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;