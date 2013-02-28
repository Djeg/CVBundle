jQuery(function($){

	$('#navigator').navigator();

	window.LayerHandler.addListener(function(){ $('#menu').menu(); });

	window.LayerHandler.addListener(function(){ $('#my-skills').skills(); });

	window.LayerHandler.init();

});