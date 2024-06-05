document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    // Optional parameters

    loop: true,

    autoplay: {
      delay: 3000,
    },

    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

    controller: {
      inverse: true,
    },

  });


});

