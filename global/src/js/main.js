$(document).ready(function () {
    $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function scroll(event) {
        let delta = parseInt(event.originalEvent.wheelDelta || -event.originalEvent.detail);
        if (delta >= 0) {
            if ($(".slide_active").index(".slide") === 0) {
                let currentSlide = $(".slide")[$(".slide_active").index(".slide")];
                $(currentSlide).toggleClass("slide_active");
                let nextSlide = $(".slide").last()[0];
                $(nextSlide).toggleClass("slide_active");

                $(window).unbind('mousewheel DOMMouseScroll MozMousePixelScroll', scroll);
                setTimeout(function () {
                    $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', scroll);
                }, 600);

            } else {

                let currentSlide = $(".slide")[$(".slide_active").index(".slide")];
                $(currentSlide).toggleClass("slide_active");
                let nextSlide = $(currentSlide).prev()[0];
                $(nextSlide).toggleClass("slide_active");

                $(window).unbind('mousewheel DOMMouseScroll MozMousePixelScroll', scroll);
                setTimeout(function () {
                    $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', scroll);
                }, 600);

            }
        } else {
            if ($(".slide_active").index(".slide") === $(".slide").length - 1) {
                let currentSlide = $(".slide")[$(".slide_active").index(".slide")];
                $(currentSlide).toggleClass("slide_active");
                let nextSlide = $(".slide").first()[0];
                $(nextSlide).toggleClass("slide_active");


                $(window).unbind('mousewheel DOMMouseScroll MozMousePixelScroll', scroll);
                setTimeout(function () {
                    $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', scroll);
                }, 600);


            } else {

                let currentSlide = $(".slide")[$(".slide_active").index(".slide")];
                $(currentSlide).toggleClass("slide_active");
                let nextSlide = $(currentSlide).next()[0];
                $(nextSlide).toggleClass("slide_active");

                $(window).unbind('mousewheel DOMMouseScroll MozMousePixelScroll', scroll);
                setTimeout(function () {
                    $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', scroll);
                }, 600);
            }
        }
    });
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


    $(".top__menu").on('click', function burgerOn() {
        $(".top__menu").off();

        $(".burger-menu").toggleClass("burger-menu_active");
        let slideObj = $(".slide");
        let currentNav = $(".burger-menu__item")[$(".slide_active").index(".slide")];
        $(currentNav).toggleClass("burger-menu__item_active");


        let currentSlide = $(".slide")[$(".slide_active").index(".slide")];
        $(".burger-menu__slide-container").append(currentSlide);

        for (let item of slideObj) {
            if (item !== currentSlide) {
                item.remove();
            }
        }

        $(".top__menu").on("click", function burgerOff() {
            for (let item of slideObj) {
                $("body").append(item);
            }

            $(".burger-menu").toggleClass("burger-menu_active");
            $(".burger-menu__slide-container").empty();

            $(currentNav).toggleClass("burger-menu__item_active");

            $(".top__menu").off();
            $(".top__menu").on("click", burgerOn);
        });

        $(".burger-menu__item").on("click", function () {
            for (let item of slideObj) {
                $("body").append(item);
            }
            
            $(".burger-menu").toggleClass("burger-menu_active");
            $(".burger-menu__slide-container").empty();

            // let indexLink = $(".burger-menu__item").index(event.target);
            // for (let item of slideObj) {
            //     $("body").append(item);
            // }
            // let currentSlide = $(".slide")[$(".slide_active").index(".slide")];
            // $(currentSlide).toggleClass("slide_active");
            //
            // let nextSlide = $('.slide')[indexLink];
            // $(nextSlide).toggleClass("slide_active");
            //
            // $(".burger-menu").toggleClass("burger-menu_active");
            // $(".burger-menu__slide-container").empty();
            //
            // $(currentNav).toggleClass("burger-menu__item_active");
            //
            // $(".top__menu").off();
            // $(".top__menu").on("click", burgerOn);
        });
    });
});

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
