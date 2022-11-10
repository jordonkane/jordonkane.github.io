/*----------- Sidebar -----------*/

$('body').scrollspy({ target: '.sidebar .list-menu' });

$('.sidebar .list-menu').clone().children().appendTo('.mobile-navbar .navbar-nav').find('.nav-link').removeClass('active');

$(document).on('mouseup', function(event) {
  if ($('.mobile-navbar #mobileNavbarSupportedContent').hasClass('show')) {
    // The mobile Bootstrap navbar dropdown
    var navbarToggler = $('.mobile-navbar .navbar-toggler');
    if (!navbarToggler.is(event.target) && navbarToggler.has(event.target).length === 0) {
      navbarToggler.trigger('click');
    }
  }
});
