(function($){

$.fn.skills = function()
{
	var self = this;

	console.log(self);

	var h1 = self.prev();

	// set the height :

	var layerHeight = $('.layer').eq(1).height();

	var layerMiddle = layerHeight/2;

	self.css({
		"margin-top": layerMiddle - (self.height()/2) - h1.outerHeight(true)
	});

	return self;
}

})(jQuery);