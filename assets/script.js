var callback = function () {
    $('.item-skills').each(function () {
        var newWidth = $(this).parent().width() * ($(this).data('percent') / 100);
        $(this).width(0);
        $(this).animate({
            width: newWidth,
        }, 1000);
    });
    $('.icons-red').each(function () {
        var height = $(this).height();
        $(this).animate({
            height: 14,
        }, 2000);
    });
};
$(document).ready(callback);

var resize;
window.onresize = function () {
    clearTimeout(resize);
    resize = setTimeout(function () {
        callback();
    }, 100);
};