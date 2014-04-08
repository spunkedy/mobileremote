var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var Reciever = require("lib/reciever");

var Roku = require("lib/roku");

var IRBlaster;

var powerCodeOn;

var powerCodeOff;

Alloy.Globals.IRBlast = function() {};

if (null !== Ti.App.Properties.getString("onkyoIP")) {
    Alloy.Globals.onkyo = new Reciever(Ti.App.Properties.getString("onkyoIP"), "60128");
    Alloy.Globals.onkyo.connect();
} else Alloy.Globals.onkyo = new Reciever("127.0.0.1", "60128");

Alloy.Globals.roku = null !== Ti.App.Properties.getString("rokuIP") ? new Roku(Ti.App.Properties.getString("rokuIP"), "8060") : new Roku("127.0.0.1", "8060");

Alloy.createController("index");