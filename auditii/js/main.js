
$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
		slidesToShow:1,
		autoplay:false,
		speed:1000,
		autoplaySpeed:800,

	});

});
$('.multiple-items').slick({
  arrows:true,
  slidesToShow: 3,
	responsive:[
			{
				breakpoint: 700,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow:1
				}
			}
		]
});
