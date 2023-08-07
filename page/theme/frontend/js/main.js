var PROGRAM = (function () {
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

	var slideLandingSaleHome = function () {
		const sl_landingSale = document.querySelector(".sl-landing_mains");
		if (typeof sl_landingSale === "undefined") return;
		var swiperLangdingSale = new Swiper(sl_landingSale, {
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
	};
	var slideImgLanding = function () {
		document.addEventListener("DOMContentLoaded", function () {
			const sliders = document.querySelectorAll(".box-slide");
			if (sliders.length == 0) return;
			sliders.forEach((elmt) => {
				var slider = elmt.querySelector(".slider-container");
				var nuttrai = elmt.querySelector(".nut-trai");
				var nutphái = elmt.querySelector(".nut-phai");
				var option = {
					slidesPerView: 1,
					navigation: {
						nextEl: nuttrai,
						prevEl: nutphái,
					},
				};
				new Swiper(slider, option);
			});
		});
	};
	var showModalRegister = function () {
		const openModalRegister = document.querySelector(".btn-register");
		const closeModalRegister = document.querySelector(".box-close-modal");
		const modalRegister = document.querySelector(".modal-register");
		if (modalRegister != undefined) {
			openModalRegister.addEventListener("click", function () {
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
	};
	return {
		_: function () {
			showMenu();
			slideImgLanding();
			slideLandingSaleHome();
			showModalRegister();
			headerScroll();
		},
	};
})();
PROGRAM._();
