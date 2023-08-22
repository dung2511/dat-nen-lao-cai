var PROGRAM = (function () {
	new WOW().init();
	var windows = window;
	var showMenu = function () {
		var btnShowMenu = document.querySelector(".icon-menu");
		var closeMenu = document.querySelector(".over-lay");
		var menu = document.querySelector(".menu");
		if (typeof btnShowMenu != "undefined") {
			btnShowMenu.addEventListener("click", function () {
				menu.classList.add("active");
				closeMenu.classList.add("show");
			});
		}
		if (typeof closeMenu != "undefined") {
			closeMenu.addEventListener("click", function () {
				menu.classList.remove("active");
				closeMenu.classList.remove("show");
			});
		}
	};

	var headerScroll = function () {
		windows.addEventListener("scroll", function () {
			var scrollPossition = windows.scrollY || windows.pageYOffset;
			var headerIndex = document.querySelector(".header-index");
			if (scrollPossition > 0) {
				headerIndex.classList.add("bg-header-scroll");
			} else {
				headerIndex.classList.remove("bg-header-scroll");
			}
		});
	};

	return {
		_: function () {
			showMenu();
			headerScroll();
		},
	};
})();
PROGRAM._();

var SHOWFORM = (function () {
	var showFormSearch = function () {
		const openSearch = document.querySelectorAll(".btn-search");
		const formSearch = document.querySelector(".form-search");
		const closeSearch = document.querySelector(".box-close-search")
		openSearch.forEach((itemOpenS) => {
			if (formSearch != undefined) {
				itemOpenS.addEventListener("click", function () {
					if (window.getComputedStyle(formSearch).display === "none") {
						formSearch.classList.add("active")
					}
				});
				closeSearch.addEventListener("click", function () {
					if (window.getComputedStyle(formSearch).display === "block") {
						formSearch.classList.remove("active")
					}
				})
			} else {
				return;
			}
		})

	}
	var showModalRegister = function () {
		const openModalRegister = document.querySelectorAll(".btn-register");
		const closeModalRegister = document.querySelector(".box-close-modal");
		const modalRegister = document.querySelector(".modal-register");
		openModalRegister.forEach((itemOpen) => {
			if (modalRegister != undefined) {
				itemOpen.addEventListener("click", function () {
					if (window.getComputedStyle(modalRegister).display === "none") {
						modalRegister.classList.add("active");
					}
				});
				closeModalRegister.addEventListener("click", function () {
					if (window.getComputedStyle(modalRegister).display === "block") {
						modalRegister.classList.remove("active");
					}
				});
			} else {
				return;
			}
		})

	};
	var select = function () {
		if (typeof $ !== "undefined") {
			if ($(".select-form").length == 0) return;
			$(".select-form").each(function () {
				$(this).select2();
			});
		}
	}
	return {
		_: function () {
			showFormSearch();
			showModalRegister();
			select();
		},
	};
})();
SHOWFORM._();

var SLIDER = (function () {
	var slideLandingSaleHome = function () {
		const sl_landingSale = document.querySelector(".sl-landing_mains");
		if (typeof sl_landingSale === "undefined") return;
		var swiperLangdingSale = new Swiper(sl_landingSale, {
			slidesPerView: "auto",
			spaceBetween: 16,
			navigation: {
				nextEl: '.button-next-home',
				prevEl: '.button-prev-home'
			},
			breakpoints: {

				1280: {
					slidesPerView: 4,
					loop:false,
				},
				1024: {
					slidesPerView: 3,
					loop:true,

				},
				768: {
					slidesPerView: 2,

				},
				320: {
					slidesPerView: 1,

				},
				640: {
					slidesPerView: 1.5,

				},
			},
		});
	};

	var slideImgLanding = function () {
		document.addEventListener("DOMContentLoaded", function () {
			const sliders = document.querySelectorAll(".item-landing");
			if (sliders.length == 0) return;
			sliders.forEach((element) => {
				var slider = element.querySelector(".swiper-images-landing");
				var prev = element.querySelector(".swiper-button-prev");
				var next = element.querySelector(".swiper-button-next");
				var pagination = element.querySelector(".swiper-pagination")
				var option = {
					slidesPerView: 1,
					navigation: {
						nextEl: next,
						prevEl: prev,
					},
					pagination: {
						el: pagination
					}
				};
				new Swiper(slider, option);
			});
		});
	};
	return {
		_: function () {
			slideImgLanding();
			slideLandingSaleHome();
		},
	};
})();
SLIDER._();