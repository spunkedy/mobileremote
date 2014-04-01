function switchView(e){	
	var asdf = e.itemIndex;
	var section = $.deviceList.sections[e.sectionIndex];
	var id = section.getItemAt(e.itemIndex).properties.id;
	$.mainView.removeAllChildren();
	$.mainView.add(new Alloy.createController(id).getView());
	
}
$.index.open();