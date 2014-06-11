// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};


//Js modules
//Onkyo
var Reciever = require('lib/reciever');
//Roku
var Roku = require('lib/roku');

if (Titanium.Platform.name == 'android') {
	//Android Module
	var IRBlaster = require('co.withgod.irblaster');
	//Code from http://www.remotecentral.com/cgi-bin/forums/viewpost.cgi?925066		
	var powerCodeOn  = "0000 006D 0022 0002 0157 00AC 0015 0016 0015 0016 0015 0041 0015 0016 0015 0016 0015 0016 0015 0016 0015 0016 0015 0041 0015 0041 0015 0016 0015 0041 0015 0041 0015 0041 0015 0041 0015 0041 0015 0016 0015 0041 0015 0016 0015 0041 0015 0016 0015 0041 0015 0016 0015 0016 0015 0041 0015 0016 0015 0041 0015 0016 0015 0041 0015 0016 0015 0041 0015 0041 0015 0689 0157 0056 0015 0E94";
	var powerCodeOff = "0000 006D 0022 0002 0157 00AC 0015 0016 0015 0016 0015 0041 0015 0016 0015 0016 0015 0016 0015 0016 0015 0016 0015 0041 0015 0041 0015 0016 0015 0041 0015 0041 0015 0041 0015 0041 0015 0041 0015 0041 0015 0016 0015 0041 0015 0016 0015 0016 0015 0041 0015 0016 0015 0016 0015 0016 0015 0041 0015 0016 0015 0041 0015 0041 0015 0016 0015 0041 0015 0041 0015 0689 0157 0056 0015 0E94";
	Ti.API.info('Creating IR Blaster');
	Alloy.Globals.IRBlastOn = function(){
		IRBlaster.sendCode(powerCodeOn);
	};
	Alloy.Globals.IRBlastOff = function(){	
	 	IRBlaster.sendCode(powerCodeOff);	 	
	};
	Ti.API.info('created IR Blaster');
	
} else {
	Alloy.Globals.IRBlast = function(){};
}


if(Ti.App.Properties.getString('onkyoIP')  !== null){
	Alloy.Globals.onkyo = new Reciever(Ti.App.Properties.getString('onkyoIP'),"60128");
	Alloy.Globals.onkyo.connect();
} else {
	Alloy.Globals.onkyo = new Reciever("127.0.0.1","60128");
}


if(Ti.App.Properties.getString('rokuIP')  !== null){
	Alloy.Globals.roku = new Roku(Ti.App.Properties.getString('rokuIP'),"8060");
} else {
	Alloy.Globals.roku = new Roku("127.0.0.1","8060");
}
