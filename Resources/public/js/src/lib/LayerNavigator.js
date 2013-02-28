(function($){

window.LayerNavigator = new (function()
{
	var self = this;

	var actualLayer = 0;

	this.getActualLayer = function()
	{
		return actualLayer;
	}

	this.scrollToLayer = function(layerNumber, callback)
	{
		layerNumber = parseInt(layerNumber);
		if(layerNumber < 0 || layerNumber > $('.layer').length-1){
			console.error('The layer number must be a size between 0..'+$('.layer').length-1+' !');
		}

		if(layerNumber != actualLayer){	
			// Get the layer object
			var layer = $('.layer').eq(layerNumber);

			// Determine position
			var toScroll = layer.offset().top;

			$(window).scrollTo(toScroll, 1000, {
				onAfter: function()
				{
					actualLayer = layerNumber;
					if(callback != undefined){
						callback();
					}
				}
			});
		}

		return self;
	}

	this.scrollToNextLayer = function(callback)
	{
		// determine the layer
		var ln = actualLayer+1
		if( ln > $('.layer').length-1){
			ln = 0;
		} 

		self.scrollToLayer(ln, callback);
	}

	this.scrollToPreviousLayer = function(callback)
	{
		// determine the layer to scroll
		var ln = actualLayer-1;
		if(ln < 0){
			ln = $('.layer').length-1;
		}

		self.scrollToLayer(ln, callback);
	}

})();


})(jQuery);