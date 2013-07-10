var deviceWidth;

$(document).ready(function(){
	deviceWidth = $(window).width();

	$(function() {
	    FastClick.attach(document.body);
	});	
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
		alert('css transitions not supported');
	}
}

function hideSideMenu(title){
	if(Modernizr.csstransitions){
		$('.window').css('transform', 'translate3d(0px, 0, 0) scale(1,1) ');
		$('.menu').css('transform', 'scale(0.6,0.6) ');	
		$('.menu').css('opacity', '0');	
		$('.title').html($(title).attr('class'));
	} else {
		alert('css transitions not supported');
	}	
}