$dark = false

$(document).ready(function () {
    $(".slider-input").click(function () {
        if ($dark === false) {
            $("body").css("background-color", "black");
            $(".bigText").css("color", "white");
            $(".card-content").css("background-color", "#3c3737");
            $(".content-text-1, .content-text-2, p, .skills-css").css("color", "lightgrey");
            $dark = true
        } else {
            $("body").css("background-color", "white");
            $(".bigText").css("color", "black");
            $(".card-content").css("background-color", "#f9f9f9");
            $(".content-text-1, .content-text-2, p, .skills-css").css("color", "black");
            $dark = false
        }
    });
});
// #3c3737