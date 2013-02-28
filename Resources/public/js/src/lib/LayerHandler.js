(function($){



window.LayerHandler = new (function()
{
	var self = this;

	var listeners = [];

	this.addListener = function(listener)
	{
		if(typeof listener == 'function'){
			listeners.push(listener);
		} else {
			console.error('Bad listener value ! A listener must be a function.');
			console.log(listener);
		}

		return self;
	}

	this.getListeners = function()
	{
		return listeners;
	}

	this.removeListener = function(listener)
	{
		for(var i = 0; i < listeners.length; i++){
			if(listeners[i] === listener){
				listeners.splice(i, i);
			}
		}

		return self;
	}

	this.getListener = function(offset)
	{
		return listeners[offset];
	}

	this.debugListeners = function()
	{
		console.log(listeners);
	}

	this.init = function()
	{
		handling();
		// Attach window events :
		$(window).resize(handling);
	}

	var handling = function()
	{
		console.log('handling');
		if($(window).height() > 500){
			$('.layer').height($(window).height());
		} else {
			$('.layer').height(500);
		}

		// launched the listeners
		for(var i = 0; i < listeners.length; i++){
			listeners[i]();
		}
	}
})();

})(jQuery);