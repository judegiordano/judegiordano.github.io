// instantiate global vkaue for if skill bars are triggered
var $triggered_times = 0;

function loaded_Skills() {
    $(".skills-html").css("width", "90%").css("transition", "none");
    $(".skills-js").css("width", "85%").css("transition", "none");
    $(".skills-python").css("width", "80%").css("transition", "none");
    $(".skills-cs").css("width", "75%").css("transition", "none");
}

function animate_Skills() {
    $(".skills-html").css("width", "90%").css("transition", "all ease-in-out 1.5s");
    $(".skills-js").css("width", "85%").css("transition", "all ease-in-out 1.7s");
    $(".skills-python").css("width", "80%").css("transition", "all ease-in-out 1.9s");
    $(".skills-cs").css("width", "75%").css("transition", "all ease-in-out 2.1s");
}

// on page ready
$(document).ready(function ($) {

    // get local storage item of 'triggered'
    var isTriggered = localStorage.getItem("triggered");

    // if 'triggered' is true
    if (isTriggered == "true") {
        // have skill bars fully loaded with no transition speed
        loaded_Skills();
        // log value of 'triggered'
        console.log(`skill bars loaded: ${isTriggered}`);
        // set global triggered value to 1
        $triggered_times = 1;
    }

    // when user scrolls onto element
    $(window).on('scroll', function () {

        // offset page window 
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = 150;

        // if user scrolls onto determined offset (only if not triggered)
        if (y_scroll_pos > scroll_pos_test && $triggered_times == 0) {
            // slowly load skill bars width
            animate_Skills();
            // set trigered times to 1
            $triggered_times = 1;
            // local storage set to true to not trigger again
            localStorage.setItem("triggered", "true");
        }
    });
})