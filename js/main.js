/*------------------------------------------------------------
 
Start Mobile JS
 
*-----------------------------------------------------------*/

$(document).ready(function() {
	$("#owl-product").owlCarousel({

		navigation : false,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : true

		// "singleItem:true" is a shortcut for:
		// items : 1, 
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false

	});
});

$( ".video-wrapp" ).click(function() {
  $( ".black-strip" ).toggleClass( "black-strip-off" );
});