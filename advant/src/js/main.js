let toggle = 1;
$(".navigation__product-title").on('click', function () {
    $('.navigation__list').slideToggle();
    toggle++;
    if ((toggle % 2) == 0) {
        $('.navigation__list-svg_r').css("transform", "rotate(-90deg)");
    } else {
        $('.navigation__list-svg_r').css("transform", "rotate(0deg)");
    }
});


$('.owl-carousel').owlCarousel({
    loop: true,
    smartSpeed: 1000,
    margin: 10,
    responsive: {
        0: {
            items: 1
        }
    }
});

function timer(date) {
    let dateLater = new Date(date) - new Date();
    let day = Math.floor(dateLater / 1000 / 60 / 60 / 24);
    let hour = Math.floor(dateLater / 1000 / 60 / 60) - day * 24;
    let mins = Math.floor(dateLater / 1000 / 60) - day * 24 * 60 - hour * 60;

    if (day <= 9) {
        if (day < 0) {
            $('.day1').html('0');
            $('.day2').html('0');
        } else {
            $('.day1').html('0');
            $('.day2').html(day);
        }
    } else {
        $('.day1').html(String(day)[0]);
        $('.day2').html(String(day)[1]);
    }

    if (hour <= 9) {
        if (hour < 0) {
            $('.hour1').html('0');
            $('.hour2').html('0');
        } else {
            $('.hour1').html('0');
            $('.hour2').html(hour);
        }
    } else {
        $('.hour1').html(String(hour)[0]);
        $('.hour2').html(String(hour)[1]);
    }

    if (mins <= 9) {
        if (mins < 0) {
            $('.min1').html('0');
            $('.min2').html('0');
        } else {
            $('.min1').html('0');
            $('.min2').html(mins);
        }
    } else {
        $('.min1').html(String(mins)[0]);
        $('.min2').html(String(mins)[1]);
    }
    return date;
}


$(document).ready(function () {
    let f = new Date(timer("2020-01-01, 00:00:00"));
    setInterval(function () {
       f = timer(f-60000);
    },60000);
});
VK.Widgets.Group("vk_groups", {mode: 3}, 14532206);

$('.footer__switch-btn').click(function(){
    $(this).toggleClass('footer__switch-on');
});
