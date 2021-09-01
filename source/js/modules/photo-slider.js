const photoSliders = document.querySelectorAll('.js-photo-slider');
if (photoSliders.length) {

  const photoSlider = function (slider) {
    return new window.Swiper(slider, {
      slidesPerView: 'auto',
      centeredSlides: true,
      // loop: true,
      freeMode: true,
      navigation: {
        nextEl: '.photo-slider__button_type_next',
        prevEl: '.photo-slider__button_type_prev',
      }
    });
  };

  photoSliders.forEach(function (slider) {
    photoSlider(slider);
  });
}
