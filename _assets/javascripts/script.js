//= require plugins

$(document).ready(function(){

	// Fade out Hero on scroll
	// var target = $('.hero');
	// var targetHeight = target.outerHeight();
	// $(document).scroll(function(e){
	//     var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
	//     if(scrollPercent >= 0){
	//         target.css('opacity', scrollPercent);
	//     }
	// });

	// Show header on scroll
	// $(window).scroll(function () {
	//   if ( $(this).scrollTop() > 200 && !$('header').hasClass('open') ) {
	//     $('header').addClass('open');
	//     $('header').slideDown();
	//    } else if ( $(this).scrollTop() <= 200 ) {
	//     $('header').removeClass('open');
	//     $('header').slideUp();
	//   }
	// });

	// Contact form
	// $("#btn-cta").click(function(e) {
	// 	e.preventDefault();
	// 	$("html,body").css("overflow","hidden");
	// 	$(".contact").fadeIn('slow');
	// });
	//
	$("#form .btn").click( function() {
		$("html,body").css("overflow","auto");
		$("#contact-success").fadeIn(100);
		$(".cta").fadeOut('fast');
		// $("#form").fadeOut(100);
		$(".contact").fadeOut('slow');
	});
	//
	// $(".close").click(function(e) {
	// 	e.preventDefault();
	// 	$("html,body").css("overflow","auto");
	// 	$(".contact").fadeOut('slow');
	// });


});
