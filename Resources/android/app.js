var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var Reciever = require("lib/reciever");

var Roku = require("lib/roku");

var IRBlaster = require("co.withgod.irblaster");

var powerCodeOn = "0000 006D 0022 0002 0157 00AC 0015 0016 0015 0016 0015 0041 0015 0016 0015 0016 0015 0016 0015 0016 0015 0016 0015 0041 0015 0041 0015 0016 0015 0041 0015 0041 0015 0041 0015 0041 0015 0041 0015 0016 0015 0041 0015 0016 0015 0041 0015 0016 0015 0041 0015 0016 0015 0016 0015 0041 0015 0016 0015 0041 0015 0016 0015 0041 0015 0016 0015 0041 0015 0041 0015 0689 0157 0056 0015 0E94";

var powerCodeOff = "0000 006D 0022 0002 0157 00AC 0015 0016 0015 0016 0015 0041 0015 0016 0015 0016 0015 0016 0015 0016 0015 0016 0015 0041 0015 0041 0015 0016 0015 0041 0015 0041 0015 0041 0015 0041 0015 0041 0015 0041 0015 0016 0015 0041 0015 0016 0015 0016 0015 0041 0015 0016 0015 0016 0015 0016 0015 0041 0015 0016 0015 0041 0015 0041 0015 0016 0015 0041 0015 0041 0015 0689 0157 0056 0015 0E94";

Ti.API.info("Creating IR Blaster");

Alloy.Globals.IRBlastOn = function() {
    IRBlaster.sendCode(powerCodeOn);
};

Alloy.Globals.IRBlastOff = function() {
    IRBlaster.sendCode(powerCodeOff);
};

Ti.API.info("created IR Blaster");

if (null !== Ti.App.Properties.getString("onkyoIP")) {
    Alloy.Globals.onkyo = new Reciever(Ti.App.Properties.getString("onkyoIP"), "60128");
    Alloy.Globals.onkyo.connect();
} else Alloy.Globals.onkyo = new Reciever("127.0.0.1", "60128");

Alloy.Globals.roku = null !== Ti.App.Properties.getString("rokuIP") ? new Roku(Ti.App.Properties.getString("rokuIP"), "8060") : new Roku("127.0.0.1", "8060");

Alloy.createController("index");