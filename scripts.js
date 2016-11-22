$(document).ready(function() {
	$(document).scroll(function() {			
		$(".animation-show").each(function(){
			if ($(this).offset().top + $(this).outerHeight() <= $(document).scrollTop() + $(window).height()) {
				$(this).removeClass('animation-show');
				$(this).addClass('animated ' + $(this).attr('data-animation'));			
			}				
		});			
	});    
});