var SLIDER = {
  slideLandingSaleHome: function () {
    if (typeof Tech.$(".sl-landing_mains") === "undefined") return;
    const swiperLangdingSale = new Swiper(".sl-landing_mains", {
      slidesPerView: "auto",
      spaceBetween: 16,
      breakpoints: {
        1024: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
        320: {
          slidesPerView: 1,
        },
        425: {
          slidesPerView: 2,
        },
      },
    });
  },
  init: function () {
    SLIDER.slideLandingSaleHome();
  },
};
Tech.Query.ready(function () {
  setTimeout(function () {
    SLIDER.init();
  }, 100);
});
