var PROGRAM = (function () {
  var slideLandingSale = function () {
    const sl_landingSale = document.querySelector(".sl-landing_sale");
    if (sl_landingSale.length === 0) return;
    var swiperLangdingSale = new Swiper(sl_landingSale, {});
  };
  var slideImgLanding = function (sliderId) {
    const slider = new Swiper(`[data-slider-id="${sliderId}"]`, {
      slidesPerView: 1,
    });
    document.addEventListener("DOMContentLoaded", function () {
      const sliders = document.querySelectorAll(".swiper-images-landing");
      if(sliders.length === 0) return;
      sliders.forEach((slider) => {
        const sliderId = slider.dataset.sliderId;
        slideImgLanding(sliderId);
      });
    });
  };
  return {
    _: function () {
      // gọi lại các function ở đây
      slideImgLanding();
    },
  };
})();
PROGRAM._();
