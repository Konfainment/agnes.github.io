$('.navbar_wrap_button').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('navbar_wrap_button_active');
    $('.novo').toggleClass('novo_active');
    $('.navbar_jpeg').toggleClass('navbar_jpeg_active');
});