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