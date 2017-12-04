/* Author: 

*/

(function($) {

$(document).ready(function(){  

	$('.hamburgar').click(function(){
		$(this).next().slideToggle(1000);

		setInterval(function(){ 
				$('.hamburgar').next().addClass('text-animate');
		}, 
		500);
	});

	$('.has-child').hover(function(){
		$(this).children('.second-nav').slideToggle(500);
	});

	$('.has-grand-child').hover(function(){
		$(this).children('.third-nav').slideToggle(800);
	});

	$('.filter-list').click(function(){
		$(this).children('.filter-content').slideToggle(800);
	});

	$('#search').click(function(){
		$('.search-wrapp').slideToggle(800);
	});

	$('.search-wrapp input').click(function(){
		$(this).css('border-bottom','1px solid #fff');
	});

});
})(jQuery);






















