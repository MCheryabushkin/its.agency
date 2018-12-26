var count = 0;

const openNav = function() {
    if(!count) {
        $('body').css("overflow", "hidden");
        $('nav.nav').slideDown('slow');
        $('.header__menu-btn').addClass('open');
        count = 1;
    } else {
        $('body').css("overflow-y", "scroll");
        $('.header__menu-btn').removeClass('open');
        $('nav.nav').hide();
        count = 0;
    }
};

$('.js_open-nav').on("click", function (e) {
    e.preventDefault();
    openNav();
});

$('.nav-list__item').on("click", function() {
    if ($(window).innerWidth() < 992) {
        $('body').css("overflow-y", "scroll");
        $('.header__menu-btn').removeClass('open');
        $('nav.nav').hide();
        count = 0;
    }
});

