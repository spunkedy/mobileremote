function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId4 = [];
    $.__views.__alloyId5 = Alloy.createController("airplay", {
        id: "__alloyId5"
    });
    __alloyId4.push($.__views.__alloyId5.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId7 = Alloy.createController("computer", {
        id: "__alloyId7"
    });
    __alloyId4.push($.__views.__alloyId7.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId9 = Alloy.createController("ps4", {
        id: "__alloyId9"
    });
    __alloyId4.push($.__views.__alloyId9.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId11 = Alloy.createController("roku", {
        id: "__alloyId11"
    });
    __alloyId4.push($.__views.__alloyId11.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId13 = Alloy.createController("settings", {
        id: "__alloyId13"
    });
    __alloyId4.push($.__views.__alloyId13.getViewEx({
        recurse: true
    }));
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId4,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.orientationModes = [ Ti.UI.LANDSCAPE_LEFT ];
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;