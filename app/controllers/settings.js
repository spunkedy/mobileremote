var args = arguments[0] || {};

function saveSettings(){
	Ti.App.Properties.setString("onkyoIP",$.onkyoField.value);
	Ti.App.Properties.setString("rokuIP",$.rokuField.value);
	
	Alloy.Globals.onkyo = new Reciever(Ti.App.Properties.getString('onkyoIP'),"60128");
	Alloy.Globals.onkyo.connect();
	
	Alloy.Globals.roku = new Roku(Ti.App.Properties.getString('rokuIP'),"8060");
	alert("Saved Settings");	
	
} 


$.onkyoField.setValue(Ti.App.Properties.getString('onkyoIP'));
$.rokuField.setValue(Ti.App.Properties.getString('rokuIP'));

