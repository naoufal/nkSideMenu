$(document).ready(function(){
	verticalAlign('.menu-list');
	setContentHeight();	
});

$(window).resize(function(){
	verticalAlign('.menu-list');
	setContentHeight();		
});

function verticalAlign(element){
	deviceHeight = $(window).height();
	elementHeight = $(''+ element +'').height();
	marginTop = (deviceHeight - elementHeight) / 2;
	$(''+ element +'').css('margin-top', marginTop);
}

function setContentHeight(){
	deviceHeight = $(window).height();
	headerHeight = 	$('.window-header').height();
	$('.window-content').height(deviceHeight - headerHeight);
}