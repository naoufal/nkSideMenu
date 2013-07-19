$(window).resize(function(){
	deviceDimensions;	
	verticalAlignMenu;
	setContentHeight;
});

var verticalAlignMenu =	(function(element){
							deviceHeight = $(window).height();
							elementHeight = $('.menu-list').height();
							marginTop = (deviceHeight - elementHeight) / 2;
							$('.menu-list').css('margin-top', marginTop);
						}())

var setContentHeight = 	(function(){
							deviceHeight = $(window).height();
							headerHeight = 	$('.window-header').height();
							$('.window-content').height(deviceHeight - headerHeight);
						}())

var deviceDimensions = 	(function(){
							deviceHeight = $(window).height();
							deviceWidth = $(window).width();
						}())