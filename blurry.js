$(function() {
    $('link a').hover(function() {
      $('#pic').addClass('blur');
    }, function() {
      $('#pic').removeClass('blur');
    });
  });