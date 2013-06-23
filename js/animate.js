$('.window').click(function(){
	$('.window').addClass('animate');
	$('.window').css('transform', 'translate3d(300px, 0, 0) scale(0.5,0.5) ');
});

$('.menu').click(function(){
	$('.window').css('transform', 'translate3d(0px, 0, 0) scale(1,1) ');
});

function animate(){

}