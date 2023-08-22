<<<<<<< HEAD
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
=======
var SLIDER = (function () {
	var slideLandingExpert = function () {
		const sl_landingExpert = document.querySelector(".sl_expert");
		if (typeof sl_landingExpert === "undefined") return;
		var swiperLangdingSale = new Swiper(sl_landingExpert, {
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
		});
	};
	var slideEquipment = function () {
		const sl_equipment = document.querySelector(".sl_equipment");
		if (typeof sl_equipment === "undefined") return;
		var swiperLangdingSale = new Swiper(sl_equipment, {
			slidesPerView: "auto",
			spaceBetween: 30,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				1280: {
					slidesPerView: 4,
				},
				1024: {
					slidesPerView: 3,
				},
				876: {
					slidesPerView: 2.5
				},
				640: {
					slidesPerView: 2,
				}, 575: {
					slidesPerView: 1.5
				},
				480: {
					slidesPerView: 1
				}



			}
		});
	};
	var slideGralleryThumbs = function () {
		const sl_gralleryThumbs = document.querySelector(".gallery-thumbs");
		if (typeof sl_gralleryThumbs === "undefined") return;
		var swiperGralleyThumbs = new Swiper(sl_gralleryThumbs, {
			spaceBetween: 10,
			slidesPerView: 4,
			freeMode: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
		})
		const sl_gralleryTop = document.querySelector(".gallery-top");
		if (typeof sl_gralleryTop === "undefined") return;
		var swiperGralleyTop = new Swiper(sl_gralleryTop, {
			slidesPerView: 1,
			thumbs: {
				swiper: swiperGralleyThumbs
			}
		})
	}
	var slideProcedure = function () {
		const sl_procedure = document.querySelector(".sl_procedure");
		if (typeof sl_procedure == "undefined") return;
		var swiper = new Swiper(sl_procedure, {
			slidesPerView: "auto",
			spaceBetween: 24,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				1280: {
					slidesPerView: 2.5,
				},
				1024: {
					slidesPerView: 2,
				},
				876: {
					slidesPerView: 1.5
				},
				480: {
					slidesPerView: 1
				}
			}
		})
	}
	return {
		_: function () {
			slideLandingExpert();
			slideEquipment();
			slideGralleryThumbs();
			slideProcedure();
		},
	};
})();
SLIDER._();

var COUNTSTEP = (function () {
	var countstep = function () {
		const steps = document.querySelectorAll('.modules-content .step');
		console.log(steps);
		// steps.forEach((step,index) => {
		// 	step.
		// })


	}
	return {
		_: function () {
			// countstep();
		}
	}
})();
COUNTSTEP._();

var TABS = (function () {
	var tabExamination = function () {
		const tabsBtns = document.querySelectorAll(".tabs-link");
		const contents = document.querySelectorAll(".content-tab");
		tabsBtns.forEach(tabsBtn => {
			tabsBtn.addEventListener("click", () => {
				const activeTab = tabsBtn.getAttribute("data-tab-id");
				contents.forEach(content => {
					if (content.id === activeTab) {
						content.classList.add("active");
					}
					else {
						content.classList.remove("active");
					}
				})
			})
		})
	}
	return {
		_: function () {
			tabExamination();
		}
	}
})()
TABS._();
>>>>>>> 89e2096d55645918b9124f0f578b5b8576986f80
