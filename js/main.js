jQuery(document).ready(function($) {

	// Menu Mobile
	$('nav#menu').mmenu();
	
	// Show Searcher in mobile
	$('#btn-searcher').click(function(event) {
		event.preventDefault();
		$(this).toggleClass('btn-searcher-active');
		$('.content-searcher').toggleClass('content-searcher-show');
	});

	/* Sliders */
	$('.slider-home').slick({
		autoplay: true,
 	 	autoplaySpeed: 2000,
 	 	dots:true,
 	 	fade:false,
 	 	prevArrow: '<span class="arrow-left arrow-slick"><img src="./img/arrow-left.png"></span>',
 	 	nextArrow: '<span class="arrow-right arrow-slick"><img src="./img/arrow-right.png"></span>'
	});
});