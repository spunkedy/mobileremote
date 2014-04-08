function focused(){
	Alloy.Globals.onkyo.roku();
	$.masterBar.masterVolume.setVolume();
	updateApplications();
}

$.applicationListView.addEventListener('itemclick', function(e){
    var item = e.section.getItemAt(e.itemIndex);
    Alloy.Globals.roku.selectApplication(e.itemId);    
});


function updateApplications(){
	Alloy.Globals.roku.loadApplications(function(response){
		
		//Load XML
		var doc = Ti.XML.parseString(response);
		//Parse Elements
		var results = doc.getElementsByTagName('app');		
		//Load Data
		var arr = [];
		Ti.API.info("Looping through applications");
		var data = [];
		for(var i=0; i<results.length; i++){
		    arr[i] = results.item(i).text;
		    Ti.API.info("Id: " + results.item(i).attributes.getNamedItem("id").nodeValue + " - Text - " + results.item(i).text);
		    data.push(
		        { properties: {
		            itemId: results.item(i).attributes.getNamedItem("id").nodeValue,
		            title: results.item(i).text,
		            accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE,
		            color: 'black'
		        }
		    });
		}
		
		$.applicationsList.setItems(data);
		
	});
	
	
}

function back(){
	Alloy.Globals.roku.back();	
}
function home(){
	Alloy.Globals.roku.home();	
}
function up(){
	Alloy.Globals.roku.up();	
}
function down(){
	Alloy.Globals.roku.down();
}
function left(){
	Alloy.Globals.roku.left();
}
function right(){
	Alloy.Globals.roku.right();
}

function replay(){
	Alloy.Globals.roku.instantReplay();
}
function select(){
	Alloy.Globals.roku.select();
}

function rewind(){
	Alloy.Globals.roku.rev();
}
function play(){
	Alloy.Globals.roku.play();
}

function fastforward(){
	Alloy.Globals.roku.fwd();
}



