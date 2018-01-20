$(document).ready(function() {
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
    })
});