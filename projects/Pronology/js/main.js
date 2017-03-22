jQuery(function($) {

	//#main-slider
	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 8000
		});
	});

	$( '.centered' ).each(function( e ) {
		$(this).css('margin-top',  ($('#main-slider').height() - $(this).height())/2);
	});

	$(window).resize(function(){
		$( '.centered' ).each(function( e ) {
			$(this).css('margin-top',  ($('#main-slider').height() - $(this).height())/2);
		});
	});

	
	
// to the top button
$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#btn-top').fadeIn();	
		} else {
			$('#btn-top').fadeOut();
		}
	});
 
	$('#btn-top').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});	
});

});