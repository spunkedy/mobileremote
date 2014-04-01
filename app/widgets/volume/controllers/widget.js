var previousVolume = 0;
function setVolume(e){
    Alloy.Globals.onkyo.setVolume($.volumeSlider.value);
}

exports.setVolume = function(){
	setVolume();
};

function muteTrigger(e){
	if ( previousVolume != 0 ){
		$.volumeSlider.value = previousVolume;
		previousVolume = 0;
	} else {
		previousVolume = $.volumeSlider.value;
		$.volumeSlider.value = 0;
	}
	Alloy.Globals.onkyo.setVolume($.volumeSlider.value);
}