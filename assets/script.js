$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
})

//Parallax & fade on scroll	
		
function scrollBanner() {
      $(document).on('scroll', function(){
          var scrollPos = $(this).scrollTop();
                if ($(window).width() > 1200) {
                      $('.parallax-top').css({
                        'top' : (scrollPos/2.5)+'px'
                      });
                      $('.parallax-fade-top').css({
                        'top' : (scrollPos/2)+'px',
                        'opacity' : 1-(scrollPos/750)
                      });
                      $('.fade-top').css({
                        'opacity' : 1-(scrollPos/350)
                      });
                }	
      });    
    }
    scrollBanner();

    //Scroll back to top
	
		var offset = 300;
		var duration = 400;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.scroll-to-top').fadeIn(duration);
			} else {
				jQuery('.scroll-to-top').fadeOut(duration);
			}
		});
				
		jQuery('.scroll-to-top').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})