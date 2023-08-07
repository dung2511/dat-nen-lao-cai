var PROGRAM = (function () {
  var showMenu = function () {
    var btnShowMenu = document.querySelector(".icon-menu");
    var closeMenu = document.querySelector(".over-lay");
    var menu = document.querySelector(".menu")
    if(typeof btnShowMenu != "undefined") {
      btnShowMenu.addEventListener("click",function() {
        menu.classList.add("active");
        closeMenu.classList.add("show")
      })
    }
    if(typeof closeMenu != "undefined") {
      closeMenu.addEventListener("click",function() {
        menu.classList.remove("active");
        closeMenu.classList.remove("show")
      })
    }
  }
  var slideLandingSaleHome = function () {
    const sl_landingSale = document.querySelector(".sl-landing_mains");
    if (sl_landingSale.length === 0) return;
    var swiperLangdingSale = new Swiper(sl_landingSale, {
      slidesPerView: "auto",
      spaceBetween: 16,
      breakpoints: {
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
  };
  var slideImgLanding = function (sliderId) {
    const slider = new Swiper(`[data-slider-id="${sliderId}"]`, {
      slidesPerView: 1,
    });
    document.addEventListener("DOMContentLoaded", function () {
      const sliders = document.querySelectorAll(".swiper-images-landing");
      if (sliders.length === 0) return;
      sliders.forEach((slider) => {
        const sliderId = slider.dataset.sliderId;
        slideImgLanding(sliderId);
      });
    });
  };
  return {
    _: function () {
      showMenu();
      slideImgLanding();
      slideLandingSaleHome();
    },
  };
})();
PROGRAM._();
