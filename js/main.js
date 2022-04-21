
$(document).ready(function () {
    $(".click").click(function () {
        $(".show").slideToggle();
        $(".hide").slideToggle();
    });
});

$(document).ready(function () {
    $(".clicked").click(function () {
        $(".show1").toggle();
        $(".hide1").toggle();
    });
});
$(document).ready(function () {
    $(".clickable").click(function () {
        $(".show2").fadeToggle();
        $(".hide2").fadeToggle();
    });
});
