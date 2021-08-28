const videoSliders = document.querySelectorAll('.js-video-slider');
if (videoSliders.length) {

  const videoSlider = function (slider) {
    return new window.Swiper(slider, {
      slidesPerView: 1,
      centeredSlides: true,
      loop: true,
      freeMode: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
      // breakpoints: {
      //   1024: {
      //     centeredSlides: false,
      //     spaceBetween: 24
      //   },
      //   767: {
      //     spaceBetween: 45
      //   },
      // }
    });
  };

  videoSliders.forEach(function (slider) {
    videoSlider(slider);
  });
}
