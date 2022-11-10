/*----------- Testimonials -----------*/

$('.testimonials-area .owl-carousel').owlCarousel({
  items: 3,
  loop: true,
  margin: 30,
  nav: false,
  dots: true,
  smartSpeed: 400,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 3
    }
  }
});
