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
    $(box).click(function (event) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = boxes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var boxU = _step2.value;

          if (boxU.children[1].style.display === "flex" && $(boxes).index(boxU) !== $(boxes).index(box)) {
            $(boxU.children[1]).slideToggle();
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7QUFDQSxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsc0JBQVQsQ0FBZ0MsZ0JBQWhDLENBQVo7Ozs7Ozs7UUFDUyxHO0FBQ0wsSUFBQSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQUosQ0FBYSxDQUFiLENBQUQsQ0FBRCxDQUFtQixJQUFuQjtBQUNBLElBQUEsQ0FBQyxDQUFDLEdBQUQsQ0FBRCxDQUFPLEtBQVAsQ0FBYSxVQUFVLEtBQVYsRUFBaUI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDMUIsOEJBQWlCLEtBQWpCLG1JQUF3QjtBQUFBLGNBQWYsSUFBZTs7QUFDcEIsY0FBSSxJQUFJLENBQUMsUUFBTCxDQUFjLENBQWQsRUFBaUIsS0FBakIsQ0FBdUIsT0FBdkIsS0FBbUMsTUFBbkMsSUFBNkMsQ0FBQyxDQUFDLEtBQUQsQ0FBRCxDQUFTLEtBQVQsQ0FBZSxJQUFmLE1BQXlCLENBQUMsQ0FBQyxLQUFELENBQUQsQ0FBUyxLQUFULENBQWUsR0FBZixDQUExRSxFQUErRjtBQUMzRixZQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBTCxDQUFjLENBQWQsQ0FBRCxDQUFELENBQW9CLFdBQXBCO0FBQ0g7QUFDSjtBQUx5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU0xQixVQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsUUFBSixDQUFhLENBQWIsQ0FBUjtBQUNBLE1BQUEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLLFdBQUw7QUFDSCxLQVJEOzs7QUFGSix1QkFBZ0IsS0FBaEIsOEhBQXVCO0FBQUE7QUFXdEI7QUFDRDs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJLFFBQVEsR0FBRyxJQUFJLE1BQUosQ0FBVyxtQkFBWCxFQUFnQztBQUMzQyxFQUFBLGFBQWEsRUFBRSxDQUQ0QjtBQUUzQyxFQUFBLFNBQVMsRUFBRSxVQUZnQztBQUkzQyxFQUFBLElBQUksRUFBRSxJQUpxQztBQUszQyxFQUFBLFVBQVUsRUFBRTtBQUNSLElBQUEsTUFBTSxFQUFFLHFCQURBO0FBRVIsSUFBQSxNQUFNLEVBQUU7QUFGQTtBQUwrQixDQUFoQyxDQUFmO0FBV0E7O0FBQ0E7O0FBQ0EsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUIsV0FBekIsQ0FBcUM7QUFDakMsRUFBQSxJQUFJLEVBQUUsSUFEMkI7QUFFakMsRUFBQSxVQUFVLEVBQUUsSUFGcUI7QUFHakMsRUFBQSxPQUFPLEVBQUUsQ0FBQyw4REFBRCxFQUFpRSw4REFBakUsQ0FId0I7QUFJakMsRUFBQSxHQUFHLEVBQUUsSUFKNEI7QUFLakMsRUFBQSxJQUFJLEVBQUUsS0FMMkI7QUFNakMsRUFBQSxTQUFTLEVBQUUsS0FOc0I7QUFPakMsRUFBQSxVQUFVLEVBQUU7QUFDUixPQUFHO0FBQ0MsTUFBQSxLQUFLLEVBQUU7QUFEUjtBQURLO0FBUHFCLENBQXJDO0FBY0EsU0FBUztBQUVULElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFdBQXZCLENBQWQ7QUFDQSxPQUFPLENBQUMsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsU0FBbEM7QUFDQSxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixXQUF2QixDQUFkO0FBQ0EsT0FBTyxDQUFDLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFNBQWxDOztBQUVBLFNBQVMsU0FBVCxHQUFxQjtBQUNqQixNQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixpQkFBdkIsQ0FBZDtBQUNBLE1BQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGlCQUF2QixDQUFkO0FBQ0EsTUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBWDtBQUNBLEVBQUEsT0FBTyxDQUFDLEdBQVIsR0FBYyxJQUFJLENBQUMsa0JBQUwsQ0FBd0IsaUJBQXhCLENBQTBDLGlCQUExQyxDQUE0RCxpQkFBNUQsQ0FBOEUsR0FBNUY7QUFDQSxFQUFBLE9BQU8sQ0FBQyxHQUFSLEdBQWMsSUFBSSxDQUFDLHNCQUFMLENBQTRCLGlCQUE1QixDQUE4QyxpQkFBOUMsQ0FBZ0UsaUJBQWhFLENBQWtGLEdBQWhHO0FBQ0g7QUFFRDs7QUFHQTs7O0FBQ0EsQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUIsS0FBdkIsQ0FBNkIsWUFBWTtBQUNyQyxFQUFBLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCLElBQXZCLENBQTRCLENBQTVCLEVBQStCLFlBQVk7QUFDdkMsSUFBQSxDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QixXQUF2QixDQUFtQyx5QkFBbkM7QUFDSCxHQUZELEVBRUcsVUFGSCxDQUVjLE9BRmQ7QUFHQSxFQUFBLFFBQVEsQ0FBQyxJQUFULENBQWMsS0FBZCxDQUFvQixRQUFwQixHQUErQixRQUEvQjtBQUNILENBTEQ7QUFNQSxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QixLQUF4QixDQUE4QixZQUFZO0FBQ3RDLEVBQUEsQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUIsV0FBdkIsQ0FBbUMseUJBQW5DO0FBQ0EsRUFBQSxRQUFRLENBQUMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsUUFBcEIsR0FBK0IsTUFBL0I7QUFDSCxDQUhEO0FBSUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKnNlcnZpY2VzKi9cclxubGV0IGJveGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VydmljZXNfX2l0ZW0nKTtcclxuZm9yIChsZXQgYm94IG9mIGJveGVzKSB7XHJcbiAgICAkKGJveC5jaGlsZHJlblsxXSkuaGlkZSgpO1xyXG4gICAgJChib3gpLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGZvciAobGV0IGJveFUgb2YgYm94ZXMpIHtcclxuICAgICAgICAgICAgaWYgKGJveFUuY2hpbGRyZW5bMV0uc3R5bGUuZGlzcGxheSA9PT0gXCJmbGV4XCIgJiYgJChib3hlcykuaW5kZXgoYm94VSkgIT09ICQoYm94ZXMpLmluZGV4KGJveCkpIHtcclxuICAgICAgICAgICAgICAgICQoYm94VS5jaGlsZHJlblsxXSkuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdCA9IGJveC5jaGlsZHJlblsxXTtcclxuICAgICAgICAkKHQpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICB9KVxyXG59XHJcbi8qc2VydmljZXMqL1xyXG4vKnN0YXRlbWVudHMqL1xyXG5sZXQgbXlTd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICBkaXJlY3Rpb246ICd2ZXJ0aWNhbCcsXHJcblxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuLypzdGF0ZW1lbnRzKi9cclxuLyp0ZWFtKi9cclxuJCgnLnRlYW1fX293bC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBzbWFydFNwZWVkOiAxMDAwLFxyXG4gICAgbmF2VGV4dDogW1wiPGltZyBjbGFzcz0ndGVhbV9fbmF2LXByZXYgdGVhbV9fbmF2JyBzcmM9JycgYWx0PSduYXZfcHJldic+XCIsIFwiPGltZyBjbGFzcz0ndGVhbV9fbmF2IHRlYW1fX25hdi1uZXh0JyBzcmM9JycgYWx0PSduYXZfbmV4dCc+XCJdLFxyXG4gICAgbmF2OiB0cnVlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBtb3VzZURyYWc6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDFcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY2hhbmdlSW1nKCk7XHJcblxyXG5sZXQgb3dsUHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dsLXByZXZcIik7XHJcbm93bFByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VJbWcpO1xyXG5sZXQgb3dsTmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dsLW5leHRcIik7XHJcbm93bE5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VJbWcpO1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlSW1nKCkge1xyXG4gICAgbGV0IG5hdk5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVhbV9fbmF2LW5leHQnKTtcclxuICAgIGxldCBuYXZQcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlYW1fX25hdi1wcmV2Jyk7XHJcbiAgICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcclxuICAgIG5hdk5leHQuc3JjID0gaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuc3JjO1xyXG4gICAgbmF2UHJldi5zcmMgPSBpdGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuc3JjO1xyXG59XHJcblxyXG4vKnRlYW0qL1xyXG5cclxuXHJcbi8qYnVyZ2VyIG1lbnUqL1xyXG4kKCcubmF2X19idXJnZXItaWNvbicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5uYXZfX2J1cmdlci1tZW51Jykuc2hvdygwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLm5hdl9fYnVyZ2VyLW1lbnUnKS50b2dnbGVDbGFzcygnbmF2X19idXJnZXItbWVudV9hY3RpdmUnKTtcclxuICAgIH0pLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbn0pO1xyXG4kKCcubmF2X19idXJnZXItY2xvc2UnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcubmF2X19idXJnZXItbWVudScpLnRvZ2dsZUNsYXNzKCduYXZfX2J1cmdlci1tZW51X2FjdGl2ZScpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcclxufSk7XHJcbi8qYnVyZ2VyIG1lbnUqLyJdfQ==
