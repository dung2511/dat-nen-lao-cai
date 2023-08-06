var PROGRAM = (function () {
  var slideLandingSale = function () {
    const sl_landingSale = document.querySelector(".sl-landing_sale");
    if(sl_landingSale.length === 0) return;
    var swiperLangdingSale = new Swiper(sl_landingSale, {

    })
  };
  var slideImgLanding = function () {
    const sl_imagesLanding = document.querySelector(".swiper-images-landing");
    if(sl_imagesLanding.length === 0) return;
    var swiperImagesLanding = new Swiper (sl_imagesLanding, {
      slidesPerView: 1
    })
  }
  return {
    _: function () {
      // gọi lại các function ở đây
      slideImgLanding();
    },
  };
})();
PROGRAM._();