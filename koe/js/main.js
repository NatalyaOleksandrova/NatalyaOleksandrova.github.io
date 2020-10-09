/*---------------------------------------------------------------------------------
/*
/* Main JS
/*
-----------------------------------------------------------------------------------*/

(function($) {

	"use strict";

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */
   $(window).load(function() {

      // will first fade out the loading animation
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

      });

  	})


  	/*----------------------------------------------------*/
  	/* Flexslider
  	/*----------------------------------------------------*/
		$(window).load(function() {

	  	$('.header__slider').flexslider({
				namespace: "flex-",
		      controlsContainer: ".header__content-inner",
		      animation: 'fade',
		      controlNav: true,
					directionNav: false,
		      smoothHeight: true,
		      slideshowSpeed: 7000,
		      animationSpeed: 600,
		      randomize: false,
					before: function(slider){
				   $(slider).find(".animated").each(function(){
				   	$(this).removeAttr("class");
				  	});
			},
			start: function(slider){
				 $(slider).find(".flex-active-slide")
									.find("h1").addClass("animated fadeInDown show")
									.next().addClass("animated fadeInUp show");

				 $(window).trigger('resize');
			},
			after: function(slider){
				$(slider).find(".flex-active-slide")
									.find("h1").addClass("animated fadeInDown show")
									.next().addClass("animated fadeInUp show");
			}
	   });
   });

	 /*----------------------------------------------------*/
 /* Adjust Primary Navigation Background Opacity
 ------------------------------------------------------*/
	 $(window).on('scroll', function() {

	 var h = $('.header__top').height();
	 var y = $(window).scrollTop();
			var header = $('.header__top');

		if ((y > h + 30 ) && ($(window).outerWidth() > 768 ) ) {
			 header.addClass('opaque');
		}
			else {
				 if (y < h + 30) {
						header.removeClass('opaque');
				 }
				 else {
						header.addClass('opaque');
				 }
			}

 });
 /*----------------------------------------------------*/
	/* Highlight the current section in the navigation bar
	------------------------------------------------------*/
var sections = $("section"),
navigation_links = $(".menu a");

sections.waypoint( {

		 handler: function(direction) {

		 var active_section;

		active_section = $('section#' + this.element.id);

		if (direction === "up") active_section = active_section.prev();

		var active_link = $('.menu a[href="#' + active_section.attr("id") + '"]');

			 navigation_links.parent().removeClass("current");
		active_link.parent().addClass("current");

	},

	offset: '25%'

});


		/*-----------------------------------------------------*/
		/* Mobile Menu
		------------------------------------------------------ */
	

		var menu_icon = $("<span class='menu-icon'>Menu</span>");
	 	var toggle_button = $("<a>", {
	 											id: "toggle-btn",
	 											html : "",
	 											title: "Menu",
	 											href : "#" }
	 											);
	 	var nav_wrap = $('.menu')
	 	var nav = $(".menu__list");

	 	/* if JS is enabled, remove the two a.mobile-btns
	 	and dynamically prepend a.toggle-btn to #nav-wrap */
	 	nav_wrap.find('a.mobile-btn').remove();
	 	toggle_button.append(menu_icon);
	 	nav_wrap.prepend(toggle_button);

	 	toggle_button.on("click", function(e) {
	 		e.preventDefault();
	 		nav.slideToggle("fast");
	 	});

	 	if (toggle_button.is(':visible')) nav.addClass('mobile');
	 	$(window).resize(function() {
	 		if (toggle_button.is(':visible')) nav.addClass('mobile');
	 		else nav.removeClass('mobile');
	 	});

	 	$('.menu__link').on("click", function() {
	 		if (nav.hasClass('mobile')) nav.fadeOut('fast');
	 	});

  	/*----------------------------------------------------*/
  	/* Smooth Scrolling
  	------------------------------------------------------ */
		$('.smoothscroll').on('click', function (e) {

	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

  	});


   /*----------------------------------------------------*/
	/*	Modal Popup
	------------------------------------------------------*/
    $('.block-content__image').magnificPopup({

       type:'inline',
       fixedContentPos: false,
       removalDelay: 300,
       showCloseBtn: false,
       mainClass: 'mfp-fade'

    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
    		e.preventDefault();
    		$.magnificPopup.close();
    });






	/*----------------------------------------------------*/
	/*	contact form
	------------------------------------------------------*/

	/* local validation
	$('#contactForm').validate({

		/* submit via ajax */
	/*	submitHandler: function(form) {

			var sLoader = $('#submit-loader');

			$.ajax({

		      type: "POST",
		      url: "inc/sendEmail.php",
		      data: $(form).serialize(),
		      beforeSend: function() {

		      	sLoader.fadeIn();

		      },
		      success: function(msg) {

	            // Message was sent
	            if (msg == 'OK') {
	            	sLoader.fadeOut();
	               $('#message-warning').hide();
	               $('#contactForm').fadeOut();
	               $('#message-success').fadeIn();
	            }
	            // There was an error
	            else {
	            	sLoader.fadeOut();
	               $('#message-warning').html(msg);
		            $('#message-warning').fadeIn();
	            }

		      },
		      error: function() {

		      	sLoader.fadeOut();
		      	$('#message-warning').html("Something went wrong. Please try again.");
		         $('#message-warning').fadeIn();

		      }

	      });
  		}

	});
*/

})(jQuery);
