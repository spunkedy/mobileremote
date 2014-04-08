function Controller() {
    function saveSettings() {
        Ti.App.Properties.setString("onkyoIP", $.onkyoField.value);
        Ti.App.Properties.setString("rokuIP", $.rokuField.value);
        Alloy.Globals.onkyo = new Reciever(Ti.App.Properties.getString("onkyoIP"), "60128");
        Alloy.Globals.onkyo.connect();
        Alloy.Globals.roku = new Roku(Ti.App.Properties.getString("rokuIP"), "8060");
        alert("Saved Settings");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "settings";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId19 = Ti.UI.createWindow({
        backgroundColor: "#CBCBCB",
        navBarHidden: false,
        title: "Settings",
        id: "__alloyId19"
    });
    $.__views.onkyo = Ti.UI.createLabel({
        color: "black",
        textAlign: "Ti.UI.TEXT_ALIGNMENT_CENTER",
        left: "3%",
        width: "100",
        top: "46",
        id: "onkyo",
        text: "Onkyo IP"
    });
    $.__views.__alloyId19.add($.__views.onkyo);
    $.__views.onkyoField = Ti.UI.createTextField({
        color: "#336699",
        left: "15%",
        width: "75%",
        height: "60",
        top: "26",
        id: "onkyoField",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Onkyo IP"
    });
    $.__views.__alloyId19.add($.__views.onkyoField);
    $.__views.roku = Ti.UI.createLabel({
        color: "black",
        textAlign: "Ti.UI.TEXT_ALIGNMENT_CENTER",
        left: "3%",
        width: "100",
        top: "133",
        id: "roku",
        text: "Roku IP"
    });
    $.__views.__alloyId19.add($.__views.roku);
    $.__views.rokuField = Ti.UI.createTextField({
        color: "#336699",
        left: "15%",
        width: "75%",
        height: "60",
        top: "116",
        id: "rokuField",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Roku IP"
    });
    $.__views.__alloyId19.add($.__views.rokuField);
    $.__views.mythtv = Ti.UI.createLabel({
        color: "black",
        textAlign: "Ti.UI.TEXT_ALIGNMENT_CENTER",
        left: "3%",
        width: "100",
        top: "220",
        id: "mythtv",
        text: "Mythtv IP"
    });
    $.__views.__alloyId19.add($.__views.mythtv);
    $.__views.mythtvField = Ti.UI.createTextField({
        color: "#336699",
        left: "15%",
        width: "75%",
        height: "60",
        top: "206",
        id: "mythtvField",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Roku IP"
    });
    $.__views.__alloyId19.add($.__views.mythtvField);
    $.__views.button = Ti.UI.createButton({
        bottom: "50",
        width: 40,
        height: 40,
        image: "images/submit.png",
        id: "button",
        title: "save"
    });
    $.__views.__alloyId19.add($.__views.button);
    saveSettings ? $.__views.button.addEventListener("click", saveSettings) : __defers["$.__views.button!click!saveSettings"] = true;
    $.__views.settings = Ti.UI.createTab({
        window: $.__views.__alloyId19,
        title: "Settings",
        icon: "images/tabgroup/settings.png",
        id: "settings"
    });
    $.__views.settings && $.addTopLevelView($.__views.settings);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.onkyoField.setValue(Ti.App.Properties.getString("onkyoIP"));
    $.rokuField.setValue(Ti.App.Properties.getString("rokuIP"));
    __defers["$.__views.button!click!saveSettings"] && $.__views.button.addEventListener("click", saveSettings);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;