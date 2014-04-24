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

	// Contact form
	$("#form .btn").click( function() {
	    $("#form").fadeOut(100);
	    $("#contact-success").delay(100).fadeIn(1000);
	});

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

});