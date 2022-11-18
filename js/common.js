$(function () {
    $('.drop').hover(function () {
        $(this).find('.about').stop().slideDown(200);
        // $('.dropdown_content').stop().slideDown('fast');
    }, function () {
        $(this).find('.about').stop().slideUp(200);
        // $('.dropdown_content').stop().slideUp('fast');
    });
});