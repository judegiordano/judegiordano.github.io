var $triggered_times = 0;

$(document).ready(function ($) {

    var isTriggered = localStorage.getItem("triggered");

    if (isTriggered == "true") {
        $(".skills-html").css("width", "90%").css("transition", "all ease-in-out 0s");
        $(".skills-js").css("width", "85%").css("transition", "all ease-in-out 0s");
        $(".skills-python").css("width", "80%").css("transition", "all ease-in-out 0s");
        $(".skills-cs").css("width", "75%").css("transition", "all ease-in-out 0s");
        console.log(`skill bars loaded: ${isTriggered}`);
        $triggered_times = 1;
    }

    $(window).on('scroll', function () {

        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = 150;

        if (y_scroll_pos > scroll_pos_test && $triggered_times == 0) {
            $(".skills-html").css("width", "90%").css("transition", "all ease-in-out 1.5s");
            $(".skills-js").css("width", "85%").css("transition", "all ease-in-out 1.7s");
            $(".skills-python").css("width", "80%").css("transition", "all ease-in-out 1.9s");
            $(".skills-cs").css("width", "75%").css("transition", "all ease-in-out 2.1s");
            $triggered_times = 1;
            localStorage.setItem("triggered", "true");
        }
    });
})