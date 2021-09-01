const videoSliders = document.querySelectorAll('.js-video-slider');
if (videoSliders.length) {

  const videoSlider = function (slider) {
    return new window.Swiper(slider, {
      slidesPerView: 1,
      centeredSlides: true,
      loop: true,
      freeMode: true,
      navigation: {
        nextEl: '.video-slider__button_type_next',
        prevEl: '.video-slider__button_type_prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        }
    });
  };

  videoSliders.forEach(function (slider) {
    videoSlider(slider);
  });
}
