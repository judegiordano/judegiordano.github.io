$dark = false

$(document).ready(function () {
    $(".slider-input").click(function () {
        if ($dark === false) {
            $("body").css("background-color", "#292929");
            $(".big-text").css("color", "white");
            $(".card-content").css("background-color", "#3c3737");
            $(".content-text-1, .content-text-2, p, .skills-css").css("color", "lightgrey");
            $dark = true
        } else {
            $("body").css("background-color", "white");
            $(".big-text").css("color", "black");
            $(".card-content").css("background-color", "#f9f9f9");
            $(".content-text-1, .content-text-2, p, .skills-css").css("color", "black");
            $dark = false
        }
    });
});
// #3c3737

// <i style="font-size:24px" class="fa">&#xf09a;</i> facebook
// <i style="font-size:24px" class="fa">&#xf09b;</i> git
// <i style="font-size:24px" class="fa">&#xf08c;</i> linkedin
// <i style="font-size:24px" class="fa">&#xf081;</i> twitter
// <i style="font-size:24px" class="fa">&#xf003;</i> envelope