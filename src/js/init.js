
slickConfig();

function slickConfig() {
    $('#slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        draggable: false,
        dots: true,
        dotsClass: 'slick-dots sliderDots',
        arrows: false,
        cssEase: 'linear',
    });
}