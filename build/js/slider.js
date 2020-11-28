// Initialize Swiper

var swiper = new Swiper('.swiper-container.swiper-container--newin', {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
    },
  }
});
