// instantiate global dark variable
var $dark;

function light_Theme() {
    $("body").css("background-color", "#292929");
    $(".big-text").css("color", "white");
    $(".card-content").css("background-color", "#3c3737");
    $(".content-text-1, .content-text-2, p, .skills-css").css("color", "lightgrey");
    $(".mail, .facebook, .github, .linkedin, .twitter, .phone").css("color", "lightgrey");
}

function dark_Theme() {
    $("body").css("background-color", "white");
    $(".big-text").css("color", "black");
    $(".card-content").css("background-color", "#f9f9f9");
    $(".content-text-1, .content-text-2, p, .skills-css").css("color", "black");
    $(".mail, .facebook, .github, .linkedin, .twitter, .phone").css("color", "black");
}

// on document ready
$(document).ready(function () {
    // use local storage to check dark theme value
    var isDark = localStorage.getItem("darkTheme");

    // if dark theme is enabled
    if (isDark == "true") {
        // set global dark to 'true'
        $dark = true;
        // change theme of page
        light_Theme();
    } else {
        // set global dark to 'false'
        $dark = false;
        // change theme of page
        dark_Theme();
    }

    // when the slider input is clicked
    $(".slider-input").click(function () {
        // check global dark value
        if ($dark === false) {
            // inverse page theme
            light_Theme();
            // set local storage theme value
            localStorage.setItem("darkTheme", "true");
            // set global dark
            $dark = true;
        } else {
            // inverse page theme
            dark_Theme();
            // set local storage theme value
            localStorage.setItem("darkTheme", "false");
            // set global dark
            $dark = false;
        }
    });
});