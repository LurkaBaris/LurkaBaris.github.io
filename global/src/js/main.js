$(document).ready(function () {
    $(window).on("mousewheel DOMMouseScroll MozMousePixelScroll", () => animateScroll(event));

    $(".works__prev").on("click", function () {
        $(".works__carousel-container").fadeOut(500, prev);
        $(".works__carousel-container").fadeIn(500);
    });

    $(".works__next").on("click", function () {
        $(".works__carousel-container").fadeOut(500, next);
        $(".works__carousel-container").fadeIn(500);
    });

    $(".nav__link").on("click", () => navClick(event));

    $(".btn_header").on("click", btnClick);

    $(".btn_nav").on("click", btnClick);


    $(".top__menu").on("click", burgerOn);

    $(".burger-menu__item").on("click", function (e) {

        $(window).on("mousewheel DOMMouseScroll MozMousePixelScroll", () => animateScroll(event));

        $(".wrapper").removeClass("wrapper_active");

        $(".wrapper").removeClass("contact-bg");

        onFocus($(".slide_active"));

        $(".slide_active").removeClass("slide_active");

        $($(".nav__item")[activeSlide]).removeClass("nav__item_active");

        let index = $(".burger-menu__item").index(e.target);

        $($(".slide")[index]).addClass("slide_active");
        activeSlide = index;

        $($(".nav__item")[activeSlide]).addClass("nav__item_active");

        checkBg();
        checkBtn();
        onFocus($(".slide_active"));
        $(".burger-menu").toggleClass("burger-menu_active");

        $(".top__menu").off();
        $(".top__menu").on("click", burgerOn);
    });

    $(".wrapper").on("click", function (e) {
        if ($(e.target).hasClass("wrapper_active")) {
            $(window).on("mousewheel DOMMouseScroll MozMousePixelScroll", () => animateScroll(event));

            $(".wrapper").removeClass("wrapper_active");

            $(".wrapper").removeClass("contact-bg");
            checkBg();

            onFocus($(".slide_active"));
            $(".burger-menu").toggleClass("burger-menu_active");

            $(".top__menu").off();
            $(".top__menu").on("click", burgerOn);
        }
    })
});
let activeSlide = 0;

function animateScroll(e) {
    let delta = parseInt(e.wheelDelta);
    if (delta >= 0) {
        $(".slide_active").removeClass("slide_active");

        $($(".nav__item")[activeSlide]).removeClass("nav__item_active");
        if (activeSlide === 0) {
            activeSlide = 4;
        } else {
            activeSlide -= 1;
        }

        checkBg();
        checkBtn();
        $($(".slide")[activeSlide]).addClass("slide_active");

        $($(".nav__item")[activeSlide]).addClass("nav__item_active");

        $(window).off();
        setTimeout(function () {
            $(window).on("mousewheel DOMMouseScroll MozMousePixelScroll", () => animateScroll(event));
        }, 600);

    } else if (delta <= 0) {
        $(".slide_active").removeClass("slide_active");

        $($(".nav__item")[activeSlide]).removeClass("nav__item_active");

        if (activeSlide === 4) {
            activeSlide = 0;
        } else {
            activeSlide += 1;
        }
        checkBg();
        checkBtn();
        $($(".nav__item")[activeSlide]).addClass("nav__item_active");

        $($(".slide")[activeSlide]).addClass("slide_active");
        $(window).off();
        setTimeout(function () {
            $(window).on("mousewheel DOMMouseScroll MozMousePixelScroll", () => animateScroll(event));
        }, 600);
    }
}

function navClick(e) {
    e.preventDefault();
    let indexLink = $(".nav__link").index(e.target);
    if (indexLink !== -1) {
        $($(".nav__item")[activeSlide]).removeClass("nav__item_active");
        activeSlide = indexLink;
        $(".slide_active").removeClass("slide_active");

        $($(".nav__item")[indexLink]).addClass("nav__item_active");
        checkBtn();
        checkBg();
        $($(".slide")[indexLink]).addClass("slide_active");
    }
}

function btnClick() {
    $($(".nav__item")[activeSlide]).removeClass("nav__item_active");
    activeSlide = 4;

    $($(".nav__item")[activeSlide]).addClass("nav__item_active");

    checkBtn();
    checkBg();

    let currentSlide = $(".slide")[$(".slide_active").index(".slide")];
    $(currentSlide).toggleClass("slide_active");

    $(".hire").toggleClass("slide_active");
}

function checkBtn() {
    if (activeSlide != 0) {
        $(".btn_nav").addClass("btn_active");
    } else {
        $(".btn_nav").removeClass("btn_active");
    }
}

function checkBg() {
    if (activeSlide === 3) {
        $(".wrap-main").addClass("contact-bg");
    } else {
        $(".wrap-main").removeClass("contact-bg");
    }

}

function prev() {
    let currentActive = $(".works__item_active");
    $(currentActive).removeClass("works__item_active");

    let prev = $(".works__left");
    $(prev).removeClass("works__left");

    let next = $(".works__right");
    $(next).removeClass("works__right");

    $(currentActive).addClass("works__right");
    $(prev).addClass("works__item_active");
    $(next).addClass("works__left");
}

function next() {
    let currentActive = $(".works__item_active");
    $(currentActive).removeClass("works__item_active");

    let prev = $(".works__left");
    $(prev).removeClass("works__left");

    let next = $(".works__right");
    $(next).removeClass("works__right");

    $(currentActive).addClass("works__left");
    $(prev).addClass("works__right");
    $(next).addClass("works__item_active");
}

function burgerOn() {
    $(".top__menu").off();

    $("body").addClass('overflow');

    setTimeout(function () {
        $("body").removeClass('overflow');
    },600);

    $(window).off();

    $(".wrap-main").removeClass("contact-bg");

    if (activeSlide === 3) {
        $(".wrapper").addClass("contact-bg")
    }

    $(".burger-menu__item").each(function () {
        $(this).removeClass("burger-menu__item_active");
    });

    $(".burger-menu").toggleClass("burger-menu_active");

    let currentNav = $(".burger-menu__item")[$(".slide_active").index(".slide")];
    $(currentNav).addClass('burger-menu__item_active');

    $(".wrapper").addClass("wrapper_active");

    offFocus($(".slide_active"));

    $(".top__menu").bind("click", function burgerOff() {
        $(window).on("mousewheel DOMMouseScroll MozMousePixelScroll", () => animateScroll(event));

        $(".wrapper").removeClass("wrapper_active");

        $(".wrapper").removeClass("contact-bg");
        checkBg();

        onFocus($(".slide_active"));
        $(".burger-menu").toggleClass("burger-menu_active");

        $(".top__menu").off();
        $(".top__menu").on("click", burgerOn);
    });
}

function offFocus(target) {
    target.each(function () {
        let child = $(target).children();
        if (child) {
            for (let item of child) {
                $(item).attr('tabindex', -1);
                offFocus($(item));
            }
        }
    })
}

function onFocus(target) {
    target.each(function () {
        let child = $(target).children();
        if (child) {
            for (let item of child) {
                $(item).removeAttr('tabindex');
                onFocus($(item));
            }
        }
    })
}