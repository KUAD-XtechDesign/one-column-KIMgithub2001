$(function () {
    $("#txt_btn").on('click', function() {
        $("#content").slideUp();
    })
    $("#close_btn").on('click', function() {
        $("#content").slideDown();
    })
})