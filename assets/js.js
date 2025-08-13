$('.bxslider').bxSlider({
	controls: false
});

$('.hp-price__slider').bxSlider({
	  minSlides: 4,
	  maxSlides: 4,
	  slideWidth: 330,
	  slideMargin: 20
});

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop || st < 500){
       $('header').removeClass("sticky-menu");
   } else {
      $('header').addClass("sticky-menu");
   }
   lastScrollTop = st;
});

$( function() {
  $( ".datepicker" ).datepicker( $.datepicker.regional[ "cs" ] );
  $( ".datepicker" ).datepicker({
  	dateFormat: "dd.mm.yy"
  });
} );

$('.hp-contact-strip .btn').click(function(){
    	$('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top-350+"px"
    	}, 500);
    	return false;
});
