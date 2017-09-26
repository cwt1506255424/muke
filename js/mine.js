$(function () {

    $(".bac").toggle(
        function () {
            $(".bac i").css("left","0.4rem");
        },
        function () {
            $(".bac i").css("left","-0.1rem");
        }
    )
});

