$(document).ready(function () {
    $(".navbar .nav-link").click(function () {
        $('.navbar .nav-link').removeClass('active');
        $(this).addClass('active');
    })
})