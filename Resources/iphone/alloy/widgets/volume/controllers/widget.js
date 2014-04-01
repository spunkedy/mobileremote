function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "volume/" + s : s.substring(0, index) + "/volume/" + s.substring(index + 1);
    return path;
}

function Controller() {
    function setVolume() {
        Alloy.Globals.onkyo.setVolume($.volumeSlider.value);
    }
    function muteTrigger() {
        if (0 != previousVolume) {
            $.volumeSlider.value = previousVolume;
            previousVolume = 0;
        } else {
            previousVolume = $.volumeSlider.value;
            $.volumeSlider.value = 0;
        }
        Alloy.Globals.onkyo.setVolume($.volumeSlider.value);
    }
    new (require("alloy/widget"))("volume");
    this.__widgetId = "volume";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.volumeSlider = Ti.UI.createSlider({
        top: "55",
        left: "4%",
        width: "80%",
        id: "volumeSlider",
        min: "0",
        max: "82",
        value: "50"
    });
    $.__views.volumeSlider && $.addTopLevelView($.__views.volumeSlider);
    setVolume ? $.__views.volumeSlider.addEventListener("stop", setVolume) : __defers["$.__views.volumeSlider!stop!setVolume"] = true;
    $.__views.muteButton = Ti.UI.createImageView({
        image: "/images/volume/mute.png",
        height: "32",
        width: "32",
        top: "56",
        left: "85%",
        id: "muteButton"
    });
    $.__views.muteButton && $.addTopLevelView($.__views.muteButton);
    muteTrigger ? $.__views.muteButton.addEventListener("click", muteTrigger) : __defers["$.__views.muteButton!click!muteTrigger"] = true;
    $.__views.volumeLabel = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: "100%",
        id: "volumeLabel",
        top: "30",
        left: "0"
    });
    $.__views.volumeLabel && $.addTopLevelView($.__views.volumeLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var previousVolume = 0;
    exports.setVolume = function() {
        setVolume();
    };
    __defers["$.__views.volumeSlider!stop!setVolume"] && $.__views.volumeSlider.addEventListener("stop", setVolume);
    __defers["$.__views.muteButton!click!muteTrigger"] && $.__views.muteButton.addEventListener("click", muteTrigger);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;