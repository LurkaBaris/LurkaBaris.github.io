/*services*/
let boxes = document.getElementsByClassName('services__item');
for (let box of boxes) {
    $(box.children[1]).hide();
    $(box).click(function () {
        let t = box.children[1];
        $(t).slideToggle();
    })
}
/*services*/
/*statements*/
let mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    direction: 'vertical',

    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

/*statements*/
/*team*/
$('.team__owl-carousel').owlCarousel({
    loop: true,
    smartSpeed: 1000,
    navText: ["<img class='team__nav-prev team__nav' src='' alt='nav_prev'>", "<img class='team__nav team__nav-next' src='' alt='nav_next'>"],
    nav: true,
    dots: false,
    mouseDrag: false,
    responsive: {
        0: {
            items: 1
        }
    }
});

changeImg();

let owlPrev = document.querySelector(".owl-prev");
owlPrev.addEventListener('click', changeImg);
let owlNext = document.querySelector(".owl-next");
owlNext.addEventListener('click', changeImg);

function changeImg() {
    let navNext = document.querySelector('.team__nav-next');
    let navPrev = document.querySelector('.team__nav-prev');
    let item = document.querySelector('.active');
    navNext.src = item.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.src;
    navPrev.src = item.previousElementSibling.firstElementChild.firstElementChild.firstElementChild.src;
}

/*team*/


/*burger menu*/
$('.nav__burger-icon').click(function () {
    $('.nav__burger-menu').show(0,function () {
        $('.nav__burger-menu').toggleClass('nav__burger-menu_active');
    }).removeAttr('style');
    document.body.style.overflow = 'hidden';
});
$('.nav__burger-close').click(function () {
    $('.nav__burger-menu').toggleClass('nav__burger-menu_active');
    document.body.style.overflow = 'auto';
});
/*burger menu*/