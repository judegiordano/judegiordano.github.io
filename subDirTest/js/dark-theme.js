var $dark;

$(document).ready(function () {

    var isDark = localStorage.getItem("darkTheme");

    if (isDark == "true") {
        $dark = true
        $("body").css("background-color", "#292929");
        $(".big-text").css("color", "white");
        $(".card-content").css("background-color", "#3c3737");
        $(".content-text-1, .content-text-2, p, .skills-css").css("color", "lightgrey");
        $(".mail, .facebook, .github, .linkedin, .twitter, .phone").css("color", "lightgrey");
    } else {
        $dark = false
        $("body").css("background-color", "white");
        $(".big-text").css("color", "black");
        $(".card-content").css("background-color", "#f9f9f9");
        $(".content-text-1, .content-text-2, p, .skills-css").css("color", "black");
        $(".mail, .facebook, .github, .linkedin, .twitter, .phone").css("color", "black");
    }

    $(".slider-input").click(function () {
        if ($dark === false) {
            $("body").css("background-color", "#292929").css("transition", "none");
            $(".big-text").css("color", "white");
            $(".card-content").css("background-color", "#3c3737");
            $(".content-text-1, .content-text-2, p, .skills-css").css("color", "lightgrey");
            $(".mail, .facebook, .github, .linkedin, .twitter, .phone").css("color", "lightgrey");
            localStorage.setItem("darkTheme", "true");
            $dark = true;
        } else {
            $("body").css("background-color", "white");
            $(".big-text").css("color", "black");
            $(".card-content").css("background-color", "#f9f9f9");
            $(".content-text-1, .content-text-2, p, .skills-css").css("color", "black");
            $(".mail, .facebook, .github, .linkedin, .twitter, .phone").css("color", "black");
            localStorage.setItem("darkTheme", "false");
            $dark = false;
        }
    });
});