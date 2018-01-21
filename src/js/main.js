$(document).ready(function() {

    slickConfig();

    $('.headerHamburger, .headerMobileTrackClose').on('click', function(e) {
        var status = this.getAttribute('data-nav');

        if (status === '' || status === null) {
            return;
        }

        var mobile_nav = $('.headerMobile'),
            body = $('body');

        switch(status) {
            case 'open': 
                mobile_nav.addClass('headerMobile--active');
                body.addClass('headerMobileOverflow--disable');
                break;
            case 'close': 
                mobile_nav.removeClass('headerMobile--active');
                body.removeClass('headerMobileOverflow--disable');
                break;
        }
    });

    /**
     * Slider configuration
     */
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
            adaptiveHeight: true
        });
    }

});