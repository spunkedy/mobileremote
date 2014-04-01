var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var Reciever = require("lib/reciever");

Alloy.Globals.onkyo = new Reciever("10.0.7.3", "60128");

Alloy.Globals.onkyo.connect();

Alloy.createController("index");