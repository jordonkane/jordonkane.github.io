/*----------- Globals -----------*/

// Scrolling animation if the user clicks on a Hash link that has 'data-scroll' attribute
$(document).on('click', 'a[data-scroll][href^="#"]', function(e) {
  var id = $(this).attr('href');
  var $id = $(id);
  if ($id.length === 0) {
    return;
  }
  e.preventDefault();
  $('body, html').animate({
    scrollTop: $id.offset().top
  }, 600);
});
