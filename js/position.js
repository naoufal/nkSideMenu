$(document).ready(function(){
	verticalAlign('.menu-list');
});

$(window).resize(function(){
	verticalAlign('.menu-list');
});

function verticalAlign(element){
	deviceHeight = $(window).height();
	elementHeight = $(''+ element +'').height();
	marginTop = (deviceHeight - elementHeight) / 2;
	$(''+ element +'').css('margin-top', marginTop);
}