"use strict"

// МЕНЮ-БУРГЕР
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').
			toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function () {
	$('.header__link').click(function (event) {
		$('.header__burger, .header__menu').removeClass('active');
		$('body').removeClass('lock')
	});
});



// ПАРАЛАКС
$(window).scroll(function (event) {
	var s = 0 - $(this).scrollTop() / 2;
	$('.main__mainscreen').css('transform', 'translate3d(0, ' + s + 'px, 0)');
});



// ПЛАВНАЯ НАВИГАЦИЯ
$(function () {
	$("a[href^='#']").click(function () {
		var _href = $(this).attr("href");
		var fixed_offset = 50;
		$("html, body").animate({ scrollTop: $(_href).offset().top - fixed_offset }, 500);
		return false;
	});
});


$(function () {
	$('.footer__logo').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 'slow');
	});
});


// СЛАЙДЕР
$(window).on('load resize', function () {
	if ($(window).width() < 600) {
		$('#slider:not(.slick-initialized)').slick({
			dots: true,
			arrows: false,
			infinite: true,
			speed: 500,
			cssEase: 'ease-out',
			touchThreshold: 10,
			adaptiveHeight: true,
			slidesToShow: 1,
		});
	} else {
		$("#slider.slick-initialized").slick("unslick");
	}
});



//ПЕРЕДАЧА НАЗВАНИЯ В ФОРМУ
document.querySelectorAll(".earrings__column").forEach(function (el) {
	el.addEventListener("click", function (ev) {
		if (ev.target != el) {
			var local = el.querySelector(".earrings__label").innerText;
			localStorage.setItem("productLabel", local);
		}
	});
})

if (document.querySelector(".form__input_data")) {
	document.querySelector(".form__input_data").value = localStorage.getItem("productLabel");
}



