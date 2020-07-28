
(function() {
  var slider = $('.staff__slider');
  var pagi = $('.js-staff-pagi');

  slider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
      var currentSlideElement = $(event.target).find('.slick-current');
      var i = (currentSlide ? currentSlide : 0) + 1;
      pagi.html("<span>" + i + "</span>" + ' / ' + slick.slideCount);
  });

  slider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: ".js-btn-staff-left",
    nextArrow: ".js-btn-staff-right",
    rtl: true,
    arrows: true,
    variableWidth: true,
    responsive: [

    {
      breakpoint: 1140,
      settings: {
        arrows: false,
        slidesToShow: 1,
        variableWidth: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        variableWidth: false
      }
    }


  ]
  });
}());

(function() {
  var slider = $('.instagram-slider');
  var pagi = $('.js-insta-pagi');

  slider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
      var currentSlideElement = $(event.target).find('.slick-current');
      var i = (currentSlide ? currentSlide : 0) + 1;
      pagi.html("<span>" + i + "</span>" + ' / ' + slick.slideCount);
  });

  slider.slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: '120px 0 ',
    variableWidth: true,

    responsive: [
        {
          breakpoint: 1400,
          settings: {
            centerPadding: '80px 0 '
          }
        },
        {
          breakpoint: 1240,
          settings: {
            slidesToShow: 4,
            centerMode: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            centerMode: true,
            centerPadding: '60px 0 ',
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            arrows: false,
            centerPadding: '70px 0 ',
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            arrows: false,
            centerPadding: '120px 0 ',
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            arrows: false,
            centerPadding: '55px 0 ',
          }
        }

      ]
  });
}());

(function() {
  var slider = $('.reviews__slider-first');
  var pagi = $('.js-reviews-pagi-1');

  slider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
      var currentSlideElement = $(event.target).find('.slick-current');
      var i = (currentSlide ? currentSlide : 0) + 1;
      pagi.html("<span>" + i + "</span>" + ' / ' + slick.slideCount);
  });

  slider.slick({
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    centerPadding: '120px 8px ',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows: false,
          centerMode: true
        }
      }
    ]
  });
}());

(function() {
  var slider = $('.reviews__slider-second');
  var pagi = $('.js-reviews-pagi-2');

  slider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
      var currentSlideElement = $(event.target).find('.slick-current');
      var i = (currentSlide ? currentSlide : 0) + 1;
      pagi.html("<span>" + i + "</span>" + ' / ' + slick.slideCount);
  });

  slider.slick({
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows: false,
          centerMode: true
        }
      }
    ]
  });
}());

(function() {
  var slider = $('.results__slider');
  var pagi = $('.js-results-pagi');

  slider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
      var currentSlideElement = $(event.target).find('.slick-current');
      var i = (currentSlide ? currentSlide : 0) + 1;
      pagi.html("<span>" + i + "</span>" + ' / ' + slick.slideCount);
  });

  slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.results__preview',
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  });
}());






$('.results__preview').slick({
  arrows: false,
  vertical: true,
  asNavFor: '.results__slider',
  slidesPerRow: 5,
  slidesToShow: 5,
  verticalSwiping: true

});







$('.header__hamburger').on('click', function () {
    $('.header__hamburger').toggleClass('active');
    $('.main-navigation').toggleClass('active');
    $('body').toggleClass('overflow');
});

$('.main-navigation a').on('click', function () {
    $('.header__hamburger').toggleClass('active');
    $('.main-navigation').toggleClass('active');
    $('body').toggleClass('overflow');
});

$('.js-city-trigger').on('click', function () {
  $('.modal-city').addClass('active');
  $('body').css('overflow-y', 'hidden')
})

$('.closed-modal').on('click', function () {
  $('.modal-city').removeClass('active');
  $('body').css('overflow-y', 'auto')
})


$('.js-gratitude-trigger').on('click', function () {
  $('.modal-gratitude').addClass('active');
  $('body').css('overflow-y', 'hidden')
})

$('.modal-gratitude__close').on('click', function () {
  $('.modal-gratitude').removeClass('active');
  $('body').css('overflow-y', 'auto')
})

objectFitImages();
