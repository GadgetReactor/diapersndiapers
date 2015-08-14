/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

jQuery(document).ready(function($) {

/*---------------------------------------------------- */
/* Preloader
------------------------------------------------------ */
  	$(window).load(function() {

   	// will first fade out the loading animation
    	$("#status").fadeOut("slow");

    	// will fade out the whole DIV that covers the website.
    	$("#preloader").delay(500).fadeOut("slow").remove();

  	})

/*---------------------------------------------------- */
/* Menu
------------------------------------------------------ */
  	var toggle_button = $("<a>", {
                        id: "toggle-btn",
                        html : "Menu",
                        title: "Menu",
                        href : "#" }
                        );
  	var nav_wrap = $('nav#nav-wrap')
  	var nav = $("ul#nav");

  	/* id JS is enabled, remove the two a.menu-btns
  	and dynamically prepend a.toggle-btn to #nav-wrap */
  	nav_wrap.find('a.menu-btn').remove();
  	nav_wrap.prepend(toggle_button);

  	toggle_button.on("click", function(e) {
   	e.preventDefault();
    	nav.slideToggle("fast");
  	});

  	if (toggle_button.is(':visible')) nav.addClass('mobile');
  	$(window).resize(function(){
   	if (toggle_button.is(':visible')) nav.addClass('mobile');
    	else nav.removeClass('mobile');
  	});

  	$('ul#nav li a').on("click", function(){
   	if (nav.hasClass('mobile')) nav.fadeOut('fast');
  	});


/*----------------------------------------------------*/
/* Backstretch Settings
------------------------------------------------------ */

	$("#intro").backstretch("images/header-background.jpg");


/*----------------------------------------------------*/
/*  Placeholder Plugin Settings
------------------------------------------------------ */
	$('input, textarea').placeholder()

/*----------------------------------------------------*/
/* Final Countdown Settings
------------------------------------------------------ */
	var finalDate = '2015/10/01';

	$('div#counter').countdown(finalDate)
   	.on('update.countdown', function(event) {

   		$(this).html(event.strftime('<span>%D <em>days</em></span>' +
   										 	 '<span>%H <em>hours</em></span>' +
   										 	 '<span>%M <em>minutes</em></span>' +
   										 	 '<span>%S <em>seconds</em></span>'));

   });


/*----------------------------------------------------*/
/*	Make sure that #intro height is
/* equal to the browser height.
------------------------------------------------------ */

   $('#intro, #map').css({ 'height': $(window).height() });
   $(window).on('resize', function() {

        $('#intro, #map').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() })

        $("#intro").backstretch("images/header-background.jpg");
   });


});
