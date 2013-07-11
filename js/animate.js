var deviceWidth;

$(document).ready(function(){
	deviceWidth = $(window).width();

	$(function() {
	    FastClick.attach(document.body);
	});	
});

$(window).resize(function(){
	deviceWidth = $(window).width();
});

$('.side-menu-button').click(function(){
	showSideMenu();
});

$('.menu li').click(function(){
	hideSideMenu(this);
});

function showSideMenu(){
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
}

function hideSideMenu(title){
	if(Modernizr.csstransitions){
		$('.window').css('transform', 'translate3d(0px, 0, 0) scale(1,1) ');
		$('.menu').css('transform', 'scale(0.6,0.6) ');	
		$('.menu').css('opacity', '0');	
		$('.title').html($(title).attr('class'));
	} else {
		$('.window').animate({'left': '0px'}, 200);
		$('.menu').animate({'left': '60%'}, 200);				
		$('.title').html($(title).attr('class'));		
	}	
}