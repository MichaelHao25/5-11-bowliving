var mySwiper = new Swiper('.banner .swiper-container', {
	autoplay: 3000,
	loop: true,
	pagination: '.banner .swiper-pagination',
})
var big_swiper = new Swiper('.big-swiper.swiper-container', {
	onSlideChangeStart: function (swiper) {
		switch_swiper.slideTo(swiper.activeIndex, 1000, false);
		$('.main .product-details .product-details-header .switch-swiper .swiper-slide').eq(swiper.activeIndex).addClass('js-data-active').siblings().removeClass('js-data-active');
	}
})
var switch_swiper = new Swiper('.switch-swiper.swiper-container', {
	slidesPerView: 3,
	spaceBetween: 20,
	onTap: function (swiper) {

		swiper.slideTo(swiper.clickedIndex, 1000, false);
		big_swiper.slideTo(swiper.clickedIndex, 1000, false);
	}
})
$('.main .product-details .product-details-header .switch-swiper .swiper-slide').on('click', function () {
	$(this).addClass('js-data-active').siblings().removeClass('js-data-active');
})
$('.big-swiper .swiper-slide').on('click',function() {
	var src = $(this).attr('data-src');
	$('.layout-big-images').fadeIn().children('img').hide().attr('src',src).fadeIn();
})
$('.layout-big-images').on('click',function () {
	$(this).fadeOut();
}).children('.wrap').on('click',function() {
	return false;
})
var length = $('.main .public-tabs-control .swiper-slide').length
var mySwiper = window.innerWidth > length * 150 ? $('.main .public-tabs-control .m0-auto').width(length * 150) : new Swiper('.public-tabs-control .swiper-container', {
	slidesPerView: 'auto',
	centeredSlides: true,
	onBeforeResize: function (swiper) {
		window.innerWidth > swiper.slides.length * 150 && swiper.destroy(false, true)
	}
})

$('.header .menu .item').on('mouseenter', function () {
	$(this).addClass('active').siblings().removeClass('active');
	$(this).children('.child-menu').addClass('active');

}).on('mouseleave', function () {
	$(this).removeClass('active');
	$(this).children('.child-menu').removeClass('active');
})
$('.header .mobile-menu-wrap .mobile-menu').on('click', function () {
	$('body').toggleClass('mobile-menu-layout')
	$(this).toggleClass('active')
	$('.header .menu').toggleClass('active')
})
$('.bg-block-40-layout').on('click', function () {
	$('.header .mobile-menu .mobile-menu').trigger('click')
})