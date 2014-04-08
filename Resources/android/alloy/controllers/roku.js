function Controller() {
    function focused() {
        Alloy.Globals.onkyo.roku();
        $.masterBar.masterVolume.setVolume();
        updateApplications();
    }
    function updateApplications() {
        Alloy.Globals.roku.loadApplications(function(response) {
            var doc = Ti.XML.parseString(response);
            var results = doc.getElementsByTagName("app");
            var arr = [];
            Ti.API.info("Looping through applications");
            var data = [];
            for (var i = 0; results.length > i; i++) {
                arr[i] = results.item(i).text;
                Ti.API.info("Id: " + results.item(i).attributes.getNamedItem("id").nodeValue + " - Text - " + results.item(i).text);
                data.push({
                    properties: {
                        itemId: results.item(i).attributes.getNamedItem("id").nodeValue,
                        title: results.item(i).text,
                        accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE,
                        color: "black"
                    }
                });
            }
            $.applicationsList.setItems(data);
        });
    }
    function back() {
        Alloy.Globals.roku.back();
    }
    function home() {
        Alloy.Globals.roku.home();
    }
    function up() {
        Alloy.Globals.roku.up();
    }
    function down() {
        Alloy.Globals.roku.down();
    }
    function left() {
        Alloy.Globals.roku.left();
    }
    function right() {
        Alloy.Globals.roku.right();
    }
    function replay() {
        Alloy.Globals.roku.instantReplay();
    }
    function select() {
        Alloy.Globals.roku.select();
    }
    function rewind() {
        Alloy.Globals.roku.rev();
    }
    function play() {
        Alloy.Globals.roku.play();
    }
    function fastforward() {
        Alloy.Globals.roku.fwd();
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
    $.__views.applicationsList = Ti.UI.createListSection({
        id: "applicationsList"
    });
    var __alloyId18 = [];
    __alloyId18.push($.__views.applicationsList);
    $.__views.applicationListView = Ti.UI.createListView({
        height: "30%",
        width: "30%",
        left: "4%",
        top: "30%",
        sections: __alloyId18,
        id: "applicationListView"
    });
    $.__views.__alloyId16.add($.__views.applicationListView);
    $.__views.back = Ti.UI.createImageView({
        height: 48,
        width: 48,
        image: "/images/icons/goback.png",
        left: "40%",
        top: "25%",
        id: "back"
    });
    $.__views.__alloyId16.add($.__views.back);
    back ? $.__views.back.addEventListener("click", back) : __defers["$.__views.back!click!back"] = true;
    $.__views.home = Ti.UI.createImageView({
        height: 48,
        width: 48,
        image: "/images/icons/gohome.png",
        left: "62%",
        top: "25%",
        id: "home"
    });
    $.__views.__alloyId16.add($.__views.home);
    home ? $.__views.home.addEventListener("click", home) : __defers["$.__views.home!click!home"] = true;
    $.__views.up = Ti.UI.createImageView({
        height: 48,
        width: 48,
        image: "/images/icons/up.png",
        left: "51%",
        top: "30%",
        id: "up"
    });
    $.__views.__alloyId16.add($.__views.up);
    up ? $.__views.up.addEventListener("click", up) : __defers["$.__views.up!click!up"] = true;
    $.__views.down = Ti.UI.createImageView({
        height: 48,
        width: 48,
        image: "/images/icons/down.png",
        left: "51%",
        top: "42%",
        id: "down"
    });
    $.__views.__alloyId16.add($.__views.down);
    down ? $.__views.down.addEventListener("click", down) : __defers["$.__views.down!click!down"] = true;
    $.__views.left = Ti.UI.createImageView({
        height: 48,
        width: 48,
        image: "/images/icons/back.png",
        left: "40%",
        top: "36%",
        id: "left"
    });
    $.__views.__alloyId16.add($.__views.left);
    left ? $.__views.left.addEventListener("click", left) : __defers["$.__views.left!click!left"] = true;
    $.__views.right = Ti.UI.createImageView({
        height: 48,
        width: 48,
        image: "/images/icons/forward.png",
        left: "62%",
        top: "36%",
        id: "right"
    });
    $.__views.__alloyId16.add($.__views.right);
    right ? $.__views.right.addEventListener("click", right) : __defers["$.__views.right!click!right"] = true;
    $.__views.replay = Ti.UI.createImageView({
        height: 48,
        width: 48,
        image: "/images/icons/replay.png",
        left: "40%",
        top: "48%",
        id: "replay"
    });
    $.__views.__alloyId16.add($.__views.replay);
    replay ? $.__views.replay.addEventListener("click", replay) : __defers["$.__views.replay!click!replay"] = true;
    $.__views.select = Ti.UI.createImageView({
        height: 48,
        width: 48,
        image: "/images/icons/select.png",
        left: "51%",
        top: "48%",
        id: "select"
    });
    $.__views.__alloyId16.add($.__views.select);
    select ? $.__views.select.addEventListener("click", select) : __defers["$.__views.select!click!select"] = true;
    $.__views.rewind = Ti.UI.createImageView({
        height: 48,
        width: 48,
        image: "/images/icons/rewind.png",
        left: "40%",
        top: "60%",
        id: "rewind"
    });
    $.__views.__alloyId16.add($.__views.rewind);
    rewind ? $.__views.rewind.addEventListener("click", rewind) : __defers["$.__views.rewind!click!rewind"] = true;
    $.__views.play = Ti.UI.createImageView({
        height: 48,
        width: 48,
        image: "/images/icons/play.png",
        left: "51%",
        top: "60%",
        id: "play"
    });
    $.__views.__alloyId16.add($.__views.play);
    play ? $.__views.play.addEventListener("click", play) : __defers["$.__views.play!click!play"] = true;
    $.__views.fastforward = Ti.UI.createImageView({
        height: 48,
        width: 48,
        image: "/images/icons/fastforward.png",
        left: "62%",
        top: "60%",
        id: "fastforward"
    });
    $.__views.__alloyId16.add($.__views.fastforward);
    fastforward ? $.__views.fastforward.addEventListener("click", fastforward) : __defers["$.__views.fastforward!click!fastforward"] = true;
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
    $.applicationListView.addEventListener("itemclick", function(e) {
        e.section.getItemAt(e.itemIndex);
        Alloy.Globals.roku.selectApplication(e.itemId);
    });
    __defers["$.__views.back!click!back"] && $.__views.back.addEventListener("click", back);
    __defers["$.__views.home!click!home"] && $.__views.home.addEventListener("click", home);
    __defers["$.__views.up!click!up"] && $.__views.up.addEventListener("click", up);
    __defers["$.__views.down!click!down"] && $.__views.down.addEventListener("click", down);
    __defers["$.__views.left!click!left"] && $.__views.left.addEventListener("click", left);
    __defers["$.__views.right!click!right"] && $.__views.right.addEventListener("click", right);
    __defers["$.__views.replay!click!replay"] && $.__views.replay.addEventListener("click", replay);
    __defers["$.__views.select!click!select"] && $.__views.select.addEventListener("click", select);
    __defers["$.__views.rewind!click!rewind"] && $.__views.rewind.addEventListener("click", rewind);
    __defers["$.__views.play!click!play"] && $.__views.play.addEventListener("click", play);
    __defers["$.__views.fastforward!click!fastforward"] && $.__views.fastforward.addEventListener("click", fastforward);
    __defers["$.__views.roku!focus!focused"] && $.__views.roku.addEventListener("focus", focused);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;