const changePhrase = function() {
    if($(window).innerWidth() < 768) {
        $('.js_change-add').text('Готово');
    } else {
        $('.js_change-add').text('Добавить');
    }
};
const openModal = function() {
    const modal = $('.modal-food');
    changePhrase();
    $('body').css("overflow", "hidden");
    $('.main-content').css("filter", "blur(5px)");
    $('.main-content__back').css("display", "block");
    modal.animate({ bottom: 0,
                    height: '100vh'}, 800);

    setTimeout(function () {
        $('.calories__item').css('transform', 'translateY(0)');
        $('.modal-food__image img').css('transform', 'translateY(0)');
    }, 900);
};

const closeModal = function() {
    const modal = $('.modal-food');
    $('body').css("overflow-y", "scroll");
    modal.animate({ bottom: '-9999px',
        height: '0px'}, 1000);

    $('.main-content').css("filter", "none");
    $('.main-content__back').css("display", "none");
    $('.modal-food__image img').css('transform', 'translateY(9999px)');
    $('.calories__item').css('transform', 'translateY(9999px)');
};

var calories = $('.calories__item'),
    duration = 0.6;
for (var i = 0; i < calories.length; i++) {
    $(calories[i]).css('transition', `all ${duration}s`);
    duration += 0.2;
}

$(window).on('resize', function() {
    changePhrase();
});

$('.js_open-modal').on("click", function(e) {
    e.preventDefault();
    openModal();
});


$('.js_modal-close').on("click", function(e) {
    e.preventDefault();
    closeModal();
});