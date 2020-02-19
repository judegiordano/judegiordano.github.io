$dark = false

$(document).ready(function () {
    $(".slider-input").click(function () {
        if ($dark === false) {
            $("body").css("background-color", "#292929");
            $(".big-text").css("color", "white");
            $(".card-content").css("background-color", "#3c3737");
            $(".content-text-1, .content-text-2, p, .skills-css").css("color", "lightgrey");
            $(".mail").html("&#xf003;");
            $(".facebook").html("&#xf082;");
            $(".github").html("&#xf09b;");
            $(".linkedin").html("&#xf08c;");
            $(".twitter").html("&#xf081;");
            $dark = true
        } else {
            $("body").css("background-color", "white");
            $(".big-text").css("color", "black");
            $(".card-content").css("background-color", "#f9f9f9");
            $(".content-text-1, .content-text-2, p, .skills-css").css("color", "black");
            $(".mail").html("&#xf0e0;");
            $(".facebook").html("&#xf09a;");
            $(".github").html("&#xf092;");
            $(".linkedin").html("&#xf0e1;");
            $(".twitter").html("&#xf099;");
            $dark = false
        }
    });
});