(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

/*services*/
var boxes = document.getElementsByClassName('services__item');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var box = _step.value;
    $(box.children[1]).hide();
    $(box).click(function () {
      var t = box.children[1];
      $(t).slideToggle();
    });
  };

  for (var _iterator = boxes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  }
  /*services*/

  /*statements*/

} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  direction: 'vertical',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
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
var owlPrev = document.querySelector(".owl-prev");
owlPrev.addEventListener('click', changeImg);
var owlNext = document.querySelector(".owl-next");
owlNext.addEventListener('click', changeImg);

function changeImg() {
  var navNext = document.querySelector('.team__nav-next');
  var navPrev = document.querySelector('.team__nav-prev');
  var item = document.querySelector('.active');
  navNext.src = item.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.src;
  navPrev.src = item.previousElementSibling.firstElementChild.firstElementChild.firstElementChild.src;
}
/*team*/

/*burger menu*/


$('.nav__burger-icon').click(function () {
  $('.nav__burger-menu').show(0, function () {
    $('.nav__burger-menu').toggleClass('nav__burger-menu_active');
  }).removeAttr('style');
  document.body.style.overflow = 'hidden';
});
$('.nav__burger-close').click(function () {
  $('.nav__burger-menu').toggleClass('nav__burger-menu_active');
  document.body.style.overflow = 'auto';
});
/*burger menu*/

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7QUFDQSxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsc0JBQVQsQ0FBZ0MsZ0JBQWhDLENBQVo7Ozs7Ozs7UUFDUyxHO0FBQ0wsSUFBQSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQUosQ0FBYSxDQUFiLENBQUQsQ0FBRCxDQUFtQixJQUFuQjtBQUNBLElBQUEsQ0FBQyxDQUFDLEdBQUQsQ0FBRCxDQUFPLEtBQVAsQ0FBYSxZQUFZO0FBQ3JCLFVBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxRQUFKLENBQWEsQ0FBYixDQUFSO0FBQ0EsTUFBQSxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUssV0FBTDtBQUNILEtBSEQ7OztBQUZKLHVCQUFnQixLQUFoQiw4SEFBdUI7QUFBQTtBQU10QjtBQUNEOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUksUUFBUSxHQUFHLElBQUksTUFBSixDQUFXLG1CQUFYLEVBQWdDO0FBQzNDLEVBQUEsYUFBYSxFQUFFLENBRDRCO0FBRTNDLEVBQUEsU0FBUyxFQUFFLFVBRmdDO0FBSTNDLEVBQUEsSUFBSSxFQUFFLElBSnFDO0FBSzNDLEVBQUEsVUFBVSxFQUFFO0FBQ1IsSUFBQSxNQUFNLEVBQUUscUJBREE7QUFFUixJQUFBLE1BQU0sRUFBRTtBQUZBO0FBTCtCLENBQWhDLENBQWY7QUFXQTs7QUFDQTs7QUFDQSxDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QixXQUF6QixDQUFxQztBQUNqQyxFQUFBLElBQUksRUFBRSxJQUQyQjtBQUVqQyxFQUFBLFVBQVUsRUFBRSxJQUZxQjtBQUdqQyxFQUFBLE9BQU8sRUFBRSxDQUFDLDhEQUFELEVBQWlFLDhEQUFqRSxDQUh3QjtBQUlqQyxFQUFBLEdBQUcsRUFBRSxJQUo0QjtBQUtqQyxFQUFBLElBQUksRUFBRSxLQUwyQjtBQU1qQyxFQUFBLFNBQVMsRUFBRSxLQU5zQjtBQU9qQyxFQUFBLFVBQVUsRUFBRTtBQUNSLE9BQUc7QUFDQyxNQUFBLEtBQUssRUFBRTtBQURSO0FBREs7QUFQcUIsQ0FBckM7QUFjQSxTQUFTO0FBRVQsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBZDtBQUNBLE9BQU8sQ0FBQyxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxTQUFsQztBQUNBLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFdBQXZCLENBQWQ7QUFDQSxPQUFPLENBQUMsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsU0FBbEM7O0FBRUEsU0FBUyxTQUFULEdBQXFCO0FBQ2pCLE1BQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGlCQUF2QixDQUFkO0FBQ0EsTUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQWQ7QUFDQSxNQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFYO0FBQ0EsRUFBQSxPQUFPLENBQUMsR0FBUixHQUFjLElBQUksQ0FBQyxrQkFBTCxDQUF3QixpQkFBeEIsQ0FBMEMsaUJBQTFDLENBQTRELGlCQUE1RCxDQUE4RSxHQUE1RjtBQUNBLEVBQUEsT0FBTyxDQUFDLEdBQVIsR0FBYyxJQUFJLENBQUMsc0JBQUwsQ0FBNEIsaUJBQTVCLENBQThDLGlCQUE5QyxDQUFnRSxpQkFBaEUsQ0FBa0YsR0FBaEc7QUFDSDtBQUVEOztBQUdBOzs7QUFDQSxDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QixLQUF2QixDQUE2QixZQUFZO0FBQ3JDLEVBQUEsQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUIsSUFBdkIsQ0FBNEIsQ0FBNUIsRUFBOEIsWUFBWTtBQUN0QyxJQUFBLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCLFdBQXZCLENBQW1DLHlCQUFuQztBQUNILEdBRkQsRUFFRyxVQUZILENBRWMsT0FGZDtBQUdBLEVBQUEsUUFBUSxDQUFDLElBQVQsQ0FBYyxLQUFkLENBQW9CLFFBQXBCLEdBQStCLFFBQS9CO0FBQ0gsQ0FMRDtBQU1BLENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCLEtBQXhCLENBQThCLFlBQVk7QUFDdEMsRUFBQSxDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QixXQUF2QixDQUFtQyx5QkFBbkM7QUFDQSxFQUFBLFFBQVEsQ0FBQyxJQUFULENBQWMsS0FBZCxDQUFvQixRQUFwQixHQUErQixNQUEvQjtBQUNILENBSEQ7QUFJQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qc2VydmljZXMqL1xyXG5sZXQgYm94ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZXJ2aWNlc19faXRlbScpO1xyXG5mb3IgKGxldCBib3ggb2YgYm94ZXMpIHtcclxuICAgICQoYm94LmNoaWxkcmVuWzFdKS5oaWRlKCk7XHJcbiAgICAkKGJveCkuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCB0ID0gYm94LmNoaWxkcmVuWzFdO1xyXG4gICAgICAgICQodCkuc2xpZGVUb2dnbGUoKTtcclxuICAgIH0pXHJcbn1cclxuLypzZXJ2aWNlcyovXHJcbi8qc3RhdGVtZW50cyovXHJcbmxldCBteVN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcclxuXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG4vKnN0YXRlbWVudHMqL1xyXG4vKnRlYW0qL1xyXG4kKCcudGVhbV9fb3dsLWNhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHNtYXJ0U3BlZWQ6IDEwMDAsXHJcbiAgICBuYXZUZXh0OiBbXCI8aW1nIGNsYXNzPSd0ZWFtX19uYXYtcHJldiB0ZWFtX19uYXYnIHNyYz0nJyBhbHQ9J25hdl9wcmV2Jz5cIiwgXCI8aW1nIGNsYXNzPSd0ZWFtX19uYXYgdGVhbV9fbmF2LW5leHQnIHNyYz0nJyBhbHQ9J25hdl9uZXh0Jz5cIl0sXHJcbiAgICBuYXY6IHRydWUsXHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIG1vdXNlRHJhZzogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5jaGFuZ2VJbWcoKTtcclxuXHJcbmxldCBvd2xQcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd2wtcHJldlwiKTtcclxub3dsUHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZUltZyk7XHJcbmxldCBvd2xOZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd2wtbmV4dFwiKTtcclxub3dsTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZUltZyk7XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VJbWcoKSB7XHJcbiAgICBsZXQgbmF2TmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZWFtX19uYXYtbmV4dCcpO1xyXG4gICAgbGV0IG5hdlByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVhbV9fbmF2LXByZXYnKTtcclxuICAgIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpO1xyXG4gICAgbmF2TmV4dC5zcmMgPSBpdGVtLm5leHRFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5zcmM7XHJcbiAgICBuYXZQcmV2LnNyYyA9IGl0ZW0ucHJldmlvdXNFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5zcmM7XHJcbn1cclxuXHJcbi8qdGVhbSovXHJcblxyXG5cclxuLypidXJnZXIgbWVudSovXHJcbiQoJy5uYXZfX2J1cmdlci1pY29uJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLm5hdl9fYnVyZ2VyLW1lbnUnKS5zaG93KDAsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5uYXZfX2J1cmdlci1tZW51JykudG9nZ2xlQ2xhc3MoJ25hdl9fYnVyZ2VyLW1lbnVfYWN0aXZlJyk7XHJcbiAgICB9KS5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG59KTtcclxuJCgnLm5hdl9fYnVyZ2VyLWNsb3NlJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLm5hdl9fYnVyZ2VyLW1lbnUnKS50b2dnbGVDbGFzcygnbmF2X19idXJnZXItbWVudV9hY3RpdmUnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XHJcbn0pO1xyXG4vKmJ1cmdlciBtZW51Ki8iXX0=
