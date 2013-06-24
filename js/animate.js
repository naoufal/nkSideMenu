var deviceWidth;

$(document).ready(function(){
	deviceWidth = $(window).width();
});

$('.button').click(function(){
	$('.window').addClass('animate');
	$('.menu').addClass('animate');
	$('.window').css('transform', 'translate3d(' + (deviceWidth / 2) + 'px, 0px, 0) scale(0.5,0.5) ');
	$('.menu').css('transform', 'scale(1,1) ');

});

$('.menu li').click(function(){
	$('.window').css('transform', 'translate3d(0px, 0, 0) scale(1,1) ');
	$('.menu').css('transform', 'scale(0.8,0.8) ');	
	$('.title').html($(this).attr('class'));
});

function animate(){

}