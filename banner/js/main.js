$(document).ready(() => {
    $(".banner__prev").on("click", prevItem);
    $(".banner__next").on("click", nextItem);
});

/*перелистывание влево*/
prevItem = () => {
    let currentSlide = $(".banner__item_active");

    change("banner__left");

    let index = $(".banner__item").index(currentSlide);
    if (index !== 0) {
        let nextSlide = $(".banner__item")[index - 1];
        $(nextSlide).addClass("banner__item_active");
    } else {
        let nextSlide = $(".banner__item")[$(".banner__item").length - 1];
        $(nextSlide).addClass("banner__item_active");
    }
};
/*перелистывание влево*/

/*перелистывание вправо*/
nextItem = () => {
    let currentSlide = $(".banner__item_active");

    change("banner__right");

    let index = $(".banner__item").index(currentSlide);
    if (index !== $(".banner__item").length - 1) {
        let nextSlide = $(".banner__item")[index + 1];
        $(nextSlide).addClass("banner__item_active");
    } else {
        let nextSlide = $(".banner__item")[0];
        $(nextSlide).addClass("banner__item_active");
    }

};
/*перелистывание вправо*/

/*общая функция для перелистывания*/
/*routeClass - класс, с анимацией направления перелистывания*/
change = (routeClass) => {
    let currentSlide = $(".banner__item_active");

    $(currentSlide).addClass(routeClass);
    $(currentSlide).removeClass("banner__item_active");

    $(".banner__nav").off();

    $(currentSlide).on("transitionend", () => {
        $(currentSlide).removeClass(routeClass);
        $(currentSlide).off();

        $(".banner__prev").on("click", prevItem);
        $(".banner__next").on("click", nextItem);
    });
};
/*общая функция для перелистывания*/