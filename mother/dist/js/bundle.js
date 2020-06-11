(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

/*faq accordion*/
var faqAccordions = document.querySelectorAll('.faq__item');
faqAccordions.forEach(function (accordion) {
  var hiddenSection = accordion.querySelector('.faq__hidden');
  accordion.addEventListener("click", function () {
    accordion.classList.toggle('faq__item_active');

    if (hiddenSection.style.maxHeight) {
      hiddenSection.style.maxHeight = null;
    } else {
      hiddenSection.style.maxHeight = "".concat(hiddenSection.scrollHeight, "px");
    }
  });
});
/*faq accordion*/

/*anchor*/

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
/*anchor*/

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7QUFDQSxJQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsWUFBMUIsQ0FBdEI7QUFFQSxhQUFhLENBQUMsT0FBZCxDQUFzQixVQUFDLFNBQUQsRUFBZTtBQUNwQyxNQUFNLGFBQWEsR0FBRyxTQUFTLENBQUMsYUFBVixDQUF3QixjQUF4QixDQUF0QjtBQUVBLEVBQUEsU0FBUyxDQUFDLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFlBQU07QUFDekMsSUFBQSxTQUFTLENBQUMsU0FBVixDQUFvQixNQUFwQixDQUEyQixrQkFBM0I7O0FBQ0EsUUFBSSxhQUFhLENBQUMsS0FBZCxDQUFvQixTQUF4QixFQUFtQztBQUNsQyxNQUFBLGFBQWEsQ0FBQyxLQUFkLENBQW9CLFNBQXBCLEdBQWdDLElBQWhDO0FBQ0EsS0FGRCxNQUVPO0FBQ04sTUFBQSxhQUFhLENBQUMsS0FBZCxDQUFvQixTQUFwQixhQUFtQyxhQUFhLENBQUMsWUFBakQ7QUFDQTtBQUNELEdBUEQ7QUFRQSxDQVhEO0FBWUE7O0FBRUE7O0FBQ0EsUUFBUSxDQUFDLGdCQUFULENBQTBCLGNBQTFCLEVBQTBDLE9BQTFDLENBQWtELFVBQUEsTUFBTSxFQUFJO0FBQzNELEVBQUEsTUFBTSxDQUFDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFVBQVUsQ0FBVixFQUFhO0FBQzdDLElBQUEsQ0FBQyxDQUFDLGNBQUY7QUFFQSxJQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQUssWUFBTCxDQUFrQixNQUFsQixDQUF2QixFQUFrRCxjQUFsRCxDQUFpRTtBQUNoRSxNQUFBLFFBQVEsRUFBRTtBQURzRCxLQUFqRTtBQUdBLEdBTkQ7QUFPQSxDQVJEO0FBU0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKmZhcSBhY2NvcmRpb24qL1xyXG5jb25zdCBmYXFBY2NvcmRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhcV9faXRlbScpO1xyXG5cclxuZmFxQWNjb3JkaW9ucy5mb3JFYWNoKChhY2NvcmRpb24pID0+IHtcclxuXHRjb25zdCBoaWRkZW5TZWN0aW9uID0gYWNjb3JkaW9uLnF1ZXJ5U2VsZWN0b3IoJy5mYXFfX2hpZGRlbicpO1xyXG5cclxuXHRhY2NvcmRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdGFjY29yZGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdmYXFfX2l0ZW1fYWN0aXZlJyk7XHJcblx0XHRpZiAoaGlkZGVuU2VjdGlvbi5zdHlsZS5tYXhIZWlnaHQpIHtcclxuXHRcdFx0aGlkZGVuU2VjdGlvbi5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aGlkZGVuU2VjdGlvbi5zdHlsZS5tYXhIZWlnaHQgPSBgJHtoaWRkZW5TZWN0aW9uLnNjcm9sbEhlaWdodH1weGA7XHJcblx0XHR9XHJcblx0fSk7XHJcbn0pO1xyXG4vKmZhcSBhY2NvcmRpb24qL1xyXG5cclxuLyphbmNob3IqL1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZePVwiI1wiXScpLmZvckVhY2goYW5jaG9yID0+IHtcclxuXHRhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSkuc2Nyb2xsSW50b1ZpZXcoe1xyXG5cdFx0XHRiZWhhdmlvcjogJ3Ntb290aCdcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59KTtcclxuLyphbmNob3IqLyJdfQ==
