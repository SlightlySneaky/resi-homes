$(window).on('resize', function () {
  width = $(window).width();
  if ($(window).width() > 992) {
    $('.swp-image-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      dots: false,
      asNavFor: '.swp-links-slider',
      autoplay: true,
      autoplaySpeed: 8000,
      responsive: [
        {
          breakpoint: 992,
          settings: "unslick"
        },
      ]
    });
    $('.swp-links-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.swp-image-slider',
      dots: false,
      focusOnSelect: true,
    });

    $('.swp-links-slider .slick-slide:first').addClass('active');
    $('.swp-link:first-of-type').find('.swp-text-wrapper').addClass('isShow');
    $('.swp-image-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
      $('.swp-links-slider .slick-slide').removeClass('slick-current');
      $('.swp-links-slider .slick-slide:not(.slick-cloned)').eq(currentSlide).addClass('slick-current');
      $('.swp-links-slider .slick-slide').find('.swp-text-wrapper').removeClass('isShow');
      if ($('.swp-links-slider .slick-slide').hasClass('slick-current')) {
        $('.swp-links-slider .slick-slide.slick-current').find('.swp-text-wrapper').addClass('isShow');
      }
    });

    $('.swp-image-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
      $('.swp-links-slider .slick-slide').eq(currentSlide).addClass('active').siblings().removeClass('active');
    });

    $('.swp-links-slider .slick-slide').on('click', function () {
      $('.swp-image-slider').slick('slickPause');
      $('.swp-links-slider .slick-slide').find('.progressbar').hide();
    });

    $('.swp-links-slider .slick-slide').each(function () {
      if ($(this).hasClass('slick-current')) {
        $('.swp-links-slider .slick-slide.slick-current').find('.swp-text-wrapper').slideDown();
      }
    });
  }
});

$(window).on('load', function () {
  width = $(window).width();
  if ($(window).width() > 992) {
    $('.swp-image-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      dots: false,
      asNavFor: '.swp-links-slider',
      autoplay: true,
      autoplaySpeed: 8000,
      responsive: [
        {
          breakpoint: 992,
          settings: "unslick"
        },
      ]
    });
    $('.swp-links-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.swp-image-slider',
      dots: false,
      focusOnSelect: true,
    });

    $('.swp-links-slider .slick-slide:first').addClass('active');
    $('.swp-link:first-of-type').find('.swp-text-wrapper').addClass('isShow');
    $('.swp-image-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
      $('.swp-links-slider .slick-slide').removeClass('slick-current');
      $('.swp-links-slider .slick-slide:not(.slick-cloned)').eq(currentSlide).addClass('slick-current');
      $('.swp-links-slider .slick-slide').find('.swp-text-wrapper').removeClass('isShow');
      if ($('.swp-links-slider .slick-slide').hasClass('slick-current')) {
        $('.swp-links-slider .slick-slide.slick-current').find('.swp-text-wrapper').addClass('isShow');
      }
    });

    $('.swp-image-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
      $('.swp-links-slider .slick-slide').eq(currentSlide).addClass('active').siblings().removeClass('active');
    });

    $('.swp-links-slider .slick-slide').on('click', function () {
      $('.swp-image-slider').slick('slickPause');
      $('.swp-links-slider .slick-slide').find('.progressbar').hide();
    });

    $('.swp-links-slider .slick-slide').each(function () {
      if ($(this).hasClass('slick-current')) {
        $('.swp-links-slider .slick-slide.slick-current').find('.swp-text-wrapper').slideDown();
      }
    });
  }
});
