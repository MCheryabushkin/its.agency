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