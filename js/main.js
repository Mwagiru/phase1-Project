$(document).ready(function () {
    $("p").click(function () {
        $("img").show();
    });
});
$(document).ready(function () {
    $(".click").click(function () {
        $(".show").toggle();
        $(".hide").toggle();
    });
});