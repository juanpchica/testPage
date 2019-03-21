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

	$('.slider-products').slick({
		autoplay: true,
 	 	autoplaySpeed: 2000,
 	 	dots:false,
 	 	fade:false,
 	 	prevArrow: '<span class="arrow-left arrow-slick"><img src="./img/arrow-left.png"></span>',
 	 	nextArrow: '<span class="arrow-right arrow-slick"><img src="./img/arrow-right.png"></span>',
 	 	slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
			    slidesToShow: 3,
			    slidesToScroll: 3
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
			    slidesToShow: 2,
			    slidesToScroll: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
			    slidesToShow: 1,
			    slidesToScroll: 1
			  }
			}
		]
	});


	$('.slider-partners').slick({
		autoplay: false,
 	 	autoplaySpeed: 2000,
 	 	dots:false,
 	 	fade:false,
 	 	prevArrow: '<span class="arrow-left arrow-slick"><img src="./img/arrow-left.png"></span>',
 	 	nextArrow: '<span class="arrow-right arrow-slick"><img src="./img/arrow-right.png"></span>',
 	 	slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
			    slidesToShow: 3,
			    slidesToScroll: 3
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
			    slidesToShow: 2,
			    slidesToScroll: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
			    slidesToShow: 1,
			    slidesToScroll: 1
			  }
			}
		]
	});
});