$(document).ready(function () {
    $(".nav-toggler").each(function (_, navToggler) {
        var target = $(navToggler).data("target");
        $(navToggler).on("click", function () {
            $(target).animate({
                width: ["toggle", "swing"],
                height: ["toggle", "swing"],
                opacity: "toggle"
            }, {
                duration: 500,
                specialEasing: {
                    width: "linear",
                    height: "easeOutBounce"
                }
            });
        });
    })
})