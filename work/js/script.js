$(function () {
    $(".txt").hide();
    $(".txt_btn").on("click", function() {
        $(this).siblings(".txt").slideToggle();
    });
});