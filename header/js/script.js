$(window).on("load", function () {
    $("#loader-wrapper").delay(3000).fadeToggle("fast");
})

$(document).ready(function () {
    $(".hamburgar-menu").click(function () {
        $("#hamBurgar").slideToggle("fast");
    })
    $("#close").click(function () {
        $("#hamBurgar").slideToggle("fast");
    })
})