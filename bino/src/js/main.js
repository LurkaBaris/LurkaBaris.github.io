$('.header-main__owl-carousel').owlCarousel({
    loop: true,
    smartSpeed: 1000,
    margin: 10,
    nav: true,
    navText: ["<div class='owl__nav owl__nav_left'><svg class='owl__svg' \n" +
    " xmlns=\"http://www.w3.org/2000/svg\"\n" +
    " xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n" +
    " width=\"12px\" height=\"21px\">\n" +
    "<path fill-rule=\"evenodd\"  \n" +
    " d=\"M11.831,1.736 C11.831,1.554 11.751,1.395 11.631,1.274 L10.628,0.271 C10.508,0.151 10.328,0.072 10.167,0.072 C10.007,0.072 9.827,0.151 9.706,0.271 L0.366,9.612 C0.245,9.733 0.165,9.912 0.165,10.074 C0.165,10.233 0.245,10.414 0.366,10.535 L9.706,19.874 C9.827,19.994 10.007,20.075 10.167,20.075 C10.328,20.075 10.508,19.994 10.628,19.874 L11.631,18.873 C11.751,18.753 11.831,18.572 11.831,18.412 C11.831,18.251 11.751,18.070 11.631,17.951 L3.753,10.074 L11.631,2.197 C11.751,2.075 11.831,1.896 11.831,1.736 Z\"/>\n" +
    "</svg></div>", "<div class='owl__nav owl__nav_right'><svg class='owl__svg' \n" +
    " xmlns=\"http://www.w3.org/2000/svg\"\n" +
    " xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n" +
    " width=\"12px\" height=\"21px\">\n" +
    "<path fill-rule=\"evenodd\"  \n" +
    " d=\"M0.168,19.259 C0.168,19.440 0.249,19.601 0.369,19.721 L1.371,20.723 C1.491,20.843 1.672,20.923 1.832,20.923 C1.993,20.923 2.173,20.843 2.293,20.723 L11.634,11.382 C11.754,11.262 11.834,11.082 11.834,10.920 C11.834,10.761 11.754,10.580 11.634,10.460 L2.293,1.120 C2.173,0.999 1.993,0.919 1.832,0.919 C1.672,0.919 1.491,0.999 1.371,1.120 L0.369,2.122 C0.249,2.242 0.168,2.423 0.168,2.583 C0.168,2.742 0.249,2.924 0.369,3.044 L8.246,10.920 L0.369,18.798 C0.249,18.919 0.168,19.099 0.168,19.259 Z\"/>\n" +
    "</svg></div>"],
    dots: false,
    responsive: {
        0: {
            items: 1
        }
    }
});
$('.study__owl-carousel').owlCarousel({
    loop: true,
    smartSpeed: 1000,
    margin: 10,
    nav: false,
    navText: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        }
    }
});
$(document).ready(function () {
    $(".next").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let links = menu.find('.burger-menu__link');
    let overlay = menu.find('.burger-menu__overlay');

    button.on('click', (e) => {
        e.preventDefault();
    toggleMenu();
});

    links.on('click',  () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger-menu_active')

        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overflow','hidden');
        } else {
            $('body').css('overflow','visible');
        }
    }
}
burgerMenu('.burger-menu');