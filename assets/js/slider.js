document.querySelectorAll('.swiper').forEach((sliderEl) => {
  new Swiper(sliderEl, {
    loop: true,
    autoplay: {
      delay: 8000,
    },
    pagination: {
      el: sliderEl.querySelector('.swiper-pagination'),
      clickable: true,
    },
    /* navigation: {
      nextEl: sliderEl.querySelector('.swiper-button-next'),
      prevEl: sliderEl.querySelector('.swiper-button-prev'),
    }, */
  });
});
