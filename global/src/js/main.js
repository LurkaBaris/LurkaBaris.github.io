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

    $(".nav__link").on("click", function (event) {
        event.preventDefault();
        let indexLink = $(".slide_active .nav__link").index(event.target);

        let currentSlide = $(".slide")[$(".slide_active").index(".slide")];
        $(currentSlide).toggleClass("slide_active");

        let nextSlide = $('.slide')[indexLink];

        $(nextSlide).toggleClass("slide_active");
    });

    $(".btn_header").on("click", function () {
        let currentSlide = $(".slide")[$(".slide_active").index(".slide")];
        $(currentSlide).toggleClass("slide_active");

        $(".hire").toggleClass("slide_active");
    });

    $(".btn_nav").on("click", function () {
        let currentSlide = $(".slide")[$(".slide_active").index(".slide")];
        $(currentSlide).toggleClass("slide_active");

        $(".hire").toggleClass("slide_active");
    });


    $(".top__menu").on("click", burgerOn);

    $(".burger-menu__item").on("click", function (e) {
        $(window).on("mousewheel DOMMouseScroll MozMousePixelScroll", () => animateScroll(event));

        $(".burger-menu").toggleClass("burger-menu_active");
        $(".burger-menu__slide-container").empty();

        let currentNav = $(".burger-menu__item")[$(".slide_active").index(".slide")];
        $(currentNav).toggleClass("burger-menu__item_active");

        let index = $(".burger-menu__item").index(e.target);

        $($(".burger-menu__item")[index]).toggleClass("burger-menu__item_active");

        let currentSlide = $(".slide")[$(".slide_active").index(".slide")];
        $(currentSlide).toggleClass("slide_active");
        $(currentSlide).toggleClass("slide_display");


        let nextSlide = $(".slide")[index];
        $(nextSlide).toggleClass("slide_active");

        $(".top__menu").off();
        $(".top__menu").on("click", burgerOn);
    });

    $(".burger-menu__last-slide").on("click", function () {
        $(window).on("mousewheel DOMMouseScroll MozMousePixelScroll", () => animateScroll(event));

        let currentSlide = $(".slide")[$(".slide_active").index(".slide")];
        $(currentSlide).toggleClass("slide_display");
        $(".burger-menu").toggleClass("burger-menu_active");



        $(".burger-menu__slide-container").empty();

        $(".top__menu").off();
        $(".top__menu").on("click", burgerOn);
    })
});

function animateScroll(e) {
    let delta = parseInt(e.wheelDelta);
    if (delta >= 0) {
        if ($(".slide_active").index(".slide") === 0) {
            let currentSlide = $(".slide")[$(".slide_active").index(".slide")];
            $(currentSlide).toggleClass("slide_active");
            let nextSlide = $(".slide").last()[0];
            $(nextSlide).toggleClass("slide_active");

            $(window).off();
            setTimeout(function () {
                $(window).on("mousewheel DOMMouseScroll MozMousePixelScroll", () => animateScroll(event));
            }, 600);

        } else {

            let currentSlide = $(".slide")[$(".slide_active").index(".slide")];
            $(currentSlide).toggleClass("slide_active");
            let nextSlide = $(currentSlide).prev()[0];
            $(nextSlide).toggleClass("slide_active");

            $(window).off();
            setTimeout(function () {
                $(window).on("mousewheel DOMMouseScroll MozMousePixelScroll", () => animateScroll(event));
            }, 600);

        }
    } else if (delta <= 0) {
        if ($(".slide_active").index(".slide") === $(".slide").length - 1) {
            let currentSlide = $(".slide")[$(".slide_active").index(".slide")];
            $(currentSlide).toggleClass("slide_active");
            let nextSlide = $(".slide").first()[0];
            $(nextSlide).toggleClass("slide_active");


            $(window).off();
            setTimeout(function () {
                $(window).on("mousewheel DOMMouseScroll MozMousePixelScroll", () => animateScroll(event));
            }, 600);


        } else {

            let currentSlide = $(".slide")[$(".slide_active").index(".slide")];
            $(currentSlide).toggleClass("slide_active");
            let nextSlide = $(currentSlide).next()[0];
            $(nextSlide).toggleClass("slide_active");

            $(window).off();
            setTimeout(function () {
                $(window).on("mousewheel DOMMouseScroll MozMousePixelScroll", () => animateScroll(event));
            }, 600);
        }
    }
}

function prev() {
    let slide = $('.works__item');

    let img1 = $(slide[0]).children()[0].src;
    let img2 = $(slide[1]).children()[0].src;
    let img3 = $(slide[2]).children()[0].src;

    let name1 = $(slide[0]).children()[1].innerHTML;
    let name2 = $(slide[1]).children()[1].innerHTML;
    let name3 = $(slide[2]).children()[1].innerHTML;

    let paragraph1 = $(slide[0]).children()[2].innerHTML;
    let paragraph2 = $(slide[1]).children()[2].innerHTML;
    let paragraph3 = $(slide[2]).children()[2].innerHTML;

    $(slide[0]).children()[0].src = img3;
    $(slide[1]).children()[0].src = img1;
    $(slide[2]).children()[0].src = img2;

    $(slide[0]).children()[1].innerHTML = name3;
    $(slide[1]).children()[1].innerHTML = name1;
    $(slide[2]).children()[1].innerHTML = name2;

    $(slide[0]).children()[2].innerHTML = paragraph3;
    $(slide[1]).children()[2].innerHTML = paragraph1;
    $(slide[2]).children()[2].innerHTML = paragraph2;
}

function next() {
    let slide = $('.works__item');


    let img1 = $(slide[0]).children()[0].src;
    let img2 = $(slide[1]).children()[0].src;
    let img3 = $(slide[2]).children()[0].src;

    let name1 = $(slide[0]).children()[1].innerHTML;
    let name2 = $(slide[1]).children()[1].innerHTML;
    let name3 = $(slide[2]).children()[1].innerHTML;

    let paragraph1 = $(slide[0]).children()[2].innerHTML;
    let paragraph2 = $(slide[1]).children()[2].innerHTML;
    let paragraph3 = $(slide[2]).children()[2].innerHTML;

    $(slide[0]).children()[0].src = img2;
    $(slide[1]).children()[0].src = img3;
    $(slide[2]).children()[0].src = img1;

    $(slide[0]).children()[1].innerHTML = name2;
    $(slide[1]).children()[1].innerHTML = name3;
    $(slide[2]).children()[1].innerHTML = name1;

    $(slide[0]).children()[2].innerHTML = paragraph2;
    $(slide[1]).children()[2].innerHTML = paragraph3;
    $(slide[2]).children()[2].innerHTML = paragraph1;
}

function burgerOn() {
    $(".top__menu").off();

    $(window).off();

    $(".burger-menu__item").each(function () {
        $(this).removeClass("burger-menu__item_active");
    });

    $(".burger-menu").toggleClass("burger-menu_active");

    let currentNav = $(".burger-menu__item")[$(".slide_active").index(".slide")];
    $(currentNav).toggleClass("burger-menu__item_active");


    let currentSlide = $(".slide")[$(".slide_active").index(".slide")];
    let mainSlide = $(currentSlide).clone();
    $(currentSlide).toggleClass("slide_display");


    $(".burger-menu__slide-container").append(mainSlide);

    offFocus($(".burger-menu__slide-container"));

    $(".top__menu").bind("click", function burgerOff() {
        $(window).on("mousewheel DOMMouseScroll MozMousePixelScroll", () => animateScroll(event));

        $(currentSlide).toggleClass("slide_display");

        $(".burger-menu").toggleClass("burger-menu_active");
        $(".burger-menu__slide-container").empty();

        $(".top__menu").off();
        $(".top__menu").on("click", burgerOn);
    });
}

function offFocus(target) {
    target.each(function () {
        let child = $(target).children();
        if (child) {
            for (let item of child) {
                $(item).focus(function () {
                    $(item).blur();
                });
                offFocus($(item));
            }
        }
    })
}