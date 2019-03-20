jQuery(document).ready(function($) {

	// Menu Mobile
	$('nav#menu').mmenu();
	
	// Show Searcher in mobile
	$('#btn-searcher').click(function(event) {
		event.preventDefault();
		$(this).toggleClass('btn-searcher-active');
		$('.content-searcher').toggleClass('content-searcher-show');
	});
});