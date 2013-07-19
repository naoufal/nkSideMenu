$(function(){
    FastClick.attach(document.body);
});	

(function(){
	$('.side-menu-button').click(function(){
		if(Modernizr.csstransitions){
			$('.window').addClass('animate');
			$('.menu').addClass('animate');
			$('.window').css('transform', 'translate3d(' + (deviceWidth / 2) + 'px, 0px, 0) scale(0.5,0.5) ');
			$('.menu').css('transform', 'scale(1,1) ');
			$('.menu').css('opacity', '1');
		} else {
			$('.menu').animate({'left': '0px'}, 200);		
			$('.window').animate({'left': (deviceWidth - ($('.side-menu-button').width() + 20)) + 'px'}, 200);
		}
	});
}());

(function(){
	$('.menu li').click(function(){
		if(Modernizr.csstransitions){
			$('.window').css('transform', 'translate3d(0px, 0, 0) scale(1,1) ');
			$('.menu').css('transform', 'scale(0.6,0.6) ');	
			$('.menu').css('opacity', '0');	
		} else {
			$('.window').animate({'left': '0px'}, 200);
			$('.menu').animate({'left': '60%'}, 200);				
			$('.menuTitle').html($(this).attr('class'));		
		}	
		feedContent(this);
	});	
}());

// Feeds loads selected menu into window content.  This can be changed to do your own custom magic.
function feedContent(menuTitle){
	$('.window-content').load('views/' + $(menuTitle).attr('class') + '.html');
	$('.title').html($(menuTitle).attr('class'));	
	deviceDimensions;
}