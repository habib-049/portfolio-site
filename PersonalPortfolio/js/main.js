$(window).on('scroll', function() {
  $('.fade-in').each(function() {
    const top_of_element = $(this).offset().top;
    const bottom_of_window = $(window).scrollTop() + $(window).height();
    if (bottom_of_window > top_of_element + 100) {
      $(this).addClass('visible');
    }
  });
});

$(document).ready(function() {
  $(window).trigger('scroll');
});
