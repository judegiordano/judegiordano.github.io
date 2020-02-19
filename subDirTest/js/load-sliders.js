// $(document).ready(function () {
//     setTimeout(function () {
//         $(".skills-html").css("width", "90%")
//     }, 1000);
//     setTimeout(function () {
//         $(".skills-js").css("width", "85%")
//     }, 1200);
//     setTimeout(function () {
//         $(".skills-python").css("width", "80%")
//     }, 1400);
//     setTimeout(function () {
//         $(".skills-cs").css("width", "75%")
//     }, 1600);
// });

$(document).ready(function ($) {

    $triggered_times = 0;

    $(window).on('scroll', function () {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = 150;

        if (y_scroll_pos > scroll_pos_test && $triggered_times == 0) {
            $(".skills-html").css("width", "90%")
            $(".skills-js").css("width", "85%")
            $(".skills-python").css("width", "80%")
            $(".skills-cs").css("width", "75%")
            $triggered_times = 1;
        }
    });
})