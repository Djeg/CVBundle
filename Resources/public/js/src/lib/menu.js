(function($){


$.fn.menu = function()
{
	var self = this;

	var h2 = self.prev();

	var h1 = h2.prev();


	// get the first layer
	var firstLayer = $('.layer').eq(0);

	// place the menu
	var origin = h1.outerHeight(true) + h2.outerHeight(true);

	var newY = firstLayer.height() - 70;

	self.css({
		"margin-top": newY-origin+"px"
	});

	// attach event to the menu
	$('#menu li a').each(function(){
		var a = $(this);
		console.log(a.attr('href'));
		a.click(function(e){
			e.preventDefault();

			var layer = a.attr('href').substr(-1);

			window.LayerNavigator.scrollToLayer(layer);
		});
	});

	return self;
}


})(jQuery);