function insertPrezi () {
    var player = new PreziPlayer('prezi-player', { 
	preziId:  $('#preziId').val(), 
	width: $('#preziWidth').val(),
	height: $('#preziHeight').val(),
	explorable: true,
	controls: true
});
}


