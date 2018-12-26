$(function () {
    var div = $('.categories__menu'),
        ul = $('.categories-list'),
        ulPadding = 15;
    var divWidth = div.width();
    var lastLi = ul.find('div:last-child');
    div.mousemove(function (e) {
        var ulWidth = lastLi[0].offsetLeft + lastLi.outerWidth() + ulPadding;

        var left = (e.pageX - div.offset().left) * (ulWidth - divWidth) / divWidth;
        div.scrollLeft(left);
    });
});


$('.js_categories').on("click", function () {
    $('.main-display').addClass('modal-opened');
    $('body').css('overflow', 'hidden');
   $('.categories').slideToggle();
});


const categoriesMenuClose = function () {
    if ($(window).innerWidth() < 768) {
        $('.categories').slideToggle();
        $('.main-display').removeClass('modal-opened');
        $('body').css('overflow-y', 'scroll');
    }
};
$('.categories-list__item').on("click", categoriesMenuClose);

$(window).on('resize', function () {
    if($(window).innerWidth() > 768) {
        $('.categories').css("display", "block");
        $('.main-display').removeClass('modal-opened');
        $('body').css('overflow-y', 'scroll');
    } else {
        $('.categories').css("display", "none");
        $('.main-display').removeClass('modal-opened');
        $('body').css('overflow-y', 'scroll');
    }
});