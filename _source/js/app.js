function iOS() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
};
if(iOS()) {
	$(".body").addClass("iphone");
};
$(document).ready(function() {

	let windowWidth = $(window).width();

	$("[data-fancybox]").fancybox({
        autoFocus: false,
        touch: false,
    });

    // $(".js-menu-btn").on("click", function() {
    // 	$(this).toggleClass("active");
    // 	$("body").toggleClass("over");
    // 	$(".js-menu").toggleClass("active");
    // });

    let splitter = $(".js-splitter-value").html(),
    	splitterChars = splitter.split('');
	$(".js-splitter-value").html("")
    splitterChars.forEach(function(element) {
    	$(".js-splitter-value").append('<div class="splitter__value-item">'+element+'</div>');
    });

    $(".js-menu-btn").on("click", function(e) {
    	$(".js-menu-btn").toggleClass("active");
    	$(".js-menu").toggleClass("active");
    	$("body").toggleClass("over");
    });

	

    let worseTop = document.querySelector(".js-imp-top-slider");
    let worseBotElems = document.querySelectorAll(".js-imp-bot-slide");
    if(windowWidth < 768) {
    	worseBotElems.forEach(function(element) {
			worseTop.append(element);
    	});
	}

	let modalFinish = 0;
	$(".js-input-radio").on("change", function(e) {
		$(this).closest(".js-modal-content").find(".button").removeAttr("disabled");
	});

	$(".js-input-main").on("change", function(e) {
		modalFinish = $(this).val();
	});

	$(".js-radio-finish").on("change", function(e) {
		modalFinish = $(this).val();
	});

	let modalIdx = 0;
	$(".js-button-next").on("click", function() {
		let modalCur = $(this).closest(".js-modal-content");
		modalIdx++;
		$(".js-line-thumb").css({"transform":"translateX("+(100*modalIdx)+"%)"});
		modalCur.removeClass("active");
		if(modalIdx == 2) {
			$(".js-modal-content[data-content="+modalFinish+"]").addClass("active");
		}else{
			$(".js-modal-content[data-content="+modalIdx+"]").addClass("active");
		}
	});

	$(".js-button-finish").on("click", function() {
		$(".js-modal-q").removeClass("active");
		$(".js-modal-a").addClass("active");
		$(".js-modal-answer[data-answer="+modalFinish+"]").addClass("active");
		
	});

	$(".js-modal-quiz").fancybox({
        autoFocus: false,
        touch: false,
		afterClose: function() {
			$(".js-modal-q").addClass("active");
			$(".js-modal-a").removeClass("active");
			$(".js-modal-answer").removeClass("active");
			$(".js-modal-content").removeClass("active");
			$(".js-modal-content[data-content=0]").addClass("active");
			modalIdx = 0;
			modalFinish = 0;
			$(".js-line-thumb").css({"transform":"translateX("+(100*modalIdx)+"%)"});
			$(".js-input-radio").prop("checked", false);
		}
    });

	function fbClose(){
        $.fancybox.close();
    };

    if($(".js-improvement")[0]) {
    	let curSlide;
	    var swiper = new Swiper('.js-improvement', {
	        slidesPerView: "auto",
	        spaceBetween: 15,
	        observer: true,
            observeParents: true,
	        loop: true,
	        loopedSlides: 5,
	        loopAdditionalSlides: 5,
	        initialSlide: 3,
	        speed: 5000,
	        autoplay: {
                delay: 5,
                disableOnInteraction: true
            },
	        pagination: {
	            el: '.reviews__pagination',
	            clickable: true,
	        },
	        navigation: {
	            nextEl: '.swiper-button-next',
	            prevEl: '.swiper-button-prev',
	        },
	        breakpoints: {
	            // when window width is >= 320px
	            0: {
	            	autoplay: false,
	            	speed: 500,
	                slidesPerView: 1,
	            },
	            // when window width is >= 480px
	            768: {
	            	speed: 5000,
	            	autoplay: {
		                delay: 5,
		                disableOnInteraction: true
		            },
	                slidesPerView: "auto",
	            },
	            // when window width is >= 480px
	            1024: {
	            },
	            // when window width is >= 640px
	            1200: {
	                spaceBetween: 15,
	                slidesPerView: "auto",
	            },
	        },
	    });
	    var swiper = new Swiper('.js-improvement-bot', {
	        slidesPerView: "auto",
	        spaceBetween: 15,
	        observer: true,
            observeParents: true,
	        loop: true,
	        loopedSlides: 5,
	        loopAdditionalSlides: 5,
	        initialSlide: 3,
	        speed: 5000,
	        autoplay: {
                delay: 5,
                disableOnInteraction: true
            },
	        // pagination: {
	        //     el: '.reviews__pagination',
	        //     clickable: true,
	        // },
	        // navigation: {
	        //     nextEl: '.swiper-button-next',
	        //     prevEl: '.swiper-button-prev',
	        // },
	        breakpoints: {
	            // when window width is >= 320px
	            0: {
	            },
	            // when window width is >= 480px
	            768: {
	            },
	            // when window width is >= 480px
	            1024: {
	            },
	            // when window width is >= 640px
	            1200: {
	                spaceBetween: 15,
	                slidesPerView: "auto",
	            },
	        },
	    });

	    var swiper = new Swiper('.js-reviews-slider', {
	        slidesPerView: 1,
	        spaceBetween: 15,
	        observer: true,
            observeParents: true,
	        loop: true,
	        loopedSlides: 5,
	        loopAdditionalSlides: 5,
	        initialSlide: 1,
	        speed: 1000,
	        pagination: {
	            el: '.js-reviews-pag',
	            clickable: true,
	        },
	        navigation: {
	            nextEl: '.js-reviews-next',
	            prevEl: '.js-reviews-prev',
	        },
	        breakpoints: {
	            // when window width is >= 320px
	            0: {
	            },
	            // when window width is >= 480px
	            768: {
	            },
	            // when window width is >= 480px
	            1024: {
	            },
	            // when window width is >= 640px
	            1200: {
	                spaceBetween: 15,
	                slidesPerView: 1,
	            },
	        },
	    });


	}

	$(window).resize(function() {
		if(windowWidth >= 1024) {

		}
	})

});