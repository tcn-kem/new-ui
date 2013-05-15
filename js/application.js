$(document).ready(function() {
	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();
		var target = this.hash,
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = target;
		 });
	});
	
	$('#logo').click(function() {
		$('html, body').animate({ scrollTop: 0}, 1000)
	});

	$('#round-shaped-rice').click(function() {
		$('#submit-kind').val('round-shaped-rice');
		$('#submit-kind-text').text('Round Shaped Rice');
	});

	$('#sticky-rice').click(function() {
		$('#submit-kind').val('sticky-rice');
		$('#submit-kind-text').text('Sticky Rice');
	});

	$('#japanese-rice').click(function() {
		$('#submit-kind').val('japanese-rice');
		$('#submit-kind-text').text('Japanese Rice');
	});

	$('#wheat').click(function() {
		$('#submit-kind').val('wheat');
		$('#submit-kind-text').text('Wheat');
	});

   	$('#area-select').select2({
    	placeholder: "Select a Province"
	}); 

   	$('#area-select').change(function() {
   		$('#submit-area').val($('#area-select').val());
   		$('#submit-area-text').text($('#area-select').val());
   	})

	$('#area i').bind('click', function() {
		$('#area-select').select2('open');
	});

	$('#submit-button').click(function() {
		if($('#submit-kind').val() == "" || $('#submit-area').val() == "") {
			return false;
		}
		else { 
			$('#riceform').submit();
		}
	});
});