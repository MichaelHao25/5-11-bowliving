var mySwiper = new Swiper('.banner .swiper-container', {
	autoplay: 3000,
	loop: true,
	pagination: '.banner .swiper-pagination',
})
var length = $('.main .public-tabs-control .swiper-slide').length
var mySwiper = window.innerWidth > length * 150 ? $('.main .public-tabs-control .m0-auto').width(length * 150) : new Swiper('.public-tabs-control .swiper-container', {
	slidesPerView: 'auto',
	centeredSlides : true,
	onBeforeResize: function(swiper){
		window.innerWidth > swiper.slides.length * 150 &&swiper.destroy(false,true)
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