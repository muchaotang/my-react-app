$(window).scroll(function () {
    if ($(window).scrollTop() > 10) {
        $('.Header').addClass('floatingHeader');
    } else {
        $('.Header').removeClass('floatingHeader');
    }
}
