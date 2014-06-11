function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "masterButtons/" + s : s.substring(0, index) + "/masterButtons/" + s.substring(index + 1);
    return path;
}

function Controller() {
    function onButton() {
        Alloy.Globals.IRBlastOn();
        Alloy.Globals.onkyo.on();
    }
    function offButton() {
        Alloy.Globals.IRBlastOff();
        Alloy.Globals.onkyo.off();
    }
    new (require("alloy/widget"))("masterButtons");
    this.__widgetId = "masterButtons";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.buttonHoler = Ti.UI.createView({
        top: 0,
        left: 0,
        layout: "horizontal",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "buttonHoler"
    });
    $.__views.buttonHoler && $.addTopLevelView($.__views.buttonHoler);
    $.__views.onButton = Ti.UI.createButton({
        left: "20dp",
        backgroundImage: "/images/masterButtons/on.png",
        height: "96",
        width: "96",
        id: "onButton"
    });
    $.__views.buttonHoler.add($.__views.onButton);
    onButton ? $.__views.onButton.addEventListener("click", onButton) : __defers["$.__views.onButton!click!onButton"] = true;
    $.__views.offButton = Ti.UI.createButton({
        backgroundImage: "/images/masterButtons/off.png",
        left: "20dp",
        height: "96",
        width: "96",
        id: "offButton"
    });
    $.__views.buttonHoler.add($.__views.offButton);
    offButton ? $.__views.offButton.addEventListener("click", offButton) : __defers["$.__views.offButton!click!offButton"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.onButton!click!onButton"] && $.__views.onButton.addEventListener("click", onButton);
    __defers["$.__views.offButton!click!offButton"] && $.__views.offButton.addEventListener("click", offButton);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;