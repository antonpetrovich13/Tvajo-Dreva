
// СЛАЙДЕР (EASY)
$(window).on('load resize', function () {
	if ($(window).width() < 950) {
		$('#slider:not(.slick-initialized)').slick({
			dots: false,
			arrows: true,
			infinite: true,
			speed: 500,
			cssEase: 'ease-out',
			touchThreshold: 10,
			adaptiveHeight: true,
			slidesToShow: 2,
			responsive: [
				{
					breakpoint: 650,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		});
	} else {
		$("#slider.slick-initialized").slick("unslick");
	}
});

// СЛАЙДЕР (PRODUCTS)
$(document).ready(function () {
	$('.products__slider').slick({
		arrows: false,
		dots: false,
		speed: 300,
		infinite: true,
		slidesToShow: 9,
		centerMode: true,
		touchThreshold: 40,
		cssEase: 'ease-out',
		responsive: [
			{
				breakpoint: 1380,
				settings: {
					slidesToShow: 8,
				}
			}, {
				breakpoint: 1230,
				settings: {
					slidesToShow: 7,
				}
			},
			{
				breakpoint: 1080,
				settings: {
					slidesToShow: 6,
				}
			},
			{
				breakpoint: 950,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 810,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 670,
				settings: {
					slidesToShow: 3,
					centerMode: false,
					dots: true,
				}
			},
			{
				breakpoint: 530,
				settings: {
					slidesToShow: 2,
					centerMode: false,
					dots: true,
				}
			},
			{
				breakpoint: 390,
				settings: {
					slidesToShow: 1,
					centerMode: false,
					dots: true,
				}
			},
		]
	});
});

