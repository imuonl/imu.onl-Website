$(function() {
	$(window).scroll(function() {
		var y = $(window).scrollTop();

		if(y > $('.header').height()) {
			if(!$('.header').hasClass('bg')) $('.header').addClass('bg');
		} else {
			if($('.header').hasClass('bg')) $('.header').removeClass('bg');
		}
	});


	$('form').submit(function(e) {
		e.preventDefault();

		var data = $(this).serialize();

		var $input = $(this).find('input');
		var $button = $(this).find('button');

		$input.addClass('hide');
		$button.attr('disabled', 'true')
		$button.text('working..');

		$.post('/', data, function(res) {
			setTimeout(function() {
				$button.attr('disabled', false);
				$button.text('sign meme up!');

				if(res == 'success') {
					$('input').val('');
					$input.removeClass('hide');
					$('.msg').addClass('show');
				} else {
					$input.removeClass('hide');
				}
			}, 2500)
		})
	});
});