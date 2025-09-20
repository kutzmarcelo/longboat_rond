import Swiper from 'swiper';
//import 'swiper/css';
/* import 'swiper/css/navigation';
import 'swiper/css/pagination' */;

document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.swiper');
  if (slider && !slider.classList.contains('swiper-initialized')) {
    new Swiper('.swiper', {
      loop: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    slider.classList.add('swiper-initialized');
  }
});
