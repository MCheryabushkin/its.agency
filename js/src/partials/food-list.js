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