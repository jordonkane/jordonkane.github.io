/*!
 * Item: CodeX
 * Description:  Personal Portfolio / Resume / CV / vCard Template
 * Author/Developer: Exill
 * Author/Developer URL: https://themeforest.net/user/exill
 * Version: v1.0.0
 * License: Themeforest Standard Licenses: https://themeforest.net/licenses
 */

/*----------- Table of Contents -----------*/

/**
 * Globals
 * Sidebar
 * Home
 * Portfolio
 * Testimonials
 * Contact
 * Preloader
 */

(function($) {
  'use strict';
  $(function() {
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

    /*----------- Sidebar -----------*/

    $('body').scrollspy({
      target: '.sidebar .list-menu'
    });

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

    /*----------- Home -----------*/

    /* Animated heading text */
    (function() {
      // Set animation timing
      var animationDelay = 2500,
        // Clip effect
        revealDuration = 660,
        revealAnimationDelay = 1500;

      initHeadline();

      function initHeadline() {
        // Initialise headline animation
        animateHeadline($('.cd-headline'));
      }

      function animateHeadline($headlines) {
        var duration = animationDelay;
        $headlines.each(function() {
          var headline = $(this);
          if (headline.hasClass('clip')) {
            var spanWrapper = headline.find('.cd-words-wrapper'),
              newWidth = spanWrapper.width() + 10;
            spanWrapper.css('width', newWidth);
          }

          //trigger animation
          setTimeout(function() {
            hideWord(headline.find('.is-visible').eq(0));
          }, duration);
        });
      }

      function hideWord($word) {
        var nextWord = takeNext($word);

        if ($word.parents('.cd-headline').hasClass('clip')) {
          $word.parents('.cd-words-wrapper').animate({
            width: '2px'
          }, revealDuration, function() {
            switchWord($word, nextWord);
            showWord(nextWord);
          });

        }
      }

      function showWord($word, $duration) {
        if ($word.parents('.cd-headline').hasClass('clip')) {
          $word.parents('.cd-words-wrapper').animate({
            'width': $word.width() + 10
          }, revealDuration, function() {
            setTimeout(function() {
              hideWord($word);
            }, revealAnimationDelay);
          });
        }
      }


      function takeNext($word) {
        return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
      }

      function takePrev($word) {
        return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
      }

      function switchWord($oldWord, $newWord) {
        $oldWord.removeClass('is-visible').addClass('is-hidden');
        $newWord.removeClass('is-hidden').addClass('is-visible');
      }
    }())

    /* Home variants manager */

    // If Video variant
    if ($('.home-area').hasClass('video-variant')) {
      $('#homeVideo').YTPlayer();
    }

    // If particles variant
    else if ($('.home-area').hasClass('particles-variant')) {
      particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": 50,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#999999"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#888888"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.7,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 3,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#999999",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
    }

    // If galaxy variant
    else if ($('.home-area').hasClass('galaxy-variant')) {
      particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": 100,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 1,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 4,
              "size_min": 0.3,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 600
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "bubble"
            },
            "onclick": {
              "enable": false,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 250,
              "size": 0,
              "duration": 2,
              "opacity": 0,
              "speed": 3
            },
            "repulse": {
              "distance": 400,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
    }

    // If snow variant
    else if ($('.home-area').hasClass('snow-variant')) {
      particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": 50,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#fff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 8,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 500,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 2
          },
          "move": {
            "enable": true,
            "speed": 3,
            "direction": "bottom",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "bubble"
            },
            "onclick": {
              "enable": false,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 0.5
              }
            },
            "bubble": {
              "distance": 400,
              "size": 4,
              "duration": 0.3,
              "opacity": 1,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
    }

    // If bubble variant
    else if ($('.home-area').hasClass('bubble-variant')) {
      particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": 4,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000"
            },
            "polygon": {
              "nb_sides": 6
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.2,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 90,
            "random": false,
            "anim": {
              "enable": true,
              "speed": 10,
              "size_min": 40,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 200,
            "color": "#ffffff",
            "opacity": 1,
            "width": 2
          },
          "move": {
            "enable": true,
            "speed": 8,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "grab"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
    }

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

    /*----------- Contact -----------*/

    $('.contact-form').on('submit', function(event) {
      var form = $(this);
      var submitBtn = form.find('#contact-submit');
      var submitBtnText = submitBtn.text();
      var feedbackEl = form.find('.contact-feedback');
      event.preventDefault();
      // Waiting for the response from the server
      submitBtn.html('Wait...').addClass('wait').prop('disabled', true);
      setTimeout(function() {
        // Posts the Form's data to the server using Ajax
        $.ajax({
            url: form.attr('action'),
            type: 'POST',
            data: form.serialize(),
          })
          // Getting a response from the server
          .done(function(response) {
            // If the PHP file succeed sending the message
            if (response == 'success') {
              // Feedback to the user
              submitBtn.removeClass('wait').html('Success').addClass('success');
              feedbackEl.addClass('success').html('Thank you for your message. It has been sent.').fadeIn(200);
              setTimeout(function() {
                submitBtn.html(submitBtnText).removeClass('success').prop('disabled', false);
                feedbackEl.fadeOut(200).removeClass('success').html('');
              }, 6000);
              // Clears the Form
              form[0].reset();
              // If something is wrong
            } else {
              // Feedback to the user
              console.log(response);
              submitBtn.removeClass('wait').html('Error').addClass('error');
              feedbackEl.addClass('error').html('Server error! Please check your browser console log for more details.').fadeIn(200);
              setTimeout(function() {
                submitBtn.html(submitBtnText).removeClass('error').prop('disabled', false);
                feedbackEl.fadeOut(200).removeClass('error').html('');
              }, 6000);
            }
          });
      }, 1000);
    });

  });
  $(window).on('load', function() {
    /*----------- Preloader -----------*/

    $('.preloader-icon').fadeOut(400);
    $('.preloader').delay(500).fadeOut('slow');

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

  });
}(jQuery));