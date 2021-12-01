// Menu burger
jQuery(document).ready(function ($) {
	$('.snow-menu__burger').on('click', function () {
		$('.snow-menu__burger, .snow-menu').toggleClass('active');
	});
});
// Slider-Swiper
new Swiper('.quotes-slider', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	dynamicBullets: true,
	},
});

new Swiper('.latest-blog__columns', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	dynamicBullets: true,
	},
});

// Прокрутка вниз
const $button = document.querySelector('.arrow-img');
const $form = document.querySelector('.about');
$button.addEventListener('click', e => {
	$form.scrollIntoView({
		behavior: 'smooth', 
	});
});


