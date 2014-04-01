function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "settings";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId18 = Ti.UI.createWindow({
        backgroundColor: "#CBCBCB",
        navBarHidden: false,
        title: "Settings",
        id: "__alloyId18"
    });
    $.__views.__alloyId19 = Ti.UI.createLabel({
        text: "settings",
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.settings = Ti.UI.createTab({
        window: $.__views.__alloyId18,
        title: "Settings",
        icon: "images/tabgroup/settings.png",
        id: "settings"
    });
    $.__views.settings && $.addTopLevelView($.__views.settings);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;