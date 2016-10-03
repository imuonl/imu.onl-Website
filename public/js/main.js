$(function() {
	$(window).scroll(function() {
		var y = $(window).scrollTop();

		if(y > $('.header').height()) {
			console.log('moew')
			if(!$('.header').hasClass('bg')) $('.header').addClass('bg');
		} else {
			if($('.header').hasClass('bg')) $('.header').removeClass('bg');
		}
	});
});