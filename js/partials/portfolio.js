/*----------- Portfolio -----------*/

(function() {
  var grid = $('.portfolio-area .portfolio-grid');
  var filters = $('.portfolio-area .filter-control li');

  grid.isotope({
    itemSelector: '.single-item',
  });
  filters.on('click', function() {
    filters.removeClass('tab-active');
    $(this).addClass('tab-active');
    var selector = $(this).data('filter');
    grid.isotope({
      filter: selector,
      transitionDuration: '.25s'
    });
  });
}())

$('.portfolio-area .portfolio-grid .portfolio-item').each(function() {
  var element = $(this);
  var target = element.attr('href');
  $(element).animatedModal({
    animatedIn: 'fadeIn',
    animatedOut: 'fadeOut',
    animationDuration: '.15s',
    beforeOpen: function() {
      $(target + '.lightbox-wrapper .lightbox-gallery').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 1,
        smartSpeed: 400
      });
    },
    afterClose: function() {
      $(target + '.lightbox-wrapper .lightbox-gallery').trigger('destroy.owl.carousel');
    }
  });
});
