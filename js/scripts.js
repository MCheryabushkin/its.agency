$(document).ready(function ($) {
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
    const foodCounter = function() {
        var counter = $('.js_food-counter'),
            minus = $('.js_food-minus'),
            item = counter.find('input');
    
        for (var i = 0; i < counter.length; i++) {
            if($(counter[i]).find(item).val() != 0) {
                $(counter[i]).find(minus).css("display", "block");
                $(counter[i]).find(item).css("display", "block");
            }
        }
    };
    
    const foodPlus = function() {
        var parent = $(this).parent(),
            item = parent.find('input'),
            minus = parent.find($('.js_food-minus'));
    
        var value = parseInt(parent.find(item).val());
    
        item.css("display", "block");
        minus.css("display", "block");
        item.val(value + 1);
    };
    
    const foodMinus = function() {
        var parent = $(this).parent(),
            item = parent.find('input'),
            minus = parent.find($('.js_food-minus'));
    
        var value = parseInt(item.val());
    
        item.val(value - 1);
        if(value - 1 == 0) {
            minus.css("display", "none");
            item.css("display", "none");
        }
    };
    
    foodCounter();
    
    $('.js_food-plus').on("click", foodPlus);
    $('.js_food-minus').on("click", foodMinus);
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
    var sidebarCount = 0;
    
    $('.js_open-sidebar').on("click", function (e) {
        e.preventDefault();
    
        if(!sidebarCount) {
            $('.sidebar').css("transform", "translateX(0)");
            sidebarCount = 1;
        } else {
            $('.sidebar').css("transform", "translateX(999px)");
            sidebarCount = 0;
        }
    });
    
    $('.main-content').not('.sidebar').on("click", function() {
        $('.sidebar').css("transform", "translateX(999px)");
        sidebarCount = 0;
    });
});