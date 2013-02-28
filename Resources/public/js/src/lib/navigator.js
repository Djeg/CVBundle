(function($){

$.fn.navigator = function()
{
	var self = this;

	var scrollNext = function()
	{
		var button = $(this);
		button.unbind();
		window.LayerNavigator.scrollToNextLayer(function(){
			button.bind('click', scrollNext);
		});
	}

	var scrollPrev = function()
	{
		var button = $(this);
		button.unbind();
		window.LayerNavigator.scrollToPreviousLayer(function(){
			button.bind('click', scrollPrev);
		});
	}

	self.find('.navigation-up').click(scrollPrev);
	self.find('.navigation-down').click(scrollNext);
}

})(jQuery);